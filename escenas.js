/* =====================================================================
   ESCENAS: portada · panorama · qué cambió · resumen de alerta · marco de "explorar" · hoja de ruta · gracias
   ===================================================================== */
const estilo = css => document.head.insertAdjacentHTML('beforeend','<style>'+css+'</style>');
const catDe = n => CAT[ALERTAS[n-1].cat].c;
const CATN = { critica:0, moderada:1, leve:2 };

estilo(`
.cifra b.m{ font-size:4.7rem; white-space:normal; line-height:1.02; letter-spacing:-.02em }

/* ---------- resumen: llegada del tranvía (alerta 4) ---------- */
/* el «destape» se hace con transform (ventana que avanza + contenido que retrocede), no con clip-path, para que no se repinte en cada cuadro */
.tw .tw-clip{ position:absolute; inset:0; overflow:hidden; will-change:transform; animation:twClip 3.4s cubic-bezier(.45,.05,.25,1) both }
.tw .tw-in{ position:absolute; inset:0; will-change:transform; animation:twIn 3.4s cubic-bezier(.45,.05,.25,1) both }
.tw .rv{ opacity:1; transform:none; animation:none }
@keyframes twClip{ 0%{ transform:translateX(-120rem) } 70%,100%{ transform:none } }
@keyframes twIn{ 0%{ transform:translateX(120rem) } 70%,100%{ transform:none } }
.tw .tw-rail{ position:absolute; left:20rem; right:0; top:46.7rem; height:.5rem; border-radius:1rem; background:repeating-linear-gradient(90deg,#9CC4FF 0 2.2rem,transparent 2.2rem 3.6rem); box-shadow:0 0 1rem rgba(120,175,255,.85) }
.tw .tw-tram{ position:absolute; left:-62rem; top:34.9rem; width:62rem; height:12.6rem; z-index:8; will-change:transform; animation:twTram 3.4s cubic-bezier(.45,.05,.25,1) both; pointer-events:none }
.tw .tw-tram:after{ content:""; position:absolute; left:3rem; right:3rem; bottom:-.2rem; height:1.4rem; background:radial-gradient(ellipse at center,rgba(31,60,120,.28),transparent 70%) }
.tw .tw-tram svg{ display:block; width:100%; height:100%; overflow:visible; animation:twBob .3s ease-in-out infinite alternate }
.tw .tw-tram .wh{ transform-box:fill-box; transform-origin:center; animation:twWh .42s steps(8) infinite }
.tw .tw-beam{ position:absolute; left:61.4rem; top:6.6rem; width:28rem; height:5.4rem; background:linear-gradient(90deg,rgba(255,236,170,.9),transparent); clip-path:polygon(0 30%,100% 0,100% 100%,0 70%) }
.tw .tw-sp{ position:absolute; left:-9rem; height:.3rem; border-radius:1rem; background:#fff; opacity:.9 } .tw .tw-sp:nth-of-type(2){ top:3rem; width:11rem } .tw .tw-sp:nth-of-type(3){ top:6.4rem; width:7rem } .tw .tw-sp:nth-of-type(4){ top:9.4rem; width:9rem }
@keyframes twTram{ 0%{ transform:translateX(0) } 70%{ transform:translateX(120rem) } 100%{ transform:translateX(188rem) } }
@keyframes twBob{ to{ transform:translateY(-.22rem) } }
@keyframes twWh{ to{ transform:rotate(360deg) } }

/* ---------- panorama ---------- */
.pn{ position:absolute; inset:0 }
.pn-l{ position:absolute; left:3.4rem; top:7rem; width:75rem }
.pn h1{ font:800 4.3rem/1 var(--fd); color:var(--ink); letter-spacing:-.025em }
.pn-f{ display:flex; gap:.9rem; margin:1.6rem 0 1.2rem }
.tabla{ width:100%; border-collapse:collapse }
.tabla th{ text-align:left; font:700 1.5rem var(--fd); color:var(--mut); padding:.5rem 1rem; border-bottom:.25rem solid var(--ink); cursor:pointer; white-space:nowrap; user-select:none }
.tabla th:hover{ color:var(--ink) }
.tabla td{ font-size:1.65rem; padding:.62rem 1rem; border-bottom:.12rem solid var(--rule); line-height:1.15; transition:.15s }
.tabla tbody tr{ cursor:pointer; transition:.15s } .tabla tbody tr:hover, .tabla tbody tr.hl{ background:#DCE8F8 }
.tabla tbody tr.dim{ opacity:.25 }
.tabla td.n{ font:800 2.1rem var(--fd); color:var(--c); width:4.6rem }
.tabla td.t{ font-weight:600; color:var(--ink) }
.tabla .cat{ display:inline-flex; align-items:center; gap:.7rem; font-weight:700 } .tabla .cat i{ width:1.2rem; height:1.2rem; border-radius:50%; background:var(--c) }
.pn-nov{ margin-top:1.4rem; display:flex; align-items:center; gap:1.6rem }
.pn-nov span{ font-size:1.6rem; color:var(--mut) }
.pn-r{ position:absolute; right:3.4rem; top:7rem; width:37rem }
.pn-c{ display:flex; gap:2.4rem; align-items:flex-end; margin-bottom:1.6rem }
.pn-c div b{ display:block; font:800 5rem/1 var(--fd) } .pn-c div span{ font-size:1.5rem; color:var(--mut) }
.mx{ display:grid; grid-template-columns:12.4rem repeat(3,minmax(0,1fr)); grid-auto-rows:5.2rem; gap:.25rem }
.mx .h{ font:700 1.5rem var(--fd); color:var(--mut); display:flex; align-items:center; justify-content:center }
.mx .r{ font-size:1.5rem; font-weight:600; color:var(--ink); display:flex; align-items:center }
.mx .c{ background:#DCE8F6; display:flex; align-items:center; justify-content:center }
.bub{ position:relative; width:4rem; height:4rem; border-radius:50%; background:var(--c); color:var(--cx); font:800 1.9rem var(--fd); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:transform .25s cubic-bezier(.3,1.5,.5,1) }
.bub:hover, .bub.hl{ transform:scale(1.25) } .bub.dim{ opacity:.2 }
.bub .nueva{ position:absolute; top:-2.3rem; left:50%; transform:translateX(-50%); background:var(--ink); color:#fff; font:700 1.5rem var(--fd); padding:0 .6rem; border-radius:.3rem }

/* ---------- qué cambió ---------- */
.cb{ position:absolute; inset:0 }
.cb-h1{ position:absolute; left:3.4rem; right:3.4rem; top:7rem; display:flex; align-items:flex-end; gap:3rem }
.cb-h1 h1{ flex:none; white-space:nowrap; font:800 3.7rem/1 var(--fd); color:var(--ink); letter-spacing:-.025em }
.cb-h1 p{ margin-left:auto; max-width:38rem; text-align:right; font-size:1.55rem; line-height:1.2; color:var(--mut) } .cb-h1 p b{ color:var(--ink) }
.cb-l{ position:absolute; left:3.4rem; top:13.4rem; width:44rem; display:flex; flex-direction:column; gap:.45rem }
.cb-l button{ display:flex; align-items:center; gap:1.2rem; text-align:left; padding:.5rem 1.2rem .5rem .6rem; background:var(--card); border-left:.6rem solid var(--c); font:700 1.65rem/1.1 var(--fd); color:var(--ink); transition:.2s; height:4.35rem }
.cb-l button:hover{ background:#E3EDFB } .cb-l button.sel{ background:var(--navy); color:#fff }
.cb-l button em{ flex:none; width:3rem; height:3rem; border-radius:50%; background:var(--c); color:var(--cx); font:800 1.6rem var(--fd); font-style:normal; display:grid; place-items:center }
.cb-l button span{ flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis }
.cb-l button i{ flex:none; font:800 1.5rem var(--fd); font-style:normal; padding:.1rem .8rem; border-radius:.4rem; background:var(--sol); color:var(--ink) }
.cb-l button.sin i{ background:#D6DEEC; color:var(--mut) }
.cb-r{ position:absolute; left:51.4rem; right:3.4rem; top:13.4rem; bottom:1rem; background:var(--card); padding:2rem 2.6rem; display:flex; flex-direction:column; gap:1.6rem }
.cb-t{ display:flex; align-items:center; gap:1.4rem } .cb-t em{ flex:none; width:4.6rem; height:4.6rem; border-radius:50%; background:var(--c); color:var(--cx); font:800 2.4rem var(--fd); font-style:normal; display:grid; place-items:center }
.cb-t h2{ font:800 3rem/1.05 var(--fd); color:var(--ink); letter-spacing:-.02em }
.cb-tl{ display:flex; align-items:center; gap:1.4rem; font:800 1.6rem var(--fd); color:var(--mut) } .cb-tl b{ color:var(--ink) }
.cb-rail{ position:relative; flex:1; height:4.6rem; margin:0 3.4rem }
.cb-rail:before{ content:""; position:absolute; left:0; right:0; top:3.1rem; height:.5rem; border-radius:1rem; background:repeating-linear-gradient(90deg,#8093B8 0 1.6rem,transparent 1.6rem 2.6rem) }
.cb-rail:after{ content:""; position:absolute; left:0; top:3.1rem; height:.5rem; border-radius:1rem; background:var(--c,var(--ink)); width:var(--w,0%); transition:width 1.2s cubic-bezier(.5,0,.2,1) }
.cb-bus{ position:absolute; top:0; width:6.4rem; height:3.5rem; margin-left:-3.2rem; left:0; color:var(--verde); transition:left 1.2s cubic-bezier(.5,0,.2,1) }
.cb-cols{ flex:1; min-height:0; display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.15fr); gap:1.8rem }
.cb-a, .cb-n{ padding:1.4rem 1.8rem; display:flex; flex-direction:column; gap:.6rem }
.cb-a{ background:var(--paper); color:var(--mut) } .cb-a span, .cb-n span{ font:800 1.5rem var(--fd); letter-spacing:.04em; text-transform:uppercase }
.cb-a p{ font:600 2rem/1.25 var(--ft) }
.cb-n{ background:var(--navy); color:#fff; border-top:.6rem solid var(--sol) } .cb-n span{ color:var(--sol) } .cb-n p{ font:600 2.1rem/1.25 var(--ft) }
.cb-n.sin{ background:#D6DEEC; color:var(--tx); border-top-color:#B0BCD2 } .cb-n.sin span{ color:var(--mut) }
.cb-n.pop{ animation:popN .55s cubic-bezier(.34,1.5,.5,1) } @keyframes popN{ from{ transform:translateY(1.4rem) scale(.96); opacity:0 } }
.cb-b{ display:flex; gap:1.2rem }

/* ---------- hoja de ruta ---------- */
.rt{ position:absolute; inset:0 }
.rt-h{ position:absolute; left:3.4rem; right:3.4rem; top:7rem; display:flex; align-items:flex-end; gap:3rem }
.rt-h h1{ font:800 4.3rem/1 var(--fd); color:var(--ink); letter-spacing:-.025em }
.rt-h p{ margin-left:auto; max-width:56rem; text-align:right; font-size:1.65rem; line-height:1.2; color:var(--mut) }
.rt-b{ position:absolute; left:3.4rem; right:3.4rem; top:13.2rem; display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); gap:1.4rem }
.rt-c h3{ font:800 2.1rem var(--fd); color:var(--ink); padding-bottom:.7rem; border-bottom:.3rem solid var(--ink); margin-bottom:1rem }
.hito{ display:block; width:100%; text-align:left; background:var(--card); border-left:.6rem solid var(--c); padding:.55rem 1rem .65rem; margin-bottom:.7rem; transition:.2s }
.hito:hover{ background:#E3EDFB }
.hito b{ display:flex; align-items:center; gap:.6rem; font:700 1.5rem var(--fd); color:var(--c); margin-bottom:.15rem }
.hito em{ display:block; font:700 1.5rem var(--fd); font-style:normal; margin-top:.15rem; color:var(--mut) }
.hito span{ font-size:1.55rem; line-height:1.15; color:var(--ink); font-weight:600 }
.hito.vence{ background:#FBE6E4; border-left-color:var(--rojo) } .hito.vence em{ color:var(--rojo-t) }
.hito.pc{ background:#FBF0D2 } .hito.pc em{ color:var(--ambar-t) }
.hito.ok em{ color:var(--verde-t) } .hito.dim{ opacity:.25 }
.rt-f{ position:absolute; left:3.4rem; right:3.4rem; bottom:.8rem; height:15.6rem; display:grid; grid-template-columns:44rem minmax(0,1fr); gap:3rem }
.rt-f .caja{ background:var(--card); padding:1.3rem 1.8rem }
.rt-f h4{ font:700 1.5rem var(--fd); color:var(--mut); margin-bottom:.5rem }
.rt-f .fecha{ font:800 3.2rem/1 var(--fd); color:var(--ink); margin-bottom:.4rem }
.rt-f .bt{ display:flex; gap:.8rem; margin-top:.6rem }
.sf{ display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.5rem 2rem }
.sf button{ text-align:left; font-size:1.5rem; line-height:1.1; padding:.22rem 0; border-bottom:.1rem solid var(--rule); color:var(--ink) }
.sf button:hover{ background:#E3EDFB } .sf button b{ display:inline-block; min-width:3.4rem; font:800 1.5rem var(--fd); color:var(--c) }
`);

