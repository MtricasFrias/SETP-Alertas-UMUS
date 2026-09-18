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
     · ALERTAS[].sit / postura   texto de cada alerta
   ===================================================================== */

const CORTE = { txt:'26 jun 2026', fecha:new Date(2026,5,26) };

const CAT = {
  critica :{ n:'Crítica',  c:'#E5484D' },
  moderada:{ n:'Moderada', c:'#F0A800' },
  leve    :{ n:'Leve',     c:'#1FBF5B' }
};

const COMPONENTES = ['Financiero','Operaciones','Infraestructura','CONPES','Jurídico','Ambiental','Cronograma'];
const PERIODOS    = ['2025-IV','2026-I','2026-II'];

/* ---------------------------------------------------------------------
   ALERTAS — en el orden de la tabla oficial (No. 1 a 9)
   vistas: 1 o 2 escenas por alerta; cada una con su clave `vis` (visuales.js)
   ------------------------------------------------------------------- */
const ALERTAS = [
  { n:1, id:'fet', corto:'FET', t:'FET no implementado',
    per:'2025-IV', comp:'Financiero', cat:'critica',
    msg:'El FET aún no está constituido. Se dimensiona con el modelo financiero de julio: necesidad, alcance y fuentes salen de cifras, no de urgencias.',
    postura:'El Municipio asume el compromiso con la sostenibilidad financiera del SETP y la equidad tarifaria. El FET se decide con el modelo en la mano y se formaliza con acciones administrativas y normativas apenas exista la cifra.',
    vistas:[{ vis:'fet', sit:[
      'No constituido formalmente; en estructuración técnica.',
      'Consultoría en curso para actualizar el modelo financiero del sistema. Resultado: julio de 2026.',
      'Aún no hay metodología para estimar el diferencial entre tarifa técnica y tarifa al usuario, ni el eventual déficit operacional.',
      'Riesgos fiscales y sostenibilidad: se evalúan cuando exista el modelo; hoy no hay análisis concluyente.'
    ]}]
  },

  { n:2, id:'concertacion', corto:'Concertación', t:'Concertación con transportadores para viabilidad del sistema',
    per:'2025-IV', comp:'Operaciones', cat:'critica',
    msg:'La viabilidad se concerta con números abiertos: canasta de costos validada con los operadores y modelo financiero cerrado el 24 de julio.',
    postura:'Ningún acto se expide sin una viabilidad demostrada y sin requisitos verificados. La vía financiera y la vía normativa convergen en un mismo punto: la definición de los actos administrativos.',
    vistas:[{ vis:'con', sit:[
      'Revisión de la canasta de costos: validación de variables operativas y financieras con los operadores.',
      'Modelo financiero: resultado final el 24 de julio de 2026.',
      'Análisis de viabilidad: evaluación de sostenibilidad del sistema.',
      'En paralelo: mesas de diálogo, solicitud de documentación y aclaraciones a los operadores.'
    ]}]
  },

  { n:3, id:'semaforos', corto:'Semáforos', t:'Retraso contrato de semaforización',
    per:'2025-IV', comp:'Infraestructura', cat:'moderada',
    msg:'El retraso no está en instalar: está en integrar, validar y poner en operación. Se reanuda el 30 de junio con prórroga acotada y hitos verificables.',
    postura:'Prórroga acotada (hasta 2 meses) y atada a hitos: controladores completos, planes semafóricos aprobados y red sincronizada. Meta de Fase I: 28 controladores, 34 intersecciones integradas y red validada.',
    vistas:[{ vis:'sem', sit:[
      'Avance real 75,01 % frente a 99,76 % programado: brecha de 24,75 puntos.',
      '25 de 28 controladores y 25 de 34 intersecciones instaladas; 14 en funcionamiento.',
      'Suspensión No. 2; reanudación prevista el 30 de junio de 2026, a la espera de la solicitud formal de prórroga del contratista.'
    ]}]
  },

  { n:4, id:'app', corto:'APP Tranvía', t:'Propuesta APP tranvía podría redefinir convenio',
    per:'2025-IV', comp:'CONPES', cat:'critica',
    msg:'El CONPES 4017 no habilita el tranvía. Cualquier avance del ART exige un nuevo CONPES y estudios más avanzados; el SETP sigue ejecutando su ruta.',
    postura:'El SETP defiende el marco vigente: el ART entra por un nuevo CONPES o no entra. Tres de sus cuatro troncales coinciden con corredores que el SETP ya interviene: se integran, no se duplican.',
    vistas:[
      { vis:'appA', sit:[
        'Sistema ART sobre riel virtual: 31,64 m, 307 pasajeros, demanda de 321.065 viajes/día.',
        'Se presenta como 100 % privado y solicita ser el único operador.',
        'Pide financiar con recursos del CONPES 4017 la compra de vehículos nuevos.',
        'Concepto favorable de prefactibilidad: 27 de octubre de 2025.'
      ]},
      { vis:'appB', sit:[
        'DNP: el CONPES 4017 no permite desarrollar el tranvía.',
        'Para avanzar: nuevo CONPES, evaluación integral del sistema y aclaraciones.',
        'Puede desarrollarse en paralelo, con estudios más avanzados: prediales, diseños estructurales y de demanda.'
      ]}
    ]
  },

  { n:5, id:'desembolsos', corto:'Desembolsos', t:'Desembolsos Nación y Municipio no solicitados frente a POAI',
    per:'2026-I', comp:'Financiero', cat:'leve',
    msg:'El Municipio cumplió el 100 % de sus aportes, año tras año. Lo que falta es velocidad de contratación: seis frentes suman $53.872 M en 2026.',
    postura:'Cada peso tiene proyecto y fase. Se gestiona con calendario de radicación y, para lo que no alcance a contratarse en la vigencia, con reprogramación del convenio.',
    vistas:[
      { vis:'desA', sit:[
        'Aportes del Municipio 2021–2026: 100 % desembolsado en cada vigencia; el de 2026 se giró el 30 de abril.',
        'Convenio de cofinanciación Nación 2024–2026: $190.564 M. Adjudicado $107.539 M (56,4 %); a reprogramar $83.025 M (43,6 %).'
      ]},
      { vis:'desB', sit:[
        'Seis frentes 2026 radicados o por radicar: $53.872 M (Nación $23.730 M · Municipio $30.141 M).',
        'Del convenio Nación 2026 ($61.521 M), $37.791 M están sin proyecto asignado.'
      ]}
    ]
  },

  { n:6, id:'actos', corto:'Actos adm.', t:'Indefinición de los actos administrativos que adopten las condiciones del modelo operacional',
    per:'2026-I', comp:'Jurídico', cat:'critica',
    msg:'Los actos administrativos se expiden por paquetes: primero los que no dependen del modelo, después los que sí. Sin plazos abiertos.',
    postura:'Un plazo adicional sin fecha es un riesgo. Se cierra con fecha límite y se separan los actos que pueden salir ya de los que esperan el modelo financiero.',
    vistas:[{ vis:'actos', sit:[
      'Los actos adoptan las condiciones del modelo operacional.',
      'Dependen de dos vías: viabilidad del sistema (modelo financiero, 24 de julio) y verificación normativa de los operadores.',
      'Concertación: mesas de diálogo, solicitud de documentación y aclaraciones con plazo adicional.'
    ]}]
  },

  { n:7, id:'pma', corto:'PMA', t:'No implementación del PMA contrato Semaforización Fase I',
    per:'2026-I', comp:'Ambiental', cat:'leve',
    msg:'La gestión ambiental sí se ejecuta en obra. Lo que falta es el soporte formal: se exige a la interventoría el informe con evidencia.',
    postura:'Requerimiento formal a la interventoría con contenido mínimo y plazo. El recibo final del contrato queda condicionado al soporte del PMA.',
    vistas:[{ vis:'pma', sit:[
      'En su rol de supervisión, el Ente Gestor ha evidenciado actividades del PMA en Semaforización Fase I.',
      'La interventoría no ha remitido oficialmente los alcances e impactos de lo ejecutado por el contratista.',
      'El vacío es de reporte y trazabilidad, no de obra.'
    ]}]
  },

  { n:8, id:'obras', corto:'Obras CONPES', t:'Retrasos en ejecución de obras de acuerdo con el cronograma CONPES',
    per:'2026-I', comp:'Cronograma', cat:'critica',
    msg:'Ferrocarril, Ambalá y cicloinfraestructura tienen ruta y fecha. Los rezagos reales están en Paraderos, Patiotalleres y Jordán Paralela, y ahí se decide.',
    postura:'Cada rezago tiene una decisión con fecha: redistribuir el tope de Jordán Paralela, radicar Paraderos y definir el modelo de patiotalleres.',
    vistas:[
      { vis:'obraA', sit:[
        'Cronograma CONPES ajustado a calendario real: 2023–2028.',
        'Arrastra la línea «hoy» para ver qué frentes deberían haber cerrado ya.',
        'Toca una barra para ver el estado de cada frente.'
      ]},
      { vis:'obraB', sit:[
        'Av. Ferrocarril: consultoría radicada en UMUS el 10 de junio de 2026.',
        'Av. Ambalá en ejecución; Carrera 5 ejecutada.',
        'Paraderos Tipo 1 y 2: llave en mano, radicación proyectada 7 de julio de 2026.',
        'Patiotalleres: 4 predios georreferenciados; el estudio de septiembre de 2025 indica 5.'
      ]}
    ]
  },

  { n:9, id:'tecno', corto:'FET + Tecnología', t:'Rezagos en los avances para la estructuración e implementación del FET y componente tecnológico',
    per:'2026-II', comp:'Operaciones', cat:'critica',
    msg:'La tecnología es la ruta crítica de la operación. Se estructura en 2026 el paquete completo, con recursos comprometidos desde 2027.',
    postura:'Sin recaudo, control de flota y centro de control no hay servicio integrado. Se estructuran como un solo paquete tecnológico y se secuencian con el FET y la flota.',
    vistas:[{ vis:'tecno', sit:[
      'FET en estructuración técnica; modelo financiero en julio de 2026.',
      'Recaudo y control de flota: proceso por estructurar en 2026; recursos a comprometer del 2027.',
      'Centro de control previsto en el Lote 6 de Patiotalleres: compra 2027, construcción en el segundo semestre de 2027.',
      'Semáforos Fase II en estructuración: $12.515 M (aporte del Municipio 2026).'
    ]}]
  }
];

