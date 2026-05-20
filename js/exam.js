let examIsActive = false, examQ = 0, examTime = 3600, examInt, examAns = [], cheatCount = 0;
let currentExamData = [];

function setupExamSystem() {
    // Escuchador para el botón de reanudar examen en la advertencia (Gesture)
    const resumeBtn = document.getElementById('btn-resume-exam');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            const warn = document.getElementById('cheat-warn-overlay');
            if (warn) warn.classList.remove('active');
            
            // Retornar a pantalla completa de manera segura mediante la interacción del usuario
            if (examIsActive && !document.fullscreenElement) {
                try { document.documentElement.requestFullscreen(); } catch(e) {}
            }
            
            setTimeout(() => {
                antiCheatLock = false; // liberar el bloqueo después de la transición
            }, 1000);
        });
    }

    document.getElementById('btn-start-exam').addEventListener('click', async () => {
        const name = document.getElementById('student-name').value.trim();
        if(!name) { alert('Ingresa tu nombre'); return; }
        
        const btn = document.getElementById('btn-start-exam');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<span>Cargando preguntas...</span>';

        let questions = [];
        if (window.getQuestionsFromSupabase) {
            questions = await window.getQuestionsFromSupabase();
        }

        if (questions && questions.length > 0) {
            currentExamData = questions;
        } else {
            console.warn("Falling back to local questions pool.");
            currentExamData = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 20);
        }

        btn.disabled = false;
        btn.innerHTML = originalText;

        if (currentExamData.length === 0) {
            alert("No se pudieron cargar las preguntas del examen. Por favor, verifica tu conexión.");
            return;
        }

        try{ document.documentElement.requestFullscreen(); }catch(e){}
        
        examIsActive = true; cheatCount = 0; examQ = 0; examAns = []; examTime = 3600;
        document.body.classList.add('body-exam-active');
        if (window.updatePresenceStatus) {
            window.updatePresenceStatus(name, true);
        }
        
        const tracker = document.getElementById('exam-cheat-tracker');
        const trackerText = document.getElementById('exam-cheat-tracker-text');
        if (tracker && trackerText) {
            tracker.style.borderColor = 'var(--accent-cyan)';
            tracker.style.background = 'rgba(6, 182, 212, 0.08)';
            trackerText.innerHTML = `Faltas cometidas: <strong>0 de 3</strong>. Recuerda que no puedes hacer trampa, salir de la pestaña ni abandonar la pantalla completa.`;
        }
        
        document.getElementById('exam-welcome').classList.add('hidden');
        document.getElementById('exam-active').classList.remove('hidden');
        
        // Hide all other sections and navs to focus on exam
        document.querySelectorAll('section:not(#simulacro), nav, header, footer').forEach(el => el.classList.add('hidden'));
        
        fullscreenMonitoringActive = false;
        setTimeout(() => {
            if (examIsActive) fullscreenMonitoringActive = true;
        }, 1500);

        // Only register these once, guarded by examIsActive flag
        document.addEventListener('visibilitychange', antiCheat);
        document.addEventListener('contextmenu', blockContext);
        document.addEventListener('keydown', blockKeys);
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        // Use a small delay before adding blur to avoid immediate trigger
        setTimeout(() => {
            if(examIsActive) window.addEventListener('blur', antiCheat);
        }, 800);

        examInt = setInterval(() => {
            examTime--;
            const m = Math.floor(examTime/60).toString().padStart(2,'0');
            const s = (examTime%60).toString().padStart(2,'0');
            const timerEl = document.getElementById('exam-timer');
            timerEl.textContent = `${m}:${s}`;
            
            if(examTime <= 600) timerEl.style.color = "var(--accent-red)";
            if(examTime <= 0) finishExam();
        }, 1000);
        
        renderExamQ();
    });

    document.getElementById('btn-next-q').addEventListener('click', () => {
        examAns.push(selectedOpt);
        examQ++;
        if(examQ >= currentExamData.length) finishExam();
        else renderExamQ();
    });

    // Botón de reintentar
    document.getElementById('btn-retry').addEventListener('click', () => {
        window.location.reload();
    });

    // Botón de compartir
    document.getElementById('btn-share').addEventListener('click', () => {
        const scoreText = document.getElementById('exam-score').textContent;
        const shareText = `¡Acabo de obtener ${scoreText} en el simulacro de Aspectos Legales! ¿Puedes superarme?`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Mi resultado del Simulacro',
                text: shareText,
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareText + " " + window.location.href);
            alert("¡Resultado copiado al portapapeles!");
        }
    });
}

