/* Geodatos reutilizados de SETP-Presentacion-Proyectos (KMZ oficiales). Coordenadas [lat,lng]. */
const PALETA = {
  navy:'#0A1F5C', navyDeep:'#001233', royal:'#1D4ED8',
  verde:'#00A830', amarillo:'#F0A800', rojo:'#D62828',
  gris:'#94A3B8'
};

/* ---------------------------------------------------------------------
   1. CORREDORES (líneas)
   ------------------------------------------------------------------- */
const CORREDORES = {

  /* Traza real: intersecciones "Carrera 5 x Calle N" de los KMZ oficiales de
     semáforos Fase I y Fase II, en orden geográfico (Cl 10 → Cl 60). La línea
     anterior era dibujada a mano ("referencial sin KMZ") y a mitad de camino
     se desviaba ~800 m siguiendo por error la traza de Av. Ferrocarril —
     corregido: ahora sale solo de coordenadas de intersecciones reales. */
  carrera5: {
    nombre:'Carrera 5 · Calle 10 → Calle 60',
    estado:'verde',
    coords:[[4.446099,-75.241376],[4.445662,-75.240562],[4.441289,-75.231341],[4.440645,-75.229253],[4.440243,-75.227429],[4.439875,-75.223419],[4.438224,-75.217437],[4.435527,-75.212331],[4.435800,-75.202897]]
  },

  /* Carrera 5 · FASE I — Cra 5 de la Calle 64 a la 103 (+ Av. Ambalá Cl 103–95).
     Traza real: intersecciones semaforizadas sobre la Carrera 5, en orden
     geográfico (Cl 64 → Cl 100), del KMZ oficial de semáforos Fase I.
     No se traza el tramo de Av. Ambalá Cl 103→95 por no tener todavía un
     punto georreferenciado propio — sumarlo aquí en cuanto se tenga. */
  carrera5FaseI: {
    nombre:'Carrera 5 · Fase I (Cl 64 → Cl 100)',
    estado:'verde',
    coords:[[4.436365,-75.200344],[4.437646,-75.195139],[4.438624,-75.191453],[4.440982,-75.182006],[4.442153,-75.177416],[4.442897,-75.174455]]
  },

  /* Cicloinfraestructura + andenes — misma traza real de la Carrera 5
     (intersecciones de semáforos), tramo Calle 10–42. Consultoría Fase III (RS-367). */
  cicloCarrera5: {
    nombre:'Cicloinfraestructura y andenes · Carrera 5 (Cl 10–44)',
    estado:'rojo',
    coords:[[4.446099,-75.241376],[4.445662,-75.240562],[4.441289,-75.231341],[4.440645,-75.229253],[4.440243,-75.227429],[4.439875,-75.223419],[4.438224,-75.217437],[4.435527,-75.212331]]
  },

  ambala1: {
    nombre:'Av. Ambalá · Tramo 1 (Cra 5 → Cl 37)',
    estado:'amarillo',
    coords:[[4.446428910235756,-75.21453537933043],[4.445459294578263,-75.21686625975603],[4.445088394221887,-75.21781270481817],[4.444704115822312,-75.21941106317037],[4.444165821396041,-75.22096108943613],[4.443924742836916,-75.22169059226096],[4.44376100106638,-75.22269154174357],[4.443524785952114,-75.22392219453231],[4.443342328639439,-75.22502834369733],[4.443116515580366,-75.22546729087172],[4.442702886339585,-75.22599935584577],[4.441895891394469,-75.22677591556591],[4.441379609477755,-75.22713765370864],[4.440357118479628,-75.2274102605241]]
  },
  ambala2: {
    nombre:'Av. Ambalá · Tramo 2 (Cl 77 → Cl 63)',
    estado:'amarillo',
    coords:[[4.447856470658379,-75.20113504389856],[4.447815431208872,-75.19953464940011],[4.447960499502986,-75.19851400060985],[4.448044914279982,-75.19805388205704],[4.447930942137583,-75.1975870664925],[4.447900719725484,-75.19678163814001],[4.447851928976363,-75.19617443831018],[4.447671486055985,-75.19523734633113],[4.447433377341119,-75.194248146441],[4.447061742950669,-75.19267935358245],[4.446873612473751,-75.19161042533102],[4.446760317588832,-75.19105847102909],[4.446743731155467,-75.1906906068464],[4.446664077880185,-75.19011464572148]]
  },

  /* Trazado real — KMZ "Intervencion Av. Ferro Completa" (calzada descenso
     + Viaducto SENA). RS-326. */
  ferrocarril: {
    nombre:'Av. Ferrocarril · Cl 19 → intersección Carrera 5',
    estado:'rojo',
    coords:[[4.437571,-75.235048],[4.437552,-75.234271],[4.437504,-75.233638],[4.437322,-75.233141],[4.437105,-75.232870],[4.436926,-75.232201],[4.436893,-75.231368],[4.436865,-75.230456],[4.436809,-75.229112],[4.436726,-75.227739],[4.436675,-75.226141],[4.436603,-75.224967],[4.436567,-75.223814],[4.436519,-75.222657],[4.436455,-75.222199],[4.436346,-75.221846],[4.436174,-75.221485],[4.435783,-75.220850],[4.435486,-75.220398],[4.435327,-75.220161],[4.435229,-75.219984],[4.435084,-75.219661],[4.434887,-75.218927],[4.434818,-75.218304],[4.434740,-75.217568],[4.434630,-75.216666],[4.434468,-75.215311],[4.434384,-75.214731],[4.434340,-75.214482],[4.434288,-75.214290],[4.434063,-75.213710],[4.433863,-75.213278],[4.433495,-75.212701],[4.433150,-75.212262],[4.432847,-75.211864],[4.432578,-75.211516],[4.432398,-75.211279],[4.432196,-75.211022],[4.432080,-75.210892],[4.431939,-75.210804],[4.431925,-75.210586],[4.431815,-75.210464],[4.431757,-75.210345],[4.431687,-75.210130],[4.431660,-75.209932],[4.431657,-75.209704],[4.431683,-75.209590]]
  }
};
/* ---------------------------------------------------------------------
   3. PATIOTALLERES — predios en gestión (RS-397, adquisición predial)
      Puntos reales del KMZ oficial "patiotalleres.kmz" (uno por barrio;
      referenciales — no se ha comprado ningún predio todavía).
   ------------------------------------------------------------------- */
