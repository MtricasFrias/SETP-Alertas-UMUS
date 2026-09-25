/* =====================================================================
   EL VIAJE — escena de portada y cierre.
   Un mapa ilustrado con una ruta serpenteante, 9 paradas (una por alerta)
   y un bus que recorre el camino: solo, o arrastrándolo con el dedo/mouse.
   Cada parada tiene su propio dibujo y su ficha. Diseño propio del deck.
   ===================================================================== */
estilo(`
.vj{ position:absolute; inset:0; overflow:hidden; background:linear-gradient(180deg,#D3E5FA 0%,#E6F0FD 30%,#F5F9FF 62%,#F5F9FF 100%) }
.vj:before{ content:""; position:absolute; inset:0; background:radial-gradient(circle at 88% 13%,rgba(255,229,150,.85) 0,rgba(255,229,150,0) 25rem),radial-gradient(circle at 10% 34%,rgba(255,255,255,.75) 0,rgba(255,255,255,0) 32rem) }
.vj svg.cap{ position:absolute; left:0; top:0; width:120rem; height:60.83rem; display:block }
.vj .nube{ animation:nubeVa var(--dur,120s) linear infinite; animation-delay:var(--dl,0s) }
@keyframes nubeVa{ from{ transform:translateX(-300px) } to{ transform:translateX(1700px) } }
.vj .rio{ fill:none; stroke:#fff; stroke-width:5; stroke-dasharray:2 28; stroke-linecap:round; animation:rioFluye 3s linear infinite }
@keyframes rioFluye{ to{ stroke-dashoffset:-30 } }
.vj .vj-dash{ fill:none; stroke:#fff; stroke-width:4.5; stroke-dasharray:22 20; stroke-linecap:round; animation:rutaFluye 1.1s linear infinite; opacity:.95 }
@keyframes rutaFluye{ to{ stroke-dashoffset:-42 } }

/* paradas */
.vj .pa{ cursor:pointer; outline:none }
.vj .pa .pad{ fill:var(--c); opacity:.2; transition:opacity .3s }
.vj .pa .lm{ transition:transform .35s cubic-bezier(.34,1.6,.5,1); transform-box:fill-box; transform-origin:50% 100% }
.vj .pa:hover .lm, .vj .pa:focus-visible .lm, .vj .pa.on .lm{ transform:scale(1.14) translateY(-4px) }
.vj .pa:hover .pad, .vj .pa.on .pad{ opacity:.42 }
.vj .pa .bd{ fill:var(--c); stroke:#fff; stroke-width:5; filter:drop-shadow(0 4px 6px rgba(31,60,120,.3)) }
.vj .pa .bn{ fill:var(--cx); font:800 24px var(--fd); text-anchor:middle }
.vj .pa .ping{ fill:none; stroke:var(--c); stroke-width:3.5; transform-box:fill-box; transform-origin:center; animation:pingA 2.6s ease-out infinite; animation-delay:var(--d,0s) }
@keyframes pingA{ 0%{ transform:scale(.7); opacity:.9 } 100%{ transform:scale(2.4); opacity:0 } }
.vj .pa .pill{ fill:#fff; stroke:var(--c); stroke-width:3.5; filter:drop-shadow(0 5px 8px rgba(31,60,120,.2)); transition:fill .25s }
.vj .pa .lb{ fill:var(--ink); font:800 20px var(--fd); text-anchor:middle }
.vj .pa:hover .pill, .vj .pa.on .pill{ fill:var(--c) } .vj .pa:hover .lb, .vj .pa.on .lb{ fill:var(--cx) }
.vj .pa .ck{ opacity:0; transform:scale(.3); transform-box:fill-box; transform-origin:center; transition:opacity .3s, transform .4s cubic-bezier(.34,1.8,.5,1) }
.vj .pa.vis .ck{ opacity:1; transform:none }
.vj .pa .nv{ fill:var(--sol); stroke:#fff; stroke-width:2.5 }
.vj[data-f] .pa:not(.f){ opacity:.2 } .vj .pa{ transition:opacity .3s }
.vj .pa.entra{ animation:paIn .7s cubic-bezier(.34,1.6,.5,1) both; animation-delay:var(--e,0s) }
@keyframes paIn{ from{ opacity:0; transform:translate(var(--x),calc(var(--y) + 40px)) scale(.6) } to{ opacity:1; transform:translate(var(--x),var(--y)) } }

/* dibujos de las paradas */
.vj .vj-bob{ animation:bobA 2.4s ease-in-out infinite } @keyframes bobA{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-7px) } }
.vj .vj-bar{ transform-box:fill-box; transform-origin:50% 100%; animation:barA 2.8s ease-in-out infinite; animation-delay:var(--d,0s) }
@keyframes barA{ 0%,100%{ transform:scaleY(.4) } 50%{ transform:scaleY(1) } }
.vj .vj-tram{ animation:tramA 5s ease-in-out infinite alternate } @keyframes tramA{ from{ transform:translateX(-13px) } to{ transform:translateX(13px) } }
.vj .vj-doc{ transform-box:fill-box; transform-origin:50% 100%; animation:docA 4.2s ease-in-out infinite } @keyframes docA{ 0%,100%{ transform:rotate(-2.5deg) } 50%{ transform:rotate(2.5deg) } }
.vj .vr{ animation:tlR 8s infinite } .vj .vy{ animation:tlY 8s infinite } .vj .vg{ animation:tlG 8s infinite }
@keyframes tlR{ 0%,40%{ opacity:1 } 44%,100%{ opacity:.18 } } @keyframes tlG{ 0%,44%{ opacity:.18 } 48%,86%{ opacity:1 } 90%,100%{ opacity:.18 } } @keyframes tlY{ 0%,86%{ opacity:.18 } 88%,97%{ opacity:1 } 99%,100%{ opacity:.18 } }
.vj .vj-pet{ animation:petA 5s ease-in infinite; animation-delay:var(--d,0s); opacity:0 } @keyframes petA{ 0%{ transform:translate(0,0) rotate(0); opacity:0 } 15%{ opacity:.9 } 100%{ transform:translate(var(--dx,12px),58px) rotate(220deg); opacity:0 } }
.vj .sg{ fill:none; stroke:var(--azul); stroke-width:5; stroke-linecap:round; opacity:0; animation:sgA 2.2s ease-out infinite; animation-delay:var(--d,0s) } @keyframes sgA{ 0%{ opacity:0 } 30%{ opacity:1 } 100%{ opacity:0 } }
.vj .vj-dot{ animation:dotA 1.4s infinite; animation-delay:var(--d,0s) } @keyframes dotA{ 0%,100%{ opacity:.25 } 50%{ opacity:1 } }
.vj .blk{ animation:blkA 1.2s steps(1) infinite } @keyframes blkA{ 50%{ opacity:.15 } }

/* bus y notas */
.vj #vjBus{ cursor:grab } .vj #vjBus.arr{ cursor:grabbing }
.vj .rueda{ transform-box:fill-box; transform-origin:center; animation:girar .6s linear infinite } @keyframes girar{ to{ transform:rotate(360deg) } }
.vj .vj-nt{ font:900 30px var(--fd); animation:ntA 1.9s ease-out forwards; pointer-events:none } @keyframes ntA{ 0%{ transform:translate(0,0) rotate(-8deg) scale(.6); opacity:0 } 15%{ opacity:1 } 100%{ transform:translate(var(--dx,10px),-96px) rotate(12deg) scale(1.15); opacity:0 } }

/* texto sobre el cielo */
.vj .cv{ position:absolute; left:6rem; top:8.6rem; width:76rem; z-index:4 }
.vj .cv .kick{ font:800 1.5rem var(--fd); letter-spacing:.13em; text-transform:uppercase; color:var(--ambar-t); white-space:nowrap }
.vj .cv .kick b{ color:var(--ink) }
.vj .cv h1{ font:900 4.5rem/1.02 var(--fd); color:var(--ink); letter-spacing:-.03em; margin:.6rem 0 .6rem }
.vj .cv h1 mark{ background:linear-gradient(transparent 62%,var(--sol) 62% 92%,transparent 92%) no-repeat; background-size:100% 100%; color:inherit; padding:0 .15em; animation:marca 1s .6s both cubic-bezier(.2,.8,.2,1) }
@keyframes marca{ from{ background-size:0 100% } }
.vj .cv p{ font:600 1.9rem/1.25 var(--ft); color:var(--tx) }
.vj .lg-f{ display:flex; gap:.8rem; align-items:center; margin-top:.9rem; pointer-events:auto }
.vj .lg-f button{ display:flex; align-items:center; gap:.7rem; padding:.55rem 1.3rem; border-radius:99rem; font:800 1.6rem var(--fd); color:var(--ink); box-shadow:inset 0 0 0 .2rem var(--c); background:rgba(255,255,255,.6); transition:.2s }
.vj .lg-f button i{ width:1.3rem; height:1.3rem; border-radius:50%; background:var(--c) }
.vj .lg-f button:hover, .vj .lg-f button.on{ background:var(--c); color:var(--cx) }
.vj .logos{ position:absolute; top:2.4rem; left:2.6rem; right:2.6rem; display:flex; justify-content:space-between; align-items:flex-start; z-index:5; pointer-events:none }
.vj .logos img{ height:6.4rem; width:auto; display:block; pointer-events:auto; transition:transform .35s cubic-bezier(.34,1.4,.64,1) } .vj .logos img:hover{ transform:translateY(-.2rem) scale(1.06) }
.vj .logos .alc{ height:5.4rem; background:rgba(255,255,255,.92); border-radius:.8rem; padding:.3rem .8rem }

/* ficha de la parada */
.vj-f{ position:absolute; right:3rem; top:10.4rem; width:34rem; z-index:6; background:rgba(248,251,255,.95); border-radius:1.6rem; padding:1.5rem 1.9rem 1.6rem; box-shadow:0 1.2rem 3rem rgba(31,60,120,.2); border-top:.7rem solid var(--c,var(--ink)); transition:border-color .3s }
.vj-f .fh{ display:flex; align-items:center; gap:1rem }
.vj-f .fb{ flex:none; width:3.6rem; height:3.6rem; border-radius:50%; background:var(--c,var(--ink)); color:var(--cx,#fff); font:800 2rem var(--fd); display:grid; place-items:center; transition:background .3s }
.vj-f .fk{ font:700 1.5rem/1.15 var(--fd); color:var(--mut) }
.vj-f .fu{ margin-left:auto; flex:none; font:800 1.5rem var(--fd); font-style:normal; background:var(--sol); color:var(--ink); padding:.15rem .8rem; border-radius:.5rem }
.vj-f h3{ font:800 2.2rem/1.1 var(--fd); color:var(--ink); margin:.9rem 0 .5rem; letter-spacing:-.01em }
.vj-f p{ font:600 1.6rem/1.25 var(--ft); color:var(--tx); min-height:6rem }
.vj-f .btn{ margin-top:.9rem; padding:.8rem 1.6rem; font-size:1.55rem }
.vj-f.cambia .fh, .vj-f.cambia h3, .vj-f.cambia p{ animation:fichaIn .45s cubic-bezier(.22,.8,.3,1) } @keyframes fichaIn{ from{ opacity:0; transform:translateY(.8rem) } }

/* barra inferior */
.vj .cbar{ position:absolute; left:0; right:0; bottom:0; height:7.4rem; z-index:7; display:flex; align-items:center; justify-content:flex-end; gap:1.4rem; padding:0 3rem; background:rgba(248,251,255,.92); backdrop-filter:blur(.8rem); border-top:.25rem solid rgba(31,60,120,.1) }
.vj .cbar .btn{ font-size:1.75rem; padding:1.15rem 2.2rem } .vj .cbar .hint{ margin-right:auto; font:700 1.65rem var(--ft); color:var(--tx) }

/* trivia */
.trv{ position:absolute; inset:0; z-index:20; display:flex; align-items:center; justify-content:center; background:rgba(31,60,120,.36); opacity:0; pointer-events:none; transition:opacity .3s }
.trv.on{ opacity:1; pointer-events:auto }
.trv-c{ position:relative; width:74rem; background:var(--card); border-radius:2rem; padding:3rem 3.6rem; box-shadow:0 2.4rem 6rem rgba(31,60,120,.35); transform:translateY(2rem) scale(.96); transition:transform .45s cubic-bezier(.34,1.5,.5,1) }
.trv.on .trv-c{ transform:none }
.trv-k{ font:800 1.55rem var(--fd); letter-spacing:.12em; text-transform:uppercase; color:var(--ambar-t); display:flex; justify-content:space-between; padding-right:4rem }
.trv-q{ font:800 3.1rem/1.15 var(--fd); color:var(--ink); margin:1rem 0 2rem; letter-spacing:-.02em }
.trv-o{ display:flex; flex-direction:column; gap:1rem }
.trv-o button{ text-align:left; font:700 2.3rem var(--fd); color:var(--ink); padding:1.2rem 2rem; border-radius:1.2rem; background:var(--paper); box-shadow:inset 0 0 0 .22rem #C5D5EC; transition:transform .15s, background .2s }
.trv-o button:hover:not(:disabled){ transform:translateX(.5rem); background:#DCE8F9 }
.trv-o button.ok{ background:var(--verde); color:#fff; box-shadow:none } .trv-o button.no{ background:#F8D9D6; color:#8E2A32; animation:sacude .45s }
.trv-o button:disabled{ cursor:default }
.trv-x{ min-height:7.4rem; margin-top:1.6rem; font:600 2.05rem/1.25 var(--ft); color:var(--tx) } .trv-x b{ color:var(--ink) }
.trv-b{ display:flex; gap:1.2rem; margin-top:1rem }
.trv-cl{ position:absolute; top:1.8rem; right:2rem; width:4rem; height:4rem; border-radius:50%; font:800 2.4rem var(--fd); color:var(--mut); display:grid; place-items:center } .trv-cl:hover{ background:var(--paper); color:var(--ink) }

/* confeti, notas y piano «Gracias» */
.cft{ position:absolute; top:-3rem; z-index:8; pointer-events:none; animation:confCae var(--dur,4s) linear forwards; animation-delay:var(--dl,0s); opacity:0 }
@keyframes confCae{ 0%{ transform:translate(0,0) rotate(0); opacity:1 } 100%{ transform:translate(var(--dx,0),72rem) rotate(var(--rot,540deg)); opacity:1 } }
.ntf{ position:absolute; z-index:9; pointer-events:none; font-weight:900; animation:ntUp 1.6s ease-out forwards; text-shadow:0 .2rem .5rem rgba(0,0,0,.15) }
@keyframes ntUp{ 0%{ transform:translateY(0) rotate(-8deg) scale(.7); opacity:0 } 15%{ opacity:1 } 100%{ transform:translateY(-14rem) rotate(10deg) scale(1.1); opacity:0 } }
.vj .fin-t{ position:absolute; left:0; right:0; top:8.6rem; text-align:center; z-index:4; pointer-events:none }
.vj .fin-t small{ display:block; font:800 3rem/1 var(--fd); color:var(--ink) }
.vj .keys{ display:flex; justify-content:center; gap:.9rem; margin-top:1rem; pointer-events:auto }
.vj .key{ position:relative; width:10.6rem; height:12.6rem; border-radius:1.4rem; background:linear-gradient(180deg,#FFFFFF,#E2ECFB); box-shadow:0 .7rem 0 var(--kc), 0 1.4rem 2.4rem rgba(31,60,120,.25); transition:transform .12s, box-shadow .12s; font:900 7.6rem/1 var(--fd); color:var(--ink); display:flex; align-items:center; justify-content:center; padding-bottom:.8rem }
.vj .key:hover{ transform:translateY(-.5rem) }
.vj .key.dn, .vj .key:active{ transform:translateY(.6rem); box-shadow:0 .1rem 0 var(--kc), 0 .5rem 1rem rgba(31,60,120,.25) }
.vj .key.onda{ animation:onda .6s cubic-bezier(.3,1.6,.5,1) both }
@keyframes onda{ 0%{ transform:translateY(0) } 35%{ transform:translateY(.7rem) } 100%{ transform:translateY(0) } }
.vj .fin-sub{ margin-top:1.4rem; font:700 1.9rem var(--ft); color:var(--tx) }
`);

