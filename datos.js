/* =====================================================================
   SETP Ibagué · Seguimiento general de alertas UMUS — DATOS
   ---------------------------------------------------------------------
   Único archivo a editar para actualizar el contenido.
   Fuente: "SEGUIMIENTO GENERAL ALERTAS UMUS 26-06-2026" + tabla oficial
   de 9 alertas (No., período, componente, categoría).

   ACTUALIZAR al cambiar el corte:
     · CORTE                     fecha de corte de la información
     · HITOS[].est               'cumplido' | 'programado'
     · GANTT[].est               estado de cada frente (ver ESTADO)
     · ALERTAS[].hechos / postura   texto de cada alerta
   ===================================================================== */

const CORTE = { txt:'26 jun 2026', fecha:new Date(2026,5,26) };

const CAT = {
  critica :{ n:'Crítica',  c:'#D3313A', tx:'#FFFFFF' },
  moderada:{ n:'Moderada', c:'#F0A800', tx:'#0F1F52' },
  leve    :{ n:'Leve',     c:'#1E9E4F', tx:'#FFFFFF' }
};

const COMPONENTES = ['Financiero','Operaciones','Infraestructura','CONPES','Jurídico','Ambiental','Cronograma'];
const PERIODOS    = ['2025-IV','2026-I','2026-II'];

/* ---------------------------------------------------------------------
   ALERTAS — en el orden de la tabla oficial (No. 1 a 9)
   vistas: 1 o 2 escenas por alerta; cada una con su clave `vis` (visuales.js)
   ------------------------------------------------------------------- */
