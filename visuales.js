/* =====================================================================
   VISUALES «EXPLORAR» — uno por alerta. Área útil: 106 × 48 rem. Texto mínimo: 1,5 rem.
   ===================================================================== */
estilo(`
.caja{ background:var(--card); padding:1.6rem 2rem; min-height:0 }
.hd{ font:700 1.5rem var(--fd); color:var(--mut) }
.k-num{ font:800 3.2rem/1 var(--fd); color:var(--ink); letter-spacing:-.02em }
.pill{ display:inline-block; padding:.2rem .9rem; border-radius:.35rem; font:700 1.5rem var(--fd); white-space:nowrap }
.pill.ok{ background:var(--verde); color:#fff } .pill.pr{ background:#FCE9B5; color:#8A6412 } .pill.sf{ background:#F8D9D6; color:#B94750 }

/* ---------- FET ---------- */
.fet{ display:grid; grid-template-rows:auto minmax(0,1fr); gap:1.4rem; height:100% }
.fet-p{ padding:.9rem 2rem .8rem }
.pasos{ position:relative; display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:1rem }
.pasos:before{ content:""; position:absolute; left:10%; right:10%; top:1.5rem; height:.35rem; background:#D4E1F2; border-radius:1rem }
.pasos:after{ content:""; position:absolute; left:10%; top:1.5rem; height:.35rem; width:calc(var(--p,0)*20%); background:var(--sol); border-radius:1rem; transition:width .6s cubic-bezier(.5,0,.2,1) }
.paso{ position:relative; z-index:1; text-align:center; font:600 1.55rem/1.15 var(--ft); color:var(--mut); padding:0 .4rem; transition:.25s }
.paso span{ display:flex; margin:0 auto .4rem; width:3.3rem; height:3.3rem; border-radius:50%; align-items:center; justify-content:center; font:800 1.7rem var(--fd); background:var(--card); box-shadow:inset 0 0 0 .3rem #C0CCDF; color:var(--mut); transition:.25s }
.paso em{ display:block; font:800 1.5rem var(--fd); font-style:normal; margin-top:.2rem }
.paso.hecho span{ background:var(--verde); box-shadow:none; font-size:0 } .paso.hecho span:before{ content:""; width:1.3rem; height:.75rem; border-left:.32rem solid #fff; border-bottom:.32rem solid #fff; transform:rotate(-45deg) translate(.1rem,-.15rem) }
.paso.hecho em{ color:#2E8B5A } .paso.curso em{ color:#94681A } .paso.sig em{ color:var(--mut) }
.paso.curso span{ background:var(--sol); box-shadow:none; color:var(--ink); animation:pulsoP 1.8s ease-out infinite }
@keyframes pulsoP{ 0%{ box-shadow:0 0 0 0 rgba(255,210,94,.75) } 100%{ box-shadow:0 0 0 1.5rem rgba(255,210,94,0) } }
.paso.act{ color:var(--ink) } .paso.act span{ outline:.35rem solid var(--ink); outline-offset:.25rem }
.pasos.p4{ grid-template-columns:repeat(4,minmax(0,1fr)) } .pasos.p4:before{ left:12.5%; right:12.5% } .pasos.p4:after{ left:12.5%; width:calc(var(--p,0)*25%) }
.paso-d{ margin-top:.7rem; font-size:1.7rem; line-height:1.2; color:var(--ink); min-height:2.1rem }
.fmain{ display:grid; grid-template-columns:24rem minmax(0,1fr) 30rem; gap:3rem; min-height:0 }
.tank{ position:relative; min-height:0 } .tank svg{ width:100%; height:100% }
.tank .o1{ animation:ola 4.5s linear infinite } .tank .o2{ animation:ola 7s linear infinite reverse }
@keyframes ola{ to{ transform:translateX(-190px) } }
.tank #agua{ transition:transform .9s cubic-bezier(.2,.8,.2,1) }
.tank .mon{ animation:cae 1.6s ease-in infinite }
@keyframes cae{ 0%{ transform:translateY(-34px); opacity:0 } 15%{ opacity:1 } 85%{ opacity:1 } 100%{ transform:translateY(130px); opacity:0 } }
.cob{ position:absolute; left:0; right:0; top:44%; text-align:center; pointer-events:none }
.cob b{ font:800 4.8rem/1 var(--fd); color:var(--ink) } .cob span{ display:block; font:600 1.5rem var(--ft); color:var(--mut) } .cob.lleno b, .cob.lleno span{ color:#fff; text-shadow:0 .1rem .5rem rgba(0,0,0,.4) }
.sls{ display:flex; flex-direction:column; justify-content:space-between; min-height:0 }
.sl span{ display:flex; justify-content:space-between; align-items:baseline; font:600 1.65rem var(--ft); color:var(--tx) }
.sl span b{ font:800 2.2rem var(--fd); color:var(--ink) }
.sls .nota{ font-size:1.5rem; color:var(--mut) }
.kres{ display:flex; flex-direction:column; gap:1.4rem; min-height:0 }
.kres .caja{ flex:1; display:flex; flex-direction:column; justify-content:center; padding:1rem 1.8rem }
.kres .caja span{ font-size:1.5rem; color:var(--mut); line-height:1.15; margin-top:.4rem }

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

.appb{ display:grid; grid-template-rows:auto minmax(0,1fr); gap:1.6rem; height:100% }
.zt{ position:relative; padding:.6rem 2.4rem 0; height:26.5rem }
.zt-in{ position:relative; height:21.6rem; --dl:0s }
.zt-rail{ position:absolute; left:0; right:0; top:3.6rem; height:.5rem; border-radius:1rem; background:repeating-linear-gradient(90deg,#8093B8 0 1.5rem,transparent 1.5rem 2.4rem) }
.zt-tab{ position:absolute; top:4.7rem; width:10.6rem; height:4.6rem; margin-left:-5.3rem; text-align:center; font:800 1.5rem/4.6rem var(--fd); color:#fff; cursor:pointer; z-index:2; opacity:.28; transform:scale(.86); transition:opacity .4s var(--dl), transform .5s cubic-bezier(.3,1.7,.5,1) var(--dl) }
.zt-tab:before{ content:""; position:absolute; inset:0; background:var(--navy); transform:skewX(-14deg); border-radius:.5rem; z-index:-1; transition:background .3s }
.zt-tab.on{ opacity:1; transform:none } .zt-tab.act:before{ background:var(--ink) }
.zt-tab.nuevo{ color:var(--ink) } .zt-tab.nuevo:before{ background:var(--sol) }
.zt-st{ position:absolute; top:9.3rem; width:.35rem; margin-left:-.175rem; background:var(--navy); border-radius:1rem; transform:scaleY(0); transform-origin:top; transition:transform .4s var(--dl) }
.zt-st.sh{ height:2.2rem } .zt-st.lg{ height:5.9rem } .zt-st.on{ transform:none }
.zt-st:after{ content:""; position:absolute; left:50%; bottom:-.45rem; width:1rem; height:1rem; margin-left:-.5rem; border-radius:50%; background:inherit }
.zt-lb{ position:absolute; width:18rem; margin-left:-9rem; text-align:center; font:600 1.55rem/1.15 var(--ft); color:var(--ink); cursor:pointer; opacity:0; transform:translateY(1rem) scale(.92); transition:opacity .4s var(--dl), transform .5s cubic-bezier(.3,1.6,.5,1) var(--dl) }
.zt-lb.sh{ top:11.9rem } .zt-lb.lg{ top:15.6rem } .zt-lb.on{ opacity:1; transform:none } .zt-lb.nuevo{ font-weight:700 }
.zt-tram{ position:absolute; top:.1rem; left:-12%; width:14rem; height:3.4rem; margin-left:-7rem; color:#8CC152; cursor:grab; z-index:4; touch-action:none; transition:left .9s cubic-bezier(.45,0,.25,1); filter:drop-shadow(0 .35rem .3rem rgba(31,60,120,.25)) }
.zt-tram.arr{ cursor:grabbing; transition:none }
.zt-det{ position:absolute; left:2.4rem; right:19rem; bottom:.6rem; font:600 1.65rem/1.22 var(--ft); color:var(--ink); min-height:4rem } .zt-det em{ font:800 1.65rem var(--fd); font-style:normal; color:#B94750 }
.zt-re{ position:absolute; right:2.4rem; bottom:.8rem }
.zt-det .gp{ color:var(--mut); font-weight:600 }
.appb-b{ display:grid; grid-template-columns:minmax(0,1.2fr) minmax(0,1fr); gap:1.8rem; min-height:0 }
.puertas{ display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:.8rem; margin-top:.8rem }
.puerta{ display:flex; align-items:center; gap:1rem; padding:.4rem 1rem; background:var(--paper); cursor:pointer; transition:.2s; font:700 1.55rem/1.1 var(--fd); color:var(--ink) } .puerta:hover{ background:#DFE6F2 }
.puerta .ck{ flex:none; width:2.5rem; height:2.5rem; border-radius:.4rem; box-shadow:inset 0 0 0 .25rem var(--rojo); transition:.2s; position:relative }
.puerta.on .ck{ background:var(--verde); box-shadow:none } .puerta.on .ck:before{ content:""; position:absolute; left:.8rem; top:.45rem; width:.9rem; height:1.5rem; border-right:.32rem solid #fff; border-bottom:.32rem solid #fff; transform:rotate(45deg) }
.comp{ display:flex; flex-direction:column; gap:.3rem; margin-top:.5rem }
.comp div{ display:grid; grid-template-columns:3rem minmax(0,1fr) auto; gap:1rem; align-items:center; font-size:1.55rem; line-height:1.12; color:var(--ink); font-weight:600; padding:.3rem 0; border-bottom:.12rem solid #DBE3F0 }
.comp div em{ font:800 1.8rem var(--fd); font-style:normal; color:var(--mut) }

/* ---------- desembolsos ---------- */
.des{ display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:2.4rem; height:100% }
.gr{ background:var(--card); padding:1.6rem 2rem; display:flex; flex-direction:column; min-height:0 }
.gr .tot{ font:800 4rem/1 var(--fd); color:var(--ink); letter-spacing:-.03em; margin:.3rem 0 .6rem } .gr .tot small{ font:600 1.55rem var(--ft); color:var(--mut); letter-spacing:0 }
.gr svg{ flex:1; min-height:0; width:100% }
.gr .b rect{ transition:.3s } .gr .b:hover rect{ opacity:.85 }
.gr .ax text{ font:700 16px var(--fd); fill:#66799F; text-anchor:middle } .gr .vl{ font:800 17px var(--fd); fill:#1F3C78; text-anchor:middle } .gr .g{ font:800 15px var(--ft); fill:#3AA56D; text-anchor:middle }
.leyenda{ display:flex; gap:2rem; font-size:1.55rem; color:var(--ink); margin-top:.5rem; transition:.2s } .leyenda i{ display:inline-block; width:1.4rem; height:1.4rem; margin-right:.6rem; vertical-align:-.1rem; border-radius:.3rem }
.gnote{ font-size:1.5rem; color:var(--mut); margin-top:-.3rem }
.des2{ display:grid; grid-template-columns:minmax(0,1.5fr) minmax(0,1fr); gap:2.4rem; height:100% }
.tp{ width:100%; border-collapse:collapse; margin-top:.8rem }
.tp th{ font:700 1.5rem var(--fd); color:var(--mut); text-align:left; padding:.3rem .6rem; border-bottom:.22rem solid var(--ink) }
.tp td{ font-size:1.6rem; padding:.4rem .6rem; border-bottom:.12rem solid #DBE3F0; line-height:1.1; font-weight:600; color:var(--ink) }
.tp tr{ cursor:pointer } .tp tbody tr:hover, .tp tr.sel{ background:#E6ECF7 } .tp td.v{ text-align:right; white-space:nowrap; font-variant-numeric:tabular-nums; font-weight:500 }
.fs4{ display:flex; gap:.3rem } .fs4 i{ width:1.6rem; height:.8rem; background:#CCD6E6 } .fs4 i.on{ background:var(--azul) } .fs4 i.cur{ background:var(--ambar) }
.split{ display:flex; height:2.6rem; margin-top:.6rem; font:700 1.5rem var(--fd); color:#fff } .split i{ display:flex; align-items:center; justify-content:center; font-style:normal; width:0; transition:width 1s cubic-bezier(.2,.8,.2,1); overflow:hidden; white-space:nowrap }
.dcard{ margin-top:.7rem; padding:.7rem 1.4rem; background:var(--paper); border-left:.6rem solid var(--ink); font-size:1.65rem; line-height:1.2; color:var(--ink) }
.cart{ display:flex; flex-direction:column; gap:.9rem; margin:1rem 0 }
.cart button{ display:flex; align-items:center; gap:1rem; text-align:left; padding:.8rem 1.3rem; background:var(--paper); border-left:.6rem solid #C0CCDF; font:700 1.6rem/1.12 var(--fd); color:var(--ink); transition:.2s }
.cart button.on{ background:#E1F1E6; border-left-color:var(--verde) } .cart button b{ margin-left:auto; white-space:nowrap; font-size:1.7rem } .cart button small{ display:block; font:500 1.5rem var(--ft); color:var(--mut) }
.cbar{ height:3rem; background:#D5DDEC; position:relative } .cbar i{ display:block; height:100%; width:0; background:var(--verde); transition:width .7s cubic-bezier(.2,.8,.2,1) }
.cbar span{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font:800 1.6rem var(--fd); color:var(--ink) }

/* ---------- actos: el borrador se arma pieza por pieza ---------- */
.acto{ position:relative; display:grid; grid-template-rows:auto minmax(0,1fr); gap:1.6rem; height:100% }
.ac-e{ padding:1.2rem 2rem }
.ac-c{ display:grid; grid-template-columns:40rem minmax(0,1fr); gap:2rem; min-height:0 }
.ac-l{ display:flex; flex-direction:column; gap:.9rem; min-height:0 }
.ac-pool{ display:flex; flex-direction:column; gap:.9rem; padding:1.2rem; background:#DCE8F6; flex:1; min-height:0; overflow:hidden }
.ac-pool:empty:after{ content:"Todas las piezas están en el documento"; text-align:center; font-size:1.7rem; color:var(--mut); padding:6rem 0 }
.ac-pz{ display:flex; align-items:center; gap:1.2rem; padding:1rem 1.4rem; background:var(--navy); color:#fff; font:600 1.6rem/1.15 var(--ft); cursor:grab; user-select:none; touch-action:none; transition:transform .2s, box-shadow .2s }
.ac-pz em{ flex:none; width:3rem; height:3rem; border-radius:50%; background:var(--sol); color:var(--ink); font:800 1.6rem var(--fd); font-style:normal; display:grid; place-items:center }
.ac-pz:hover{ transform:translateY(-.2rem) }
.ac-pz.vuela{ position:absolute; z-index:50; cursor:grabbing; box-shadow:0 1.2rem 2.4rem rgba(31,60,120,.3); transform:rotate(-1.5deg) scale(1.03); transition:none }
.act-h{ min-height:2.2rem; font:700 1.65rem var(--ft); color:#94681A }
@keyframes sacude{ 20%,60%{ transform:translateX(-.6rem) } 40%,80%{ transform:translateX(.6rem) } }
.ac-d{ position:relative; overflow:hidden; background:#fff; border-top:.8rem solid var(--navy); padding:1.3rem 2.2rem 1.3rem; display:flex; flex-direction:column; gap:.8rem; box-shadow:0 .8rem 2rem rgba(31,60,120,.12); transition:box-shadow .3s; min-height:0 }
.ac-d.over{ box-shadow:0 0 0 .5rem var(--sol), 0 1rem 2.4rem rgba(31,60,120,.2) }
.ad-h{ display:flex; align-items:center; gap:1.4rem } .ad-h svg{ width:3.8rem; height:3.8rem; color:var(--navy) } .ad-h b{ display:block; font:800 2.1rem var(--fd); color:var(--ink) } .ad-h span{ font-size:1.55rem; color:var(--mut) }
.ad-i{ font:700 1.55rem var(--fd); color:#94681A; background:#FCF1D0; padding:.3rem 1.2rem; align-self:flex-start }
.ad-sl{ display:flex; flex-direction:column; gap:.7rem; flex:1; min-height:0 }
.slot{ display:flex; align-items:center; gap:1.2rem; padding:.5rem 1.2rem; border:.22rem dashed #B7C6DF; background:var(--paper); transition:.35s; flex:1; min-height:0 }
.slot em{ flex:none; width:3rem; height:3rem; border-radius:50%; box-shadow:inset 0 0 0 .25rem #B7C6DF; color:var(--mut); font:800 1.6rem var(--fd); font-style:normal; display:grid; place-items:center; transition:.35s }
.slot b{ display:block; font:800 1.65rem var(--fd); color:var(--mut); transition:.3s } .slot span{ font-size:1.55rem; line-height:1.15; color:var(--mut); transition:.3s }
.slot.lleno{ border:.22rem solid var(--verde); background:#E4F4EA; animation:llena .5s cubic-bezier(.34,1.6,.5,1) }
.slot.lleno em{ background:var(--verde); box-shadow:none; color:#fff } .slot.lleno b{ color:var(--ink) } .slot.lleno span{ color:var(--tx); font-weight:600 }
@keyframes llena{ from{ transform:scale(.94) } }
.ad-f{ display:flex; align-items:center; gap:1.4rem } .ad-f .bar{ flex:1; height:1.5rem; background:#D5DDEC } .ad-f .bar i{ display:block; height:100%; width:0; background:var(--verde); transition:width .5s } .ad-f b{ font:800 1.7rem var(--fd); color:var(--ink); white-space:nowrap }
.ad-sello{ position:absolute; right:2.4rem; top:1.6rem; padding:.2rem 1.4rem; border:.32rem solid var(--verde); color:#2E8B5A; font:800 2rem var(--fd); letter-spacing:.06em; transform:rotate(9deg) scale(3); opacity:0; pointer-events:none }
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
.pc-s.pr{ background:#FCE9B5; color:#6B4A00 } .pc-s.rv{ background:#DCE8FB; color:#1F3C78 } .pc-s.ob{ background:#F8D9D6; color:#8E2A32 } .pc-s.ok{ background:var(--verde); color:#fff }
.pcard p{ font-size:1.6rem; line-height:1.2; color:var(--tx); flex:1 }
.pc-e{ display:flex; flex-direction:column; gap:.5rem } .pc-d{ display:flex; gap:.4rem } .pc-d u{ flex:1; height:.9rem; background:#D5DDEC; text-decoration:none; border-radius:.3rem; transition:background .4s } .pc-d u.ok{ background:var(--verde) } .pc-d u.cur{ background:var(--sol) }
.pc-e span{ font:700 1.55rem var(--fd); color:var(--ink) }
.pcard .btn{ width:100%; font-size:1.55rem; padding:.85rem 1rem }
.pma-r{ display:flex; align-items:center; gap:1.8rem; background:var(--card); padding:.8rem 2.2rem; flex:none }
.pma-r .k-num{ font-size:3.6rem } .pma-r > span{ font-size:1.6rem; color:var(--mut) } .pma-r .msg{ margin-left:auto; text-align:right; font:800 1.65rem var(--fd); color:#B94750 } .pma-r .msg.ok{ color:#2E8B5A }

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
.gt-t .bd.lt{ background:repeating-linear-gradient(135deg,#E5626A 0 .45rem,#B94750 .45rem .9rem) }
.gt-t .bd.ret{ box-shadow:inset 0 0 0 .18rem #8A93AD; background:transparent }
.gt-t .tg{ position:absolute; top:50%; transform:translate(.5rem,-50%); font:800 1.5rem var(--fd); color:var(--rojo); white-space:nowrap }
.gt-play{ position:absolute; top:.4rem; bottom:.6rem; left:calc(1.6rem + var(--lw) + (100% - 3.2rem - var(--lw)) * var(--f,.5)); width:0; z-index:6; pointer-events:none }
.gt-play:before{ content:""; position:absolute; left:-.15rem; top:2.6rem; bottom:0; width:.3rem; background:var(--ink) }
.gt-play .mango{ position:absolute; left:0; top:0; transform:translateX(-50%); background:var(--sol); color:var(--ink); font:800 1.5rem var(--fd); padding:.35rem 1.2rem; cursor:ew-resize; white-space:nowrap; pointer-events:auto }
.gt-d{ background:var(--card); border-left:.7rem solid var(--ink); padding:.6rem 1.8rem; font-size:1.6rem; line-height:1.2; color:var(--ink); flex:1; min-height:0 }
.gt-d b.t{ font:800 1.8rem var(--fd) }
.mp{ position:absolute; inset:0 } .mp #mapa{ position:absolute; inset:0 }
.mp-l{ position:absolute; left:0; top:0; bottom:9.6rem; width:35rem; z-index:5; overflow:auto; display:flex; flex-direction:column; gap:.6rem; background:var(--paper); padding:.8rem; scrollbar-width:thin }
.mp-l button{ display:flex; align-items:center; gap:1rem; text-align:left; padding:.7rem 1rem; background:var(--card); border-left:.6rem solid var(--c); font:700 1.6rem/1.1 var(--fd); color:var(--ink); transition:.2s } .mp-l button:hover{ background:#E3E9F4 } .mp-l button.sel{ background:var(--ink); color:#fff }
.mp-l button small{ display:block; font:500 1.5rem var(--ft); color:var(--mut) } .mp-l button.sel small{ color:#C5CFEE }
.mp-d{ position:absolute; left:0; right:0; bottom:0; height:9rem; z-index:5; background:var(--navy); color:#fff; padding:1rem 2rem; font-size:1.6rem; line-height:1.2 } .mp-d b{ color:var(--sol); font:800 1.8rem var(--fd) }
.mp-c{ position:absolute; right:1rem; top:1rem; z-index:5; display:flex; gap:.6rem } .mp-c .chip{ background:var(--paper) } .mp-c .chip.on{ background:var(--ink) }
.mk-p{ width:1rem; height:1rem; border-radius:50%; background:var(--azul); border:.18rem solid #fff }
.mk-pa{ position:relative; width:0; height:0 }
.mk-pa i{ position:absolute; left:-2rem; top:-2rem; width:4rem; height:4rem; background:var(--ink); border:.3rem solid #fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; cursor:pointer } .mk-pa i svg{ width:2.2rem; height:2.2rem }

/* ---------- tecnología ---------- */
.tec{ display:grid; grid-template-rows:minmax(0,1.55fr) minmax(0,1fr); gap:1.6rem; height:100% }
.tec-n{ position:relative; background:var(--card); min-height:0 } .tec-n svg{ position:absolute; inset:0; width:100%; height:100% }
.tec-n .lk{ stroke:#A9B8CE; stroke-width:3; stroke-dasharray:8 8 } .tec-n .lk.ok{ stroke:var(--verde); stroke-dasharray:none; stroke-width:5 }
.tec-n .nd{ cursor:grab } .tec-n .nd rect{ transition:fill .4s } .tec-n .nd text{ fill:#fff; font-weight:700; text-anchor:middle; pointer-events:none } .tec-n .nd .s{ font-size:15px; font-weight:500 }
.tec-n .pk{ fill:var(--ink) }
.tec-b{ position:absolute; left:1.4rem; top:1.2rem; display:flex; gap:1.2rem; align-items:center; z-index:2 } .tec-s{ position:absolute; left:50%; bottom:.7rem; transform:translateX(-50%); font-size:1.55rem; color:var(--mut); white-space:nowrap; z-index:2 }
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
  const P = {tt:3500, tu:3000, via:100, mes:24, apo:0};
  const sl = (id,lbl,min,max,step) => `<label class="sl"><span>${lbl}<b id="v-${id}"></b></span><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${P[id]}"></label>`;
  root.innerHTML = `<div class="fet">
    <div class="caja fet-p rv"><div class="pasos" id="pasos"></div><div class="paso-d" id="pd"></div></div>
    <div class="fmain">
      <div class="tank rv"><svg viewBox="0 0 260 400"><defs><clipPath id="cp"><path d="M35 60v274a95 24 0 0 0 190 0V60a95 24 0 0 1-190 0z"/></clipPath></defs>
          <path d="M100 4h60l-12 28h-36z" fill="#A9B8CE"/>
          <g id="mons">${[0,.5,1].map(d=>`<use class="mon" href="#i-coin" x="${112+d*8}" y="0" width="32" height="32" style="animation-delay:${d}s;animation-duration:${1.5+d*.3}s"/>`).join('')}</g>
          <path d="M35 60v274a95 24 0 0 0 190 0V60a95 24 0 0 1-190 0z" fill="#fff"/>
          <g clip-path="url(#cp)"><g id="agua" style="transform:translateY(360px)"><g class="o2" opacity=".55"><path id="w2" d="M-190 0q47.5-16 95 0t95 0t95 0t95 0t95 0t95 0v420h-570z"/></g><g class="o1"><path id="w1" d="M-190 6q47.5 14 95 0t95 0t95 0t95 0t95 0t95 0v420h-570z"/></g></g></g>
          <path d="M35 60v274a95 24 0 0 0 190 0V60" fill="none" stroke="#1F3C78" stroke-width="5"/><ellipse cx="130" cy="60" rx="95" ry="24" fill="none" stroke="#1F3C78" stroke-width="5"/>
          <line x1="14" x2="246" y1="64" y2="64" stroke="#1F3C78" stroke-dasharray="7 7" stroke-width="2.5"/></svg>
        <div class="cob"><b id="cob">0 %</b><span>del fondo requerido</span></div></div>
      <div class="sls rv">${sl('tt','Tarifa técnica por viaje',2500,5000,50)}${sl('tu','Tarifa al usuario por viaje',2000,4000,50)}${sl('via','Viajes pagos por día (miles)',40,200,5)}${sl('apo','Aporte anual al FET ($ mil millones)',0,40,1)}
        <div class="nota">Horizonte de cobertura: 24 meses. Cifras ilustrativas.</div></div>
      <div class="kres rv"><div class="caja"><div class="k-num" id="k-def">$0</div><span>déficit por viaje</span></div><div class="caja"><div class="k-num" id="k-req">$0</div><span>fondo requerido</span></div><div class="caja"><div class="k-num" id="k-apo">$0</div><span>aportado en el horizonte</span></div></div>
    </div></div>`;
  function calc(){
    ['tt','tu','via','apo'].forEach(k=>P[k]=+$('#'+k,root).value);
    const def=Math.max(0,P.tt-P.tu), req=def*P.via*1000*365*P.mes/12, apo=P.apo*1e9*P.mes/12, cob=req>0?apo/req:(apo>0?1:0), niv=Math.min(1,cob);
    $('#v-tt',root).textContent='$'+fm(P.tt); $('#v-tu',root).textContent='$'+fm(P.tu); $('#v-via',root).textContent=P.via+' mil'; $('#v-apo',root).textContent='$'+P.apo+' mil M';
    $('#k-def',root).textContent='$'+fm(def); $('#k-req',root).textContent=fB(req); $('#k-apo',root).textContent=fB(apo);
    $('#cob',root).textContent=Math.round(cob*100)+' %'; $(".cob",root).classList.toggle("lleno",niv>.42);
    const col = cob>=1?'#3AA56D':cob>=.5?'#F6BD4B':'#E5626A'; $('#w1',root).style.fill=col; $('#w2',root).style.fill=col;
    $('#agua',root).style.transform=`translateY(${360-300*niv}px)`; $('#mons',root).style.opacity=P.apo>0?1:0;
  }
  $$('input',root).forEach(i=>i.oninput=calc); calc();
  /* ruta de estructuración: dónde estamos hoy */
  const pasos=[['Modelo operacional','Estudio de actualización del modelo operacional (SAIK & IKON): base de los escenarios de operación.','hecho'],
    ['Resultados del modelo financiero','El SETP ya cuenta con los resultados del modelo financiero del sistema.','hecho'],
    ['Calibración de escenarios','Se calibran los escenarios de entrada en operación: ingresos, costos y necesidades de financiación proyectadas.','curso'],
    ['Fuentes de recursos','En paralelo, se analizan las posibles fuentes de recursos para financiar el fondo.','curso'],
    ['Esquema de financiación','Con esos análisis se define un esquema de financiación acorde con la operación y la implementación progresiva del Sistema.','sig']];
  const ETQ={hecho:'Listo',curso:'En curso',sig:'Siguiente'};
  const ps=$('#pasos',root);
  ps.innerHTML=pasos.map((p,i)=>`<button class="paso ${p[2]}" data-i="${i}"><span>${p[2]==='hecho'?'':i+1}</span>${p[0]}<em>${ETQ[p[2]]}</em></button>`).join('');
  const marca=i=>{ $$('.paso',ps).forEach((e,k)=>e.classList.toggle('act',k===i)); $('#pd',root).innerHTML=`<b>${pasos[i][0]}.</b> ${pasos[i][1]}`; };
  $$('.paso',ps).forEach(b=>b.onclick=()=>marca(+b.dataset.i)); marca(2);
  ps.style.setProperty('--p',0); const t=setTimeout(()=>ps.style.setProperty('--p',2),350); limpiar.push(()=>clearTimeout(t));
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
        <button class="chip on" data-f="todas">Las 34</button><button class="chip" data-f="serv" style="--c:#46BC7C"><i></i><span id="c-sv">30</span> en servicio</button><button class="chip" data-f="pend" style="--c:#A9B8CE"><i></i><span id="c-pe">4</span> por integrar</button></div>
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
    b.textContent = ok ? 'Meta alcanzada: Fase I integrada' : bien ? 'Adelantado '+fx(d)+' puntos frente al cronograma' : 'Diferencia de '+fx(-d)+' puntos frente al cronograma';
    b.style.color=bien?'#2E8B5A':''; b.style.borderLeftColor=bien?'var(--verde)':''; b.style.background=bien?'#DDF1E4':'';
    $$('.dt',dots).forEach((x,i)=>{ const e=i<S.serv?'serv':'pend'; x.className='dt '+e+(filtro!=='todas'&&e!==filtro?' dim':''); x.dataset.e=e; });
    $('#c-sv',root).textContent=S.serv; $('#c-pe',root).textContent=34-S.serv; $('#kc',root).innerHTML=`${S.serv}<em> / 34</em>`;
    $$('#seg button',root).forEach(x=>x.classList.toggle('on',+x.dataset.c===S.c));
  }
  $$('.dt',dots).forEach(d=>{ d.onmouseenter=e=>verTip({serv:'En servicio y seguimiento',pend:'Por integrar y probar'}[d.dataset.e],e); d.onmouseleave=ocultaTip; });
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
        ${Object.entries(LN).map(([k,l])=>`<g class="tr" data-k="${k}" style="color:${l.c}"><use href="#i-art" width="130" height="34" x="-65" y="-27"/><animateMotion dur="${l.dur}s" repeatCount="indefinite" rotate="auto" path="${l.d}"/></g>`).join('')}
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
   4b · Tranvía — trazabilidad (el tranvía recorre la línea de tiempo), condiciones y compromisos
   ===================================================================== */
