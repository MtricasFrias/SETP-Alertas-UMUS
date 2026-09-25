/* =====================================================================
   VISUALES «EXPLORAR» — uno por alerta. Área útil: 106 × 48 rem. Texto mínimo: 1,5 rem.
   ===================================================================== */
estilo(`
.caja{ background:var(--card); padding:1.6rem 2rem; min-height:0 }
.hd{ font:700 1.5rem var(--fd); color:var(--mut) }
.k-num{ font:800 3.2rem/1 var(--fd); color:var(--ink); letter-spacing:-.02em }
.pill{ display:inline-block; padding:.2rem .9rem; border-radius:.35rem; font:700 1.5rem var(--fd); white-space:nowrap }
.pill.ok{ background:var(--verde); color:#fff } .pill.pr{ background:#FCE9B5; color:#8A6412 } .pill.sf{ background:#F8D9D6; color:var(--rojo-t) }

/* ---------- FET ---------- */
.fet{ display:grid; grid-template-rows:auto minmax(0,1fr); gap:1.4rem; height:100% }
.fet-p{ padding:.9rem 2rem .8rem }
.pasos{ position:relative; display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:1rem }
.pasos:before{ content:""; position:absolute; left:10%; right:10%; top:1.5rem; height:.35rem; background:var(--rule); border-radius:1rem }
.pasos:after{ content:""; position:absolute; left:10%; top:1.5rem; height:.35rem; width:calc(var(--p,0)*20%); background:var(--sol); border-radius:1rem; transition:width .6s cubic-bezier(.5,0,.2,1) }
.paso{ position:relative; z-index:1; text-align:center; font:600 1.55rem/1.15 var(--ft); color:var(--mut); padding:0 .4rem; transition:.25s }
.paso span{ display:flex; margin:0 auto .4rem; width:3.3rem; height:3.3rem; border-radius:50%; align-items:center; justify-content:center; font:800 1.7rem var(--fd); background:var(--card); box-shadow:inset 0 0 0 .3rem #C0CCDF; color:var(--mut); transition:.25s }
.paso em{ display:block; font:800 1.5rem var(--fd); font-style:normal; margin-top:.2rem }
.paso.hecho span{ background:var(--verde); box-shadow:none; font-size:0 } .paso.hecho span:before{ content:""; width:1.3rem; height:.75rem; border-left:.32rem solid #fff; border-bottom:.32rem solid #fff; transform:rotate(-45deg) translate(.1rem,-.15rem) }
.paso.hecho em{ color:var(--verde-t) } .paso.curso em{ color:var(--ambar-t) } .paso.sig em{ color:var(--mut) }
.paso.curso span{ background:var(--sol); box-shadow:none; color:var(--ink); animation:pulsoP 1.8s ease-out infinite }
@keyframes pulsoP{ 0%{ box-shadow:0 0 0 0 rgba(255,210,94,.75) } 100%{ box-shadow:0 0 0 1.5rem rgba(255,210,94,0) } }
.paso.act{ color:var(--ink) } .paso.act span{ outline:.35rem solid var(--ink); outline-offset:.25rem }
.pasos.p4{ grid-template-columns:repeat(4,minmax(0,1fr)) } .pasos.p4:before{ left:12.5%; right:12.5% } .pasos.p4:after{ left:12.5%; width:calc(var(--p,0)*25%) }
.paso-d{ margin-top:.7rem; font-size:1.7rem; line-height:1.2; color:var(--ink); min-height:2.1rem }
@keyframes ola{ to{ transform:translateX(-190px) } }
@keyframes cae{ 0%{ transform:translateY(-34px); opacity:0 } 15%{ opacity:1 } 85%{ opacity:1 } 100%{ transform:translateY(130px); opacity:0 } }

/* ---------- Concertación ---------- */
.con{ display:grid; grid-template-columns:minmax(0,1fr) 25rem; grid-template-rows:minmax(0,1fr) minmax(0,1fr) 10rem; gap:1.6rem; height:100% }
.lane{ background:var(--card); padding:1.2rem 2.4rem 1.4rem; display:flex; flex-direction:column; min-height:0 }
.lane h4{ font:800 1.75rem var(--fd); color:var(--c) }
.ctr{ position:relative; flex:1; margin-top:.4rem; padding-top:4.6rem; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1.6rem; min-height:0 }
.ctr:before{ content:""; position:absolute; left:0; right:0; top:3.3rem; height:.5rem; border-radius:1rem; background:color-mix(in srgb,var(--c) 28%,#fff) }
.ctr:after{ content:""; position:absolute; left:0; top:3.3rem; height:.5rem; border-radius:1rem; background:var(--c); width:var(--w,0%); transition:width .8s cubic-bezier(.5,0,.2,1) }
.est{ position:relative; text-align:left; padding:1rem 1.4rem; background:var(--paper); border-left:.55rem solid color-mix(in srgb,var(--c) 35%,#fff); transition:.25s; display:flex; align-items:center; gap:1rem; min-height:0 }
.est:hover{ background:#DFE6F2 }
.est em{ flex:none; font-style:normal; width:3rem; height:3rem; border-radius:50%; background:var(--c); color:#fff; display:flex; align-items:center; justify-content:center; font:800 1.6rem var(--fd) }
.est b{ font:700 1.75rem/1.12 var(--fd); color:var(--ink) }
.est.act{ background:color-mix(in srgb,var(--c) 14%,#fff); border-left-color:var(--c) }
.est.hecho{ border-left-color:var(--c) } .est.hecho em{ font-size:0 } .est.hecho em:before{ content:""; width:1.2rem; height:.7rem; border-left:.3rem solid #fff; border-bottom:.3rem solid #fff; transform:rotate(-45deg) translate(.1rem,-.1rem) }
.cbus{ position:absolute; top:.15rem; width:6.8rem; height:3.6rem; margin-left:-3.4rem; color:var(--c); cursor:grab; transition:left .8s cubic-bezier(.34,1.3,.5,1); z-index:3; touch-action:none }
.cbus.arr{ cursor:grabbing; transition:none }
.cfin{ grid-column:2; grid-row:1/3; background:var(--navy); color:#fff; padding:2rem 1.8rem; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1.4rem; text-align:center; position:relative; transition:background .5s; overflow:hidden }
.cfin svg{ width:8rem; height:8rem; color:#fff } .cfin b{ font:800 2.2rem/1.1 var(--fd) } .cfin p{ font-size:1.55rem; line-height:1.2; color:#C5CFEE }
.cfin.ok{ background:var(--verde) } .cfin.ok p{ color:#E9FFF1 }
.cfin .sello{ position:absolute; top:1.6rem; right:-1rem; font:800 1.7rem var(--fd); letter-spacing:.06em; padding:.3rem 1.4rem; border:.28rem solid #fff; transform:rotate(12deg) scale(3); opacity:0 }
.cfin.ok .sello{ animation:sello .5s .1s cubic-bezier(.2,1.4,.4,1) forwards }
@keyframes sello{ to{ transform:rotate(12deg) scale(1); opacity:1 } }
.cdet{ grid-column:1/3; background:var(--card); border-left:.7rem solid var(--sol); padding:1rem 2.2rem; display:flex; flex-direction:column; justify-content:center }
.cdet b{ font:800 2.1rem var(--fd); color:var(--ink) } .cdet span{ font-size:1.7rem; line-height:1.2; color:var(--tx); margin-top:.2rem }

/* ---------- Semáforos ---------- */
.sem{ display:grid; grid-template-columns:14rem minmax(0,1fr) 37rem; grid-template-rows:minmax(0,1fr) auto; gap:2rem 3.4rem; height:100% }
.sem-a{ display:flex; flex-direction:column; align-items:center; gap:1.2rem; min-height:0 }
.tl{ width:12.4rem; padding:1.4rem 1.6rem; border-radius:3.2rem; background:var(--ink); display:flex; flex-direction:column; gap:1.3rem; cursor:pointer }
.tl i{ display:block; width:9.2rem; height:9.2rem; border-radius:50%; background:#56689B; transition:.2s }
.tl i.r.on{ background:#F26B71 } .tl i.a.on{ background:#FFD04D } .tl i.v.on{ background:#4FD693 }
.sem-a b{ font:800 1.9rem var(--fd); color:var(--ink) }
.sem-b{ display:flex; flex-direction:column; gap:1.3rem; min-height:0 } .sem-b .seg{ align-self:flex-start }
.brow .top{ display:flex; justify-content:space-between; align-items:baseline; font:600 1.7rem var(--ft) }
.brow .top strong{ font:800 3.4rem/1 var(--fd); color:var(--ink) }
.brow .b{ height:3.2rem; background:#D5DDEC; margin-top:.4rem; overflow:hidden }
.brow .b i{ display:block; height:100%; width:0; transition:width 1.2s cubic-bezier(.2,.8,.2,1) }
.brecha{ align-self:flex-start; font:800 2rem var(--fd); color:var(--rojo); border-left:.5rem solid var(--rojo); padding:.2rem 1.4rem; background:#F8E2E0 }
.sem-k{ display:flex; gap:3.4rem } .sem-k div b{ display:block; font:800 3.6rem/1 var(--fd); color:var(--ink) } .sem-k div b em{ font-style:normal; font-size:2.2rem; color:var(--mut) } .sem-k div span{ font-size:1.5rem; color:var(--mut) }
.sem-c{ min-height:0 }
.dots{ display:grid; grid-template-columns:repeat(8,minmax(0,1fr)); gap:.9rem; margin-top:1.4rem }
.dt{ aspect-ratio:1; border-radius:50%; background:#C7D0DE; transition:.3s cubic-bezier(.3,1.5,.5,1); cursor:pointer }
.dt.serv{ background:#46BC7C } .dt.dim{ opacity:.18 } .dt:hover{ transform:scale(1.15) }
.leg{ display:flex; flex-wrap:wrap; gap:.7rem }
.sem-d{ grid-column:1/4; display:flex; align-items:center; gap:2.4rem; background:var(--card); padding:1.3rem 2.2rem }
.sem-d .fnx{ font-size:1.7rem; color:var(--ink) } .sem-d .fnx b{ font:800 2.1rem var(--fd) }

/* ---------- ART ---------- */
.app{ display:grid; grid-template-columns:minmax(0,1fr) 34rem; gap:2.6rem; height:100% }
.app-d{ background:var(--card); position:relative; min-height:0; display:flex; flex-direction:column; padding-bottom:3.2rem }
.app-d svg{ flex:1; min-height:0; width:100% }
.app-d .ln{ fill:none; stroke-width:11; stroke-linecap:round; transition:opacity .3s; cursor:pointer }
.app-d .lbl{ font:700 22px var(--ft); fill:var(--ink) }
.app-d .bd{ opacity:0; transition:opacity .35s; pointer-events:none }
.app-d.show .bd{ opacity:1 }
.app-d .bd rect{ fill:#fff; stroke:var(--ink); stroke-width:3 } .app-d .bd text{ font:700 22px var(--ft); fill:var(--ink) } .app-d .bd line{ stroke:var(--ink); stroke-width:3 }
.app-d .nota{ position:absolute; right:1.4rem; bottom:.8rem; font-size:1.5rem; color:var(--mut) }
.app-i{ display:flex; flex-direction:column; gap:1.3rem; min-height:0 }
.lns{ display:flex; gap:1rem }
.lns button{ width:4.8rem; height:4.8rem; border-radius:50%; background:var(--c); color:#fff; font:800 2.4rem var(--fd); transition:transform .25s cubic-bezier(.3,1.5,.5,1) }
.lns button:hover{ transform:scale(1.1) } .lns button.on{ box-shadow:0 0 0 .4rem var(--paper), 0 0 0 .7rem var(--c) }
.info{ background:var(--card); border-left:.7rem solid var(--ink); padding:1.2rem 1.7rem; flex:1; min-height:0; overflow:hidden }
.info b{ display:block; font:800 2rem/1.15 var(--fd); color:var(--ink); margin-bottom:.6rem } .info span{ font-size:1.65rem; line-height:1.25; color:var(--tx) }
.acl{ display:flex; flex-direction:column; gap:.8rem }
.acl button{ text-align:left; padding:.6rem 1.2rem; background:#F8E2E0; border-left:.5rem solid var(--rojo); font:700 1.55rem/1.15 var(--ft); color:#A83C45; transition:.2s } .acl button:hover{ background:#F3CFCB }


/* ---------- desembolsos ---------- */
.des{ display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:2.4rem; height:100% }
.gr{ background:var(--card); padding:1.6rem 2rem; display:flex; flex-direction:column; min-height:0 }
.gr .tot{ font:800 4rem/1 var(--fd); color:var(--ink); letter-spacing:-.03em; margin:.3rem 0 .6rem } .gr .tot small{ font:600 1.55rem var(--ft); color:var(--mut); letter-spacing:0 }
.gr svg{ flex:1; min-height:0; width:100% }
.gr .b rect{ transition:.3s } .gr .b:hover rect{ opacity:.85 }
.gr .ax text{ font:700 16px var(--fd); fill:var(--mut); text-anchor:middle } .gr .vl{ font:800 17px var(--fd); fill:var(--ink); text-anchor:middle } .gr .g{ font:800 15px var(--ft); fill:var(--verde); text-anchor:middle }
.leyenda{ display:flex; gap:2rem; font-size:1.55rem; color:var(--ink); margin-top:.5rem; transition:.2s } .leyenda i{ display:inline-block; width:1.4rem; height:1.4rem; margin-right:.6rem; vertical-align:-.1rem; border-radius:.3rem }
.gnote{ font-size:1.5rem; color:var(--mut); margin-top:-.3rem }
.gr .tk{ font:600 15px var(--ft); fill:var(--mut) } .gr .ut{ font:700 15px var(--fd); fill:var(--mut) } .gr .xa{ font:800 16px var(--fd); fill:var(--ink); text-anchor:middle }
.gr .pc{ font:800 17px var(--fd); fill:#fff; text-anchor:middle } .gr .pc2{ font:800 26px var(--fd); fill:var(--ink); text-anchor:middle } .gr .pc3{ font:700 15px var(--ft); fill:var(--mut); text-anchor:middle }
.gr .lg{ font:800 16px var(--fd); text-anchor:middle } .gr .lg2{ font:700 16px var(--ft); fill:var(--ink); text-anchor:middle }
.gb{ transform-box:fill-box; transform-origin:50% 100%; animation:crece .9s cubic-bezier(.2,.8,.2,1) both; animation-delay:calc(var(--i)*110ms) } @keyframes crece{ from{ transform:scaleY(0) } }
.gr .dn{ animation:dona 1.3s .5s ease-out both } @keyframes dona{ from{ stroke-dasharray:0 400 } }
.leyenda .uni{ margin-left:auto; font-size:1.5rem; color:var(--mut); background:var(--paper); padding:.15rem 1rem; border-radius:.5rem }

/* ---------- actos: el borrador se arma pieza por pieza ---------- */
.acto{ position:relative; display:grid; grid-template-rows:auto minmax(0,1fr); gap:1.6rem; height:100% }
.ac-e{ padding:1.2rem 2rem }
@keyframes sacude{ 20%,60%{ transform:translateX(-.6rem) } 40%,80%{ transform:translateX(.6rem) } }
.ac-d{ position:relative; overflow:hidden; background:#fff; border-top:.8rem solid var(--navy); padding:1.3rem 2.2rem 1.3rem; display:flex; flex-direction:column; gap:.8rem; box-shadow:0 .8rem 2rem rgba(31,60,120,.12); transition:box-shadow .3s; min-height:0 }
.ad-h{ display:flex; align-items:center; gap:1.4rem } .ad-h svg{ width:3.8rem; height:3.8rem; color:var(--navy) } .ad-h b{ display:block; font:800 2.1rem var(--fd); color:var(--ink) } .ad-h span{ font-size:1.55rem; color:var(--mut) }
.ad-i{ font:700 1.55rem var(--fd); color:var(--ambar-t); background:#FCF1D0; padding:.3rem 1.2rem; align-self:flex-start }
.ad-sl{ display:flex; flex-direction:column; gap:.7rem; flex:1; min-height:0 }
.slot{ display:flex; align-items:center; gap:1.2rem; padding:.5rem 1.2rem; border:.22rem dashed #B7C6DF; background:var(--paper); transition:.35s; flex:1; min-height:0 }
.slot em{ flex:none; width:3rem; height:3rem; border-radius:50%; box-shadow:inset 0 0 0 .25rem #B7C6DF; color:var(--mut); font:800 1.6rem var(--fd); font-style:normal; display:grid; place-items:center; transition:.35s }
.slot b{ display:block; font:800 1.65rem var(--fd); color:var(--mut); transition:.3s } .slot span{ font-size:1.55rem; line-height:1.15; color:var(--mut); transition:.3s }
.slot.lleno{ border:.22rem solid var(--verde); background:#E4F4EA; animation:llena .5s cubic-bezier(.34,1.6,.5,1) }
.slot.lleno em{ background:var(--verde); box-shadow:none; color:#fff } .slot.lleno b{ color:var(--ink) } .slot.lleno span{ color:var(--tx); font-weight:600 }
@keyframes llena{ from{ transform:scale(.94) } }
.ad-f{ display:flex; align-items:center; gap:1.4rem } .ad-f .bar{ flex:1; height:1.5rem; background:#D5DDEC } .ad-f .bar i{ display:block; height:100%; width:0; background:var(--verde); transition:width .5s } .ad-f b{ font:800 1.7rem var(--fd); color:var(--ink); white-space:nowrap }
.ad-sello{ position:absolute; right:2.4rem; top:1.6rem; padding:.2rem 1.4rem; border:.32rem solid var(--verde); color:var(--verde-t); font:800 2rem var(--fd); letter-spacing:.06em; transform:rotate(9deg) scale(3); opacity:0; pointer-events:none }
.ac-d.listo .ad-sello{ animation:selloB .55s .1s cubic-bezier(.2,1.5,.4,1) forwards }
@keyframes selloB{ to{ transform:rotate(9deg) scale(1); opacity:1 } }

/* ---------- PMA: la ruta del soporte ---------- */
.pma{ display:flex; flex-direction:column; gap:1.6rem; height:100% }
.pma-s{ position:relative; height:17.4rem; background:var(--card); flex:none }
.pma-s .nodo{ position:absolute; top:.8rem; width:26rem; margin-left:-13rem; text-align:center }
.pma-s .nodo svg{ width:4.4rem; height:4.4rem; color:var(--ink) } .pma-s .nodo b{ display:block; font:800 1.75rem var(--fd); color:var(--ink) } .pma-s .nodo span{ font-size:1.5rem; color:var(--mut) }
.pma-s .cam{ position:absolute; left:12%; right:12%; border-top:.3rem dashed #A9B8CE }
.pma-s .sob{ position:absolute; width:4rem; height:2.9rem; margin-left:-2rem; transition:left 1.4s cubic-bezier(.5,0,.2,1); z-index:2; filter:drop-shadow(0 .25rem .25rem rgba(31,60,120,.25)) }
.pma-s .sob:after{ content:""; position:absolute; right:-.5rem; top:-.6rem; width:1.5rem; height:1.5rem; border-radius:50%; background:var(--c); border:.25rem solid #fff }
.pma-s .sob svg{ width:100%; height:100% }
.pma-b{ flex:1; min-height:0; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1.6rem }
.pcard{ background:var(--card); border-top:.7rem solid var(--c); padding:1.1rem 1.8rem 1.3rem; display:flex; flex-direction:column; gap:.7rem; min-height:0 }
.pc-h{ display:flex; align-items:center; gap:1rem } .pc-h svg{ width:3.4rem; height:3.4rem; color:var(--c) } .pc-h b{ font:800 2.2rem var(--fd); color:var(--ink) }
.pc-s{ margin-left:auto; font:800 1.5rem var(--fd); font-style:normal; padding:.15rem .9rem; border-radius:.5rem; white-space:nowrap }
.pc-s.pr{ background:#FCE9B5; color:#6B4A00 } .pc-s.rv{ background:#DCE8FB; color:var(--ink) } .pc-s.ob{ background:#F8D9D6; color:#8E2A32 } .pc-s.ok{ background:var(--verde); color:#fff }
.pcard p{ font-size:1.6rem; line-height:1.2; color:var(--tx); flex:1 }
.pc-e{ display:flex; flex-direction:column; gap:.5rem } .pc-d{ display:flex; gap:.4rem } .pc-d u{ flex:1; height:.9rem; background:#D5DDEC; text-decoration:none; border-radius:.3rem; transition:background .4s } .pc-d u.ok{ background:var(--verde) } .pc-d u.cur{ background:var(--sol) }
.pc-e span{ font:700 1.55rem var(--fd); color:var(--ink) }
.pcard .btn{ width:100%; font-size:1.55rem; padding:.85rem 1rem }
.pma-r{ display:flex; align-items:center; gap:1.8rem; background:var(--card); padding:.8rem 2.2rem; flex:none }
.pma-r .k-num{ font-size:3.6rem } .pma-r > span{ font-size:1.6rem; color:var(--mut) } .pma-r .msg{ margin-left:auto; text-align:right; font:800 1.65rem var(--fd); color:var(--rojo-t) } .pma-r .msg.ok{ color:var(--verde-t) }

/* ---------- Gantt ---------- */
.gtw{ display:flex; flex-direction:column; gap:1.2rem; height:100% }
.gt-top{ display:flex; align-items:center; gap:1rem; flex-wrap:wrap }
.lg-i{ display:inline-flex; align-items:center; gap:.6rem; font:600 1.5rem var(--ft); color:var(--ink); margin-left:.6rem } .lg-i i{ width:1.4rem; height:1.4rem }
.gt{ position:relative; --lw:27rem; background:var(--card); padding:.4rem 1.6rem 1rem; flex:none }
.gt-h, .gt-r{ display:grid; grid-template-columns:var(--lw) minmax(0,1fr) }
.gt-hy{ display:flex } .gt-hy .y{ flex:1; text-align:left; border-left:.15rem solid #C7D2E3; padding:.3rem 0 .2rem .8rem; font:800 1.6rem var(--fd); color:var(--ink) }
.gt-r{ height:2.85rem; align-items:center; cursor:pointer; border-top:.12rem solid #E0E6F1 } .gt-r.gsep{ border-top:.3rem solid var(--ink) }
.gt-r:hover, .gt-r.sel{ background:#E6ECF7 }
.gt-r .lb{ font:700 1.55rem var(--ft); color:var(--ink); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; padding-right:.6rem }
.gt-t{ position:relative; height:100%; background:repeating-linear-gradient(90deg,#DBE2EF 0 .12rem,transparent .12rem 8.3333%) }
.gt-t .bd{ position:absolute; top:.4rem; bottom:.4rem }
.gt-t .bd.ft{ opacity:.45; background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.75) 0 .35rem,transparent .35rem .8rem) }
.gt-t .bd.lt{ background:repeating-linear-gradient(135deg,var(--rojo) 0 .45rem,var(--rojo-t) .45rem .9rem) }
.gt-t .bd.ret{ box-shadow:inset 0 0 0 .18rem #8A93AD; background:transparent }
.gt-t .tg{ position:absolute; top:50%; transform:translate(.5rem,-50%); font:800 1.5rem var(--fd); color:var(--rojo); white-space:nowrap }
.gt-play{ position:absolute; top:.4rem; bottom:.6rem; left:calc(1.6rem + var(--lw) + (100% - 3.2rem - var(--lw)) * var(--f,.5)); width:0; z-index:6; pointer-events:none }
.gt-play:before{ content:""; position:absolute; left:-.15rem; top:2.6rem; bottom:0; width:.3rem; background:var(--ink) }
.gt-play .mango{ position:absolute; left:0; top:0; transform:translateX(-50%); background:var(--sol); color:var(--ink); font:800 1.5rem var(--fd); padding:.35rem 1.2rem; cursor:ew-resize; white-space:nowrap; pointer-events:auto }
.gt-d{ background:var(--card); border-left:.7rem solid var(--ink); padding:.6rem 1.8rem; font-size:1.6rem; line-height:1.2; color:var(--ink); flex:1; min-height:0 }
.gt-d b.t{ font:800 1.8rem var(--fd) }
.mp{ display:grid; grid-template-rows:auto minmax(0,1fr) 12.8rem; gap:1.2rem; height:100% }
.mp-t{ display:flex; align-items:center; gap:.8rem; font:700 1.6rem var(--fd); color:var(--mut) } .mp-t .chip b{ margin-left:.5rem; background:var(--sol); color:var(--ink); border-radius:.4rem; padding:0 .6rem } .mp-t .chip.on b{ background:var(--sol) }
.mp-b{ display:grid; grid-template-columns:35rem minmax(0,1fr); gap:1.4rem; min-height:0 }
.mp-l{ overflow:auto; background:var(--card); padding:.6rem; scrollbar-width:thin; min-height:0 } .mp-l h5{ font:800 1.5rem var(--fd); color:var(--mut); text-transform:uppercase; letter-spacing:.06em; margin:.7rem .4rem .3rem }
.mp-l button{ display:grid; grid-template-columns:1rem minmax(0,1fr) auto; align-items:center; gap:.9rem; width:100%; text-align:left; padding:.5rem .8rem .5rem .5rem; margin-bottom:.35rem; background:var(--paper); border-radius:.7rem; transition:.2s } .mp-l button:hover{ background:#DCE8F9 } .mp-l button.sel{ background:var(--ink); color:#fff }
.mp-l button u{ align-self:stretch; border-radius:.5rem; background:var(--c) } .mp-l button b{ display:block; font:700 1.6rem/1.1 var(--fd); color:inherit } .mp-l button small{ display:block; font:500 1.5rem var(--ft); color:var(--mut) } .mp-l button.sel small{ color:#C5CFEE }
.mp-l button i{ font:800 1.5rem var(--fd); font-style:normal; padding:.1rem .8rem; border-radius:.5rem; background:var(--c); color:#fff; white-space:nowrap } .mp-l button i{ text-shadow:0 0 .2rem rgba(0,0,0,.25) }
.mp-m{ position:relative; overflow:hidden; border-radius:.8rem; background:#E6ECF5 } .mp-m #mapa{ position:absolute; inset:0 }
.mp-l button.off{ opacity:.45 }
.mp-f{ position:relative; background:var(--card); border-left:.8rem solid var(--c,var(--navy)); padding:.9rem 2rem 1rem; display:flex; flex-direction:column; gap:.4rem; min-height:0; overflow:hidden; transition:border-color .3s }
.ff-x{ position:absolute; right:1.6rem; bottom:.9rem; padding:.3rem 1.2rem !important }
.cvn{ display:grid; grid-template-columns:repeat(4,auto); justify-content:space-between; gap:0 1.6rem; height:100%; align-content:center }
.cvn>div{ min-width:0 } .cvn h6{ font:800 1.5rem var(--fd); color:var(--mut); text-transform:uppercase; letter-spacing:.06em; margin:0 0 .15rem .2rem }
.cvn button{ display:flex; align-items:center; gap:.9rem; width:100%; padding:.1rem .6rem .1rem .2rem; border-radius:.6rem; font:600 1.55rem/1.15 var(--ft); color:var(--ink); text-align:left; transition:.2s } .cvn button:hover{ background:var(--paper) }
.cvn button svg,.cvn button img{ flex:none; width:3.4rem; height:2.4rem; object-fit:contain } .cvn button span{ white-space:nowrap }
.cvn button.off{ opacity:.4 } .cvn button.off span{ text-decoration:line-through }
.cvn .cv-pa{ flex:none; width:2.4rem; height:2.4rem; margin:0 .5rem; background:var(--azul); border:.2rem solid #fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; box-shadow:0 .2rem .5rem rgba(31,60,120,.35) } .cvn .cv-pa svg{ width:1.4rem; height:1.4rem }
.ff-h{ display:flex; align-items:center; gap:1.2rem } .ff-h .st{ font:800 1.55rem var(--fd); color:#fff; padding:.2rem 1.1rem; border-radius:.6rem; text-shadow:0 0 .2rem rgba(0,0,0,.25) } .ff-h h3{ font:800 2.5rem var(--fd); color:var(--ink); letter-spacing:-.01em } .ff-h em{ font:600 1.65rem var(--ft); font-style:normal; color:var(--mut) }
.ff-d{ margin-left:auto; display:flex; gap:2.4rem } .ff-d span{ font-size:1.5rem; color:var(--mut); line-height:1.1 } .ff-d b{ display:block; font:800 2.2rem var(--fd); color:var(--ink) }
.mp-f p{ font:600 1.7rem/1.22 var(--ft); color:var(--tx) } .mp-f small{ font:700 1.5rem var(--ft); color:var(--mut) }
.ff-r{ display:flex; gap:2rem } .ff-r span{ display:flex; align-items:center; gap:.7rem; font:600 1.7rem var(--ft); color:var(--ink) } .ff-r i{ width:1.4rem; height:1.4rem; border-radius:50%; background:var(--c) } .ff-r b{ font:800 2rem var(--fd) }
.mk-pa{ position:relative; width:0; height:0 }
.mk-pa i{ position:absolute; left:-1.9rem; top:-1.9rem; width:3.8rem; height:3.8rem; background:var(--azul); border:.3rem solid #fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; cursor:pointer; box-shadow:0 .3rem .8rem rgba(31,60,120,.35) } .mk-pa i svg{ width:2.1rem; height:2.1rem }

/* ---------- FET: etapas de la estructuración ---------- */
.fet{ gap:1.6rem }
.fet .fet-p{ padding:2.6rem 2.4rem 2.2rem }
.fet .pasos:before, .fet .pasos:after{ top:2.2rem }
.fet .paso{ font-size:1.9rem; cursor:pointer } .fet .paso span{ width:4.6rem; height:4.6rem; font-size:2.2rem; margin-bottom:.8rem } .fet .paso.hecho span:before{ width:1.8rem; height:1rem }
.fdet{ padding:3rem 4.4rem; display:flex; flex-direction:column; justify-content:center; gap:1.3rem; border-left:.9rem solid var(--c,var(--ink)) }
.fdet .fd-k{ font:800 1.7rem var(--fd); letter-spacing:.04em; text-transform:uppercase; color:var(--ct,var(--mut)) }
.fdet h3{ font:800 4rem/1.05 var(--fd); color:var(--ink); letter-spacing:-.02em }
.fdet p{ font:600 2.9rem/1.3 var(--ft); color:var(--tx); max-width:96rem }
.fdet.cambia > *{ animation:fichaIn .4s cubic-bezier(.22,.8,.3,1) }
/* ---------- actos: borrador fijo ---------- */
.ac-d.fijo{ transition:none }
.ac-d.fijo .ad-sl{ display:grid; grid-template-columns:1fr 1fr; grid-auto-rows:1fr; gap:1.2rem }
.ac-d.fijo .slot{ align-items:flex-start; padding:1.2rem 1.6rem; animation:none }
.ac-d.fijo .slot b{ font-size:2rem } .ac-d.fijo .slot span{ font-size:1.8rem; line-height:1.25 }
.ac-d.fijo .ad-sello{ transform:none; opacity:1 }
/* ---------- proyectos 2026 (tabla de Planeación) ---------- */
.pj{ height:100%; display:flex; flex-direction:column; padding:1.4rem 2.4rem 1.2rem }
.pj-t{ display:flex; align-items:baseline; gap:1.6rem } .pj-t b{ font:800 2.6rem var(--fd); color:var(--ink) } .pj-t span{ font-size:1.6rem; color:var(--mut) }
.pj table{ width:100%; border-collapse:collapse; margin-top:.7rem; table-layout:fixed } .pj col.c1{ width:38% } .pj col.c2, .pj col.c3{ width:16% } .pj col.c4{ width:30% }
.pj th{ font:800 1.5rem var(--fd); letter-spacing:.04em; text-transform:uppercase; color:var(--mut); text-align:left; padding:.3rem .8rem; border-bottom:.25rem solid var(--ink) }
.pj .v{ text-align:right; white-space:nowrap; font-variant-numeric:tabular-nums } .pj .pj-n{ text-align:center; color:var(--tx) }
.pj td{ font:600 1.6rem/1.1 var(--ft); color:var(--ink); padding:.2rem .8rem; border-bottom:.12rem solid #DBE3F0 }
.pj tr.g td{ font:800 1.5rem var(--fd); letter-spacing:.05em; text-transform:uppercase; color:var(--navy); background:#E1ECFA; border:0; padding:.15rem .8rem }
.pj .fe{ display:inline-flex; align-items:center; gap:.7rem; font:700 1.5rem var(--fd); white-space:nowrap } .pj .fe i{ flex:none; width:1.2rem; height:1.2rem; border-radius:50%; background:var(--c) }
.pj tr.tot td{ font:800 1.7rem var(--fd); border-top:.25rem solid var(--ink); border-bottom:0; padding-top:.5rem }
.pj tbody tr:not(.g):not(.tot):hover{ background:#E6ECF7 }

/* ---------- tecnología ---------- */
.tec{ display:grid; grid-template-rows:minmax(0,1fr) 16.6rem; gap:1.4rem; height:100% }
.tec-n{ position:relative; background:var(--card); min-height:0 } .tec-n svg{ position:absolute; left:0; right:0; top:5.6rem; bottom:3rem; width:100%; height:calc(100% - 8.6rem) }
.tec-n .lk{ stroke:#A9B8CE; stroke-width:3; stroke-dasharray:8 8 } .tec-n .lk.ok{ stroke:var(--verde); stroke-dasharray:none; stroke-width:5 }
.tec-n .nd{ cursor:grab } .tec-n .nd rect{ transition:fill .4s } .tec-n .nd text{ fill:#fff; font-weight:700; text-anchor:middle; pointer-events:none } .tec-n .nd .s{ font-size:15px; font-weight:500 }
.tec-n .pk{ fill:var(--ink) }
.tec-b{ position:absolute; left:2rem; right:2rem; top:1.1rem; display:flex; gap:1.6rem; align-items:center; z-index:2 } .tec-b .btn{ font-size:1.8rem; padding:1rem 2.4rem } .tec-b .tip2{ font-size:1.6rem; color:var(--mut); margin-left:auto } .tec-s{ position:absolute; left:50%; bottom:.7rem; transform:translateX(-50%); font-size:1.55rem; color:var(--mut); white-space:nowrap; z-index:2 }
.tec-g{ background:var(--card); padding:0 0 0; overflow:hidden } .tec-g .gt{ padding-top:.2rem }
`);

