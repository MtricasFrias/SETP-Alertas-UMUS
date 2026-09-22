/* =====================================================================
   ESCENAS: portada · panorama · resumen de alerta · marco de "explorar" · hoja de ruta · gracias
   ===================================================================== */
const estilo = css => document.head.insertAdjacentHTML('beforeend','<style>'+css+'</style>');
const catDe = n => CAT[ALERTAS[n-1].cat].c;
const CATN = { critica:0, moderada:1, leve:2 };

estilo(`
.cifra b.m{ font-size:4.7rem; white-space:normal; line-height:1.02; letter-spacing:-.02em }
.oscuro mark, .pt mark{ background:none; color:var(--sol) }

/* ---------- portada ---------- */
.pt{ position:absolute; inset:0; color:#fff; overflow:hidden }
.pt:before{ content:""; position:absolute; inset:0; background:repeating-linear-gradient(0deg,transparent 0 5.2rem,rgba(255,255,255,.06) 5.2rem calc(5.2rem + .1rem)) }
.pt-logo{ position:absolute; right:7rem; top:4rem; height:34rem }
.pt-txt{ position:absolute; left:6.4rem; top:5rem; width:80rem }
.pt-k{ font:700 1.75rem var(--fd); color:var(--sol); letter-spacing:.01em }
.pt h1{ font:900 6.6rem/1 var(--fd); letter-spacing:-.035em; margin:1.2rem 0 1.6rem }
.pt p{ font:500 2.3rem/1.28 var(--ft); color:#DDE5FA; max-width:72rem }
.pt-n{ display:flex; gap:4.6rem; margin:2.2rem 0 2.4rem }
.pt-n div b{ display:block; font:800 5.2rem/1 var(--fd) } .pt-n div span{ font-size:1.7rem; color:#B9C6EA }
.pt-b{ display:flex; gap:1.6rem }
.pt .btn{ font-size:1.9rem; padding:1.3rem 2.6rem }
.pt .btn.borde{ color:#fff; box-shadow:inset 0 0 0 .22rem #fff } .pt .btn.borde:hover{ background:rgba(255,255,255,.12) }
.pt-staff{ position:absolute; left:2rem; bottom:.4rem; width:116rem; height:24rem; overflow:visible }
.pt-staff .lin{ stroke:rgba(255,255,255,.4); stroke-width:1.8 }
.pt-staff .nota{ cursor:pointer; transform-box:fill-box; transform-origin:center; animation:pop 24s linear infinite }
.pt-staff .nota:hover ellipse{ filter:brightness(1.15) }
.pt-staff .nota text.n{ font:800 16px var(--fd); fill:var(--nx) }
.pt-staff .nota text.l{ font:600 17px var(--ft); fill:#C9D4F1; text-anchor:middle }
.pt-staff .nota:hover text.l{ fill:#fff }
@keyframes pop{ 0%{ transform:scale(1.6) } 3.5%{ transform:scale(1) } 100%{ transform:scale(1) } }
.pt-bus{ position:absolute; bottom:8.5rem; width:7.4rem; height:4rem; color:var(--verde); animation:corre 24s linear infinite; pointer-events:none }
@keyframes corre{ from{ left:-8rem } to{ left:128rem } }

/* ---------- panorama ---------- */
.pn{ position:absolute; inset:0 }
.pn-l{ position:absolute; left:3.4rem; top:7rem; width:75rem }
.pn h1{ font:800 4.3rem/1 var(--fd); color:var(--ink); letter-spacing:-.025em }
.pn-f{ display:flex; gap:.9rem; margin:1.6rem 0 1.2rem }
.tabla{ width:100%; border-collapse:collapse }
.tabla th{ text-align:left; font:700 1.5rem var(--fd); color:var(--mut); padding:.5rem 1rem; border-bottom:.25rem solid var(--ink); cursor:pointer; white-space:nowrap; user-select:none }
.tabla th:hover{ color:var(--ink) }
.tabla td{ font-size:1.65rem; padding:.62rem 1rem; border-bottom:.12rem solid var(--rule); line-height:1.15; transition:.15s }
.tabla tbody tr{ cursor:pointer; transition:.15s } .tabla tbody tr:hover, .tabla tbody tr.hl{ background:#EAE5D8 }
.tabla tbody tr.dim{ opacity:.25 }
.tabla td.n{ font:800 2.1rem var(--fd); color:var(--c); width:4.6rem }
.tabla td.t{ font-weight:600; color:var(--ink) }
.tabla .cat{ display:inline-flex; align-items:center; gap:.7rem; font-weight:700 } .tabla .cat i{ width:1.2rem; height:1.2rem; border-radius:50%; background:var(--c) }
.pn-r{ position:absolute; right:3.4rem; top:7rem; width:37rem }
.pn-c{ display:flex; gap:2.4rem; align-items:flex-end; margin-bottom:1.6rem }
.pn-c div b{ display:block; font:800 5rem/1 var(--fd) } .pn-c div span{ font-size:1.5rem; color:var(--mut) }
.mx{ display:grid; grid-template-columns:12.4rem repeat(3,minmax(0,1fr)); grid-auto-rows:5.2rem; gap:.25rem }
.mx .h{ font:700 1.5rem var(--fd); color:var(--mut); display:flex; align-items:center; justify-content:center }
.mx .r{ font-size:1.5rem; font-weight:600; color:var(--ink); display:flex; align-items:center }
.mx .c{ background:#ECE7DB; display:flex; align-items:center; justify-content:center }
.bub{ position:relative; width:4rem; height:4rem; border-radius:50%; background:var(--c); color:var(--cx); font:800 1.9rem var(--fd); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:transform .25s cubic-bezier(.3,1.5,.5,1) }
.bub:hover, .bub.hl{ transform:scale(1.25) } .bub.dim{ opacity:.2 }
.bub .nueva{ position:absolute; top:-2.3rem; left:50%; transform:translateX(-50%); background:var(--ink); color:#fff; font:700 1.5rem var(--fd); padding:0 .6rem; border-radius:.3rem }

/* ---------- hoja de ruta ---------- */
.rt{ position:absolute; inset:0 }
.rt-h{ position:absolute; left:3.4rem; right:3.4rem; top:7rem; display:flex; align-items:flex-end; gap:3rem }
.rt-h h1{ font:800 4.3rem/1 var(--fd); color:var(--ink); letter-spacing:-.025em }
.rt-h p{ margin-left:auto; max-width:56rem; text-align:right; font-size:1.65rem; line-height:1.2; color:var(--mut) }
.rt-b{ position:absolute; left:3.4rem; right:3.4rem; top:13.2rem; display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); gap:1.4rem }
.rt-c h3{ font:800 2.1rem var(--fd); color:var(--ink); padding-bottom:.7rem; border-bottom:.3rem solid var(--ink); margin-bottom:1rem }
.hito{ display:block; width:100%; text-align:left; background:#fff; border-left:.6rem solid var(--c); padding:.55rem 1rem .65rem; margin-bottom:.7rem; transition:.2s }
.hito:hover{ background:#EFEAE0 }
.hito b{ display:flex; align-items:center; gap:.6rem; font:700 1.5rem var(--fd); color:var(--c); margin-bottom:.15rem }
.hito em{ display:block; font:700 1.5rem var(--fd); font-style:normal; margin-top:.15rem; color:var(--mut) }
.hito span{ font-size:1.55rem; line-height:1.15; color:var(--ink); font-weight:600 }
.hito.vence{ background:#FBE6E4; border-left-color:var(--rojo) } .hito.vence em{ color:var(--rojo) }
.hito.ok em{ color:var(--verde) } .hito.dim{ opacity:.25 }
.rt-f{ position:absolute; left:3.4rem; right:3.4rem; bottom:.8rem; height:15.6rem; display:grid; grid-template-columns:44rem minmax(0,1fr); gap:3rem }
.rt-f .caja{ background:#fff; padding:1.3rem 1.8rem }
.rt-f h4{ font:700 1.5rem var(--fd); color:var(--mut); margin-bottom:.5rem }
.rt-f .fecha{ font:800 3.2rem/1 var(--fd); color:var(--ink); margin-bottom:.4rem }
.rt-f .bt{ display:flex; gap:.8rem; margin-top:.6rem }
.sf{ display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.5rem 2rem }
.sf button{ text-align:left; font-size:1.5rem; line-height:1.1; padding:.22rem 0; border-bottom:.1rem solid var(--rule); color:var(--ink) }
.sf button:hover{ background:#EFEAE0 } .sf button b{ display:inline-block; min-width:3.4rem; font:800 1.5rem var(--fd); color:var(--c) }

/* ---------- gracias ---------- */
.fin{ position:absolute; inset:0; overflow:hidden; color:#fff }
.fin:before{ content:""; position:absolute; inset:0; background:repeating-linear-gradient(0deg,transparent 0 5.2rem,rgba(255,255,255,.06) 5.2rem calc(5.2rem + .1rem)) }
.fin-t{ position:absolute; left:7rem; top:5rem }
.fin-t small{ display:block; font:800 5rem/1 var(--fd) }
.fin-t .bar{ display:inline-block; margin-top:.6rem; background:var(--sol); color:var(--ink); font:900 11rem/1.02 var(--fd); letter-spacing:-.04em; padding:0 3rem 0 1.4rem;
  clip-path:inset(0 100% 0 0); animation:barre .9s .25s cubic-bezier(.2,.8,.2,1) forwards }
@keyframes barre{ to{ clip-path:inset(0 0 0 0) } }
.fin p{ font:500 2.4rem/1.3 var(--ft); color:#DDE5FA; max-width:56rem; margin-top:2rem }
.fin-bus{ position:absolute; bottom:6.9rem; width:44rem; height:23.9rem; color:var(--verde); right:-70rem; animation:llega 2.2s cubic-bezier(.15,.7,.2,1) .2s forwards }
@keyframes llega{ to{ right:3rem } }
.fin-road{ position:absolute; left:0; right:0; bottom:5.6rem; height:.6rem; background:repeating-linear-gradient(90deg,#fff 0 4rem,transparent 4rem 8rem); opacity:.35; animation:ruta 1.2s linear infinite }
@keyframes ruta{ to{ background-position:-8rem 0 } }
.fin-b{ position:absolute; left:7rem; top:31.8rem; display:flex; gap:1.6rem }
.fin .btn{ font-size:1.9rem; padding:1.3rem 2.6rem }
.fin .btn.borde{ color:#fff; box-shadow:inset 0 0 0 .22rem #fff }
.fin-l{ position:absolute; left:7rem; bottom:9.6rem; display:flex; align-items:center; gap:2rem }
`);

