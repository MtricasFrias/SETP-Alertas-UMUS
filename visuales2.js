/* =====================================================================
   VISUALES 2/2 — ART · desembolsos · actos administrativos · PMA · Gantt · mapa · tecnología
   ===================================================================== */
estilo(`
/* ---------- ART ---------- */
.app{display:flex; flex-direction:column; gap:.9rem; height:100%}
.app-k{display:flex; gap:2rem; padding:.2rem .3rem}
.app-k .kpi b{font-size:2rem}
.app-m{flex:1; min-height:0; display:grid; grid-template-columns:minmax(0,1fr) 21rem; gap:1.2rem}
.app-d{position:relative; border-radius:1rem; background:rgba(0,10,40,.35); border:1px solid var(--line); display:flex; flex-direction:column; min-height:0}
.app-t{display:flex; align-items:center; gap:.5rem; padding:.7rem .9rem; flex-wrap:wrap}
.app-t .chip{border-color:var(--c); color:var(--c)} .app-t .chip.on{background:var(--c); color:#fff}
.app-d svg{flex:1; min-height:0; width:100%}
.app-d .ln{fill:none; stroke-width:9; stroke-linecap:round; transition:opacity .3s; cursor:pointer}
.app-d .ln:hover{stroke-width:12}
.app-d .lbl{font-size:13px; font-weight:800; fill:#fff}
.app-d .bd{opacity:0; transition:opacity .4s; pointer-events:none}
.app-d.show .bd{opacity:1}
.app-d .bd rect{fill:#0B1E55; stroke:#F0A800; stroke-width:1.5}
.app-d .bd text{font-size:12px; font-weight:700; fill:#fff}
.app-d .bd line{stroke:#F0A800; stroke-width:1.5; stroke-dasharray:3 3}
.app-i{display:flex; flex-direction:column; gap:.8rem; min-height:0}
.app-i .box{padding:.9rem 1rem; border-radius:.9rem; background:var(--glass2); border:1px solid var(--line); font-size:.95rem; line-height:1.4}
.app-i .box h5{font-size:1.1rem; margin-bottom:.3rem}
.app-i .box small{display:block; color:var(--gold); letter-spacing:.14em; text-transform:uppercase; font-weight:800; font-size:.7rem; margin-bottom:.3rem}
.acl{display:flex; flex-direction:column; gap:.4rem}
.acl button{text-align:left; padding:.5rem .8rem; border-radius:.7rem; background:rgba(229,72,77,.14); border:1px solid rgba(229,72,77,.5); font-size:.86rem; font-weight:700; line-height:1.25}
.acl button:hover{background:rgba(229,72,77,.24)}
.acl button p{display:none; font-weight:400; margin-top:.35rem; color:#E7EEFF}
.acl button.on p{display:block}

.tlb{position:relative; height:12rem; margin:.2rem 0 .3rem}
.tlb .ax{position:absolute; left:2%; right:2%; top:50%; height:.34rem; border-radius:9px; background:linear-gradient(90deg,#4C8DFF,#E5484D,#1FBF5B,#F0A800)}
.tlb .nd{position:absolute; top:50%; width:1.7rem; height:1.7rem; margin:-.72rem 0 0 -.85rem; border-radius:50%; background:#0B1E55; border:.18rem solid var(--c,#7C8DB5); z-index:2; cursor:pointer; transition:.25s; font-size:.72rem; font-weight:900; display:flex; align-items:center; justify-content:center}
.tlb .nd.hecho{background:var(--c,#fff); color:#1B1200}
.tlb .nd.act{transform:scale(1.25); box-shadow:0 0 1.4rem var(--c,#fff)}
.tlb .fe{position:absolute; width:9rem; margin-left:-4.5rem; text-align:center; font-size:.85rem; line-height:1.22; color:var(--mut); transition:.25s; cursor:pointer}
.tlb .fe b{display:block; color:#fff; font-size:1rem}
.tlb .fe.act{color:#fff} .tlb .fe.act b{color:var(--gold)}
.tlb .gap{position:absolute; top:calc(50% - 1.5rem); font-size:.7rem; font-weight:800; color:#FFB4B6; background:rgba(229,72,77,.18); border:1px dashed var(--rojo); padding:.05rem .5rem; border-radius:.4rem; transform:translateX(-50%); white-space:nowrap}
.tlb .tram{position:absolute; top:calc(50% - 3rem); width:6.2rem; height:2rem; margin-left:-3.1rem; color:#C8F03C; cursor:grab; z-index:4; transition:left .6s cubic-bezier(.5,0,.2,1); touch-action:none; filter:drop-shadow(0 .3rem .5rem rgba(0,0,0,.5))}
.tlb .tram.arr{cursor:grabbing; transition:none}
.appb-b{display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.15fr); gap:1.1rem; flex:1; min-height:0}
.puertas{display:flex; flex-direction:column; gap:.5rem}
.puerta{display:flex; align-items:center; gap:.8rem; padding:.75rem 1rem; border-radius:.8rem; background:rgba(255,255,255,.06); border:1px solid var(--line); cursor:pointer; transition:.25s; font-size:1.02rem; font-weight:600}
.puerta:hover{background:rgba(255,255,255,.12)}
.puerta .ck{flex:none; width:1.6rem; height:1.6rem; border-radius:.5rem; border:.16rem solid var(--rojo); display:flex; align-items:center; justify-content:center; transition:.25s; font-weight:900}
.puerta.on{border-color:var(--verde)} .puerta.on .ck{background:var(--verde); border-color:var(--verde)} .puerta.on .ck:before{content:"✓"}
.puerta small{display:block; font-weight:400; color:var(--mut); font-size:.8rem}
.medidor{display:flex; align-items:center; gap:1rem; padding:.9rem 1.2rem; border-radius:.9rem; background:var(--glass2); border:1px solid var(--line)}
.medidor svg{width:4.6rem; height:4.6rem; flex:none}
.medidor circle{fill:none; stroke-width:9; transition:stroke-dasharray .6s, stroke .4s}
.medidor b{font-size:1.1rem} .medidor span{display:block; font-size:.88rem; color:var(--mut); margin-top:.15rem}
.tcomp{width:100%; border-collapse:collapse; font-size:1rem}
.tcomp td, .tcomp th{padding:.5rem .6rem; border-bottom:1px solid rgba(255,255,255,.1); text-align:left; vertical-align:top; line-height:1.3}
.tcomp th{font-size:.7rem; letter-spacing:.14em; text-transform:uppercase; color:var(--gold)}
.pill{display:inline-block; padding:.12rem .6rem; border-radius:99rem; font-size:.74rem; font-weight:800; white-space:nowrap}
.pill.ok{background:var(--verde); color:#04210F} .pill.pr{background:rgba(240,168,0,.22); color:#FFD56B; border:1px solid var(--gold)} .pill.sf{background:rgba(229,72,77,.2); color:#FFB4B6; border:1px dashed var(--rojo)}
.sub{letter-spacing:.2em; text-transform:uppercase; font-weight:800; font-size:.72rem; color:var(--gold)}

/* ---------- desembolsos ---------- */
.des{display:flex; flex-direction:column; gap:.9rem; height:100%}
.flujo{position:relative; height:5rem; border-radius:.9rem; background:rgba(0,10,40,.35); border:1px solid var(--line); overflow:hidden; flex:none}
.flujo .ln{position:absolute; left:14rem; right:12rem; height:.22rem; background:rgba(255,255,255,.16); top:1.4rem} .flujo .ln.b{top:3.5rem}
.flujo .ori{position:absolute; left:1rem; width:13rem; font-size:.82rem; font-weight:800; line-height:1.15; white-space:nowrap} .flujo .ori.b{top:2.7rem} .flujo .ori.a{top:.6rem}
.flujo .dst{position:absolute; right:1rem; top:.9rem; width:11rem; text-align:right; font-size:.85rem; font-weight:800; line-height:1.2; color:var(--gold)}
.flujo .mo{position:absolute; width:1.5rem; height:1.5rem; animation:viaja 3.6s linear infinite; opacity:0}
.flujo .mo svg{width:100%; height:100%}
@keyframes viaja{0%{left:13.5rem; opacity:0} 8%{opacity:1} 90%{opacity:1} 100%{left:calc(100% - 13rem); opacity:0}}
.des-g{flex:1; min-height:0; display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:1.2rem}
.gr{display:flex; flex-direction:column; min-height:0; padding:.9rem 1.1rem; border-radius:1rem; background:rgba(255,255,255,.05); border:1px solid var(--line)}
.gr h4{font-size:.78rem; letter-spacing:.16em; text-transform:uppercase; color:var(--gold); display:flex; align-items:center; gap:.6rem; flex-wrap:wrap}
.gr .tot{font-size:2rem; font-weight:900; line-height:1.1; margin:.2rem 0 .3rem}
.gr .tot small{font-size:.9rem; color:var(--mut); font-weight:600}
.gr svg{flex:1; min-height:0; width:100%}
.gr .bar rect{transition:y .9s cubic-bezier(.2,.8,.2,1), height .9s cubic-bezier(.2,.8,.2,1)}
.gr .ax text{font-size:12px; fill:#A9B8E0; font-weight:700; text-anchor:middle}
.gr .vl{font-size:12px; font-weight:800; fill:#fff; text-anchor:middle}
.gr .g{fill:#1FBF5B; font-size:11px; font-weight:900; text-anchor:middle}
.gnote{font-size:.8rem; color:var(--mut); line-height:1.35}
.tp{width:100%; border-collapse:collapse; font-size:1rem}
.tp th{font-size:.68rem; letter-spacing:.13em; text-transform:uppercase; color:var(--gold); text-align:left; padding:.4rem .5rem; border-bottom:1px solid var(--line)}
.tp td{padding:.8rem .5rem; border-bottom:1px solid rgba(255,255,255,.08); line-height:1.25; vertical-align:middle}
.tp tr{cursor:pointer; transition:.2s} .tp tbody tr:hover, .tp tr.sel{background:rgba(255,255,255,.12)}
.tp td.v{text-align:right; font-variant-numeric:tabular-nums; white-space:nowrap}
.fs4{display:flex; gap:.25rem}
.fs4 i{width:1.15rem; height:.5rem; border-radius:3px; background:rgba(255,255,255,.18)}
.fs4 i.on{background:var(--azul)} .fs4 i.cur{background:var(--gold); box-shadow:0 0 .6rem var(--gold)}
.cart{display:flex; flex-direction:column; gap:.5rem; margin-top:.5rem}
.cart button{display:flex; align-items:center; gap:.7rem; text-align:left; padding:.8rem 1rem; border-radius:.7rem; background:rgba(255,255,255,.06); border:1px solid var(--line); font-size:.98rem; line-height:1.25; transition:.2s}
.cart button.on{background:rgba(31,191,91,.18); border-color:var(--verde)}
.cart button b{margin-left:auto; white-space:nowrap}
.cart button small{display:block; color:var(--mut); font-size:.82rem}
.cbar{height:2rem; border-radius:.8rem; background:rgba(255,255,255,.12); overflow:hidden; margin-top:.5rem; position:relative}
.cbar i{display:block; height:100%; width:0; background:linear-gradient(90deg,#1FBF5B,#7CE6A6); border-radius:.8rem; transition:width .8s cubic-bezier(.2,.8,.2,1)}
.cbar span{position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:.8rem; font-weight:900; text-shadow:0 1px 3px #000}
.split{display:flex; height:2.2rem; border-radius:1.1rem; overflow:hidden; margin-top:.4rem; font-size:.9rem; font-weight:800; color:#04122E}
.split i{display:flex; align-items:center; justify-content:center; font-style:normal; width:0; transition:width 1.1s cubic-bezier(.2,.8,.2,1); white-space:nowrap; overflow:hidden}
.split #sm{color:#fff}
.dcard{margin-top:.7rem; padding:.9rem 1.1rem; border-radius:.8rem; background:rgba(0,0,0,.25); font-size:1rem; min-height:4.4rem}

/* ---------- actos (kanban) ---------- */
.act{position:relative; display:flex; flex-direction:column; gap:.9rem; height:100%}
.act-t{display:flex; align-items:center; gap:1.2rem; flex-wrap:wrap}
.pool{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:.6rem; min-height:9rem; padding:.7rem; border-radius:1rem; border:1px dashed var(--line); background:rgba(255,255,255,.03); align-content:start}
.pool:empty:after{content:"Todos los actos están ubicados"; grid-column:1/4; text-align:center; color:var(--mut); align-self:center}
.ac{padding:.6rem .8rem; border-radius:.7rem; background:linear-gradient(135deg,#183A9E,#0F2C86); border:1px solid rgba(255,255,255,.25); font-size:.9rem; font-weight:600; line-height:1.25; cursor:grab; user-select:none; touch-action:none; transition:box-shadow .2s, transform .2s}
.ac:hover{box-shadow:0 .6rem 1.4rem rgba(0,0,0,.4); transform:translateY(-2px)}
.ac.vuela{position:absolute; z-index:50; cursor:grabbing; box-shadow:0 1.4rem 2.6rem rgba(0,0,0,.55); transform:rotate(-2deg) scale(1.04); transition:none}
.ac.mal{animation:sacude .45s}
@keyframes sacude{20%,60%{transform:translateX(-.5rem)} 40%,80%{transform:translateX(.5rem)}}
.lanes{flex:1; min-height:0; display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:1rem}
.lane{position:relative; border-radius:1rem; padding:.8rem 1rem; display:flex; flex-direction:column; gap:.6rem; background:rgba(255,255,255,.06); border:2px dashed var(--c); transition:.3s; overflow:hidden}
.lane.over{background:color-mix(in srgb,var(--c) 22%,transparent); border-style:solid}
.lane h5{font-size:.95rem; display:flex; align-items:center; gap:.6rem; color:var(--c)}
.lane h5 em{font-style:normal; margin-left:auto; font-size:.85rem; padding:.1rem .6rem; border-radius:99rem; background:var(--c); color:#fff; font-weight:900}
.lane small{color:var(--mut); font-size:.8rem}
.lane .ls{display:flex; flex-direction:column; gap:.5rem; flex:1}
.lane .ac{cursor:default; border-color:var(--c)}
.lane.lock:after{content:"🔒  Bloqueado hasta que exista el modelo financiero"; position:absolute; inset:0; display:flex; align-items:center; justify-content:center; text-align:center; padding:1rem; background:rgba(0,12,50,.78); font-weight:800; font-size:1rem}
.lane.sell:before{content:"EXPEDIDO"; position:absolute; right:1.2rem; bottom:1rem; padding:.2rem 1rem; border:.22rem solid var(--c); color:var(--c); font-weight:900; letter-spacing:.16em; font-size:1.3rem; border-radius:.4rem; transform:rotate(-9deg); animation:selloA .55s cubic-bezier(.2,1.5,.4,1); z-index:3}
@keyframes selloA{from{transform:rotate(-9deg) scale(3); opacity:0}}
.act-h{min-height:2.4rem; font-size:.95rem; color:#FFE49A; font-weight:600}

/* ---------- PMA ---------- */
.pma{display:flex; flex-direction:column; gap:.9rem; height:100%}
.pma-s{height:16rem; border-radius:1rem; background:rgba(0,10,40,.35); border:1px solid var(--line); position:relative; flex:none}
.pma-s svg{position:absolute; inset:0; width:100%; height:100%}
.pma-s .edif{font-size:56px; text-anchor:middle} .pma-s .nm{font-size:18px; font-weight:800; fill:#fff; text-anchor:middle}
.pma-s .sb{font-size:13px; fill:#A9B8E0; text-anchor:middle}
.pma-s .cam{stroke:rgba(255,255,255,.4); stroke-width:3; stroke-dasharray:9 9; fill:none; animation:cam 1s linear infinite}
@keyframes cam{to{stroke-dashoffset:-18}}
.pma-s #env{transition:transform 1.6s cubic-bezier(.5,0,.2,1)}
.pma-s .alto{font-size:15px; font-weight:900; fill:#FFB4B6}
.pma-s .rec{font-size:18px; font-weight:900; fill:#1FBF5B; opacity:0; transition:.4s}
.pma-b{flex:1; min-height:0; display:grid; grid-template-columns:minmax(0,1fr) 17rem; gap:1.1rem}
.chk{display:flex; flex-direction:column; gap:.45rem}
.chk button{display:flex; align-items:center; gap:.8rem; padding:.85rem 1rem; border-radius:.7rem; text-align:left; background:rgba(255,255,255,.06); border:1px solid var(--line); font-size:1.02rem; transition:.2s}
.chk button:hover{background:rgba(255,255,255,.12)}
.chk button .ck{flex:none; width:1.5rem; height:1.5rem; border-radius:.4rem; border:.15rem solid var(--gris); display:flex; align-items:center; justify-content:center; font-weight:900; transition:.2s}
.chk button.on .ck{background:var(--verde); border-color:var(--verde)} .chk button.on .ck:before{content:"✓"}
.pma-c{display:flex; flex-direction:column; align-items:center; gap:.7rem; padding:.8rem; border-radius:1rem; background:var(--glass2); border:1px solid var(--line)}
.pma-c svg{width:8.6rem; height:8.6rem} .pma-c circle{fill:none; stroke-width:11; transition:stroke-dasharray .5s}
.pma-c .btn{width:100%; justify-content:center}
.pma-c .btn:disabled{opacity:.35; cursor:default; transform:none}

/* ---------- Gantt ---------- */
.gt{position:relative; --lw:16rem; font-size:.95rem}
.gt-h, .gt-r{display:grid; grid-template-columns:var(--lw) minmax(0,1fr)}
.gt-hy{display:flex}
.gt-hy .y{flex:1; text-align:center; border-left:1px solid var(--line); padding:.2rem 0; font-weight:900; font-size:.95rem}
.gt-hy .y small{display:block; font-size:.62rem; color:var(--mut); font-weight:600; letter-spacing:.06em}
.gt-g{margin-top:.35rem; padding:.18rem .6rem; font-size:.68rem; font-weight:900; letter-spacing:.16em; text-transform:uppercase; color:var(--gold); background:rgba(240,168,0,.12); border-radius:.3rem}
.gt-r{height:2.45rem; align-items:center; cursor:pointer; transition:background .2s; border-radius:.4rem}
.gt-r:hover, .gt-r.sel{background:rgba(255,255,255,.1)}
.gt-r .lb{padding-left:.6rem; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; padding-right:.4rem}
.gt-t{position:relative; height:100%; background:repeating-linear-gradient(90deg,rgba(255,255,255,.07) 0 1px,transparent 1px 4.1667%)}
.gt-t .bd{position:absolute; top:.32rem; bottom:.32rem}
.gt-t .bd.dn{border-radius:.3rem 0 0 .3rem}
.gt-t .bd.dn.solo{border-radius:.3rem}
.gt-t .bd.ft{border-radius:0 .3rem .3rem 0; opacity:.42; background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.4) 0 3px,transparent 3px 7px)}
.gt-t .bd.lt{background:repeating-linear-gradient(135deg,#E5484D 0 4px,#8A1F24 4px 8px); border-radius:0 .3rem .3rem 0; box-shadow:0 0 .8rem rgba(229,72,77,.6)}
.gt-t .bd.ret{background:transparent; border:1.5px dashed var(--gris); border-radius:.3rem}
.gt-t .tg{position:absolute; top:50%; transform:translate(.4rem,-50%); font-size:.72rem; font-weight:900; color:#FFB4B6; white-space:nowrap; text-shadow:0 1px 3px #000}
.gt-play{position:absolute; top:0; bottom:0; left:calc(var(--lw) + (100% - var(--lw)) * var(--f,.5)); width:0; z-index:6; pointer-events:none}
.gt-play:before{content:""; position:absolute; left:-1px; top:1.9rem; bottom:0; width:2px; background:#fff; box-shadow:0 0 .8rem rgba(255,255,255,.8)}
.gt-play .mango{position:absolute; left:0; top:-.2rem; transform:translateX(-50%); background:#fff; color:var(--navy); font-weight:900; font-size:.8rem; padding:.25rem .8rem; border-radius:99rem; cursor:ew-resize; white-space:nowrap; pointer-events:auto; box-shadow:0 .4rem 1.2rem rgba(0,0,0,.4)}
.gt-play .mango:after{content:" ⇔"}
.gt-top{display:flex; align-items:center; gap:.6rem; flex-wrap:wrap}
.gt-top .res{margin-left:auto; font-size:.9rem; font-weight:800; padding:.3rem .9rem; border-radius:.6rem; background:rgba(229,72,77,.18); border:1px dashed var(--rojo); color:#FFB4B6}
.gt-d{padding:.8rem 1rem; border-radius:.9rem; background:var(--glass2); border:1px solid var(--line); font-size:1rem; line-height:1.4; min-height:6rem}
.gt-d h5{font-size:1.05rem; display:flex; gap:.6rem; align-items:center; flex-wrap:wrap; margin-bottom:.25rem}

/* ---------- mapa ---------- */
.mp{position:relative; flex:1; min-height:0; margin:-1.3rem -1.5rem}
.mp #mapa{position:absolute; inset:0}
.mp-l{position:absolute; left:1rem; top:1rem; width:20rem; z-index:5; max-height:calc(100% - 9rem); overflow:auto; display:flex; flex-direction:column; gap:.4rem; padding:.7rem; border-radius:1rem; background:rgba(6,20,72,.92); border:1px solid var(--line); box-shadow:0 1rem 2.4rem rgba(0,0,0,.45)}
.mp-l h4{font-size:.7rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin:.1rem .2rem .2rem}
.mp-l button{display:flex; align-items:center; gap:.6rem; text-align:left; padding:.5rem .65rem; border-radius:.6rem; background:rgba(255,255,255,.06); border:1px solid transparent; font-size:.86rem; line-height:1.2; transition:.2s; width:100%}
.mp-l button:hover{background:rgba(255,255,255,.14)} .mp-l button.sel{border-color:#fff; background:rgba(255,255,255,.16)}
.mp-l button i{flex:none; width:.9rem; height:.9rem; border-radius:50%; background:var(--c)}
.mp-l button small{display:block; color:var(--mut); font-size:.74rem}
#ml{display:flex; flex-direction:column; gap:.4rem}
.mp-d{position:absolute; left:1rem; right:1rem; bottom:1rem; z-index:5; padding:.8rem 1.1rem; border-radius:1rem; background:rgba(6,20,72,.94); border:1px solid var(--line); font-size:.95rem; line-height:1.4; min-height:4.4rem}
.mp-d b{color:var(--gold)}
.mp-c{position:absolute; right:1rem; top:1rem; z-index:5; display:flex; gap:.5rem}
.mp-c .chip{background:rgba(6,20,72,.94); color:#fff} .mp-c .chip.on{background:#fff; color:var(--navy)}
.mk-p{width:8px; height:8px; border-radius:50%; background:#4C8DFF; border:1.5px solid #fff; box-shadow:0 0 0 2px rgba(76,141,255,.35)}
.mk-pa{position:relative; width:0; height:0}
.mk-pa i{position:absolute; left:-1.1rem; top:-1.1rem; width:2.2rem; height:2.2rem; border-radius:50%; background:#4C8DFF; border:.18rem solid #fff; display:flex; align-items:center; justify-content:center; font-style:normal; font-size:1.1rem; box-shadow:0 .3rem 1rem rgba(0,0,0,.5); cursor:pointer}
.mk-pa i:after{content:""; position:absolute; inset:-.5rem; border-radius:50%; border:.16rem solid #4C8DFF; animation:latido 2s ease-out infinite}

/* ---------- tecnología ---------- */
.tec{display:flex; flex-direction:column; gap:.8rem; height:100%}
.tec-n{position:relative; flex:1.25; min-height:0; border-radius:1rem; background:rgba(0,10,40,.35); border:1px solid var(--line)}
.tec-n svg{position:absolute; inset:0; width:100%; height:100%}
.tec-n .lk{stroke:#5C6AA0; stroke-width:2.4; stroke-dasharray:6 6}
.tec-n .lk.ok{stroke:#2BE07A; stroke-dasharray:none; stroke-width:3.2; filter:drop-shadow(0 0 4px #2BE07A)}
.tec-n .nd{cursor:grab} .tec-n .nd:active{cursor:grabbing}
.tec-n .nd rect{transition:fill .4s, stroke .4s}
.tec-n .nd text{fill:#fff; font-weight:800; text-anchor:middle; pointer-events:none}
.tec-n .nd .s{font-size:11px; font-weight:600; fill:#E7EEFF}
.tec-n .pk{fill:#fff}
.tec-b{position:absolute; left:.8rem; top:.7rem; display:flex; gap:.5rem; align-items:center; z-index:2; flex-wrap:wrap; right:.8rem}
.tec-b .tx{font-size:.82rem; color:var(--mut)}
.tec-g{flex:1; min-height:0}
`);

