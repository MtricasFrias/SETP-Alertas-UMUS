/* =====================================================================
   SETP Ibagué · Seguimiento general de alertas UMUS — DATOS
   ---------------------------------------------------------------------
   Único archivo a editar para actualizar el contenido.
   Fuentes: "SEGUIMIENTO GENERAL ALERTAS UMUS 26-06-2026" (corte 26 jun),
   tabla oficial de 9 alertas, y "RESPUESTAS ALERTAS UMUS DIR. OPERATIVA"
   (25 sep 2026: alertas 1, 2, 3, 6, 7 y 9) + oficio del 24 sep (alerta 4) +
   "Alertas Planeacion" de la Dirección de Planeación (25 sep 2026: alertas 5 y 8).

   ACTUALIZAR al cambiar el corte:
     · CORTE_ACT                 fecha de la última actualización
     · ALERTAS[].corte / act     corte de cada alerta y si fue actualizada
     · ALERTAS[].antes / ahora   comparación de la escena «Qué cambió»
     · HITOS[].est               'cumplido' | 'programado' | 'porconfirmar'
     · GANTT[].est               estado de cada frente (ver ESTADO)
   ===================================================================== */

const CORTE     = { txt:'26 jun 2026', fecha:new Date(2026,5,26) };   // corte base: la primera presentación de alertas
const CORTE_ACT = { txt:'25 sep 2026', fecha:new Date(2026,8,25) };   // última actualización
const MOSTRAR_CAMBIOS = true;                                        // escena «Qué cambió desde el corte anterior»

const CAT = {
  critica :{ n:'Crítica',  c:'#E5626A', tx:'#FFFFFF' },
  moderada:{ n:'Moderada', c:'#F6BD4B', tx:'#1F3C78' },
  leve    :{ n:'Leve',     c:'#3AA56D', tx:'#FFFFFF' }
};

const COMPONENTES = ['Financiero','Operaciones','Infraestructura','CONPES','Jurídico','Ambiental','Cronograma'];
const PERIODOS    = ['2025-IV','2026-I','2026-II'];

/* ---------------------------------------------------------------------
   ALERTAS — en el orden de la tabla oficial (No. 1 a 9)
   vistas: 1 o 2 escenas por alerta; cada una con su clave `vis` (visuales.js)
   act: true si se actualizó en este corte · corte: fecha de su información
   ------------------------------------------------------------------- */