/* ------------------------------ resumen ------------------------------ */
NODO.resumen = s => {
  const a=s.a, c=CAT[a.cat], n=document.createElement('section');
  n.className='scene'; n.style.cssText=`--cat:${c.c};--catx:${c.tx}`;
  n.innerHTML=`
    <div class="spine"><div class="lab">Alerta</div><div class="num">${a.n}</div>
      <dl><dt>Categoría</dt><dd>${c.n}</dd><dt>Identificada en</dt><dd>${a.per}</dd><dt>Componente</dt><dd>${a.comp}</dd></dl></div>
    <div class="rmain">
      <h1 class="rv">${a.titulo}</h1>
      <p class="ofi rv">Alerta identificada: ${a.t}</p>
      <div class="rcols">
        <div><p class="frase rv">${md(a.frase)}</p><ul class="hechos">${a.hechos.map(h=>`<li class="rv">${h}</li>`).join('')}</ul></div>
        <div class="cifras">${a.cifras.map(f=>{
          const txt = f.n!==undefined ? f.n.toLocaleString('es-CO',{minimumFractionDigits:f.dec||0,maximumFractionDigits:f.dec||0})+(f.suf||'') : f.t;
          const dato = f.n!==undefined ? ` data-count="${f.n}" data-dec="${f.dec||0}" data-suf="${f.suf||''}"` : '';
          return `<div class="cifra rv"><b class="${txt.length>7?'m':''}"${dato}>${f.n!==undefined?'0':f.t}</b><span>${f.l}</span></div>`; }).join('')}</div>
      </div>
    </div>
    <div class="postura rv"><span>Postura del SETP</span><p>${a.postura}</p></div>`;
  return n;
};