const MESES_L = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const mesTxt = i => MESES_L[i%12] + ' ' + (2023+Math.floor(i/12));
const idxFecha = d => (d.getFullYear()-2023)*12 + d.getMonth() + (d.getDate()-1)/new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
const NSVG = 'http://www.w3.org/2000/svg';
const svgPt = (svg,e) => { const p=svg.createSVGPoint(); p.x=e.clientX; p.y=e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); };

/* =====================================================================
   ALERTA 4a — ART: esquema de troncales + coincidencias con el SETP
   ===================================================================== */
VIS.appA = root => {
  const LN = {
    A:{ c:'#E5484D', n:'Línea A · Ambalá', d:'M90,130 C260,95 430,80 610,95 S830,135 905,240', dur:11,
        setp:'Coincide con la Av. Ambalá, que el SETP ya ejecuta (Contrato de Obra 042 de 2026).', bd:[346,44,346,94,'Av. Ambalá · en ejecución'] },
    B:{ c:'#4C8DFF', n:'Línea B · Jordán – Carrera 5', d:'M110,215 C250,300 380,380 510,360 S710,230 905,240', dur:12,
        setp:'Coincide con la Carrera 5 (ejecutada, Fases I y II) y con Av. Jordán Paralela (sin recursos, en revisión). La cicloinfraestructura de la Cra 5 está por radicar.', bd:[430,215,425,350,'Cra 5 · ejecutada'] },
    C:{ c:'#1FBF5B', n:'Línea C · Picaleña – Mirolindo – Ferrocarril – K1 C12', d:'M135,285 C250,390 330,450 480,500 S700,640 830,610 S915,480 905,240', dur:17,
        setp:'Coincide con la Av. Ferrocarril (consultoría radicada en UMUS el 10 de junio de 2026) y pasa por Picaleña, donde hay un predio de patiotalleres en gestión.', bd:[345,548,292,415,'Av. Ferrocarril · consultoría radicada'] },
    D:{ c:'#F0A800', n:'Línea D · Boquerón – Calle 19 – K1 C12', d:'M55,650 C75,540 105,410 135,285', dur:6,
        setp:'Boquerón tiene un predio de patiotalleres en gestión; la Calle 19 es el arranque de la Av. Ferrocarril.', bd:[235,655,62,648,'Patiotaller Boquerón · predio en gestión'] }
  };
  const ACL = [
    ['100 % privado, pero pide recursos del CONPES 4017','La propuesta declara inversión «100 % asumida por el privado» y, a la vez, pide financiar con recursos del CONPES 4017 la compra de vehículos nuevos. Hay que aclarar cuál es el aporte público real.'],
    ['Único operador frente a la concertación con transportadores','Pedir exclusividad choca con el modelo del SETP, que se construye con los transportadores existentes (alertas 2 y 6).'],
    ['Demanda de 321.065 viajes/día','En una ciudad de orden de 0,55 a 0,6 millones de habitantes equivale a más de medio viaje diario por habitante solo en el ART. Se contrasta con el estudio de demanda del SETP (septiembre de 2025).']];
  root.innerHTML = `<div class="app">
    <div class="app-k rv">
      <div class="kpi"><b data-count="31.64" data-dec="2" data-suf=" m">0</b><small>Longitud vehículo</small></div>
      <div class="kpi"><b data-count="307">0</b><small>Pasajeros</small></div>
      <div class="kpi"><b data-count="59">0</b><small>Buses ART (4 troncales)</small></div>
      <div class="kpi"><b data-count="389">0</b><small>Buses alimentadores</small></div>
      <div class="kpi"><b data-count="321065">0</b><small>Viajes/día (propuesta)</small></div></div>
    <div class="app-m">
      <div class="app-d rv show" id="ad">
        <div class="app-t" id="lg">${Object.entries(LN).map(([k,l])=>`<button class="chip" data-k="${k}" style="--c:${l.c}">${k}</button>`).join('')}
          <label class="sw on" id="swb" style="margin-left:auto"><i></i>Coincidencias con el SETP</label></div>
        <svg viewBox="0 0 1000 700" id="sv">
          <path d="M40 90 C200 40 560 20 890 100 L965 260 C925 430 800 660 640 690 C440 710 220 600 90 420 Z" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.12)" stroke-dasharray="6 6"/>
          ${Object.entries(LN).map(([k,l])=>`<path class="ln" data-k="${k}" d="${l.d}" stroke="${l.c}"/>`).join('')}
          <g><circle cx="905" cy="240" r="10" fill="#fff"/><text x="885" y="275" text-anchor="end" class="lbl">Lote · inicio troncales A, B y C</text>
            <circle cx="90" cy="130" r="7" fill="#E5484D" stroke="#fff" stroke-width="2"/><circle cx="110" cy="215" r="7" fill="#4C8DFF" stroke="#fff" stroke-width="2"/>
            <text x="20" y="108" class="lbl">Fin troncales A y B</text>
            <circle cx="135" cy="285" r="7" fill="#1FBF5B" stroke="#fff" stroke-width="2"/><text x="152" y="318" class="lbl">Fin C y D</text>
            <circle cx="55" cy="650" r="7" fill="#F0A800" stroke="#fff" stroke-width="2"/><text x="20" y="682" class="lbl">Inicio D</text>
            <text x="925" y="420" font-size="26">✈</text><text x="955" y="442" text-anchor="end" class="lbl" style="opacity:.7">Aeropuerto</text></g>
          ${Object.entries(LN).map(([k,l])=>`<g class="bd" data-k="${k}"><line x1="${l.bd[0]}" y1="${l.bd[1]}" x2="${l.bd[2]}" y2="${l.bd[3]}"/><rect x="${l.bd[0]-108}" y="${l.bd[1]-14}" width="216" height="26" rx="7"/><text x="${l.bd[0]}" y="${l.bd[1]+4}" text-anchor="middle">SETP · ${l.bd[4]}</text></g>`).join('')}
          ${Object.entries(LN).map(([k,l])=>`<g class="tr" data-k="${k}" style="color:${l.c}"><use href="#i-art" width="96" height="26" x="-48" y="-20"/><animateMotion dur="${l.dur}s" repeatCount="indefinite" rotate="auto" path="${l.d}"/></g>`).join('')}
        </svg>
        <div style="position:absolute;right:.9rem;bottom:.5rem;font-size:.72rem;color:var(--mut)">Esquema no georreferenciado, basado en la Figura 8 de la propuesta</div>
      </div>
      <div class="app-i">
        <div class="box rv" id="info"></div>
        <div class="box rv"><small>A aclarar con el proponente</small><div class="acl" id="acl">${ACL.map(a=>`<button><b>${a[0]}</b><p>${a[1]}</p></button>`).join('')}</div></div>
      </div></div></div>`;
  let sel=null;
  function pinta(){
    $$('.ln',root).forEach(l=>l.style.opacity = !sel||sel===l.dataset.k?1:.14);
    $$('.tr',root).forEach(t=>t.style.display = !sel||sel===t.dataset.k?'':'none');
    $$('#lg .chip',root).forEach(c=>c.classList.toggle('on',c.dataset.k===sel));
    $$('.bd',root).forEach(b=>b.style.display = !sel||sel===b.dataset.k?'':'none');
    $('#info',root).innerHTML = sel
      ? `<small>Coincidencia con el SETP</small><h5 style="color:${LN[sel].c}">${LN[sel].n}</h5>${LN[sel].setp}`
      : `<small>Lectura del SETP</small><h5>3 de 4 troncales coinciden con corredores del SETP</h5>Toca una línea para ver con qué proyecto del SETP se superpone. Se integran o se descartan; no se duplican.`;
  }
  $$('.ln,#lg .chip',root).forEach(e=>e.onclick=()=>{ sel = sel===e.dataset.k?null:e.dataset.k; pinta(); });
  $('#swb',root).onclick=()=>{ $('#swb',root).classList.toggle('on'); $('#ad',root).classList.toggle('show'); };
  $$('#acl button',root).forEach(b=>b.onclick=()=>b.classList.toggle('on'));
  pinta();
};