/* ------------------------------ resumen ------------------------------ */
NODO.resumen = s => {
  const a=s.a, c=CAT[a.cat], n=document.createElement('section'), tram=a.anim==='tram';
  n.className='scene'+(tram?' tw':''); n.style.cssText=`--cat:${c.c};--catx:${c.tx}`;
  const cuerpo=`
    <div class="spine"><div class="lab">Alerta</div><div class="num">${a.n}</div>
      <dl><dt>Categoría</dt><dd>${c.n}</dd><dt>Identificada en</dt><dd>${a.per}</dd><dt>Componente</dt><dd>${a.comp}</dd><dt>Corte</dt><dd>${a.corte}</dd></dl></div>
    <div class="rmain">
      <h1 class="rv">${a.titulo}</h1>
      <p class="ofi rv">Alerta identificada: ${a.t}</p>
      <div class="rcols${a.cifras.length?'':' uno'}${a.hechos.length>3?' denso':''}">
        <div>${a.frase?`<p class="frase rv">${md(a.frase)}</p>`:''}<ul class="hechos">${a.hechos.map(h=>`<li class="rv">${h}</li>`).join('')}</ul></div>
        ${a.cifras.length?`<div class="cifras">${a.cifras.map(f=>{
          const txt = f.n!==undefined ? f.n.toLocaleString('es-CO',{minimumFractionDigits:f.dec||0,maximumFractionDigits:f.dec||0})+(f.suf||'') : f.t;
          const dato = f.n!==undefined ? ` data-count="${f.n}" data-dec="${f.dec||0}" data-suf="${f.suf||''}"` : '';
          return `<div class="cifra rv"><b class="${txt.length>7?'m':''}"${dato}>${f.n!==undefined?'0':f.t}</b><span>${f.l}</span></div>`; }).join('')}</div>`:''}
      </div>
    </div>
    <div class="postura rv"><span>Línea de actividades del SETP</span><p>${a.postura}</p></div>`;
  n.innerHTML = tram ? `<div class="tw-clip"><div class="tw-in">${cuerpo}<div class="tw-rail"></div></div></div><div class="tw-tram">${tramSVG()}<i class="tw-beam"></i><i class="tw-sp"></i><i class="tw-sp"></i><i class="tw-sp"></i></div>` : cuerpo;
  if(tram){ n.dataset.delay=2400; n.addEventListener('animationend',e=>{ if(e.animationName==='twTram') $('.tw-tram',n).remove(); }); }
  return n;
};