/* ---------- ruta y paradas ---------- */
const VJ_D = 'M -80 522 C 80 470, 220 470, 340 522 S 580 574, 720 522 S 960 470, 1100 522 S 1340 574, 1520 512';
const VJ_FR = ALERTAS.map((a,i)=>0.11+i*0.0988);            // posición de cada parada a lo largo de la ruta
const NOTAS_COL = ['#F6BD4B','#3AA56D','#E5626A','#5B91E3','#FFD25E'];

/* dibujos de cada parada (origen: centro de la base; se dibujan hacia arriba) */
const VJ_LM = {
  1: `<g>${[2,1,0].map(k=>`<g transform="translate(0 ${-k*13-8})"><rect x="-32" y="-6" width="64" height="13" fill="#E4A62E"/><ellipse cy="7" rx="32" ry="10" fill="#E4A62E"/><ellipse cy="-6" rx="32" ry="10" fill="#F6BD4B" stroke="#D99A1E" stroke-width="2.5"/></g>`).join('')}
      <text y="-33" text-anchor="middle" font-size="21" font-weight="800" fill="#A8730F">$</text>
      <g class="vj-bob"><circle cx="32" cy="-78" r="15" fill="#FFD25E" stroke="#D99A1E" stroke-width="2.5"/><text x="32" y="-71" text-anchor="middle" font-size="18" font-weight="800" fill="#A8730F">$</text></g></g>`,
  2: `<g><g><circle cx="-36" cy="-58" r="10" fill="#F1C7A3"/><path d="M-50 -30a14 16 0 0 1 28 0z" fill="#E5626A"/></g>
      <g><circle cx="0" cy="-70" r="10" fill="#E2AC85"/><path d="M-14 -42a14 16 0 0 1 28 0z" fill="#3AA56D"/></g>
      <g><circle cx="36" cy="-58" r="10" fill="#F1C7A3"/><path d="M22 -30a14 16 0 0 1 28 0z" fill="#F6BD4B"/></g>
      <ellipse cx="0" cy="-20" rx="52" ry="14" fill="#fff" stroke="#9DB4DA" stroke-width="3"/><rect x="-6" y="-8" width="12" height="8" fill="#9DB4DA"/>
      <g><rect x="-24" y="-114" width="48" height="26" rx="11" fill="#fff" stroke="#5B91E3" stroke-width="3"/><path d="M-6 -88l-6 10 14 -10z" fill="#fff" stroke="#5B91E3" stroke-width="3" stroke-linejoin="round"/>
        <circle class="vj-dot" style="--d:0s" cx="-11" cy="-101" r="3.4" fill="#5B91E3"/><circle class="vj-dot" style="--d:.25s" cx="0" cy="-101" r="3.4" fill="#5B91E3"/><circle class="vj-dot" style="--d:.5s" cx="11" cy="-101" r="3.4" fill="#5B91E3"/></g></g>`,
  3: `<g><rect x="-5" y="-70" width="10" height="70" rx="3" fill="#8093B8"/><rect x="-21" y="-120" width="42" height="66" rx="14" fill="#34456E"/>
      <circle class="vr" cx="0" cy="-104" r="9.5" fill="#F26B71"/><circle class="vy" cx="0" cy="-87" r="9.5" fill="#FFD04D"/><circle class="vg" cx="0" cy="-70" r="9.5" fill="#4FD693"/>
      <rect x="-15" y="-46" width="30" height="9" rx="3" fill="#5B6E96"/></g>`,
  4: `<g><path d="M-62 -6h124" stroke="#8093B8" stroke-width="4" stroke-linecap="round"/><path d="M-62 -13h124" stroke="#9CC4FF" stroke-width="3" stroke-dasharray="8 6"/>
      <g class="vj-tram"><use href="#i-art" x="-60" y="-32" width="120" height="24.4"/></g></g>`,
  5: `<g><path d="M-30 0L-22 -30M30 0L22 -30" stroke="#8093B8" stroke-width="5" stroke-linecap="round"/><rect x="-48" y="-98" width="96" height="70" rx="10" fill="#fff" stroke="#8093B8" stroke-width="4"/>
      ${[['#5B91E3',46],['#3AA56D',32],['#F6BD4B',52],['#E5626A',38]].map(([c,h],k)=>`<rect class="vj-bar" style="--d:${k*.4}s" x="${-35+k*20}" y="${-36-h}" width="13" height="${h}" rx="3" fill="${c}"/>`).join('')}</g>`,
  6: `<g class="vj-doc"><path d="M-30 -98h44l16 16v82h-60z" fill="#fff" stroke="#8093B8" stroke-width="4" stroke-linejoin="round"/><path d="M14 -98v16h16" fill="#DCE7F8" stroke="#8093B8" stroke-width="3" stroke-linejoin="round"/>
      <path d="M-20 -70h30M-20 -56h36M-20 -42h24" stroke="#B5C6E4" stroke-width="5" stroke-linecap="round"/><path d="M6 -18l-5 18 11 -6 11 6 -5 -18z" fill="#E5626A" opacity=".85"/>
      <circle cx="12" cy="-24" r="13" fill="#E5626A"/><path d="M6 -24l4 4 8 -9" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>`,
  7: `<g><rect x="-6" y="-58" width="12" height="58" rx="4" fill="#A0714A"/><path d="M0 -42l-22 -20M0 -46l20 -16" stroke="#A0714A" stroke-width="5" stroke-linecap="round"/>
      <circle cx="0" cy="-90" r="30" fill="#F2B0C9"/><circle cx="-26" cy="-74" r="22" fill="#F6C4D7"/><circle cx="27" cy="-75" r="23" fill="#F6C4D7"/><circle cx="6" cy="-106" r="21" fill="#FBD9E6"/>
      <g fill="#fff" opacity=".7"><circle cx="-10" cy="-96" r="4"/><circle cx="16" cy="-84" r="3.5"/><circle cx="-30" cy="-72" r="3.5"/><circle cx="26" cy="-104" r="3"/></g>
      ${[[-26,0,-14],[10,1.6,16],[30,3.2,-10]].map(([x,d,dx])=>`<ellipse class="vj-pet" style="--d:${d}s;--dx:${dx}px" cx="${x}" cy="-52" rx="4.5" ry="7" fill="#F2A9C4"/>`).join('')}
      <path d="M36 -26q20 -2 26 -22q-22 0 -26 22z" fill="#3AA56D"/><path d="M38 -28l16 -14" stroke="#2C8455" stroke-width="2.5" stroke-linecap="round"/></g>`,
  8: `<g><rect x="-26" y="-10" width="52" height="10" rx="3" fill="#8093B8"/><rect x="-6" y="-108" width="12" height="100" fill="#F6BD4B"/>
      <path d="M-6 -104l12 17M-6 -87l12 17M-6 -70l12 17M-6 -53l12 17M-6 -36l12 17M-6 -19l12 17" stroke="#C58F1F" stroke-width="2.5"/>
      <rect x="-60" y="-118" width="116" height="9" rx="3" fill="#F6BD4B"/><rect x="36" y="-112" width="22" height="18" rx="3" fill="#8093B8"/><path d="M-6 -118L-34 -109M6 -118L30 -109" stroke="#C58F1F" stroke-width="2.5"/>
      <g><line x1="-42" y1="-109" x2="-42" y2="-66" stroke="#34456E" stroke-width="2.5"/><rect x="-54" y="-66" width="24" height="17" rx="3" fill="#E5626A"/>
        <animateTransform attributeName="transform" type="rotate" values="-7 -42 -109;7 -42 -109;-7 -42 -109" dur="3.6s" repeatCount="indefinite"/></g>
      <path d="M34 -8l-9 -24h18z" fill="#F26A1B"/><rect x="26" y="-13" width="18" height="5" fill="#fff"/></g>`,
  9: `<g><rect x="-28" y="-26" width="56" height="26" rx="6" fill="#DDE8F8" stroke="#8FA6CF" stroke-width="3"/><circle cx="-15" cy="-13" r="3.6" fill="#3AA56D"/><circle cx="-5" cy="-13" r="3.6" fill="#F6BD4B"/><rect x="7" y="-17" width="15" height="7" rx="2" fill="#8FA6CF"/>
      <rect x="-4" y="-84" width="8" height="60" fill="#8093B8"/><g transform="rotate(-24 0 -88)"><path d="M-30 -104Q0 -60 30 -104z" fill="#fff" stroke="#8093B8" stroke-width="3.5" stroke-linejoin="round"/></g>
      <circle class="blk" cx="0" cy="-88" r="5.5" fill="#E5626A"/>
      <path class="sg" style="--d:0s" d="M22 -112a18 18 0 0 1 14 14"/><path class="sg" style="--d:.4s" d="M22 -126a32 32 0 0 1 28 28"/><path class="sg" style="--d:.8s" d="M22 -140a46 46 0 0 1 42 42"/></g>`
};