/* =====================================================================
   ALERTA 4b — Trazabilidad, concepto DNP y condiciones
   ===================================================================== */
VIS.appB = root => {
  const H = [
    [new Date(2025,9,27),'Concepto favorable a la prefactibilidad (con condiciones)'],
    [new Date(2025,9,30),'Reunión virtual con la UMUS y el proponente'],
    [new Date(2025,10,7),'Mesas técnicas presenciales con el equipo del proponente'],
    [new Date(2025,10,19),'Visita del inversionista'],
    [new Date(2025,11,3),'Mesa con el Ministerio de Transporte'],
    [new Date(2025,11,5),'Solicitud de concepto al DNP'],
    [new Date(2026,3,22),'Concepto del DNP'],
    [new Date(2026,5,1),'Mesa técnica para socializar el concepto del DNP']];
  const COND = [['Nuevo CONPES','El CONPES 4017 no permite desarrollar el tranvía'],['Evaluación integral del sistema',''],['Aclaraciones','Sobre la estructura y el aporte público'],['Estudios más avanzados','Prediales, diseños estructurales y de demanda']];
  root.innerHTML = `<div class="app">
    <div class="rv"><div class="sub">Trazabilidad · arrastra el tranvía o toca un hito</div>
      <div class="tlb" id="tb"><div class="ax"></div></div>
      <div class="gt-d" id="hd" style="min-height:0"></div></div>
    <div class="appb-b">
      <div class="rv"><div class="sub">Condiciones para avanzar · tócalas</div>
        <div class="puertas" id="pu" style="margin-top:.5rem">${COND.map((c,i)=>`<div class="puerta" data-i="${i}"><span class="ck"></span><div>${c[0]}<small>${c[1]}</small></div></div>`).join('')}</div>
        <div class="medidor" style="margin-top:.7rem"><svg viewBox="0 0 100 100"><g transform="rotate(-90 50 50)"><circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,.14)"/><circle id="mc" cx="50" cy="50" r="40" stroke="#E5484D" stroke-dasharray="0 252"/></g></svg>
          <div><b id="mt">0 de 4 condiciones</b><span id="mm"></span></div></div></div>
      <div class="rv"><div class="sub">Compromisos de la mesa interinstitucional</div>
        <table class="tcomp" style="margin-top:.4rem"><thead><tr><th></th><th>Compromiso</th><th>Responsable</th><th>Avance</th></tr></thead><tbody>
          <tr><td>1</td><td>Remitir el concepto emitido por el DNP a la APP de iniciativa privada</td><td>SETP</td><td><span class="pill ok">10 jun 2026</span></td></tr>
          <tr><td>2</td><td>Gestionar mesa interinstitucional con MinHacienda, DNP y MinTransporte</td><td>SETP</td><td><span class="pill pr">7 jul 2026 (tentativa)</span></td></tr>
          <tr><td>3</td><td>Remitir los avances actualizados de la prefactibilidad</td><td>APP privada</td><td><span class="pill sf">Sin fecha</span></td></tr></tbody></table></div></div></div>`;
  const tb=$('#tb',root), n=H.length, xs=i=>6+i*(88/(n-1));
  H.forEach((h,i)=>{
    const nd=document.createElement('div'); nd.className='nd'; nd.style.left=xs(i)+'%'; nd.style.setProperty('--c','#F0A800'); nd.textContent=i+1; nd.onclick=()=>ir2(i);
    const fe=document.createElement('div'); fe.className='fe'; fe.style.left=xs(i)+'%'; fe.style[i%2?'bottom':'top']='0';
    fe.innerHTML=`<b>${h[0].getDate()} ${MES[h[0].getMonth()]} ${String(h[0].getFullYear()).slice(2)}</b>`; fe.onclick=()=>ir2(i);
    tb.append(nd,fe);
    if(i>0){ const d=Math.round((h[0]-H[i-1][0])/864e5); if(d>40){ const g=document.createElement('div'); g.className='gap'; g.style.left=(xs(i)+xs(i-1))/2+'%'; g.textContent='≈ '+(d/30.4).toFixed(1).replace('.',',')+' meses'; tb.append(g); } }
  });
  const trm=document.createElementNS(NSVG,'svg'); trm.setAttribute('class','tram'); trm.innerHTML='<use href="#i-art"/>'; trm.style.left=xs(0)+'%'; tb.append(trm);
  function ir2(k){ $$('.nd',tb).forEach((e,i)=>{ e.classList.toggle('hecho',i<=k); e.classList.toggle('act',i===k); }); $$('.fe',tb).forEach((e,i)=>e.classList.toggle('act',i===k));
    trm.style.left=xs(k)+'%'; $('#hd',root).innerHTML=`<h5 style="margin:0"><span style="color:var(--gold)">${fFecha(H[k][0])}</span> · ${H[k][1]}</h5>`; }
  arrastrar(trm,{ inicio:()=>trm.classList.add('arr'),
    mueve:e=>{ const r=tb.getBoundingClientRect(); trm.style.left=Math.min(94,Math.max(6,(e.clientX-r.left)/r.width*100))+'%'; },
    fin:()=>{ trm.classList.remove('arr'); const f=parseFloat(trm.style.left); ir2(H.reduce((b,_,i)=>Math.abs(xs(i)-f)<Math.abs(xs(b)-f)?i:b,0)); } });
  ir2(0);
  const on=new Set();
  $$('.puerta',root).forEach(p=>p.onclick=()=>{ const i=+p.dataset.i; on.has(i)?on.delete(i):on.add(i); p.classList.toggle('on',on.has(i));
    const k=on.size, C=2*Math.PI*40; $('#mc',root).style.strokeDasharray=`${k/4*C} ${C}`; $('#mc',root).style.stroke=k===4?'#1FBF5B':k?'#F0A800':'#E5484D';
    $('#mt',root).textContent=`${k} de 4 condiciones`;
    $('#mm',root).textContent = k===4?'Con las cuatro, el proyecto podría avanzar a la siguiente etapa; no implica aprobación.':k?`Faltan ${4-k}: sin ellas no hay paso a factibilidad.`:'Hoy el CONPES 4017 no permite desarrollar el tranvía.'; });
  $('#mm',root).textContent='Hoy el CONPES 4017 no permite desarrollar el tranvía.';
};

