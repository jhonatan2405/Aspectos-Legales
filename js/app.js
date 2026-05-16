let openModules = new Set();
let statsChart;

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupGSAP();
    setupTyped();
    startCountdown();
    setupNavDots();
    renderModules();
    setupFlashcards(); // from flashcards.js
    setupExamSystem(); // from exam.js
    setupStats();
    if(window.loadRanking) window.loadRanking(); // from supabase.js
    setupOverlays();
    
    

    // Hamburger Menu
    document.getElementById('hamburger').addEventListener('click', function() {
        document.getElementById('nav-links').classList.toggle('active');
        this.classList.toggle('is-active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav-links').classList.remove('active');
            document.getElementById('hamburger').classList.remove('is-active');
        });
    });
});

function initTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
    
    document.getElementById('btn-theme').addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateChartTheme(next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('icon-theme');
    if(theme === 'dark') {
        icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    } else {
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    }
}

function setupGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance with stagger
    gsap.fromTo('#hero h1', { opacity: 0, y: 60, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.2, ease: 'expo.out', delay: 0.1 });
    gsap.fromTo('#hero button', { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 1.5 });

    // Section scroll reveals with stagger on children
    gsap.utils.toArray('.gsap-anim').forEach(section => {
        gsap.fromTo(section, { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 82%' }
        });

        // Stagger cards inside the section
        const cards = section.querySelectorAll('.glass-card, .topic-card, .module-accordion');
        if (cards.length > 1) {
            gsap.fromTo(cards, { opacity: 0, y: 30 }, {
                opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
                scrollTrigger: { trigger: section, start: 'top 75%' }
            });
        }
    });

    // Active nav link tracking
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(s => observer.observe(s));
}

function setupTyped() {
    const text = "Examen: 28 de mayo · 3:00 PM";
    const el = document.getElementById('typed-text');
    if (!el) return;

    let cIdx = 0;
    let deleting = false;

    function tick() {
        if (!deleting) {
            el.textContent = text.substring(0, cIdx);
            cIdx++;
            if (cIdx > text.length) {
                deleting = true;
                setTimeout(tick, 2200);
                return;
            }
            setTimeout(tick, 80);
        } else {
            el.textContent = text.substring(0, cIdx);
            cIdx--;
            if (cIdx < 0) {
                deleting = false;
                cIdx = 0;
                setTimeout(tick, 600);
                return;
            }
            setTimeout(tick, 45);
        }
    }
    tick();
}

function startCountdown() {
    // Fecha objetivo: 28 de mayo 2026 a las 3:00 PM (hora local)
    const target = new Date('2026-05-28T15:00:00');
    const container = document.getElementById('countdown-container');
    if (!container) return;

    function update() {
        const now = new Date();
        let diff = target - now;
        if (diff <= 0) {
            // Examen en curso o ya pasó
            ['cd-days','cd-hours','cd-mins','cd-secs'].forEach(id => {
                const el = document.getElementById(id);
                if (el) { el.textContent = '00'; el.classList.add('pulse'); }
            });
            return;
        }
        const days  = Math.floor(diff / 86400000);
        diff %= 86400000;
        const hours = Math.floor(diff / 3600000);
        diff %= 3600000;
        const mins  = Math.floor(diff / 60000);
        const secs  = Math.floor((diff % 60000) / 1000);

        document.getElementById('cd-days').textContent  = String(days).padStart(2,'0');
        document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
        document.getElementById('cd-mins').textContent  = String(mins).padStart(2,'0');
        document.getElementById('cd-secs').textContent  = String(secs).padStart(2,'0');

        // Pulso cuando faltan menos de 2 días
        if (days < 2) {
            document.getElementById('cd-secs').classList.add('pulse');
        }
    }
    update();
    setInterval(update, 1000);
}