const ALERTAS = [
  { n:1, id:'fet', corto:'FET', titulo:'FET: fondo sin constituir', t:'FET no implementado',
    per:'2025-IV', comp:'Financiero', cat:'critica',
    frase:'El fondo *aún no existe*. Se dimensiona con el modelo financiero de julio: con cifras, no con urgencias.',
    hechos:['En estructuración técnica; sin constituir formalmente.',
            'Una consultoría actualiza el modelo financiero del sistema.',
            'Falta la metodología para estimar el déficit operacional.'],
    cifras:[{ t:'Jul 2026', l:'resultado final del modelo financiero' }, { n:5, l:'pasos en la hoja de ruta hasta implementarlo' }],
    postura:'Decidimos con el modelo en la mano: primero las cifras, después el fondo. El Municipio respalda la sostenibilidad del SETP y la equidad tarifaria.',
    vistas:[{ vis:'fet', icono:'drag', pregunta:'Mueve los deslizadores y mira cuánto se llena el fondo. Supuestos ilustrativos.' }] },

  { n:2, id:'concertacion', corto:'Transportadores', titulo:'Concertación con transportadores', t:'Concertación con transportadores para viabilidad del sistema',
    per:'2025-IV', comp:'Operaciones', cat:'critica',
    frase:'La viabilidad se cierra con *números abiertos*: canasta de costos validada con los operadores y modelo financiero el 24 de julio.',
    hechos:['Se valida la canasta de costos con los operadores.',
            'El modelo financiero cierra el 24 de julio.',
            'Con eso se evalúa la viabilidad y se definen los actos.'],
    cifras:[{ t:'24 jul', l:'resultado final del modelo financiero' }, { n:2, l:'vías que deben converger: financiera y normativa' }],
    postura:'Ningún acto sale sin viabilidad demostrada ni requisitos verificados. Las dos vías llegan al mismo punto.',
    vistas:[{ vis:'con', icono:'drag', pregunta:'Arrastra cada bus hasta el final. Cuando las dos vías llegan, se habilitan los actos.' }] },

  { n:3, id:'semaforos', corto:'Semáforos', titulo:'Semaforización con retraso', t:'Retraso contrato de semaforización',
    per:'2025-IV', comp:'Infraestructura', cat:'moderada',
    frase:'El retraso no está en instalar: está en *integrar, validar y poner en operación*.',
    hechos:['25 de 34 intersecciones instaladas; 14 en funcionamiento.',
            'Suspensión No. 2; reanudación el 30 de junio de 2026.',
            'Prórroga de hasta 2 meses, sin solicitud formal aún.'],
    cifras:[{ n:75.01, dec:2, suf:' %', l:'avance real ejecutado' }, { n:99.76, dec:2, suf:' %', l:'avance programado' }],
    postura:'Prórroga acotada y atada a hitos: controladores completos, planes aprobados y red sincronizada y validada.',
    vistas:[{ vis:'sem', icono:'tap', pregunta:'Toca el semáforo o simula el cierre de la Fase I.' }] },

  { n:4, id:'app', corto:'Tranvía', titulo:'Propuesta de tranvía (APP)', t:'Propuesta APP tranvía podría redefinir convenio',
    per:'2025-IV', comp:'CONPES', cat:'critica',
    frase:'El CONPES 4017 *no permite el tranvía*. Cualquier avance exige un nuevo CONPES; el SETP sigue su ruta.',
    hechos:['Riel virtual; se presenta como 100 % privado.',
            'Pide ser único operador y usar recursos del CONPES 4017.',
            'Concepto favorable de prefactibilidad: 27 oct 2025.'],
    cifras:[{ n:321065, l:'viajes por día que proyecta la propuesta' }, { t:'3 de 4', l:'troncales coinciden con corredores del SETP' }],
    postura:'El marco vigente es el CONPES 4017. El ART entra por un nuevo CONPES o no entra; lo que coincide con el SETP se integra, no se duplica.',
    vistas:[{ vis:'appA', icono:'tap',  pregunta:'Toca una línea para ver con qué proyecto del SETP se superpone.' },
            { vis:'appB', icono:'drag', pregunta:'Arrastra el tranvía por la trazabilidad y marca las condiciones para avanzar.' }] },

  { n:5, id:'desembolsos', corto:'Desembolsos', titulo:'Desembolsos frente al POAI', t:'Desembolsos Nación y Municipio no solicitados frente a POAI',
    per:'2026-I', comp:'Financiero', cat:'leve',
    frase:'El Municipio cumplió *el 100 % de sus aportes*. Lo que falta es velocidad de contratación.',
    hechos:['Aportes 2021–2026: $80,8 mil M desembolsados.',
            'Convenio Nación 2024–2026: $190,6 mil M; $83,0 mil M por reprogramar.',
            'En 2026, seis frentes suman $53,9 mil M.'],
    cifras:[{ n:100, suf:' %', l:'de los aportes del Municipio, desembolsados' }, { n:43.6, dec:1, suf:' %', l:'del convenio de la Nación, por reprogramar' }],
    postura:'Cada peso tiene proyecto y fase. Lo que no alcance a contratarse en la vigencia se reprograma con calendario.',
    vistas:[{ vis:'desA', icono:'tap', pregunta:'Toca las barras para ver los valores. Activa o quita la indexación.' },
            { vis:'desB', icono:'tap', pregunta:'Toca un frente de 2026 y suma proyectos para ver si alcanzan lo por reprogramar.' }] },

  { n:6, id:'actos', corto:'Actos', titulo:'Actos administrativos sin definir', t:'Indefinición de los actos administrativos que adopten las condiciones del modelo operacional',
    per:'2026-I', comp:'Jurídico', cat:'critica',
    frase:'Los actos salen *por paquetes*: primero los que no dependen del modelo. Sin plazos abiertos.',
    hechos:['Adoptan las condiciones del modelo operacional.',
            'Dependen de la viabilidad y la verificación normativa.',
            'El plazo adicional para aclaraciones aún no tiene fecha.'],
    cifras:[{ t:'24 jul', l:'modelo financiero: de él dependen varios actos' }, { t:'Sin fecha', l:'plazo adicional para aclaraciones a los operadores' }],
    postura:'Un plazo sin fecha es un riesgo. Se fija una fecha límite y se separan los actos que salen ya de los que esperan el modelo.',
    vistas:[{ vis:'actos', icono:'drag', pregunta:'Arrastra cada acto al paquete que le corresponde. Tipos referenciales.' }] },

  { n:7, id:'pma', corto:'PMA', titulo:'PMA de semaforización, Fase I', t:'No implementación del PMA contrato Semaforización Fase I',
    per:'2026-I', comp:'Ambiental', cat:'leve',
    frase:'La gestión ambiental *sí se hace en obra*. Falta el soporte formal de la interventoría.',
    hechos:['El Ente Gestor evidenció actividades del PMA en obra.',
            'La interventoría no ha enviado alcances e impactos.',
            'El vacío es de reporte y trazabilidad, no de obra.'],
    cifras:[{ n:34, l:'intersecciones de la Fase I con PMA por documentar' }, { t:'Sin informe', l:'oficial de la interventoría al corte' }],
    postura:'Requerimiento formal con contenido mínimo y plazo. El recibo final del contrato depende del soporte del PMA.',
    vistas:[{ vis:'pma', icono:'tap', pregunta:'Marca el contenido mínimo, envía el requerimiento y recibe el informe.' }] },

  { n:8, id:'obras', corto:'Obras', titulo:'Obras frente al cronograma CONPES', t:'Retrasos en ejecución de obras de acuerdo con el cronograma CONPES',
    per:'2026-I', comp:'Cronograma', cat:'critica',
    frase:'Ferrocarril, Ambalá y ciclorruta tienen ruta y fecha. El rezago real está en *paraderos, patiotalleres y Jordán Paralela*.',
    hechos:['Ferrocarril: consultoría radicada el 10 de junio.',
            'Ambalá en ejecución; Carrera 5 ejecutada.',
            'Paraderos Tipo 1 y 2: radicar el 7 de julio.'],
    cifras:[{ t:'+6 meses', l:'de rezago en Paraderos Tipo 1 y 2 al corte' }, { t:'5 vs 4', l:'patiotalleres requeridos frente a predios georreferenciados' }],
    postura:'Cada rezago tiene una decisión con fecha: redistribuir Jordán Paralela, radicar Paraderos y definir el modelo de patiotalleres.',
    vistas:[{ vis:'obraA', icono:'drag', pregunta:'Arrastra la línea «hoy» y toca una barra para ver el estado de cada frente.' },
            { vis:'obraB', icono:'tap',  pregunta:'Toca un frente en la lista o en el mapa.' }] },

  { n:9, id:'tecno', corto:'Tecnología', titulo:'FET y componente tecnológico', t:'Rezagos en los avances para la estructuración e implementación del FET y componente tecnológico',
    per:'2026-II', comp:'Operaciones', cat:'critica',
    frase:'La tecnología es la *ruta crítica* de la operación. Se estructura en 2026 el paquete completo.',
    hechos:['Recaudo y control de flota: recursos desde 2027.',
            'Centro de control en el Lote 6: compra en 2027.',
            'El cronograma CONPES los previó entre 2023 y 2025.'],
    cifras:[{ t:'+22 meses', l:'de rezago del centro de control frente al plan' }, { t:'$12.515 M', l:'Semáforos Fase II, en estructuración' }],
    postura:'Sin recaudo, control de flota y centro de control no hay servicio integrado. Se estructuran como un solo paquete.',
    vistas:[{ vis:'tecno', icono:'drag', pregunta:'Arrastra los nodos y simula la integración del paquete tecnológico.' }] }
];