const MESES_L = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const mesTxt = i => MESES_L[i%12] + ' ' + (2023+Math.floor(i/12));
const idxFecha = d => (d.getFullYear()-2023)*12 + d.getMonth() + (d.getDate()-1)/new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
const NSVG = 'http://www.w3.org/2000/svg';
const clamp = (v,a,b) => Math.min(b,Math.max(a,v));

/* =====================================================================
   1 · FET — dónde estamos y simulador del fondo
   ===================================================================== */
VIS.fet = root => {
  const pasos=[['Modelo operacional','Estudio de actualización del modelo operacional realizado por SAIP & IKON: base de los escenarios de operación del Sistema.','hecho'],
    ['Resultados del modelo financiero','El SETP cuenta con los resultados del modelo financiero del Sistema.','hecho'],
    ['Calibración de escenarios','Calibración de escenarios con el estudio de SAIP & IKON, evaluando la participación de los distintos actores e identificando el mínimo impacto del déficit financiero.','curso'],
    ['Fuentes de alimentación','En análisis, las fuentes para la alimentación del Fondo.','curso'],
    ['Esquema de alimentación','Con estos análisis se define el esquema de alimentación del Fondo, acorde con las condiciones de operación y la implementación progresiva del Sistema.','sig']];
  const ETQ={hecho:'Listo',curso:'En curso',sig:'Siguiente'}, COL={hecho:['var(--verde)','var(--verde-t)'],curso:['var(--ambar)','var(--ambar-t)'],sig:['#8A93AD','var(--mut)']};
  root.innerHTML=`<div class="fet"><div class="caja fet-p rv"><div class="pasos" id="pasos" style="--p:0"></div></div><div class="caja fdet rv" id="pd"></div></div>`;
  const ps=$('#pasos',root), pd=$('#pd',root);
  ps.innerHTML=pasos.map((p,i)=>`<button class="paso ${p[2]}" data-i="${i}"><span>${p[2]==='hecho'?'':i+1}</span>${p[0]}<em>${ETQ[p[2]]}</em></button>`).join('');
  const marca=i=>{ const p=pasos[i]; $$('.paso',ps).forEach((e,k)=>e.classList.toggle('act',k===i)); pd.style.setProperty('--c',COL[p[2]][0]); pd.style.setProperty('--ct',COL[p[2]][1]);
    pd.innerHTML=`<div class="fd-k">Etapa ${i+1} de ${pasos.length} · ${ETQ[p[2]]}</div><h3>${p[0]}</h3><p>${p[1]}</p>`; pd.classList.remove('cambia'); void pd.offsetWidth; pd.classList.add('cambia'); };
  $$('.paso',ps).forEach(b=>b.onclick=()=>marca(+b.dataset.i)); marca(2);
  const t=setTimeout(()=>ps.style.setProperty('--p',2),350); limpiar.push(()=>clearTimeout(t));
};

