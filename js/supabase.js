// CONFIGURAR: Reemplaza con tus credenciales
const SUPABASE_URL = 'https://tymreardhaddraatuzup.supabase.co';     
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5bXJlYXJkaGFkZHJhYXR1enVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4OTQwNzIsImV4cCI6MjA5NDQ3MDA3Mn0.Gv6ePegWFjZXIVFXepdTdF6eNu81ffqhNqa77AZKlEs';     

window.supabaseClient = null;
if (window.supabase) {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

async function saveToSupabase(s, p, t, c, isFatal = false) {
    if(!window.supabaseClient) return;
    try {
        await window.supabaseClient.from('leaderboard').insert([{
            nombre: document.getElementById('student-name').value, score: s, pct: p, tiempo_segundos: t, avisos: c, anulado: isFatal
        }]);
        loadRanking();
    } catch(e) { console.warn("Supabase error", e); }
}

async function loadRanking() {
    if(!window.supabaseClient) {
        document.getElementById('ranking-body').innerHTML = `<tr><td colspan="6" class="text-center">Configura Supabase para ver el ranking global</td></tr>`;
        return;
    }
    try {
        const {data, error} = await window.supabaseClient.from('leaderboard').select('*').order('score', {ascending:false}).order('tiempo_segundos', {ascending:true}).limit(20);
        if(error) throw error;
        
        const b = document.getElementById('ranking-body');
        b.innerHTML = '';
        if(data.length === 0) { b.innerHTML = `<tr><td colspan="6" class="text-center">Sin registros aún. ¡Sé el primero!</td></tr>`; return; }
        
        data.forEach((r, i) => {
            const cl = r.anulado ? 'row-anulado' : (i < 3 ? `top-${i+1}` : '');
            const badge = r.anulado ? '<span style="color:var(--accent-red); font-size:0.65rem; border:1px solid var(--accent-red); padding:2px 4px; border-radius:4px; margin-left:6px; background:rgba(220,38,38,0.1);">ANULADO</span>' : '';
            const dt = new Date(r.created_at);
            const dateStr = dt.toLocaleDateString([], {day:'2-digit', month:'2-digit'});
            const timeStr = dt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            
            b.innerHTML += `<tr class="${cl}" style="${r.anulado ? 'opacity: 0.7;' : ''}">
                <td>${i+1}</td><td><strong>${r.nombre}</strong>${badge}</td>
                <td>${r.anulado ? '0' : r.score}</td><td>${r.anulado ? '0' : r.pct}%</td>
                <td class="tabular-nums">${Math.floor(r.tiempo_segundos/60)}:${(r.tiempo_segundos%60).toString().padStart(2,'0')}</td>
                <td><small>${dateStr} ${timeStr}</small></td>
            </tr>`;
        });
    } catch(e) {
        document.getElementById('ranking-body').innerHTML = `<tr><td colspan="6" class="text-center">Error al cargar ranking. Verifica la configuración.</td></tr>`;
    }
}
window.saveToSupabase = saveToSupabase;
window.loadRanking = loadRanking;

async function getQuestionsFromSupabase() {
    if(!window.supabaseClient) return [];
    try {
        const { data, error } = await window.supabaseClient.rpc('obtener_preguntas_aleatorias');
        if(error) throw error;
        return data;
    } catch(e) {
        console.error("Error fetching questions from Supabase, returning empty array", e);
        return [];
    }
}
window.getQuestionsFromSupabase = getQuestionsFromSupabase;

// ==========================================================================
// REAL-TIME PRESENCE (ACTIVE USERS TRACKER)
// ==========================================================================

window.presenceChannel = null;
let currentPresenceUser = {
    name: 'Invitado',
    isExamActive: false,
    onlineAt: new Date().toISOString()
};

function getAvatarColor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash % 360);
    return `hsl(${h}, 65%, 45%)`;
}

function initPresence(username) {
    if (!window.supabaseClient) {
        console.warn("Supabase client not initialized. Cannot start presence tracking.");
        return;
    }

    currentPresenceUser.name = username;
    
    // Crear o unirse al canal de presencia
    window.presenceChannel = window.supabaseClient.channel('presence-aspectos', {
        config: {
            presence: {
                key: username
            }
        }
    });

    window.presenceChannel
        .on('presence', { event: 'sync' }, () => {
            const newState = window.presenceChannel.presenceState();
            renderActiveUsers(newState);
        })
        .on('presence', { event: 'join' }, ({ key, newPresences }) => {
            // Opcional: Feedback visual o toast
        })
        .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
            // Opcional: Feedback visual o toast
        })
        .subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                await window.presenceChannel.track(currentPresenceUser);
            }
        });
}

