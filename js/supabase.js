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