/* =====================================================================
   ALERTA 5a — Aportes del Municipio y cofinanciación Nación
   ===================================================================== */
VIS.desA = root => {
  const M=MUNICIPIO, N=NACION, sum=a=>a.reduce((x,y)=>x+y,0);
  const totM=sum(M.aporte)+sum(M.indexacion), totN=sum(N.convenio), adj=sum(N.adjudicado), rep=sum(N.reprogramar);
  let conIdx=true;
  root.innerHTML = `<div class="des">
    <div class="flujo rv"><div class="ori a">MUNICIPIO<br><span class="mut">aportes 2021–2026</span></div><div class="ori b">NACIÓN<br><span class="mut">cofinanciación 2024–2026</span></div>
      <div class="ln"></div><div class="ln b"></div><div class="dst">SETP<br><span class="mut">convenio de cofinanciación</span></div>
      ${[0,1.2,2.4].map(d=>`<div class="mo" style="top:.65rem;animation-delay:${d}s"><svg><use href="#i-coin"/></svg></div>`).join('')}${[.6,1.8,3].map(d=>`<div class="mo" style="top:2.75rem;animation-delay:${d}s"><svg><use href="#i-coin"/></svg></div>`).join('')}</div>
    <div class="des-g">
      <div class="gr rv"><h4>Aportes del Municipio <span class="chip on" style="background:var(--verde);border-color:var(--verde);color:#04210F;padding:.1rem .7rem">100 % cada vigencia</span></h4>
        <div class="tot"><span data-count="${totM/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>desembolsado 2021–2026</small></div>
        <svg viewBox="0 0 520 350" id="gm"></svg>
        <label class="sw on" id="swi"><i></i>Incluir indexación</label></div>
      <div class="gr rv"><h4>Cofinanciación Nación 2024–2026</h4>
        <div class="tot"><span data-count="${totN/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>convenio</small></div>
        <svg viewBox="0 0 520 350" id="gn"></svg>
        <div class="gnote">Adjudicado <b style="color:#1FBF5B">${fB(adj)} (${(adj/totN*100).toFixed(1).replace('.',',')} %)</b> · A reprogramar <b style="color:#FF8A8E">${fB(rep)} (${(rep/totN*100).toFixed(1).replace('.',',')} %)</b> · 2026 proyectado (*)</div></div>
    </div></div>`;
  const bar=(x,w,v,max,col,base,H,extra='')=>{ const h=v/max*H; return `<rect class="b" x="${x}" width="${w}" y="${base-h}" height="${h}" fill="${col}" rx="3" ${extra}/>`; };
  function dibujaM(){
    const H=250, base=290, max=21e9, w=44; let s='';
    M.anios.forEach((a,i)=>{ const x=30+i*82, ap=M.aporte[i], ix=conIdx?M.indexacion[i]:0, tot=ap+ix;
      s+=`<g class="bar" data-t="${a}: aportes ${fM(ap)}${M.indexacion[i]?` + indexación ${fM(M.indexacion[i])}`:''}${a===2024?' (acumulada 2023 y 2024)':''}" style="cursor:pointer">
        ${bar(x,w,ap,max,'#4C8DFF',base,H)}${ix?bar(x,w,ix,max,'#F0A800',base-ap/max*H,H):''}
        <text class="vl" x="${x+w/2}" y="${base-tot/max*H-8}">${(tot/1e9).toFixed(1).replace('.',',')}</text>
        <text class="g" x="${x+w/2}" y="${base+32}">✔ 100 %</text></g><g class="ax"><text x="${x+w/2}" y="${base+16}">${a}</text></g>`; });
    $('#gm',root).innerHTML=s;
    $$('#gm .bar',root).forEach(g=>{ g.onmousemove=e=>verTip(g.dataset.t,e); g.onmouseleave=ocultaTip; });
  }
  function dibujaN(){
    const H=250, base=290, max=72e9, w=70; let s='';
    N.anios.forEach((a,i)=>{ const x=50+i*150, ad=N.adjudicado[i], rp=N.reprogramar[i];
      s+=`<g class="bar" data-t="${a}${a===2026?'*':''}: convenio ${fM(N.convenio[i])} · adjudicado ${fM(ad)} · a reprogramar ${fM(rp)}" style="cursor:pointer">
        ${bar(x,w,ad,max,'#1FBF5B',base,H)}${bar(x,w,rp,max,'#E5484D',base-ad/max*H,H,'opacity=".85"')}
        <text class="vl" x="${x+w/2}" y="${base-N.convenio[i]/max*H-8}">${(N.convenio[i]/1e9).toFixed(1).replace('.',',')}</text>
        <text x="${x+w/2}" y="${base-ad/max*H/2+4}" style="font-size:11px;font-weight:900;fill:#04210F;text-anchor:middle">${Math.round(ad/N.convenio[i]*100)} %</text></g>
        <g class="ax"><text x="${x+w/2}" y="${base+16}">${a}${a===2026?'*':''}</text></g>`; });
    s+=`<g font-size="12" fill="#DCE6FF" font-weight="700"><rect x="110" y="326" width="12" height="12" fill="#1FBF5B" rx="2"/><text x="128" y="337">Adjudicado</text><rect x="240" y="326" width="12" height="12" fill="#E5484D" rx="2"/><text x="258" y="337">A reprogramar</text></g>`;
    $('#gn',root).innerHTML=s;
    $$('#gn .bar',root).forEach(g=>{ g.onmousemove=e=>verTip(g.dataset.t,e); g.onmouseleave=ocultaTip; });
  }
  dibujaM(); dibujaN();
  $('#swi',root).onclick=()=>{ conIdx=!conIdx; $('#swi',root).classList.toggle('on',conIdx); dibujaM(); };
};

