/* =====================================================================
   VISUALES 1/2 — portada · panorama · hoja de ruta · gracias · FET · concertación · semáforos
   Cada visual anima e interactúa con lo que hace el usuario (arrastrar, tocar, cambiar).
   ===================================================================== */
const estilo = css => document.head.insertAdjacentHTML('beforeend','<style>'+css+'</style>');
const CATN = { critica:0, moderada:1, leve:2 };
const catDe = n => CAT[ALERTAS[n-1].cat].c;

estilo(`
/* ---------- portada ---------- */
.pt{position:absolute; inset:0}
.pt-logo{position:absolute; left:6rem; top:1rem; height:31rem; filter:drop-shadow(0 1rem 2.4rem rgba(0,0,0,.35)); animation:flota 6s ease-in-out infinite}
@keyframes flota{50%{transform:translateY(-.7rem)}}
.pt-txt{position:absolute; left:41rem; top:3.2rem; width:72rem}
.pt-txt small{display:block; font-size:.95rem; letter-spacing:.3em; text-transform:uppercase; color:var(--gold); font-weight:800}
.pt-txt h1{font-size:4.6rem; line-height:1.02; font-weight:900; letter-spacing:-.03em; margin:.8rem 0 1rem}
.pt-txt h1 span{color:var(--gold)}
.pt-txt p{font-size:1.4rem; line-height:1.4; color:#D5E0FA; max-width:56rem}
.pt-stats{display:flex; gap:2.6rem; margin:1.6rem 0 1.8rem}
.pt-stats .kpi b{font-size:3.2rem}
.pt-btns{display:flex; gap:1rem}
.pt-hint{margin-top:1.1rem; font-size:.88rem; color:var(--mut)}
.pt-staff{position:absolute; left:2.5rem; bottom:.4rem; width:115rem; height:20.1rem; overflow:visible}
.pt-staff .lin{stroke:rgba(255,255,255,.28); stroke-width:1.6}
.pt-staff .nota{cursor:pointer; transform-box:fill-box; transform-origin:center; animation:pop 22s linear infinite}
.pt-staff .nota:hover ellipse{filter:brightness(1.25)}
.pt-staff .nota text.n{font-size:12px; font-weight:900; fill:#fff}
.pt-staff .nota text.l{font-size:14px; font-weight:700; fill:#A9B8E0; text-anchor:middle; transition:.2s}
.pt-staff .nota:hover text.l{fill:#fff; font-size:16px}
@keyframes pop{0%{transform:scale(1.7)} 3.5%{transform:scale(1)} 100%{transform:scale(1)}}
.pt-bus{position:absolute; bottom:6.15rem; width:5.6rem; height:3rem; color:var(--verde); animation:corre 22s linear infinite; pointer-events:none}
@keyframes corre{from{left:-6rem} to{left:126rem}}

/* ---------- panorama ---------- */
.pano{display:grid !important; grid-template-columns:63rem minmax(0,1fr); gap:2rem}
.filtros{display:flex; gap:.6rem; margin:1rem 0 .9rem; flex-wrap:wrap}
.tabla{width:100%; border-collapse:collapse; font-size:1.05rem}
.tabla th{position:sticky; top:0; text-align:left; padding:.5rem .7rem; font-size:.72rem; letter-spacing:.14em; text-transform:uppercase; color:var(--gold); border-bottom:1px solid var(--line); cursor:pointer; user-select:none; white-space:nowrap}
.tabla th:hover{color:#fff}
.tabla td{padding:.72rem .7rem; border-bottom:1px solid rgba(255,255,255,.08); line-height:1.25; transition:.2s}
.tabla tbody tr{cursor:pointer; transition:.2s; opacity:1}
.tabla tbody tr:hover, .tabla tbody tr.hl{background:rgba(255,255,255,.11)}
.tabla tbody tr.dim{opacity:.22}
.tabla td.n{font-weight:900; font-size:1.05rem; color:var(--c); width:2.6rem}
.tabla .cat{display:inline-flex; align-items:center; gap:.4rem; font-weight:800; font-size:.8rem; color:var(--c); white-space:nowrap}
.tabla .cat i{width:.62rem; height:.62rem; border-radius:50%; background:var(--c); box-shadow:0 0 .7rem var(--c)}
.pano-r{padding:1.3rem 1.6rem; display:flex; flex-direction:column; gap:1rem}
.pano-top{display:flex; align-items:center; gap:2rem}
.donut{width:11rem; height:11rem; flex:none}
.donut circle{fill:none; stroke-width:15; transition:stroke-dasharray 1.2s cubic-bezier(.2,.8,.2,1)}
.donut text{fill:#fff; text-anchor:middle; font-weight:900}
.leyenda{display:flex; flex-direction:column; gap:.5rem}
.leyenda div{display:flex; align-items:center; gap:.7rem; font-size:1rem}
.leyenda b{font-size:1.5rem; min-width:1.6rem}
.leyenda i{width:.8rem; height:.8rem; border-radius:50%}
.mx{flex:1; display:grid; grid-template-columns:9.5rem repeat(3,minmax(0,1fr)); grid-auto-rows:minmax(0,1fr); gap:.35rem; min-height:0}
.mx .h{font-size:.74rem; letter-spacing:.14em; text-transform:uppercase; color:var(--gold); font-weight:800; display:flex; align-items:end; justify-content:center; padding-bottom:.3rem}
.mx .r{font-size:.9rem; font-weight:700; color:var(--mut); display:flex; align-items:center}
.mx .c{background:rgba(255,255,255,.04); border-radius:.7rem; display:flex; align-items:center; justify-content:center; gap:.5rem; position:relative}
.bub{position:relative; width:3.3rem; height:3.3rem; border-radius:50%; background:var(--c); color:#fff; font-weight:900; font-size:1.3rem;
  display:flex; align-items:center; justify-content:center; box-shadow:0 0 1.4rem color-mix(in srgb,var(--c) 60%,transparent); transition:.25s}
.bub:hover, .bub.hl{transform:scale(1.22); z-index:2}
.bub.dim{opacity:.18; transform:scale(.85)}
.bub.crit:after{content:""; position:absolute; inset:-.35rem; border-radius:50%; border:.16rem solid var(--c); animation:latido 1.9s ease-out infinite}
@keyframes latido{from{transform:scale(.85); opacity:.9} to{transform:scale(1.5); opacity:0}}
.bub .nueva{position:absolute; top:-.85rem; left:50%; transform:translateX(-50%); background:var(--gold); color:#1B1200; font-size:.58rem; letter-spacing:.06em; padding:.08rem .42rem; border-radius:99rem; font-weight:900}

/* ---------- hoja de ruta ---------- */
.rut{position:absolute; inset:0; padding:.4rem 2.5rem 0; display:flex; flex-direction:column; gap:.9rem}
.rut-h{display:flex; align-items:flex-end; gap:2rem}
.rut-h h1{font-size:2.1rem; font-weight:900; letter-spacing:-.02em; line-height:1.05}
.rut-h p{font-size:1.12rem; color:#D5E0FA; margin-top:.35rem; max-width:66rem}
.rut-ctl{margin-left:auto; display:flex; gap:.5rem; align-items:center; flex-wrap:wrap; justify-content:flex-end}
.rut-al{display:flex; gap:.4rem; align-items:center}
.rut-al .chip{padding:.28rem .65rem; min-width:2.3rem; justify-content:center; border-color:var(--c); color:var(--c)}
.rut-al .chip.on{background:var(--c); color:#fff; border-color:var(--c)}
.tl-wrap{position:relative; flex:1; min-height:0; padding:0 1rem}
.tl-ax{position:absolute; left:1rem; right:1rem; top:50%; height:.34rem; border-radius:9px; background:linear-gradient(90deg,#4C8DFF,#E5484D,#1FBF5B,#F0A800); opacity:.85}
.tl-mes{position:absolute; top:calc(50% + .5rem); font-size:.72rem; color:var(--mut); font-weight:700; transform:translateX(-50%); letter-spacing:.06em; text-transform:uppercase}
.tl-mes:before{content:""; position:absolute; left:50%; top:-.5rem; height:.5rem; width:1px; background:rgba(255,255,255,.35)}
.tl-pin{position:absolute; width:1.05rem; height:1.05rem; margin:-.36rem 0 0 -.52rem; border-radius:50%; background:var(--c); border:.16rem solid #fff; box-shadow:0 0 1rem var(--c); z-index:3}
.tl-brk{position:absolute; top:calc(50% - 1.2rem); transform:translateX(-50%); font-size:1.6rem; color:var(--mut); letter-spacing:.1em; font-weight:900}
.tl-stem{position:absolute; width:1px; background:rgba(255,255,255,.35); z-index:1}
.tl-card{position:absolute; width:11.4rem; padding:.45rem .65rem .5rem; border-radius:.7rem; background:rgba(8,26,84,.92); border:1px solid var(--line); border-left:.28rem solid var(--c);
  font-size:.78rem; line-height:1.28; cursor:pointer; transition:.25s; z-index:2}
.tl-card b{display:flex; align-items:center; gap:.4rem; font-size:.74rem; color:var(--c); margin-bottom:.15rem; letter-spacing:.04em}
.tl-card:hover, .tl-card.sel{background:#0F2C86; transform:translateY(-.15rem); box-shadow:0 .8rem 2rem rgba(0,0,0,.4); z-index:6}
.tl-card.dim, .tl-pin.dim, .tl-stem.dim{opacity:.16}
.tl-card.vence{border-color:var(--rojo); border-left-color:var(--rojo); border-style:dashed}
.tl-card .ok{margin-left:auto; font-size:.66rem; padding:.05rem .4rem; border-radius:99rem; background:var(--verde); color:#04210F; font-weight:900}
.tl-card .vc{margin-left:auto; font-size:.66rem; padding:.05rem .4rem; border-radius:99rem; background:var(--rojo); color:#fff; font-weight:900}
.tl-play{position:absolute; top:0; bottom:0; width:0; z-index:1}
.tl-play:before{content:""; position:absolute; left:-1px; top:1.9rem; bottom:0; width:2px; background:#fff; opacity:.85}
.tl-play .mango{position:absolute; left:0; top:0; transform:translateX(-50%); background:#fff; color:var(--navy); font-weight:900; font-size:.82rem; padding:.28rem .8rem; border-radius:99rem; cursor:ew-resize; white-space:nowrap; box-shadow:0 .4rem 1.2rem rgba(0,0,0,.4)}
.tl-play .mango:after{content:" ⇔"}
.tl-play svg{position:absolute; left:0; top:calc(50% - 2.65rem); width:4.4rem; height:2.4rem; transform:translateX(-50%); color:var(--verde); pointer-events:none}
.rut-b{display:grid; grid-template-columns:minmax(0,.75fr) minmax(0,1.6fr); gap:1.2rem; height:9.6rem}
.rut-b .card{padding:.9rem 1.2rem}
.rut-b h4{font-size:.74rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:.5rem}
.sf{display:flex; flex-wrap:wrap; gap:.4rem}
.sf span{font-size:.82rem; padding:.28rem .7rem; border-radius:.6rem; background:var(--glass2); border:1px solid var(--line); cursor:pointer; transition:.2s}
.sf span:hover{background:rgba(255,255,255,.2)}
.sf span b{color:var(--c); margin-right:.3rem}
.det-h{font-size:1.15rem; font-weight:800; line-height:1.25}
.det-s{font-size:.9rem; color:var(--mut); margin-top:.3rem}

/* ---------- gracias ---------- */
.fin{position:absolute; inset:0; overflow:hidden}
.fin-t{position:absolute; left:8rem; top:12rem}
.fin-t small{display:block; font-size:3.4rem; font-weight:900; letter-spacing:-.02em; text-transform:uppercase}
.fin-t .bar{display:inline-block; margin-top:.3rem; background:#FDB913; color:#0B1220; font-size:8rem; font-weight:900; letter-spacing:-.03em; padding:0 2.6rem 0 1.2rem; line-height:1.05; text-transform:uppercase;
  clip-path:inset(0 100% 0 0); animation:barre 1s .3s cubic-bezier(.2,.8,.2,1) forwards}
@keyframes barre{to{clip-path:inset(0 0 0 0)}}
.fin-bus{position:absolute; bottom:5rem; width:46rem; height:24.5rem; color:#1FBF5B; animation:llega 2.2s cubic-bezier(.15,.7,.2,1) forwards; right:-50rem}
@keyframes llega{to{right:5rem}}
.fin-bus.par{animation:llega 2.2s cubic-bezier(.15,.7,.2,1) forwards, bob 1.6s 2.3s ease-in-out infinite}
.fin-road{position:absolute; left:0; right:0; bottom:4.6rem; height:.5rem; background:repeating-linear-gradient(90deg,#fff 0 3rem,transparent 3rem 6rem); opacity:.35; animation:ruta 1s linear infinite}
@keyframes ruta{to{background-position:-6rem 0}}
.fin-b{position:absolute; left:8rem; top:34rem; display:flex; gap:1rem}
.fin-logos{position:absolute; left:8rem; bottom:.5rem; display:flex; gap:1.4rem; align-items:center}

/* ---------- FET ---------- */
.fet{display:flex; flex-direction:column; gap:1rem; height:100%}
.fet-top{display:flex; align-items:center; gap:1rem; font-size:.9rem}
.fet-body{display:grid; grid-template-columns:23rem minmax(0,1fr); gap:1.6rem; flex:1; min-height:0}
.fet-tank{position:relative}
.fet-tank svg{width:100%; height:100%}
.fet-tank .ola1{animation:ola 4.5s linear infinite} .fet-tank .ola2{animation:ola 7s linear infinite reverse}
@keyframes ola{to{transform:translateX(-190px)}}
.fet-tank #agua{transition:transform 1s cubic-bezier(.2,.8,.2,1)}
.fet-tank .mon{fill:#FFD56B; animation:cae 1.6s ease-in infinite}
@keyframes cae{0%{transform:translateY(-30px); opacity:0} 15%{opacity:1} 85%{opacity:1} 100%{transform:translateY(120px); opacity:0}}
.fet-cob{position:absolute; left:0; right:0; top:44%; text-align:center; pointer-events:none}
.fet-cob b{font-size:3.4rem; font-weight:900; text-shadow:0 .2rem 1rem rgba(0,0,0,.6)}
.fet-cob small{display:block; font-size:.72rem; letter-spacing:.16em; text-transform:uppercase; color:#DDE7FF; text-shadow:0 .1rem .5rem rgba(0,0,0,.7)}
.fet-ctl{display:flex; flex-direction:column; gap:.55rem; min-height:0}
.sl span{display:flex; justify-content:space-between; font-size:.92rem; color:var(--mut); font-weight:600}
.sl span b{color:#fff; font-size:1.02rem}
.fet-kp{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:.8rem; margin-top:.3rem}
.fet-kp .kpi{padding:.7rem .9rem; border-radius:.9rem; background:var(--glass2); border:1px solid var(--line)}
.fet-kp .kpi b{font-size:1.55rem}
.fet-src{display:flex; flex-wrap:wrap; gap:.4rem; align-items:center; font-size:.82rem; color:var(--mut)}
.fet-src span.c{padding:.22rem .7rem; border-radius:99rem; border:1px dashed var(--line); color:#fff}
.fet-ruta{padding:1rem 1.2rem .9rem; border-radius:1rem; background:var(--glass2); border:1px solid var(--line)}
.fet-ruta h4{font-size:.74rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:.7rem}
.pasos{position:relative; display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:.6rem}
.pasos:before{content:""; position:absolute; left:10%; right:10%; top:1.05rem; height:.26rem; background:rgba(255,255,255,.18); border-radius:9px}
.pasos:after{content:""; position:absolute; left:10%; top:1.05rem; height:.26rem; width:calc(var(--p,0)*16%); background:var(--gold); border-radius:9px; transition:width .7s cubic-bezier(.5,0,.2,1)}
.paso{position:relative; z-index:1; text-align:center; font-size:.8rem; line-height:1.25; color:var(--mut); padding:0 .3rem; transition:.3s}
.paso span{display:flex; margin:0 auto .45rem; width:2.3rem; height:2.3rem; border-radius:50%; align-items:center; justify-content:center; font-weight:900; background:#0B1E55; border:.16rem solid var(--line); color:#fff; transition:.3s}
.paso.pas span{background:var(--gold); border-color:var(--gold); color:#1B1200}
.paso.act{color:#fff; font-weight:700}
.paso.act span{background:#fff; color:var(--navy); border-color:#fff; transform:scale(1.18); box-shadow:0 0 1.3rem rgba(255,255,255,.55)}
.paso-d{margin-top:.75rem; font-size:.95rem; color:#fff; min-height:2.6rem; padding:.6rem .9rem; border-radius:.7rem; background:rgba(0,0,0,.22)}

/* ---------- concertación ---------- */
.con{display:grid; grid-template-columns:minmax(0,1fr) 15rem; grid-template-rows:minmax(0,1fr) minmax(0,1fr) 8.6rem; gap:1.1rem; height:100%}
.con-lane{display:flex; flex-direction:column; background:var(--glass); border:1px solid var(--line); border-radius:1.1rem; padding:.8rem 2rem 1rem; position:relative}
.con-lane h4{font-size:.85rem; letter-spacing:.14em; text-transform:uppercase; color:var(--c); font-weight:900; display:flex; align-items:center; gap:.5rem}
.con-lane h4:before{content:""; width:.7rem; height:.7rem; border-radius:50%; background:var(--c)}
.con-tr{position:relative; flex:1; padding-top:3.4rem; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1rem}
.con-tr:before{content:""; position:absolute; left:0; right:0; top:2.7rem; height:.32rem; border-radius:9px; background:color-mix(in srgb,var(--c) 40%,transparent)}
.con-tr:after{content:""; position:absolute; left:0; top:2.7rem; height:.32rem; border-radius:9px; background:var(--c); width:var(--w,0%); transition:width .8s cubic-bezier(.5,0,.2,1)}
.con-st{position:relative; padding:.65rem .8rem; border-radius:.8rem; background:rgba(255,255,255,.07); border:1px solid var(--line); cursor:pointer; transition:.25s; min-height:0; display:flex; flex-direction:column; justify-content:center}
.con-st:hover{background:rgba(255,255,255,.14); transform:translateY(-2px)}
.con-st b{display:flex; align-items:center; gap:.5rem; font-size:1.12rem; line-height:1.15}
.con-st b em{flex:none; font-style:normal; width:1.5rem; height:1.5rem; border-radius:50%; background:var(--c); color:#fff; display:flex; align-items:center; justify-content:center; font-size:.8rem}
.con-st p{font-size:.95rem; color:var(--mut); margin-top:.35rem; line-height:1.3}
.con-st.hecho{border-color:var(--c)} .con-st.hecho b em:before{content:"✓"} .con-st.hecho b em{font-size:0} .con-st.hecho b em:before{font-size:.85rem}
.con-st.act{background:color-mix(in srgb,var(--c) 26%,rgba(255,255,255,.06)); border-color:var(--c); box-shadow:0 0 1.6rem color-mix(in srgb,var(--c) 40%,transparent)}
.con-bus{position:absolute; top:.35rem; width:4.6rem; height:2.4rem; margin-left:-2.3rem; color:var(--c); cursor:grab; transition:left .8s cubic-bezier(.5,0,.2,1); z-index:3; touch-action:none; filter:drop-shadow(0 .3rem .5rem rgba(0,0,0,.4))}
.con-bus.arr{cursor:grabbing; transition:none}
.con-fin{grid-column:2; grid-row:1/3; border-radius:1.1rem; padding:1.1rem 1rem; background:linear-gradient(160deg,#12308F,#0A1F5C); border:1px solid var(--line); text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:.7rem; position:relative; transition:.5s; overflow:hidden}
.con-fin .gl{width:4rem; height:4rem; border-radius:50%; background:rgba(255,255,255,.1); display:flex; align-items:center; justify-content:center; font-size:2rem; transition:.5s}
.con-fin b{font-size:1.2rem; line-height:1.15}
.con-fin p{font-size:.8rem; color:var(--mut); line-height:1.3}
.con-fin.ok{background:linear-gradient(160deg,#118a45,#0A5C2C); box-shadow:0 0 3rem rgba(31,191,91,.5)}
.con-fin.ok .gl{background:#fff; transform:scale(1.15) rotate(-6deg)}
.con-fin .sello{position:absolute; right:-.4rem; top:1.2rem; padding:.2rem .8rem; border:.2rem solid #fff; color:#fff; font-weight:900; letter-spacing:.14em; font-size:.85rem; transform:rotate(14deg) scale(3); opacity:0; border-radius:.3rem}
.con-fin.ok .sello{animation:sello .5s .1s cubic-bezier(.2,1.4,.4,1) forwards}
@keyframes sello{to{transform:rotate(14deg) scale(1); opacity:1}}
.con-det{grid-column:1/3; padding:1rem 1.3rem; border-radius:1rem; background:var(--glass2); border:1px solid var(--line); font-size:1rem; display:flex; flex-direction:column; gap:.4rem; justify-content:center}
.con-det h5{font-size:1.15rem}
.con-det small{color:var(--gold); letter-spacing:.16em; text-transform:uppercase; font-weight:800; font-size:.72rem}

/* ---------- semáforos ---------- */
.sem{display:grid; grid-template-columns:12rem minmax(0,1fr); grid-template-rows:auto minmax(0,1fr) auto; gap:1.1rem 1.6rem; height:100%}
.sem-a{grid-row:1/3; display:flex; flex-direction:column; align-items:center; gap:.7rem}
.tl{width:8rem; padding:1.1rem .9rem; border-radius:2.6rem; background:#0B1220; border:.28rem solid #26324f; display:flex; flex-direction:column; gap:.9rem; cursor:pointer; box-shadow:0 1rem 2.4rem rgba(0,0,0,.45)}
.tl i{display:block; width:5.6rem; height:5.6rem; border-radius:50%; background:#1a2440; transition:.25s}
.tl i.r.on{background:#FF4D52; box-shadow:0 0 2.6rem #FF4D52} .tl i.a.on{background:#FFC324; box-shadow:0 0 2.6rem #FFC324} .tl i.v.on{background:#2BE07A; box-shadow:0 0 2.6rem #2BE07A}
.sem-a small{font-size:.8rem; color:var(--mut); text-align:center; line-height:1.3}
.sem-a .est{font-weight:900; font-size:.95rem; color:#fff; text-align:center}
.bars{display:flex; flex-direction:column; gap:.7rem}
.brow{display:grid; grid-template-columns:11rem minmax(0,1fr) 5.4rem; align-items:center; gap:.9rem; font-size:.95rem}
.brow .b{height:1.5rem; border-radius:.8rem; background:rgba(255,255,255,.12); overflow:hidden}
.brow .b i{display:block; height:100%; width:0; border-radius:.8rem; transition:width 1.3s cubic-bezier(.2,.8,.2,1)}
.brow strong{font-size:1.4rem; text-align:right; font-weight:900}
.brecha{align-self:flex-start; margin-left:11.9rem; font-size:.9rem; font-weight:800; color:#FFB4B6; background:rgba(229,72,77,.18); border:1px dashed var(--rojo); padding:.2rem .8rem; border-radius:.5rem}
.sem-k{display:flex; gap:2.6rem; margin-top:.3rem}
.sem-k .kpi b{font-size:2.2rem} .sem-k .kpi b em{font-style:normal; font-size:1.3rem; color:var(--mut); font-weight:700}
.dots{display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); gap:.7rem; margin:.9rem 0}
.dt{aspect-ratio:1; border-radius:50%; background:#3A4770; border:2px solid rgba(255,255,255,.14); transition:.35s; cursor:pointer; position:relative}
.dt.pend{background:#2A3560}
.dt.inst{background:var(--ambar); border-color:#FFDD8A; box-shadow:0 0 .8rem rgba(240,168,0,.5)}
.dt.op{background:#2BE07A; border-color:#A8F5C8; box-shadow:0 0 1rem rgba(43,224,122,.6); animation:parp 2.4s ease-in-out infinite}
@keyframes parp{50%{transform:scale(1.12)}}
.dt.dim{opacity:.18}
.dt:hover{transform:scale(1.3); z-index:2}
.ctls{display:flex; flex-wrap:wrap; gap:.3rem; margin-top:.4rem; max-width:19rem}
.ctls i{width:1.1rem; height:1.1rem; border-radius:.35rem; background:#2A3560; border:1px solid rgba(255,255,255,.2); transition:.3s}
.ctls i.on{background:var(--azul); border-color:#B9D2FF}
.sem-d{grid-column:1/3; display:flex; align-items:center; gap:1.4rem; padding:.85rem 1.2rem; border-radius:1rem; background:var(--glass2); border:1px solid var(--line); flex-wrap:wrap}
.sem-d .fin{font-size:.95rem} .sem-d .fin b{font-size:1.15rem}
.causas{display:flex; flex-wrap:wrap; gap:.4rem}
.causas span{font-size:.78rem; padding:.22rem .65rem; border-radius:99rem; border:1px solid var(--line); background:rgba(255,255,255,.06); cursor:default}
`);