/* ---------------------------------------------------------------------
   CRONOGRAMA CONPES (calendario real).  a/b = mes de inicio/fin, contados
   desde ene-2023 (0) hasta dic-2028 (71). Extraído de la figura oficial.
   est: ejecutado | ejecucion | estructuracion | estudios | bloqueado | retirado | sindato
   ------------------------------------------------------------------- */
const ESTADO = {
  ejecutado     :{ n:'Ejecutado',                c:'#1E9E4F' },
  ejecucion     :{ n:'En ejecución',             c:'#F0A800' },
  estructuracion:{ n:'En estructuración',        c:'#2B63D9' },
  estudios      :{ n:'Estudios radicados',       c:'#2B63D9' },
  bloqueado     :{ n:'Sin recursos, en revisión', c:'#D3313A' },
  retirado      :{ n:'Sin alcance', c:'#8A93AD' },
  sindato       :{ n:'Sin estado en el corte', c:'#8A93AD' }
};

const GANTT = [
  { g:'Infraestructura', n:'Carrera 5',               a:18, b:37, est:'ejecutado',      nota:'Contrato de Obra 046 de 2025: Fases I y II ejecutadas.' },
  { g:'Infraestructura', n:'Avenida Jordán',          a:18, b:44, est:'sindato',        nota:'Sin estado reportado en el corte de la presentación.' },
  { g:'Infraestructura', n:'Av. Jordán Paralela',     a:18, b:44, est:'bloqueado',      nota:'Por el tope presupuestal del componente se priorizaron los demás corredores. En revisión la posibilidad de redistribución.' },
  { g:'Infraestructura', n:'Avenida Ambalá',          a:24, b:53, est:'ejecucion',      nota:'Contrato de Obra 042 de 2026 en ejecución.' },
  { g:'Infraestructura', n:'Avenida Ferrocarril',     a:24, b:59, est:'estudios',       nota:'Consultoría (estudios y diseños Fase III) radicada en UMUS el 10 de junio de 2026 para concepto de elegibilidad.' },
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 1 y 2', a:21, b:35, est:'estructuracion', nota:'En estructuración bajo modalidad llave en mano. Radicación proyectada: 7 de julio de 2026.' },
  { g:'Estaciones y paraderos', n:'Paraderos Tipo 3',  a:9,  b:35, est:'ejecutado',      nota:'1.150 de 1.150 señales instaladas (Contrato 037 de 2025).' },
  { g:'Estaciones y paraderos', n:'Estaciones de integración', a:9, b:62, est:'retirado', nota:'Con la actualización del estudio de demanda operacional (septiembre 2025) no se contemplan estaciones de integración.' },
  { g:'Patiotalleres y terminales', n:'Patiotalleres (Grupos 1 y 2)', a:10, b:71, est:'estructuracion', nota:'Adquisición de Predio 1 ($15.075 M) y Predio 2 ($15.061 M) en estructuración. El estudio de septiembre 2025 indica que se requerirían 5 patiotalleres.' },
  { g:'Infraestructura complementaria', n:'Intervención Centro', a:22, b:41, est:'ejecucion', nota:'Acciones institucionales articuladas; zonas azules como medida de regulación del espacio público en el centro.' },
  { g:'Infraestructura complementaria', n:'Cicloinfraestructura', a:22, b:62, est:'estructuracion', nota:'Consultoría por la Carrera 5 (Cl 10–44): radicación proyectada el 30 de junio de 2026.' },
  { g:'Tecnología', n:'Recaudo y control de flota', a:4,  b:26, est:'estructuracion', nota:'Adquisición de equipos: proceso a estructurar en 2026; recursos a comprometer del 2027.' },
  { g:'Tecnología', n:'Información al usuario',    a:4,  b:25, est:'estructuracion', nota:'En formulación junto con recaudo y control de flota.' },
  { g:'Tecnología', n:'Semaforización',            a:12, b:31, est:'ejecucion',      nota:'Fase I al 75,01 % real; Fase II en estructuración ($12.515 M).' },
  { g:'Tecnología', n:'Centro de control',         a:0,  b:19, est:'estructuracion', nota:'Previsto en el Lote 6 de Patiotalleres: compra en 2027 y construcción en el segundo semestre de 2027.' }
];