/* =====================================================================
   ALERTA 5b — Seis frentes 2026 + cartera para absorber lo por reprogramar
   ===================================================================== */
VIS.desB = root => {
  const tot = k => PROY26.reduce((a,p)=>a+p[k],0), rep26 = NACION.reprogramar[2];
  let sel=0; const cartOn=new Set();
  root.innerHTML = `<div class="des"><div class="des-g" style="grid-template-columns:minmax(0,1.35fr) minmax(0,1fr)">
    <div class="gr rv"><h4>Frentes 2026 · toca una fila</h4>
      <div class="tot"><span data-count="${(tot('mun')+tot('nac'))/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>Nación ${fB(tot('nac'))} · Municipio ${fB(tot('mun'))}</small></div>
      <table class="tp"><thead><tr><th>Frente</th><th style="text-align:right">Nación</th><th style="text-align:right">Municipio</th><th>Fase</th></tr></thead><tbody id="tp">
        ${PROY26.map((p,i)=>`<tr data-i="${i}"><td>${p.n}</td><td class="v">${p.nac?fM(p.nac):'—'}</td><td class="v">${p.mun?fM(p.mun):'—'}</td>
          <td><div class="fs4">${FASES.map((f,k)=>`<i class="${k<p.fase?'on':k===p.fase?'cur':''}" title="${f}"></i>`).join('')}</div></td></tr>`).join('')}
        <tr><td colspan="4" style="font-size:.8rem;color:var(--mut)">Recaudo y control de flota: proceso a estructurar en 2026, recursos a comprometer del 2027.</td></tr></tbody></table>
      <div class="dcard" id="dc"></div>
      <div class="gnote" style="margin-top:.9rem">Origen de los recursos 2026</div>
      <div class="split"><i id="sn" style="background:#1FBF5B">Nación</i><i id="sm" style="background:#4C8DFF">Municipio</i></div></div>
    <div class="gr rv"><h4>¿Alcanza la cartera para lo «a reprogramar»?</h4>
      <div class="tot" style="color:#FF8A8E"><span data-count="${rep26/1e9}" data-dec="1" data-pre="$" data-suf=" mil M">0</span> <small>del convenio 2026 sin proyecto asignado</small></div>
      <div class="gnote">Suma proyectos con presupuesto identificado en las fichas del SETP (obra + interventoría, valor total del proyecto; referencial):</div>
      <div class="cart" id="ct">${CARTERA.map((c,i)=>`<button data-i="${i}"><span>${c.n}<small>${c.req}</small></span><b>${fM(c.v)}</b></button>`).join('')}</div>
      <div class="cbar"><i id="cb"></i><span id="cbt">0 %</span></div>
      <div class="dcard" id="cd" style="min-height:4.6rem"></div></div></div></div>`;
  requestAnimationFrame(()=>setTimeout(()=>{ const n=tot('nac')/(tot('nac')+tot('mun'))*100; $('#sn',root).style.width=n+'%'; $('#sn',root).textContent='Nación '+Math.round(n)+' %'; $('#sm',root).style.width=(100-n)+'%'; $('#sm',root).textContent='Municipio '+Math.round(100-n)+' %'; },300));
  const dc=()=>{ const p=PROY26[sel]; $$('#tp tr[data-i]',root).forEach(r=>r.classList.toggle('sel',+r.dataset.i===sel));
    $('#dc',root).innerHTML=`<b>${p.n}</b> · ${p.comp}<br><span class="mut">Fase actual:</span> ${p.txt}`; };
  $$('#tp tr[data-i]',root).forEach(r=>r.onclick=()=>{ sel=+r.dataset.i; dc(); }); dc();
  function cart(){ const v=[...cartOn].reduce((a,i)=>a+CARTERA[i].v,0), pc=v/rep26*100;
    $('#cb',root).style.width=Math.min(100,pc)+'%'; $('#cbt',root).textContent=Math.round(pc)+' % de lo a reprogramar';
    $('#cd',root).innerHTML = !cartOn.size ? 'Activa proyectos para ver cuánto cubren.' : pc>=100
      ? `<b style="color:#1FBF5B">La cartera cubre lo a reprogramar (${fB(v)}).</b> El cuello de botella no es falta de proyectos, es tenerlos con estudios y elegibilidad a tiempo.`
      : `Cubre ${fB(v)}; faltan ${fB(rep26-v)}.`; }
  $$('#ct button',root).forEach(b=>b.onclick=()=>{ const i=+b.dataset.i; cartOn.has(i)?cartOn.delete(i):cartOn.add(i); b.classList.toggle('on',cartOn.has(i)); cart(); });
  cart();
};