VIS.appB = root => {
  const H=TRAZA, n=H.length, xs=i=>5.6+i*(88.8/(n-1));
  const COND=['Nuevo CONPES','Evaluación integral del sistema','Aclaraciones al proponente','Estudios prediales, estructurales y de demanda'];
  const fN=d=>d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
  root.innerHTML=`<div class="appb">
    <div class="caja zt rv"><div class="zt-in" id="zi"><div class="zt-rail"></div>
      ${H.map((h,i)=>{ const larga=i%2===0, gap=i>0?Math.round((h.f-H[i-1].f)/864e5):0;
        return `<div class="zt-st ${larga?'lg':'sh'}" data-i="${i}" style="left:${xs(i)}%"></div>
          <button class="zt-tab${h.nuevo?' nuevo':''}" data-i="${i}" style="left:${xs(i)}%">${fN(h.f)}</button>
          <div class="zt-lb ${larga?'lg':'sh'}${h.nuevo?' nuevo':''}" data-i="${i}" style="left:${xs(i)}%${i===0?';margin-left:-4rem;text-align:left':i===n-2?';width:24rem;margin-left:-12rem':i===n-1?';width:17.6rem;margin-left:-12.8rem;text-align:right':''}">${h.c||h.t}</div>
          `; }).join('')}
      <svg class="zt-tram" id="tram" viewBox="0 0 270 64"><use href="#i-art"/></svg></div>
      <div class="zt-det" id="zd"></div><button class="chip zt-re" id="zr">↺ Repetir recorrido</button></div>
    <div class="appb-b">
      <div class="caja rv"><div class="hd" style="display:flex;justify-content:space-between;align-items:baseline">Condiciones para avanzar · tócalas<b id="mt" style="color:var(--rojo);font:800 1.8rem var(--fd)">0 de 4</b></div><div class="puertas" id="pu">${COND.map((c,i)=>`<div class="puerta" data-i="${i}"><span class="ck"></span>${c}</div>`).join('')}</div></div>
      <div class="caja rv"><div class="hd">Compromisos de la mesa interinstitucional</div><div class="comp">
        <div><em>1</em><span>Concepto del DNP remitido a la APP privada · SETP</span><span class="pill ok">10 jun</span></div>
        <div><em>2</em><span>Mesa con MinHacienda, DNP y MinTransporte · SETP</span><span class="pill pr">Programada · 24 sep</span></div>
        <div><em>3</em><span>Avances de la prefactibilidad · APP privada</span><span class="pill sf">Solicitados · 24 sep</span></div></div></div></div></div>`;
  const zi=$('#zi',root), tram=$('#tram',root), tabs=$$('.zt-tab',zi), sts=$$('.zt-st',zi), lbs=$$('.zt-lb',zi); let tm=[];
  const parar=()=>{ tm.forEach(clearTimeout); tm=[]; }; limpiar.push(parar);
  function pinta(k){ tabs.forEach((e,i)=>{ e.classList.toggle('on',i<=k); e.classList.toggle('act',i===k); }); sts.forEach((e,i)=>e.classList.toggle('on',i<=k)); lbs.forEach((e,i)=>e.classList.toggle('on',i<=k));
    $('#zd',root).innerHTML = k>=0 ? `<em>${fFecha(H[k].f)}</em> · ${H[k].t}${k>0&&(H[k].f-H[k-1].f)/864e5>60?` <span class="gp">(≈ ${((H[k].f-H[k-1].f)/864e5/30.4).toFixed(1).replace(".",",")} meses después del paso anterior)</span>`:""}` : `<span class="mut">Toca una fecha, arrastra el tranvía o repite el recorrido.</span>`; }
  const va=(k,ms=900)=>{ tram.style.transitionDuration=ms+'ms'; tram.style.left=xs(k)+'%'; };
  function juega(){ parar(); zi.style.setProperty('--dl','0s'); pinta(-1); tram.style.transition='none'; tram.style.left='-12%'; void tram.offsetWidth; tram.style.transition='';
    zi.style.setProperty('--dl','.55s');
    H.forEach((_,i)=>tm.push(setTimeout(()=>{ va(i,i?820:1300); pinta(i); },500+i*1050))); tm.push(setTimeout(()=>zi.style.setProperty('--dl','0s'),500+n*1050)); }
  const salta=i=>{ parar(); zi.style.setProperty('--dl','0s'); va(i,600); pinta(i); };
  tabs.forEach((t,i)=>t.onclick=()=>salta(i)); lbs.forEach((t,i)=>t.onclick=()=>salta(i));
  $('#zr',root).onclick=juega;
  arrastrar(tram,{ inicio:()=>{ parar(); zi.style.setProperty('--dl','0s'); tram.classList.add('arr'); },
    mueve:e=>{ const r=zi.getBoundingClientRect(), p=clamp((e.clientX-r.left)/r.width*100,xs(0),xs(n-1)); tram.style.left=p+'%'; let k=-1; H.forEach((_,i)=>{ if(xs(i)<=p+.8) k=i; }); pinta(k); },
    fin:()=>{ tram.classList.remove('arr'); const f=parseFloat(tram.style.left); salta(H.reduce((b,_,i)=>Math.abs(xs(i)-f)<Math.abs(xs(b)-f)?i:b,0)); } });
  const on=new Set();
  $$('.puerta',root).forEach(p=>p.onclick=()=>{ const i=+p.dataset.i; on.has(i)?on.delete(i):on.add(i); p.classList.toggle('on',on.has(i)); const k=on.size;
    $('#mt',root).style.color=k===4?'#2E8B5A':k?'#94681A':'#B94750'; $('#mt',root).textContent=k===4?'4 de 4: puede avanzar':k+' de 4'; });
  juega();
};