/* ---------------------------------------------------------------------
   HITOS — hoja de ruta.  f = fecha; a = alertas relacionadas
   ------------------------------------------------------------------- */
const HITOS = [
  { f:new Date(2026,3,30), a:[5],     est:'cumplido',   c:'Desembolso del aporte del Municipio',         t:'Desembolso del aporte del Municipio 2026', r:'Municipio' },
  { f:new Date(2026,5,10), a:[8],     est:'cumplido',   c:'Ferrocarril radicado en UMUS',                t:'Consultoría Av. Ferrocarril radicada en UMUS (elegibilidad)', r:'SETP' },
  { f:new Date(2026,5,10), a:[4],     est:'cumplido',   c:'Concepto DNP remitido a la APP',              t:'Concepto del DNP remitido a la APP de iniciativa privada', r:'SETP' },
  { f:new Date(2026,5,30), a:[3],     est:'programado', c:'Reanuda semaforización Fase I',               t:'Reanudación del contrato de semaforización Fase I', r:'Contratista / SETP' },
  { f:new Date(2026,5,30), a:[8],     est:'programado', c:'Radicar ciclorruta Cra 5',                    t:'Radicar consultoría de cicloinfraestructura Cra 5', r:'SETP' },
  { f:new Date(2026,6,7),  a:[4],     est:'programado', c:'Mesa MinHacienda, DNP y MinTransporte',       t:'Mesa interinstitucional MinHacienda · DNP · MinTransporte (tentativa)', r:'SETP' },
  { f:new Date(2026,6,7),  a:[8],     est:'programado', c:'Radicar Paraderos Tipo 1 y 2',                t:'Radicar Paraderos Tipo 1 y 2 (llave en mano)', r:'SETP' },
  { f:new Date(2026,6,24), a:[1,2,6], est:'programado', c:'Resultado del modelo financiero',             t:'Resultado final del modelo financiero (FET · viabilidad · actos)', r:'Consultoría' },
  { f:new Date(2026,7,30), a:[3],     est:'programado', c:'Fin estimado de la Fase I',                   t:'Fin estimado de Fase I (reanudación + hasta 2 meses)', r:'Contratista' },
  { f:new Date(2026,11,31),a:[9],     est:'programado', c:'Estructurar recaudo y control de flota',      t:'Estructurar el proceso de Recaudo y Control de flota', r:'SETP' },
  { f:new Date(2027,0,31), a:[9],     est:'programado', c:'Recursos 2027 y compra del Lote 6',           t:'2027: comprometer recursos de Recaudo/Flota y comprar Lote 6 (Centro de control)', r:'SETP' }
];