/* =====================================================================
   ALERTA 6 — Actos administrativos: arrastrar a su paquete
   ===================================================================== */
VIS.actos = root => {
  let modelo=false;
  root.innerHTML = `<div class="act" id="ac">
    <div class="act-t rv"><label class="sw" id="swm"><i></i>Modelo financiero publicado (24 jul)</label>
      <span class="mut" style="font-size:.9rem">Arrastra cada acto al paquete que le corresponde. Tipos referenciales del modelo operacional.</span></div>
    <div class="pool rv" id="pool"></div>
    <div class="act-h" id="ah"></div>
    <div class="lanes rv">
      <div class="lane" id="l-ya" style="--c:#1FBF5B"><h5>Paquete 1 · sin dependencia del modelo<em id="c-ya">0/3</em></h5><small>Puede expedirse ya</small><div class="ls"></div></div>
      <div class="lane lock" id="l-modelo" style="--c:#F0A800"><h5>Paquete 2 · depende del modelo<em id="c-modelo">0/3</em></h5><small>Sale cuando el modelo financiero esté cerrado</small><div class="ls"></div></div></div></div>`;
  const ac=$('#ac',root), pool=$('#pool',root), tot={ya:ACTOS.filter(a=>a.dep==='ya').length, modelo:ACTOS.filter(a=>a.dep==='modelo').length}, cnt={ya:0,modelo:0};
  const hint=t=>{ $('#ah',root).textContent=t; };
  const lane=e=>{ const el=document.elementsFromPoint(e.clientX,e.clientY).find(x=>x.classList&&x.classList.contains('lane')); return el||null; };
  ACTOS.forEach(a=>{ const c=document.createElement('div'); c.className='ac'; c.textContent=a.t; pool.append(c);
    let off;
    arrastrar(c,{ inicio:e=>{ const r=c.getBoundingClientRect(), b=ac.getBoundingClientRect(); off=[e.clientX-r.left,e.clientY-r.top]; c.style.width=r.width+'px';
        c.classList.add("vuela"); c.style.left=(r.left-b.left)+'px'; c.style.top=(r.top-b.top)+'px'; },
      mueve:e=>{ const b=ac.getBoundingClientRect(); c.style.left=(e.clientX-b.left-off[0])+'px'; c.style.top=(e.clientY-b.top-off[1])+'px';
        const l=lane(e); $$('.lane',root).forEach(x=>x.classList.toggle('over',x===l)); },
      fin:e=>{ $$('.lane',root).forEach(x=>x.classList.remove('over')); const l=lane(e); c.classList.remove('vuela'); c.style.width=c.style.left=c.style.top='';
        const vuelve=msg=>{ pool.append(c); c.classList.remove('mal'); void c.offsetWidth; c.classList.add('mal'); hint(msg); };
        if(!l) return pool.append(c);
        const k=l.id.slice(2);
        if(k==='modelo' && !modelo) return vuelve('Bloqueado: ese paquete espera el modelo financiero del 24 de julio. Actívalo arriba si ya salió.');
        if(a.dep!==k) return vuelve(a.dep==='modelo'?'Ese acto depende del modelo financiero: solo sale cuando el modelo esté cerrado.':'Ese acto no depende del modelo: puede salir ya, no lo dejes esperando.');
        $('.ls',l).append(c); c.style.cursor='default'; c.style.pointerEvents='none'; cnt[k]++; $('#c-'+k,root).textContent=`${cnt[k]}/${tot[k]}`; hint('');
        if(cnt[k]===tot[k]){ l.classList.add('sell'); hint(cnt.ya===tot.ya&&cnt.modelo===tot.modelo?'Paquetes completos: los actos salen por orden, sin plazos abiertos.':k==='ya'?'Paquete 1 listo: estos actos no esperan el modelo.':'Paquete 2 listo.'); } } });
  });
  $('#swm',root).onclick=()=>{ modelo=!modelo; $('#swm',root).classList.toggle('on',modelo); $('#l-modelo',root).classList.toggle('lock',!modelo); hint(modelo?'Modelo publicado: se libera el Paquete 2.':''); };
};

/* =====================================================================
   ALERTA 7 — PMA: del requerimiento al informe con evidencia
   ===================================================================== */
VIS.pma = root => {
  const on=new Set(); let paso=0;
  root.innerHTML = `<div class="pma">
    <div class="pma-s rv"><svg viewBox="0 0 1000 220">
      <text class="edif" x="110" y="95">🏗️</text><text class="nm" x="110" y="132">Interventoría</text><text class="sb" x="110" y="152">Contrato Semaforización Fase I</text>
      <text class="edif" x="890" y="95">🏛️</text><text class="nm" x="890" y="132">Ente Gestor · SETP</text><text class="sb" x="890" y="152">Supervisión</text>
      <text class="edif" x="500" y="80">🌿</text><text class="nm" x="500" y="117">PMA en obra: sí se ejecuta</text><text class="sb" x="500" y="137">evidenciado por el Ente Gestor</text>
      <path class="cam" d="M190 177 H810"/>
      <g id="env" style="transform:translate(160px,158px)"><use href="#i-env" width="54" height="38"/></g>
      <text class="alto" id="alto" x="500" y="212" text-anchor="middle">⚠ Falta el informe formal de alcances e impactos</text>
      <text class="rec" id="rec" x="890" y="190" text-anchor="middle">RECIBIDO ✔</text></svg></div>
    <div class="pma-b">
      <div class="rv"><div class="sub">Contenido mínimo que se exige a la interventoría · tócalo</div>
        <div class="chk" style="margin-top:.5rem">${PMA_ITEMS.map((t,i)=>`<button data-i="${i}"><span class="ck"></span>${t}</button>`).join('')}</div></div>
      <div class="pma-c rv"><svg viewBox="0 0 100 100"><g transform="rotate(-90 50 50)"><circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,.14)"/><circle id="pr" cx="50" cy="50" r="40" stroke="#F0A800" stroke-dasharray="0 252"/></g><text x="50" y="58" text-anchor="middle" font-size="24" font-weight="900" fill="#fff" id="pt">0/6</text></svg>
        <button class="btn" id="b1" disabled>1 · Enviar requerimiento</button><button class="btn sec" id="b2" disabled>2 · Recibir informe</button><button class="btn sec" id="b3" style="display:none">↺ Reiniciar</button></div></div></div>`;
  const env=$('#env',root);
  function pinta(){ const C=2*Math.PI*40, k=on.size; $('#pr',root).style.strokeDasharray=`${k/6*C} ${C}`; $('#pr',root).style.stroke=k===6?'#1FBF5B':'#F0A800'; $('#pt',root).textContent=k+'/6';
    $('#b1',root).disabled = !(k===6 && paso===0); }
  $$('.chk button',root).forEach(b=>b.onclick=()=>{ if(paso>0) return; const i=+b.dataset.i; on.has(i)?on.delete(i):on.add(i); b.classList.toggle('on',on.has(i)); pinta(); });
  $('#b1',root).onclick=()=>{ paso=1; $('#alto',root).textContent='Requerimiento formal enviado a la interventoría, con contenido mínimo y plazo'; $('#b1',root).disabled=true; $('#b2',root).disabled=false; $('#b2',root).classList.remove('sec'); };
  $('#b2',root).onclick=()=>{ paso=2; env.style.transform='translate(780px,158px)'; $('#b2',root).disabled=true; setTimeout(()=>{ $('#rec',root).style.opacity=1; $('#alto',root).textContent='Informe con evidencia recibido: se habilita el recibo final'; $('#alto',root).style.fill='#7CE6A6'; $('#b3',root).style.display=''; },1600); };
  $('#b3',root).onclick=()=>{ paso=0; on.clear(); $$('.chk button',root).forEach(b=>b.classList.remove('on')); env.style.transform='translate(160px,158px)'; $('#rec',root).style.opacity=0;
    $('#alto',root).textContent='⚠ Falta el informe formal de alcances e impactos'; $('#alto',root).style.fill=''; $('#b3',root).style.display='none'; $('#b2',root).classList.add('sec'); $('#b2',root).disabled=true; pinta(); };
  pinta();
};