/* ---------------------------------------------------------------------
   CRONOGRAMA CONPES (calendario real).  a/b = mes de inicio/fin, contados
   desde ene-2023 (0) hasta dic-2028 (71). Extraído de la figura oficial.
   est: ejecutado | ejecucion | estructuracion | estudios | bloqueado | retirado | sindato
   ------------------------------------------------------------------- */
const ESTADO = {
  ejecutado     :{ n:'Ejecutado',                c:'#1FBF5B' },
  ejecucion     :{ n:'En ejecución',             c:'#F0A800' },
  estructuracion:{ n:'En estructuración',        c:'#4C8DFF' },
  estudios      :{ n:'Estudios radicados',       c:'#4C8DFF' },
  bloqueado     :{ n:'Sin recursos · en revisión', c:'#E5484D' },
  retirado      :{ n:'Sin alcance (no se contempla)', c:'#7C8DB5' },
  sindato       :{ n:'Sin estado en este corte', c:'#7C8DB5' }
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
  { f:new Date(2026,3,30), a:[5],     est:'cumplido',   t:'Desembolso del aporte del Municipio 2026', r:'Municipio' },
  { f:new Date(2026,5,10), a:[8],     est:'cumplido',   t:'Consultoría Av. Ferrocarril radicada en UMUS (elegibilidad)', r:'SETP' },
  { f:new Date(2026,5,10), a:[4],     est:'cumplido',   t:'Concepto del DNP remitido a la APP de iniciativa privada', r:'SETP' },
  { f:new Date(2026,5,30), a:[3],     est:'programado', t:'Reanudación del contrato de semaforización Fase I', r:'Contratista / SETP' },
  { f:new Date(2026,5,30), a:[8],     est:'programado', t:'Radicar consultoría de cicloinfraestructura Cra 5', r:'SETP' },
  { f:new Date(2026,6,7),  a:[4],     est:'programado', t:'Mesa interinstitucional MinHacienda · DNP · MinTransporte (tentativa)', r:'SETP' },
  { f:new Date(2026,6,7),  a:[8],     est:'programado', t:'Radicar Paraderos Tipo 1 y 2 (llave en mano)', r:'SETP' },
  { f:new Date(2026,6,24), a:[1,2,6], est:'programado', t:'Resultado final del modelo financiero (FET · viabilidad · actos)', r:'Consultoría' },
  { f:new Date(2026,7,30), a:[3],     est:'programado', t:'Fin estimado de Fase I (reanudación + hasta 2 meses)', r:'Contratista' },
  { f:new Date(2026,11,31),a:[9],     est:'programado', t:'Estructurar el proceso de Recaudo y Control de flota', r:'SETP' },
  { f:new Date(2027,0,31), a:[9],     est:'programado', t:'2027: comprometer recursos de Recaudo/Flota y comprar Lote 6 (Centro de control)', r:'SETP' }
];

const SIN_FECHA = [
  { a:4, t:'APP privada remite los avances actualizados de la prefactibilidad', r:'APP privada' },
  { a:3, t:'Solicitud formal de prórroga del contratista',                       r:'Contratista' },
  { a:6, t:'Plazo adicional para aclaraciones a los operadores',                 r:'SETP' },
  { a:7, t:'Informe oficial de la interventoría sobre el PMA (alcances e impactos)', r:'Interventoría' },
  { a:8, t:'Decisión sobre redistribución del tope de Av. Jordán Paralela',      r:'SETP' },
  { a:8, t:'Decisión sobre el modelo de patiotalleres (5 requeridos)',           r:'SETP' }
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
  { n:'Av. Ferrocarril · obra + interventoría',   v:34156900000, req:'Requiere diseños y concepto de elegibilidad' },
  { n:'Cicloinfraestructura Cra 5 · obra + interv.', v:27842100000, req:'Requiere consultoría radicada (30-jun)' },
  { n:'Semáforos Fase III · obra + interventoría', v:9360900000,  req:'Presupuestada para 2027' }
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