const SIN_FECHA = [
  { a:4, c:'Avances de prefactibilidad (APP privada)',       t:'APP privada remite los avances actualizados de la prefactibilidad', r:'APP privada' },
  { a:3, c:'Solicitud formal de prórroga',      t:'Solicitud formal de prórroga del contratista',                       r:'Contratista' },
  { a:6, c:'Plazo para aclaraciones a operadores',    t:'Plazo adicional para aclaraciones a los operadores',                 r:'SETP' },
  { a:7, c:'Informe de la interventoría sobre el PMA',  t:'Informe oficial de la interventoría sobre el PMA (alcances e impactos)', r:'Interventoría' },
  { a:8, c:'Decisión sobre el tope de Jordán Paralela',         t:'Decisión sobre redistribución del tope de Av. Jordán Paralela',      r:'SETP' },
  { a:8, c:'Decisión sobre el modelo de patiotalleres',         t:'Decisión sobre el modelo de patiotalleres (5 requeridos)',           r:'SETP' }
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
  adjudicado :[57830325615, 25978400818, 23730378098],          // 2026 = proyectado (*)
  reprogramar:[2557661225, 42676317198, 37790940932]            // 2026 = proyectado (*)
};

/* proyectos 2026: fase 0 estructuración · 1 radicado UMUS · 2 contratación · 3 desembolso */
const PROY26 = [
  { n:'Consultoría · Av. Ferrocarril',                 comp:'Infraestructura', mun:1329444200,  nac:0,           fase:1, txt:'Radicado en UMUS · 10 de junio' },
  { n:'Paraderos Tipo I y II (llave en mano)',         comp:'Infraestructura', mun:0,           nac:8669062713,  fase:0, txt:'Estructuración · próximo a radicar en UMUS' },
  { n:'Consultoría · Cicloinfraestructura y andenes',  comp:'Infraestructura', mun:1221606656,  nac:0,           fase:0, txt:'Estructuración · próximo a radicar en UMUS' },
  { n:'Adquisición Predio 1 · Patiotalleres',          comp:'Patiotalleres',   mun:15075119666, nac:0,           fase:0, txt:'En estructuración' },
  { n:'Adquisición Predio 2 · Patiotalleres',          comp:'Patiotalleres',   mun:0,           nac:15061315385, fase:0, txt:'En estructuración' },
  { n:'Semáforos Fase II',                             comp:'Tecnología',      mun:12515324909, nac:0,           fase:0, txt:'En estructuración' }
];
const FASES = ['Estructuración','Radicado UMUS','Contratación','Desembolso'];

/* cartera con presupuesto identificado en las fichas del SETP (obra + interventoría), en pesos.
   Referencial: valores totales del proyecto, sin discriminar aporte Nación / Municipio. */
const CARTERA = [
  { n:'Av. Ferrocarril', v:34156900000, req:'Obra e interventoría · requiere diseños' },
  { n:'Ciclorruta Cra 5', v:27842100000, req:'Obra e interventoría · requiere consultoría' },
  { n:'Semáforos Fase III', v:9360900000, req:'Obra e interventoría · prevista para 2027' }
];

/* ---------------------------------------------------------------------
   ACTOS ADMINISTRATIVOS (tipos referenciales del modelo operacional)
   dep: 'modelo' = espera el modelo financiero · 'ya' = puede expedirse ya
   ------------------------------------------------------------------- */
const ACTOS = [
  { t:'Requisitos de habilitación y verificación normativa de operadores', dep:'ya' },
  { t:'Reglamento de operación: rutas, frecuencias y horarios',            dep:'ya' },
  { t:'Cronograma de transición y mesas de diálogo con fecha límite',     dep:'ya' },
  { t:'Tarifa técnica y remuneración a operadores',                        dep:'modelo' },
  { t:'Fuentes y reglas de activación del FET',                            dep:'modelo' },
  { t:'Condiciones económicas de vinculación de operadores',               dep:'modelo' }
];

/* contenido mínimo que se exige a la interventoría (PMA) */
const PMA_ITEMS = [
  'Alcance ejecutado por intersección y frente de obra',
  'Impactos identificados y medidas aplicadas',
  'Registro fotográfico georreferenciado',
  'Manejo de residuos de construcción (RCD) con soportes',
  'Atención a comunidad y PQRS',
  'Indicadores de cumplimiento frente a las fichas del PMA'
];