const PATIOS = [
  { nombre:'Picaleña',       coord:[4.40487,-75.15644] },
  { nombre:'El Salado',      coord:[4.44966,-75.14541] },
  { nombre:'Boquerón',       coord:[4.40764,-75.25895] },
  { nombre:'Nueva Castilla', coord:[4.43632,-75.16218] }
];

/* ---------------------------------------------------------------------
   4. RED SEMAFÓRICA
      Fase I (amarillo) — posiciones aproximadas, en ejecución.
      Fase II (rojo)    — 40 intersecciones del KMZ oficial "Semáforos Fase II".
      Fase III          — sin ubicación aún; solo en el panel.
   ------------------------------------------------------------------- */
const SEMAFOROS = [
  { nombre:"29. Carrera 4 con Calle 25", fase:'I', estado:'amarillo', coord:[4.437179,-75.228861] },
  { nombre:"33. Carrera 4 con calle 42", fase:'I', estado:'amarillo', coord:[4.430755,-75.213996] },
  { nombre:"39. Carrera 5 con Calle 21", fase:'I', estado:'amarillo', coord:[4.441289,-75.231341] },
  { nombre:"40. Carrera 5 con Calle 23", fase:'I', estado:'amarillo', coord:[4.440645,-75.229253] },
  { nombre:"41. Carrera 5 con calle 25", fase:'I', estado:'amarillo', coord:[4.440243,-75.227429] },
  { nombre:"42. Carrera 5 con Calle 29", fase:'I', estado:'amarillo', coord:[4.439875,-75.223419] },
  { nombre:"43. Carrera 5 con Calle 37", fase:'I', estado:'amarillo', coord:[4.438224,-75.217437] },
  { nombre:"44. Carrera 5 con calle 42", fase:'I', estado:'amarillo', coord:[4.435527,-75.212331] },
  { nombre:"46. Carrera 5 con calle 64", fase:'I', estado:'amarillo', coord:[4.436365,-75.200344] },
  { nombre:"47. Carrera 5 con calle 71", fase:'I', estado:'amarillo', coord:[4.437646,-75.195139] },
  { nombre:"48. Carrera 5 con calle 77", fase:'I', estado:'amarillo', coord:[4.438624,-75.191453] },
  { nombre:"49. Carrera 5 con calle 88", fase:'I', estado:'amarillo', coord:[4.440982,-75.182006] },
  { nombre:"50. Carrera 5 con calle 96", fase:'I', estado:'amarillo', coord:[4.442153,-75.177416] },
  { nombre:"51. Carrera 5 con calle 100", fase:'I', estado:'amarillo', coord:[4.442897,-75.174455] },
  { nombre:"53. Carrera 6 con calle 25", fase:'I', estado:'amarillo', coord:[4.441840,-75.226780] },
  { nombre:"54. Carrera 6 con calle 29", fase:'I', estado:'amarillo', coord:[4.440701,-75.223233] },
  { nombre:"55. Carrera 6 con calle 37", fase:'I', estado:'amarillo', coord:[4.439241,-75.217017] },
  { nombre:"56. Carrera 6 con calle 42", fase:'I', estado:'amarillo', coord:[4.436352,-75.211889] },
  { nombre:"66. Carrera 8 con calle 25", fase:'I', estado:'amarillo', coord:[4.442699,-75.225998] },
  { nombre:"67. Carrera 8 con calle 29", fase:'I', estado:'amarillo', coord:[4.442165,-75.222920] },
  { nombre:"71. Carrera 9 con calle 44", fase:'I', estado:'amarillo', coord:[4.441295,-75.210134] },
  { nombre:"72. Carrera 9 con calle 64", fase:'I', estado:'amarillo', coord:[4.441692,-75.202099] },
  { nombre:"80. Av. Ferrocarril con calle 23", fase:'I', estado:'amarillo', coord:[4.436986,-75.231520] },
  { nombre:"81. Av. Ferrocarril con calle 25", fase:'I', estado:'amarillo', coord:[4.436822,-75.229055] },
  { nombre:"82. Av. Ferrocarril con 4 estadio", fase:'I', estado:'amarillo', coord:[4.436811,-75.228341] },
  { nombre:"83. Av. Ferrocarril con calle 27", fase:'I', estado:'amarillo', coord:[4.436763,-75.226568] },
  { nombre:"84. Av. Ferrocarril con calle 31", fase:'I', estado:'amarillo', coord:[4.436607,-75.223086] },
  { nombre:"85. Av. Ferrocarril con calle 37", fase:'I', estado:'amarillo', coord:[4.434868,-75.217609] },
  { nombre:"86. Av. Ferrocarril con calle 42", fase:'I', estado:'amarillo', coord:[4.434000,-75.213272] },
  { nombre:"87. Av. Ambalá con calle 29", fase:'I', estado:'amarillo', coord:[4.443715,-75.223052] },
  { nombre:"88. Avenida Ambalá con calle 37", fase:'I', estado:'amarillo', coord:[4.446411,-75.214345] },
  { nombre:"89. Avenida Ambalá con calle 64", fase:'I', estado:'amarillo', coord:[4.447816,-75.201118] },
  { nombre:"92. Avenida Ambalá con calle 96", fase:'I', estado:'amarillo', coord:[4.447413,-75.178300] },
  { nombre:"1. Cra 11A sur Calle 20", fase:'II', estado:'rojo', coord:[4.432845,-75.243572] },
  { nombre:"2. Cra 4 SUR X Cll 13", fase:'II', estado:'rojo', coord:[4.438051,-75.242793] },
  { nombre:"3. Cra 2 sur Cll 12", fase:'II', estado:'rojo', coord:[4.440290,-75.242989] },
  { nombre:"4. Cra 2 sur Cll 25", fase:'II', estado:'rojo', coord:[4.432087,-75.232270] },
  { nombre:"8. Cra 1 Cll 24", fase:'II', estado:'rojo', coord:[4.434388,-75.232125] },
  { nombre:"9. Cra 1 Cll 25", fase:'II', estado:'rojo', coord:[4.433826,-75.231071] },
  { nombre:"10. Cra 2 - Calle 10", fase:'II', estado:'rojo', coord:[4.444042,-75.242929] },
  { nombre:"15. Cra 2 Cll 60", fase:'II', estado:'rojo', coord:[4.433278,-75.200908] },
  { nombre:"17. Cra 3 - Calle 10", fase:'II', estado:'rojo', coord:[4.444762,-75.242422] },
  { nombre:"23. Cra 3 Cll 19", fase:'II', estado:'rojo', coord:[4.439700,-75.234862] },
  { nombre:"25. Cra 4 - Calle 10", fase:'II', estado:'rojo', coord:[4.445589,-75.241802] },
  { nombre:"26. Cra 4 - Calle 11", fase:'II', estado:'rojo', coord:[4.445086,-75.240973] },
  { nombre:"28. Cra 4 Cll 19", fase:'II', estado:'rojo', coord:[4.441157,-75.234105] },
  { nombre:"30. Cra 4 Estadio Cll 28", fase:'II', estado:'rojo', coord:[4.435381,-75.226305] },
  { nombre:"31. Cra 4 Estadio Cll 31", fase:'II', estado:'rojo', coord:[4.434153,-75.224547] },
  { nombre:"32. Cra 4 estadio Cll 35", fase:'II', estado:'rojo', coord:[4.431578,-75.220887] },
  { nombre:"34. Cra 4 Tamaná Cll 30", fase:'II', estado:'rojo', coord:[4.434951,-75.223865] },
  { nombre:"35. Cra 4C Cll 37", fase:'II', estado:'rojo', coord:[4.436695,-75.217528] },
  { nombre:"36. Cra 5 - Calle 10", fase:'II', estado:'rojo', coord:[4.446099,-75.241376] },
  { nombre:"37. Cra 5 - Calle 11", fase:'II', estado:'rojo', coord:[4.445662,-75.240562] },
  { nombre:"45. Cra 5 Cll 60", fase:'II', estado:'rojo', coord:[4.435800,-75.202897] },
  { nombre:"52. Cra 6 Cll 19", fase:'II', estado:'rojo', coord:[4.442694,-75.233171] },
  { nombre:"57. Cra 6 Cll 44", fase:'II', estado:'rojo', coord:[4.435879,-75.210166] },
  { nombre:"58. Cra 6 Cll 60", fase:'II', estado:'rojo', coord:[4.436681,-75.203181] },
  { nombre:"60. Cra 7 - Calle 10", fase:'II', estado:'rojo', coord:[4.447485,-75.241001] },
  { nombre:"63. Cra 7 Cll 64", fase:'II', estado:'rojo', coord:[4.438215,-75.200950] },
  { nombre:"65. Cra 8 Cll 19", fase:'II', estado:'rojo', coord:[4.445404,-75.232266] },
  { nombre:"68. Carrera 8 con calle 60", fase:'II', estado:'rojo', coord:[4.439485,-75.203884] },
  { nombre:"69. Cra 8 Cll 114", fase:'II', estado:'rojo', coord:[4.446140,-75.166687] },
  { nombre:"73. Cra 9 Cll 69", fase:'II', estado:'rojo', coord:[4.442259,-75.198018] },
  { nombre:"74. Cra 9 Cll 77", fase:'II', estado:'rojo', coord:[4.442076,-75.191963] },
  { nombre:"75. Av. Mirolindo Cll 46", fase:'II', estado:'rojo', coord:[4.428993,-75.206965] },
  { nombre:"76. Av. Mirolindo Cll 60", fase:'II', estado:'rojo', coord:[4.427795,-75.199566] },
  { nombre:"77. Av. Mirolindo calle 103", fase:'II', estado:'rojo', coord:[4.414733,-75.174114] },
  { nombre:"78. Av. Mirolindo calle 117", fase:'II', estado:'rojo', coord:[4.407300,-75.166093] },
  { nombre:"79. Av. Mirolindo calle 124", fase:'II', estado:'rojo', coord:[4.404410,-75.160278] },
  { nombre:"90. Glorieta Mirolindo", fase:'II', estado:'rojo', coord:[4.421508,-75.185468] },
  { nombre:"N1. Av. Ambalá Cll 110A", fase:'II', estado:'rojo', coord:[4.446750,-75.166721] },
  { nombre:"N2. Cra 5 calle 123", fase:'II', estado:'rojo', coord:[4.446037,-75.159734] },
  { nombre:"N3. Cra 20 Cll 64", fase:'II', estado:'rojo', coord:[4.447925,-75.201164] }
];