/* ------------------------------ marco de explorar ------------------------------ */
NODO.explorar = s => {
  const a=s.a, v=s.v, c=CAT[a.cat], n=document.createElement('section');
  n.className='scene exp'; n.style.cssText=`--cat:${c.c};--catx:${c.tx}`;
  n.innerHTML=`
    <div class="spine"><div class="num">${a.n}</div></div>
    <div class="emain">
      <div class="ehead rv"><h2>${a.titulo}</h2><p class="prompt">${v.icono?ico("i-"+v.icono):""}<span>${v.pregunta}</span></p></div>
      <div class="viz"></div></div>`;
  return n;
};

/* ------------------------------ portada: el viaje ------------------------------ */
VIS.portada = root => {
  const v = montarViaje(root,{ tipo:'portada',
    cover:`<div class="cv"><div class="kick">Alertas identificadas por la UMUS · actualización <b>${CORTE_ACT.txt}</b></div>
      <h1>Seguimiento general de <mark>alertas</mark></h1>
      <p>Sube al bus: deja que recorra las 9 paradas o arrástralo por la ruta.</p>
      <div class="lg-f">${leyendaCat()}</div></div>`,
    barra:`<button class="btn borde" id="vjPlay"></button>${MOSTRAR_CAMBIOS?'<button class="btn borde" id="bcm">Qué cambió</button>':''}<button class="btn" id="bin">Iniciar recorrido</button><button class="btn cta" id="btr">¿Sabías que…?</button>` });
  const tip=document.createElement('div'); tip.className='cta-tip'; tip.textContent='¡Empieza con una pregunta!'; v.el.append(tip);
  const u=parseFloat(getComputedStyle(document.documentElement).fontSize), br=$('#btr',root).getBoundingClientRect(), sr=$('#stage').getBoundingClientRect(); tip.style.left=((br.left-sr.left+br.width/2)/u)+'rem'; tip.style.translate='-50% 0';
  const tq=setTimeout(()=>tip.remove(),16000); limpiar.push(()=>clearTimeout(tq)); $('#btr',root).addEventListener('click',()=>tip.remove());
  const abre = trivia(v.el);
  $('#btr',root).onclick = abre;
  const bc=$('#bcm',root); if(bc) bc.onclick = () => ir(idxTipo('cambios'));
  $('#bin',root).onclick = () => ir(idxTipo('panorama'));
};

