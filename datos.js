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
     · GANTT[].est               estado de cada frente (ver ESTADO)

   `per` (Identificada en) usa números romanos para el trimestre: I, II, III, IV.
   Se muestran como «2025 · IV trimestre» — ver perTxt() en escenas.js.
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
   postura: actividades del SETP, en lista (guiones); un ítem con «✓» al
            inicio se marca como ya cumplido (chulo verde en vez de guion).
   ------------------------------------------------------------------- */
const ALERTAS = [
  { n:1, id:'fet', corto:'FET', titulo:'FET: fondo en estructuración', t:'FET no implementado',
    per:'2025-IV', comp:'Financiero', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'El fondo se encuentra en estructuración; el modelo financiero ya tiene resultados y se calibra.',
    hechos:['Resultados del modelo financiero del SETP disponibles.',
            'Calibración de escenarios con el estudio de SAIP & IKON, evaluando la participación de los distintos actores e identificando el mínimo impacto del déficit financiero.',
            'En análisis de fuentes para la alimentación del Fondo.'],
    cifras:[{ t:'Con resultados', l:'modelo financiero del SETP' }, { n:2, l:'frentes en paralelo: calibración de escenarios y análisis de fuentes de alimentación' }],
    postura:['✓Identificación de valores (déficit)', 'Verificación de fuentes de alimentación', 'Concertación del FET'],
    antes:'Modelo financiero por entregar: resultado final previsto para julio de 2026.',
    ahora:'Ya hay resultados del modelo financiero. Se calibran los escenarios con el estudio de SAIP & IKON y se analizan las fuentes de alimentación del Fondo.',
    vistas:[{ vis:'fet', icono:'tap', pregunta:'Toca cada etapa para ver en qué punto se encuentra la estructuración del fondo.' }] },

  { n:2, id:'concertacion', corto:'Transportadores', titulo:'Concertación con transportadores', t:'Concertación con transportadores para viabilidad del sistema',
    per:'2025-IV', comp:'Operaciones', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'Las mesas con los transportadores se vienen realizando.',
    hechos:['Mesas con los transportadores actuales.',
            'Cada empresa estructurará su propio modelo financiero.',
            'Sin formalizar acuerdos ni reconocer operadores.'],
    cifras:[{ t:'En mesas', l:'transportadores actuales, con los resultados del modelo' }, { t:'Decreto 1079', l:'requisitos cuyo cumplimiento se solicitó a las empresas' }],
    postura:['Mesas de trabajo con los transportadores actuales', 'Socialización de los resultados del modelo financiero', 'Verificación de requisitos del Decreto 1079'],
    antes:'Canasta de costos en validación con los operadores; modelo financiero previsto para el 24 de julio.',
    ahora:'Mesas de trabajo con los transportadores: se socializó el modelo financiero y se pidió información del Decreto 1079. Cada empresa estructurará su propio modelo.',
    vistas:[{ vis:'con', icono:'drag', pregunta:'Los buses ya van por la etapa 2. Arrástralos hasta el final para ver cuándo se habilitan los actos.' }] },

  { n:3, id:'semaforos', corto:'Semáforos', titulo:'Semaforización terminada', t:'Retraso contrato de semaforización',
    per:'2025-IV', comp:'Infraestructura', cat:'moderada', act:true, corte:'29 sep 2026',
    frase:'La Fase I quedó terminada al 100 %: las 34 intersecciones están en servicio y seguimiento.',
    hechos:['Las 34 intersecciones de la Fase I están en servicio y seguimiento.',
            'Avance físico y financiero: 100 %.',
            'Corte: 29 de septiembre de 2026, fin del plazo contractual.'],
    cifras:[{ n:100, suf:' %', l:'avance de la Fase I, corte 29 sep' }, { t:'34 de 34', l:'intersecciones en servicio y seguimiento' }],
    postura:['Fase I concluida', '34 de 34 intersecciones en servicio y seguimiento', 'Cierre con la interventoría'],
    antes:'93,62 % ejecutado frente a 96,13 % programado (20 sep). 30 de 34 intersecciones en servicio y seguimiento.',
    ahora:'100 % ejecutado: las 34 intersecciones de la Fase I están en servicio y seguimiento. Corte: 29 de septiembre de 2026.',
    vistas:[{ vis:'sem', icono:null, pregunta:'Fase I terminada: 34 de 34 intersecciones en servicio y seguimiento.' }] },

  { n:4, id:'app', corto:'Tranvía', titulo:'Propuesta de tranvía (APP)', t:'Propuesta APP tranvía podría redefinir convenio',
    per:'2025-IV', comp:'CONPES', cat:'critica', act:true, corte:'24 sep 2026', anim:'tram', resumenAlFinal:true,
    frase:'',
    hechos:['Riel virtual; se presenta como 100 % privado.',
            'Pide ser único operador y usar recursos del CONPES 4017.',
            'Concepto favorable de prefactibilidad (oficio 108379, 27 de octubre de 2025), condicionado: el municipio no firma como deudor ni garante del crédito de la APP, y deben incorporarse las observaciones de Planeación, Infraestructura, Cultura, Hacienda y Movilidad.',
            'Último paso, 24 de septiembre: oficio informando la solicitud de programación de la mesa interinstitucional y solicitando el informe de avance de la etapa de factibilidad.'],
    cifras:[],
    postura:[],
    antes:'Trazabilidad hasta el 1 de junio: mesa técnica para socializar el concepto del DNP.',
    ahora:'Nueva fecha en la trazabilidad: 24 de septiembre, oficio informando la solicitud de programación de la mesa interinstitucional y solicitud del informe de avance de la factibilidad.',
    vistas:[{ vis:'appA', icono:'tap',  pregunta:'Toca una línea para ver con qué proyecto del SETP se superpone.' },
            { vis:'appB', icono:'tap', pregunta:'El tranvía recorre las fechas. Pausa, avanza o salta a cualquier paso con la línea de abajo.' }] },

  { n:5, id:'desembolsos', corto:'Desembolsos', titulo:'Desembolsos frente al POAI', t:'Desembolsos Nación y Municipio no solicitados frente a POAI',
    per:'2026-I', comp:'Financiero', cat:'leve', act:true, corte:'25 sep 2026',
    frase:'El aporte del Municipio para la vigencia 2026 se desembolsó el 30 de abril de 2026.',
    hechos:['Aportes del Municipio 2021–2026: $80,8 mil M acumulado, desembolsado al 100 %.',
            'Convenio con la Nación 2024–2026: $190,6 mil M; $74,2 mil M por reprogramar (2026 proyectado).',
            'Proyectos 2026 con elegibilidad desde el 22 de septiembre; patiotalleres, en subsanación de recomendaciones.'],
    cifras:[{ n:100, suf:' %', l:'de los aportes del Municipio, desembolsados' }, { n:38.9, dec:1, suf:' %', l:'del convenio de la Nación, por reprogramar' }],
    postura:['Proyectos 2026 con elegibilidad', 'Etapa precontractual de Paraderos Tipo I y II', 'Subsanación de recomendaciones (patiotalleres)'],
    antes:'Nación 2026: $23,7 mil M adjudicados y $37,8 mil M por reprogramar. Cuatro frentes radicados en la UMUS, sin elegibilidad.',
    ahora:'Nación 2026: $32,5 mil M adjudicados y $29,0 mil M por reprogramar. Elegibilidad el 22 sep para Ferrocarril, ciclorruta y Paraderos Tipo I y II; los predios de patiotalleres subsanan las recomendaciones de la UMUS.',
    vistas:[{ vis:'desA', icono:'tap', pregunta:'Cifras en miles de millones de pesos ($ mil M). Toca una barra para ver el valor exacto en pesos.' },
            { vis:'desB', icono:null, pregunta:'Proyectos 2026 con su valor y su fase actual, según la Dirección de Planeación.' }] },

  { n:6, id:'actos', corto:'Actos', titulo:'Actos administrativos sin definir', t:'Indefinición de los actos administrativos que adopten las condiciones del modelo operacional',
    per:'2026-I', comp:'Jurídico', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'El acto administrativo de adopción del componente operacional se encuentra en estructuración técnica y jurídica.',
    hechos:['Estructuración técnica y jurídica del acto de adopción del componente operacional.',
            'Insumo: el estudio de actualización del modelo operacional.',
            'Se revisa la implementación gradual por fases frente al modelo financiero.'],
    cifras:[{ t:'En estructuración', l:'técnica y jurídica del acto administrativo' }, { t:'Por fases', l:'implementación gradual, calibrada con el modelo financiero' }],
    postura:['Estructuración técnica y jurídica del acto de adopción', 'Revisión de la implementación gradual por fases', 'Articulación con el modelo financiero'],
    antes:'Actos por paquetes; el plazo adicional para aclaraciones a los operadores no tenía fecha.',
    ahora:'El acto del componente operacional avanza en estructuración técnica y jurídica, con el estudio de actualización del modelo operacional como insumo.',
    vistas:[{ vis:'actos', icono:null, pregunta:'Contenido del acto administrativo y etapa en la que se encuentra.' }] },

  { n:7, id:'pma', corto:'PMA', titulo:'PMA de semaforización, Fase I', t:'No implementación del PMA contrato Semaforización Fase I',
    per:'2026-I', comp:'Ambiental', cat:'leve', act:true, corte:'25 sep 2026',
    frase:'El PMA avanza con mesas técnicas y listas de chequeo.',
    hechos:['Mesas técnicas con el contratista y la interventoría.',
            'Entregables ambiental, social y SST revisados, con listas de chequeo.'],
    cifras:[],
    postura:['Radicación de los informes mensuales', 'Atención de las observaciones del componente social', 'Acompañamiento al contratista hasta el cierre del soporte'],
    antes:'La interventoría no había enviado el informe oficial de alcances e impactos del PMA.',
    ahora:'Mesas técnicas y listas de chequeo enviadas.',
    vistas:[] },

  { n:8, id:'obras', corto:'Obras', titulo:'Obras frente al cronograma CONPES', t:'Retrasos en ejecución de obras de acuerdo con el cronograma CONPES',
    per:'2026-I', comp:'Cronograma', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'Ferrocarril, ciclorruta y Paraderos: elegibilidad desde el 22 de septiembre.',
    hechos:['Av. Ferrocarril y Cicloinfraestructura: elegibilidad el 22 de septiembre; oficio en ajuste de un punto.',
            'Av. Ambalá: en ejecución.',
            'Paraderos Tipo 1 y 2 (llave en mano): con elegibilidad desde el 22 de septiembre; inició la etapa precontractual.',
            'Patio Talleres y Terminales: Grupo 1 (lotes 2 y 8) y Grupo 2 (lotes 1, 3, 4, 5, 6, 7 y 9), subsanando recomendaciones de la UMUS.'],
    cifras:[{ t:'22 sep', l:'elegibilidad de Ferrocarril, ciclorruta y Paraderos Tipo 1 y 2' }, { n:5, l:'patiotalleres requeridos según la actualización del componente operacional (sep. 2025)' }],
    postura:['Elegibilidad de Ferrocarril, ciclorruta y Paraderos Tipo 1 y 2', 'Etapa precontractual de Paraderos Tipo 1 y 2', 'Patiotalleres: subsanación de las recomendaciones de la UMUS'],
    antes:'Ferrocarril, ciclorruta, Paraderos Tipo 1 y 2 y patiotalleres radicados en la UMUS, en espera del concepto de elegibilidad.',
    ahora:'Elegibilidad el 22 de septiembre para Ferrocarril, ciclorruta y Paraderos Tipo 1 y 2. Se inició la etapa precontractual de Paraderos; los patiotalleres subsanan las recomendaciones de la UMUS.',
    vistas:[{ vis:'obraFull', icono:'tap', pregunta:'Cronograma completo. Toca la imagen para ampliarla.' },
            { vis:'obraInf', icono:'tap', pregunta:'Infraestructura. Toca la imagen para ampliarla.' },
            { vis:'obraEst', icono:'tap', pregunta:'Estaciones y Paraderos. Toca la imagen para ampliarla.' },
            { vis:'obraPat', icono:'tap', pregunta:'Patio Talleres y Terminales. Toca la imagen para ampliarla.' },
            { vis:'obraCom', icono:'tap', pregunta:'Infraestructura Complementaria. Toca la imagen para ampliarla.' },
            { vis:'obraB', icono:'tap',  pregunta:'Toca un proyecto o un símbolo de las convenciones.' }] },

  { n:9, id:'tecno', corto:'Tecnología', titulo:'Componente tecnológico', t:'Rezagos en los avances para la estructuración e implementación del componente tecnológico',
    per:'2026-II', comp:'Operaciones', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'Flota, información al usuario y recaudo se estructuran como un solo paquete.',
    hechos:['En estructuración: gestión y control de flota, información al usuario y recaudo.',
            'Se requiere definir los AOT y el AOR.'],
    cifras:[{ n:3, l:'sistemas del componente tecnológico: flota, información al usuario y recaudo' }],
    postura:['Estructuración conjunta de flota, información al usuario y recaudo', 'Definición de los AOT y del AOR'],
    antes:'Recaudo y control de flota con recursos desde 2027.',
    ahora:'Se estructuran como un solo paquete el control de flota, la información al usuario y el recaudo; se requiere definir los AOT y el AOR.',
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
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 1', a:21, b:35, est:'elegible', nota:'El proyecto, bajo modalidad llave en mano, cuenta con la elegibilidad desde el 22 de septiembre de 2026. Ya inició la etapa precontractual.' },
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 2', a:21, b:35, est:'elegible', nota:'El proyecto, bajo modalidad llave en mano, cuenta con la elegibilidad desde el 22 de septiembre de 2026. Ya inició la etapa precontractual.' },
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 3',  a:9,  b:35, est:'ejecutado',      nota:'Ejecutado.' },
  { g:'Estaciones y paraderos', n:'Estaciones de integración', a:9, b:62, est:'retirado', nota:'Con la actualización del estudio de demanda operacional (septiembre 2025) no se contemplan estaciones de integración.' },
  { g:'Patiotalleres y terminales', n:'Patio Grupo 1', a:10, b:71, est:'subsana', nota:'Lotes 2 y 8. Actualmente, la entidad se encuentra subsanando las recomendaciones emitidas por la UMUS.' },
  { g:'Patiotalleres y terminales', n:'Patio Grupo 2', a:10, b:71, est:'subsana', nota:'Lotes 1, 3, 4, 5, 6, 7 y 9. Actualmente, la entidad se encuentra subsanando las recomendaciones emitidas por la UMUS. De acuerdo con el estudio de actualización del componente operacional (septiembre 2025), se requerirían 5 patiotalleres.' },
  { g:'Infraestructura complementaria', n:'Intervención Centro', a:22, b:41, est:'ejecucion', nota:'Acciones institucionales articuladas; zonas azules como medida de regulación del espacio público en el centro.' },
  { g:'Infraestructura complementaria', n:'Cicloinfraestructura', a:22, b:62, est:'elegible', nota:'El 22 de septiembre de 2026 se obtuvo la elegibilidad de la consultoría. Actualmente, el oficio se encuentra en proceso de modificación respecto a uno de sus puntos.' },
  { g:'Interventoría obras y gerencia', n:'Interventorías', a:0, b:71, est:'ejecucion', nota:'Interventoría de las obras del componente de infraestructura, activa durante toda la ejecución.' },
  { g:'Interventoría obras y gerencia', n:'Gerencia del Proyecto', a:0, b:71, est:'ejecucion', nota:'Gerencia integral del proyecto, activa durante toda la ejecución.' },
  { g:'Tecnología', n:'Sistema de Recaudo', a:4,  b:26, est:'estructuracion', nota:'Adquisición de equipos: proceso a estructurar en 2026; recursos a comprometer del 2027. Se precisan sus condiciones técnicas y su articulación con el modelo operacional.' },
  { g:'Tecnología', n:'Sistema de Gestión y Control de Flota', a:4,  b:26, est:'estructuracion', nota:'Adquisición de equipos: proceso a estructurar en 2026; recursos a comprometer del 2027. Se precisan sus condiciones técnicas y su articulación con el modelo operacional.' },
  { g:'Tecnología', n:'Sistema de Información al Usuario',    a:4,  b:25, est:'estructuracion', nota:'En estructuración junto con control de flota y recaudo, articulada con el modelo operacional.' },
  { g:'Tecnología', n:'Sistema de Semaforización',            a:12, b:31, est:'ejecutado',      nota:'Fase I terminada al 100 %, corte 29 de septiembre de 2026. Fase II en estructuración.' },
  { g:'Tecnología', n:'Centro de Control',         a:0,  b:19, est:'estructuracion', nota:'Previsto en el Lote 6 de Patiotalleres: compra en 2027 y construcción en el segundo semestre de 2027.' }
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
  reprogramar:[2557661225, 42676317198, 28984036543],            // 2026 = proyectado (*)
  pagado     :[0, 57830325615, 0]                                // único pago real hasta el corte: $57.830.325.615 en 2025; 2024 y 2026 sin pagos
};

/* proyectos 2026 según la tabla de la Dirección de Planeación (25 sep 2026): valores en pesos y fase actual, tal cual las diapositivas.
   Semáforos Fase II: el valor va del lado de Nación (corregido). */
const PROY26 = [
  { g:'Infraestructura', n:'Consultoría · Proyecto Av. Ferrocarril',                        nac:0,           mun:1329444200,  est:'elegible',       f:'Con elegibilidad · 22 sep 2026' },
  { g:'Infraestructura', n:'Implementación Paraderos Tipo II y Tipo I',                     nac:9366315493,  mun:0,           est:'elegible',       f:'Con elegibilidad · 22 sep 2026' },
  { g:'Infraestructura', n:'Interventoría Paraderos Tipo II y Tipo I',                      nac:964050784,   mun:0,           est:'elegible',       f:'Con elegibilidad · 22 sep 2026' },
  { g:'Infraestructura', n:'Consultoría · Ciclo infraestructura y adecuación de andenes',   nac:0,           mun:1256243333,  est:'elegible',       f:'Con elegibilidad · 22 sep 2026' },
  { g:'Patiotalleres',   n:'Adquisición Predio 1',                                          nac:0,           mun:10000000000, est:'subsana',        f:'Subsanando recomendaciones' },
  { g:'Patiotalleres',   n:'Adquisición Predio 2',                                          nac:0,           mun:10000000000, est:'subsana',        f:'Subsanando recomendaciones' },
  { g:'Patiotalleres',   n:'Adquisición Predio 3',                                          nac:10000000000, mun:0,           est:'subsana',        f:'Subsanando recomendaciones' },
  { g:'Tecnología',      n:'Semáforos Fase II',                                             nac:11525121714, mun:0,           est:'estructuracion', f:'En estructuración' },
  { g:'Tecnología',      n:'Interventoría Semáforos Fase II',                               nac:990203195,   mun:0,           est:'estructuracion', f:'En estructuración' },
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
