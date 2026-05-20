const modulesData = [
    {
        id: 'A', title: 'Módulo A: Ética y Moral',
        topics: [
            {
                title: '¿Qué es la Ética?',
                content: `
                    <p>La ética es una rama de la filosofía que estudia el comportamiento humano y analiza cuáles acciones son correctas o incorrectas. Su propósito es orientar a las personas para actuar de manera responsable, justa y correcta.</p>
                    <p>La ética no solo se enfoca en las acciones, sino también en las intenciones, las consecuencias y los valores. Proviene del griego <em>ethos</em> ("carácter" o "modo de ser").</p>
                    <h4 style="margin-top:1rem;">Preguntas clave:</h4>
                    <ul style="margin-left:1.5rem; margin-bottom:1rem;">
                        <li>¿Qué es lo correcto?</li>
                        <li>¿Qué significa actuar bien?</li>
                        <li>¿Qué responsabilidades tiene un profesional?</li>
                    </ul>
                    <div class="study-tip">
                        <strong>Importancia:</strong> Mejora la convivencia, guía decisiones difíciles, evita injusticias y protege la dignidad humana.
                    </div>
                `
            },
            {
                title: 'Tipos de Ética',
                content: `
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:1rem;">
                        <div class="glass-card" style="padding:1rem;">
                            <strong style="color:var(--accent-cyan);">Ética Personal</strong>
                            <p style="font-size:0.85rem; margin-top:0.5rem;">Guía las decisiones individuales según valores propios. <br><em>Ej: No copiar en un examen aunque nadie vigile.</em></p>
                        </div>
                        <div class="glass-card" style="padding:1rem;">
                            <strong style="color:var(--accent-violet);">Ética Profesional</strong>
                            <p style="font-size:0.85rem; margin-top:0.5rem;">Aplicación de principios en una profesión. Busca honestidad, transparencia y respeto. <br><em>Ej: Un ingeniero no aprueba una obra insegura.</em></p>
                        </div>
                        <div class="glass-card" style="padding:1rem;">
                            <strong style="color:var(--accent-blue);">Ética Social</strong>
                            <p style="font-size:0.85rem; margin-top:0.5rem;">Comportamiento adecuado en sociedad y convivencia. <br><em>Ej: Respetar normas de tránsito.</em></p>
                        </div>
                    </div>
                `
            },
            {
                title: '¿Qué es la Moral?',
                content: `
                    <p>La moral es el conjunto de normas, costumbres, creencias y valores que una sociedad considera correctos o incorrectos.</p>
                    <p>Se aprende desde pequeños a través de la familia, la escuela, la cultura, la religión y la sociedad. Influye en la forma de convivir diariamente.</p>
                    <h4 style="margin-top:1rem;">Ejemplos de normas morales:</h4>
                    <ul class="value-grid">
                        <li>🚫 No mentir</li>
                        <li>🚫 No robar</li>
                        <li>🤝 Ayudar a quien lo necesita</li>
                        <li>📜 Cumplir promesas</li>
                        <li>🙏 Respetar a los demás</li>
                    </ul>
                `
            },
            {
                title: 'Diferencias y Relación',
                content: `
                    <div class="table-scroll">
                        <table class="glass-table">
                            <thead><tr><th>Ética</th><th>Moral</th></tr></thead>
                            <tbody>
                                <tr><td>Reflexión filosófica</td><td>Normas y costumbres</td></tr>
                                <tr><td>Analiza qué es correcto</td><td>Indica cómo actuar</td></tr>
                                <tr><td>Es teórica</td><td>Es práctica</td></tr>
                                <tr><td>Cuestiona normas</td><td>Sigue reglas aceptadas</td></tr>
                                <tr><td>Busca justificar acciones</td><td>Busca orientar conductas</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="highlight-cyan" style="margin-top:1rem;">
                        <strong>Relación:</strong> La ética analiza y cuestiona las normas morales, mientras que la moral las aplica. La ética ayuda a mejorar la moral de una sociedad.
                    </div>
                `
            },
            {
                title: 'Valores Fundamentales',
                content: `
                    <ul class="value-grid">
                        <li>✨ <strong>Honestidad:</strong> Sinceridad y verdad.</li>
                        <li>✨ <strong>Responsabilidad:</strong> Asumir consecuencias.</li>
                        <li>✨ <strong>Integridad:</strong> Actuar bien incluso sin ser visto.</li>
                        <li>✨ <strong>Respeto:</strong> Reconocer valores y derechos ajenos.</li>
                        <li>✨ <strong>Empatía:</strong> Comprender sentimientos ajenos.</li>
                        <li>✨ <strong>Solidaridad:</strong> Buscar el bienestar común.</li>
                        <li>✨ <strong>Perseverancia:</strong> Esfuerzo constante.</li>
                        <li>✨ <strong>Prudencia:</strong> Pensar antes de actuar.</li>
                        <li>✨ <strong>Humildad:</strong> Reconocer errores y aprender.</li>
                    </ul>
                `
            },
            {
                title: 'Dilemas Éticos',
                content: `
                    <p>Ocurre cuando se debe escoger entre dos decisiones difíciles donde hay conflictos de valores y no siempre hay soluciones perfectas.</p>
                    <div class="highlight-cyan">
                        <strong>Ejemplo del Ingeniero:</strong> Descubre materiales defectuosos.
                        <br><em>Opciones:</em> Guardar silencio o informar y retrasar.
                        <br><em>Decisión Ética:</em> Reportar para proteger vidas. La ética profesional prioriza la seguridad pública y el bienestar social.
                    </div>
                `
            },
            {
                title: 'Importancia en Ingeniería',
                content: `
                    <p>La ingeniería impacta directamente la vida humana, la infraestructura, la seguridad y el medio ambiente.</p>
                    <div class="study-tip" style="border-color:var(--accent-red); background:rgba(220,38,38,0.1);">
                        <strong>Consecuencias de malas decisiones:</strong> Accidentes, daños económicos, contaminación y pérdidas humanas. Un ingeniero debe actuar siempre con responsabilidad.
                    </div>
                `
            }
        ],
        file: 'contenido/1. Ética y Moral.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/1.%20E%CC%81tica%20y%20Moral.pdf?isCourseFile=true'
    },
    {
        id: 'B', title: 'Módulo B: Código de Ética y Ley 842 de 2003',
        topics: [
            {
                title: 'Código de Ética',
                content: `
                    <p>Conjunto de normas y principios que orientan el comportamiento correcto. Busca guiar decisiones, promover responsabilidad y mantener el prestigio profesional.</p>
                    <p>En ingeniería, garantiza que los proyectos sean seguros y responsables.</p>
                `
            },
            {
                title: 'Ley 842 de 2003',
                content: `
                    <p>Ley colombiana que regula el ejercicio de la ingeniería y profesiones afines.</p>
                    <h4 style="margin-top:1rem;">Objetivos principales:</h4>
                    <ul class="value-grid">
                        <li>🛡️ Proteger a la sociedad</li>
                        <li>🎓 Garantizar idoneidad</li>
                        <li>🚫 Evitar ejercicio ilegal</li>
                        <li>📜 Regular responsabilidades</li>
                    </ul>
                `
            },
            {
                title: 'Base Constitucional',
                content: `
                    <div class="highlight-cyan">
                        <strong>Artículo 26 CP:</strong> Libertad de escoger profesión. El Estado puede exigir títulos de idoneidad. La ingeniería requiere vigilancia por el riesgo social que implica.
                    </div>
                    <h4 style="margin-top:1rem;">Historia de la Reglamentación:</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem;">
                        <li>🏛️ <strong>1936:</strong> Acto Legislativo 1 (Permitió reglamentar).</li>
                        <li>📜 <strong>1937:</strong> Ley 94 (Primera ley regulatoria).</li>
                        <li>✅ <strong>2003:</strong> Ley 842 (Norma actual vigente).</li>
                    </ul>
                `
            },
            {
                title: 'Principios Éticos',
                content: `
                    <p>Principios fundamentales que todo ingeniero debe seguir:</p>
                    <ul class="value-grid">
                        <li>✨ Verdad y Honestidad</li>
                        <li>🌍 Responsabilidad Social</li>
                        <li>🎓 Competencia Profesional</li>
                        <li>🔒 Confidencialidad</li>
                        <li>🤝 Lealtad Profesional</li>
                    </ul>
                `
            },
            {
                title: 'Estructura y Deberes',
                content: `
                    <div class="table-scroll">
                        <table class="glass-table">
                            <thead><tr><th>Título</th><th>Contenido</th></tr></thead>
                            <tbody>
                                <tr><td>Título I</td><td>Generalidades</td></tr>
                                <tr><td>Título II</td><td>Ejercicio profesional</td></tr>
                                <tr><td>Título III</td><td>COPNIA</td></tr>
                                <tr><td>Título IV</td><td>Código de Ética</td></tr>
                                <tr><td>Título V</td><td>Régimen disciplinario</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="highlight-cyan" style="margin-top:1rem;">
                        <strong>Art. 39 Literal C:</strong> El ingeniero debe "Dedicar toda su aptitud y atender con la mayor diligencia y probidad los asuntos encargados por su cliente."
                    </p>
                `
            }
        ],
        file: 'contenido/2. Código de Ética profesional.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/2.%20Co%CC%81digo%20de%20E%CC%81tica%20profesional.pdf?isCourseFile=true',
        link_extra: 'https://www.copnia.gov.co/nuestra-entidad/normatividad/ley-842-de-2003'
    },
    {
        id: 'C', title: 'Módulo C: COPNIA y Régimen Disciplinario',
        topics: [
            {
                title: '¿Qué es el COPNIA?',
                content: `
                    <p><strong>Consejo Profesional Nacional de Ingeniería.</strong> Es la entidad encargada de vigilar y controlar el ejercicio profesional en Colombia.</p>
                    <h4 style="margin-top:1rem;">Funciones:</h4>
                    <ul style="margin-left:1.5rem;">
                        <li>Registrar ingenieros y expedir matrículas.</li>
                        <li>Vigilar el comportamiento ético.</li>
                        <li>Investigar faltas y aplicar sanciones.</li>
                        <li>Combatir el ejercicio ilegal.</li>
                    </ul>
                `
            },
            {
                title: 'Vigilancia y Ejercicio Ilegal',
                content: `
                    <p>La vigilancia existe por el alto impacto social. Errores pueden causar colapsos, accidentes o contaminación.</p>
                    <div class="highlight-red">
                        <strong>Ejercicio Ilegal:</strong> Ejerce sin matrícula, usa títulos falsos o incumple normas.
                        <br><em>Consecuencias:</em> Riesgo social, problemas legales, sanciones económicas y posibles delitos penales.
                    </div>
                `
            },
            {
                title: 'Régimen Disciplinario',
                content: `
                    <p>Conjunto de normas que sancionan faltas profesionales para proteger a la sociedad y garantizar calidad.</p>
                    <h4 style="margin-top:1rem;">Sanciones:</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem;">
                        <li>📢 <strong>Amonestación Escrita:</strong> Llamado formal.</li>
                        <li>⏳ <strong>Suspensión:</strong> Prohibición temporal (hasta 5 años).</li>
                        <li>🚫 <strong>Cancelación de Matrícula:</strong> Pérdida definitiva.</li>
                    </ul>
                    <div class="study-tip" style="margin-top:1rem;">
                        <strong>Falta Gravísima:</strong> Fraude, corrupción, poner vidas en peligro. Sanción: Cancelación definitiva.
                    </div>
                `
            }
        ],
        file: 'contenido/3. COPNIA y LEY.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/3.%20COPNIA%20y%20LEY.pdf?isCourseFile=true'
    },
    {
        id: 'D', title: 'Módulo D: Protección de Datos',
        topics: [
            {
                title: 'Datos Personales',
                content: `
                    <p>Informaciones que identifican a una persona (Nombre, cédula, teléfono, correo, datos financieros).</p>
                    <div class="study-tip">
                        <strong>Importancia:</strong> Protege la privacidad, evita fraudes, impide uso indebido y garantiza seguridad.
                    </div>
                `
            },
            {
                title: 'Leyes de Protección',
                content: `
                    <p><strong>Ley 1581 de 2012:</strong> Regula protección de datos generales. Vigilada por la <strong>SIC</strong>.</p>
                    <h4 style="margin-top:0.5rem;">Principios:</h4>
                    <p style="font-size:0.85rem;">Legalidad, Finalidad, Libertad (Autorización), Seguridad y Confidencialidad.</p>
                    <p style="margin-top:1rem;"><strong>Ley 1266 de 2008 (Habeas Data Financiero):</strong> Regula historial crediticio y bancario. Vigilada por la <strong>SuperFinanciera</strong>.</p>
                `
            },
            {
                title: 'Derechos del Titular',
                content: `
                    <p>El titular de los datos tiene derecho a:</p>
                    <ul class="value-grid">
                        <li>🔍 Conocer datos almacenados</li>
                        <li>✏️ Corregir e informar</li>
                        <li>🔄 Actualizar información</li>
                        <li>🗑️ Solicitar eliminación</li>
                        <li>🚫 Revocar autorización</li>
                    </ul>
                `
            },
            {
                title: 'Caso Claro Colombia',
                content: `
                    <div class="highlight-cyan">
                        <strong>Caso Claro:</strong> Sanción de la SIC por usar datos en campaña sin autorización válida.
                        <br>Demuestra la importancia vital de pedir autorización, proteger la información y cumplir normas.
                    </div>
                `
            }
        ],
        file: 'contenido/Ley_1581_de_2012.pdf',
        file2: 'contenido/Ley_1266_de_2008.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/4.%20Ley%201581%20de%202012%20-%20Ley%201266%20de%202008.pdf?isCourseFile=true'
    },
    {
        id: 'E', title: 'Módulo E: Propiedad Intelectual y Contratos Tecnológicos',
        topics: [
            {
                title: 'Propiedad Intelectual',
                content: `
                    <p>Sistema jurídico que protege creaciones humanas para reconocer autores, incentivar innovación y evitar plagio.</p>
                    <h4 style="margin-top:1rem;">Derecho de Autor:</h4>
                    <p style="font-size:0.9rem;">Protege libros, música, software, videos y diseños.</p>
                    <div style="display:flex; gap:1rem; margin-top:1rem;">
                        <div class="glass-card" style="flex:1; padding:1rem;">
                            <strong>Morales:</strong> Intransferibles, permanentes. Reconocen autoría.
                        </div>
                        <div class="glass-card" style="flex:1; padding:1rem;">
                            <strong>Patrimoniales:</strong> Explotación económica. Pueden venderse o transferirse.
                        </div>
                    </div>
                    <p style="margin-top:1rem; font-size:0.85rem;"><strong>Derechos Conexos:</strong> Protegen intérpretes, productores y emisoras.</p>
                `
            },
            {
                title: 'Contratos Tecnológicos',
                content: `
                    <h4 style="margin-bottom:0.5rem;">INCOTERMS (Comercio):</h4>
                    <p style="font-size:0.85rem; margin-bottom:1rem;">EXW (Fábrica), FOB (Puerto), CIF (Seguro/Transporte), DDP (Impuestos pagos).</p>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                        <div class="glass-card" style="padding:1rem;">
                            <strong>Leasing:</strong> Alquiler con opción de compra (Equipos, maquinaria).
                        </div>
                        <div class="glass-card" style="padding:1rem;">
                            <strong>Renting:</strong> Alquiler sin opción de compra.
                        </div>
                    </div>
                    <p style="margin-top:1rem;"><strong>Fiducia:</strong> Un tercero administra bienes o recursos.</p>
                `
            },
            {
                title: 'Licencias y Software',
                content: `
                    <p><strong>Software Libre:</strong> Permite usar, modificar, estudiar y compartir.</p>
                    <p><strong>Software Propietario:</strong> Tiene restricciones legales.</p>
                    <p><strong>Creative Commons:</strong> Compartir bajo ciertas condiciones.</p>
                    <div class="study-tip" style="margin-top:1rem;">
                        <strong>Escrow Tecnológico:</strong> Un tercero guarda el código fuente para proteger a las partes en el contrato.
                    </div>
                `
            }
        ],
        file: 'contenido/Propiedad-Intelectual - Contratos Tecno.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/Propiedad-Intelectual%20-%20Contratos%20Tecno.pdf?isCourseFile=true'
    },
    {
        id: 'F', title: 'Módulo F: Propiedad Industrial',
        topics: [
            {
                title: '¿Qué es la P. Industrial?',
                content: `
                    <p>Rama que protege invenciones, marcas, diseños y secretos empresariales para fomentar innovación y competencia.</p>
                `
            },
            {
                title: 'Patentes',
                content: `
                    <p>Protegen inventos nuevos. Requisitos:</p>
                    <ul class="value-grid">
                        <li>🆕 <strong>Novedad:</strong> Debe ser algo nuevo.</li>
                        <li>🧠 <strong>Nivel Inventivo:</strong> No debe ser obvio.</li>
                        <li>🏭 <strong>Aplicación Industrial:</strong> Se puede fabricar.</li>
                    </ul>
                `
            },
            {
                title: 'Marcas y Diseños',
                content: `
                    <p><strong>Marcas:</strong> Identifican productos (Logos, nombres, símbolos).</p>
                    <p><strong>Diseños Industriales:</strong> Protegen apariencia estética (Ej: Celulares, autos).</p>
                `
            },
            {
                title: 'Secretos Industriales',
                content: `
                    <div class="highlight-cyan">
                        <strong>Secretos:</strong> Información confidencial valiosa (Fórmulas, algoritmos, métodos de producción, estrategias).
                    </div>
                `
            }
        ],
        file: 'contenido/propiedad intelectual.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/propiedad%20intelectual.pdf?isCourseFile=true'
    }
];

