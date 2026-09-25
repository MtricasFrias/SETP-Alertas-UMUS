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
  { n:1, id:'fet', corto:'FET', titulo:'FET: fondo sin constituir', t:'FET no implementado',
    per:'2025-IV', comp:'Financiero', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'El fondo *aún no se constituye*, pero el modelo financiero *ya tiene resultados* y se calibra.',
    hechos:['Resultados del modelo financiero del SETP disponibles.',
            'Calibración de escenarios con el estudio de SAIP & IKON.',
            'Análisis de fuentes de recursos para financiar el fondo.'],
    cifras:[{ t:'Con resultados', l:'modelo financiero del SETP' }, { n:2, l:'frentes en paralelo: calibrar escenarios y analizar fuentes de recursos' }],
    postura:'Primero las cifras, después el fondo: ingresos, costos y necesidades de financiación por escenario, y luego el esquema de financiación.',
    antes:'Modelo financiero por entregar: resultado final previsto para julio de 2026.',
    ahora:'Ya hay resultados del modelo financiero. Se calibran los escenarios de entrada en operación y se analizan las fuentes de recursos del fondo.',
    vistas:[{ vis:'fet', icono:'tap', pregunta:'Toca cada etapa para ver dónde estamos y mueve los deslizadores para llenar el fondo. Supuestos ilustrativos.' }] },

  { n:2, id:'concertacion', corto:'Transportadores', titulo:'Concertación con transportadores', t:'Concertación con transportadores para viabilidad del sistema',
    per:'2025-IV', comp:'Operaciones', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'Las mesas con transportadores *ya están en marcha*: modelo socializado y requisitos del Decreto 1079 solicitados.',
    hechos:['Mesas con los transportadores actuales.',
            'Cada empresa estructura su propio modelo financiero.',
            'Sin formalizar acuerdos ni reconocer operadores.'],
    cifras:[{ t:'En mesas', l:'transportadores actuales, con los resultados del modelo' }, { t:'Decreto 1079', l:'requisitos cuyo cumplimiento se solicitó a las empresas' }],
    postura:'Ningún acto sale sin viabilidad demostrada ni requisitos verificados. Las dos vías deben llegar juntas.',
    antes:'Canasta de costos en validación con los operadores; modelo financiero previsto para el 24 de julio.',
    ahora:'Mesas de trabajo con los transportadores: se socializó el modelo financiero y se pidió información del Decreto 1079. Cada empresa estructura su propio modelo.',
    vistas:[{ vis:'con', icono:'drag', pregunta:'Los buses ya van por la etapa 3. Arrástralos hasta el final para ver cuándo se habilitan los actos.' }] },

  { n:3, id:'semaforos', corto:'Semáforos', titulo:'Semaforización con retraso', t:'Retraso contrato de semaforización',
    per:'2025-IV', comp:'Infraestructura', cat:'moderada', act:true, corte:'20 sep 2026',
    frase:'El retraso no está en instalar: está en *integrar, configurar y probar*. Ya hay 30 de 34 intersecciones en servicio.',
    hechos:['20 sep: 93,62 % ejecutado frente a 96,13 % programado.',
            'El 6 sep iba adelante: 92,97 % frente a 92,26 %.',
            'El plazo contractual vence el 29 de septiembre de 2026.'],
    cifras:[{ n:93.62, dec:2, suf:' %', l:'avance real ejecutado, corte 20 sep' }, { n:2.51, dec:2, suf:' pts', l:'por debajo de lo programado frente al cronograma' }],
    postura:'La interventoría vigila la etapa final: planeamiento, configuración, integración y pruebas, para cerrar el contrato dentro del plazo vigente.',
    antes:'75,01 % ejecutado; 25 de 34 intersecciones instaladas; prórroga de hasta 2 meses sin solicitud formal.',
    ahora:'93,62 % ejecutado frente a 96,13 % programado (20 sep). 30 de 34 intersecciones en servicio. El plazo vence el 29 de septiembre.',
    vistas:[{ vis:'sem', icono:'tap', pregunta:'Alterna el corte del 6 al 20 de septiembre, toca el semáforo o simula el cierre de la Fase I.' }] },

  { n:4, id:'app', corto:'Tranvía', titulo:'Propuesta de tranvía (APP)', t:'Propuesta APP tranvía podría redefinir convenio',
    per:'2025-IV', comp:'CONPES', cat:'critica', act:true, corte:'24 sep 2026', anim:'tram',
    frase:'El CONPES 4017 *no permite el tranvía*. Cualquier avance exige un nuevo CONPES; el SETP sigue su ruta.',
    hechos:['Riel virtual; se presenta como 100 % privado.',
            'Pide ser único operador y usar recursos del CONPES 4017.',
            'Concepto favorable de prefactibilidad: 27 oct 2025.',
            'Último paso, 24 sep: oficio sobre la mesa interinstitucional.'],
    cifras:[{ n:321065, l:'viajes por día que proyecta la propuesta' }, { t:'3 de 4', l:'troncales coinciden con corredores del SETP' }],
    postura:'El marco vigente es el CONPES 4017. El ART entra por un nuevo CONPES o no entra; lo que coincide con el SETP se integra, no se duplica.',
    antes:'Trazabilidad hasta el 1 de junio: mesa técnica para socializar el concepto del DNP.',
    ahora:'Nueva fecha en la trazabilidad: 24 de septiembre, oficio con la programación de la mesa interinstitucional y solicitud del informe de avance de la factibilidad.',
    vistas:[{ vis:'appA', icono:'tap',  pregunta:'Toca una línea para ver con qué proyecto del SETP se superpone.' },
            { vis:'appB', icono:'tap', pregunta:'El tranvía recorre las fechas. Pausa, avanza o salta a cualquier paso con la línea de abajo.' },
            { vis:'appC', icono:'tap', pregunta:'Toca cada condición: enciende una luz. Con las 4, el tranvía avanza.' }] },

  { n:5, id:'desembolsos', corto:'Desembolsos', titulo:'Desembolsos frente al POAI', t:'Desembolsos Nación y Municipio no solicitados frente a POAI',
    per:'2026-I', comp:'Financiero', cat:'leve', act:true, corte:'25 sep 2026',
    frase:'El Municipio cumplió *el 100 % de sus aportes*. Lo que falta es velocidad de contratación.',
    hechos:['Aportes 2021–2026: $80,8 mil M desembolsados; el de 2026, el 30 de abril.',
            'Convenio Nación 2024–2026: $190,6 mil M; $74,2 mil M por reprogramar.',
            'Ferrocarril, ciclorruta y Paraderos I y II ya tienen elegibilidad (22 sep); patiotalleres subsana las recomendaciones de la UMUS.'],
    cifras:[{ n:100, suf:' %', l:'de los aportes del Municipio, desembolsados' }, { n:38.9, dec:1, suf:' %', l:'del convenio de la Nación, por reprogramar' }],
    postura:'Cada peso tiene proyecto y fase. Lo que no alcance a contratarse en la vigencia se reprograma con calendario.',
    antes:'Nación 2026: $23,7 mil M adjudicados y $37,8 mil M por reprogramar. Cuatro frentes radicados en la UMUS, sin elegibilidad.',
    ahora:'Nación 2026: $32,5 mil M adjudicados y $29,0 mil M por reprogramar. Elegibilidad el 22 sep para Ferrocarril, ciclorruta y Paraderos Tipo I y II; los predios de patiotalleres subsanan las recomendaciones de la UMUS.',
    vistas:[{ vis:'desA', icono:'tap', pregunta:'Cifras en miles de millones de pesos ($ mil M). Toca una barra para ver el valor exacto en pesos.' },
            { vis:'desB', icono:'tap', pregunta:'A: mira los frentes de 2026. B: toca los proyectos y comprueba si alcanzan lo que falta financiar.' }] },

  { n:6, id:'actos', corto:'Actos', titulo:'Actos administrativos sin definir', t:'Indefinición de los actos administrativos que adopten las condiciones del modelo operacional',
    per:'2026-I', comp:'Jurídico', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'El acto del componente operacional *ya tiene borrador* y está en revisión.',
    hechos:['Estructuración técnica y jurídica del acto de adopción del componente operacional.',
            'Insumo: el estudio de actualización del modelo operacional.',
            'Se revisa la implementación gradual por fases frente al modelo financiero.'],
    cifras:[{ t:'Borrador', l:'del acto administrativo, en revisión' }, { t:'Por fases', l:'implementación gradual, calibrada con el modelo financiero' }],
    postura:'Un acto sólido antes que uno rápido: se consolida el sustento técnico y jurídico y se continúa el trámite hasta su adopción.',
    antes:'Actos por paquetes; el plazo adicional para aclaraciones a los operadores no tenía fecha.',
    ahora:'El acto del componente operacional ya tiene borrador en revisión, con el estudio de actualización del modelo operacional como insumo.',
    vistas:[{ vis:'actos', icono:'drag', pregunta:'Arrastra cada pieza al documento para armar el borrador del acto.' }] },

  { n:7, id:'pma', corto:'PMA', titulo:'PMA de semaforización, Fase I', t:'No implementación del PMA contrato Semaforización Fase I',
    per:'2026-I', comp:'Ambiental', cat:'leve', act:true, corte:'25 sep 2026',
    frase:'El PMA *avanza con mesas técnicas y listas de chequeo*; faltan los informes mensuales y atender observaciones.',
    hechos:['Mesas técnicas con el contratista y la interventoría.',
            'Entregables ambiental, social y SST revisados, con listas de chequeo.',
            'Pendiente: radicar informes mensuales y atender observaciones sociales.'],
    cifras:[{ n:3, l:'componentes en revisión: ambiental, social y SST' }, { t:'Social', l:'componente con más observaciones por atender' }],
    postura:'Sin informes mensuales radicados y observaciones atendidas no hay cierre contractual ni liquidación. Se acompaña al contratista hasta cerrar el soporte.',
    antes:'La interventoría no había enviado el informe oficial de alcances e impactos del PMA.',
    ahora:'Mesas técnicas y listas de chequeo enviadas. Falta radicar informes mensuales y atender observaciones, sobre todo del componente social.',
    vistas:[{ vis:'pma', icono:'tap', pregunta:'Avanza cada componente por la ruta: contratista, interventoría y Ente Gestor.' }] },

  { n:8, id:'obras', corto:'Obras', titulo:'Obras frente al cronograma CONPES', t:'Retrasos en ejecución de obras de acuerdo con el cronograma CONPES',
    per:'2026-I', comp:'Cronograma', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'Ferrocarril, ciclorruta y Paraderos I y II ya tienen *elegibilidad*. El rezago real está en *patiotalleres, paraderos y Jordán Paralela*.',
    hechos:['Elegibilidad el 22 de septiembre: Ferrocarril, ciclorruta y Paraderos Tipo I y II.',
            'Ambalá en ejecución; Carrera 5, Fases I y II, ejecutada.',
            'Patiotalleres: el SETP subsana las recomendaciones de la UMUS.'],
    cifras:[{ t:'+9 meses', l:'de rezago en Paraderos Tipo 1 y 2 frente al plan' }, { t:'22 sep', l:'elegibilidad de Ferrocarril, ciclorruta y Paraderos I y II' }],
    postura:'Cada rezago tiene una decisión pendiente: Junta Directiva, oficio de elegibilidad, patiotalleres y Jordán Paralela.',
    antes:'Ferrocarril, ciclorruta, Paraderos I y II y patiotalleres radicados en la UMUS (junio y julio), a la espera de la elegibilidad.',
    ahora:'Elegibilidad el 22 de septiembre para Ferrocarril, ciclorruta y Paraderos Tipo I y II. Paraderos pasa a Junta Directiva para iniciar la etapa precontractual; los patiotalleres subsanan las recomendaciones de la UMUS.',
    vistas:[{ vis:'obraA', icono:'drag', pregunta:'Arrastra la línea «hoy» y toca una barra para ver el estado de cada frente.' },
            { vis:'obraB', icono:'tap',  pregunta:'Toca un proyecto o un símbolo de las convenciones.' }] },

  { n:9, id:'tecno', corto:'Tecnología', titulo:'FET y componente tecnológico', t:'Rezagos en los avances para la estructuración e implementación del FET y componente tecnológico',
    per:'2026-II', comp:'Operaciones', cat:'critica', act:true, corte:'25 sep 2026',
    frase:'La tecnología es la *ruta crítica*: flota, información al usuario y recaudo se estructuran como *un solo paquete*.',
    hechos:['Modelo financiero actualizado con los parámetros del modelo operacional.',
            'Fuentes de recursos del FET en análisis.',
            'En estructuración: flota, información al usuario y recaudo.'],
    cifras:[{ n:3, l:'sistemas del componente tecnológico: flota, información al usuario y recaudo' }, { t:'+22 meses', l:'de rezago del centro de control frente al plan' }],
    postura:'Sin recaudo, control de flota e información al usuario no hay servicio integrado. Se estructuran juntos y articulados al modelo operacional.',
    antes:'Recaudo y control de flota con recursos desde 2027; el FET dependía del resultado del modelo financiero.',
    ahora:'Modelo financiero actualizado con el modelo operacional. Se estructuran como un solo paquete el control de flota, la información al usuario y el recaudo.',
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
  { g:'Infraestructura', n:'Carrera 5',               a:18, b:37, est:'ejecutado',      nota:'Contrato de Obra 046 de 2025: Fase I (Cl 64–103 y Av. Ambalá Cl 103–95, $13.919,8 M con interventoría) y Fase II (Cl 10–58, 10.160 m, obra por $35.399,9 M) ejecutadas.' },
  { g:'Infraestructura', n:'Avenida Jordán',          a:18, b:44, est:'sindato',        nota:'Sin estado reportado en el corte de la presentación.' },
  { g:'Infraestructura', n:'Av. Jordán Paralela',     a:18, b:44, est:'bloqueado',      nota:'Por el tope presupuestal del componente se priorizaron los demás corredores. En revisión la posibilidad de redistribución.' },
  { g:'Infraestructura', n:'Avenida Ambalá',          a:24, b:53, est:'ejecucion',      nota:'Contrato de Obra 042 de 2026 en ejecución.' },
  { g:'Infraestructura', n:'Avenida Ferrocarril',     a:24, b:59, est:'elegible', nota:'Consultoría (estudios y diseños Fase III) radicada en la UMUS el 10 de junio de 2026. El 22 de septiembre obtuvo la elegibilidad; el oficio se ajusta en uno de sus puntos.' },
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 1 y 2', a:21, b:35, est:'elegible', nota:'Etapa II (Tipo I, Tipo II y MUPI, $9.366,3 M), llave en mano. Con elegibilidad desde el 22 de septiembre de 2026; se cita a la Junta Directiva para aprobarla e iniciar la etapa precontractual.' },
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 3',  a:9,  b:35, est:'ejecutado',      nota:'1.150 de 1.150 señales instaladas (Contrato 037 de 2025).' },
  { g:'Estaciones y paraderos', n:'Estaciones de integración', a:9, b:62, est:'retirado', nota:'Con la actualización del estudio de demanda operacional (septiembre 2025) no se contemplan estaciones de integración.' },
  { g:'Patiotalleres y terminales', n:'Patiotalleres (Grupos 1 y 2)', a:10, b:71, est:'subsana', nota:'Adquisición de tres predios ($10.000 M cada uno) radicada en la UMUS el 17 de julio de 2026. El SETP subsana las recomendaciones de la UMUS; aún no se ha comprado ningún lote. Grupo 1: lotes 2 y 8; Grupo 2: lotes 1, 3, 4, 5, 6, 7 y 9. El estudio de septiembre 2025 indica que se requerirían 5 patiotalleres.' },
  { g:'Infraestructura complementaria', n:'Intervención Centro', a:22, b:41, est:'ejecucion', nota:'Acciones institucionales articuladas; zonas azules como medida de regulación del espacio público en el centro.' },
  { g:'Infraestructura complementaria', n:'Cicloinfraestructura', a:22, b:62, est:'elegible', nota:'Estudios y diseños Fase III de la Carrera 5 (Cl 10–44, 7.217 m, $29.098,3 M), radicados el 3 de julio de 2026. Con elegibilidad desde el 22 de septiembre; el oficio se ajusta en uno de sus puntos.' },
  { g:'Tecnología', n:'Recaudo y control de flota', a:4,  b:26, est:'estructuracion', nota:'Adquisición de equipos: proceso a estructurar en 2026; recursos a comprometer del 2027. Se precisan sus condiciones técnicas y su articulación con el modelo operacional.' },
  { g:'Tecnología', n:'Información al usuario',    a:4,  b:25, est:'estructuracion', nota:'En estructuración junto con control de flota y recaudo, articulada con el modelo operacional.' },
  { g:'Tecnología', n:'Semaforización',            a:12, b:31, est:'ejecucion',      nota:'Fase I al 93,62 % real (corte 20 sep; plazo hasta el 29 sep). Fase II en estructuración (obra por $11.525 M).' },
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
  { a:8, c:'Junta Directiva: Paraderos I y II',    t:'Citación a Junta Directiva para aprobar Paraderos Tipo I y II e iniciar la etapa precontractual', r:'SETP' },
  { a:8, c:'Oficio de elegibilidad ajustado',      t:'Modificar un punto del oficio de elegibilidad de Ferrocarril y ciclorruta',                      r:'UMUS · SETP' },
  { a:8, c:'Recomendaciones sobre patiotalleres',  t:'Subsanar las recomendaciones de la UMUS sobre la adquisición de predios de patiotalleres',       r:'SETP' },
  { a:5, c:'Contratación de lo elegible',          t:'Contratar Ferrocarril, ciclorruta y Paraderos I y II con los recursos de 2026',                 r:'SETP' },
  { a:8, c:'Decisión sobre el tope de Jordán Paralela', t:'Decisión sobre redistribución del tope de Av. Jordán Paralela',      r:'SETP' },
  { a:8, c:'Decisión sobre el modelo de patiotalleres', t:'Decisión sobre el modelo de patiotalleres (5 requeridos)',           r:'SETP' }
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

/* proyectos 2026 según Planeación (25 sep): fase 0 estructuración · 1 radicado UMUS · 2 con elegibilidad · 3 contratación · 4 desembolso */
const PROY26 = [
  { n:'Consultoría · Av. Ferrocarril',                 comp:'Infraestructura', mun:1329444200,  nac:0,           fase:2, txt:'Con elegibilidad · 22 de septiembre. El oficio se ajusta en uno de sus puntos.' },
  { n:'Paraderos Tipo I y II (llave en mano)',         comp:'Infraestructura', mun:0,           nac:9366315493,  fase:2, txt:'Con elegibilidad · 22 de septiembre. Se cita a la Junta Directiva para aprobarla e iniciar la etapa precontractual.' },
  { n:'Consultoría · Ciclorruta y andenes',  comp:'Infraestructura', mun:1256243333,  nac:0,           fase:2, txt:'Con elegibilidad · 22 de septiembre. El oficio se ajusta en uno de sus puntos.' },
  { n:'Adquisición Predio 1 · Patiotalleres',          comp:'Patiotalleres',   mun:10000000000, nac:0,           fase:1, txt:'Radicado en UMUS · 17 de julio. Subsanando las recomendaciones de la UMUS.' },
  { n:'Adquisición Predio 2 · Patiotalleres',          comp:'Patiotalleres',   mun:0,           nac:10000000000, fase:1, txt:'Radicado en UMUS · 17 de julio. Subsanando las recomendaciones de la UMUS.' },
  { n:'Adquisición Predio 3 · Patiotalleres',          comp:'Patiotalleres',   mun:0,           nac:10000000000, fase:1, txt:'Radicado en UMUS · 17 de julio. Subsanando las recomendaciones de la UMUS.' },
  { n:'Semáforos Fase II',                             comp:'Tecnología',      mun:11525121714, nac:0,           fase:0, txt:'En estructuración · obra por $11.525 M (con interventoría suma $12.515 M).' }
];
/* totales de la tabla de Planeación (no cambiaron y no coinciden con la suma de las filas: se muestran tal cual y se consultó) */
const TOT26 = { nac:23730378098, mun:30141495431, total:53871873528 };
const FASES = ['Estructuración','Radicado','Con elegibilidad','Contratación','Desembolso'];

/* cartera con presupuesto identificado en las fichas del SETP (obra + interventoría), en pesos.
   Referencial: valores totales del proyecto, sin discriminar aporte Nación / Municipio. */
const CARTERA = [
  { n:'Av. Ferrocarril', v:34156900000, req:'Obra e interventoría · requiere diseños' },
  { n:'Ciclorruta Cra 5', v:27842100000, req:'Obra e interventoría · requiere consultoría' },
  { n:'Semáforos Fase III', v:9360900000, req:'Obra e interventoría · prevista para 2027' }
];

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