/* fondo: cordillera, colinas, ciudad y árboles */
const VJ_BG = () => {
  let s=7; const rnd=()=>{ s=(s*16807)%2147483647; return (s-1)/2147483646; };
  let b=''; for(let x=8; x<1440; ){ const bw=34+rnd()*46, bh=34+rnd()*62, y=412-bh;
    b+=`<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${bw.toFixed(0)}" height="${bh.toFixed(0)}" rx="4" fill="#F8FBFF"/><rect x="${(x+bw*.72).toFixed(0)}" y="${y.toFixed(0)}" width="${(bw*.28).toFixed(0)}" height="${bh.toFixed(0)}" rx="3" fill="#DBE6F6"/><rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${bw.toFixed(0)}" height="7" rx="3" fill="#C6D7F0"/>`;
    for(let wy=y+16; wy<404; wy+=15) for(let wx=x+7; wx<x+bw*.66; wx+=12) if(rnd()<.34) b+=`<rect x="${wx.toFixed(0)}" y="${wy.toFixed(0)}" width="6" height="7" rx="1.5" fill="#A9C4EA" opacity=".7"/>`;
    x+=bw+4+rnd()*14; }
  const xs=VJ_XS||[]; let t='';
  for(let i=0;i<26;i++){ const x=30+i*56+rnd()*30; if(xs.some(p=>Math.abs(p-x)<86)) continue; const y=616+rnd()*14, r=15+rnd()*10, pink=rnd()<.28;
    t+=`<g transform="translate(${x.toFixed(0)} ${y.toFixed(0)})"><rect x="-3.5" y="-${(r*.9).toFixed(0)}" width="7" height="${(r*.9).toFixed(0)}" fill="#A0714A"/><circle cy="-${(r*1.25).toFixed(0)}" r="${r.toFixed(0)}" fill="${pink?'#F4B9CF':'#9ED4B0'}"/><circle cx="${(r*.3).toFixed(0)}" cy="-${(r*1.4).toFixed(0)}" r="${(r*.55).toFixed(0)}" fill="${pink?'#FADCE8':'#BDE6C9'}"/></g>`; }
  return `<defs><linearGradient id="vjTierra" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D8EEDE"/><stop offset=".5" stop-color="#E5F1F7"/><stop offset="1" stop-color="#EEF5FD"/></linearGradient></defs>
    <g class="nube" style="--dur:130s;--dl:-40s" transform="translate(0 70)" opacity=".92"><path d="M0 44a26 26 0 0 1 32-24a34 34 0 0 1 62 8a22 22 0 0 1 8 44h-92a20 20 0 0 1-10-28z" fill="#fff"/></g>
    <g class="nube" style="--dur:170s;--dl:-110s" transform="translate(0 160)" opacity=".8"><path d="M0 34a20 20 0 0 1 26-18a28 28 0 0 1 50 8a18 18 0 0 1 6 36h-76a16 16 0 0 1-6-26z" fill="#fff"/></g>
    <g class="nube" style="--dur:150s;--dl:-70s" transform="translate(0 40)" opacity=".85"><path d="M0 34a20 20 0 0 1 26-18a28 28 0 0 1 50 8a18 18 0 0 1 6 36h-76a16 16 0 0 1-6-26z" fill="#fff"/></g>
    <path d="M0 322L0 266C70 240 120 216 178 238C240 262 284 216 346 206C416 196 454 248 522 252C594 256 642 208 718 192C792 176 832 216 902 228L940 178L966 150L994 198L1020 180L1052 228C1122 238 1178 202 1252 190C1332 178 1392 216 1440 234L1440 322Z" fill="#CADCF4"/>
    <path d="M966 150L948 180L958 174L968 186L980 174L992 182L978 164Z" fill="#fff" opacity=".95"/>
    <path d="M0 356C120 322 200 334 300 350C420 370 500 326 620 324C760 322 830 370 960 364C1080 358 1160 322 1280 330C1350 334 1400 350 1440 344L1440 430L0 430Z" fill="#C4E4D2"/>
    <path d="M0 392C160 370 300 384 460 380C640 376 780 396 960 384C1120 374 1290 388 1440 376L1440 730L0 730Z" fill="url(#vjTierra)"/>
    <g opacity=".9">${b}</g>
    ${t}`;
};