/* =====================================================================
   5a · Desembolsos — aportes del Municipio y cofinanciación Nación
   ===================================================================== */
VIS.desA = root => {
  const M=MUNICIPIO, N=NACION, sum=a=>a.reduce((x,y)=>x+y,0);
  const totM=sum(M.aporte)+sum(M.indexacion), totN=sum(N.convenio), adj=sum(N.adjudicado), rep=sum(N.reprogramar);
  let conIdx=true;
  root.innerHTML=`<div class="des">
    <div class="gr rv"><div class="hd">Aportes del Municipio · 100 % desembolsado cada año</div>
      <div class="tot"><span data-count="${totM/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>2021–2026</small></div>
      <svg viewBox="0 0 480 320" id="gm"></svg>
      <div class="leyenda"><span><i style="background:#5B91E3"></i>Aporte</span><span id="lgix"><i style="background:#F6BD4B"></i>Indexación</span></div>
      <label class="sw on" id="swi"><i></i>Incluir indexación</label></div>
    <div class="gr rv"><div class="hd">Cofinanciación de la Nación · 2024–2026</div>
      <div class="tot"><span data-count="${totN/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>convenio, todo el período</small></div>
      <div class="gnote">Adjudicado ${(adj/totN*100).toFixed(1).replace('.',',')} % · Por reprogramar ${(rep/totN*100).toFixed(1).replace('.',',')} % en total</div>
      <svg viewBox="0 0 480 340" id="gn"></svg>
      <div class="leyenda"><span><i style="background:#3AA56D"></i>Adjudicado</span><span><i style="background:#E5626A"></i>Por reprogramar</span></div></div></div>`;
  const rect=(x,w,v,max,col,base,H)=>{ const h=v/max*H; return `<rect x="${x}" width="${w}" y="${base-h}" height="${h}" fill="${col}"/>`; };
  function dibujaM(){ const H=195, base=248, max=21e9, w=46; let s='';
    M.anios.forEach((a,i)=>{ const x=22+i*74, ap=M.aporte[i], ix=conIdx?M.indexacion[i]:0, tot=ap+ix;
      s+=`<g class="b" data-t="${a}: aporte ${fM(ap)}${M.indexacion[i]?` + indexación ${fM(M.indexacion[i])}`:''}" style="cursor:pointer">${rect(x,w,ap,max,'#5B91E3',base,H)}${ix?rect(x,w,ix,max,'#F6BD4B',base-ap/max*H,H):''}
        <text class="vl" x="${x+w/2}" y="${base-tot/max*H-8}">$${(tot/1e9).toFixed(1).replace('.',',')}</text></g><g class="ax"><text x="${x+w/2}" y="${base+22}">${a}</text></g>`; });
    $('#gm',root).innerHTML=s; $$('#gm .b',root).forEach(g=>{ g.onmousemove=e=>verTip(g.dataset.t,e); g.onmouseleave=ocultaTip; });
    $('#lgix',root).style.opacity=conIdx?1:.3; }
  function dibujaN(){ const H=190, base=248, max=72e9, w=92; let s='';
    N.anios.forEach((a,i)=>{ const x=48+i*146, cx=x+w/2, ad=N.adjudicado[i], rp=N.reprogramar[i];
      s+=`<g class="b" data-t="${a}${a===2026?'*':''}: convenio ${fM(N.convenio[i])} · adjudicado ${fM(ad)} · por reprogramar ${fM(rp)}" style="cursor:pointer">${rect(x,w,ad,max,'#3AA56D',base,H)}${rect(x,w,rp,max,'#E5626A',base-ad/max*H,H)}
        <text class="vl" x="${cx}" y="${base-N.convenio[i]/max*H-8}">$${(N.convenio[i]/1e9).toFixed(1).replace('.',',')}</text></g>
        <g class="ax"><text x="${cx}" y="${base+22}">${a}${a===2026?'*':''}</text></g>
        <text x="${cx}" y="${base+40}" style="font:700 13px 'Source Sans 3';fill:#3AA56D;text-anchor:middle">Adj. $${(ad/1e9).toFixed(1).replace('.',',')}</text>
        <text x="${cx}" y="${base+56}" style="font:700 13px 'Source Sans 3';fill:#E5626A;text-anchor:middle">Repr. $${(rp/1e9).toFixed(1).replace('.',',')}</text>`; });
    $('#gn',root).innerHTML=s+`<text x="470" y="336" text-anchor="end" style="font:500 15px Source Sans 3;fill:#66799F">* 2026 proyectado</text>`;
    $$('#gn .b',root).forEach(g=>{ g.onmousemove=e=>verTip(g.dataset.t,e); g.onmouseleave=ocultaTip; }); }
  dibujaM(); dibujaN();
  $('#swi',root).onclick=()=>{ conIdx=!conIdx; $('#swi',root).classList.toggle('on',conIdx); dibujaM(); };
};