async function updatePresenceStatus(newName, isExam = false) {
    if (!window.presenceChannel) return;
    
    // Si cambian de nombre en vivo, reiniciamos la sesión de estudio para el nuevo nombre
    if (currentPresenceUser.name !== newName) {
        resetSessionForName(newName);
    }

    currentPresenceUser.name = newName;
    currentPresenceUser.isExamActive = isExam;
    
    try {
        await window.presenceChannel.track(currentPresenceUser);
    } catch (e) {
        console.warn("Error tracking presence update", e);
    }
}

function renderActiveUsers(presenceState) {
    const listEl = document.getElementById('active-users-list');
    const countEl = document.getElementById('active-users-count');
    if (!listEl || !countEl) return;

    const users = [];
    Object.keys(presenceState).forEach(key => {
        const presences = presenceState[key];
        if (presences && presences.length > 0) {
            users.push(presences[0]);
        }
    });

    // Actualizar el contador en el widget flotante
    countEl.textContent = users.length;

    // Limpiar y redibujar lista
    listEl.innerHTML = '';
    
    if (users.length === 0) {
        listEl.innerHTML = `<div style="text-align:center; padding: 1.5rem 0; color:var(--text-secondary); font-size:0.85rem;">Nadie en línea aún.</div>`;
        return;
    }

    // Ordenar: En simulacro primero, luego por tiempo de conexión
    users.sort((a, b) => {
        if (a.isExamActive && !b.isExamActive) return -1;
        if (!a.isExamActive && b.isExamActive) return 1;
        return new Date(a.onlineAt) - new Date(b.onlineAt);
    });

    users.forEach(user => {
        const name = user.name || 'Estudiante Anónimo';
        const isExam = user.isExamActive;
        const initial = name.trim().charAt(0).toUpperCase() || '?';
        const avatarBg = getAvatarColor(name);
        
        const statusText = isExam ? '📝 En Simulacro' : '📖 Estudiando';
        const statusClass = isExam ? 'in-exam' : '';
        const isMe = (name === currentPresenceUser.name);

        listEl.innerHTML += `
            <div class="active-user-item ${isMe ? 'my-own-presence' : ''}">
                <div class="active-user-avatar" style="background-color: ${avatarBg};">
                    ${initial}
                </div>
                <div class="active-user-info">
                    <span class="active-user-name">${name}</span>
                    <span class="active-user-status ${statusClass}">
                        <span class="active-user-badge" style="background-color: ${isExam ? 'var(--accent-cyan)' : 'var(--accent-green)'}"></span>
                        ${statusText}
                    </span>
                </div>
            </div>
        `;
    });
}

// ==========================================================================
// SESSION STUDY TIME TRACKER (SUPABASE LOGS)
// ==========================================================================
let currentSessionId = null;
let sessionAccumulatedSeconds = 0;

async function startStudySession(username) {
    if (!window.supabaseClient) return;
    if (currentSessionId) return;

    try {
        const { data, error } = await window.supabaseClient
            .from('study_sessions')
            .insert([{ nombre: username, duracion_segundos: 0 }])
            .select();
        
        if (!error && data && data.length > 0) {
            currentSessionId = data[0].id;
            sessionAccumulatedSeconds = 0;
            console.log("Sesión de estudio iniciada para:", username);
        }
    } catch (e) {
        console.warn("Excepción al iniciar sesión de estudio", e);
    }
}

async function updateStudySession(seconds) {
    if (!window.supabaseClient || !currentSessionId) return;
    try {
        await window.supabaseClient
            .from('study_sessions')
            .update({ duracion_segundos: seconds, updated_at: new Date().toISOString() })
            .eq('id', currentSessionId);
    } catch (e) {
        console.warn("Excepción al actualizar tiempo de sesión", e);
    }
}

async function resetSessionForName(newName) {
    currentSessionId = null;
    sessionAccumulatedSeconds = 0;
    await startStudySession(newName);
}

// Registrar el intervalo en segundo plano cada 10 segundos
setInterval(() => {
    const savedName = localStorage.getItem('student-name');
    if (savedName && window.supabaseClient) {
        if (!currentSessionId) {
            startStudySession(savedName);
        } else {
            sessionAccumulatedSeconds += 10;
            updateStudySession(sessionAccumulatedSeconds);
        }
    }
}, 10000);

window.getAvatarColor = getAvatarColor;
window.initPresence = initPresence;
window.updatePresenceStatus = updatePresenceStatus;
window.renderActiveUsers = renderActiveUsers;
window.startStudySession = startStudySession;
window.resetSessionForName = resetSessionForName;