let antiCheatLock = false;
let fullscreenMonitoringActive = false;

function triggerAntiCheatWarning(reason) {
    if(!examIsActive) return;
    if(antiCheatLock) return; // prevent duplicate triggers
    antiCheatLock = true;
    cheatCount++;
    
    const tracker = document.getElementById('exam-cheat-tracker');
    const trackerText = document.getElementById('exam-cheat-tracker-text');
    if (tracker && trackerText) {
        if (cheatCount === 1) {
            tracker.style.borderColor = 'var(--accent-amber)';
            tracker.style.background = 'rgba(245, 158, 11, 0.08)';
        } else if (cheatCount >= 2) {
            tracker.style.borderColor = 'var(--accent-red)';
            tracker.style.background = 'rgba(239, 68, 68, 0.08)';
        }
        trackerText.innerHTML = `Faltas cometidas: <strong style="color: ${cheatCount >= 2 ? 'var(--accent-red)' : 'var(--accent-amber)'}">${cheatCount} de 3</strong>. Al llegar a 3, el examen será anulado inmediatamente.`;
    }
    if(cheatCount >= 3) {
        document.getElementById('cheat-fatal-overlay').classList.add('active');
        antiCheatLock = false;
    } else {
        const warn = document.getElementById('cheat-warn-overlay');
        warn.classList.add('active');
        document.getElementById('cheat-warn-msg').textContent = `${reason} Advertencia ${cheatCount}/3`;
        let t = 5;
        document.getElementById('cheat-countdown').textContent = t;
        
        const resumeBtn = document.getElementById('btn-resume-exam');
        const resumeText = document.getElementById('btn-resume-text');
        if (resumeBtn && resumeText) {
            resumeBtn.disabled = true;
            resumeBtn.style.opacity = '0.5';
            resumeBtn.style.pointerEvents = 'none';
            resumeBtn.style.cursor = 'not-allowed';
            resumeText.textContent = `Espera 5s...`;
        }
        
        const int = setInterval(() => {
            t--;
            document.getElementById('cheat-countdown').textContent = t;
            if (resumeText) resumeText.textContent = `Espera ${t}s...`;
            
            if(t<=0) {
                clearInterval(int);
                if (resumeBtn && resumeText) {
                    resumeBtn.disabled = false;
                    resumeBtn.style.opacity = '1';
                    resumeBtn.style.pointerEvents = 'auto';
                    resumeBtn.style.cursor = 'pointer';
                    resumeText.textContent = `Entendido y Volver al Examen`;
                }
            }
        }, 1000);
    }
}

function antiCheat() {
    if(!examIsActive) return;
    if(document.visibilityState === 'hidden' || !document.hasFocus()) {
        triggerAntiCheatWarning("Saliste de la ventana.");
    }
}

function handleFullscreenChange() {
    if (!examIsActive || !fullscreenMonitoringActive) return;
    if (!document.fullscreenElement) {
        triggerAntiCheatWarning("Saliste de pantalla completa.");
    }
}
function blockContext(e) { if(examIsActive) e.preventDefault(); }
function blockKeys(e) { 
    if(!examIsActive) return;
    if(e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key==='I'||e.key==='J')) || (e.ctrlKey && e.key==='U')) e.preventDefault(); 
}

let selectedOpt = null;
function renderExamQ() {
    const q = currentExamData[examQ];
    document.getElementById('exam-q-num').textContent = `Pregunta ${examQ+1} de ${currentExamData.length}`;
    document.getElementById('exam-bar').style.width = ((examQ/currentExamData.length)*100) + "%";
    document.getElementById('exam-q-text').textContent = q.q;
    
    const opts = document.getElementById('exam-options');
    opts.innerHTML = '';
    q.opts.forEach((opt, idx) => {
        const b = document.createElement('button');
        b.className = 'exam-option';
        b.innerHTML = `<strong>${String.fromCharCode(97+idx)})</strong> ${opt}`;
        b.onclick = () => {
            selectedOpt = idx;
            Array.from(opts.children).forEach(el=>el.classList.remove('selected'));
            b.classList.add('selected');
            const nq = document.getElementById('btn-next-q');
            nq.disabled = false;
            nq.style.opacity = '1';
            nq.style.pointerEvents = 'auto';
            nq.style.cursor = 'pointer';
        };
        opts.appendChild(b);
    });
    const nq = document.getElementById('btn-next-q');
    nq.disabled = true;
    nq.style.opacity = '0.45';
    nq.style.pointerEvents = 'none';
    nq.style.cursor = 'not-allowed';
    selectedOpt = null;
}