/* =====================================================================
   5b · Desembolsos — seis frentes 2026 y cartera
   ===================================================================== */
VIS.desB = root => {
  const tot=k=>PROY26.reduce((a,p)=>a+p[k],0), rep26=NACION.reprogramar[2];
  let sel=0; const cartOn=new Set();
  root.innerHTML=`<div class="des2">
    <div class="gr rv"><div class="hd">Seis frentes de 2026 · toca una fila</div>
      <div class="tot"><span data-count="${(tot('mun')+tot('nac'))/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>en total</small></div>
      <div class="split"><i id="sn" style="background:#3AA56D">Nación</i><i id="sm" style="background:#5B91E3">Municipio</i></div>
      <table class="tp"><thead><tr><th>Frente</th><th style="text-align:right">Nación</th><th style="text-align:right">Municipio</th><th>Fase</th></tr></thead><tbody id="tp">
        ${PROY26.map((p,i)=>`<tr data-i="${i}"><td>${p.n}</td><td class="v">${p.nac?fM(p.nac):'—'}</td><td class="v">${p.mun?fM(p.mun):'—'}</td><td><div class="fs4">${FASES.map((f,k)=>`<i class="${k<p.fase?'on':k===p.fase?'cur':''}" title="${f}"></i>`).join('')}</div></td></tr>`).join('')}</tbody></table>
      <div class="dcard" id="dc"></div></div>
    <div class="gr rv"><div class="hd">¿Alcanza la cartera para lo por reprogramar?</div>
      <div class="tot" style="color:#E5626A"><span data-count="${rep26/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>sin proyecto en 2026</small></div>
      <div class="cart" id="ct">${CARTERA.map((c,i)=>`<button data-i="${i}"><span>${c.n}<small>${c.req}</small></span><b>${fM(c.v)}</b></button>`).join('')}</div>
      <div class="cbar"><i id="cb"></i><span id="cbt">0 %</span></div><div class="dcard" id="cd"></div></div></div>`;
  requestAnimationFrame(()=>setTimeout(()=>{ const n=tot('nac')/(tot('nac')+tot('mun'))*100; $('#sn',root).style.width=n+'%'; $('#sn',root).textContent='Nación '+Math.round(n)+' %'; $('#sm',root).style.width=(100-n)+'%'; $('#sm',root).textContent='Municipio '+Math.round(100-n)+' %'; },300));
  const dc=()=>{ const p=PROY26[sel]; $$('#tp tr[data-i]',root).forEach(r=>r.classList.toggle('sel',+r.dataset.i===sel)); $('#dc',root).innerHTML=`<b>${p.n}</b><br>${p.txt}`; };
  $$('#tp tr[data-i]',root).forEach(r=>r.onclick=()=>{ sel=+r.dataset.i; dc(); }); dc();
  function cart(){ const v=[...cartOn].reduce((a,i)=>a+CARTERA[i].v,0), pc=v/rep26*100;
    $('#cb',root).style.width=Math.min(100,pc)+'%'; $('#cbt',root).textContent=Math.round(pc)+' % de lo por reprogramar';
    $('#cd',root).innerHTML = !cartOn.size ? 'Suma proyectos con presupuesto identificado (obra + interventoría, referencial).' : pc>=100 ? `<b style="color:#3AA56D">La cartera cubre lo por reprogramar.</b> El cuello de botella no es falta de proyectos: es tener estudios y elegibilidad a tiempo.` : `Cubre ${fB(v)}; faltan ${fB(rep26-v)}.`; }
  $$('#ct button',root).forEach(b=>b.onclick=()=>{ const i=+b.dataset.i; cartOn.has(i)?cartOn.delete(i):cartOn.add(i); b.classList.toggle('on',cartOn.has(i)); cart(); }); cart();
};

