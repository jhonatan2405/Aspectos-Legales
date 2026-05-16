const modulesData = [
    {
        id: 'A', title: 'Módulo A: Ética y Moral',
        content: `
            <p>La ética es una rama de la filosofía que estudia qué acciones son correctas o incorrectas. Su función es ayudarnos a reflexionar sobre cómo debemos actuar en diferentes situaciones de la vida personal y profesional.</p>
            
            <div class="highlight-cyan">
                <strong>Ejemplo sencillo:</strong> Un ingeniero descubre que los materiales usados en una construcción son de mala calidad. Aunque reportarlo pueda retrasar el proyecto, la ética indica que debe informar el problema para proteger la vida y la seguridad de las personas.
            </div>

            <div class="study-tip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z"/></svg>
                <span><strong>Tip:</strong> Piensa en la Ética como el "Manual de instrucciones" y en la Moral como "Seguir las reglas en el juego diario".</span>
            </div>

            <h3 style="margin: 1.5rem 0 1rem;">Diferencia entre Ética y Moral</h3>
            <div class="table-scroll">
                <table class="glass-table">
                    <thead>
                        <tr><th>Ética</th><th>Moral</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Es teórica (estudia el "por qué")</td><td>Es práctica (indica "cómo actuar")</td></tr>
                        <tr><td>Analiza y reflexiona</td><td>Aplica reglas en la vida diaria</td></tr>
                        <tr><td>Estudia principios y valores</td><td>Son normas y costumbres sociales</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 style="margin: 1.5rem 0 1rem;">Valores Fundamentales del Profesional</h3>
            <ul class="value-grid">
                <li>✨ <strong>Honestidad:</strong> Sinceridad y verdad.</li>
                <li>✨ <strong>Responsabilidad:</strong> Asumir consecuencias.</li>
                <li>✨ <strong>Integridad:</strong> Actuar bien sin ser visto.</li>
                <li>✨ <strong>Empatía:</strong> Respetar sentimientos.</li>
                <li>✨ <strong>Solidaridad:</strong> Bienestar común.</li>
                <li>✨ <strong>Perseverancia:</strong> Esfuerzo constante.</li>
                <li>✨ <strong>Respeto:</strong> Valorar diferencias.</li>
                <li>✨ <strong>Altruismo:</strong> Beneficiar sin recompensa.</li>
                <li>✨ <strong>Prudencia:</strong> Pensar antes de actuar.</li>
                <li>✨ <strong>Humildad:</strong> Reconocer errores.</li>
            </ul>
        `,
        file: 'contenido/1. Ética y Moral.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/1.%20E%CC%81tica%20y%20Moral.pdf?isCourseFile=true'
    },
    {
        id: 'B', title: 'Módulo B: Código de Ética y Ley 842 de 2003',
        content: `
            <p>Es el conjunto de normas que orientan el comportamiento correcto de los profesionales de ingeniería para garantizar responsabilidad social.</p>
            
            <h3 style="margin: 1.5rem 0 1rem;">Principios Fundamentales</h3>
            <ul class="value-grid">
                <li>📖 <strong>Verdad y Honestidad:</strong> Transparencia.</li>
                <li>🌍 <strong>Responsabilidad Social:</strong> Proteger vida.</li>
                <li>🎓 <strong>Competencia:</strong> Estar actualizado.</li>
                <li>🔒 <strong>Confidencialidad:</strong> Datos privados.</li>
                <li>🤝 <strong>Lealtad:</strong> Respeto a colegas.</li>
            </ul>

            <div class="highlight-cyan">
                <strong>Base Constitucional (Art. 26 CP):</strong> Libertad de escoger profesión. El Estado exige títulos de idoneidad para proteger a la sociedad.
            </div>

            <h3 style="margin: 1.5rem 0 1rem;">Partes de la Ley 842 de 2003</h3>
            <div class="table-scroll">
                <table class="glass-table">
                    <thead><tr><th>Título</th><th>Contenido</th></tr></thead>
                    <tbody>
                        <tr><td>Título I</td><td>Generalidades</td></tr>
                        <tr><td>Título II</td><td>Ejercicio profesional</td></tr>
                        <tr><td>Título III</td><td>COPNIA</td></tr>
                        <tr><td>Título IV</td><td>Código de Ética</td></tr>
                        <tr><td>Título V</td><td>Régimen disciplinario</td></tr>
                        <tr><td>Título VI</td><td>Disposiciones finales</td></tr>
                    </tbody>
                </table>
            </div>

            <p class="highlight-cyan" style="margin-top:1.5rem;">
                <strong>Art. 39 Literal C:</strong> Deber de "Dedicar toda su aptitud y atender con la mayor diligencia y probidad los asuntos encargados por su cliente."
            </p>
        `,
        file: 'contenido/2. Código de Ética profesional.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/2.%20Co%CC%81digo%20de%20E%CC%81tica%20profesional.pdf?isCourseFile=true',
        link_extra: 'https://www.copnia.gov.co/nuestra-entidad/normatividad/ley-842-de-2003'
    },
    {
        id: 'C', title: 'Módulo C: COPNIA y Régimen Disciplinario',
        content: `
            <p>El <strong>COPNIA</strong> es la entidad encargada de vigilar el ejercicio de la ingeniería, llevar el registro profesional y sancionar conductas indebidas.</p>
            
            <h3 style="margin: 1.5rem 0 1rem;">Sanciones Disciplinarias</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="glass-card" style="padding: 1rem; border-left: 4px solid var(--accent-cyan);">
                    <strong>1. Amonestación Escrita:</strong> Llamado de atención formal.
                </div>
                <div class="glass-card" style="padding: 1rem; border-left: 4px solid var(--accent-amber);">
                    <strong>2. Suspensión:</strong> Prohibición temporal hasta por 5 años.
                </div>
                <div class="glass-card" style="padding: 1rem; border-left: 4px solid var(--accent-red);">
                    <strong>3. Cancelación de Matrícula:</strong> Pérdida definitiva del derecho a ejercer.
                </div>
            </div>

            <div class="study-tip">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                <span><strong>Importante:</strong> La <strong>Falta Gravísima</strong> siempre conlleva la cancelación definitiva de la matrícula.</span>
            </div>
        `,
        file: 'contenido/3. COPNIA y LEY.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/3.%20COPNIA%20y%20LEY.pdf?isCourseFile=true'
    },
    {
        id: 'D', title: 'Módulo D: Protección de Datos (Leyes 1581 y 1266)',
        content: `
            <p>Normas que protegen la información personal (Habeas Data) para evitar su uso indebido.</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
                <div class="glass-card" style="padding: 1.2rem;">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Ley 1581 de 2012</h4>
                    <p style="font-size: 0.9rem;">Datos personales generales. Vigilada por la <strong>SIC</strong>.</p>
                    <ul style="font-size: 0.85rem; margin-top: 0.5rem; margin-left: 1rem;">
                        <li>Conocer, actualizar y corregir datos.</li>
                        <li>Autorización previa, expresa e informada.</li>
                    </ul>
                </div>
                <div class="glass-card" style="padding: 1.2rem;">
                    <h4 style="color: var(--accent-violet); margin-bottom: 0.5rem;">Ley 1266 de 2008</h4>
                    <p style="font-size: 0.9rem;">Habeas Data Financiero. Vigilada por la <strong>SuperFinanciera</strong>.</p>
                    <p style="font-size: 0.85rem; margin-top: 0.5rem;">Regula historial de pagos y reportes en centrales de riesgo.</p>
                </div>
            </div>

            <div class="highlight-cyan">
                <strong>Caso Claro Colombia:</strong> Sanción histórica de la SIC por usar datos en "Amigos que te premian" sin permiso.
            </div>
        `,
        file: 'contenido/Ley_1581_de_2012.pdf',
        file2: 'contenido/Ley_1266_de_2008.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/4.%20Ley%201581%20de%202012%20-%20Ley%201266%20de%202008.pdf?isCourseFile=true'
    },
    {
        id: 'E', title: 'Módulo E: Propiedad Intelectual y Contratos Tecnológicos',
        content: `
            <p>Protege las creaciones de la mente humana (Software, música, diseños, inventos).</p>
            
            <h3 style="margin: 1.5rem 0 1rem;">Derecho de Autor</h3>
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                <div class="glass-card" style="flex: 1; padding: 1rem;">
                    <strong>Morales:</strong> Reconocimiento al autor. Inalienables.
                </div>
                <div class="glass-card" style="flex: 1; padding: 1rem;">
                    <strong>Patrimoniales:</strong> Explotación económica. Transferibles.
                </div>
            </div>

            <h3 style="margin: 1.5rem 0 1rem;">Contratos y Licencias</h3>
            <ul class="value-grid">
                <li>📦 <strong>INCOTERMS:</strong> Reglas de comercio.</li>
                <li>🏦 <strong>Fiducia:</strong> Administración de bienes.</li>
                <li>📈 <strong>Leasing:</strong> Alquiler + Opción Compra.</li>
                <li>📉 <strong>Renting:</strong> Alquiler puro.</li>
                <li>🔐 <strong>Escrow:</strong> Custodia de código fuente.</li>
            </ul>
        `,
        file: 'contenido/Propiedad-Intelectual - Contratos Tecno.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/Propiedad-Intelectual%20-%20Contratos%20Tecno.pdf?isCourseFile=true'
    },
    {
        id: 'F', title: 'Módulo F: Principios de Propiedad Industrial',
        content: `
            <p>Rama que protege creaciones industriales y comerciales.</p>
            
            <div class="topics-grid" style="margin-top: 1.5rem;">
                <div class="glass-card" style="padding: 1.2rem; text-align: center;">
                    <strong style="color: var(--accent-cyan);">Patentes</strong>
                    <p style="font-size: 0.85rem; margin-top: 0.5rem;">Requisitos: Novedad, nivel inventivo y aplicación industrial.</p>
                </div>
                <div class="glass-card" style="padding: 1.2rem; text-align: center;">
                    <strong style="color: var(--accent-violet);">Marcas</strong>
                    <p style="font-size: 0.85rem; margin-top: 0.5rem;">Logos y nombres de identidad.</p>
                </div>
                <div class="glass-card" style="padding: 1.2rem; text-align: center;">
                    <strong style="color: var(--accent-blue);">Diseños</strong>
                    <p style="font-size: 0.85rem; margin-top: 0.5rem;">Apariencia visual del producto.</p>
                </div>
                <div class="glass-card" style="padding: 1.2rem; text-align: center;">
                    <strong style="color: var(--accent-amber);">Secretos</strong>
                    <p style="font-size: 0.85rem; margin-top: 0.5rem;">Información confidencial clave.</p>
                </div>
            </div>
        `,
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
    { q: "¿Qué entidad se encarga de inspeccionar, vigilar y llevar el registro profesional de los ingenieros en Colombia?", opts: ["Ministerio de TIC", "COPNIA", "Superintendencia de Industria y Comercio", "Consejo de Estado"], a: 1, exp: "El Consejo Profesional Nacional de Ingeniería (COPNIA) es la entidad encargada por la Ley 842 de 2003 para estas funciones." },
    { q: "Dentro de los deberes del profesional (Art. 39 de la Ley 842), se establece que el ingeniero debe:", opts: ["Cobrar siempre la tarifa máxima del mercado.", "Dedicar toda su aptitud y atender con probidad los asuntos encargados por su cliente.", "Garantizar el éxito del proyecto sin importar los recursos.", "Ocultar errores técnicos al cliente para no generar alarma."], a: 1, exp: "El Artículo 39 literal c establece como deber dedicar toda su aptitud y atender con la mayor diligencia y probidad los asuntos." },
    { q: "Si un ingeniero comete una falta catalogada como gravísima, la sanción aplicable será:", opts: ["Amonestación escrita.", "Suspensión por 6 meses.", "Cancelación de la matrícula profesional.", "Multa de 10 salarios mínimos."], a: 2, exp: "Las faltas gravísimas SIEMPRE conllevan la cancelación de la matrícula profesional, según la escala de sanciones." },
    { q: "La Ley 1581 de 2012 exige que, para tratar los datos personales de un usuario, la autorización debe ser:", opts: ["Tácita y general.", "Previa, expresa e informada.", "Verbal y opcional.", "Asumida si no dice lo contrario."], a: 1, exp: "La autorización debe ser siempre previa, expresa (inequívoca) e informada (sabiendo para qué se usará)." },
    { q: "¿Cuál derecho de autor es intransferible, no se puede vender y garantiza el reconocimiento del creador?", opts: ["Derechos Patrimoniales", "Derechos Morales", "Derechos Conexos", "Patentes"], a: 1, exp: "Los Derechos Morales son inalienables, perpetuos e irrenunciables." },
    { q: "¿Cuál es la ley actual que regula el ejercicio de la ingeniería y profesiones afines en Colombia?", opts: ["Ley 94 de 1937", "Ley 1581 de 2012", "Ley 842 de 2003", "Ley 1266 de 2008"], a: 2, exp: "La Ley 842 de 2003 es el marco jurídico vigente para el ejercicio de la ingeniería." },
    { q: "¿Qué superintendencia vigila el cumplimiento de la Ley de Habeas Data Financiero (Ley 1266 de 2008)?", opts: ["Superintendencia de Industria y Comercio", "Superintendencia de Sociedades", "Superintendencia Financiera", "Superintendencia de Salud"], a: 2, exp: "Los datos crediticios y financieros son vigilados por la SuperFinanciera." },
    { q: "El 'Escrow' Tecnológico consiste en:", opts: ["Alquiler de equipos con opción de compra.", "La entrega del código fuente a un tercero neutral como garantía.", "La venta de derechos patrimoniales a una empresa extranjera.", "El registro de una patente ante la SIC."], a: 1, exp: "El Escrow es un contrato donde un tercero custodia el código fuente por si el proveedor original falla." },
    { q: "La diferencia principal entre ética y moral es que:", opts: ["La ética es práctica y la moral es teórica.", "La ética aplica en empresas y la moral en la familia.", "La ética es la reflexión filosófica teórica y la moral es el conjunto de normas prácticas.", "Son exactamente lo mismo legalmente."], a: 2, exp: "La ética estudia el 'por qué' (teórica) y la moral aplica el 'cómo' (práctica)." },
    { q: "Un Leasing difiere de un Renting principalmente porque el Leasing:", opts: ["Es más económico.", "No incluye mantenimiento.", "Incluye siempre opción de compra al final del contrato.", "Es solo para licencias de software."], a: 2, exp: "El leasing financiero se caracteriza por tener explícita la opción de compra del bien." },
    { q: "Según los principios de la propiedad industrial, para que un invento sea patentable debe cumplir con:", opts: ["Ser estético y barato.", "Novedad, nivel inventivo y aplicación industrial.", "Estar escrito en inglés y ser digital.", "Tener derechos morales transferibles."], a: 1, exp: "Toda patente exige estos 3 requisitos: nuevo en el mundo, que no sea obvio (nivel inventivo) y que se pueda fabricar (aplicación)." },
    { q: "La Ley 1581 de 2012 estipula que el 'Habeas Data' permite a los ciudadanos:", opts: ["Conocer, actualizar y rectificar la información que se haya recogido sobre ellos.", "Evadir impuestos si sus datos son vulnerados.", "Descargar software propietario de forma gratuita.", "Ejercer la ingeniería sin tarjeta profesional."], a: 0, exp: "El núcleo del Habeas Data es el control sobre los propios datos personales." },
    { q: "El Artículo 26 de la Constitución Política de Colombia estipula:", opts: ["El derecho a la vida.", "La libertad de escoger profesión u oficio, y la facultad del Estado de exigir títulos de idoneidad.", "El derecho al internet gratuito.", "La abolición del registro profesional."], a: 1, exp: "Este artículo es la base para que el Estado reglamente profesiones con riesgo social como la ingeniería." },
    { q: "¿Cuál de estos NO es uno de los 5 principios rectores del Código de Ética de Ingeniería?", opts: ["Verdad y Honestidad", "Confidencialidad", "Rentabilidad Máxima", "Responsabilidad Social"], a: 2, exp: "La rentabilidad máxima no es un principio ético; lo son la verdad, responsabilidad, competencia, confidencialidad y lealtad." },
    { q: "Según la escala de sanciones de COPNIA, una falta grave con antecedentes conlleva:", opts: ["Amonestación escrita.", "Suspensión de la matrícula de 2 a 5 años.", "Trabajo comunitario.", "Suspensión hasta 6 meses."], a: 1, exp: "La reiteración de faltas graves agrava la sanción, subiéndola al rango de 2 a 5 años." },
    { q: "En el caso del Edificio Space en Medellín, la sanción a los ingenieros responsables por parte de COPNIA fue:", opts: ["Multa económica.", "Suspensión de 2 años.", "Cancelación definitiva de la matrícula profesional.", "Ninguna, fueron absueltos."], a: 2, exp: "Al ser una falta gravísima con consecuencias fatales y detrimento enorme, la sanción máxima fue aplicada." },
    { q: "El software libre se basa en 4 libertades esenciales. ¿Cuál de estas NO es una de ellas?", opts: ["Libertad de usar el programa con cualquier propósito.", "Libertad de estudiar cómo funciona y modificarlo.", "Libertad de vender el software como propietario cerrando el código.", "Libertad de distribuir copias a los demás."], a: 2, exp: "El software libre no prohíbe vender, pero no permite cerrar el código y volverlo propietario quitando las libertades a otros." },
    { q: "Ofrecer la prestación de un servicio cuyo cumplimiento sea de dudoso o imposible cumplimiento es:", opts: ["Un deber del ingeniero.", "Una prohibición estipulada en la Ley 842.", "Un derecho adquirido.", "Una estrategia válida de marketing."], a: 1, exp: "El Art 40 prohíbe explícitamente prometer resultados técnicos imposibles o dudosos." },
    { q: "¿Qué entidad en Colombia es la encargada de vigilar la Propiedad Industrial (Marcas y Patentes)?", opts: ["COPNIA", "Ministerio de Justicia", "Superintendencia de Industria y Comercio (SIC)", "Dirección Nacional de Derecho de Autor"], a: 2, exp: "La SIC administra y regula la propiedad industrial, mientras que la DNDA regula los derechos de autor." },
    { q: "¿Qué significa el principio disciplinario de 'Imparcialidad'?", opts: ["Que el COPNIA debe fallar rápido.", "Que las decisiones deben basarse en evidencias objetivas sin favoritismos.", "Que la ley se aplica igual solo a ingenieros civiles.", "Que los recursos no pueden ser apelados."], a: 1, exp: "La imparcialidad garantiza juicios justos, objetivos y sin sesgos durante un proceso disciplinario." },
    { q: "¿Qué valor profesional consiste en actuar correctamente incluso cuando nadie está observando?", opts: ["Prudencia", "Integridad", "Altruismo", "Solidaridad"], a: 1, exp: "La integridad es la coherencia entre los valores y las acciones, incluso en ausencia de supervisión." },
    { q: "Los INCOTERMS (como FOB o CIF) son reglas usadas principalmente en:", opts: ["Derecho de Autor", "Comercio Internacional", "Registro del COPNIA", "Protección de Datos"], a: 1, exp: "Los INCOTERMS definen las responsabilidades de entrega en transacciones comerciales internacionales." }
];

const dynamicTips = [
    "Recuerda: una falta gravísima SIEMPRE resulta en cancelación de matrícula.",
    "Ley 1581 = Datos generales. Ley 1266 = Datos financieros.",
    "El COPNIA vigila a los ingenieros en Colombia bajo la Ley 842 de 2003.",
    "Los derechos morales de autor nunca se venden.",
    "El Software Libre tiene 4 libertades principales."
];