const ALERTAS = [
  { n:1, id:'fet', corto:'FET', titulo:'FET: fondo en estructuración', t:'FET no implementado',
    per:'2025-IV', comp:'Financiero', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'El fondo se encuentra *en estructuración*; el modelo financiero *ya tiene resultados* y se calibra.',
    hechos:['Resultados del modelo financiero del SETP disponibles.',
            'Calibración de escenarios con el estudio de SAIP & IKON, evaluando la participación de los distintos actores e identificando el mínimo impacto del déficit financiero.',
            'En análisis de fuentes para la alimentación del Fondo.'],
    cifras:[{ t:'Con resultados', l:'modelo financiero del SETP' }, { n:2, l:'frentes en paralelo: calibración de escenarios y análisis de fuentes de alimentación' }],
    postura:'Identificación de valores (déficit) · Verificación de fuentes de alimentación · Concertación del FET',
    antes:'Modelo financiero por entregar: resultado final previsto para julio de 2026.',
    ahora:'Ya hay resultados del modelo financiero. Se calibran los escenarios con el estudio de SAIP & IKON y se analizan las fuentes de alimentación del Fondo.',
    vistas:[{ vis:'fet', icono:'tap', pregunta:'Toca cada etapa para ver en qué punto se encuentra la estructuración del fondo.' }] },

  { n:2, id:'concertacion', corto:'Transportadores', titulo:'Concertación con transportadores', t:'Concertación con transportadores para viabilidad del sistema',
    per:'2025-IV', comp:'Operaciones', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'Las mesas con los transportadores *están en marcha*: se socializó el modelo financiero y se solicitó información sobre el Decreto 1079.',
    hechos:['Mesas con los transportadores actuales.',
            'Cada empresa estructura su propio modelo financiero.',
            'Sin formalizar acuerdos ni reconocer operadores.'],
    cifras:[{ t:'En mesas', l:'transportadores actuales, con los resultados del modelo' }, { t:'Decreto 1079', l:'requisitos cuyo cumplimiento se solicitó a las empresas' }],
    postura:'Mesas de trabajo con los transportadores actuales · Socialización de los resultados del modelo financiero · Verificación de requisitos del Decreto 1079',
    antes:'Canasta de costos en validación con los operadores; modelo financiero previsto para el 24 de julio.',
    ahora:'Mesas de trabajo con los transportadores: se socializó el modelo financiero y se pidió información del Decreto 1079. Cada empresa estructura su propio modelo.',
    vistas:[{ vis:'con', icono:'drag', pregunta:'Los buses ya van por la etapa 3. Arrástralos hasta el final para ver cuándo se habilitan los actos.' }] },

  { n:3, id:'semaforos', corto:'Semáforos', titulo:'Semaforización con retraso', t:'Retraso contrato de semaforización',
    per:'2025-IV', comp:'Infraestructura', cat:'moderada', act:true, corte:'20 sep 2026',
    frase:'La Fase I se encuentra en su etapa final: *30 de 34 intersecciones* están en servicio y seguimiento.',
    hechos:['20 sep: 93,62 % ejecutado frente a 96,13 % programado.',
            'El 6 sep iba adelante: 92,97 % frente a 92,26 %.',
            'El plazo contractual vence el 29 de septiembre de 2026.'],
    cifras:[{ n:93.62, dec:2, suf:' %', l:'avance real ejecutado, corte 20 sep' }, { n:2.51, dec:2, suf:' pts', l:'por debajo de lo programado frente al cronograma' }],
    postura:'Etapa final: planeamiento, configuración, integración y pruebas · 30 de 34 intersecciones en servicio y seguimiento · Seguimiento de la interventoría',
    antes:'75,01 % ejecutado; 25 de 34 intersecciones instaladas; prórroga de hasta 2 meses sin solicitud formal.',
    ahora:'93,62 % ejecutado frente a 96,13 % programado (20 sep). 30 de 34 intersecciones en servicio y seguimiento. El plazo vence el 29 de septiembre.',
    vistas:[{ vis:'sem', icono:'tap', pregunta:'Alterna el corte del 6 al 20 de septiembre y consulta las intersecciones en servicio y seguimiento.' }] },

  { n:4, id:'app', corto:'Tranvía', titulo:'Propuesta de tranvía (APP)', t:'Propuesta APP tranvía podría redefinir convenio',
    per:'2025-IV', comp:'CONPES', cat:'critica', act:true, corte:'24 sep 2026', anim:'tram',
    frase:'',
    hechos:['Riel virtual; se presenta como 100 % privado.',
            'Pide ser único operador y usar recursos del CONPES 4017.',
            'Concepto favorable de prefactibilidad: 27 oct 2025.',
            'Último paso, 24 sep: oficio sobre la mesa interinstitucional.'],
    cifras:[],
    postura:'Seguimiento a la propuesta de APP del tranvía · Mesa interinstitucional con MinHacienda, DNP y MinTransporte · Informe de avance de la etapa de factibilidad',
    antes:'Trazabilidad hasta el 1 de junio: mesa técnica para socializar el concepto del DNP.',
    ahora:'Nueva fecha en la trazabilidad: 24 de septiembre, oficio con la programación de la mesa interinstitucional y solicitud del informe de avance de la factibilidad.',
    vistas:[{ vis:'appA', icono:'tap',  pregunta:'Toca una línea para ver con qué proyecto del SETP se superpone.' },
            { vis:'appB', icono:'tap', pregunta:'El tranvía recorre las fechas. Pausa, avanza o salta a cualquier paso con la línea de abajo.' },
            { vis:'appC', icono:'tap', pregunta:'Toca cada condición: enciende una luz. Con las 4, el tranvía avanza.' }] },

  { n:5, id:'desembolsos', corto:'Desembolsos', titulo:'Desembolsos frente al POAI', t:'Desembolsos Nación y Municipio no solicitados frente a POAI',
    per:'2026-I', comp:'Financiero', cat:'leve', act:true, corte:'25 sep 2026',
    frase:'El aporte del Municipio para la vigencia 2026 se desembolsó *el 30 de abril de 2026*.',
    hechos:['Aportes del Municipio 2021–2026: desembolsados al 100 % en cada vigencia.',
            'Convenio con la Nación 2024–2026: $190,6 mil M; $74,2 mil M por reprogramar (2026 proyectado).',
            'Proyectos 2026 con elegibilidad desde el 22 de septiembre; patiotalleres, en subsanación de recomendaciones.'],
    cifras:[{ n:100, suf:' %', l:'de los aportes del Municipio, desembolsados' }, { n:38.9, dec:1, suf:' %', l:'del convenio de la Nación, por reprogramar' }],
    postura:'Proyectos 2026 con elegibilidad · Citación a Junta Directiva (Paraderos Tipo I y II) · Subsanación de recomendaciones (patiotalleres)',
    antes:'Nación 2026: $23,7 mil M adjudicados y $37,8 mil M por reprogramar. Cuatro frentes radicados en la UMUS, sin elegibilidad.',
    ahora:'Nación 2026: $32,5 mil M adjudicados y $29,0 mil M por reprogramar. Elegibilidad el 22 sep para Ferrocarril, ciclorruta y Paraderos Tipo I y II; los predios de patiotalleres subsanan las recomendaciones de la UMUS.',
    vistas:[{ vis:'desA', icono:'tap', pregunta:'Cifras en miles de millones de pesos ($ mil M). Toca una barra para ver el valor exacto en pesos.' },
            { vis:'desB', icono:null, pregunta:'Proyectos 2026 con su valor y su fase actual, según la Dirección de Planeación.' }] },

  { n:6, id:'actos', corto:'Actos', titulo:'Actos administrativos sin definir', t:'Indefinición de los actos administrativos que adopten las condiciones del modelo operacional',
    per:'2026-I', comp:'Jurídico', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'El acto administrativo de adopción del componente operacional se encuentra *en estructuración*, con borrador en revisión.',
    hechos:['Estructuración técnica y jurídica del acto de adopción del componente operacional.',
            'Insumo: el estudio de actualización del modelo operacional.',
            'Se revisa la implementación gradual por fases frente al modelo financiero.'],
    cifras:[{ t:'Borrador', l:'del acto administrativo, en revisión' }, { t:'Por fases', l:'implementación gradual, calibrada con el modelo financiero' }],
    postura:'Estructuración técnica y jurídica del acto de adopción · Revisión de la implementación gradual por fases · Articulación con el modelo financiero',
    antes:'Actos por paquetes; el plazo adicional para aclaraciones a los operadores no tenía fecha.',
    ahora:'El acto del componente operacional ya tiene borrador en revisión, con el estudio de actualización del modelo operacional como insumo.',
    vistas:[{ vis:'actos', icono:null, pregunta:'Contenido del borrador del acto administrativo y etapa en la que se encuentra.' }] },

  { n:7, id:'pma', corto:'PMA', titulo:'PMA de semaforización, Fase I', t:'No implementación del PMA contrato Semaforización Fase I',
    per:'2026-I', comp:'Ambiental', cat:'leve', act:true, corte:'25 sep 2026',
    frase:'El PMA *avanza con mesas técnicas y listas de chequeo*; faltan los informes mensuales y atender observaciones.',
    hechos:['Mesas técnicas con el contratista y la interventoría.',
            'Entregables ambiental, social y SST revisados, con listas de chequeo.',
            'Pendiente: radicar informes mensuales y atender observaciones sociales.'],
    cifras:[{ n:3, l:'componentes en revisión: ambiental, social y SST' }, { t:'Social', l:'componente con más observaciones por atender' }],
    postura:'Radicación de los informes mensuales pendientes · Atención de las observaciones del componente social · Acompañamiento al contratista hasta el cierre del soporte',
    antes:'La interventoría no había enviado el informe oficial de alcances e impactos del PMA.',
    ahora:'Mesas técnicas y listas de chequeo enviadas. Falta radicar informes mensuales y atender observaciones, sobre todo del componente social.',
    vistas:[{ vis:'pma', icono:'tap', pregunta:'Avanza cada componente por la ruta: contratista, interventoría y Ente Gestor.' }] },

  { n:8, id:'obras', corto:'Obras', titulo:'Obras frente al cronograma CONPES', t:'Retrasos en ejecución de obras de acuerdo con el cronograma CONPES',
    per:'2026-I', comp:'Cronograma', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'Ferrocarril, ciclorruta y Paraderos: *elegibilidad desde el 22 de septiembre*.',
    hechos:['Ferrocarril y ciclorruta: el oficio de elegibilidad se ajusta en uno de sus puntos.',
            'Paraderos Tipo 1 y 2: citación a Junta Directiva para su aprobación e inicio de la etapa precontractual.',
            'Patiotalleres: se subsanan las recomendaciones de la UMUS.',
            'Av. Ambalá en ejecución; Av. Jordán Paralela en revisión.'],
    cifras:[{ t:'22 sep', l:'elegibilidad de Ferrocarril, ciclorruta y Paraderos Tipo 1 y 2' }, { n:5, l:'patiotalleres requeridos según la actualización del componente operacional (sep. 2025)' }],
    postura:'Trámite de elegibilidad ante la UMUS · Citación a Junta Directiva (Paraderos Tipo 1 y 2) · Subsanación de recomendaciones (patiotalleres)',
    antes:'Ferrocarril, ciclorruta, Paraderos Tipo 1 y 2 y patiotalleres radicados en la UMUS, en espera del concepto de elegibilidad.',
    ahora:'Elegibilidad el 22 de septiembre para Ferrocarril, ciclorruta y Paraderos Tipo 1 y 2. Paraderos pasa a Junta Directiva para iniciar la etapa precontractual; los patiotalleres subsanan las recomendaciones de la UMUS.',
    vistas:[{ vis:'obraA', icono:'drag', pregunta:'Arrastra la línea «hoy» y toca una barra para ver el estado de cada frente.' },
            { vis:'obraB', icono:'tap',  pregunta:'Toca un proyecto o un símbolo de las convenciones.' }] },

  { n:9, id:'tecno', corto:'Tecnología', titulo:'FET y componente tecnológico', t:'Rezagos en los avances para la estructuración e implementación del FET y componente tecnológico',
    per:'2026-II', comp:'Operaciones', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'Flota, información al usuario y recaudo se estructuran como *un solo paquete*.',
    hechos:['Modelo financiero actualizado con los parámetros del modelo operacional.',
            'Fuentes de alimentación del FET en análisis.',
            'En estructuración: flota, información al usuario y recaudo.',
            'Se requiere definir los AOT y el AOR.'],
    cifras:[{ n:3, l:'sistemas del componente tecnológico: flota, información al usuario y recaudo' }],
    postura:'Estructuración conjunta de control de flota, información al usuario y recaudo · Definición de los AOT y del AOR · Articulación con el modelo operacional',
    antes:'Recaudo y control de flota con recursos desde 2027; el FET dependía del resultado del modelo financiero.',
    ahora:'Modelo financiero actualizado con el modelo operacional. Se estructuran como un solo paquete el control de flota, la información al usuario y el recaudo; se requiere definir los AOT y el AOR.',
    vistas:[{ vis:'tecno', icono:'drag', pregunta:'Arrastra los nodos y simula la integración del paquete tecnológico.' }] }
];