/* Paraderos Tipo I (10) + Tipo II (71) — KMZ oficiales "PARADEROS T1" y
   "LOCALIZACIÓN PARADEROS T2-V FINAL". */
const PARADEROS_12 = [
  /* Tipo I */
  [4.444378,-75.220666], [4.413912,-75.264692], [4.447850,-75.240331],
  [4.445481,-75.205731], [4.442755,-75.175233], [4.445202,-75.241208],
  [4.437355,-75.233273], [4.442678,-75.237708], [4.450156,-75.243725],
  [4.438682,-75.190755],
  /* Tipo II */
  [4.43706,-75.19791],[4.43942,-75.23504],[4.44159,-75.23859],[4.44167,-75.23889],[4.44264,-75.23801],[4.43931,-75.22059],
  [4.43582,-75.21312],[4.43202,-75.20913],[4.43545,-75.20374],[4.43701,-75.22951],[4.44163,-75.17905],[4.44617,-75.16595],
  [4.43678,-75.23082],[4.45151,-75.14248],[4.45069,-75.14421],[4.44989,-75.14851],[4.44973,-75.14841],[4.44955,-75.15017],
  [4.44765,-75.18026],[4.44189,-75.24153],[4.44621,-75.18360],[4.44796,-75.19663],[4.44766,-75.19937],[4.43792,-75.18661],
  [4.43986,-75.22471],[4.44013,-75.22484],[4.44236,-75.17697],[4.45226,-75.13557],[4.45334,-75.13692],[4.45276,-75.13877],
  [4.44909,-75.15306],[4.44225,-75.19262],[4.44178,-75.19037],[4.43778,-75.18685],[4.43649,-75.18664],[4.43522,-75.18666],
  [4.43280,-75.18654],[4.43059,-75.18658],[4.42396,-75.18589],[4.43769,-75.16065],[4.43598,-75.16888],[4.44514,-75.23241],
  [4.44143,-75.23380],[4.43349,-75.24311],[4.42373,-75.25310],[4.42234,-75.25396],[4.46419,-75.05876],[4.46431,-75.05875],
  [4.38888,-75.13907],[4.41835,-75.17815],[4.44477,-75.23663],[4.44339,-75.23726],[4.42618,-75.19122],[4.42792,-75.20305],
  [4.52479,-75.31052],[4.55422,-75.32262],[4.44012,-75.17375],[4.42580,-75.17726],[4.42566,-75.17660],[4.41660,-75.17584],
  [4.43817,-75.21677],[4.43793,-75.21708],[4.44025,-75.18437],[4.44267,-75.17491],[4.44978,-75.14675],[4.42300,-75.18739],
  [4.44159,-75.18021],[4.37442,-75.11708],[4.37413,-75.11710],[4.44747,-75.17968],[4.45234,-75.13974]
];