let VJ_XS = null;

/* monta el viaje dentro de `root`. opts: tipo 'portada'|'fin', cover, barra */
function montarViaje(root, {tipo='portada', cover='', barra=''}={}){
  root.innerHTML=`<div class="vj" data-tipo="${tipo}">
    <svg class="cap" id="vjBg" viewBox="0 0 1440 730" preserveAspectRatio="xMidYMid meet" aria-hidden="true"></svg>
    <svg class="cap" id="vjFg" viewBox="0 0 1440 730" preserveAspectRatio="xMidYMid meet">
      <path id="vjRB" d="${VJ_D}" fill="none" stroke="#6B7EA6" stroke-width="72" stroke-linecap="round"/>
      <path id="vjRA" d="${VJ_D}" fill="none" stroke="#9AABCE" stroke-width="62" stroke-linecap="round"/>
      <path id="vjRP" d="${VJ_D}" fill="none" stroke="#FFD25E" stroke-width="12" stroke-linecap="round" opacity=".95"/>
      <path class="vj-dash" d="${VJ_D}"/>
      <g id="vjParadas"></g><g id="vjNotas"></g>
      <g id="vjBus"><rect x="-84" y="-44" width="168" height="84" fill="transparent"/>
        <ellipse cx="0" cy="28" rx="70" ry="7" fill="rgba(31,60,120,.25)"/>
        <rect x="-70" y="-28" width="140" height="50" rx="15" fill="#fff" stroke="#C4D3EC" stroke-width="2"/>
        <path d="M-70 5H70V9a13 13 0 0 1-13 13H-57A13 13 0 0 1-70 9Z" fill="#3AA56D"/><rect x="-70" y="0" width="140" height="5" fill="#F6BD4B"/>
        <g fill="#9DC1F2"><rect x="-58" y="-20" width="20" height="18" rx="5"/><rect x="-33" y="-20" width="20" height="18" rx="5"/><rect x="-8" y="-20" width="20" height="18" rx="5"/><rect x="17" y="-20" width="20" height="18" rx="5"/><path d="M42-20h12q8 0 10 9l1 9H42z"/></g>
        <rect x="-26" y="-36" width="52" height="11" rx="5.5" fill="#3866B5"/><text x="0" y="-26.5" text-anchor="middle" font-size="18" fill="#fff" font-weight="800">♪</text>
        <rect x="66" y="7" width="7" height="8" rx="2" fill="#FFE9A6"/>
        <circle cx="-38" cy="24" r="12" fill="#34456E"/><circle cx="38" cy="24" r="12" fill="#34456E"/>
        <g class="rueda"><circle cx="-38" cy="24" r="5" fill="#DDE6F6"/><path d="M-38 19v10M-43 24h10" stroke="#34456E" stroke-width="2"/></g><g class="rueda"><circle cx="38" cy="24" r="5" fill="#DDE6F6"/><path d="M38 19v10M33 24h10" stroke="#34456E" stroke-width="2"/></g></g>
    </svg>
    <div class="logos"><img src="img/logo-color.png" alt="TransMusical SETP"><img class="alc" src="img/alcaldia.png" alt="Alcaldía de Ibagué"></div>
    ${cover}
    ${tipo==='portada'?`<aside class="vj-f" id="vjF"></aside>`:''}
    <div class="cbar">${barra}</div>
  </div>`;
  const el=$('.vj',root), fg=$('#vjFg',el), path=$('#vjRA',el), L=path.getTotalLength();
  /* muestras de la ruta para proyectar el arrastre */
  const N=720, PT=Array.from({length:N+1},(_,k)=>path.getPointAtLength(L*k/N));
  const pt=s=>{ if(s<0){ const a=PT[0], b=PT[1], d=Math.hypot(b.x-a.x,b.y-a.y); return {x:a.x+(b.x-a.x)/d*s,y:a.y+(b.y-a.y)/d*s}; }
    if(s>L){ const a=PT[N-1], b=PT[N], d=Math.hypot(b.x-a.x,b.y-a.y); return {x:b.x+(b.x-a.x)/d*(s-L),y:b.y+(b.y-a.y)/d*(s-L)}; } return path.getPointAtLength(s); };
  const LS=VJ_FR.map(f=>f*L), PS=LS.map(pt);
  VJ_XS=PS.map(p=>p.x);
  $('#vjBg',el).innerHTML=VJ_BG();
  /* paradas */
  $('#vjParadas',el).innerHTML=ALERTAS.map((a,i)=>{ const c=CAT[a.cat], p=PS[i];
    return `<g class="pa f-${a.cat}" data-n="${a.n}" data-i="${i}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})" style="--x:${p.x.toFixed(1)}px;--y:${p.y.toFixed(1)}px;--c:${c.c};--cx:${c.tx};--d:${(i*.28).toFixed(2)}s" tabindex="0" role="button" aria-label="Alerta ${a.n}: ${a.titulo}">
      <ellipse class="pad" cx="0" cy="-36" rx="66" ry="14"/><g transform="translate(0 -34) scale(.9)"><g class="lm">${VJ_LM[a.n]}</g></g>
      <circle class="ping" cx="0" cy="0" r="20"/><circle class="bd" cx="0" cy="0" r="22"/><text class="bn" y="8.5">${a.n}</text>
      <g class="ck"><circle cx="18" cy="-18" r="10" fill="#3AA56D" stroke="#fff" stroke-width="2.5"/><path d="M13.5 -18l3.4 3.4 6 -7" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g transform="translate(0 66)"><rect class="pill" x="-70" y="-22" width="140" height="44" rx="22"/><text class="lb" y="7">${a.corto}</text>${a.act?'<circle class="nv" cx="0" cy="-22" r="7"/>':''}</g>
      <rect x="-66" y="-150" width="132" height="240" fill="transparent"/></g>`; }).join('');
  $$('.pa',el).forEach((g,i)=>{ const t=$('.lb',g), w=Math.max(120,(t.getComputedTextLength()||90)+44), r=$('.pill',g), nv=$('.nv',g);
    r.setAttribute('x',-w/2); r.setAttribute('width',w); if(nv) nv.setAttribute('cx',w/2-8); });
  /* ficha */
  const F=$('#vjF',el); let cur=-1, prev=null;
  const ficha=i=>{ if(!F) return; const a=i>=0?ALERTAS[i]:null;
    if(!a){ F.style.setProperty('--c','#1F3C78'); F.innerHTML=`<div class="fh"><span class="fb">▶</span><span class="fk">Recorrido de las 9 alertas</span></div><h3>Sube al bus</h3><p>Deja que recorra la ruta, arrástralo hasta la parada que quieras o toca cualquier parada del mapa.</p>`; return; }
    F.style.setProperty('--c',CAT[a.cat].c); F.style.setProperty('--cx',CAT[a.cat].tx);
    F.innerHTML=`<div class="fh"><span class="fb">${a.n}</span><span class="fk">Parada ${a.n} de 9 · ${CAT[a.cat].n}</span>${a.act?`<i class="fu">Nueva</i>`:''}</div><h3>${a.titulo}</h3><p>${(a.frase||a.hechos[0]).replace(/\*/g,'')}</p><button class="btn" id="vjGo">Ver la alerta ${a.n} →</button>`;
    $('#vjGo',F).onclick=()=>ir(idxAlerta(a.n)); F.classList.remove('cambia'); void F.offsetWidth; F.classList.add('cambia'); };
  if(F) ficha(-1);
  /* estado del bus */
  const bus=$('#vjBus',el), prog=$('#vjRP',el), notas=$('#vjNotas',el);
  prog.style.strokeDasharray=L+' '+(L+200);
  let s=tipo==='fin'?LS[8]:-70, modo=tipo==='fin'?'manual':'auto', pausa=0, ultimo=performance.now(), idle=0, sigNota=0, mueve=false;
  const colocar=()=>{ const p=pt(s), q=pt(s+3), ang=Math.atan2(q.y-p.y,q.x-p.x)*180/Math.PI;
    bus.setAttribute('transform',`translate(${p.x.toFixed(1)} ${(p.y-4).toFixed(1)}) rotate(${clampA(ang).toFixed(1)})`);
    prog.style.strokeDashoffset=L-clamp(s,0,L);
    $$('.pa',el).forEach((g,i)=>{ g.classList.toggle('vis',s>=LS[i]-4); });
    let k=-1; LS.forEach((l,i)=>{ if(Math.abs(s-l)<26) k=i; });
    if(k!==cur){ cur=k; $$('.pa',el).forEach((g,i)=>g.classList.toggle('on',i===k)); if(k>=0){ prev=k; ficha(k); } } };
  const clampA=a=>Math.max(-40,Math.min(40,a));
  const V=118;
  const cuadro=t=>{ const dt=Math.min(.2,(t-ultimo)/1000); ultimo=t; let anda=false;
    if(modo==='auto'){ if(t>=pausa){ const antes=s; s+=V*dt; anda=true;
        const k=LS.findIndex(l=>antes<l&&s>=l); if(k>=0){ s=LS[k]; pausa=t+2600; }
        if(s>L+90){ s=-70; } } }
    else if(mueve) anda=true;
    if(anda && t>sigNota){ sigNota=t+520; const p=pt(s), e=document.createElementNS(NSVG,'text'); e.setAttribute('class','vj-nt'); e.setAttribute('x',(p.x-20).toFixed(0)); e.setAttribute('y',(p.y-44).toFixed(0));
      e.style.setProperty('--dx',((Math.random()-.5)*50).toFixed(0)+'px'); e.setAttribute('fill',NOTAS_COL[(Math.random()*5)|0]); e.textContent=['♪','♫','♩','♬'][(Math.random()*4)|0]; notas.append(e); setTimeout(()=>e.remove(),2000); }
    colocar(); raf=requestAnimationFrame(cuadro); };
  let raf=requestAnimationFrame(cuadro); limpiar.push(()=>cancelAnimationFrame(raf), ()=>clearTimeout(idle));
  /* arrastrar el bus por la ruta */
  const cercano=p=>{ let mi=0,md=1e12; PT.forEach((q,k)=>{ const d=(q.x-p.x)**2+(q.y-p.y)**2; if(d<md){ md=d; mi=k; } }); return L*mi/N; };
  arrastrar(bus,{ inicio:()=>{ modo='manual'; mueve=true; bus.classList.add('arr'); clearTimeout(idle); },
    mueve:e=>{ s=cercano(svgPt(fg,e)); colocar(); },
    fin:()=>{ mueve=false; bus.classList.remove('arr'); actualizaBtn(); if(tipo==='portada'){ clearTimeout(idle); idle=setTimeout(()=>{ if(modo==='manual'){ modo='auto'; pausa=0; actualizaBtn(); } },14000); } } });
  const actualizaBtn=()=>{ const b=$('#vjPlay',el); if(b) b.innerHTML=modo==='auto'?'❚❚ Pausar recorrido':'▶ Recorrido automático'; };
  const bp=$('#vjPlay',el); if(bp) bp.onclick=()=>{ modo=modo==='auto'?'manual':'auto'; pausa=0; if(modo==='auto'&&s>=L-20) s=-70; actualizaBtn(); }; actualizaBtn();
  /* paradas: entrada, clic, hover con vista previa, filtro por categoría */
  $$('.pa',el).forEach((g,i)=>{ g.style.setProperty('--e',(.4+i*.09)+'s'); g.classList.add('entra'); setTimeout(()=>{ g.classList.remove('entra'); },1400+i*90);
    const n=+g.dataset.n, a=ALERTAS[n-1];
    g.onclick=()=>ir(idxAlerta(n)); g.onkeydown=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); ir(idxAlerta(n)); } };
    g.onmouseenter=()=>{ if(F) ficha(i); };
    g.onmousemove=e=>{ if(!F) verTip(`<b>Alerta ${n} · ${a.titulo}</b><br><span style="opacity:.85">${CAT[a.cat].n}${a.act?' · actualizada '+a.corte:''}</span><br>${(a.frase||a.hechos[0]).replace(/\*/g,'')}`,e); };
    g.onmouseleave=()=>{ ocultaTip(); if(F) ficha(cur>=0?cur:(prev!==null?prev:-1)); }; });
  $$('.lg-f button',el).forEach(b=>{ const on=()=>{ el.dataset.f=b.dataset.k; b.classList.add('on'); $$('.pa',el).forEach(g=>g.classList.toggle('f',g.classList.contains('f-'+b.dataset.k))); }, off=()=>{ el.removeAttribute('data-f'); b.classList.remove('on'); };
    b.onmouseenter=on; b.onmouseleave=off; b.onfocus=on; b.onblur=off; });
  limpiar.push(ocultaTip);
  return { el, saltar:k=>{ modo='manual'; s=LS[k]; }, colocar };
}