/* ---------------------------------------------------------------------
   TRAZABILIDAD DEL TRANVÍA (APP) — igual a la diapositiva de la presentación
   anterior (8 fechas) + la del 24 sep 2026. `nuevo` resalta la última.
   ------------------------------------------------------------------- */
const TRAZA = [
  { f:new Date(2025,9,27),  t:'Concepto favorable a prefactibilidad (con condiciones)' },
  { f:new Date(2025,9,30),  t:'Reunión virtual junto con la UMUS y STMI' },
  { f:new Date(2025,10,7),  t:'Mesas técnicas presenciales con equipo STMI' },
  { f:new Date(2025,10,19), t:'Visita del inversionista' },
  { f:new Date(2025,11,3),  t:'Mesa con el Ministerio de Transporte' },
  { f:new Date(2025,11,5),  t:'Solicitud de concepto al DNP' },
  { f:new Date(2026,3,22),  t:'Concepto del DNP' },
  { f:new Date(2026,5,1),   t:'Mesa técnica con STMI para socializar el concepto del DNP' },
  { f:new Date(2026,8,24),  c:'Oficio: mesa interinstitucional e informe de factibilidad', t:'Oficio informando la programación de la mesa interinstitucional y solicitando el informe de avance de la etapa de factibilidad del proyecto', nuevo:true }
];