const fcData = [
    { m: "Mod A", q: "¿Qué es la Ética?", a: "Rama de la filosofía que estudia principios y valores (teoría/reflexión)." },
    { m: "Mod A", q: "¿Qué es la Moral?", a: "Normas, valores y creencias aceptadas como correctas o incorrectas (práctica)." },
    { m: "Mod A", q: "Diferencia entre ética y moral", a: "La ética es teórica (el 'por qué'), la moral es práctica (el 'cómo')." },
    { m: "Mod A", q: "Menciona 5 valores fundamentales", a: "Honestidad, Responsabilidad, Integridad, Empatía, Respeto." },
    { m: "Mod B", q: "5 Principios del Código de Ética", a: "Verdad/Honestidad, Responsabilidad Social, Competencia Profesional, Confidencialidad, Lealtad." },
    { m: "Mod B", q: "Ley que reglamenta la ingeniería hoy", a: "Ley 842 de 2003." },
    { m: "Mod B", q: "¿Ofrecer lo imposible es legal?", a: "No, el Art. 40 lo prohíbe explícitamente." },
    { m: "Mod B", q: "Base constitucional de la ingeniería", a: "Artículo 26 de la Constitución Política." },
    { m: "Mod C", q: "¿Qué es el COPNIA?", a: "Consejo Profesional Nacional de Ingeniería. Inspecciona, vigila y registra." },
    { m: "Mod C", q: "Sanciones que aplica COPNIA", a: "1. Amonestación. 2. Suspensión (hasta 5 años). 3. Cancelación de matrícula." },
    { m: "Mod C", q: "Sanción por falta gravísima", a: "Siempre resulta en Cancelación de matrícula profesional." },
    { m: "Mod C", q: "Principios disciplinarios", a: "Legalidad, Imparcialidad, Celeridad." },
    { m: "Mod D", q: "¿Qué regula la Ley 1581 de 2012?", a: "Protección de datos personales en general (Habeas Data)." },
    { m: "Mod D", q: "¿Entidad vigilante de la Ley 1581?", a: "Superintendencia de Industria y Comercio (SIC)." },
    { m: "Mod D", q: "¿Cómo debe ser la autorización de datos?", a: "Previa, expresa e informada." },
    { m: "Mod D", q: "Ley de Habeas Data Financiero", a: "Ley 1266 de 2008 (Vigilada por la SuperFinanciera)." },
    { m: "Mod E", q: "Derechos Morales de Autor", a: "No se venden ni transfieren (ser reconocido, evitar modificaciones)." },
    { m: "Mod E", q: "Diferencia entre Leasing y Renting", a: "El Leasing incluye opción de compra, el Renting NO." },
    { m: "Mod E", q: "¿Qué es el Escrow Tecnológico?", a: "Un tercero neutral guarda el código fuente por seguridad." },
    { m: "Mod F", q: "Requisitos de una Patente", a: "Novedad, nivel inventivo y aplicación industrial." },
    { m: "Mod F", q: "¿Qué protege la Propiedad Industrial?", a: "Invenciones (patentes), marcas y diseños industriales aplicados al comercio." },
    { m: "Mod A", q: "¿Qué es el Altruismo?", a: "Actuar para beneficiar a otros sin esperar recompensas." },
    { m: "Mod E", q: "¿Qué son los INCOTERMS?", a: "Reglas internacionales que definen responsabilidades en el transporte de mercancías." },
    { m: "Mod A", q: "¿Qué es la Integridad?", a: "Actuar correctamente incluso cuando nadie está observando." }
];