/* =====================================================================
   PORTADA
   ===================================================================== */
VIS.portada = root => {
  root.innerHTML = `<div class="pt">
    <img class="pt-logo" src="img/logo-full.png" alt="TransMusical SETP">
    <div class="pt-txt">
      <small class="rv">Alertas identificadas por la UMUS</small>
      <h1 class="rv">Seguimiento general de <span>alertas</span></h1>
      <p class="rv">Dónde estamos, qué decidimos y con qué fecha se cierra cada una. Nueve alertas, una posición del SETP para cada una.</p>
      <div class="pt-stats rv">
        <div class="kpi"><b data-count="${ALERTAS.length}">0</b><small>Alertas</small></div>
        <div class="kpi" style="color:var(--rojo)"><b data-count="${ALERTAS.filter(a=>a.cat==='critica').length}">0</b><small style="color:var(--mut)">Críticas</small></div>
        <div class="kpi" style="color:var(--ambar)"><b data-count="${ALERTAS.filter(a=>a.cat==='moderada').length}">0</b><small style="color:var(--mut)">Moderada</small></div>
        <div class="kpi" style="color:var(--verde)"><b data-count="${ALERTAS.filter(a=>a.cat==='leve').length}">0</b><small style="color:var(--mut)">Leves</small></div>
      </div>
      <div class="pt-btns rv"><button class="btn" id="ini">Iniciar recorrido ▸</button><button class="btn sec" id="pan">Ver panorama</button></div>
      <div class="pt-hint rv">← → para navegar · toca una nota del pentagrama para saltar a esa alerta · F pantalla completa</div>
    </div>
    <svg class="pt-staff" viewBox="0 0 1200 210">${[70,90,110,130,150].map(y=>`<line class="lin" x1="0" x2="1200" y1="${y}" y2="${y}"/>`).join('')}
      ${ALERTAS.map((a,i)=>{
        const x=95+i*126, y=[150,130,110,90,70,90,110,130,150][i], c=CAT[a.cat].c, arr=y>=110;
        const f=(2.5+x/1200*115+6)/132; const d=(f*22).toFixed(2);
        return `<g class="nota" data-n="${a.n}" style="animation-delay:${d}s"><title>${a.n}. ${a.t}</title>
          <line x1="${arr?x+11:x-11}" x2="${arr?x+11:x-11}" y1="${y}" y2="${arr?y-50:y+50}" stroke="${c}" stroke-width="3.4" stroke-linecap="round"/>
          <ellipse cx="${x}" cy="${y}" rx="14" ry="10" fill="${c}" transform="rotate(-20 ${x} ${y})"/>
          <text class="n" x="${x}" y="${y+4}" text-anchor="middle">${a.n}</text>
          <text class="l" x="${x}" y="200">${a.corto}</text></g>`; }).join('')}
    </svg>
    <svg class="pt-bus"><use href="#i-bus"/></svg>
  </div>`;
  $('#ini',root).onclick = () => ir(idxTipo('panorama'));
  $('#pan',root).onclick = () => ir(idxTipo('panorama'));
  $$('.nota',root).forEach(g => g.onclick = () => ir(idxAlerta(+g.dataset.n)));
};