function setupNavDots() {
    const navDots = document.getElementById('nav-dots');
    if (!navDots) return;
    const dots = navDots.querySelectorAll('.nav-dot');

    // Mostrar/ocultar según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navDots.classList.add('visible');
        } else {
            navDots.classList.remove('visible');
        }
    }, { passive: true });

    // Resaltar dot activo según la sección visible
    const sections = document.querySelectorAll('section[id]');
    const dotObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                dots.forEach(d => {
                    d.classList.toggle('active', d.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.35 });
    sections.forEach(s => dotObserver.observe(s));
}


function buildPDFViewer(m) {
    let html = '';
    const isLocal = m.file && !m.file.startsWith('http');
    if (isLocal) {
        html += `<div class="pdf-lazy" data-file="${m.file}" style="margin-bottom: 1rem; text-align:center;"><span style="color:var(--text-secondary);">Cargando documento...</span></div>`;
    }
    const isLocal2 = m.file2 && !m.file2.startsWith('http');
    if (isLocal2) {
        html += `<div class="pdf-lazy" data-file="${m.file2}" style="margin-bottom: 1rem; text-align:center;"><span style="color:var(--text-secondary);">Cargando segundo documento...</span></div>`;
    }
    return html;
}

function renderModules() {
    const container = document.getElementById('accordion-container');
    modulesData.forEach(m => {
        const html = `<div class="module-accordion" id="mod-${m.id}"><div class="accordion-header" style="cursor:pointer;"><span>${m.title}</span><div class="header-actions"><button class="icon-btn btn-bm" data-id="${m.id}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button><svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition:transform 0.3s;"><polyline points="6 9 12 15 18 9"/></svg></div></div><div class="accordion-content searchable-text">${m.content}<div class="document-viewer" style="margin-top:2rem;"><h4 style="margin-bottom:1rem;">Material Adjunto</h4>${buildPDFViewer(m)}<div style="text-align:center; margin-top:1rem; display:flex; flex-direction:column; gap:0.5rem; align-items:center;">${m.link_web ? `<a href="${m.link_web}" target="_blank" class="btn-primary" style="padding: 0.5rem 1.5rem; font-size:0.9rem; text-decoration:none; border-radius:8px; display:inline-block; margin:0;">Abrir Documento Original en Pestaña Nueva</a>` : ''}${m.link_extra ? `<a href="${m.link_extra}" target="_blank" class="btn-primary" style="padding: 0.5rem 1.5rem; font-size:0.9rem; text-decoration:none; border-radius:8px; background:var(--accent-violet); display:inline-block; margin:0;">Consultar Normativa Extra</a>` : ''}</div></div></div></div>`;
        container.insertAdjacentHTML('beforeend', html);
    });

    document.querySelectorAll('.accordion-header').forEach(h => {
        h.addEventListener('click', (e) => {
            if(e.target.closest('.btn-bm')) return;
            const content = h.nextElementSibling;
            if(!content.classList.contains('open')) {
                content.classList.add('open');
                
                // Lazy load de los PDFs al abrir el acordeón para evitar congelamiento
                const lazyPdfs = content.querySelectorAll('.pdf-lazy');
                lazyPdfs.forEach(container => {
                    const file = container.getAttribute('data-file');
                    if(file && !container.hasAttribute('data-loaded')) {
                        container.setAttribute('data-loaded', 'true');
                        container.innerHTML = `<object data="${file}" type="application/pdf" width="100%" height="520px" style="border:1px solid var(--border); border-radius:8px; display:block;"><embed src="${file}" type="application/pdf" width="100%" height="520px" style="border:1px solid var(--border); border-radius:8px;"><p style="text-align:center; padding:2rem;"><a href="${file}" target="_blank" style="color:var(--accent-blue);">Ver documento PDF</a></p></embed></object>`;
                    }
                });

                gsap.fromTo(content, {height:0, opacity:0}, {height:"auto", opacity:1, duration:0.4});
                h.querySelector('.chevron').style.transform = "rotate(180deg)";
                openModules.add(h.parentElement.id);
            } else {
                gsap.to(content, {height:0, opacity:0, duration:0.3, onComplete:()=>content.classList.remove('open')});
                h.querySelector('.chevron').style.transform = "rotate(0deg)";
            }
            document.getElementById('progreso-text').textContent = `Tu progreso: ${Math.round((openModules.size / 5)*100)}%`;
        });
    });
}