/* ---------------------------------------------------------------------
   CRONOGRAMA CONPES (calendario real).  a/b = mes de inicio/fin, contados
   desde ene-2023 (0) hasta dic-2028 (71). Extraído de la figura oficial.
   est: ver ESTADO (más abajo)
   ------------------------------------------------------------------- */
/* Escala de estados del proyecto: única fuente de color para el Gantt, el mapa, las listas y las leyendas.
   Va del origen a la obra terminada: azul (se estructura) › cian (con elegibilidad) › ámbar (en obra) › verde (terminado).
   Naranja = trámite con observaciones por atender · rojo = detenido · gris = sin dato o sin alcance. */
const ESTADO = {
  estructuracion:{ n:'En estructuración',          c:'#5B91E3' },
  elegible      :{ n:'Con elegibilidad',           c:'#2FB3C4' },
  subsana       :{ n:'Subsanando recomendaciones', c:'#EF7F45' },
  ejecucion     :{ n:'En ejecución',               c:'#F6BD4B' },
  ejecutado     :{ n:'Ejecutado',                  c:'#3AA56D' },
  bloqueado     :{ n:'Sin recursos, en revisión',  c:'#E5626A' },
  retirado      :{ n:'Sin alcance',                c:'#8A93AD' },
  sindato       :{ n:'Sin estado en el corte',     c:'#8A93AD' }
};