/* =====================================================================
   Gantt reutilizable (alerta 8 y 9)
   ===================================================================== */
function gantt(host, rows, {fecha=CORTE.fecha, onSel}={}){
  const ANIOS=[2023,2024,2025,2026,2027,2028]; let hoy=idxFecha(fecha), sel=null;
  const grupos=[...new Set(rows.map(r=>r.g))];
  host.innerHTML = `<div class="gt"><div class="gt-h"><div></div><div class="gt-hy">${ANIOS.map((a,i)=>`<div class="y">${a}<small>CONPES año ${i+1}</small></div>`).join('')}</div></div>
    ${grupos.map(g=>`<div class="gt-g">${g}</div>`+rows.map((r,i)=>r.g===g?`<div class="gt-r" data-i="${i}"><div class="lb" title="${r.n}">${r.n}</div><div class="gt-t"></div></div>`:'').join('')).join('')}
    <div class="gt-play" id="gp"><div class="mango" id="gm"></div></div></div>`;
  const play=$('#gp',host), first=$('.gt-t',host);
  const p=v=>v/72*100+'%';
  function pinta(){
    const late=[];
    rows.forEach((r,i)=>{
      const t=$$('.gt-r',host).find(x=>+x.dataset.i===i).querySelector('.gt-t'), fin=r.b+1, col=ESTADO[r.est].c;
      const cerrado = r.est==='ejecutado'||r.est==='retirado'; let h='';
      if(r.est==='retirado') h=`<div class="bd ret" style="left:${p(r.a)};width:${p(fin-r.a)}"></div>`;
      else {
        const dn=Math.max(0,Math.min(hoy,fin)-r.a);
        if(dn>0) h+=`<div class="bd dn${hoy>=fin?' solo':''}" style="left:${p(r.a)};width:${p(dn)};background:${col}"></div>`;
        if(hoy<fin) h+=`<div class="bd ft" style="left:${p(Math.max(hoy,r.a))};width:${p(fin-Math.max(hoy,r.a))};background-color:${col}"></div>`;
        if(!cerrado && hoy>fin){ h+=`<div class="bd lt" style="left:${p(fin)};width:${p(hoy-fin)}"></div><span class="tg" style="left:${p(hoy)}">+${Math.round(hoy-fin)} m</span>`; late.push([r,hoy-fin]); }
      }
      t.innerHTML=h;
    });
    play.style.setProperty('--f',Math.min(1,Math.max(0,hoy/72)));
    const mi=Math.floor(hoy), dim=new Date(2023,mi+1,0).getDate(), d=new Date(2023,mi,1+Math.min(dim-1,Math.floor((hoy-mi)*dim)));
    $('#gm',host).textContent=fFecha(d);
    host.dispatchEvent(new CustomEvent('gantt',{detail:{late:late.sort((a,b)=>b[1]-a[1]),fecha:d}}));
    $$('.gt-r',host).forEach(r=>r.classList.toggle('sel',rows[+r.dataset.i]===sel));
  }
  $$('.gt-r',host).forEach(r=>r.onclick=()=>{ sel=rows[+r.dataset.i]; onSel&&onSel(sel,hoy); pinta(); });
  arrastrar($('#gm',host),{ mueve:e=>{ const b=first.getBoundingClientRect(); hoy=Math.min(71.99,Math.max(0,(e.clientX-b.left)/b.width*72)); pinta(); } });
  pinta();
  return { set(f){ hoy=idxFecha(f); pinta(); }, get hoy(){ return hoy; } };
}
const rezagoTxt = (r,hoy) => { const m=hoy-(r.b+1); return m>0&&r.est!=='ejecutado'&&r.est!=='retirado' ? `<b style="color:#FFB4B6">${Math.round(m)} meses de rezago</b> frente al plan. ` : ''; };

/* ---------- ALERTA 8a — cronograma CONPES interactivo ---------- */
VIS.obraA = root => {
  const rows = GANTT.filter(g=>g.g!=='Tecnología');
  root.innerHTML = `<div class="tec" style="gap:.7rem">
    <div class="gt-top rv"><button class="chip" id="bc">Corte ${CORTE.txt}</button><button class="chip" id="bh">Hoy</button>
      ${Object.entries(ESTADO).filter(([k])=>k!=='estudios'&&k!=='sindato').map(([k,e])=>`<span class="chip" style="cursor:default"><i style="background:${e.c}"></i>${e.n}</span>`).join('')}
      <span class="res" id="rs"></span></div>
    <div class="rv" id="gh"></div>
    <div class="gt-d rv" id="gd"></div></div>`;
  let elegido=false;
  const det = (r,hoy)=>{ elegido=true; $('#gd',root).innerHTML = `<h5>${r.n} <span class="pill" style="background:${ESTADO[r.est].c};color:#06122E">${ESTADO[r.est].n}</span></h5>Plan CONPES: ${mesTxt(r.a)} → ${mesTxt(r.b)}. ${rezagoTxt(r,hoy)}<br>${r.nota}`; };
  const api = gantt($('#gh',root), rows, { onSel:det });
  $('#gh',root).addEventListener('gantt',e=>{ const l=e.detail.late;
    $('#rs',root).textContent = l.length ? `${l.length} frente${l.length>1?"s":""} con rezago · mayor: ${l[0][0].n} (+${Math.round(l[0][1])} m)` : 'Sin rezagos a esta fecha';
    if(!elegido) $('#gd',root).innerHTML = `<b>A la fecha ${fFecha(e.detail.fecha)}:</b> ${l.length?l.map(([r,m])=>`${r.n} (+${Math.round(m)} m)`).join(' · '):'ningún frente supera su fecha de cierre.'}<br><span class="mut">Arrastra la línea blanca por el tiempo. Toca una barra para ver el estado de cada frente.</span>`; });
  $('#bc',root).onclick=()=>{ elegido=false; api.set(CORTE.fecha); }; $('#bh',root).onclick=()=>{ elegido=false; api.set(new Date()); };
  api.set(CORTE.fecha);
};