/* ------------------------------ marco de explorar ------------------------------ */
NODO.explorar = s => {
  const a=s.a, v=s.v, c=CAT[a.cat], n=document.createElement('section');
  n.className='scene exp'; n.style.cssText=`--cat:${c.c};--catx:${c.tx}`;
  n.innerHTML=`
    <div class="spine"><div class="num">${a.n}</div></div>
    <div class="emain">
      <div class="ehead"><h2>${a.titulo}</h2><p class="prompt">${ico('i-'+v.icono)}<span>${v.pregunta}</span></p></div>
      <div class="viz"></div></div>`;
  return n;
};

/* ------------------------------ portada ------------------------------ */
VIS.portada = root => {
  const cuenta = k => ALERTAS.filter(a=>a.cat===k).length;
  root.innerHTML = `<div class="pt">
    <img class="pt-logo" src="img/logo-full.png" alt="TransMusical SETP">
    <div class="pt-txt">
      <div class="pt-k">Alertas identificadas por la UMUS</div>
      <h1>Seguimiento general de <mark>alertas</mark></h1>
      <p>Dónde estamos, qué decidimos y con qué fecha se cierra cada una.</p>
      <div class="pt-n">
        <div><b data-count="${ALERTAS.length}">0</b><span>alertas</span></div>
        <div><b style="color:#FF7A80" data-count="${cuenta('critica')}">0</b><span>críticas</span></div>
        <div><b style="color:#FFC83D" data-count="${cuenta('moderada')}">0</b><span>moderada</span></div>
        <div><b style="color:#5FD68C" data-count="${cuenta('leve')}">0</b><span>leves</span></div>
      </div>
      <div class="pt-b"><button class="btn sol" id="ini">Iniciar recorrido</button><button class="btn borde" id="pan">Ver panorama</button></div>
    </div>
    <svg class="pt-staff" viewBox="0 0 1200 240">${[70,90,110,130,150].map(y=>`<line class="lin" x1="0" x2="1200" y1="${y}" y2="${y}"/>`).join('')}
      ${ALERTAS.map((a,i)=>{
        const x=80+i*130, y=[150,130,110,90,70,90,110,130,150][i], k=CAT[a.cat], arr=y>=110;
        const d=(((2+x/1200*116+8)/136)*24).toFixed(2);
        return `<g class="nota" data-n="${a.n}" style="animation-delay:${d}s;--nx:${k.tx}"><title>${a.n}. ${a.titulo}</title>
          <line x1="${arr?x+15:x-15}" x2="${arr?x+15:x-15}" y1="${y}" y2="${arr?y-56:y+56}" stroke="${k.c}" stroke-width="4" stroke-linecap="round"/>
          <ellipse cx="${x}" cy="${y}" rx="19" ry="13" fill="${k.c}" transform="rotate(-20 ${x} ${y})"/>
          <text class="n" x="${x}" y="${y+6}" text-anchor="middle">${a.n}</text>
          <text class="l" x="${x}" y="215">${a.corto}</text></g>`; }).join('')}
    </svg>
    <svg class="pt-bus"><use href="#i-bus"/></svg></div>`;
  $('#ini',root).onclick = () => ir(idxTipo('panorama'));
  $('#pan',root).onclick = () => ir(idxTipo('panorama'));
  $$('.nota',root).forEach(g => g.onclick = () => ir(idxAlerta(+g.dataset.n)));
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
    </div>
    <div class="pn-r rv">
      <div class="pn-c">${['critica','moderada','leve'].map(k=>`<div><b style="color:${CAT[k].c}">${cnt[k]}</b><span>${CAT[k].n}${cnt[k]>1?'s':''}</span></div>`).join('')}</div>
      <div class="mx" id="mx"></div>
    </div></div>`;
  const nombres={todas:'Todas',critica:'Críticas',moderada:'Moderada',leve:'Leves'};
  $('#fil',root).innerHTML = Object.entries(nombres).map(([k,n])=>`<button class="chip${k==='todas'?' on':''}" data-f="${k}" style="--c:${k==='todas'?'#0F1F52':CAT[k].c}">${k!=='todas'?'<i></i>':''}${n}</button>`).join('');
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

/* ------------------------------ hoja de ruta: tablero por mes ------------------------------ */
VIS.ruta = root => {
  const T0=new Date(2026,3,1).getTime(), T1=new Date(2027,1,10).getTime();
  const COLS=[['Abr–May',new Date(2026,5,1)],['1–15 jun',new Date(2026,5,16)],['16–30 jun',new Date(2026,6,1)],['Julio',new Date(2026,7,1)],['Ago–Sep',new Date(2026,9,1)],['Oct 2026–2027',new Date(2028,0,1)]];
  let fecha=CORTE.fecha.getTime(), filt=null;
  const ordenados=[...HITOS].sort((a,b)=>a.f-b.f);
  root.innerHTML=`<div class="rt">
    <div class="rt-h rv"><h1>Hoja de ruta 2026</h1><p>Cada compromiso con su fecha. Mueve la fecha de revisión: lo que quedó atrás sin cumplirse se marca en rojo.</p></div>
    <div class="rt-b rv" id="bd"></div>
    <div class="rt-f rv">
      <div class="caja"><h4>Fecha de revisión</h4><div class="fecha" id="fc"></div>
        <input type="range" id="rg" min="${T0}" max="${T1}" step="86400000" value="${fecha}">
        <div class="bt"><button class="chip" id="bc">Corte ${CORTE.txt}</button><button class="chip" id="bh">Hoy</button></div></div>
      <div class="caja"><h4>Sin fecha en el corte: se fijan en esta reunión</h4><div class="sf" id="sf"></div></div>
    </div></div>`;
  const bd=$('#bd',root); let ini=T0;
  bd.innerHTML=COLS.map(([n,fin],i)=>{ const hs=ordenados.filter(h=>h.f>=ini&&h.f<fin); ini=+fin;
    return `<div class="rt-c"><h3>${n}</h3>${hs.map(h=>`<button class="hito" data-i="${HITOS.indexOf(h)}" style="--c:${catDe(h.a[0])}"><b>A${h.a.join(" · A")} · ${h.f.getDate()} ${MES[h.f.getMonth()]}</b><span>${h.c}</span><em></em></button>`).join('')}</div>`; }).join('');
  function pinta(){
    $('#fc',root).textContent=fFecha(new Date(fecha));
    $$('.hito',bd).forEach(b=>{ const h=HITOS[+b.dataset.i], vence=h.est==='programado'&&h.f.getTime()<fecha;
      b.classList.toggle('vence',vence); b.classList.toggle('ok',h.est==='cumplido'); b.classList.toggle('dim',filt!==null&&!h.a.includes(filt));
      $("em",b).textContent = h.est==="cumplido"?"Cumplido":vence?"Fecha superada":""; });
  }
  $('#rg',root).oninput=e=>{ fecha=+e.target.value; pinta(); };
  $('#bc',root).onclick=()=>{ fecha=CORTE.fecha.getTime(); $('#rg',root).value=fecha; pinta(); };
  $('#bh',root).onclick=()=>{ fecha=Math.min(Date.now(),T1); $('#rg',root).value=fecha; pinta(); };
  $$('.hito',bd).forEach(b=>{ b.onclick=()=>{ const h=HITOS[+b.dataset.i]; filt = (filt!==null && h.a.includes(filt)) ? null : h.a[0]; pinta(); };
    b.onmouseenter=e=>{ const h=HITOS[+b.dataset.i]; verTip(`${h.t}<br><span style="opacity:.8">Responsable: ${h.r}</span>`,e); }; b.onmouseleave=ocultaTip; });
  $('#sf',root).innerHTML=SIN_FECHA.map(s=>`<button data-a="${s.a}" style="--c:${catDe(s.a)}"><b>A${s.a}</b>${s.c}</button>`).join('');
  $$('#sf button',root).forEach(b=>b.onclick=()=>ir(idxAlerta(+b.dataset.a)));
  pinta();
};

/* ------------------------------ gracias ------------------------------ */
VIS.fin = root => {
  root.innerHTML=`<div class="fin">
    <div class="fin-t"><small class="rv">Muchas</small><span class="bar">gracias</span><p class="rv">Nueve alertas, una posición clara para cada una. El SETP sigue en marcha.</p></div>
    <div class="fin-b rv"><button class="btn sol" id="v1">Volver al panorama</button><button class="btn borde" id="v2">Hoja de ruta</button><button class="btn borde" id="v3">Reiniciar</button></div>
    <div class="fin-road"></div><svg class="fin-bus"><use href="#i-bus"/></svg>
    <div class="fin-l rv"><img src="img/logo-full.png" style="height:12rem" alt=""><img src="img/alcaldia.png" style="height:8.4rem;background:#fff;border-radius:.8rem;padding:.4rem .9rem" alt=""></div></div>`;
  $('#v1',root).onclick=()=>ir(idxTipo('panorama')); $('#v2',root).onclick=()=>ir(idxTipo('ruta')); $('#v3',root).onclick=()=>ir(0);
};