/* =====================================================================
   PANORAMA — tabla oficial (ordenable) + matriz componente × período
   ===================================================================== */
VIS.panorama = root => {
  const cnt = {critica:0, moderada:0, leve:0}; ALERTAS.forEach(a=>cnt[a.cat]++);
  let filtro = 'todas', orden = {k:'n', d:1};
  root.classList.add('pano');
  root.innerHTML = `
    <aside class="izq" style="--cat:#F0A800">
      <div class="tags rv"><span class="tag num" style="background:#F0A800;color:#1B1200">Panorama</span><span class="tag">Corte ${CORTE.txt}</span></div>
      <h1 class="rv">${ALERTAS.length} alertas abiertas. Una posición para cada una.</h1>
      <p class="msg rv">${cnt.critica} críticas, ${cnt.moderada} moderada y ${cnt.leve} leves. Ninguna queda sin ruta: cada una tiene postura del SETP y una fecha de cierre o de decisión.</p>
      <div class="filtros rv" id="fil"></div>
      <table class="tabla rv"><thead><tr><th data-k="n">No.</th><th data-k="t">Alerta identificada</th><th data-k="per">Período</th><th data-k="comp">Componente</th><th data-k="cat">Categoría</th></tr></thead><tbody id="tb"></tbody></table>
    </aside>
    <main class="card pano-r rv">
      <div class="pano-top">
        <svg class="donut" viewBox="0 0 130 130"><g transform="rotate(-90 65 65)">${['critica','moderada','leve'].map(k=>`<circle id="dn-${k}" cx="65" cy="65" r="50" stroke="${CAT[k].c}" stroke-dasharray="0 314"/>`).join('')}</g>
          <text x="65" y="74" font-size="34">${ALERTAS.length}</text></svg>
        <div class="leyenda">${['critica','moderada','leve'].map(k=>`<div><i style="background:${CAT[k].c}"></i><b style="color:${CAT[k].c}">${cnt[k]}</b>${CAT[k].n}${cnt[k]>1?'s':''}</div>`).join('')}</div>
        <p class="mut" style="margin-left:auto; max-width:19rem; font-size:.9rem">Toca una burbuja o una fila para abrir la alerta. Las críticas laten.</p>
      </div>
      <div class="mx" id="mx"></div>
    </main>`;

  const cats = {todas:'Todas', critica:'Crítica', moderada:'Moderada', leve:'Leve'};
  $('#fil',root).innerHTML = Object.entries(cats).map(([k,n])=>`<button class="chip${k==='todas'?' on':''}" data-f="${k}">${k!=='todas'?`<i style="background:${CAT[k].c}"></i>`:''}${n}${k!=='todas'?' · '+cnt[k]:' · '+ALERTAS.length}</button>`).join('');

  const tb = $('#tb',root);
  function filas(){
    const arr = [...ALERTAS].sort((a,b)=>{
      const va = orden.k==='cat'?CATN[a.cat]:a[orden.k], vb = orden.k==='cat'?CATN[b.cat]:b[orden.k];
      return (va>vb?1:va<vb?-1:a.n-b.n)*orden.d; });
    tb.innerHTML = arr.map(a=>`<tr data-n="${a.n}" style="--c:${CAT[a.cat].c}" class="${filtro!=='todas'&&a.cat!==filtro?'dim':''}">
      <td class="n">${a.n}</td><td>${a.t}</td><td>${a.per}</td><td>${a.comp}</td><td><span class="cat"><i></i>${CAT[a.cat].n}</span></td></tr>`).join('');
    $$('tr',tb).forEach(tr=>{
      tr.onclick=()=>ir(idxAlerta(+tr.dataset.n));
      tr.onmouseenter=()=>hl(tr.dataset.n,true); tr.onmouseleave=()=>hl(tr.dataset.n,false);
    });
  }
  function hl(n,on){ $$(`[data-n="${n}"]`,root).forEach(e=>e.classList.toggle('hl',on)); }
  function aplica(){
    $$('.bub',root).forEach(b=>b.classList.toggle('dim', filtro!=='todas' && ALERTAS[b.dataset.n-1].cat!==filtro));
    filas();
    $$('#fil .chip',root).forEach(c=>c.classList.toggle('on',c.dataset.f===filtro));
  }
  $$('#fil .chip',root).forEach(c=>c.onclick=()=>{ filtro=c.dataset.f; aplica(); });
  $$('.tabla th',root).forEach(th=>th.onclick=()=>{ orden = {k:th.dataset.k, d:orden.k===th.dataset.k?-orden.d:1}; filas(); });

  /* matriz */
  let m = '<div class="h"></div>' + PERIODOS.map(p=>`<div class="h">${p}</div>`).join('');
  COMPONENTES.forEach(c=>{
    m += `<div class="r">${c}</div>`;
    PERIODOS.forEach(p=>{
      const as = ALERTAS.filter(a=>a.comp===c && a.per===p);
      m += `<div class="c">${as.map(a=>`<div class="bub${a.cat==='critica'?' crit':''}" data-n="${a.n}" style="--c:${CAT[a.cat].c}">${a.n}${p==='2026-II'?'<span class="nueva">NUEVA</span>':''}</div>`).join('')}</div>`;
    });
  });
  $('#mx',root).innerHTML = m;
  $$('.bub',root).forEach(b=>{
    b.onclick=()=>ir(idxAlerta(+b.dataset.n));
    b.onmouseenter=e=>{ hl(b.dataset.n,true); verTip(`<b>${b.dataset.n}. ${ALERTAS[b.dataset.n-1].t}</b>`,e); };
    b.onmouseleave=()=>{ hl(b.dataset.n,false); ocultaTip(); };
  });
  filas();
  /* dona animada */
  requestAnimationFrame(()=>setTimeout(()=>{
    let off=0; const C=2*Math.PI*50;
    ['critica','moderada','leve'].forEach(k=>{ const L=cnt[k]/ALERTAS.length*C; const el=$('#dn-'+k,root);
      el.style.strokeDasharray=`${Math.max(0,L-4)} ${C}`; el.style.strokeDashoffset=-off; off+=L; });
  },250));
};