const GANTT = [
  { g:'Infraestructura', n:'Carrera 5',               a:18, b:37, est:'ejecutado',      nota:'Fases I y II ejecutadas.' },
  { g:'Infraestructura', n:'Avenida Jordán',          a:18, b:44, est:'sindato',        nota:'Sin estado reportado en el corte de la presentación.' },
  { g:'Infraestructura', n:'Av. Jordán Paralela',     a:18, b:44, est:'bloqueado',      nota:'Teniendo en cuenta el tope presupuestal del componente de infraestructura, se priorizaron los demás corredores. Está en revisión la posibilidad de redistribución.' },
  { g:'Infraestructura', n:'Avenida Ambalá',          a:24, b:53, est:'ejecucion',      nota:'Se encuentra en ejecución.' },
  { g:'Infraestructura', n:'Avenida Ferrocarril',     a:24, b:59, est:'elegible', nota:'El 22 de septiembre de 2026 se obtuvo la elegibilidad de la consultoría. Actualmente, el oficio se encuentra en proceso de modificación respecto a uno de sus puntos.' },
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 1 y 2', a:21, b:35, est:'elegible', nota:'El proyecto, bajo modalidad llave en mano, cuenta con la elegibilidad desde el 22 de septiembre de 2026. Se está organizando la citación a Junta Directiva para aprobación e inicio de la etapa precontractual.' },
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 3',  a:9,  b:35, est:'ejecutado',      nota:'Ejecutado.' },
  { g:'Estaciones y paraderos', n:'Estaciones de integración', a:9, b:62, est:'retirado', nota:'Con la actualización del estudio de demanda operacional (septiembre 2025) no se contemplan estaciones de integración.' },
  { g:'Patiotalleres y terminales', n:'Patiotalleres (Grupos 1 y 2)', a:10, b:71, est:'subsana', nota:'Grupo 1: lotes 2 y 8. Grupo 2: lotes 1, 3, 4, 5, 6, 7 y 9. Actualmente, la entidad se encuentra subsanando las recomendaciones emitidas por la UMUS. De acuerdo con el estudio de actualización del componente operacional (septiembre 2025), se requerirían 5 patiotalleres.' },
  { g:'Infraestructura complementaria', n:'Intervención Centro', a:22, b:41, est:'ejecucion', nota:'Acciones institucionales articuladas; zonas azules como medida de regulación del espacio público en el centro.' },
  { g:'Infraestructura complementaria', n:'Cicloinfraestructura', a:22, b:62, est:'elegible', nota:'El 22 de septiembre de 2026 se obtuvo la elegibilidad de la consultoría. Actualmente, el oficio se encuentra en proceso de modificación respecto a uno de sus puntos.' },
  { g:'Tecnología', n:'Recaudo y control de flota', a:4,  b:26, est:'estructuracion', nota:'Adquisición de equipos: proceso a estructurar en 2026; recursos a comprometer del 2027. Se precisan sus condiciones técnicas y su articulación con el modelo operacional.' },
  { g:'Tecnología', n:'Información al usuario',    a:4,  b:25, est:'estructuracion', nota:'En estructuración junto con control de flota y recaudo, articulada con el modelo operacional.' },
  { g:'Tecnología', n:'Semaforización',            a:12, b:31, est:'ejecucion',      nota:'Fase I al 93,62 % real (corte 20 sep; plazo hasta el 29 sep). Fase II en estructuración.' },
  { g:'Tecnología', n:'Centro de control',         a:0,  b:19, est:'estructuracion', nota:'Previsto en el Lote 6 de Patiotalleres: compra en 2027 y construcción en el segundo semestre de 2027.' }
];