/* =====================================================================
   2 · Concertación — dos vías que convergen
   ===================================================================== */
VIS.con = root => {
  const L=[{c:'#5B91E3',h:'1 · Viabilidad del sistema',p:[['Resultados del modelo','El SETP cuenta con los resultados del modelo financiero, articulados con los lineamientos del modelo operacional.'],['Mesas con transportadores','Los resultados del modelo se socializaron en mesas de trabajo con los transportadores actuales.'],['Modelo de cada empresa','Cada empresa estructura y evalúa su propio modelo financiero y empresarial, según sus condiciones y los escenarios de operación.']]},
           {c:'#3AA56D',h:'2 · Requisitos de los operadores',p:[['Mesas de trabajo','Mesas con los transportadores actuales, en el marco de su eventual participación como Agentes Operadores de Transporte (AOT).'],['Requisitos del Decreto 1079','Se solicitó a las empresas información sobre el cumplimiento de los requisitos aplicables del Decreto 1079.'],['Condiciones de participación','Con esa información se revisan las condiciones de participación de cada empresa como AOT.']]}];
  const pos=[-1,-1], X=p=>p<0?0:p>2?100:(p*2+1)/6*100;
  const HOY=`<b>Hoy: etapa 3 en las dos vías</b><span>Las mesas y solicitudes son diálogo y preparación: no formalizan acuerdos ni reconocen a las empresas como operadores.</span>`;
  root.innerHTML=`<div class="con">
    ${L.map((l,k)=>`<div class="lane rv" style="--c:${l.c}"><h4>${l.h}</h4><div class="ctr" id="tr${k}">${l.p.map((s,i)=>`<button class="est" data-k="${k}" data-i="${i}"><em>${i+1}</em><b>${s[0]}</b></button>`).join('')}<svg class="cbus" id="b${k}" style="left:0%"><use href="#i-bus"/></svg></div></div>`).join('')}
    <div class="cfin rv" id="fin"><span class="sello">HABILITADO</span>${ico('i-doc')}<b>Definición de actos administrativos</b><p>Con la viabilidad demostrada y los requisitos de los operadores verificados.</p></div>
    <div class="cdet rv" id="det"><b>Los buses ya van por la etapa 3</b><span>Arrástralos hasta el final o toca una etapa para ver su detalle.</span></div></div>`;
  function ver(k,p,manual=true){
    pos[k]=p; const bus=$('#b'+k,root), tr=$('#tr'+k,root);
    bus.style.left=X(p)+'%'; tr.style.setProperty('--w',X(p)+'%');
    $$('.est',tr).forEach((e,i)=>{ e.classList.toggle('hecho',i<p); e.classList.toggle('act',i===p); });
    if(manual){
      if(p>=0&&p<=2) $('#det',root).innerHTML=`<b style="color:${L[k].c}">${L[k].h} · etapa ${p+1}: ${L[k].p[p][0]}</b><span>${L[k].p[p][1]}</span>`;
      if(p===3) $('#det',root).innerHTML=`<b style="color:${L[k].c}">${L[k].h}: vía completa</b><span>${k===0?'Viabilidad respaldada por el modelo del Sistema y por el modelo de cada empresa.':'Condiciones de participación revisadas para cada empresa.'}</span>`;
    }
    $('#fin',root).classList.toggle('ok',pos[0]===3&&pos[1]===3);
  }
  $$('.est',root).forEach(e=>e.onclick=()=>ver(+e.dataset.k,+e.dataset.i));
  [0,1].forEach(k=>{ const bus=$('#b'+k,root), tr=$('#tr'+k,root);
    arrastrar(bus,{ inicio:()=>bus.classList.add('arr'), mueve:e=>{ const r=tr.getBoundingClientRect(); bus.style.left=clamp((e.clientX-r.left)/r.width*100,0,100)+'%'; },
      fin:()=>{ bus.classList.remove('arr'); const f=parseFloat(bus.style.left), c=[0,X(0),X(1),X(2),100]; ver(k,c.reduce((b,v,i)=>Math.abs(v-f)<Math.abs(c[b]-f)?i:b,0)-1); } }); });
  /* los buses salen solos y se detienen donde estamos hoy: etapa 3 */
  const tms=[]; limpiar.push(()=>tms.forEach(clearTimeout));
  [0,1,2].forEach(p=>tms.push(setTimeout(()=>{ ver(0,p,false); ver(1,p,false); },800+p*800)));
  tms.push(setTimeout(()=>{ $('#det',root).innerHTML=HOY; },800+3*800));
};