function setupStats() {
    const hist = JSON.parse(localStorage.getItem('examHist') || '[]');
    const b = document.getElementById('history-body');
    b.innerHTML = '';
    if(hist.length === 0) return;
    
    let sum = 0, best = 0;
    hist.forEach(h => {
        sum += h.p; if(h.p > best) best = h.p;
        const badge = h.f ? '<span style="color:var(--accent-red); font-size:0.65rem; border:1px solid var(--accent-red); padding:2px 4px; border-radius:4px; margin-left:6px; background:rgba(220,38,38,0.1);">ANULADO</span>' : '';
        b.innerHTML += `<tr style="${h.f ? 'opacity: 0.7;' : ''}"><td>${h.date}</td><td>${h.f ? '0' : h.s}/20 ${badge}</td><td>${h.f ? '0' : h.p}%</td><td class="tabular-nums">${Math.floor(h.t/60)}:${(h.t%60).toString().padStart(2,'0')}</td></tr>`;
    });
    
    document.getElementById('stat-avg').textContent = Math.round(sum/hist.length) + "%";
    document.getElementById('stat-best').textContent = best + "%";
    document.getElementById('stat-count').textContent = hist.length;
    
    const ctx = document.getElementById('statsChart').getContext('2d');
    if(statsChart) statsChart.destroy();
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    statsChart = new Chart(ctx, {
        type: 'line',
        data: { labels: hist.map((_, i) => `Intento ${i+1}`), datasets: [{ label: 'Evolución (%)', data: hist.map(h => h.p), borderColor: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.2)', fill: true, tension: 0.4 }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { max: 100 } } }
    });
    updateChartTheme(isDark ? 'dark' : 'light');
}

window.saveResultLocally = function(s, p, t, c, isFatal = false) {
    const name = document.getElementById('student-name').value;
    const dt = new Date();
    const dateStr = dt.toLocaleDateString([], {day:'2-digit', month:'2-digit'}) + ' ' + dt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const hist = JSON.parse(localStorage.getItem('examHist') || '[]');
    hist.push({ date: dateStr, name, s, p, t, c, f: isFatal });
    if(hist.length > 10) hist.shift();
    localStorage.setItem('examHist', JSON.stringify(hist));
    setupStats();
}

function updateChartTheme(theme) {
    if(!statsChart) return;
    const isDark = theme === 'dark';
    statsChart.options.scales.y.grid.color = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    statsChart.options.scales.y.ticks.color = isDark ? '#cbd5e1' : '#475569';
    statsChart.options.scales.x.ticks.color = isDark ? '#cbd5e1' : '#475569';
    statsChart.options.plugins.legend.labels.color = isDark ? '#cbd5e1' : '#475569';
    statsChart.update();
}

function setupOverlays() {

    document.getElementById('btn-clear-history').addEventListener('click', () => document.getElementById('confirm-modal').classList.add('active'));
    document.getElementById('btn-confirm-no').addEventListener('click', () => document.getElementById('confirm-modal').classList.remove('active'));
    document.getElementById('btn-confirm-yes').addEventListener('click', () => {
        localStorage.removeItem('examHist');
        document.getElementById('confirm-modal').classList.remove('active');
        document.getElementById('history-body').innerHTML = '';
        if(statsChart) statsChart.destroy();
    });
}
window.openAndScroll = function(id) {
    const mod = document.getElementById(id);
    if(!mod.querySelector('.accordion-content').classList.contains('open')) mod.querySelector('.accordion-header').click();
    mod.scrollIntoView({behavior:'smooth'});
};