/* ---------------------------------------------------------------------
   HITOS — hoja de ruta.  f = fecha; a = alertas relacionadas
   est: cumplido · programado · porconfirmar (fecha pasada sin reporte)
   ------------------------------------------------------------------- */
const HITOS = [
  { f:new Date(2026,3,30), a:[5],     est:'cumplido',     c:'Desembolso del aporte del Municipio',         t:'Desembolso del aporte del Municipio 2026', r:'Municipio' },
  { f:new Date(2026,5,10), a:[8,5],   est:'cumplido',     c:'Ferrocarril radicado en UMUS',                t:'Consultoría Av. Ferrocarril radicada en UMUS (elegibilidad)', r:'SETP' },
  { f:new Date(2026,5,10), a:[4],     est:'cumplido',     c:'Concepto DNP remitido a la APP',              t:'Concepto del DNP remitido a la APP de iniciativa privada', r:'SETP' },
  { f:new Date(2026,5,30), a:[3],     est:'cumplido',     c:'Reanuda semaforización Fase I',               t:'Reanudación del contrato de semaforización Fase I', r:'Contratista / SETP' },
  { f:new Date(2026,6,3),  a:[8,5],     est:'cumplido',     c:'Ciclorruta Cra 5 radicada en UMUS',        t:'Consultoría de cicloinfraestructura Cra 5 radicada en la UMUS (estaba prevista el 30 jun)', r:'SETP' },
  { f:new Date(2026,6,10), a:[8,5],   est:'cumplido',     c:'Paraderos Tipo I y II radicados',           t:'Paraderos Tipo I y II (Etapa II, llave en mano) radicados en la UMUS (estaban previstos el 7 jul)', r:'SETP' },
  { f:new Date(2026,6,17), a:[8,5],     est:'cumplido',     c:'Patiotalleres radicados en UMUS',           t:'Adquisición predial de patiotalleres radicada en la UMUS', r:'SETP' },
  { f:new Date(2026,6,24), a:[1,2,6], est:'cumplido',     c:'Resultados del modelo financiero',            t:'Resultados del modelo financiero (FET · viabilidad · actos); ahora en calibración', r:'Consultoría' },
  { f:new Date(2026,8,22), a:[8,5],   est:'cumplido',     c:'Elegibilidad de la UMUS',                   t:'Elegibilidad de la UMUS para Ferrocarril, ciclorruta Cra 5 y Paraderos Tipo I y II', r:'UMUS' },
  { f:new Date(2026,8,24), a:[4],     est:'cumplido',     c:'Oficio: mesa interinstitucional y factibilidad', t:'Oficio con la programación de la mesa interinstitucional y solicitud del informe de avance de la factibilidad', r:'SETP' },
  { f:new Date(2026,8,29), a:[3],     est:'programado',   c:'Termina el plazo de la Fase I',               t:'Terminación del plazo vigente del contrato de semaforización Fase I', r:'Contratista' },
  { f:new Date(2026,11,31),a:[9],     est:'programado',   c:'Estructurar recaudo y control de flota',      t:'Estructurar el proceso de Recaudo y Control de flota', r:'SETP' },
  { f:new Date(2027,0,31), a:[9],     est:'programado',   c:'Recursos 2027 y compra del Lote 6',           t:'2027: comprometer recursos de Recaudo/Flota y comprar Lote 6 (Centro de control)', r:'SETP' }
];

const SIN_FECHA = [
  { a:4, c:'Fecha de la mesa interinstitucional',       t:'Mesa MinHacienda · DNP · MinTransporte: programación informada por oficio del 24 sep', r:'SETP' },
  { a:4, c:'Informe de avance de la factibilidad',      t:'La APP privada remite el informe de avance de la etapa de factibilidad (solicitado el 24 sep)', r:'APP privada' },
  { a:6, c:'Adopción del acto administrativo',          t:'Fecha de adopción del acto del componente operacional (borrador en revisión)', r:'SETP' },
  { a:7, c:'Informes mensuales del PMA',                t:'Radicación formal de los informes mensuales pendientes y atención de observaciones', r:'Contratista' },
];