window.finishExam = function(isFatal = false) {
    examIsActive = false;
    antiCheatLock = false;
    fullscreenMonitoringActive = false;
    clearInterval(examInt);
    
    document.body.classList.remove('body-exam-active');
    const savedName = localStorage.getItem('student-name') || 'Estudiante';
    if (window.updatePresenceStatus) {
        window.updatePresenceStatus(savedName, false);
    }
    document.removeEventListener('visibilitychange', antiCheat);
    window.removeEventListener('blur', antiCheat);
    document.removeEventListener('contextmenu', blockContext);
    document.removeEventListener('keydown', blockKeys);
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
    
    try{ document.exitFullscreen(); }catch(e){}
    
    document.getElementById('exam-active').classList.add('hidden');
    document.getElementById('exam-results').classList.remove('hidden');
    
    // Restore all sections after exam
    document.querySelectorAll('section:not(#simulacro), nav, header, footer').forEach(el => el.classList.remove('hidden'));
    
    setTimeout(() => {
        const resEl = document.getElementById('exam-results');
        if (resEl) {
            resEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 200);
    
    let score = 0;
    if(!isFatal) {
        examAns.forEach((a, i) => { if(a === currentExamData[i].a) score++; });
    }
    
    const pct = Math.round((score/currentExamData.length)*100);
    const scoreEl = document.getElementById('exam-score');
    scoreEl.textContent = `${score}/${currentExamData.length} (${pct}%)`;
    
    if(isFatal) {
        scoreEl.style.color = "var(--accent-red)";
        document.getElementById('exam-res-msg').textContent = "Examen anulado por trampas.";
    } else if(pct >= 70) { 
        scoreEl.style.color = "var(--accent-green)"; 
        document.getElementById('exam-res-msg').textContent = "¡Excelente trabajo!";
        throwConfetti(); 
    }
    else if(pct >= 50) {
        scoreEl.style.color = "var(--accent-amber)";
        document.getElementById('exam-res-msg').textContent = "Puedes mejorar.";
    }
    else {
        scoreEl.style.color = "var(--accent-red)";
        document.getElementById('exam-res-msg').textContent = "Necesitas estudiar más.";
    }
    
    const tbody = document.querySelector('#review-table tbody');
    tbody.innerHTML = '';
    currentExamData.forEach((q, i) => {
        const uAns = examAns[i] !== undefined ? `${String.fromCharCode(97+examAns[i])}) ${q.opts[examAns[i]]}` : "N/A";
        const cAns = `${String.fromCharCode(97+q.a)}) ${q.opts[q.a]}`;
        const isC = examAns[i] === q.a;
        tbody.innerHTML += `
            <tr>
                <td><small>${q.q}</small></td>
                <td style="color:var(--accent-${isC?'green':'red'})"><small>${uAns}</small></td>
                <td><small>${cAns}</small></td>
                <td><small style="color:var(--text-secondary)">${q.exp}</small></td>
            </tr>
        `;
    });
    
    saveResultLocally(score, pct, 3600-examTime, cheatCount, isFatal);
    if(window.saveToSupabase) saveToSupabase(score, pct, 3600-examTime, cheatCount, isFatal);
}

function throwConfetti() {
    for(let i=0; i<60; i++) {
        const d = document.createElement('div');
        d.style.cssText = `position:fixed; top:-10px; width:8px; height:8px; background:${['#10b981','#2563eb','#eab308', '#0ea5e9'][Math.floor(Math.random()*4)]}; z-index:9999; border-radius:2px;`;
        d.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(d);
        gsap.to(d, {y: window.innerHeight+20, rotation: Math.random()*720, duration: Math.random()*2+2, ease:"power1.in", onComplete:()=>d.remove()});
    }
}
window.setupExamSystem = setupExamSystem;