/* ------------------------------ panorama ------------------------------ */
VIS.panorama = root => {
  const cnt = {critica:0, moderada:0, leve:0}; ALERTAS.forEach(a=>cnt[a.cat]++);
  let filtro='todas', orden={k:'n', d:1};
  root.innerHTML = `<div class="pn">
    <div class="pn-l">
      <h1 class="rv">${ALERTAS.length} alertas abiertas</h1>
      <div class="pn-f rv" id="fil"></div>
      <table class="tabla rv"><thead><tr><th data-k="n">No.</th><th data-k="titulo">Alerta</th><th data-k="per">Período</th><th data-k="comp">Componente</th><th data-k="cat">Categoría</th></tr></thead><tbody id="tb"></tbody></table>
      ${MOSTRAR_CAMBIOS?`<div class="pn-nov rv"><button class="btn sol" id="bnov">Qué cambió desde el 26 de junio →</button><span>${ALERTAS.filter(a=>a.act).length} de ${ALERTAS.length} con información nueva</span></div>`:''}
    </div>
    <div class="pn-r rv">
      <div class="pn-c">${['critica','moderada','leve'].map(k=>`<div><b style="color:${CAT[k].c}">${cnt[k]}</b><span>${CAT[k].n}${cnt[k]>1?'s':''}</span></div>`).join('')}</div>
      <div class="mx" id="mx"></div>
    </div></div>`;
  const bn=$('#bnov',root); if(bn) bn.onclick=()=>ir(idxTipo('cambios'));
  const nombres={todas:'Todas',critica:'Críticas',moderada:'Moderada',leve:'Leves'};
  $('#fil',root).innerHTML = Object.entries(nombres).map(([k,n])=>`<button class="chip${k==='todas'?' on':''}" data-f="${k}" style="--c:${k==='todas'?'#1F3C78':CAT[k].c}">${k!=='todas'?'<i></i>':''}${n}</button>`).join('');
  const tb=$('#tb',root);
  function filas(){
    const arr=[...ALERTAS].sort((a,b)=>{ const va=orden.k==='cat'?CATN[a.cat]:a[orden.k], vb=orden.k==='cat'?CATN[b.cat]:b[orden.k]; return (va>vb?1:va<vb?-1:a.n-b.n)*orden.d; });
    tb.innerHTML=arr.map(a=>`<tr data-n="${a.n}" style="--c:${CAT[a.cat].c}" class="${filtro!=='todas'&&a.cat!==filtro?'dim':''}"><td class="n">${a.n}</td><td class="t">${a.titulo}</td><td>${a.per}</td><td>${a.comp}</td><td><span class="cat"><i></i>${CAT[a.cat].n}</span></td></tr>`).join('');
    $$('tr',tb).forEach(tr=>{ tr.onclick=()=>ir(idxAlerta(+tr.dataset.n)); tr.onmouseenter=()=>hl(tr.dataset.n,true); tr.onmouseleave=()=>hl(tr.dataset.n,false); });
  }
  const hl=(n,on)=>$$(`[data-n="${n}"]`,root).forEach(e=>e.classList.toggle('hl',on));
  function aplica(){ $$('.bub',root).forEach(b=>b.classList.toggle('dim',filtro!=='todas'&&ALERTAS[b.dataset.n-1].cat!==filtro)); filas(); $$('#fil .chip',root).forEach(c=>c.classList.toggle('on',c.dataset.f===filtro)); }
  $$('#fil .chip',root).forEach(c=>c.onclick=()=>{ filtro=c.dataset.f; aplica(); });
  $$('.tabla th',root).forEach(th=>th.onclick=()=>{ orden={k:th.dataset.k, d:orden.k===th.dataset.k?-orden.d:1}; filas(); });
  let m='<div class="h"></div>'+PERIODOS.map(p=>`<div class="h">${p}</div>`).join('');
  COMPONENTES.forEach(c=>{ m+=`<div class="r">${c}</div>`; PERIODOS.forEach(p=>{
    const as=ALERTAS.filter(a=>a.comp===c&&a.per===p);
    m+=`<div class="c">${as.map(a=>`<div class="bub" data-n="${a.n}" style="--c:${CAT[a.cat].c};--cx:${CAT[a.cat].tx}">${a.n}${p==='2026-II'?'<span class="nueva">nueva</span>':''}</div>`).join('')}</div>`; }); });
  $('#mx',root).innerHTML=m;
  $$('.bub',root).forEach(b=>{ b.onclick=()=>ir(idxAlerta(+b.dataset.n));
    b.onmouseenter=e=>{ hl(b.dataset.n,true); verTip(`${b.dataset.n}. ${ALERTAS[b.dataset.n-1].titulo}`,e); }; b.onmouseleave=()=>{ hl(b.dataset.n,false); ocultaTip(); }; });
  filas();
};