/* =====================================================================
   3 · Semaforización — dos cortes, brecha y cierre de la Fase I
   ===================================================================== */
VIS.sem = root => {
  const CUT=[{f:'6 sep',prog:92.26,real:92.97},{f:'20 sep',prog:96.13,real:93.62}];
  const S={c:0,serv:30,sim:false};
  const fx=(n,d=2)=>n.toLocaleString('es-CO',{minimumFractionDigits:d,maximumFractionDigits:d});
  root.innerHTML=`<div class="sem">
    <div class="sem-a rv"><div class="tl" id="tl"><i class="r on"></i><i class="a"></i><i class="v"></i></div><b id="tle">Rojo</b></div>
    <div class="sem-b rv">
      <div class="seg" id="seg"><button data-c="0" class="on">Corte 6 sep</button><button data-c="1">Corte 20 sep</button></div>
      <div class="brow"><div class="top"><span>Avance programado</span><strong id="vp">0 %</strong></div><div class="b"><i id="bp" style="background:#5B91E3"></i></div></div>
      <div class="brow"><div class="top"><span>Avance real ejecutado</span><strong id="vr">0 %</strong></div><div class="b"><i id="br" style="background:#F6BD4B"></i></div></div>
      <div class="brecha" id="brecha"></div>
      <div class="sem-k"><div><b id="kc">30<em> / 34</em></b><span>intersecciones en servicio y seguimiento</span></div><div><b>29 sep</b><span>fin del plazo contractual</span></div></div></div>
    <div class="sem-c rv"><div class="leg" id="fl">
        <button class="chip on" data-f="todas">Las 34</button><button class="chip" data-f="serv" style="--c:#46BC7C"><i></i><span id="c-sv">30</span> en servicio</button><button class="chip" data-f="pend" style="--c:#A9B8CE"><i></i><span id="c-pe">4</span> restantes</button></div>
      <div class="dots" id="dots"></div></div>
    <div class="sem-d rv"><div class="fnx">Plazo vigente hasta el <b>29 sep 2026</b> · <b>9 días</b> entre el corte del 20 sep y el cierre</div><button class="btn sol" id="sim" style="margin-left:auto">Simular cierre de Fase I</button><button class="btn borde" id="rst" style="display:none">Restablecer</button></div></div>`;
  const dots=$('#dots',root); dots.innerHTML=Array.from({length:34},()=>'<div class="dt"></div>').join('');
  let filtro='todas'; const raf={};
  const tw=(id,to,suf)=>{ const e=$('#'+id,root), from=e._v||0, t0=performance.now(); e._v=to; cancelAnimationFrame(raf[id]);
    (function f(t){ const p=Math.min(1,(t-t0)/900); e.textContent=fx(from+(to-from)*(1-Math.pow(1-p,3)))+suf; if(p<1) raf[id]=requestAnimationFrame(f); })(t0); };
  limpiar.push(()=>Object.values(raf).forEach(cancelAnimationFrame));
  function pinta(){
    const c=CUT[S.c], real=S.sim?CUT[1].real+(100-CUT[1].real)*((S.serv-30)/4):c.real, prog=c.prog, d=real-prog, ok=S.sim&&S.serv>=34;
    tw('vp',prog,' %'); tw('vr',real,' %'); $('#bp',root).style.width=prog+'%'; $('#br',root).style.width=real+'%';
    const b=$('#brecha',root), bien=d>=0;
    b.textContent = ok ? 'Las 34 intersecciones en servicio y seguimiento' : bien ? 'Adelantado '+fx(d)+' puntos frente al cronograma' : 'Diferencia de '+fx(-d)+' puntos frente al cronograma';
    b.style.color=bien?'#2E8B5A':''; b.style.borderLeftColor=bien?'var(--verde)':''; b.style.background=bien?'#DDF1E4':'';
    $$('.dt',dots).forEach((x,i)=>{ const e=i<S.serv?'serv':'pend'; x.className='dt '+e+(filtro!=='todas'&&e!==filtro?' dim':''); x.dataset.e=e; });
    $('#c-sv',root).textContent=S.serv; $('#c-pe',root).textContent=34-S.serv; $('#kc',root).innerHTML=`${S.serv}<em> / 34</em>`;
    $$('#seg button',root).forEach(x=>x.classList.toggle('on',+x.dataset.c===S.c));
  }
  $$('.dt',dots).forEach(d=>{ d.onmouseenter=e=>verTip({serv:'En servicio y seguimiento',pend:'Restante de la Fase I'}[d.dataset.e],e); d.onmouseleave=ocultaTip; });
  $$('#fl .chip',root).forEach(b=>b.onclick=()=>{ filtro=b.dataset.f; $$('#fl .chip',root).forEach(x=>x.classList.toggle('on',x===b)); pinta(); });
  $$('#seg button',root).forEach(b=>b.onclick=()=>{ if(S.sim) return; S.c=+b.dataset.c; pinta(); });
  const lamps={r:$('.r',root),a:$('.a',root),v:$('.v',root)}; let fase=0, tm; const NOM=['Rojo','Verde','Ámbar'], SEQ=['r','v','a'], DUR=[2600,2600,900];
  function luz(){ Object.entries(lamps).forEach(([k,e])=>e.classList.toggle('on',k===SEQ[fase])); $('#tle',root).textContent=S.sim&&S.serv>=34?'Red sincronizada':NOM[fase]; }
  function ciclo(){ clearTimeout(tm); luz(); if(S.sim&&S.serv>=34) return; tm=setTimeout(()=>{ fase=(fase+1)%3; ciclo(); },DUR[fase]); }
  $('#tl',root).onclick=()=>{ fase=(fase+1)%3; ciclo(); }; limpiar.push(()=>clearTimeout(tm)); ciclo();
  let it; limpiar.push(()=>clearInterval(it));
  $('#sim',root).onclick=()=>{ if(S.sim) return; S.sim=true; S.c=1; $('#sim',root).style.display='none';
    it=setInterval(()=>{ if(S.serv<34) S.serv++; pinta(); if(S.serv>=34){ clearInterval(it); fase=1; ciclo(); $('#rst',root).style.display=''; } },520); };
  $('#rst',root).onclick=()=>{ clearInterval(it); Object.assign(S,{serv:30,sim:false,c:1}); $('#rst',root).style.display='none'; $('#sim',root).style.display=''; fase=0; ciclo(); pinta(); };
  /* entra en el corte del 6 de sep (iban adelante) y pasa solo al del 20 (2,51 puntos atrás) */
  pinta(); const t2=setTimeout(()=>{ if(!S.sim){ S.c=1; pinta(); } },1900); limpiar.push(()=>clearTimeout(t2));
};

/* =====================================================================
   4a · Tranvía (ART) — esquema y coincidencias con el SETP
   ===================================================================== */
