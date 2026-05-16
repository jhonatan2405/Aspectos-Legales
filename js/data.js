const modulesData = [
    {
        id: 'A', title: 'Módulo A: Ética y Moral',
        content: `
            <p><strong>Definición de Ética:</strong> rama de la filosofía que estudia los principios y valores que guían el comportamiento humano. Objetivo: reflexión crítica sobre los principios y normas que deben guiar la conducta.</p>
            <p><strong>Definición de Moral:</strong> normas, valores y creencias que una sociedad o individuo acepta como correctos o incorrectos. Conjunto de reglas prácticas que guían el comportamiento cotidiano. Objetivo: aplicar principios éticos en la vida diaria.</p>
            <p><strong>Diferencias clave:</strong> la ética es teórica (estudia el "por qué"), la moral es práctica (aplica el "cómo").</p>
            <p><strong>Valores fundamentales:</strong> Honestidad, Responsabilidad, Integridad, Empatía, Solidaridad, Perseverancia, Respeto, Altruismo, Prudencia, Humildad.</p>
            <p class="highlight-cyan"><strong>Ejemplo del dilema del ingeniero:</strong> descubre materiales de mala calidad que no cumplen normas de seguridad. Informar retrasaría el proyecto. Dilema entre seguridad pública vs. consecuencias económicas. La ética exige reportar.</p>
        `,
        file: 'contenido/1. Ética y Moral.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/1.%20E%CC%81tica%20y%20Moral.pdf?isCourseFile=true'
    },
    {
        id: 'B', title: 'Módulo B: Código de Ética y Ley 842 de 2003',
        content: `
            <p><strong>5 Principios:</strong> Verdad y Honestidad, Responsabilidad Social, Competencia Profesional, Confidencialidad, Lealtad Profesional.</p>
            <p><strong>Base constitucional:</strong> Artículo 26 de la Constitución Política de Colombia — libertad de escoger profesión u oficio. El Estado puede exigir títulos de idoneidad.</p>
            <p><strong>Historia:</strong> Acto Legislativo 1 de 1936 autorizó reglamentación. Ley 94 de 1937: primera reglamentación. Ley 842 de 2003: ley vigente.</p>
            <p><strong>Partes de la Ley 842:</strong> Título I (Arts. 1-5) Generalidades · Título II (Arts. 6-23) Ejercicio · Título III (Arts. 24-28) COPNIA · Título IV (Arts. 29-45) Código de Ética · Título V (Arts. 46-77) Régimen Disciplinario · Título VI (Art. 78) Disposiciones Finales</p>
            <p class="highlight-cyan"><strong>Art. 39 literal c (deber):</strong> "Dedicar toda su aptitud y atender con la mayor diligencia y probidad los asuntos encargados por su cliente."</p>
        `,
        file: 'contenido/2. Código de Ética profesional.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/2.%20Co%CC%81digo%20de%20E%CC%81tica%20profesional.pdf?isCourseFile=true',
        link_extra: 'https://www.copnia.gov.co/nuestra-entidad/normatividad/ley-842-de-2003'
    },
    {
        id: 'C', title: 'Módulo C: COPNIA y Régimen Disciplinario',
        content: `
            <p><strong>COPNIA:</strong> Consejo Profesional Nacional de Ingeniería. Inspecciona, vigila y lleva el registro profesional.</p>
            <p><strong>Por qué se inspecciona:</strong> asegurar cumplimiento Ley 842, evitar ejercicio ilegal, autorizar profesión con riesgo social.</p>
            <p><strong>Consecuencias ejercicio ilegal:</strong> compromete seguridad/calidad/ética, genera riesgos, constituye infracción Ley 842, puede derivar en sanciones legales/penales.</p>
            <p><strong>Sanciones (Título V):</strong> 1. Amonestación escrita · 2. Suspensión hasta 5 años · 3. Cancelación de matrícula profesional.</p>
            <p class="highlight-cyan"><strong>Falta gravísima (siempre) →</strong> Cancelación de matrícula profesional.</p>
        `,
        file: 'contenido/3. COPNIA y LEY.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/3.%20COPNIA%20y%20LEY.pdf?isCourseFile=true'
    },
    {
        id: 'D', title: 'Módulo D: Protección de Datos (Leyes 1581 y 1266)',
        content: `
            <p><strong>Ley 1581 de 2012:</strong> protege datos personales generales. Derechos del Titular: Conocer, actualizar, rectificar, eliminar (ser olvidado), autorizar uso, privacidad. Entidad vigilante: SIC (Superintendencia de Industria y Comercio). Obligación clave: autorización previa, expresa e informada.</p>
            <p><strong>Ley 1266 de 2008 — Habeas Data Financiero:</strong> regula datos financieros, crediticios, comerciales. Entidad vigilante: Superintendencia Financiera.</p>
            <p class="highlight-cyan"><strong>Caso Claro Colombia:</strong> campaña "Amigos que te premian" usó datos sin autorización previa y expresa. Sanción histórica SIC.</p>
        `,
        file: 'contenido/Ley_1581_de_2012.pdf',
        file2: 'contenido/Ley_1266_de_2008.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/4.%20Ley%201581%20de%202012%20-%20Ley%201266%20de%202008.pdf?isCourseFile=true'
    },
    {
        id: 'E', title: 'Módulo E: Propiedad Intelectual y Contratos Tecnológicos',
        content: `
            <p><strong>Sistema de Propiedad Intelectual:</strong> Derecho de Autor (Derechos Morales intransferibles + Derechos Patrimoniales transferibles + Derechos Conexos para intérpretes/productores).</p>
            <p class="highlight-violet"><strong>Contratos Tecnológicos:</strong> INCOTERMS (EXW, FCA, FOB, CIF, DDP) · Fiducia (administración por tercero) · Leasing (CON opción de compra, largo plazo) · Renting (SIN opción de compra) · Licencias (Software Libre: 4 libertades usar/estudiar/modificar/redistribuir; Propietario; Creative Commons) · Escrow Tecnológico (tercero neutral guarda código fuente).</p>
        `,
        file: 'contenido/Propiedad-Intelectual - Contratos Tecno.pdf',
        link_web: 'https://campusvirtual.ucc.edu.co/content/enforced/834307-21MON_FINGE_PREG_21ISC_709577_2610_11302_1/Propiedad-Intelectual%20-%20Contratos%20Tecno.pdf?isCourseFile=true'
    },
    {
        id: 'F', title: 'Módulo F: Principios de Propiedad Industrial',
        content: `
            <p><strong>Propiedad Industrial:</strong> Protege las invenciones y marcas aplicadas a la industria y al comercio.</p>
            <p>Incluye <strong>Patentes</strong> (requisitos: novedad, nivel inventivo y aplicación industrial), <strong>Marcas</strong>, <strong>Diseños industriales</strong> y <strong>Secretos industriales</strong>.</p>
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
    { m: "Mod F", q: "¿Qué protege la Propiedad Industrial?", a: "Invenciones (patentes), marcas y diseños industriales aplicados al comercio." }
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
    { q: "¿Qué significa el principio disciplinario de 'Imparcialidad'?", opts: ["Que el COPNIA debe fallar rápido.", "Que las decisiones deben basarse en evidencias objetivas sin favoritismos.", "Que la ley se aplica igual solo a ingenieros civiles.", "Que los recursos no pueden ser apelados."], a: 1, exp: "La imparcialidad garantiza juicios justos, objetivos y sin sesgos durante un proceso disciplinario." }
];

const dynamicTips = [
    "Recuerda: una falta gravísima SIEMPRE resulta en cancelación de matrícula.",
    "Ley 1581 = Datos generales. Ley 1266 = Datos financieros.",
    "El COPNIA vigila a los ingenieros en Colombia bajo la Ley 842 de 2003.",
    "Los derechos morales de autor nunca se venden.",
    "El Software Libre tiene 4 libertades principales."
];