/* =====================================================================
   HOJA DE RUTA — línea de tiempo arrastrable
   ===================================================================== */
VIS.ruta = root => {
  /* escala a tramos: abr–sep 2026 a escala real (donde se concentran los compromisos) y un bloque final «Q4 2026 · 2027» */
  const T0 = new Date(2026,3,14), TM = new Date(2026,8,20), T1 = new Date(2027,1,10);
  const F1 = .84, F2 = .885;
  let play = CORTE.fecha.getTime(), sel = null, filt = new Set();
  root.innerHTML = `<div class="rut">
    <div class="rut-h rv"><div><h1>Hoja de ruta: quién, qué y cuándo</h1>
      <p>Cada compromiso con fecha, y los que aún no la tienen. Arrastra la línea blanca por el tiempo: lo que quedó atrás sin cumplirse se marca en rojo.</p></div>
      <div class="rut-ctl"><span class="mut" style="font-size:.8rem">Filtrar por alerta:</span><div class="rut-al" id="ral"></div><button class="chip" id="bcorte">Corte ${CORTE.txt}</button><button class="chip" id="bhoy">Hoy</button></div></div>
    <div class="tl-wrap card rv" id="tw"><div class="tl-ax"></div><div class="tl-brk">⋯</div><div class="tl-play" id="pl"><div class="mango" id="mg"></div><svg><use href="#i-bus"/></svg></div></div>
    <div class="rut-b rv">
      <div class="card"><h4>Detalle</h4><div id="det"><div class="det-h">Toca un compromiso</div><div class="det-s">Verás la alerta, el responsable y el estado.</div></div></div>
      <div class="card"><h4>Sin fecha en el corte — se fijan en esta reunión</h4><div class="sf" id="sf"></div></div>
    </div></div>`;
  const tw = $('#tw',root), W = () => tw.clientWidth - 32;
  const fr = t => t <= TM ? Math.max(0,(t-T0)/(TM-T0))*F1 : F2 + Math.min(1,(t-TM)/(T1-TM))*(1-F2);
  const px = t => 16 + fr(t)*W();
  const inv = f => f <= F1 ? T0.getTime() + f/F1*(TM-T0) : f < F2 ? TM.getTime() : TM.getTime() + (f-F2)/(1-F2)*(T1-TM);
  const ordenados = [...HITOS].sort((a,b)=>a.f-b.f);
  const CW = 11.4;   // ancho de tarjeta en rem
  const remPx = () => parseFloat(getComputedStyle(document.documentElement).fontSize);

  /* ranuras sin choques: 2 niveles arriba (u0,u1) y 2 abajo (d0,d1) */
  const slots = ['u0','d0','u1','d1'], ult = {};
  ordenados.forEach(h=>{ const x = fr(h.f)*W()/remPx();
    h.slot = slots.find(s=>ult[s]===undefined || x-ult[s] > CW+.4) || 'u1'; ult[h.slot]=x; });

  /* marcas de mes (abr–sep) y del bloque final */
  const marca = (t,txt) => { const e=document.createElement('div'); e.className='tl-mes'; e.textContent=txt; e.dataset.t=+t; tw.append(e); };
  for(let m=3; m<=8; m++) marca(new Date(2026,m,1), MES[m]+(m===3?' 2026':''));
  marca(new Date(2026,11,31),'dic'); marca(new Date(2027,0,31),'ene 27');

  const alerta = h => h.a[0];
  const nodos = ordenados.map(h=>{
    const c = catDe(alerta(h)), niv = +h.slot[1], arriba = h.slot[0]==='u';
    const alto = 3.4 + niv*5.6;
    const pin = document.createElement('div'); pin.className='tl-pin'; pin.style.setProperty('--c',c); pin.style.top='50%';
    const stem = document.createElement('div'); stem.className='tl-stem';
    stem.style.top = arriba ? `calc(50% - ${alto}rem)` : '50%'; stem.style.height = `${alto-.4}rem`;
    const card = document.createElement('div'); card.className='tl-card'; card.style.setProperty('--c',c);
    card.style.top = arriba ? `calc(50% - ${alto+4.4}rem)` : `calc(50% + ${alto-.4}rem)`;
    card.innerHTML = `<b>${fFecha(h.f).replace(/ 20\d\d$/,'')}${h.f.getFullYear()>2026?' '+h.f.getFullYear():''} · A${h.a.join('/')}<span class="mk"></span></b>${h.t}`;
    card.onclick = () => { sel=h; pinta(); };
    tw.append(stem,pin,card); return {h,pin,stem,card};
  });
  function coloca(){
    $$('.tl-mes',tw).forEach(e=>e.style.left=px(+e.dataset.t)+'px');
    $('.tl-brk',tw).style.left = (16+(F1+F2)/2*W())+'px';
    nodos.forEach(({h,pin,stem,card})=>{ const x=px(h.f); pin.style.left=x+'px'; stem.style.left=x+'px';
      card.style.left=Math.min(Math.max(x-14, 4), tw.clientWidth-card.offsetWidth-4)+'px'; });
    $('#pl',root).style.left=px(play)+'px';
  }
  function pinta(){
    $('#mg',root).textContent = fFecha(new Date(play));
    nodos.forEach(({h,pin,stem,card})=>{
      const on = !filt.size || h.a.some(a=>filt.has(a));
      [pin,stem,card].forEach(e=>e.classList.toggle('dim',!on));
      const vence = h.est==='programado' && h.f.getTime() < play;
      card.classList.toggle('vence',vence); card.classList.toggle('sel',sel===h);
      $('.mk',card).innerHTML = h.est==='cumplido' ? '<span class="ok">CUMPLIDO</span>' : vence ? '<span class="vc">FECHA SUPERADA</span>' : '';
    });
    const d=$('#det',root);
    if(sel){ const al = sel.a.map(n=>`<span class="tag" style="color:${catDe(n)};border-color:${catDe(n)}">A${n} · ${ALERTAS[n-1].corto}</span>`).join(' ');
      const vence = sel.est==='programado' && sel.f.getTime() < play;
      d.innerHTML = `<div class="det-h">${sel.t}</div><div class="det-s">${fFecha(sel.f)} · Responsable: <b>${sel.r}</b> · ${sel.est==='cumplido'?'✔ Cumplido':vence?'⚠ Fecha superada: confirmar cumplimiento':'Programado'}</div><div style="margin-top:.5rem;display:flex;gap:.4rem;flex-wrap:wrap">${al}</div>`; }
  }
  $('#ral',root).innerHTML = ALERTAS.map(a=>`<button class="chip" data-a="${a.n}" style="--c:${CAT[a.cat].c}" title="${a.t}">${a.n}</button>`).join('');
  $$('#ral .chip',root).forEach(b=>b.onclick=()=>{ const n=+b.dataset.a; filt.has(n)?filt.delete(n):filt.add(n); b.classList.toggle('on',filt.has(n)); pinta(); });
  $('#sf',root).innerHTML = SIN_FECHA.map(s=>`<span data-a="${s.a}" title="Responsable: ${s.r}"><b style="color:${catDe(s.a)}">A${s.a}</b>${s.t}</span>`).join('');
  $$('#sf span',root).forEach(s=>s.onclick=()=>ir(idxAlerta(+s.dataset.a)));

  const setPlay = clientX => { const r=tw.getBoundingClientRect(), k=r.width/tw.clientWidth;
    play = inv(Math.min(1,Math.max(0,((clientX-r.left)/k-16)/W()))); $('#pl',root).style.left=px(play)+'px'; pinta(); };
  arrastrar($('#mg',root),{mueve:e=>setPlay(e.clientX)});
  tw.addEventListener('click',e=>{ if(e.target===tw||e.target.classList.contains('tl-ax')) setPlay(e.clientX); });
  $('#bcorte',root).onclick=()=>{ play=CORTE.fecha.getTime(); coloca(); pinta(); };
  $('#bhoy',root).onclick=()=>{ play=Math.min(Date.now(),T1.getTime()); coloca(); pinta(); };
  requestAnimationFrame(()=>{ coloca(); pinta(); });
  const rs=()=>coloca(); window.addEventListener('resize',rs); limpiar.push(()=>window.removeEventListener('resize',rs));
};