/* ---------- ALERTA 8b — mapa de frentes ---------- */
VIS.obraB = root => {
  root.style.padding='0';
  root.innerHTML = `<div class="mp"><div id="mapa"></div>
    <div class="mp-l rv"><h4>Frentes de infraestructura · toca para enfocar</h4><div id="ml"></div></div>
    <div class="mp-c"><button class="chip on" id="tp1"><i style="background:#4C8DFF"></i>Paraderos T1/T2</button><button class="chip on" id="tpa"><i style="background:#4C8DFF"></i>Patiotalleres</button></div>
    <div class="mp-d rv" id="md"><b>Frentes pendientes de infraestructura.</b> Toca un corredor en el mapa o en la lista.</div></div>`;
  const F = [
    { id:'ferrocarril', n:'Av. Ferrocarril', s:'Consultoría radicada en UMUS · 10 jun', c:ESTADO.estudios.c, k:['ferrocarril'], t:'Estudios y diseños Fase III radicados en UMUS el 10 de junio de 2026 para concepto de elegibilidad. Disponibilidad presupuestal de obra: $32.035 M + interventoría $2.122 M.' },
    { id:'ambala', n:'Av. Ambalá', s:'En ejecución', c:ESTADO.ejecucion.c, k:['ambala1','ambala2'], t:'Contrato de Obra 042 de 2026. Tramo 1 (Cra 5 → Cl 37) y tramo 2 (Cl 77 → Cl 63): 5.007 m intervenidos.' },
    { id:'cra5', n:'Carrera 5', s:'Ejecutada', c:ESTADO.ejecutado.c, k:['carrera5','carrera5FaseI'], t:'Fases I y II ejecutadas: eje troncal del SETP, con soluciones de accesibilidad universal en los pasos peatonales.' },
    { id:'ciclo', n:'Cicloinfraestructura Cra 5', s:'Radicación proyectada · 30 jun', c:ESTADO.estructuracion.c, k:['cicloCarrera5'], t:'Consultoría de cicloinfraestructura y adecuación de andenes (Cl 10–44): estructuración, próxima a radicar en UMUS. Valor estimado $1.222 M.' },
    { id:'paraderos', n:'Paraderos Tipo 1 y 2', s:'Llave en mano · radicar 7 jul', c:ESTADO.estructuracion.c, k:[], t:'10 paraderos Tipo I y 71 Tipo II con MUPI. En estructuración bajo modalidad llave en mano; Nación $8.669 M.' },
    { id:'patios', n:'Patiotalleres', s:'4 predios georreferenciados · se requieren 5', c:ESTADO.estructuracion.c, k:[], t:'Predio 1 ($15.075 M, Municipio) y Predio 2 ($15.061 M, Nación) en estructuración. El estudio de septiembre de 2025 indica 5 patiotalleres: hay 4 puntos en el KMZ; falta definir el modelo.' },
    { id:'jordan', n:'Av. Jordán Paralela', s:'Sin recursos · en revisión', c:ESTADO.bloqueado.c, k:[], t:'Por el tope presupuestal del componente se priorizaron los demás corredores. Está en revisión la posibilidad de redistribución. No tiene traza georreferenciada.' }];
  $('#ml',root).innerHTML = F.map(f=>`<button data-id="${f.id}" style="--c:${f.c}"><i></i><span>${f.n}<small>${f.s}</small></span></button>`).join('');
  const M=[]; const flip=c=>[c[1],c[0]];
  const map = new maplibregl.Map({ container:'mapa', center:[-75.205,4.437], zoom:12.1+Math.log2(Math.max(200,$('#mapa',root).clientWidth)/1170), attributionControl:{compact:true},
    style:{ version:8, sources:{ base:{ type:'raster', tileSize:256, maxzoom:19, attribution:'© OpenStreetMap contributors',
      tiles:['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png','https://b.tile.openstreetmap.org/{z}/{x}/{y}.png','https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'] } },
      layers:[{id:'fondo',type:'background',paint:{'background-color':'#0d1b45'}},{id:'base',type:'raster',source:'base',paint:{'raster-saturation':-0.9,'raster-contrast':-0.1,'raster-brightness-max':.55,'raster-brightness-min':0,'raster-opacity':.95}}] } });
  window.__mapa = map;
  limpiar.push(()=>{ try{ map.remove(); }catch(e){} });
  const R = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const lugar = f => { $$('#ml button',root).forEach(b=>b.classList.toggle('sel',b.dataset.id===f.id));
    $('#md',root).innerHTML=`<b>${f.n}</b> · <span style="color:${f.c}">${f.s}</span><br>${f.t}`;
    let pts=[]; f.k.forEach(k=>pts.push(...CORREDORES[k].coords)); if(f.id==='paraderos') pts=PARADEROS_12; if(f.id==='patios') pts=PATIOS.map(p=>p.coord);
    if(pts.length){ const b=new maplibregl.LngLatBounds(); pts.forEach(c=>b.extend(flip(c))); map.fitBounds(b,{padding:{left:23*R,top:5*R,right:3*R,bottom:10*R},maxZoom:15.6,duration:1600}); } };
  $$('#ml button',root).forEach(b=>b.onclick=()=>lugar(F.find(f=>f.id===b.dataset.id)));
  map.on('load',()=>{
    F.forEach(f=>f.k.forEach(k=>{
      map.addSource('c-'+k,{type:'geojson',data:{type:'Feature',properties:{},geometry:{type:'LineString',coordinates:CORREDORES[k].coords.map(flip)}}});
      if(f.id!=='ciclo') map.addLayer({id:'cs-'+k,type:'line',source:'c-'+k,layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#fff','line-width':11,'line-opacity':.9}});
      map.addLayer({id:'c-'+k,type:'line',source:'c-'+k,layout:{'line-cap':'round','line-join':'round'},
        paint: f.id==='ciclo' ? {'line-color':f.c,'line-width':5,'line-dasharray':[1.4,1.4]} : {'line-color':f.c,'line-width':6}});
      map.on('click','c-'+k,()=>lugar(f)); map.on('mouseenter','c-'+k,()=>map.getCanvas().style.cursor='pointer'); map.on('mouseleave','c-'+k,()=>map.getCanvas().style.cursor='');
    }));
    PARADEROS_12.forEach(c=>{ const el=document.createElement('div'); el.className='mk-p'; M.push(['p1',new maplibregl.Marker({element:el}).setLngLat(flip(c)).addTo(map)]); });
    PATIOS.forEach(p=>{ const el=document.createElement('div'); el.className='mk-pa'; el.innerHTML='<i>🏭</i>'; el.title=p.nombre; el.onclick=()=>lugar(F.find(f=>f.id==='patios'));
      M.push(['pa',new maplibregl.Marker({element:el}).setLngLat(flip(p.coord)).addTo(map)]); });
    const bb=new maplibregl.LngLatBounds(); Object.values(CORREDORES).forEach(c=>c.coords.forEach(p=>bb.extend(flip(p)))); PATIOS.forEach(p=>bb.extend(flip(p.coord)));
    map.fitBounds(bb,{padding:{left:23*R,top:5*R,right:3*R,bottom:10*R},duration:0});
  });
  const tog=(id,tipo)=>$('#'+id,root).onclick=()=>{ const b=$('#'+id,root); b.classList.toggle('on'); M.filter(m=>m[0]===tipo).forEach(m=>b.classList.contains('on')?m[1].addTo(map):m[1].remove()); };
  tog('tp1','p1'); tog('tpa','pa');
};

/* =====================================================================
   ALERTA 9 — Tecnología: red arrastrable + cronograma
   ===================================================================== */
VIS.tecno = root => {
  const ND = [
    { id:'cc',  n:'Centro de control',      s:'Lote 6 · compra 2027',    x:500, y:145, w:190, est:'estructuracion', g:'Centro de control' },
    { id:'rec', n:'Recaudo',                s:'Proceso a estructurar 2026', x:190, y:60,  w:170, est:'estructuracion', g:'Recaudo y control de flota' },
    { id:'flo', n:'Control de flota',       s:'Recursos desde 2027',     x:190, y:230, w:170, est:'estructuracion', g:'Recaudo y control de flota' },
    { id:'usu', n:'Información al usuario', s:'En formulación',          x:810, y:60,  w:190, est:'estructuracion', g:'Información al usuario' },
    { id:'sem', n:'Semáforos',              s:'Fase I al 75 % · Fase II en estructuración', x:810, y:230, w:200, est:'ejecucion', g:'Semaforización' },
    { id:'fet', n:'FET · modelo financiero',s:'Resultado en julio de 2026', x:500, y:28,  w:200, est:'estructuracion', g:null }];
  const LK = [['cc','rec'],['cc','flo'],['cc','usu'],['cc','sem'],['cc','fet'],['fet','rec']];
  root.innerHTML = `<div class="tec">
    <div class="tec-n rv"><div class="tec-b"><button class="btn" id="si">▶ Simular integración</button><button class="btn sec" id="re" style="display:none">↺ Restablecer</button>
      <span class="tx" id="tx">Arrastra los nodos. Azul: en estructuración · Ámbar: en ejecución · Verde: integrado.</span></div>
      <svg viewBox="0 0 1000 300" id="sv"></svg></div>
    <div class="tec-g rv" id="gh"></div></div>`;
  const sv=$('#sv',root); const N={}; ND.forEach(n=>N[n.id]={...n,ok:false});
  const col = n => n.ok?'#1FBF5B':ESTADO[n.est].c;
  sv.innerHTML = LK.map((l,i)=>`<line class="lk" id="lk${i}"/>`).join('') + LK.map((l,i)=>`<circle class="pk" id="pk${i}" r="5" style="display:none"/>`).join('') +
    ND.map(n=>`<g class="nd" data-id="${n.id}"><rect id="r-${n.id}" x="${-n.w/2}" y="-27" width="${n.w}" height="54" rx="12" fill="${col(N[n.id])}" fill-opacity=".92" stroke="#fff" stroke-width="2"/>
      <text y="-4" font-size="14">${n.n}</text><text class="s" y="14">${n.s}</text></g>`).join('');
  const pos=()=>{ ND.forEach(n=>{ const o=N[n.id]; $(`.nd[data-id=${n.id}]`,sv).setAttribute('transform',`translate(${o.x},${o.y})`); });
    LK.forEach((l,i)=>{ const a=N[l[0]], b=N[l[1]], e=$('#lk'+i,sv); e.setAttribute('x1',a.x); e.setAttribute('y1',a.y); e.setAttribute('x2',b.x); e.setAttribute('y2',b.y); e.classList.toggle('ok',a.ok&&b.ok); }); };
  pos();
  $$('.nd',sv).forEach(g=>{ const o=N[g.dataset.id];
    let off=[0,0];
    arrastrar(g,{ inicio:e=>{ const p=svgPt(sv,e); off=[p.x-o.x,p.y-o.y]; }, mueve:e=>{ const p=svgPt(sv,e); o.x=Math.min(900,Math.max(100,p.x-off[0])); o.y=Math.min(272,Math.max(28,p.y-off[1])); pos(); } });
    g.onmouseenter=e=>{ const r=o.g&&GANTT.find(x=>x.n===o.g); if(r) verTip(`<b>${r.n}</b><br>Plan: ${mesTxt(r.a)} → ${mesTxt(r.b)}<br>${r.nota}`,e); };
    g.onmouseleave=ocultaTip; });
  let raf; const loop=t=>{ LK.forEach((l,i)=>{ const a=N[l[0]], b=N[l[1]], c=$('#pk'+i,sv), on=a.ok&&b.ok; c.style.display=on?'':'none';
      if(on){ const p=((t/1400)+i*.17)%1; c.setAttribute('cx',a.x+(b.x-a.x)*p); c.setAttribute('cy',a.y+(b.y-a.y)*p); } }); raf=requestAnimationFrame(loop); };
  raf=requestAnimationFrame(loop); limpiar.push(()=>cancelAnimationFrame(raf));
  const pinta=()=>ND.forEach(n=>$('#r-'+n.id,sv).setAttribute('fill',col(N[n.id])));
  const tms=[]; limpiar.push(()=>tms.forEach(clearTimeout));
  $('#si',root).onclick=()=>{ $('#si',root).style.display='none'; ['sem','rec','flo','usu','cc','fet'].forEach((id,i)=>tms.push(setTimeout(()=>{ N[id].ok=true; pinta(); pos();
      if(i===5){ $('#tx',root).innerHTML='<b style="color:#7CE6A6">Paquete integrado:</b> recaudo + control de flota + información + control + semáforos + FET.'; $('#re',root).style.display=''; } },i*700))); };
  $('#re',root).onclick=()=>{ tms.forEach(clearTimeout); ND.forEach(n=>N[n.id].ok=false); pinta(); pos(); $('#re',root).style.display='none'; $('#si',root).style.display='';
    $('#tx',root).textContent='Arrastra los nodos. Azul: en estructuración · Ámbar: en ejecución · Verde: integrado.'; };
  gantt($('#gh',root), GANTT.filter(g=>g.g==='Tecnología'));
};