/* ------------------------------ qué cambió desde el corte anterior ------------------------------ */
VIS.cambios = root => {
  let sel=0, auto=true, tm;
  const up=ALERTAS.filter(a=>a.act);
  root.innerHTML=`<div class="cb">
    <div class="cb-h1 rv"><h1>Qué cambió desde el 26 de junio</h1><p><b>${up.length} de ${ALERTAS.length}</b> alertas tienen información nueva al ${CORTE_ACT.txt}. Toca una para comparar.</p></div>
    <div class="cb-l rv" id="cbl">${ALERTAS.map(a=>`<button data-n="${a.n}" class="${a.act?'':'sin'}" style="--c:${CAT[a.cat].c};--cx:${CAT[a.cat].tx}"><em>${a.n}</em><span>${a.titulo}</span><i>${a.act?'Nueva':'Sin cambios'}</i></button>`).join('')}</div>
    <div class="cb-r rv" id="cbr">
      <div class="cb-t"><em id="cbe"></em><h2 id="cbt"></h2></div>
      <div class="cb-tl"><b>Corte 26 jun</b><div class="cb-rail" id="cbrl"><svg class="cb-bus" id="cbb" viewBox="0 0 140 76"><use href="#i-bus"/></svg></div><b id="cbf"></b></div>
      <div class="cb-cols"><div class="cb-a"><span>Antes · 26 jun</span><p id="cba"></p></div><div class="cb-n" id="cbn"><span id="cbs"></span><p id="cbp"></p></div></div>
      <div class="cb-b"><button class="btn sol" id="cbv">Ver la alerta →</button><button class="btn borde" id="cbau"></button></div>
    </div></div>`;
  const pinta=()=>{ const a=ALERTAS[sel], c=CAT[a.cat], r=$('#cbr',root);
    r.style.setProperty('--c',c.c); r.style.setProperty('--cx',c.tx);
    $$('#cbl button',root).forEach(b=>b.classList.toggle('sel',+b.dataset.n===a.n));
    $('#cbe',root).textContent=a.n; $('#cbt',root).textContent=a.titulo; $('#cbf',root).textContent=a.act?a.corte:'Sin cambios';
    $('#cba',root).textContent=a.act?a.antes:'Se mantiene la información del corte del 26 de junio de 2026.';
    const nn=$('#cbn',root); nn.classList.toggle('sin',!a.act); nn.classList.remove('pop'); void nn.offsetWidth; nn.classList.add('pop');
    $('#cbs',root).textContent=a.act?'Ahora · '+a.corte:'Ahora'; $('#cbp',root).textContent=a.act?a.ahora:'Sin novedades en este corte. Esta alerta se actualiza cuando llegue información nueva.';
    /* el bus viaja de un corte al otro */
    const bus=$('#cbb',root), rl=$('#cbrl',root); bus.style.transition='none'; bus.style.left='0%'; rl.style.setProperty('--w','0%'); void bus.offsetWidth; bus.style.transition='';
    setTimeout(()=>{ if(a.act){ bus.style.left='100%'; rl.style.setProperty('--w','100%'); } },60);
    $('#cbv',root).textContent='Ver la alerta '+a.n+' →'; };
  const auBtn=()=>{ $('#cbau',root).textContent=auto?'❚❚ Recorrido automático':'▶ Recorrido automático'; };
  const tic=()=>{ clearTimeout(tm); if(!auto) return; tm=setTimeout(()=>{ let k=sel; do{ k=(k+1)%ALERTAS.length; }while(!ALERTAS[k].act); sel=k; pinta(); tic(); },6200); };
  $$('#cbl button',root).forEach(b=>b.onclick=()=>{ sel=+b.dataset.n-1; auto=false; auBtn(); clearTimeout(tm); pinta(); });
  $('#cbau',root).onclick=()=>{ auto=!auto; auBtn(); tic(); };
  $('#cbv',root).onclick=()=>ir(idxAlerta(ALERTAS[sel].n));
  limpiar.push(()=>clearTimeout(tm)); pinta(); auBtn(); tic();
};