/* =====================================================================
   GRACIAS
   ===================================================================== */
VIS.fin = root => {
  root.innerHTML = `<div class="fin">
    <div class="fin-t"><small class="rv">Muchas</small><br><span class="bar">Gracias</span>
      <p class="rv" style="margin-top:1.4rem;font-size:1.4rem;color:#D5E0FA;max-width:44rem">Nueve alertas, una posición clara para cada una. El SETP sigue en marcha.</p></div>
    <div class="fin-b rv"><button class="btn" id="v1">Volver al panorama</button><button class="btn sec" id="v2">Ver hoja de ruta</button><button class="btn sec" id="v3">Reiniciar</button></div>
    <div class="fin-road"></div>
    <svg class="fin-bus par"><use href="#i-bus"/></svg>
    <div class="fin-logos rv"><img src="img/logo-icon.png" style="height:4.4rem" alt=""><img src="img/alcaldia.png" style="height:5rem;background:#fff;border-radius:.7rem;padding:.2rem .5rem" alt=""></div>
  </div>`;
  $('#v1',root).onclick=()=>ir(idxTipo('panorama')); $('#v2',root).onclick=()=>ir(idxTipo('ruta')); $('#v3',root).onclick=()=>ir(0);
};

/* =====================================================================
   ALERTA 1 — FET: simulador de dimensionamiento
   ===================================================================== */