const leyendaCat = () => ['critica','moderada','leve'].map(k=>{ const n=ALERTAS.filter(a=>a.cat===k).length; return `<button data-k="${k}" style="--c:${CAT[k].c};--cx:${CAT[k].tx}"><i></i>${n} ${CAT[k].n.toLowerCase()}${n>1?'s':''}</button>`; }).join('');

/* ---------- trivia: «¿Sabías que…?» ---------- */
const TRIVIA = [
  { n:3, q:'¿Cuántas intersecciones de la Fase I ya están en servicio y seguimiento?', o:['22','30','34'], c:1, x:'30 de 34 al corte del 20 de septiembre. El plazo del contrato vence el 29.' },
  { n:5, q:'¿Qué parte de sus aportes ha desembolsado el Municipio?', o:['56 %','80 %','100 %'], c:2, x:'El 100 %: $80,8 mil M entre 2021 y 2026.' },
  { n:4, q:'¿Cuántos viajes por día proyecta la propuesta del tranvía?', o:['32.106','321.065','3.210.650'], c:1, x:'321.065 viajes por día. Aun así, el CONPES 4017 no permite el tranvía.' },
  { n:9, q:'¿Cuántos sistemas forman el paquete tecnológico del SETP?', o:['2','3','5'], c:1, x:'Tres: gestión y control de flota, información al usuario y recaudo.' },
  { n:7, q:'¿Qué componentes del PMA están en revisión?', o:['Solo el ambiental','Ambiental, social y SST','Ninguno todavía'], c:1, x:'Ambiental, social y SST. El social concentra las observaciones.' },
  { n:1, q:'¿En qué estado está el modelo financiero del SETP?', o:['Sin iniciar','Con resultados','Suspendido'], c:1, x:'Ya tiene resultados y se calibra para dimensionar el FET.' },
  { n:8, q:'¿Qué obtuvieron el 22 de septiembre Ferrocarril, la ciclorruta y los paraderos Tipo I y II?', o:['Elegibilidad de la UMUS','Contrato de obra','Acta de inicio'], c:0, x:'Elegibilidad. Paraderos pasa a Junta Directiva para iniciar la etapa precontractual.' },
  { n:6, q:'¿En qué etapa está el acto del componente operacional?', o:['Ya expedido','Borrador en revisión','Sin iniciar'], c:1, x:'Tiene borrador y está en revisión; sigue el trámite de adopción.' },
  { n:2, q:'¿Qué norma fija los requisitos que se pidieron a los transportadores?', o:['Decreto 1079','CONPES 4017','Ley 336'], c:0, x:'El Decreto 1079: se pidió a las empresas información sobre su cumplimiento.' }
];
function trivia(root){
  const ov=document.createElement('div'); ov.className='trv';
  ov.innerHTML=`<div class="trv-c"><button class="trv-cl" aria-label="Cerrar">×</button><div class="trv-k"><span>¿Sabías que…?</span><span id="tv-p"></span></div><div class="trv-q" id="tv-q"></div><div class="trv-o" id="tv-o"></div><div class="trv-x" id="tv-x"></div><div class="trv-b" id="tv-b"></div></div>`;
  root.append(ov); let i=Math.floor(Math.random()*TRIVIA.length), ok=0, tot=0;
  const pinta=()=>{ const t=TRIVIA[i%TRIVIA.length]; $('#tv-p',ov).textContent=tot?`Aciertos: ${ok} de ${tot}`:'';
    $('#tv-q',ov).textContent=t.q; $('#tv-x',ov).innerHTML=''; $('#tv-b',ov).innerHTML='';
    $('#tv-o',ov).innerHTML=t.o.map((o,k)=>`<button data-k="${k}">${o}</button>`).join('');
    $$('#tv-o button',ov).forEach(b=>b.onclick=()=>{ const k=+b.dataset.k; tot++; if(k===t.c) ok++; $$('#tv-o button',ov).forEach(x=>{ x.disabled=true; if(+x.dataset.k===t.c) x.classList.add('ok'); }); if(k!==t.c) b.classList.add('no');
      $('#tv-x',ov).innerHTML=`<b>${k===t.c?'¡Exacto! ':'Casi. '}</b>${t.x}`; $('#tv-p',ov).textContent=`Aciertos: ${ok} de ${tot}`;
      $('#tv-b',ov).innerHTML=`<button class="btn sol" id="tv-s">Otra pregunta</button><button class="btn" id="tv-v">Ver la alerta ${t.n}</button>`;
      $('#tv-s',ov).onclick=()=>{ i++; pinta(); }; $('#tv-v',ov).onclick=()=>ir(idxAlerta(t.n)); }); };
  const abre=()=>{ pinta(); ov.classList.add('on'); }, cierra=()=>ov.classList.remove('on');
  $('.trv-cl',ov).onclick=cierra; ov.onclick=e=>{ if(e.target===ov) cierra(); };
  return abre;
}