/* ------------------------------ hoja de ruta: tablero por mes ------------------------------ */
VIS.ruta = root => {
  const T0=new Date(2026,3,1).getTime(), T1=new Date(2027,1,10).getTime();
  const COLS=[['Abr–May',new Date(2026,5,1)],['1–15 jun',new Date(2026,5,16)],['16–30 jun',new Date(2026,6,1)],['Julio',new Date(2026,7,1)],['Ago–Sep',new Date(2026,9,1)],['Oct 2026–2027',new Date(2028,0,1)]];
  let fecha=CORTE_ACT.fecha.getTime(), filt=null;
  const ordenados=[...HITOS].sort((a,b)=>a.f-b.f);
  root.innerHTML=`<div class="rt">
    <div class="rt-h rv"><h1>Hoja de ruta 2026</h1><p>Cada compromiso con su fecha. Mueve la fecha de revisión: lo que quedó atrás sin cumplirse se marca en rojo y lo que falta confirmar, en ámbar.</p></div>
    <div class="rt-b rv" id="bd"></div>
    <div class="rt-f rv">
      <div class="caja"><h4>Fecha de revisión</h4><div class="fecha" id="fc"></div>
        <input type="range" id="rg" min="${T0}" max="${T1}" step="86400000" value="${fecha}">
        <div class="bt"><button class="chip" id="bc">Corte ${CORTE_ACT.txt}</button><button class="chip" id="bh">Hoy</button></div></div>
      <div class="caja"><h4>Sin fecha en el corte: se fijan en esta reunión</h4><div class="sf" id="sf"></div></div>
    </div></div>`;
  const bd=$('#bd',root); let ini=T0;
  bd.innerHTML=COLS.map(([n,fin],i)=>{ const hs=ordenados.filter(h=>h.f>=ini&&h.f<fin); ini=+fin;
    return `<div class="rt-c"><h3>${n}</h3>${hs.map(h=>`<button class="hito" data-i="${HITOS.indexOf(h)}" style="--c:${catDe(h.a[0])}"><b>A${h.a.join(" · A")} · ${h.f.getDate()} ${MES[h.f.getMonth()]}</b><span>${h.c}</span><em></em></button>`).join('')}</div>`; }).join('');
  function pinta(){
    $('#fc',root).textContent=fFecha(new Date(fecha));
    $$('.hito',bd).forEach(b=>{ const h=HITOS[+b.dataset.i], pasada=h.f.getTime()<fecha, vence=h.est==='programado'&&pasada, pc=h.est==='porconfirmar'&&pasada;
      b.classList.toggle('vence',vence); b.classList.toggle('pc',pc); b.classList.toggle('ok',h.est==='cumplido'); b.classList.toggle('dim',filt!==null&&!h.a.includes(filt));
      $("em",b).textContent = h.est==="cumplido"?"Cumplido":vence?"Fecha superada":pc?"Por confirmar estado":""; });
  }
  let rgR=0; $('#rg',root).oninput=e=>{ fecha=+e.target.value; if(!rgR) rgR=requestAnimationFrame(()=>{ rgR=0; pinta(); }); }; limpiar.push(()=>cancelAnimationFrame(rgR));
  $('#bc',root).onclick=()=>{ fecha=CORTE_ACT.fecha.getTime(); $('#rg',root).value=fecha; pinta(); };
  $('#bh',root).onclick=()=>{ fecha=Math.min(Date.now(),T1); $('#rg',root).value=fecha; pinta(); };
  $$('.hito',bd).forEach(b=>{ b.onclick=()=>{ const h=HITOS[+b.dataset.i]; filt = (filt!==null && h.a.includes(filt)) ? null : h.a[0]; pinta(); };
    b.onmouseenter=e=>{ const h=HITOS[+b.dataset.i]; verTip(`${h.t}<br><span style="opacity:.8">Responsable: ${h.r}</span>`,e); }; b.onmouseleave=ocultaTip; });
  $('#sf',root).innerHTML=SIN_FECHA.map(s=>`<button data-a="${s.a}" style="--c:${catDe(s.a)}"><b>A${s.a}</b>${s.c}</button>`).join('');
  $$('#sf button',root).forEach(b=>b.onclick=()=>ir(idxAlerta(+b.dataset.a)));
  pinta();
};