VIS.fet = root => {
  const P = {tt:3500, tu:3000, via:100, mes:24, apo:0};
  const sl = (id,lbl,min,max,step) => `<label class="sl rv"><span>${lbl}<b id="v-${id}"></b></span><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${P[id]}"></label>`;
  root.innerHTML = `<div class="fet">
    <div class="fet-top rv"><span class="chip" style="background:var(--gold);border-color:var(--gold);color:#1B1200">SIMULADOR ILUSTRATIVO</span>
      <span class="mut">Supuestos editables para entender la mecánica. La cifra oficial la fija el modelo financiero (julio 2026).</span></div>
    <div class="fet-body">
      <div class="fet-tank rv">
        <svg viewBox="0 0 260 400" id="tk">
          <defs><clipPath id="cp"><path d="M35 60 v274 a95 24 0 0 0 190 0 v-274 a95 24 0 0 1 -190 0z"/></clipPath></defs>
          <path d="M100 6 h60 l-12 26 h-36z" fill="#9DB0DC" opacity=".8"/>
          <g class="mons" id="mons">${[0,.5,1].map(d=>`<use class="mon" href="#i-coin" x="${112+d*8}" y="0" width="30" height="30" style="animation-delay:${d}s;animation-duration:${1.5+d*.3}s"/>`).join('')}</g>
          <path d="M35 60 v274 a95 24 0 0 0 190 0 v-274 a95 24 0 0 1 -190 0z" fill="rgba(255,255,255,.07)"/>
          <g clip-path="url(#cp)"><g id="agua" style="transform:translateY(360px)">
            <g class="ola2" opacity=".55"><path d="M-190 0 q47.5 -16 95 0 t95 0 t95 0 t95 0 t95 0 t95 0 v420 h-570z" id="w2"/></g>
            <g class="ola1"><path d="M-190 6 q47.5 14 95 0 t95 0 t95 0 t95 0 t95 0 t95 0 v420 h-570z" id="w1"/></g></g></g>
          <ellipse cx="130" cy="60" rx="95" ry="24" fill="none" stroke="#B9C7EE" stroke-width="2.4"/>
          <path d="M35 60 v274 a95 24 0 0 0 190 0 v-274" fill="none" stroke="#B9C7EE" stroke-width="2.4"/>
          <line x1="20" x2="240" y1="64" y2="64" stroke="#fff" stroke-dasharray="6 6" opacity=".5"/>
          <text x="245" y="60" font-size="11" fill="#fff" text-anchor="end" opacity=".8">100 %</text>
        </svg>
        <div class="fet-cob"><b id="cob">0 %</b><small>cobertura del fondo</small></div>
      </div>
      <div class="fet-ctl">
        ${sl('tt','Tarifa técnica por viaje',2500,5000,50)}${sl('tu','Tarifa al usuario por viaje',2000,4000,50)}
        ${sl('via','Viajes pagos por día (miles)',40,200,5)}${sl('mes','Horizonte de cobertura (meses)',6,36,1)}
        ${sl('apo','Aporte anual al FET ($ mil millones)',0,40,1)}
        <div class="fet-kp rv"><div class="kpi"><b id="k-def">—</b><small>Déficit por viaje</small></div><div class="kpi"><b id="k-req">—</b><small>Fondo requerido</small></div><div class="kpi"><b id="k-apo">—</b><small>Aportado en el horizonte</small></div></div>
        <div class="fet-src rv">Fuentes a evaluar (no dimensionadas): <span class="c">aportes del Municipio (POAI)</span><span class="c">zonas azules</span><span class="c">publicidad en MUPI</span></div>
      </div>
    </div>
    <div class="fet-ruta rv"><h4>Hoja de ruta del FET · toca un paso</h4><div class="pasos" id="pasos"></div><div class="paso-d" id="pd"></div></div>
  </div>`;
  const $$$ = s => $(s,root);
  function calc(){
    ['tt','tu','via','mes','apo'].forEach(k=>P[k]=+$$$('#'+k).value);
    const def = Math.max(0,P.tt-P.tu), anual = def*P.via*1000*365, req = anual*P.mes/12, apo = P.apo*1e9*P.mes/12;
    const cob = req>0 ? apo/req : (apo>0?1:0), niv = Math.min(1,cob);
    $$$('#v-tt').textContent='$'+fm(P.tt); $$$('#v-tu').textContent='$'+fm(P.tu); $$$('#v-via').textContent=P.via+' mil'; $$$('#v-mes').textContent=P.mes+' meses'; $$$('#v-apo').textContent='$'+P.apo+' mil M';
    $$$('#k-def').textContent='$'+fm(def); $$$('#k-req').textContent=fB(req); $$$('#k-apo').textContent=fB(apo);
    $$$('#cob').textContent=Math.round(cob*100)+' %';
    const col = cob>=1?'#1FBF5B':cob>=.5?'#F0A800':'#E5484D';
    $$$('#w1').style.fill=col; $$$('#w2').style.fill=col;
    $$$('#agua').style.transform=`translateY(${360-300*niv}px)`;
    $$$('#mons').style.opacity = P.apo>0?1:0;
  }
  $$('input',root).forEach(i=>i.oninput=calc); calc();
  /* pasos */
  const pasos = [
    ['Modelo financiero final','Julio de 2026','Consultoría actualiza el modelo financiero del sistema. Resultado final en julio de 2026.'],
    ['Análisis de resultados','Evaluación integral','Se analizan los resultados y se evalúa el sistema de forma integral: necesidad, alcance y viabilidad del Fondo.'],
    ['Hoja de ruta del FET','Definición','Se define la hoja de ruta para la eventual implementación del Fondo.'],
    ['Acciones administrativas y normativas','Si aplica','Adopción de las acciones administrativas y normativas correspondientes, si aplica.'],
    ['Compromiso del Municipio','Sostenibilidad y equidad tarifaria','Compromiso del Municipio con la sostenibilidad financiera del SETP y con la equidad tarifaria.']];
  let a=0; const ps=$$$('#pasos');
  ps.innerHTML = pasos.map((p,i)=>`<button class="paso" data-i="${i}"><span>${i+1}</span>${p[0]}<br><small class="mut">${p[1]}</small></button>`).join('');
  const marca=i=>{ a=i; ps.style.setProperty('--p',i); $$('.paso',ps).forEach((e,k)=>{ e.classList.toggle('act',k===i); e.classList.toggle('pas',k<i); }); $$$('#pd').textContent=pasos[i][2]; };
  $$('.paso',ps).forEach(b=>b.onclick=()=>marca(+b.dataset.i)); marca(0);
};