VIS.appA = root => {
  const LN = {
    A:{ c:'#E5626A', n:'Línea A · Ambalá', d:'M90,130 C260,95 430,80 610,95 S830,135 905,240', dur:11, setp:'Coincide con la Av. Ambalá, que el SETP ya ejecuta (Contrato de Obra 042 de 2026).', bd:[330,52,346,94,'Av. Ambalá · en ejecución'] },
    B:{ c:'#5B91E3', n:'Línea B · Jordán y Carrera 5', d:'M110,215 C250,300 380,380 510,360 S710,230 905,240', dur:12, setp:'Coincide con la Carrera 5 (ejecutada) y con Av. Jordán Paralela (sin recursos, en revisión). La ciclorruta de la Cra 5 está por radicar.', bd:[440,215,425,352,'Cra 5 · ejecutada'] },
    C:{ c:'#3AA56D', n:'Línea C · Picaleña, Mirolindo y Ferrocarril', d:'M135,285 C250,390 330,450 480,500 S700,640 830,610 S915,480 905,240', dur:17, setp:'Coincide con la Av. Ferrocarril (consultoría radicada el 10 de junio) y pasa por Picaleña, donde hay un predio de patiotalleres en gestión.', bd:[330,560,292,415,'Ferrocarril · radicada'] },
    D:{ c:'#F6BD4B', n:'Línea D · Boquerón y Calle 19', d:'M55,650 C75,540 105,410 135,285', dur:6, setp:'Boquerón tiene un predio de patiotalleres en gestión; la Calle 19 es el arranque de la Av. Ferrocarril.', bd:[300,655,62,648,'Boquerón · predio en gestión'] } };
  const ACL = [['¿100 % privado?','La propuesta declara inversión «100 % asumida por el privado» y, a la vez, pide recursos del CONPES 4017 para comprar vehículos. Hay que aclarar cuál es el aporte público real.'],
    ['¿Único operador?','La exclusividad choca con el modelo del SETP, que se construye con los transportadores existentes.'],
    ['¿321.065 viajes por día?','En una ciudad de unos 0,55 a 0,6 millones de habitantes son más de medio viaje diario por habitante solo en el ART. Se contrasta con el estudio de demanda del SETP (sep. 2025).']];
  root.innerHTML=`<div class="app">
    <div class="app-d rv show" id="ad"><svg viewBox="0 0 1000 700" id="sv">
        <path d="M40 90C200 40 560 20 890 100L965 260C925 430 800 660 640 690C440 710 220 600 90 420Z" fill="#DFE6F2"/>
        ${Object.entries(LN).map(([k,l])=>`<path class="ln" data-k="${k}" d="${l.d}" stroke="${l.c}"/>`).join('')}
        <circle cx="905" cy="240" r="13" fill="#1F3C78"/><text x="880" y="285" text-anchor="end" class="lbl">Lote · inicio de A, B y C</text>
        <circle cx="90" cy="130" r="9" fill="#E5626A" stroke="#fff" stroke-width="3"/><circle cx="110" cy="215" r="9" fill="#5B91E3" stroke="#fff" stroke-width="3"/><text x="20" y="98" class="lbl">Fin de A y B</text>
        <circle cx="135" cy="285" r="9" fill="#3AA56D" stroke="#fff" stroke-width="3"/><text x="154" y="322" class="lbl">Fin de C y D</text>
        <circle cx="55" cy="650" r="9" fill="#F6BD4B" stroke="#fff" stroke-width="3"/><text x="20" y="690" class="lbl">Inicio de D</text>
        <use href="#i-plane" x="900" y="380" width="44" height="44" style="color:#8A93AD"/><text x="965" y="450" text-anchor="end" class="lbl" style="fill:#66799F">Aeropuerto</text>
        ${Object.entries(LN).map(([k,l])=>`<g class="bd" data-k="${k}"><line x1="${l.bd[0]}" y1="${l.bd[1]}" x2="${l.bd[2]}" y2="${l.bd[3]}"/><rect x="${l.bd[0]-150}" y="${l.bd[1]-22}" width="300" height="44" rx="5"/><text x="${l.bd[0]}" y="${l.bd[1]+8}" text-anchor="middle">${l.bd[4]}</text></g>`).join('')}
        ${Object.entries(LN).map(([k,l])=>`<g class="tr" data-k="${k}" style="color:${l.c}"><use href="#i-art" width="176" height="35.7" x="-88" y="-29"/><animateMotion dur="${l.dur}s" repeatCount="indefinite" rotate="auto" path="${l.d}"/></g>`).join('')}
      </svg><div class="nota">Esquema no georreferenciado, basado en la Figura 8 de la propuesta</div></div>
    <div class="app-i rv">
      <div class="lns" id="lg">${Object.entries(LN).map(([k,l])=>`<button data-k="${k}" style="--c:${l.c}">${k}</button>`).join('')}</div>
      <div class="info" id="info"></div>
      <label class="sw on" id="swb"><i></i>Mostrar coincidencias con el SETP</label>
      <div class="acl" id="acl">${ACL.map((a,i)=>`<button data-i="${i}">${a[0]}</button>`).join('')}</div></div></div>`;
  let sel=null, acl=null;
  function pinta(){
    $$('.ln',root).forEach(l=>l.style.opacity=!sel||sel===l.dataset.k?1:.14);
    $$('.tr',root).forEach(t=>t.style.display=!sel||sel===t.dataset.k?'':'none');
    $$('#lg button',root).forEach(c=>c.classList.toggle('on',c.dataset.k===sel));
    $$('.bd',root).forEach(b=>b.style.display=!sel||sel===b.dataset.k?'':'none');
    $('#info',root).style.borderLeftColor = acl!==null?'#E5626A':sel?LN[sel].c:'#1F3C78';
    $('#info',root).innerHTML = acl!==null ? `<b>${ACL[acl][0]}</b><span>${ACL[acl][1]}</span>`
      : sel ? `<b>${LN[sel].n}</b><span>${LN[sel].setp}</span>` : `<b>3 de 4 troncales coinciden con corredores del SETP</b><span>Toca una línea para ver con qué proyecto se superpone. Se integran o se descartan; no se duplican.</span>`;
  }
  $$('.ln,#lg button',root).forEach(e=>e.onclick=()=>{ sel=sel===e.dataset.k?null:e.dataset.k; acl=null; pinta(); });
  $$('#acl button',root).forEach(b=>b.onclick=()=>{ acl=acl===+b.dataset.i?null:+b.dataset.i; pinta(); });
  $('#swb',root).onclick=()=>{ $('#swb',root).classList.toggle('on'); $('#ad',root).classList.toggle('show'); };
  pinta();
};

/* =====================================================================
   5a · Desembolsos — aportes del Municipio y cofinanciación de la Nación
   ===================================================================== */
VIS.desA = root => {
  const M=MUNICIPIO, N=NACION, sum=a=>a.reduce((x,y)=>x+y,0), c1=n=>(n/1e9).toFixed(1).replace('.',','), peso=n=>'$'+fm(n);
  const totM=sum(M.aporte)+sum(M.indexacion), totN=sum(N.convenio), adj=sum(N.adjudicado), rep=sum(N.reprogramar);
  let conIdx=true;
  const DEFS=`<defs><linearGradient id="gA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#86B3F2"/><stop offset="1" stop-color="#4A82DE"/></linearGradient>
    <linearGradient id="gI" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFDD84"/><stop offset="1" stop-color="#F2AE2E"/></linearGradient>
    <linearGradient id="gV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FD1A0"/><stop offset="1" stop-color="#34A06A"/></linearGradient>
    <linearGradient id="gR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F49AA0"/><stop offset="1" stop-color="#DE5860"/></linearGradient>
    <filter id="sh" x="-20%" y="-10%" width="140%" height="130%"><feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#1F3C78" flood-opacity=".25"/></filter></defs>`;
  root.innerHTML=`<div class="des">
    <div class="gr rv"><div class="hd">Aportes del Municipio · 100 % desembolsado cada año</div>
      <div class="tot"><span data-count="${totM/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>acumulado 2021–2026</small></div>
      <svg viewBox="0 0 470 330" id="gm"></svg>
      <div class="leyenda"><span><i style="background:#5B91E3"></i>Aporte</span><span id="lgix"><i style="background:#F6BD4B"></i>Indexación</span><span class="uni">$ mil M = miles de millones de pesos</span></div>
      <label class="sw on" id="swi"><i></i>Incluir indexación</label></div>
    <div class="gr rv"><div class="hd">Cofinanciación de la Nación · convenio 2024–2026</div>
      <div class="tot"><span data-count="${totN/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>convenio, todo el período</small></div>
      <svg viewBox="0 0 470 330" id="gn"></svg>
      <div class="leyenda"><span><i style="background:#3AA56D"></i>Adjudicado</span><span><i style="background:#E5626A"></i>Por reprogramar</span><span class="uni">* 2026 proyectado</span></div></div></div>`;
  const plot=(n,max,ticks,{L=66,R=10,T=36,B=46}={})=>{ const W=470,H=330,pw=W-L-R,ph=H-T-B; return { W,H,L,T,pw,ph,n,band:pw/n, y:v=>T+ph-(v/max)*ph, ejes:()=>ticks.map(t=>`<line x1="${L}" x2="${W-R}" y1="${T+ph-(t/max)*ph}" y2="${T+ph-(t/max)*ph}" stroke="#D9E3F3" stroke-width="1.5"/><text x="${L-9}" y="${T+ph-(t/max)*ph+5}" text-anchor="end" class="tk">$${t}</text>`).join('')+`<text x="${L-56}" y="20" class="ut">Miles de millones de pesos ($ mil M)</text><line x1="${L}" x2="${W-R}" y1="${T+ph}" y2="${T+ph}" stroke="#66799F" stroke-width="2"/>` }; };
  function dibujaM(){ const pl=plot(M.anios.length,22e9,[0,5,10,15,20].map(x=>x)); const P={...pl, ejes:()=>[0,5,10,15,20].map(t=>`<line x1="${pl.L}" x2="${pl.W-10}" y1="${pl.y(t*1e9)}" y2="${pl.y(t*1e9)}" stroke="#D9E3F3" stroke-width="1.5"/><text x="${pl.L-9}" y="${pl.y(t*1e9)+5}" text-anchor="end" class="tk">$${t}</text>`).join('')+`<text x="10" y="20" class="ut">Miles de millones de pesos ($ mil M)</text><line x1="${pl.L}" x2="${pl.W-10}" y1="${pl.y(0)}" y2="${pl.y(0)}" stroke="#66799F" stroke-width="2"/>` };
    let s=DEFS+P.ejes(); const bw=P.band*.62;
    M.anios.forEach((a,i)=>{ const x=P.L+i*P.band+(P.band-bw)/2, ap=M.aporte[i], ix=conIdx?M.indexacion[i]:0, tot=ap+ix, ya=P.y(ap), yt=P.y(tot);
      s+=`<g class="b" data-t="<b>${a}</b><br>Aporte: ${peso(ap)}${M.indexacion[i]?`<br>Indexación: ${peso(M.indexacion[i])}`:''}<br>Total: ${peso(ap+M.indexacion[i])}<br><span style='opacity:.8'>= $${c1(ap+M.indexacion[i])} mil M</span>${a===2026?'<br>Desembolsado el 30 de abril de 2026':''}" style="cursor:pointer">
        <g class="gb" style="--i:${i}" filter="url(#sh)"><rect x="${x}" y="${ya}" width="${bw}" height="${P.y(0)-ya}" rx="6" fill="url(#gA)"/>${ix?`<rect x="${x}" y="${yt}" width="${bw}" height="${ya-yt+4}" rx="6" fill="url(#gI)"/>`:''}</g>
        <text class="vl" x="${x+bw/2}" y="${yt-9}">$${c1(tot)}</text></g><text class="xa" x="${x+bw/2}" y="${P.y(0)+26}">${a}</text>`; });
    $('#gm',root).innerHTML=s; $$('#gm .b',root).forEach(g=>{ g.onmousemove=e=>verTip(g.dataset.t,e); g.onmouseleave=ocultaTip; });
    $('#lgix',root).style.opacity=conIdx?1:.3; }
  function dibujaN(){ const pl=plot(3,75e9,[0,25,50,75],{R:170}); let s=DEFS; const bw=pl.band*.66, X=pl.L;
    s+=[0,25,50,75].map(t=>`<line x1="${X}" x2="${pl.W-170}" y1="${pl.y(t*1e9)}" y2="${pl.y(t*1e9)}" stroke="#D9E3F3" stroke-width="1.5"/><text x="${X-9}" y="${pl.y(t*1e9)+5}" text-anchor="end" class="tk">$${t}</text>`).join('')+`<text x="10" y="20" class="ut">Miles de millones de pesos ($ mil M)</text><line x1="${X}" x2="${pl.W-170}" y1="${pl.y(0)}" y2="${pl.y(0)}" stroke="#66799F" stroke-width="2"/>`;
    N.anios.forEach((a,i)=>{ const x=X+i*pl.band+(pl.band-bw)/2, ad=N.adjudicado[i], rp=N.reprogramar[i], tot=N.convenio[i], y0=pl.y(0), ya=pl.y(ad), yt=pl.y(ad+rp), pa=Math.round(ad/tot*100), pr=100-pa;
      s+=`<g class="b" data-t="<b>${a}${a===2026?'*':''}</b> · convenio ${peso(tot)}<br>Adjudicado: ${peso(ad)} (${pa} %)<br>Por reprogramar: ${peso(rp)} (${pr} %)" style="cursor:pointer"><g class="gb" style="--i:${i}" filter="url(#sh)"><rect x="${x}" y="${ya}" width="${bw}" height="${y0-ya}" rx="6" fill="url(#gV)"/><rect x="${x}" y="${yt}" width="${bw}" height="${ya-yt+4}" rx="6" fill="url(#gR)"/></g>
        ${y0-ya>26?`<text class="pc" x="${x+bw/2}" y="${(y0+ya)/2+6}">${pa} %</text>`:''}${ya-yt>26?`<text class="pc" x="${x+bw/2}" y="${(ya+yt)/2+6}">${pr} %</text>`:''}
        <text class="vl" x="${x+bw/2}" y="${yt-9}">$${c1(tot)}</text></g><text class="xa" x="${x+bw/2}" y="${y0+26}">${a}${a===2026?'*':''}</text>`; });
    /* dona: cuánto del convenio está adjudicado */
    const R=54, C=2*Math.PI*R, pa=adj/totN, cx=392, cy=126;
    s+=`<g><circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="url(#gR)" stroke-width="26"/><circle class="dn" cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="url(#gV)" stroke-width="26" stroke-dasharray="${(C*pa).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 ${cx} ${cy})" filter="url(#sh)"/>
      <text class="pc2" x="${cx}" y="${cy+4}">${Math.round(pa*100)} %</text><text class="pc3" x="${cx}" y="${cy+22}">adjudicado</text></g>
      <text class="lg" x="${cx}" y="220" style="fill:#2E8B5A">Adjudicado</text><text class="lg2" x="${cx}" y="240">$${c1(adj)} mil M</text>
      <text class="lg" x="${cx}" y="272" style="fill:#B94750">Por reprogramar</text><text class="lg2" x="${cx}" y="292">$${c1(rep)} mil M · ${Math.round((1-pa)*100)} %</text>`;
    $('#gn',root).innerHTML=s; $$('#gn .b',root).forEach(g=>{ g.onmousemove=e=>verTip(g.dataset.t,e); g.onmouseleave=ocultaTip; }); }
  dibujaM(); dibujaN();
  $('#swi',root).onclick=()=>{ conIdx=!conIdx; $('#swi',root).classList.toggle('on',conIdx); dibujaM(); };
};