/* =====================================================================
   6 · Actos administrativos — el borrador se arma pieza por pieza
   ===================================================================== */
VIS.actos = root => {
  const P=ACTO_PARTES; let puestos=0;
  const ETAPAS=[['Borrador','Listo','hecho'],['Revisión','Estamos aquí','curso'],['Adopción','Siguiente','sig'],['Expedición','Después','sig']];
  root.innerHTML=`<div class="acto" id="acto">
    <div class="caja ac-e rv"><div class="pasos p4" id="ap" style="--p:0">${ETAPAS.map((e,i)=>`<div class="paso ${e[2]}"><span>${e[2]==='hecho'?'':i+1}</span>${e[0]}<em>${e[1]}</em></div>`).join('')}</div></div>
    <div class="ac-c">
      <div class="ac-l rv"><div class="hd">Piezas del borrador · arrástralas al documento o tócalas</div><div class="ac-pool" id="apool"></div><div class="act-h" id="ah"></div></div>
      <div class="ac-d rv" id="adoc">
        <div class="ad-h">${ico('i-doc')}<div><b>Acto administrativo</b><span>Adopción del componente operacional del SETP</span></div></div>
        <div class="ad-i">Insumo: estudio de actualización del modelo operacional</div>
        <div class="ad-sl">${P.map((p,i)=>`<div class="slot" data-i="${i}"><em>${i+1}</em><div><b>${p.s}</b><span>Pendiente de ubicar</span></div></div>`).join('')}</div>
        <div class="ad-f"><div class="bar"><i id="apr"></i></div><b id="apt">0 de ${P.length} secciones</b></div>
        <div class="ad-sello" id="asel">EN REVISIÓN</div></div></div></div>`;
  const cont=$('#acto',root), pool=$('#apool',root), doc=$('#adoc',root);
  const sobre=e=>document.elementsFromPoint(e.clientX,e.clientY).includes(doc);
  const pon=(p,i,c)=>{ const sl=$(`.slot[data-i="${i}"]`,doc); sl.classList.add('lleno'); $('span',sl).textContent=p.t; c.remove(); puestos++;
    $('#apr',root).style.width=puestos/P.length*100+'%'; $('#apt',root).textContent=`${puestos} de ${P.length} secciones`;
    if(puestos===P.length){ doc.classList.add('listo'); $('#ah',root).textContent='Borrador armado: sigue la revisión y el trámite de adopción.'; } };
  P.forEach((p,i)=>{ const c=document.createElement('div'); c.className='ac-pz'; c.innerHTML=`<em>${i+1}</em><span>${p.t}</span>`; pool.append(c); let off, mov=false;
    arrastrar(c,{ inicio:e=>{ const r=c.getBoundingClientRect(), b=cont.getBoundingClientRect(); off=[e.clientX-r.left,e.clientY-r.top]; mov=false; c.style.width=r.width+'px'; c.classList.add('vuela'); c.style.left=(r.left-b.left)+'px'; c.style.top=(r.top-b.top)+'px'; },
      mueve:e=>{ mov=true; const b=cont.getBoundingClientRect(); c.style.left=(e.clientX-b.left-off[0])+'px'; c.style.top=(e.clientY-b.top-off[1])+'px'; doc.classList.toggle('over',sobre(e)); },
      fin:e=>{ doc.classList.remove('over'); c.classList.remove('vuela'); c.style.width=c.style.left=c.style.top=''; if(!mov||sobre(e)) pon(p,i,c); } }); });
  /* la marca de «estamos aquí» avanza sola de Borrador a Revisión */
  const t=setTimeout(()=>$('#ap',root).style.setProperty('--p',1),500); limpiar.push(()=>clearTimeout(t));
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
    <div class="pma-r rv"><div class="k-num" id="pt">0 de ${C.length}</div><span>remitidos al Ente Gestor</span><div class="msg" id="msg">Cierre contractual y liquidación: en espera del soporte completo</div><button class="btn borde" id="pre" style="display:none">Reiniciar</button></div></div>`;
  const ACC=['','Radicar informes y soportes','Completar la verificación','Remitir al Ente Gestor'];
  function pinta(i){
    const e=est[i], ob=C[i].obs&&!atendida[i];
    $$('#pd'+i+' u',root).forEach((u,k)=>u.className=k<e?'ok':k===e?'cur':'');
    $('#pe'+i,root).textContent = e>=4?'Remitido al Ente Gestor':ob?'Observaciones por atender':E[e-1]+' ✓';
    const s=$('#ps'+i,root); s.textContent = e>=4?'Remitido':ob?'Con observaciones':e>=2?'En revisión':'En preparación'; s.className='pc-s '+(e>=4?'ok':ob?'ob':e>=2?'rv':'pr');
    const b=$('#pb'+i,root); b.disabled=e>=4; b.textContent = e>=4?'✓ Remitido':ob?'Atender observaciones':ACC[e]; b.classList.toggle('borde',ob);
    const sob=$('#sob'+i,root); sob.style.left=(e>=4?X[2]:e>=2?X[1]:X[0])+'%';
    const k=est.filter(x=>x>=4).length; $('#pt',root).textContent=`${k} de ${C.length}`;
    const ok=k===C.length; $('#msg',root).textContent = ok?'Soportes completos: se habilita el cierre contractual y la liquidación':'Cierre contractual y liquidación: en espera del soporte completo'; $('#msg',root).classList.toggle('ok',ok); $('#pre',root).style.display=ok?'':'none';
  }
  C.forEach((c,i)=>{ $('#pb'+i,root).onclick=()=>{ if(C[i].obs&&!atendida[i]) atendida[i]=true; else if(est[i]<4) est[i]++; pinta(i); }; pinta(i); });
  $('#pre',root).onclick=()=>{ C.forEach((c,i)=>{ est[i]=1; atendida[i]=!c.obs; pinta(i); }); };
};

/* =====================================================================
   Gantt reutilizable (alertas 8 y 9)
   ===================================================================== */
function gantt(host, rows, {fecha=CORTE.fecha, onSel}={}){
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
        if(!cerrado&&hoy>fin){ h+=`<div class="bd lt" style="left:${p(fin)};width:${p(hoy-fin)}"></div><span class="tg" style="left:${p(hoy)}">+${Math.round(hoy-fin)} m</span>`; late.push([r,hoy-fin]); } }
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
    <div class="gt-top rv"><button class="chip" id="bc">Corte ${CORTE.txt}</button><button class="chip" id="bh">Hoy</button>
      ${[['ejecutado','Ejecutado'],['ejecucion','En ejecución'],['estructuracion','En estructuración'],['bloqueado','Sin recursos'],['retirado','Sin alcance']].map(([k,n])=>`<span class="lg-i"><i style="background:${ESTADO[k].c}"></i>${n}</span>`).join('')}</div>
    <div class="rv" id="gh"></div><div class="gt-d rv" id="gd"></div></div>`;
  let elegido=false;
  const det=(r,hoy)=>{ elegido=true; $('#gd',root).innerHTML=`<b class="t">${r.n}</b> · ${ESTADO[r.est].n}. Plan CONPES: ${mesTxt(r.a)} a ${mesTxt(r.b)}. ${rezagoTxt(r,hoy)}${r.nota}`; };
  const api=gantt($('#gh',root),rows,{onSel:det});
  $('#gh',root).addEventListener('gantt',e=>{ const l=e.detail.late;
    if(!elegido) $('#gd',root).innerHTML=`<b class="t">A ${fFecha(e.detail.fecha)}</b> · ${l.length?l.map(([r,m])=>`${r.n} (+${Math.round(m)} m)`).join(', '):'ningún frente supera su fecha de cierre.'}`; });
  $('#bc',root).onclick=()=>{ elegido=false; api.set(CORTE.fecha); }; $('#bh',root).onclick=()=>{ elegido=false; api.set(new Date()); };
  api.set(CORTE.fecha);
};