/* =====================================================================
   ALERTA 2 — Concertación: dos vías que convergen (buses arrastrables)
   ===================================================================== */
VIS.con = root => {
  const L = [
    { c:'#4C8DFF', h:'1 · Viabilidad del sistema', p:[
      ['Revisión de la canasta de costos','Validación de variables operativas y financieras con los operadores.','Insumo del modelo financiero.'],
      ['Modelo financiero','Resultado final: 24 de julio de 2026.','Base de la evaluación de sostenibilidad.'],
      ['Análisis de viabilidad','Evaluación de la sostenibilidad del sistema.','Habilita la definición de los actos administrativos.']] },
    { c:'#1FBF5B', h:'2 · Concertación y verificación normativa', p:[
      ['Mesas de diálogo','Espacio de concertación con los transportadores.','Recoge inquietudes y acuerdos.'],
      ['Solicitud de documentación','Para la revisión del cumplimiento normativo de los operadores.','Verifica requisitos.'],
      ['Aclaraciones y plazo adicional','Respuesta a las inquietudes de los operadores.','Cierra la vía normativa.']] }];
  const pos=[-1,-1], X = p => p<0?0:p>2?100:(p*2+1)/6*100;
  root.innerHTML = `<div class="con">
    ${L.map((l,k)=>`<div class="con-lane rv" style="--c:${l.c}"><h4>${l.h}</h4>
      <div class="con-tr" id="tr${k}">${l.p.map((s,i)=>`<div class="con-st" data-k="${k}" data-i="${i}"><b><em>${i+1}</em>${s[0]}</b><p>${s[1]}</p></div>`).join('')}
        <svg class="con-bus" id="b${k}" style="left:0%"><use href="#i-bus"/></svg></div></div>`).join('')}
    <div class="con-fin rv" id="fin"><span class="sello">HABILITADO</span><div class="gl">📜</div><b>Definición de actos administrativos</b>
      <p>Con base en la viabilidad del sistema y el cumplimiento de requisitos de los operadores.</p></div>
    <div class="con-det rv" id="det"><small>Arrastra los buses o toca una etapa</small><h5>Las dos vías tienen que llegar</h5>
      <span class="mut">Cuando ambos buses lleguen al final, se habilita la definición de los actos administrativos.</span></div></div>`;
  function ver(k,p,det){
    pos[k]=p; const bus=$('#b'+k,root), tr=$('#tr'+k,root);
    bus.style.left=X(p)+'%'; tr.style.setProperty('--w',X(p)+'%');
    $$('.con-st',tr).forEach((e,i)=>{ e.classList.toggle('hecho',i<p); e.classList.toggle('act',i===p); });
    if(det!==false && p>=0 && p<=2){ const s=L[k].p[p]; $('#det',root).innerHTML=`<small style="color:${L[k].c}">${L[k].h} · etapa ${p+1}</small><h5>${s[0]}</h5><span class="mut">${s[1]} — ${s[2]}</span>`; }
    if(p===3 && det!==false) $('#det',root).innerHTML=`<small style="color:${L[k].c}">${L[k].h}</small><h5>Vía completa</h5><span class="mut">${k===0?'Viabilidad demostrada con el modelo financiero y el análisis de sostenibilidad.':'Requisitos normativos verificados y aclaraciones respondidas.'}</span>`;
    $('#fin',root).classList.toggle('ok', pos[0]===3 && pos[1]===3);
  }
  $$('.con-st',root).forEach(e=>e.onclick=()=>ver(+e.dataset.k,+e.dataset.i));
  [0,1].forEach(k=>{
    const bus=$('#b'+k,root), tr=$('#tr'+k,root);
    arrastrar(bus,{ inicio:()=>bus.classList.add('arr'),
      mueve:e=>{ const r=tr.getBoundingClientRect(); const f=Math.min(100,Math.max(0,(e.clientX-r.left)/r.width*100)); bus.style.left=f+'%'; },
      fin:()=>{ bus.classList.remove('arr'); const f=parseFloat(bus.style.left);
        const c=[0,X(0),X(1),X(2),100], q=c.reduce((b,v,i)=>Math.abs(v-f)<Math.abs(c[b]-f)?i:b,0); ver(k,q-1); } });
    ver(k,-1,false);
  });
};