/* ---------- confeti, notas y sonido ---------- */
function confeti(host,n=70){ for(let k=0;k<n;k++){ const e=document.createElement('i'); e.className='cft';
    const c=NOTAS_COL[k%NOTAS_COL.length], w=.7+Math.random()*.9; e.style.cssText=`left:${(Math.random()*118).toFixed(1)}rem;width:${w.toFixed(2)}rem;height:${(w*1.6).toFixed(2)}rem;background:${c};border-radius:${k%3?'.15rem':'50%'};--dx:${((Math.random()-.5)*16).toFixed(1)}rem;--rot:${(Math.random()*900-450)|0}deg;--dur:${(3+Math.random()*2.6).toFixed(2)}s;--dl:${(Math.random()*.9).toFixed(2)}s`;
    host.append(e); setTimeout(()=>e.remove(),7500); } }
function notaFlota(host,xr,yr){ const e=document.createElement('span'); e.className='ntf'; e.textContent=['♪','♫','♩','♬'][(Math.random()*4)|0]; e.style.cssText=`left:${xr}rem;top:${yr}rem;color:${NOTAS_COL[(Math.random()*5)|0]};font-size:${(2.4+Math.random()*2).toFixed(1)}rem`; host.append(e); setTimeout(()=>e.remove(),1700); }
let AUDIO=null;
function tono(f){ try{ AUDIO=AUDIO||new (window.AudioContext||window.webkitAudioContext)(); const a=AUDIO, t=a.currentTime, o=a.createOscillator(), o2=a.createOscillator(), g=a.createGain();
    o.type='triangle'; o2.type='sine'; o.frequency.value=f; o2.frequency.value=f*2; g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(.2,t+.015); g.gain.exponentialRampToValueAtTime(.0001,t+1.1);
    o.connect(g); o2.connect(g); g.connect(a.destination); o.start(t); o2.start(t); o.stop(t+1.2); o2.stop(t+1.2); }catch(e){} }