// Base de preguntas (Se eligen 10 al azar en cada intento)
const allQuestions = [
    {
        q: "¿Qué entidad se encarga de inspeccionar, vigilar y llevar el registro profesional de los ingenieros en Colombia?",
        opts: ["Ministerio de TIC", "COPNIA", "Superintendencia de Industria y Comercio", "Consejo de Estado"],
        a: 1,
        exp: "El Consejo Profesional Nacional de Ingeniería (COPNIA) es la entidad encargada por la Ley 842 de 2003 para estas funciones."
    },
    {
        q: "La Ley 1581 de 2012 exige que, para tratar los datos personales de un usuario, la autorización debe ser:",
        opts: ["Tácita y general.", "Previa, expresa e informada.", "Verbal y opcional.", "Asumida si no dice lo contrario."],
        a: 1,
        exp: "La autorización debe ser siempre previa, expresa (inequívoca) e informada (sabiendo para qué se usará)."
    },
    {
        q: "¿Cuál derecho de autor es intransferible, no se puede vender y garantiza el reconocimiento del creador?",
        opts: ["Derechos Patrimoniales", "Derechos Morales", "Derechos Conexos", "Patentes"],
        a: 1,
        exp: "Los Derechos Morales son inalienables, perpetuos e irrenunciables."
    },
    {
        q: "La diferencia principal entre ética y moral es que:",
        opts: ["La ética es práctica y la moral es teórica.", "La ética aplica en empresas y la moral en la familia.", "La ética es la reflexión filosófica teórica y la moral es el conjunto de normas prácticas.", "Son exactamente lo mismo legalmente."],
        a: 2,
        exp: "La ética estudia el 'por qué' (teórica) y la moral aplica el 'cómo' (práctica)."
    },
    {
        q: "¿Qué protege la Ley 1581?",
        opts: ["Datos personales", "Patentes", "Contratos", "Impuestos"],
        a: 0,
        exp: "La Ley 1581 regula protección de datos."
    }
];

const dynamicTips = [
    "Recuerda: una falta gravísima SIEMPRE resulta en cancelación de matrícula.",
    "Ley 1581 = Datos generales. Ley 1266 = Datos financieros.",
    "El COPNIA vigila a los ingenieros en Colombia bajo la Ley 842 de 2003.",
    "Los derechos morales de autor nunca se venden.",
    "El Software Libre tiene 4 libertades principales."
];