/* ---------------------------------------------------------------------
   FINANZAS (pesos). Fuente: presentación de alertas, alerta de desembolsos
   ------------------------------------------------------------------- */
const MUNICIPIO = {   // aportes del territorio, desembolsos e indexación
  anios      :[2021, 2022, 2023, 2024, 2025, 2026],
  aporte     :[7000000000, 12839596260, 12461918736, 12084241213, 11706563689, 11328886165],
  indexacion :[0, 512433740, 0, 8114522488, 4728343004, 0]      // 2024 = acumulada 2023 y 2024
};
const NACION = {      // convenio de cofinanciación
  anios      :[2024, 2025, 2026],
  convenio   :[60387986840, 68654718016, 61521319030],
  adjudicado :[57830325615, 25978400818, 32537282487],          // 2026 = proyectado (*)
  reprogramar:[2557661225, 42676317198, 28984036543]            // 2026 = proyectado (*)
};

/* proyectos 2026 según la tabla de la Dirección de Planeación (25 sep 2026): valores en pesos y fase actual, tal cual las diapositivas */
const PROY26 = [
  { g:'Infraestructura', n:'Consultoría · Proyecto Av. Ferrocarril',                        nac:0,           mun:1329444200,  est:'elegible',       f:'Con elegibilidad · 22 sep 2026' },
  { g:'Infraestructura', n:'Implementación Paraderos Tipo II y Tipo I',                     nac:9366315493,  mun:0,           est:'elegible',       f:'Con elegibilidad · 22 sep 2026' },
  { g:'Infraestructura', n:'Consultoría · Ciclo infraestructura y adecuación de andenes',   nac:0,           mun:1256243333,  est:'elegible',       f:'Con elegibilidad · 22 sep 2026' },
  { g:'Patiotalleres',   n:'Adquisición Predio 1',                                          nac:0,           mun:10000000000, est:'subsana',        f:'Subsanando recomendaciones' },
  { g:'Patiotalleres',   n:'Adquisición Predio 2',                                          nac:10000000000, mun:0,           est:'subsana',        f:'Subsanando recomendaciones' },
  { g:'Patiotalleres',   n:'Adquisición Predio 3',                                          nac:10000000000, mun:0,           est:'subsana',        f:'Subsanando recomendaciones' },
  { g:'Tecnología',      n:'Semáforos Fase II',                                             nac:0,           mun:11525121714, est:'estructuracion', f:'En estructuración' },
  { g:'Tecnología',      n:'Adquisición equipos Sistema de Recaudo, Gestión y Control de flota', nac:0,      mun:0,           est:'estructuracion', f:'En estructuración', nota:'Proceso a estructurar en el 2026, recursos a comprometer del 2027' }
];
/* totales de la tabla de Planeación (se muestran tal cual, como en la diapositiva) */
const TOT26 = { nac:23730378098, mun:30141495431, total:53871873528 };

/* ---------------------------------------------------------------------
   ALERTA 6 — piezas del borrador del acto administrativo (según la respuesta
   de la Dirección Operativa, 25 sep 2026)
   ------------------------------------------------------------------- */
const ACTO_PARTES = [
  { s:'Actos ya expedidos',  t:'Revisión de los actos administrativos expedidos para implementar el Sistema' },
  { s:'Agentes del Sistema', t:'Requisitos de participación de los agentes' },
  { s:'Indicadores',         t:'Indicadores de prestación del servicio' },
  { s:'Fases',               t:'Implementación gradual por fases, calibrada con el modelo financiero' }
];

/* ---------------------------------------------------------------------
   ALERTA 7 — componentes del PMA y etapas del soporte (25 sep 2026)
   obs: componente con observaciones formuladas por atender
   ------------------------------------------------------------------- */
const PMA_COMP = [
  { id:'amb', n:'Ambiental', ic:'i-leaf',   c:'#3AA56D', obs:false, t:'Entregables revisados, con retroalimentación y lista de chequeo.' },
  { id:'soc', n:'Social',    ic:'i-people', c:'#5B91E3', obs:true,  t:'Con observaciones formuladas: la interventoría verifica que se atiendan.' },
  { id:'sst', n:'SST',       ic:'i-shield', c:'#F6BD4B', obs:false, t:'Seguridad y salud en el trabajo: entregables revisados, con lista de chequeo.' }
];
const PMA_ETAPAS = ['Lista de chequeo remitida','Informes y soportes radicados','Verificación de la interventoría','Remitido al Ente Gestor'];