/* ------------------------------ gracias: el piano ------------------------------ */
VIS.fin = root => {
  const HZ=[261.63,293.66,329.63,392,440,523.25,587.33];
  const v = montarViaje(root,{ tipo:'fin',
    cover:`<div class="fin-t"><small>Muchas</small><div class="keys" id="keys">${'Gracias'.split('').map((ch,i)=>`<button class="key" data-i="${i}" style="--kc:${NOTAS_COL[i%NOTAS_COL.length]}">${ch}</button>`).join('')}</div>
      <div class="fin-sub">Toca las teclas · y toca una parada para volver a esa alerta</div></div>`,
    barra:`<button class="btn sol" id="v1">Volver al panorama</button><button class="btn" id="v2">Hoja de ruta</button><button class="btn borde" id="v3">Reiniciar</button>` });
  $('#v1',root).onclick=()=>ir(idxTipo('panorama')); $('#v2',root).onclick=()=>ir(idxTipo('ruta')); $('#v3',root).onclick=()=>ir(0);
  const host=v.el, R=()=>parseFloat(getComputedStyle(document.documentElement).fontSize), stage=$('#stage');
  $$('.key',root).forEach(k=>{
    const toca=e=>{ const i=+k.dataset.i; tono(HZ[i]); k.classList.add('dn'); setTimeout(()=>k.classList.remove('dn'),170);
      const r=k.getBoundingClientRect(), sr=stage.getBoundingClientRect(), u=R(); for(let j=0;j<2;j++) notaFlota(host,(r.left-sr.left+r.width/2)/u-1+j*2,(r.top-sr.top)/u-2); };
    k.addEventListener('pointerdown',e=>{ e.preventDefault(); toca(e); });
    k.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); toca(e); } }); });
  /* las teclas se bajan una a una al entrar y cae confeti */
  const tms=[]; $$('.key',root).forEach((k,i)=>tms.push(setTimeout(()=>{ k.classList.add('onda'); },900+i*130)));
  tms.push(setTimeout(()=>confeti(host),500)); limpiar.push(()=>tms.forEach(clearTimeout));
};