/* ---------- 8b · mapa ---------- */
VIS.obraB = root => {
  root.innerHTML=`<div class="mp"><div id="mapa"></div>
    <div class="mp-l rv" id="ml"></div>
    <div class="mp-c"><button class="chip on" id="tp1">Paraderos Tipo 1 y 2</button><button class="chip on" id="tpa">Patiotalleres</button></div>
    <div class="mp-d rv" id="md"><b>Frentes pendientes de infraestructura.</b> Toca un corredor en el mapa o en la lista.</div></div>`;
  const F=[
    {id:'ferrocarril',n:'Av. Ferrocarril',s:'Consultoría radicada · 10 jun',c:ESTADO.estudios.c,k:['ferrocarril'],t:'Estudios y diseños Fase III radicados en UMUS el 10 de junio de 2026. Presupuesto de obra $32.035 M + interventoría $2.122 M.'},
    {id:'ambala',n:'Av. Ambalá',s:'En ejecución',c:ESTADO.ejecucion.c,k:['ambala1','ambala2'],t:'Contrato de Obra 042 de 2026. Tramo 1 (Cra 5 a Cl 37) y tramo 2 (Cl 77 a Cl 63): 5.007 m.'},
    {id:'cra5',n:'Carrera 5',s:'Ejecutada',c:ESTADO.ejecutado.c,k:['carrera5','carrera5FaseI'],t:'Fases I y II ejecutadas: eje troncal del SETP, con accesibilidad universal en los pasos peatonales.'},
    {id:'ciclo',n:'Ciclorruta Cra 5',s:'Radicar · 30 jun',c:ESTADO.estructuracion.c,k:['cicloCarrera5'],t:'Consultoría de cicloinfraestructura y andenes (Cl 10 a 44) en estructuración, próxima a radicar. Estimado $1.222 M.'},
    {id:'paraderos',n:'Paraderos Tipo 1 y 2',s:'Llave en mano · radicar 7 jul',c:ESTADO.estructuracion.c,k:[],t:'10 paraderos Tipo I y 71 Tipo II con MUPI, en estructuración. Nación $8.669 M.'},
    {id:'patios',n:'Patiotalleres',s:'4 predios · se requieren 5',c:ESTADO.estructuracion.c,k:[],t:'Predio 1 ($15.075 M, Municipio) y Predio 2 ($15.061 M, Nación) en estructuración. El estudio de sep. 2025 indica 5 patiotalleres; hay 4 puntos en el KMZ.'},
    {id:'jordan',n:'Av. Jordán Paralela',s:'Sin recursos · en revisión',c:ESTADO.bloqueado.c,k:[],t:'Por el tope presupuestal del componente se priorizaron los demás corredores; en revisión la redistribución. Sin traza georreferenciada.'}];
  $('#ml',root).innerHTML=F.map(f=>`<button data-id="${f.id}" style="--c:${f.c}"><span>${f.n}<small>${f.s}</small></span></button>`).join('');
  const M=[], flip=c=>[c[1],c[0]], R=parseFloat(getComputedStyle(document.documentElement).fontSize);
  const map=new maplibregl.Map({container:'mapa',center:[-75.205,4.437],zoom:12.2,attributionControl:{compact:true},
    style:{version:8,sources:{base:{type:'raster',tileSize:256,maxzoom:19,attribution:'© OpenStreetMap contributors',tiles:['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png','https://b.tile.openstreetmap.org/{z}/{x}/{y}.png','https://c.tile.openstreetmap.org/{z}/{x}/{y}.png']}},
      layers:[{id:'fondo',type:'background',paint:{'background-color':'#E2E8F1'}},{id:'base',type:'raster',source:'base',paint:{'raster-saturation':-0.92,'raster-contrast':-0.05,'raster-brightness-min':.25,'raster-opacity':.95}}]}});
  window.__mapa=map; limpiar.push(()=>{ try{ map.remove(); }catch(e){} });
  const lugar=f=>{ $$('#ml button',root).forEach(b=>b.classList.toggle('sel',b.dataset.id===f.id)); $('#md',root).innerHTML=`<b>${f.n}</b> · ${f.s}<br>${f.t}`;
    let pts=[]; f.k.forEach(k=>pts.push(...CORREDORES[k].coords)); if(f.id==='paraderos') pts=PARADEROS_12; if(f.id==='patios') pts=PATIOS.map(p=>p.coord);
    if(pts.length){ const b=new maplibregl.LngLatBounds(); pts.forEach(c=>b.extend(flip(c))); map.fitBounds(b,{padding:{left:37*R,top:4*R,right:4*R,bottom:11*R},maxZoom:15.4,duration:1500}); } };
  $$('#ml button',root).forEach(b=>b.onclick=()=>lugar(F.find(f=>f.id===b.dataset.id)));
  map.on('load',()=>{
    F.forEach(f=>f.k.forEach(k=>{ map.addSource('c-'+k,{type:'geojson',data:{type:'Feature',properties:{},geometry:{type:'LineString',coordinates:CORREDORES[k].coords.map(flip)}}});
      if(f.id!=='ciclo') map.addLayer({id:'cs-'+k,type:'line',source:'c-'+k,layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#fff','line-width':12}});
      map.addLayer({id:'c-'+k,type:'line',source:'c-'+k,layout:{'line-cap':'round','line-join':'round'},paint:f.id==='ciclo'?{'line-color':f.c,'line-width':5,'line-dasharray':[1.4,1.4]}:{'line-color':f.c,'line-width':7}});
      map.on('click','c-'+k,()=>lugar(f)); map.on('mouseenter','c-'+k,()=>map.getCanvas().style.cursor='pointer'); map.on('mouseleave','c-'+k,()=>map.getCanvas().style.cursor=''); }));
    PARADEROS_12.forEach(c=>{ const el=document.createElement('div'); el.className='mk-p'; M.push(['p1',new maplibregl.Marker({element:el}).setLngLat(flip(c)).addTo(map)]); });
    PATIOS.forEach(p=>{ const el=document.createElement('div'); el.className='mk-pa'; el.innerHTML=`<i>${ico('i-factory')}</i>`; el.title=p.nombre; el.onclick=()=>lugar(F.find(f=>f.id==='patios')); M.push(['pa',new maplibregl.Marker({element:el}).setLngLat(flip(p.coord)).addTo(map)]); });
    const bb=new maplibregl.LngLatBounds(); Object.values(CORREDORES).forEach(c=>c.coords.forEach(p=>bb.extend(flip(p)))); PATIOS.forEach(p=>bb.extend(flip(p.coord)));
    map.fitBounds(bb,{padding:{left:37*R,top:4*R,right:4*R,bottom:11*R},duration:0}); });
  const tog=(id,tipo)=>$('#'+id,root).onclick=()=>{ const b=$('#'+id,root); b.classList.toggle('on'); M.filter(m=>m[0]===tipo).forEach(m=>b.classList.contains('on')?m[1].addTo(map):m[1].remove()); };
  tog('tp1','p1'); tog('tpa','pa');
};

/* =====================================================================
   9 · Tecnología — red arrastrable + cronograma
   ===================================================================== */
VIS.tecno = root => {
  const ND=[{id:'cc',n:'Centro de control',s:'Lote 6 · compra 2027',x:500,y:150,w:230,est:'estructuracion',g:'Centro de control'},
    {id:'rec',n:'Recaudo centralizado',s:'Estructurar en 2026',x:175,y:80,w:250,est:'estructuracion',g:'Recaudo y control de flota'},
    {id:'flo',n:'Gestión y control de flota',s:'Recursos desde 2027',x:185,y:225,w:290,est:'estructuracion',g:'Recaudo y control de flota'},
    {id:'usu',n:'Información al usuario',s:'En formulación',x:830,y:80,w:230,est:'estructuracion',g:'Información al usuario'},
    {id:'sem',n:'Semáforos',s:'Fase I al 93,6 %',x:830,y:225,w:200,est:'ejecucion',g:'Semaforización'},
    {id:'fet',n:'FET y modelo financiero',s:'Modelo actualizado',x:500,y:52,w:250,est:'estructuracion',g:null}];
  const LK=[['cc','rec'],['cc','flo'],['cc','usu'],['cc','sem'],['cc','fet'],['fet','rec']];
  root.innerHTML=`<div class="tec"><div class="tec-n rv"><div class="tec-b"><button class="btn sol" id="si">Simular integración</button><button class="btn borde" id="re" style="display:none">Restablecer</button></div><svg viewBox="0 0 1000 285" id="sv"></svg><div class="tec-s" id="tx">Azul: en estructuración · Ámbar: en ejecución · Verde: integrado</div></div><div class="tec-g rv" id="gh"></div></div>`;
  const sv=$('#sv',root), N={}; ND.forEach(n=>N[n.id]={...n,ok:false});
  const col=n=>n.ok?'#3AA56D':ESTADO[n.est].c;
  sv.innerHTML=LK.map((l,i)=>`<line class="lk" id="lk${i}"/>`).join('')+LK.map((l,i)=>`<circle class="pk" id="pk${i}" r="7" style="display:none"/>`).join('')+
    ND.map(n=>`<g class="nd" data-id="${n.id}"><rect id="r-${n.id}" x="${-n.w/2}" y="-33" width="${n.w}" height="66" rx="6" fill="${col(N[n.id])}"/><text y="-4" font-size="19" style="fill:${n.est==='ejecucion'?'#1F3C78':'#fff'}">${n.n}</text><text class="s" y="20" style="fill:${n.est==='ejecucion'?'#1F3C78':'#fff'}">${n.s}</text></g>`).join('');
  const pos=()=>{ ND.forEach(n=>{ const o=N[n.id]; $(`.nd[data-id=${n.id}]`,sv).setAttribute('transform',`translate(${o.x},${o.y})`); });
    LK.forEach((l,i)=>{ const a=N[l[0]], b=N[l[1]], e=$('#lk'+i,sv); e.setAttribute('x1',a.x); e.setAttribute('y1',a.y); e.setAttribute('x2',b.x); e.setAttribute('y2',b.y); e.classList.toggle('ok',a.ok&&b.ok); }); }; pos();
  $$('.nd',sv).forEach(g=>{ const o=N[g.dataset.id]; let off=[0,0];
    arrastrar(g,{ inicio:e=>{ const p=svgPt(sv,e); off=[p.x-o.x,p.y-o.y]; }, mueve:e=>{ const p=svgPt(sv,e); o.x=clamp(p.x-off[0],120,880); o.y=clamp(p.y-off[1],40,250); pos(); } });
    g.onmouseenter=e=>{ const r=o.g&&GANTT.find(x=>x.n===o.g); if(r) verTip(`<b>${r.n}</b><br>Plan: ${mesTxt(r.a)} a ${mesTxt(r.b)}<br>${r.nota}`,e); }; g.onmouseleave=ocultaTip; });
  let raf; const loop=t=>{ LK.forEach((l,i)=>{ const a=N[l[0]], b=N[l[1]], c=$('#pk'+i,sv), on=a.ok&&b.ok; c.style.display=on?'':'none'; if(on){ const p=((t/1400)+i*.17)%1; c.setAttribute('cx',a.x+(b.x-a.x)*p); c.setAttribute('cy',a.y+(b.y-a.y)*p); } }); raf=requestAnimationFrame(loop); };
  raf=requestAnimationFrame(loop); limpiar.push(()=>cancelAnimationFrame(raf));
  const pinta=()=>ND.forEach(n=>$('#r-'+n.id,sv).setAttribute('fill',col(N[n.id]))), tms=[]; limpiar.push(()=>tms.forEach(clearTimeout));
  $('#si',root).onclick=()=>{ $('#si',root).style.display='none'; ['sem','rec','flo','usu','cc','fet'].forEach((id,i)=>tms.push(setTimeout(()=>{ N[id].ok=true; pinta(); pos();
    if(i===5){ $('#tx',root).innerHTML='<b style="color:#3AA56D">Paquete integrado</b>: recaudo, control de flota, información, control, semáforos y FET.'; $('#re',root).style.display=''; } },i*700))); };
  $('#re',root).onclick=()=>{ tms.forEach(clearTimeout); ND.forEach(n=>N[n.id].ok=false); pinta(); pos(); $('#re',root).style.display='none'; $('#si',root).style.display=''; $("#tx",root).textContent="Azul: en estructuración · Ámbar: en ejecución · Verde: integrado"; };
  gantt($('#gh',root),GANTT.filter(g=>g.g==='Tecnología'),{fecha:CORTE_ACT.fecha});
};