/* =====================================================================
   5b · Desembolsos — los 6 frentes de 2026 y el simulador de la cartera
   ===================================================================== */
VIS.desB = root => {
  const $$$=n=>n?'$ '+fm(n):'', GR=['Infraestructura','Patiotalleres','Tecnología'];
  const fase=p=>`<span class="fe" style="--c:${ESTADO[p.est].c}"><i></i>${p.f}</span>`;
  const fila=p=>p.nota ? `<tr><td>${p.n}</td><td colspan="2" class="pj-n">${p.nota}</td><td>${fase(p)}</td></tr>`
    : `<tr><td>${p.n}</td><td class="v">${$$$(p.nac)}</td><td class="v">${$$$(p.mun)}</td><td>${fase(p)}</td></tr>`;
  root.innerHTML=`<div class="pj caja rv"><div class="pj-t"><b>Proyectos 2026</b><span>Alerta 5 · información de la Dirección de Planeación, 25 sep 2026</span></div>
    <table><colgroup><col class="c1"><col class="c2"><col class="c3"><col class="c4"></colgroup><thead><tr><th>Componentes</th><th class="v">Nación</th><th class="v">Municipio</th><th>Fase actual</th></tr></thead><tbody>
      ${GR.map(g=>`<tr class="g"><td colspan="4">${g}</td></tr>${PROY26.filter(p=>p.g===g).map(fila).join('')}`).join('')}
      <tr class="tot"><td>Total 2026</td><td class="v">${$$$(TOT26.nac)}</td><td class="v">${$$$(TOT26.mun)}</td><td class="v">${$$$(TOT26.total)}</td></tr></tbody></table></div>`;
};

/* =====================================================================
   6 · Actos administrativos — el borrador se arma pieza por pieza
   ===================================================================== */
VIS.actos = root => {
  const P=ACTO_PARTES;
  const ETAPAS=[['Borrador','Listo','hecho'],['Revisión','Estamos aquí','curso'],['Adopción','Siguiente','sig'],['Expedición','Después','sig']];
  root.innerHTML=`<div class="acto">
    <div class="caja ac-e rv"><div class="pasos p4" style="--p:1">${ETAPAS.map((e,i)=>`<div class="paso ${e[2]}"><span>${e[2]==='hecho'?'':i+1}</span>${e[0]}<em>${e[1]}</em></div>`).join('')}</div></div>
    <div class="ac-d fijo rv">
      <div class="ad-h">${ico('i-doc')}<div><b>Acto administrativo</b><span>Adopción del componente operacional del SETP</span></div></div>
      <div class="ad-i">Insumo: estudio de actualización del modelo operacional</div>
      <div class="ad-sl">${P.map((p,i)=>`<div class="slot lleno"><em>${i+1}</em><div><b>${p.s}</b><span>${p.t}</span></div></div>`).join('')}</div>
      <div class="ad-sello">EN REVISIÓN</div></div></div>`;
};

/* =====================================================================
   7 · PMA — la ruta del soporte: contratista, interventoría y Ente Gestor
   ===================================================================== */
VIS.pma = root => {
  const C=PMA_COMP, E=PMA_ETAPAS, est=C.map(()=>1), atendida=C.map(c=>!c.obs);
  const X=[12,50,88];
  root.innerHTML=`<div class="pma">
    <div class="pma-s rv"><div class="nodo" style="left:12%">${ico('i-hardhat')}<b>Contratista de obra</b><span>prepara los soportes</span></div>
      <div class="nodo" style="left:50%">${ico('i-doc')}<b>Interventoría</b><span>Consorcio Intersemafóricas Ibagué</span></div>
      <div class="nodo" style="left:88%">${ico('i-building')}<b>Ente Gestor · SETP</b><span>recibe y cierra</span></div>
      ${C.map((c,i)=>`<div class="cam" style="top:${11.7+i*2.1}rem"></div><div class="sob" id="sob${i}" style="left:12%;top:${10.25+i*2.1}rem;--c:${c.c}"><svg viewBox="0 0 48 34"><use href="#i-env"/></svg></div>`).join('')}</div>
    <div class="pma-b">${C.map((c,i)=>`<div class="pcard rv" style="--c:${c.c}" id="pc${i}"><div class="pc-h">${ico(c.ic)}<b>${c.n}</b><i class="pc-s" id="ps${i}"></i></div><p>${c.t}</p>
        <div class="pc-e"><div class="pc-d" id="pd${i}">${E.map(()=>'<u></u>').join('')}</div><span id="pe${i}"></span></div><button class="btn" id="pb${i}"></button></div>`).join('')}</div>
    <div class="pma-r rv"><div class="msg" id="msg">Cierre contractual y liquidación: en espera del soporte completo</div><button class="btn borde" id="pre" style="display:none">Reiniciar</button></div></div>`;
  const ACC=['','Radicar informes y soportes','Completar la verificación','Remitir al Ente Gestor'];
  function pinta(i){
    const e=est[i], ob=C[i].obs&&!atendida[i];
    $$('#pd'+i+' u',root).forEach((u,k)=>u.className=k<e?'ok':k===e?'cur':'');
    $('#pe'+i,root).textContent = e>=4?'Remitido al Ente Gestor':ob?'Observaciones por atender':E[e-1]+' ✓';
    const s=$('#ps'+i,root); s.textContent = e>=4?'Remitido':ob?'Con observaciones':e>=2?'En revisión':'En preparación'; s.className='pc-s '+(e>=4?'ok':ob?'ob':e>=2?'rv':'pr');
    const b=$('#pb'+i,root); b.disabled=e>=4; b.textContent = e>=4?'✓ Remitido':ob?'Atender observaciones':ACC[e]; b.classList.toggle('borde',ob);
    const sob=$('#sob'+i,root); sob.style.left=(e>=4?X[2]:e>=2?X[1]:X[0])+'%';
    const k=est.filter(x=>x>=4).length;
    const ok=k===C.length; $('#msg',root).textContent = ok?'Soportes completos: se habilita el cierre contractual y la liquidación':'Cierre contractual y liquidación: en espera del soporte completo'; $('#msg',root).classList.toggle('ok',ok); $('#pre',root).style.display=ok?'':'none';
  }
  C.forEach((c,i)=>{ $('#pb'+i,root).onclick=()=>{ if(C[i].obs&&!atendida[i]) atendida[i]=true; else if(est[i]<4) est[i]++; pinta(i); }; pinta(i); });
  $('#pre',root).onclick=()=>{ C.forEach((c,i)=>{ est[i]=1; atendida[i]=!c.obs; pinta(i); }); };
};

/* =====================================================================
   Gantt reutilizable (alertas 8 y 9)
   ===================================================================== */
function gantt(host, rows, {fecha=CORTE_ACT.fecha, onSel, sinRezago=false}={}){
  const ANIOS=[2023,2024,2025,2026,2027,2028]; let hoy=idxFecha(fecha), sel=null;
  host.innerHTML=`<div class="gt"><div class="gt-h"><div></div><div class="gt-hy">${ANIOS.map(a=>`<div class="y">${a}</div>`).join('')}</div></div>
    ${rows.map((r,i)=>`<div class="gt-r${i>0&&rows[i-1].g!==r.g?' gsep':''}" data-i="${i}"><div class="lb" title="${r.n}">${r.n}</div><div class="gt-t"></div></div>`).join('')}
    <div class="gt-play" id="gp"><div class="mango" id="gm"></div></div></div>`;
  const play=$('#gp',host), first=$('.gt-t',host), p=v=>v/72*100+'%';
  function pinta(){
    const late=[];
    rows.forEach((r,i)=>{ const t=$$('.gt-r',host)[i].querySelector('.gt-t'), fin=r.b+1, col=ESTADO[r.est].c, cerrado=r.est==='ejecutado'||r.est==='retirado'; let h='';
      if(r.est==='retirado') h=`<div class="bd ret" style="left:${p(r.a)};width:${p(fin-r.a)}"></div>`;
      else { const dn=Math.max(0,Math.min(hoy,fin)-r.a);
        if(dn>0) h+=`<div class="bd" style="left:${p(r.a)};width:${p(dn)};background:${col}"></div>`;
        if(hoy<fin) h+=`<div class="bd ft" style="left:${p(Math.max(hoy,r.a))};width:${p(fin-Math.max(hoy,r.a))};background-color:${col}"></div>`;
        if(!cerrado&&!sinRezago&&hoy>fin){ h+=`<div class="bd lt" style="left:${p(fin)};width:${p(hoy-fin)}"></div><span class="tg" style="left:${p(hoy)}">+${Math.round(hoy-fin)} m</span>`; late.push([r,hoy-fin]); } }
      t.innerHTML=h; });
    play.style.setProperty('--f',clamp(hoy/72,0,1));
    const mi=Math.floor(hoy), dim=new Date(2023,mi+1,0).getDate(), d=new Date(2023,mi,1+Math.min(dim-1,Math.floor((hoy-mi)*dim+1e-6)));
    $('#gm',host).textContent=fFecha(d);
    host.dispatchEvent(new CustomEvent('gantt',{detail:{late:late.sort((a,b)=>b[1]-a[1]),fecha:d}}));
    $$('.gt-r',host).forEach(r=>r.classList.toggle('sel',rows[+r.dataset.i]===sel));
  }
  $$('.gt-r',host).forEach(r=>r.onclick=()=>{ sel=rows[+r.dataset.i]; onSel&&onSel(sel,hoy); pinta(); });
  arrastrar($('#gm',host),{ mueve:e=>{ const b=first.getBoundingClientRect(); hoy=clamp((e.clientX-b.left)/b.width*72,0,71.99); pinta(); } });
  pinta();
  return { set(f){ hoy=idxFecha(f); pinta(); } };
}
const rezagoTxt=(r,hoy)=>{ const m=hoy-(r.b+1); return m>0&&r.est!=='ejecutado'&&r.est!=='retirado' ? `<b style="color:#E5626A">${Math.round(m)} meses de rezago.</b> ` : ''; };

/* ---------- 8a · cronograma CONPES ---------- */
VIS.obraA = root => {
  const rows=GANTT.filter(g=>g.g!=='Tecnología');
  root.innerHTML=`<div class="gtw">
    <div class="gt-top rv"><button class="chip" id="bc">Corte ${CORTE_ACT.txt}</button><button class="chip" id="bh">Hoy</button>
      ${[['ejecutado','Ejecutado'],['ejecucion','En ejecución'],['elegible','Con elegibilidad'],['subsana','Subsanando'],['estructuracion','En estructuración'],['bloqueado','Sin recursos'],['retirado','Sin alcance']].map(([k,n])=>`<span class="lg-i"><i style="background:${ESTADO[k].c}"></i>${n}</span>`).join('')}</div>
    <div class="rv" id="gh"></div><div class="gt-d rv" id="gd"></div></div>`;
  let elegido=false;
  const det=(r,hoy)=>{ elegido=true; $('#gd',root).innerHTML=`<b class="t">${r.n}</b> · ${ESTADO[r.est].n}. Plan CONPES: ${mesTxt(r.a)} a ${mesTxt(r.b)}. ${rezagoTxt(r,hoy)}${r.nota}`; };
  const api=gantt($('#gh',root),rows,{onSel:det});
  $('#gh',root).addEventListener('gantt',e=>{ const l=e.detail.late;
    if(!elegido) $('#gd',root).innerHTML=`<b class="t">A ${fFecha(e.detail.fecha)}</b> · ${l.length?l.map(([r,m])=>`${r.n} (+${Math.round(m)} m)`).join(', '):'ningún frente supera su fecha de cierre.'}`; });
  $('#bc',root).onclick=()=>{ elegido=false; api.set(CORTE_ACT.fecha); }; $('#bh',root).onclick=()=>{ elegido=false; api.set(new Date()); };
  api.set(CORTE_ACT.fecha);
};

