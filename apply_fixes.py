import re

# --- 1. Fix main.js ---
with open('js/main.js', 'r', encoding='utf-8') as f:
    main_js = f.read()

# Remove toast setInterval
toast_regex = re.compile(r'// Tips rotativos \(Toast notification\)\s*setInterval\(\(\) => \{.*?\}, 30000\);', re.DOTALL)
if toast_regex.search(main_js):
    main_js = toast_regex.sub('', main_js)
    print('Toast setInterval removed from main.js')

# Update buildPDFViewer for lazy loading
old_viewer_start = 'function buildPDFViewer(m) {'
old_viewer_end = '    return html;\n}'
old_viewer_regex = re.compile(re.escape(old_viewer_start) + r'.*?' + re.escape(old_viewer_end), re.DOTALL)

new_viewer = '''function buildPDFViewer(m) {
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
}'''

if old_viewer_regex.search(main_js):
    main_js = old_viewer_regex.sub(new_viewer, main_js)
    print('buildPDFViewer updated for lazy loading')

# Inject load into accordion click
old_accordion_open = '''if(!content.classList.contains('open')) {
                content.classList.add('open');
                gsap.fromTo(content, {height:0, opacity:0}, {height:"auto", opacity:1, duration:0.4});'''

new_accordion_open = '''if(!content.classList.contains('open')) {
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

                gsap.fromTo(content, {height:0, opacity:0}, {height:"auto", opacity:1, duration:0.4});'''

if old_accordion_open in main_js:
    main_js = main_js.replace(old_accordion_open, new_accordion_open)
    print('Accordion click handler updated for lazy load')

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(main_js)

# --- 2. Fix index.html ---
with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Remove toast html
toast_html_regex = re.compile(r'<!-- TOAST -->\s*<div id="toast" class="toast">.*?</div>', re.DOTALL)
if toast_html_regex.search(html_content):
    html_content = toast_html_regex.sub('', html_content)
    print('Toast HTML removed from index.html')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

# --- 3. Fix styles.css ---
with open('css/styles.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

old_nav = '''/* Navegación */
nav {
    position: sticky;
    top: 0;'''

new_nav = '''/* Navegación */
nav {
    position: relative;'''

if old_nav in css_content:
    css_content = css_content.replace(old_nav, new_nav)
    print('Sticky nav disabled in styles.css')

with open('css/styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print('All requested fixes applied.')