/* ---- ajustes: ilustración como marca de agua, CTA de la trivia ---- */
estilo(`
.vj #vjBg{ filter:saturate(.4) blur(2.4px); opacity:.72 }
.vj .pa .lm, .vj .pa .pad{ filter:saturate(.55); opacity:.8; transition:transform .35s cubic-bezier(.34,1.6,.5,1), opacity .3s, filter .3s }
.vj .pa:hover .lm, .vj .pa.on .lm{ filter:none; opacity:1 }
.vj:before{ background:radial-gradient(circle at 88% 13%,rgba(255,236,180,.7) 0,rgba(255,236,180,0) 24rem),radial-gradient(circle at 10% 34%,rgba(255,255,255,.75) 0,rgba(255,255,255,0) 32rem) }
.vj .cbar .btn.cta{ position:relative; background:linear-gradient(180deg,#FFDD7A,#FFC83D); color:var(--ink); font-size:2.05rem; padding:1.25rem 3rem; box-shadow:0 .5rem 1.6rem rgba(255,196,61,.6), inset 0 0 0 .25rem rgba(255,255,255,.55); animation:ctaPulso 2.2s ease-in-out infinite }
.vj .cbar .btn.cta:hover{ background:linear-gradient(180deg,#FFE594,var(--sol)) }
@keyframes ctaPulso{ 0%,100%{ transform:scale(1); box-shadow:0 .5rem 1.6rem rgba(255,196,61,.55), 0 0 0 0 rgba(255,210,94,.7) } 50%{ transform:scale(1.045); box-shadow:0 .7rem 2rem rgba(255,196,61,.7), 0 0 0 1.4rem rgba(255,210,94,0) } }
.vj .cta-tip{ position:absolute; bottom:8.2rem; font:800 1.6rem var(--fd); color:var(--ink); background:#fff; padding:.6rem 1.4rem; border-radius:1.4rem; box-shadow:0 .6rem 1.6rem rgba(31,60,120,.22); z-index:8; animation:tipFlota 2.2s ease-in-out infinite; pointer-events:none; white-space:nowrap }
.vj .cta-tip:after{ content:""; position:absolute; left:50%; bottom:-.7rem; width:1.4rem; height:1.4rem; background:#fff; transform:translateX(-50%) rotate(45deg) }
@keyframes tipFlota{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-.5rem) } }
`);