/* =====================================================================
   ALERTA 3 — Semaforización: semáforo, brecha, 34 intersecciones, simulación
   ===================================================================== */
VIS.sem = root => {
  const S = { op:14, inst:25, ctl:25, meses:2, sim:false };
  root.innerHTML = `<div class="sem">
    <div class="sem-a rv"><div class="tl" id="tl"><i class="r on"></i><i class="a"></i><i class="v"></i></div><div class="est" id="tle">Rojo</div><small>Toca el semáforo para cambiar de fase</small></div>
    <div class="rv"><div class="bars">
        <div class="brow"><span>Avance programado</span><div class="b"><i id="bp" style="background:#4C8DFF"></i></div><strong data-count="99.76" data-dec="2" data-suf="%">0</strong></div>
        <div class="brow"><span>Avance real ejecutado</span><div class="b"><i id="br" style="background:linear-gradient(90deg,#F0A800,#FFD56B)"></i></div><strong id="vr">0 %</strong></div>
        <div class="brecha" id="brecha">Brecha: 24,75 puntos</div></div>
      <div class="sem-k"><div class="kpi"><b id="kc">25<em>/28</em></b><small>Controladores</small><div class="ctls" id="ctls"></div></div>
        <div class="kpi"><b id="ki">25<em>/34</em></b><small>Intersecciones instaladas</small></div>
        <div class="kpi" style="color:#2BE07A"><b id="ko">14</b><small style="color:var(--mut)">En funcionamiento</small></div></div></div>
    <div class="rv"><div class="chips" style="display:flex;gap:.5rem;flex-wrap:wrap" id="fl">
        <button class="chip on" data-f="todas">Las 34</button><button class="chip" data-f="op"><i style="background:#2BE07A"></i>En funcionamiento</button>
        <button class="chip" data-f="inst"><i style="background:var(--ambar)"></i>Instaladas sin operar</button><button class="chip" data-f="pend"><i style="background:#5C6AA0"></i>Por instalar</button></div>
      <div class="dots" id="dots"></div>
      <div class="causas" id="cs"></div></div>
    <div class="sem-d rv"><div class="fin">Reanudación <b>30 jun 2026</b> → fin estimado <b id="ffin"></b></div>
      <div class="seg" id="seg"><button data-m="1">Prórroga 1 mes</button><button data-m="2" class="on">Prórroga 2 meses</button></div>
      <span class="mut" style="font-size:.85rem">Se fija en el acta de reanudación</span>
      <button class="btn" id="sim" style="margin-left:auto">▶ Simular cierre de Fase I</button><button class="btn sec" id="rst" style="display:none">↺ Restablecer</button></div>
  </div>`;
  const dots=$('#dots',root); dots.innerHTML=Array.from({length:34},(_,i)=>`<div class="dt" data-i="${i}"></div>`).join('');
  $('#ctls',root).innerHTML=Array.from({length:28},()=>'<i></i>').join('');
  $('#cs',root).innerHTML=['Componentes tecnológicos parciales','Elementos complementarios en controladores','Planeamientos semafóricos pendientes','Parametrización y validación','Pruebas operativas finales'].map(t=>`<span>${t}</span>`).join('');
  let filtro='todas';
  function pinta(){
    $$('.dt',dots).forEach((d,i)=>{ const e=i<S.op?'op':i<S.inst?'inst':'pend'; d.className='dt '+e+(filtro!=='todas'&&e!==filtro?' dim':''); d.dataset.e=e; });
    $$('#ctls i',root).forEach((c,i)=>c.classList.toggle('on',i<S.ctl));
    $('#kc',root).innerHTML=`${S.ctl}<em>/28</em>`; $('#ki',root).innerHTML=`${S.inst}<em>/34</em>`; $('#ko',root).textContent=S.op;
    const prog=((S.inst-25)+(S.op-14)+(S.ctl-25))/(9+20+3), real=75.01+(100-75.01)*prog;
    $('#br',root).style.width=real+'%'; $('#vr',root).textContent=real.toLocaleString('es-CO',{minimumFractionDigits:2,maximumFractionDigits:2})+' %';
    $('#brecha',root).textContent = real>=99.7 ? 'Meta alcanzada: Fase I integrada' : 'Brecha: '+(99.76-real).toLocaleString('es-CO',{minimumFractionDigits:2,maximumFractionDigits:2})+' puntos';
    $('#ffin',root).textContent=fFecha(new Date(2026,5+S.meses,30));
  }
  $$('.dt',dots).forEach(d=>{ d.onmouseenter=e=>verTip(`Intersección: <b>${{op:'en funcionamiento',inst:'instalada, sin operar',pend:'por instalar'}[d.dataset.e]}</b>`,e); d.onmouseleave=ocultaTip; });
  $$('#fl .chip',root).forEach(b=>b.onclick=()=>{ filtro=b.dataset.f; $$('#fl .chip',root).forEach(x=>x.classList.toggle('on',x===b)); pinta(); });
  $$('#seg button',root).forEach(b=>b.onclick=()=>{ S.meses=+b.dataset.m; $$('#seg button',root).forEach(x=>x.classList.toggle('on',x===b)); pinta(); });
  /* semáforo automático */
  const tl=$('#tl',root), lamps={r:$('.r',tl),a:$('.a',tl),v:$('.v',tl)}; let fase=0, tm;
  const NOM=['Rojo','Verde','Ámbar'], SEQ=['r','v','a'], DUR=[2600,2600,900];
  function luz(){ Object.entries(lamps).forEach(([k,e])=>e.classList.toggle('on',k===SEQ[fase])); $('#tle',root).textContent=S.sim&&S.op>=34?'Verde · red sincronizada':NOM[fase]; }
  function ciclo(){ clearTimeout(tm); luz(); if(S.sim&&S.op>=34) return; tm=setTimeout(()=>{ fase=(fase+1)%3; ciclo(); },DUR[fase]); }
  tl.onclick=()=>{ fase=(fase+1)%3; ciclo(); }; limpiar.push(()=>clearTimeout(tm)); ciclo();
  /* simulación */
  let it; limpiar.push(()=>clearInterval(it));
  $('#sim',root).onclick=()=>{ if(S.sim) return; S.sim=true; $('#sim',root).style.display='none';
    it=setInterval(()=>{
      if(S.inst<34) S.inst++; else if(S.op<34) S.op++; else if(S.ctl<28) S.ctl++;
      if(S.op<34&&S.inst>=30) S.op=Math.min(S.inst,S.op+1);
      if(S.ctl<28&&S.inst>28) S.ctl++;
      pinta();
      if(S.inst>=34&&S.op>=34&&S.ctl>=28){ clearInterval(it); fase=1; ciclo(); $('#rst',root).style.display=''; }
    },140); };
  $('#rst',root).onclick=()=>{ clearInterval(it); Object.assign(S,{op:14,inst:25,ctl:25,sim:false}); $('#rst',root).style.display='none'; $('#sim',root).style.display=''; fase=0; ciclo(); pinta(); };
  pinta();
  requestAnimationFrame(()=>setTimeout(()=>{ $('#bp',root).style.width='99.76%'; },200));
};