/* ---------- 8b · mapa de proyectos por frente y fase ---------- */
VIS.obraB = root => {
  const EST={ ejecutado:{n:'Terminada',c:ESTADO.ejecutado.c}, ejecucion:{n:'En obra',c:ESTADO.ejecucion.c}, estructuracion:{n:'Estructuración',c:ESTADO.estructuracion.c}, elegible:{n:'Con elegibilidad',c:ESTADO.elegible.c}, subsana:{n:'Subsanando',c:ESTADO.subsana.c} };
  const FR=[['todos','Todos'],['vias','Vías'],['sem','Semáforos'],['par','Paraderos'],['pat','Patiotalleres']];
  /* cada proyecto se evalúa caso por caso: tener KMZ no significa que esté en ejecución.
     Valores: tablero del SETP (contratos 037, 042, 046 y 117) y presentación de proyectos; los puntos solo se dibujan, no se cuentan.
     z = zoom desde el cual el punto pasa de marca simple a ícono; r = radio de la marca simple. */
  const PR=[
    {id:'ferro', fr:'vias', n:'Av. Ferrocarril', fase:'Diseños Fase III', e:'elegible', t:'lin', k:['ferrocarril'], txt:'Estudios y diseños radicados en la UMUS el 10 de junio de 2026; el 22 de septiembre obtuvieron la elegibilidad y el oficio se ajusta en uno de sus puntos. Rehabilitación y ajuste geométrico entre la Cl 19 y la Carrera 5.', ch:[['22 sep','elegibilidad de la UMUS'],['$34.157 M','obra + interventoría']], mp:'Línea discontinua cian: traza de la intervención (Cl 19 hasta la Carrera 5).'},
    {id:'c5f1', fr:'vias', n:'Carrera 5 · Fase I', fase:'Cl 64 → Cl 103 + Ambalá', e:'ejecutado', t:'lin', k:['carrera5FaseI'], txt:'Fase I del Contrato de Obra 046 de 2025: Carrera 5 entre la Cl 64 y la Cl 103 y Av. Ambalá entre la Cl 103 y la Cl 95. Ejecutada.', ch:[['$13.919,8 M','obra + interventoría'],['Ejecutada','estado de la fase']], mp:'Línea continua verde: Cra 5 de la Cl 64 a la Cl 100. El tramo de Ambalá Cl 103–95 aún no tiene traza.'},
    {id:'c5f2', fr:'vias', n:'Carrera 5 · Fase II', fase:'Cl 10 → Cl 58', e:'ejecutado', t:'lin', k:['carrera5'], txt:'Contrato de Obra 046 de 2025: obra terminada el 18 de febrero de 2026 (acta de inicio el 10 de abril de 2025), con accesibilidad universal en los pasos peatonales.', ch:[['$35.399,9 M','contrato de obra'],['10.160 m','longitud intervenida']], mp:'Línea continua verde: obra terminada.'},
    {id:'ambala', fr:'vias', n:'Av. Ambalá', fase:'Fase III · 2 tramos', e:'ejecucion', t:'lin', k:['ambala1','ambala2'], txt:'Contrato de Obra 042 de 2026 (acta de inicio el 15 de abril, fin estimado el 26 de noviembre): tramo 1 (Cra 5 a Cl 37, 3.526 m) y tramo 2 (Cl 77 a Cl 63, 1.481 m), con reposición de unos 2.100 m de alcantarillado.', ch:[['$25.978 M','obra + interventoría'],['5.007 m','longitud de los tramos']], mp:'Línea continua ámbar: tramos con obra en ejecución.'},
    {id:'ciclo', fr:'vias', n:'Ciclorruta Cra 5', fase:'Cl 10 → Cl 44', e:'elegible', t:'lin', k:['cicloCarrera5'], txt:'Estudios y diseños Fase III de cicloinfraestructura y andenes con accesibilidad universal (7.217 m), radicados el 3 de julio de 2026. El 22 de septiembre obtuvieron la elegibilidad y el oficio se ajusta en uno de sus puntos.', ch:[['22 sep','elegibilidad de la UMUS'],['$29.098,3 M','obra, interventoría y diseños']], mp:'Línea discontinua cian: traza de los estudios.'},
    {id:'sem1', fr:'sem', n:'Semaforización Fase I', fase:'Contrato 117 de 2024', e:'ejecucion', t:'sem', z:13.4, r:3.8, sz:1, txt:'Obra en la etapa final: planeamiento, configuración, integración y pruebas de la red. El plazo del contrato vence el 29 de septiembre de 2026 (acta de inicio el 20 de febrero de 2025).', ch:[['$9.778,7 M','obra + interventoría'],['29 sep 2026','fin del plazo']], mp:'Semáforos ámbar: intersecciones de la Fase I.'},
    {id:'sem2', fr:'sem', n:'Semaforización Fase II', fase:'Estudios y diseños', e:'estructuracion', t:'sem', z:13.4, r:3.8, sz:.9, txt:'En estudios y diseños, proyectada para 2026: obra por $11.525 M e interventoría por $990 M. Las intersecciones se ubican con el KMZ de la Fase II.', ch:[['$12.515 M','obra + interventoría'],['2026','año proyectado']], mp:'Semáforos azules: intersecciones por intervenir.'},
    {id:'par3', fr:'par', n:'Paraderos Tipo III', fase:'Bandera informativa', e:'ejecutado', t:'par', z:15, r:3.6, sz:.5, pts:PARADEROS_3, txt:'Señales verticales tipo banderín con mejoramiento de andenes, en corredores y barrios de la ciudad (Contrato de Obra 037 de 2025). Obra terminada, en liquidación; el mapa muestra los puntos ya georreferenciados.', ch:[['$9.341,4 M','obra + interventoría'],['28 feb 2026','fin del contrato']], mp:'puntos verdes, uno por paradero; al acercarte se vuelven íconos.'},
    {id:'par1', fr:'par', n:'Paraderos Tipo I', fase:'Cubierto con informador', e:'elegible', t:'par', z:14, r:4.2, sz:1.1, pts:PARADEROS_12.slice(0,10), txt:'Etapa II de paraderos Tipo I y II con MUPI, llave en mano. Con elegibilidad desde el 22 de septiembre; se cita a la Junta Directiva para aprobarla e iniciar la etapa precontractual.', ch:[['22 sep','elegibilidad de la UMUS'],['Con MUPI','informador electrónico']], mp:'Íconos cian grandes: paraderos por construir.'},
    {id:'par2', fr:'par', n:'Paraderos Tipo II', fase:'Con mobiliario y bandera', e:'elegible', t:'par', z:14, r:4.2, sz:.85, pts:PARADEROS_12.slice(10), txt:'Etapa II de paraderos Tipo I y II con MUPI. El proceso vale $9.366,3 M e incluye obras complementarias, estudios y diseños. Con elegibilidad desde el 22 de septiembre.', ch:[['$9.366,3 M','proceso Etapa II'],['22 sep','elegibilidad de la UMUS']], mp:'Íconos cian: paraderos por construir.'},
    {id:'patios', fr:'pat', n:'Patiotalleres', fase:'Adquisición de predios', e:'subsana', t:'pat', txt:'Adquisición predial radicada en la UMUS el 17 de julio de 2026; el SETP subsana las recomendaciones de la UMUS. Seis lotes previstos (tres compras en 2026) en Picaleña, El Salado, Boquerón y Nueva Castilla.', ch:[['3 predios','compra en 2026 · $10.000 M c/u'],['17 jul','radicado en UMUS']], mp:'Íconos de fábrica naranja: predios en gestión (ubicaciones referenciales).'}
  ];
  /* convenciones: cada fila muestra el símbolo tal como se dibuja en el mapa y oculta o muestra sus proyectos */
  const CV=[['Vías',[['Terminada','lin','ejecutado',['c5f1','c5f2']],['En obra','lin','ejecucion',['ambala']],['Con elegibilidad','lin','elegible',['ferro','ciclo']]]],
    ['Semáforos',[['Fase I · en obra','sem','ejecucion',['sem1']],['Fase II · estructuración','sem','estructuracion',['sem2']]]],
    ['Paraderos',[['Tipo III · instalados','par','ejecutado',['par3']],['Tipo I y II · con elegibilidad','par','elegible',['par1','par2']]]],
    ['Patiotalleres',[['Subsanando recomendaciones','pat','subsana',['patios']]]]];
  const ORD=['ferro','c5f1','c5f2','ambala','ciclo','par3','sem1','sem2','par1','par2'];
  let fr='todos', sel=null; const off=new Set();
  root.innerHTML=`<div class="mp">
    <div class="mp-t rv"><span>Frente:</span>${FR.map(([k,n])=>`<button class="chip${k==='todos'?' on':''}" data-f="${k}">${n} <b>${k==='todos'?PR.length:PR.filter(p=>p.fr===k).length}</b></button>`).join('')}</div>
    <div class="mp-b"><div class="mp-l rv" id="ml"></div><div class="mp-m rv"><div id="mapa"></div></div></div>
    <div class="mp-f rv" id="mf"></div></div>`;
  const flip=c=>[c[1],c[0]], R=parseFloat(getComputedStyle(document.documentElement).fontSize), lim=([la,lo])=>la>4.38&&la<4.47&&lo>-75.27&&lo<-75.12;
  const pinta=(tipo,color)=>{ const S=44, c=document.createElement('canvas'); c.width=c.height=S; const g=c.getContext('2d'), rr=(x,y,w,h,r)=>{ g.beginPath(); g.moveTo(x+r,y); g.arcTo(x+w,y,x+w,y+h,r); g.arcTo(x+w,y+h,x,y+h,r); g.arcTo(x,y+h,x,y,r); g.arcTo(x,y,x+w,y,r); g.closePath(); };
    g.shadowColor='rgba(31,60,120,.4)'; g.shadowBlur=5; g.shadowOffsetY=2; g.fillStyle='#fff'; g.beginPath(); g.arc(S/2,S/2,S/2-4,0,7); g.fill(); g.shadowColor='transparent';
    g.fillStyle=color; g.beginPath(); g.arc(S/2,S/2,S/2-8,0,7); g.fill(); g.fillStyle='#fff';
    if(tipo==='sem'){ rr(S/2-6.5,S/2-11.5,13,23,4); g.fill(); ['#E5626A','#F6BD4B','#3AA56D'].forEach((cc,i)=>{ g.fillStyle=cc; g.beginPath(); g.arc(S/2,S/2-6.2+i*6.2,2.4,0,7); g.fill(); }); }
    else { g.fillRect(S/2-1.7,S/2-1,3.4,12); rr(S/2-8.5,S/2-11,17,11,3); g.fill(); g.fillStyle=color; g.fillRect(S/2-5.5,S/2-8,11,2.4); g.fillRect(S/2-5.5,S/2-4.4,7.5,2.2); }
    return c; };
  const imgId=p=>'i-'+p.t+'-'+p.e;
  const simbolo=(t,e)=>t==='lin'?`<svg viewBox="0 0 34 22"><path d="M3 11H31" stroke="#fff" stroke-width="10" stroke-linecap="round"/><path d="M3 11H31" stroke="${EST[e].c}" stroke-width="5" ${e==='elegible'||e==='estructuracion'?'stroke-dasharray="5 4"':'stroke-linecap="round"'}/></svg>`:t==='pat'?`<i class="cv-pa" style="background:${EST[e].c}">${ico('i-factory')}</i>`:`<img src="${pinta(t,EST[e].c).toDataURL()}" alt="">`;
  const vis=p=>(fr==='todos'||p.fr===fr)&&!off.has(p.id);
  const lista=()=>{ const v=PR.filter(p=>fr==='todos'||p.fr===fr); let h='', ult='';
    v.forEach(p=>{ if(p.fr!==ult){ ult=p.fr; h+=`<h5>${FR.find(f=>f[0]===p.fr)[1]}</h5>`; } const s=EST[p.e];
      h+=`<button data-id="${p.id}" class="${sel===p.id?'sel':''}${off.has(p.id)?' off':''}" style="--c:${s.c}"><u></u><span><b>${p.n}</b><small>${p.fase}</small></span><i>${s.n}</i></button>`; });
    $('#ml',root).innerHTML=h; $$('#ml button',root).forEach(b=>b.onclick=()=>elige(b.dataset.id===sel?null:b.dataset.id)); const sb=$('#ml button.sel',root); if(sb) sb.scrollIntoView({block:'nearest'}); };
  const ficha=()=>{ const f=$('#mf',root), p=PR.find(x=>x.id===sel);
    if(!p){ f.style.setProperty('--c','var(--navy)');
      f.innerHTML=`<div class="cvn">${CV.map(([g,rows])=>`<div><h6>${g}</h6>${rows.map(([n,t,e,ids])=>`<button data-g="${ids.join(' ')}" class="${ids.every(id=>off.has(id))?'off':''}">${simbolo(t,e)}<span>${n}</span></button>`).join('')}</div>`).join('')}</div>`;
      $$('.cvn button',f).forEach(b=>b.onclick=()=>{ const ids=b.dataset.g.split(' '), ocultar=!ids.every(id=>off.has(id)); ids.forEach(id=>ocultar?off.add(id):off.delete(id)); ficha(); lista(); aplica(); }); return; }
    const s=EST[p.e]; f.style.setProperty('--c',s.c);
    f.innerHTML=`<div class="ff-h"><span class="st" style="background:${s.c}">${s.n}</span><h3>${p.n}</h3><em>${p.fase}</em><div class="ff-d">${p.ch.map(([v,l])=>`<span><b>${v}</b>${l}</span>`).join('')}</div></div><p>${p.txt}</p><small>En el mapa: ${p.mp}</small><button class="chip ff-x">Ver convenciones</button>`;
    $('.ff-x',f).onclick=()=>elige(null); };
  const map=new maplibregl.Map({container:'mapa',center:[-75.205,4.437],zoom:12.2,attributionControl:{compact:true},
    style:{version:8,sources:{base:{type:'raster',tileSize:256,maxzoom:19,attribution:'© OpenStreetMap contributors',tiles:['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png','https://b.tile.openstreetmap.org/{z}/{x}/{y}.png','https://c.tile.openstreetmap.org/{z}/{x}/{y}.png']}},
      layers:[{id:'fondo',type:'background',paint:{'background-color':'#E6ECF5'}},{id:'base',type:'raster',source:'base',paint:{'raster-saturation':-0.95,'raster-contrast':-0.15,'raster-brightness-min':.35,'raster-opacity':.9}}]}});
  map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right');
  window.__mapa=map; limpiar.push(()=>{ try{ map.remove(); }catch(e){} }); const M=[];
  const capas=p=>p.t==='lin'?['pl-'+p.id,'pc-'+p.id]:p.t==='pat'?[]:['pd-'+p.id,'pt-'+p.id];
  const geo=p=>p.t==='lin'?p.k.flatMap(k=>CORREDORES[k].coords):p.t==='sem'?SEMAFOROS.filter(s=>s.fase===(p.id==='sem1'?'I':'II')).map(s=>s.coord):p.t==='par'?p.pts.filter(lim):p.t==='pat'?PATIOS.map(x=>x.coord):[];
  const op=(l,v)=>{ const t=map.getLayer(l).type; if(t==='line') map.setPaintProperty(l,'line-opacity',v); else if(t==='symbol') map.setPaintProperty(l,'icon-opacity',v);  else{ map.setPaintProperty(l,'circle-opacity',v); map.setPaintProperty(l,'circle-stroke-opacity',v); } };
  function aplica(){ if(!map.isStyleLoaded()&&!map.getLayer('pl-ferro')) return;
    PR.forEach(p=>{ const v=vis(p), act=(sel===null||sel===p.id);
      capas(p).forEach(l=>{ if(!map.getLayer(l)) return; map.setLayoutProperty(l,'visibility',v?'visible':'none'); op(l,act?1:.18); }); });
    M.forEach(m=>{ const p=PR.find(x=>x.id==='patios'), act=(sel===null||sel==='patios'); m.getElement().style.display=vis(p)?'':'none'; const ii=m.getElement().querySelector('i'); if(ii) ii.style.opacity=act?1:.25; }); }
  function encuadra(p){ const pts=p?geo(p):PR.flatMap(x=>vis(x)?geo(x):[]); if(!pts.length) return; const b=new maplibregl.LngLatBounds(); pts.forEach(c=>b.extend(flip(c))); map.fitBounds(b,{padding:{left:3*R,top:3*R,right:6*R,bottom:3*R},maxZoom:15.2,duration:1300}); }
  function elige(id,quieto){ sel=id; if(id) off.delete(id); lista(); ficha(); aplica(); if(!quieto) encuadra(PR.find(x=>x.id===id)||null); }
  $$('.mp-t .chip',root).forEach(b=>b.onclick=()=>{ fr=b.dataset.f; sel=null; off.clear(); $$('.mp-t .chip',root).forEach(x=>x.classList.toggle('on',x===b)); lista(); ficha(); aplica(); encuadra(null); });
  map.on('load',()=>{
    PR.filter(p=>p.t==='sem'||p.t==='par').forEach(p=>{ const k=imgId(p); if(!map.hasImage(k)){ const c=pinta(p.t,EST[p.e].c); map.addImage(k,c.getContext('2d').getImageData(0,0,c.width,c.height),{pixelRatio:2}); } });
    const feats=p=>({type:'FeatureCollection',features:geo(p).map(c=>({type:'Feature',properties:{},geometry:{type:'Point',coordinates:flip(c)}}))});
    ORD.map(id=>PR.find(p=>p.id===id)).forEach(p=>{ const s=EST[p.e].c;
      if(p.t==='lin'){ map.addSource('s-'+p.id,{type:'geojson',data:{type:'Feature',properties:{},geometry:{type:'MultiLineString',coordinates:p.k.map(k=>CORREDORES[k].coords.map(flip))}}});
        const dash=(p.e==='elegible'||p.e==='estructuracion');
        map.addLayer({id:'pc-'+p.id,type:'line',source:'s-'+p.id,layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#fff','line-width':dash?9:13}});
        map.addLayer({id:'pl-'+p.id,type:'line',source:'s-'+p.id,layout:{'line-cap':dash?'butt':'round','line-join':'round'},paint:dash?{'line-color':s,'line-width':5,'line-dasharray':[1.6,1.2]}:{'line-color':s,'line-width':7}}); }
      else{ map.addSource('s-'+p.id,{type:'geojson',data:feats(p)});
        map.addLayer({id:'pd-'+p.id,type:'circle',source:'s-'+p.id,maxzoom:p.z,paint:{'circle-color':s,'circle-radius':['interpolate',['linear'],['zoom'],10,p.r*.7,p.z,p.r],'circle-stroke-color':'#fff','circle-stroke-width':1.4}});
        map.addLayer({id:'pt-'+p.id,type:'symbol',source:'s-'+p.id,minzoom:p.z,layout:{'icon-image':imgId(p),'icon-size':['interpolate',['linear'],['zoom'],p.z,p.sz*.7,17,p.sz*1.4],'icon-allow-overlap':true}}); }
      capas(p).forEach(l=>{ map.on('click',l,()=>elige(p.id,p.t!=='lin')); map.on('mousemove',l,e=>{ map.getCanvas().style.cursor='pointer'; verTip(`<b>${p.n}</b> · ${EST[p.e].n}`,e.originalEvent); }); map.on('mouseleave',l,()=>{ map.getCanvas().style.cursor=''; ocultaTip(); }); }); });
    PATIOS.forEach(x=>{ const el=document.createElement('div'); el.className='mk-pa'; el.innerHTML=`<i style="background:${EST.subsana.c}">${ico('i-factory')}</i>`; el.title=x.nombre; el.onclick=()=>elige('patios'); const mk=new maplibregl.Marker({element:el}).setLngLat(flip(x.coord)).addTo(map); M.push(mk); });
    const bb=new maplibregl.LngLatBounds(); PR.forEach(p=>geo(p).forEach(c=>bb.extend(flip(c)))); map.fitBounds(bb,{padding:{left:3*R,top:3*R,right:6*R,bottom:3*R},duration:0}); aplica(); });
  lista(); ficha();
};

/* =====================================================================
   9 · Tecnología — red arrastrable + cronograma
   ===================================================================== */
VIS.tecno = root => {
  const ND=[{id:'cc',n:'Centro de control',s:'Lote 6 · compra 2027',x:500,y:108,w:230,est:'estructuracion',g:'Centro de control'},
    {id:'rec',n:'Recaudo centralizado',s:'Estructurar en 2026',x:175,y:60,w:250,est:'estructuracion',g:'Recaudo y control de flota'},
    {id:'flo',n:'Gestión y control de flota',s:'Recursos desde 2027',x:185,y:152,w:290,est:'estructuracion',g:'Recaudo y control de flota'},
    {id:'usu',n:'Información al usuario',s:'En formulación',x:830,y:60,w:230,est:'estructuracion',g:'Información al usuario'},
    {id:'sem',n:'Semáforos',s:'Fase I al 93,6 %',x:830,y:152,w:200,est:'ejecucion',g:'Semaforización'},
    {id:'fet',n:'FET y modelo financiero',s:'Modelo actualizado',x:500,y:38,w:250,est:'estructuracion',g:null}];
  const LK=[['cc','rec'],['cc','flo'],['cc','usu'],['cc','sem'],['cc','fet'],['fet','rec']];
  root.innerHTML=`<div class="tec"><div class="tec-n rv"><div class="tec-b"><button class="btn sol" id="si">▶ Simular integración</button><button class="btn borde" id="re" style="display:none">↺ Restablecer</button><span class="tip2">Arrastra los nodos para reordenar el esquema</span></div><svg viewBox="0 0 1000 200" id="sv"></svg><div class="tec-s" id="tx">Azul: en estructuración · Ámbar: en ejecución · Verde: integrado</div></div><div class="tec-g rv" id="gh"></div></div>`;
  const sv=$('#sv',root), N={}; ND.forEach(n=>N[n.id]={...n,ok:false});
  const col=n=>n.ok?'#3AA56D':ESTADO[n.est].c;
  sv.innerHTML=LK.map((l,i)=>`<line class="lk" id="lk${i}"/>`).join('')+LK.map((l,i)=>`<circle class="pk" id="pk${i}" r="7" style="display:none"/>`).join('')+
    ND.map(n=>`<g class="nd" data-id="${n.id}"><rect id="r-${n.id}" x="${-n.w/2}" y="-33" width="${n.w}" height="66" rx="6" fill="${col(N[n.id])}"/><text y="-4" font-size="19" style="fill:${n.est==='ejecucion'?'#1F3C78':'#fff'}">${n.n}</text><text class="s" y="20" style="fill:${n.est==='ejecucion'?'#1F3C78':'#fff'}">${n.s}</text></g>`).join('');
  const pos=()=>{ ND.forEach(n=>{ const o=N[n.id]; $(`.nd[data-id=${n.id}]`,sv).setAttribute('transform',`translate(${o.x},${o.y})`); });
    LK.forEach((l,i)=>{ const a=N[l[0]], b=N[l[1]], e=$('#lk'+i,sv); e.setAttribute('x1',a.x); e.setAttribute('y1',a.y); e.setAttribute('x2',b.x); e.setAttribute('y2',b.y); e.classList.toggle('ok',a.ok&&b.ok); }); }; pos();
  $$('.nd',sv).forEach(g=>{ const o=N[g.dataset.id]; let off=[0,0];
    arrastrar(g,{ inicio:e=>{ const p=svgPt(sv,e); off=[p.x-o.x,p.y-o.y]; }, mueve:e=>{ const p=svgPt(sv,e); o.x=clamp(p.x-off[0],120,880); o.y=clamp(p.y-off[1],34,166); pos(); } });
    g.onmouseenter=e=>{ const r=o.g&&GANTT.find(x=>x.n===o.g); if(r) verTip(`<b>${r.n}</b><br>Plan: ${mesTxt(r.a)} a ${mesTxt(r.b)}<br>${r.nota}`,e); }; g.onmouseleave=ocultaTip; });
  let raf; const loop=t=>{ LK.forEach((l,i)=>{ const a=N[l[0]], b=N[l[1]], c=$('#pk'+i,sv), on=a.ok&&b.ok; c.style.display=on?'':'none'; if(on){ const p=((t/1400)+i*.17)%1; c.setAttribute('cx',a.x+(b.x-a.x)*p); c.setAttribute('cy',a.y+(b.y-a.y)*p); } }); raf=requestAnimationFrame(loop); };
  raf=requestAnimationFrame(loop); limpiar.push(()=>cancelAnimationFrame(raf));
  const pinta=()=>ND.forEach(n=>$('#r-'+n.id,sv).setAttribute('fill',col(N[n.id]))), tms=[]; limpiar.push(()=>tms.forEach(clearTimeout));
  $('#si',root).onclick=()=>{ $('#si',root).style.display='none'; ['sem','rec','flo','usu','cc','fet'].forEach((id,i)=>tms.push(setTimeout(()=>{ N[id].ok=true; pinta(); pos();
    if(i===5){ $('#tx',root).innerHTML='<b style="color:#3AA56D">Paquete integrado</b>: recaudo, control de flota, información, control, semáforos y FET.'; $('#re',root).style.display=''; } },i*700))); };
  $('#re',root).onclick=()=>{ tms.forEach(clearTimeout); ND.forEach(n=>N[n.id].ok=false); pinta(); pos(); $('#re',root).style.display='none'; $('#si',root).style.display=''; $("#tx",root).textContent="Azul: en estructuración · Ámbar: en ejecución · Verde: integrado"; };
  gantt($('#gh',root),GANTT.filter(g=>g.g==='Tecnología'),{fecha:CORTE_ACT.fecha,sinRezago:true});
};
