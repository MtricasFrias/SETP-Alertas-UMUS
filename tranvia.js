/* =====================================================================
   TRANVÍA ART (riel virtual) — dibujo articulado, escena de trazabilidad
   (el tranvía recorre las fechas y la ciudad pasa a su lado) y escena de
   condiciones (el tranvía espera la luz verde).
   ===================================================================== */

/* ---------- dibujo del tranvía: 3 módulos articulados, fuelles, puertas y cabina ---------- */
const TR_MODS=[[6,208],[224,426],[442,636]], TR_DOORS=[[40,150],[258,368],[466,528]];
function tramInner(){
  let s='<ellipse cx="322" cy="124" rx="312" ry="5" fill="rgba(31,60,120,.2)"/>';
  [[208,224],[426,442]].forEach(([a,b])=>{ s+=`<rect x="${a}" y="30" width="${b-a}" height="74" rx="3" fill="#2F406A"/>`; for(let x=a+3;x<b;x+=4) s+=`<path d="M${x} 32V102" stroke="#4C6296" stroke-width="1.4"/>`; });
  s+=`<rect x="6" y="26" width="202" height="82" rx="14" fill="#F6F9FE" stroke="#C3D2EA" stroke-width="2"/><rect x="224" y="26" width="202" height="82" rx="10" fill="#F6F9FE" stroke="#C3D2EA" stroke-width="2"/>
      <path d="M442 26H588C618 26 636 48 636 78V100Q636 108 628 108H442Z" fill="#F6F9FE" stroke="#C3D2EA" stroke-width="2"/>`;
  TR_MODS.forEach(([x0,x1],mi)=>{ const xe=mi===2?632:x1-2; s+=`<rect x="${x0+2}" y="92" width="${xe-x0-2}" height="8" fill="#3AA56D"/><rect x="${x0+2}" y="100" width="${xe-x0-2}" height="3" fill="#F6BD4B"/><rect x="${x0+2}" y="103" width="${xe-x0-2}" height="5" fill="#34456E"/>`; });
  TR_MODS.forEach(([x0,x1],mi)=>{ const ds=TR_DOORS[mi], segs=[]; let cur=x0+12;
    ds.forEach(d=>{ segs.push([cur,d-6]); cur=d+36+6; }); segs.push([cur, mi===2?562:x1-12]);
    segs.forEach(([a,b],si)=>{ if(b-a<14) return; const n=Math.max(1,Math.round((b-a)/46)), w=(b-a-(n-1)*5)/n; for(let k=0;k<n;k++){ const x=a+k*(w+5);
      s+=`<rect x="${x.toFixed(1)}" y="36" width="${w.toFixed(1)}" height="30" rx="5" fill="#2F4470"/><path d="M${(x+6).toFixed(1)} 36l10 0-8 30-10 0z" fill="#fff" opacity=".14"/>`;
      if((mi*7+si*3+k)%3!==1) s+=`<circle cx="${(x+w*.45).toFixed(1)}" cy="55" r="5" fill="#E6BB98"/><path d="M${(x+w*.45-9).toFixed(1)} 66a9 9 0 0 1 18 0z" fill="#7C93C4"/>`; } }); });
  TR_MODS.forEach(([x0],mi)=>TR_DOORS[mi].forEach(d=>{ s+=`<g class="dr"><rect x="${d}" y="38" width="36" height="52" fill="#FFF0C4"/>
      <g class="dl l"><rect x="${d}" y="38" width="18" height="52" fill="#EAF0FB" stroke="#B7C7E2" stroke-width="1.5"/><rect x="${d+3}" y="43" width="12" height="28" rx="2" fill="#5C7FB8" opacity=".9"/></g>
      <g class="dl r"><rect x="${d+18}" y="38" width="18" height="52" fill="#EAF0FB" stroke="#B7C7E2" stroke-width="1.5"/><rect x="${d+21}" y="43" width="12" height="28" rx="2" fill="#5C7FB8" opacity=".9"/></g></g>`; }));
  s+=`<path d="M584 33C608 35 624 51 628 74L628 82H566V33Z" fill="#2A3D66"/><path d="M588 37L612 46 606 80 590 80Z" fill="#fff" opacity=".18"/>
      <rect x="566" y="32" width="52" height="10" rx="3" fill="#1B2A50"/><text x="592" y="40" text-anchor="middle" font-size="9" font-weight="800" fill="#FFD25E" font-family="Montserrat,Arial,sans-serif">ART</text>
      <rect x="628" y="84" width="9" height="8" rx="3" fill="#FFE9A6"/><rect x="612" y="90" width="22" height="3" rx="1.5" fill="#fff"/>
      <rect x="14" y="19" width="604" height="9" rx="4.5" fill="#DDE7F6"/><rect x="70" y="12" width="64" height="9" rx="4" fill="#C3D2EA"/><rect x="258" y="12" width="64" height="9" rx="4" fill="#C3D2EA"/><rect x="470" y="12" width="56" height="9" rx="4" fill="#C3D2EA"/>
      <path d="M602 19V9" stroke="#66799F" stroke-width="2.5"/><circle cx="602" cy="7" r="5" fill="#5B91E3"/><rect x="588" y="22" width="30" height="3" rx="1.5" fill="#7FA8E8"/>`;
  [52,164,268,380,486,586].forEach(x=>{ s+=`<g class="wh"><circle cx="${x}" cy="110" r="11" fill="#243252"/><circle cx="${x}" cy="110" r="5" fill="#C8D3EA"/><path d="M${x} 101V119M${x-9} 110H${x+9}" stroke="#7C8FB5" stroke-width="2"/></g>`; });
  return s;
}
const tramSVG = (cls='',extra='') => `<svg class="${cls}" viewBox="0 0 640 130" ${extra}>${tramInner()}</svg>`;
(function(){ const sp=document.querySelector('body > svg'); const old=sp.querySelector('#i-art'); if(old) old.remove(); sp.insertAdjacentHTML('beforeend',`<symbol id="i-art" viewBox="0 0 640 130">${tramInner()}</symbol>`); })();

estilo(`
/* ---------- trazabilidad: la ciudad pasa junto al tranvía ---------- */
.tv{ display:grid; grid-template-rows:35.5rem minmax(0,1fr); gap:1.4rem; height:100% }
.tv-scene{ position:relative; overflow:hidden; border-radius:1.2rem; background:linear-gradient(180deg,#CBE0F9 0%,#E6F1FE 50%,#F5F9FF 100%); box-shadow:0 .6rem 1.6rem rgba(31,60,120,.12) }
.tv-l{ position:absolute; left:0; top:0; height:100%; transition:transform var(--dur,1.9s) cubic-bezier(.5,0,.2,1); will-change:transform }
.tv-l svg{ display:block }
.tv-cl{ position:absolute; top:0; left:0; width:100%; height:16rem; pointer-events:none } .tv-cl i{ position:absolute; display:block; background:#fff; border-radius:9rem; opacity:.8; animation:tvNube var(--dd,140s) linear infinite; animation-delay:var(--dl,0s) }
@keyframes tvNube{ from{ transform:translateX(-30rem) } to{ transform:translateX(140rem) } }
.tv-ground{ position:absolute; left:0; top:27.6rem; bottom:0; background:linear-gradient(#94A5C7,#7E90B6) }
.tv-ground:before{ content:""; position:absolute; left:0; right:0; top:0; height:.7rem; background:#C9D5EA }
.tv-guide{ position:absolute; left:0; top:32.4rem; height:.45rem; border-radius:1rem; background:repeating-linear-gradient(90deg,#9CC4FF 0 2.8rem,transparent 2.8rem 4.6rem); box-shadow:0 0 1.2rem rgba(120,175,255,.95) }
.tv-sign{ position:absolute; top:20.2rem; width:25rem; z-index:2 } .tv-sign i{ display:block; margin:0 auto; width:.6rem; height:7rem; background:#8093B8 }
.tv-sign div{ background:#fff; border:.3rem solid var(--navy); border-radius:.8rem; padding:.6rem 1.2rem; font:700 1.6rem/1.2 var(--ft); color:var(--ink); text-align:center; box-shadow:0 .4rem 1rem rgba(31,60,120,.15) } .tv-sign b{ display:block; font:800 1.6rem var(--fd); color:var(--navy) }
.tv-st{ position:absolute; top:14.4rem; width:74rem; height:15.6rem }
.tv-st svg{ width:100%; height:100% }
.tv-st .pp{ transition:transform 1.6s ease-in, opacity 1.2s ease-in .2s } .tv-st.open .pp{ transform:translateX(var(--wx,20px)); opacity:0 }
.tv-tram{ position:absolute; left:23.9rem; top:19rem; width:58rem; height:11.8rem; z-index:6 }
.tv-tram svg{ display:block; width:100%; height:100%; overflow:visible }
.tv-tram.mov svg{ animation:tvBob .32s ease-in-out infinite alternate } @keyframes tvBob{ to{ transform:translateY(-.25rem) } }
.tv-tram .wh{ transform-box:fill-box; transform-origin:center; animation:tvWh .5s steps(8) infinite; animation-play-state:paused } .tv-tram.mov .wh{ animation-play-state:running } @keyframes tvWh{ to{ transform:rotate(360deg) } }
.tv-tram .dl{ transition:transform .8s cubic-bezier(.3,1.2,.5,1) } .tv-tram.abre .dl.l{ transform:translateX(-16px) } .tv-tram.abre .dl.r{ transform:translateX(16px) }
.tv-beam{ position:absolute; left:81.2rem; top:26.2rem; width:24rem; height:5.6rem; z-index:5; background:linear-gradient(90deg,rgba(255,236,170,.85),transparent); clip-path:polygon(0 30%,100% 0,100% 100%,0 70%); opacity:0; transition:opacity .5s }
.tv-sp{ position:absolute; left:6rem; height:.28rem; border-radius:1rem; background:#fff; opacity:0; z-index:4 }
.tv-scene.mov .tv-beam{ opacity:1 } .tv-scene.mov .tv-sp{ animation:tvSp .55s linear infinite; animation-delay:var(--d,0s) }
@keyframes tvSp{ 0%{ opacity:0; transform:translateX(8rem) } 30%{ opacity:.9 } 100%{ opacity:0; transform:translateX(-4rem) } }
.tv-card{ position:absolute; left:2.6rem; top:1.8rem; width:47rem; z-index:8; background:rgba(255,255,255,.95); border-left:.8rem solid var(--navy); border-radius:.4rem 1.4rem 1.4rem .4rem; padding:1.3rem 2.2rem 1.6rem; box-shadow:0 .8rem 2rem rgba(31,60,120,.18); transition:opacity .4s, transform .55s cubic-bezier(.34,1.4,.5,1) }
.tv-card.off{ opacity:0; transform:translateY(-1.6rem) } .tv-card.nuevo{ border-left-color:var(--sol) }
.tv-card small{ display:flex; align-items:center; gap:1rem; font:800 1.5rem var(--fd); color:var(--mut); letter-spacing:.06em; text-transform:uppercase } .tv-card small em{ font-style:normal; background:var(--sol); color:var(--ink); padding:.05rem .8rem; border-radius:.4rem; letter-spacing:0 }
.tv-card h3{ font:900 4.2rem/1 var(--fd); color:var(--ink); letter-spacing:-.03em; margin:.5rem 0 .7rem }
.tv-card p{ font:600 2.15rem/1.22 var(--ft); color:var(--tx) }
.tv-gap{ position:absolute; right:2.6rem; top:2rem; z-index:8; background:var(--navy); color:#fff; font:800 2rem var(--fd); padding:.8rem 1.8rem; border-radius:.9rem; opacity:0; transform:translateY(-1rem); transition:opacity .4s, transform .4s }
.tv-gap.on{ opacity:1; transform:none }
.tv-b{ display:grid; grid-template-columns:30rem minmax(0,1fr); gap:2rem; background:var(--card); padding:1rem 2rem .6rem; border-radius:1.2rem }
.tv-ctl{ display:flex; flex-direction:column; justify-content:center; gap:.9rem } .tv-ctl .fila{ display:flex; gap:.8rem } .tv-ctl .btn{ padding:.8rem 1.4rem; font-size:1.55rem } .tv-ctl b{ font:800 1.5rem var(--fd); color:var(--mut); letter-spacing:.05em; text-transform:uppercase }
.tv-r{ position:relative }
.tv-rail{ position:absolute; left:3.4%; right:3.4%; top:4.5rem; height:.6rem; border-radius:1rem; background:#D5DDEC } .tv-fill{ display:block; height:100%; width:0; border-radius:1rem; background:var(--sol); transition:width .9s cubic-bezier(.5,0,.2,1) }
.tv-dot{ position:absolute; top:3.2rem; width:3.2rem; height:3.2rem; margin-left:-1.6rem; border-radius:50%; background:var(--card); box-shadow:inset 0 0 0 .3rem #B7C6DF; font:800 1.55rem/3.2rem var(--fd); text-align:center; color:var(--mut); cursor:pointer; transition:.25s; z-index:2 }
.tv-dot.on{ background:var(--sol); box-shadow:none; color:var(--ink) } .tv-dot.cur{ background:var(--ink); color:#fff; transform:scale(1.25) }
.tv-dl{ position:absolute; top:6.6rem; width:9.4rem; margin-left:-4.7rem; text-align:center; font:700 1.5rem var(--fd); color:var(--mut); cursor:pointer } .tv-dl.cur{ color:var(--ink) }
.tv-mini{ position:absolute; top:.2rem; width:10.4rem; height:2.1rem; margin-left:-5.2rem; cursor:grab; z-index:4; touch-action:none; transition:left .9s cubic-bezier(.5,0,.2,1) } .tv-mini.arr{ cursor:grabbing; transition:none } .tv-mini svg{ width:100%; height:100%; display:block }

/* ---------- condiciones: el tranvía espera la luz verde ---------- */
.tc{ display:grid; grid-template-columns:minmax(0,1fr) 40rem; grid-template-rows:minmax(0,1fr) auto; gap:1.6rem 2rem; height:100% }
.tc-s{ position:relative; overflow:hidden; border-radius:1.2rem; background:linear-gradient(180deg,#CBE0F9 0%,#E6F1FE 55%,#F5F9FF 100%); box-shadow:0 .6rem 1.6rem rgba(31,60,120,.12) }
.tc-s svg.esc{ position:absolute; inset:0; width:100%; height:100% }
.tc-tram{ position:absolute; left:2rem; top:13.4rem; width:44rem; height:9rem; transition:transform 3.2s cubic-bezier(.6,0,.3,1) } .tc-tram svg{ display:block; width:100%; height:100%; overflow:visible }
.tc-tram.va{ transform:translateX(74rem) } .tc-tram .wh{ transform-box:fill-box; transform-origin:center; animation:tvWh .5s steps(8) infinite; animation-play-state:paused } .tc-tram.va .wh{ animation-play-state:running } .tc-tram .dl{ transition:transform .8s }
.tc-msg{ position:absolute; left:2.4rem; top:1.6rem; max-width:40rem; z-index:5; font:800 2.4rem/1.15 var(--fd); color:var(--ink) } .tc-msg span{ display:block; font:600 1.75rem var(--ft); color:var(--mut); margin-top:.3rem }
.tc-l .luz{ transition:fill .4s } .tc-l .gate{ transform-origin:0 0; transition:transform 1.2s cubic-bezier(.5,0,.2,1) } .tc-s.ok .gate{ transform:rotate(-78deg) }
.tc-c{ background:var(--card); padding:1.3rem 2rem 1.4rem; display:flex; flex-direction:column; gap:.7rem; border-radius:1.2rem }
.tc-c h4{ font:800 1.9rem var(--fd); color:var(--ink) } .tc-c h4 small{ display:block; font:600 1.55rem var(--ft); color:var(--mut); margin-top:.2rem }
.tc-o{ display:flex; align-items:center; gap:1.1rem; text-align:left; padding:.55rem 1.1rem; background:var(--paper); border-radius:1rem; font:700 1.7rem/1.12 var(--fd); color:var(--ink); transition:.25s; cursor:pointer } .tc-o:hover{ background:#DCE8F9 }
.tc-o .ck{ flex:none; width:3rem; height:3rem; border-radius:.8rem; background:#fff; box-shadow:inset 0 0 0 .3rem var(--rojo); position:relative; transition:.25s }
.tc-o.on .ck{ background:var(--verde); box-shadow:none } .tc-o.on .ck:before{ content:""; position:absolute; left:.9rem; top:.4rem; width:1rem; height:1.7rem; border-right:.4rem solid #fff; border-bottom:.4rem solid #fff; transform:rotate(45deg) }
.tc-k{ font:800 2rem var(--fd); color:var(--rojo-t); text-align:right } .tc-k.ok{ color:var(--verde-t) } .tc-rs{ position:absolute; right:2rem; bottom:1.6rem; z-index:6 }
.tc-p{ grid-column:1/3; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1.6rem }
.tc-cm{ display:flex; align-items:center; gap:1.3rem; background:var(--card); border-radius:1rem; padding:.7rem 1.4rem; font:600 1.65rem/1.15 var(--ft); color:var(--ink) } .tc-cm em{ flex:none; width:3.2rem; height:3.2rem; border-radius:50%; background:var(--navy); color:#fff; font:800 1.7rem var(--fd); font-style:normal; display:grid; place-items:center }
.tc-cm .pill{ margin-left:auto; flex:none }
.tc-h{ grid-column:1/3; font:700 1.5rem var(--fd); color:var(--mut); margin-bottom:-.6rem }
`);

/* ---------- estación con marquesina, cartel con la fecha y pasajeros ---------- */
const stationSVG = (i,h) => { const f=h.f.getDate()+'/'+(h.f.getMonth()+1)+'/'+h.f.getFullYear(), nu=!!h.nuevo;
  const pp=(x,c,dir)=>`<g class="pp" style="--wx:${dir*230}px"><rect x="${x-7}" y="103" width="14" height="24" rx="6" fill="${c}"/><rect x="${x-6}" y="121" width="5" height="17" rx="2" fill="#33415C"/><rect x="${x+1}" y="121" width="5" height="17" rx="2" fill="#33415C"/><circle cx="${x}" cy="97" r="7" fill="#E6BB98"/><path d="M${x-7} 95a7 7 0 0 1 14 0z" fill="#3B2A20"/></g>`;
  return `<svg viewBox="0 0 740 156"><rect x="0" y="0" width="740" height="12" rx="6" fill="#DCE6F6"/><rect x="0" y="10" width="740" height="6" fill="#B7C7E2"/><rect x="14" y="3" width="712" height="5" rx="2.5" fill="#8FB3E8" opacity=".55"/>
    ${[36,250,490,704].map(x=>`<rect x="${x}" y="14" width="8" height="118" fill="#8093B8"/>`).join('')}
    <path d="M300 16V26M440 16V26" stroke="#8093B8" stroke-width="3"/><rect x="262" y="26" width="216" height="34" rx="9" fill="${nu?'#FFD25E':'#3866B5'}"/>
    <circle cx="288" cy="43" r="13" fill="#fff"/><text x="288" y="49.5" text-anchor="middle" font-size="17" font-weight="800" fill="${nu?'#B77B00':'#3866B5'}" font-family="Montserrat,Arial,sans-serif">${i+1}</text>
    <text x="392" y="50" text-anchor="middle" font-size="19" font-weight="800" fill="${nu?'#1F3C78':'#fff'}" font-family="Montserrat,Arial,sans-serif">${f}</text>
    <rect x="0" y="128" width="740" height="14" fill="#C9D5EA"/><rect x="0" y="128" width="740" height="4" fill="#F6BD4B"/><rect x="0" y="142" width="740" height="14" fill="#B7C7E2"/>
    <rect x="110" y="112" width="64" height="7" rx="3" fill="#8093B8"/><rect x="118" y="119" width="5" height="9" fill="#8093B8"/><rect x="161" y="119" width="5" height="9" fill="#8093B8"/>
    ${pp(64,'#E5626A',1)}${pp(86,'#3AA56D',1)}${pp(660,'#F6BD4B',-1)}${pp(684,'#5B91E3',-1)}</svg>`; };

/* ============ 4b · trazabilidad: el tranvía recorre las fechas ============ */
VIS.appB = root => {
  const H=TRAZA, n=H.length, SP=84, CX=52.9, MES3=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const ctr=i=>100+i*SP+37, tx=i=>CX-ctr(i), corta=d=>d.getDate()+' '+MES3[d.getMonth()]+' '+String(d.getFullYear()).slice(2);
  let s=1, tot=100+n*SP+100;
  let r=7; const rnd=()=>{ r=(r*16807)%2147483647; return (r-1)/2147483646; };
  let sky=''; for(let x=0;x<tot*10;){ const w=30+rnd()*46, h=50+rnd()*120; sky+=`<rect x="${x.toFixed(0)}" y="${(260-h).toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" rx="4" fill="#DCE7F7"/>`; x+=w+6+rnd()*16; }
  let hills=''; for(let x=-200;x<tot*10;x+=600) hills+=`<path d="M${x} 300C${x+100} 220 ${x+180} 170 ${x+300} 200S${x+480} 250 ${x+600} 300Z" fill="#C9DBF3"/><path d="M${x+300} 300C${x+390} 240 ${x+470} 210 ${x+560} 236S${x+680} 270 ${x+800} 300Z" fill="#BCD3EE" opacity=".9"/>`;
  const arb=x=>`<g transform="translate(${x} 276)"><rect x="-4" y="-46" width="8" height="46" fill="#9A6A45"/><circle cy="-64" r="26" fill="#F4B9CF"/><circle cx="-18" cy="-52" r="17" fill="#F7CADB"/><circle cx="20" cy="-54" r="18" fill="#F7CADB"/></g>`;
  let trees=''; for(let i=0;i<n;i++) trees+=arb((100+i*SP+6)*10)+arb((100+i*SP+SP-6)*10);
  root.innerHTML=`<div class="tv">
    <div class="tv-scene" id="tvs">
      <div class="tv-cl"><i style="left:0;top:2.5rem;width:11rem;height:3rem;--dd:150s;--dl:-40s"></i><i style="left:0;top:8rem;width:8rem;height:2.4rem;--dd:190s;--dl:-120s"></i><i style="left:0;top:5rem;width:9rem;height:2.6rem;--dd:170s;--dl:-90s"></i></div>
      <div class="tv-l" id="lf"><svg width="${tot}rem" height="30rem" viewBox="0 0 ${tot*10} 300" preserveAspectRatio="none" style="margin-top:0;width:${tot}rem;height:30rem">${hills}</svg></div>
      <div class="tv-l" id="lm"><svg style="position:absolute;top:0;width:${tot}rem;height:28rem" viewBox="0 0 ${tot*10} 280" preserveAspectRatio="none">${sky}</svg></div>
      <div class="tv-l" id="ln" style="width:${tot}rem">
        <div class="tv-ground" style="width:${tot}rem"></div><div class="tv-guide" style="width:${tot}rem"></div>
        <svg style="position:absolute;left:0;top:0;width:${tot}rem;height:28rem;overflow:visible" viewBox="0 0 ${tot*10} 280">${trees}</svg>
        ${H.map((h,i)=>`<div class="tv-st" id="st${i}" style="left:${100+i*SP}rem">${stationSVG(i,h)}</div>`).join('')}
        <div class="tv-sign" style="left:${100+37+SP*.5-12.5}rem"><i style="margin-bottom:0"></i><div><b>Riel virtual</b>El tranvía sigue una línea guía en el pavimento, sin rieles de acero</div></div>
        <div class="tv-sign" style="left:${100+37+SP*1.5-12.5}rem"><i></i><div><b>Sistema ART</b>31,64 m de largo · 307 pasajeros por vehículo</div></div>
      </div>
      <div class="tv-beam"></div><div class="tv-sp" style="top:24rem;--d:0s"></div><div class="tv-sp" style="top:27.4rem;width:11rem;--d:.18s"></div><div class="tv-sp" style="top:30rem;--d:.3s"></div>
      <div class="tv-tram" id="tt">${tramSVG()}</div>
      <div class="tv-card off" id="tc"></div><div class="tv-gap" id="tg"></div>
    </div>
    <div class="tv-b">
      <div class="tv-ctl"><b>Recorrido</b><div class="fila"><button class="btn borde" id="tp">◀</button><button class="btn sol" id="tj">❚❚ Pausar</button><button class="btn borde" id="tn">▶</button></div></div>
      <div class="tv-r" id="tr"><div class="tv-rail"><i class="tv-fill" id="tf"></i></div>
        ${H.map((h,i)=>{ const x=5.6+i*(88.8/(n-1)); return `<div class="tv-dot" data-i="${i}" style="left:${x}%">${i+1}</div><div class="tv-dl" data-i="${i}" style="left:${x}%">${corta(h.f)}</div>`; }).join('')}
        <div class="tv-mini" id="tm" style="left:5.6%"><svg viewBox="0 0 640 130"><use href="#i-art"/></svg></div></div>
    </div></div>`;
  const $l=id=>$('#'+id,root), sc=$l('tvs'), tram=$l('tt'), card=$l('tc'), gapEl=$l('tg'), mini=$l('tm'), fill=$l('tf');
  let cur=-1, jugando=true, tm, tm2; limpiar.push(()=>{ clearTimeout(tm); clearTimeout(tm2); });
  const put=(i,dur)=>{ [['lf',.1],['lm',.3],['ln',1]].forEach(([id,k])=>{ const e=$l(id); e.style.setProperty('--dur',dur+'s'); e.style.transform=`translateX(${(tx(i)*k).toFixed(2)}rem)`; }); };
  const rail=i=>{ const x=5.6+i*(88.8/(n-1)); mini.style.left=x+'%'; fill.style.width=(i<0?0:x-3.4)*(100/93.2)+'%';
    $$('.tv-dot,.tv-dl',root).forEach(e=>{ const k=+e.dataset.i; e.classList.toggle('on',k<=i); e.classList.toggle('cur',k===i); }); };
  const info=i=>{ const h=H[i], d=i?Math.round((h.f-H[i-1].f)/864e5):0;
    card.innerHTML=`<small>Paso ${i+1} de ${n}${h.nuevo?'<em>Nuevo</em>':''}</small><h3>${fFecha(h.f)}</h3><p>${h.t}</p>`; card.classList.toggle('nuevo',!!h.nuevo); card.classList.remove('off'); };
  function ir2(i,{auto=false}={}){ clearTimeout(tm); clearTimeout(tm2); i=clamp(i,0,n-1); const dist=Math.abs(i-cur), dur=cur<0?2.6:clamp(1.5+.32*dist,1.7,3.6);
    const d0=cur>=0&&i>cur?Math.round((H[i].f-H[i-1].f)/864e5):0;
    sc.classList.add('mov'); tram.classList.add('mov'); tram.classList.remove('abre'); card.classList.add('off'); $$('.tv-st',root).forEach(e=>e.classList.remove('open'));
    gapEl.classList.remove('on'); if(d0>60){ gapEl.textContent='≈ '+(d0/30.4).toFixed(1).replace('.',',')+' meses entre un paso y otro'; setTimeout(()=>gapEl.classList.add('on'),250); }
    cur=i; put(i,dur); rail(i);
    tm2=setTimeout(()=>{ sc.classList.remove('mov'); tram.classList.remove('mov'); gapEl.classList.remove('on'); tram.classList.add('abre'); $l('st'+i).classList.add('open'); info(i);
      if(jugando&&i<n-1) tm=setTimeout(()=>ir2(i+1,{auto:true}),4200); else if(i===n-1){ jugando=false; boton(); } },dur*1000+150); }
  const boton=()=>{ $l('tj').textContent=jugando?'❚❚ Pausar':(cur>=n-1?'↺ Repetir':'▶ Reproducir'); };
  $l('tj').onclick=()=>{ if(cur>=n-1&&!jugando){ jugando=true; boton(); ir2(0); return; } jugando=!jugando; boton(); if(jugando) ir2(Math.min(cur+1,n-1)); else clearTimeout(tm); };
  $l('tp').onclick=()=>{ jugando=false; boton(); ir2(Math.max(0,cur-1)); }; $l('tn').onclick=()=>{ jugando=false; boton(); ir2(Math.min(n-1,cur+1)); };
  $$('.tv-dot,.tv-dl',root).forEach(e=>e.onclick=()=>{ jugando=false; boton(); ir2(+e.dataset.i); });
  arrastrar(mini,{ inicio:()=>{ jugando=false; boton(); clearTimeout(tm); mini.classList.add('arr'); },
    mueve:e=>{ const rr=$l('tr').getBoundingClientRect(); mini.style.left=clamp((e.clientX-rr.left)/rr.width*100,5.6,94.4)+'%'; },
    fin:()=>{ mini.classList.remove('arr'); const f=parseFloat(mini.style.left); ir2(H.reduce((b,_,i)=>Math.abs(5.6+i*(88.8/(n-1))-f)<Math.abs(5.6+b*(88.8/(n-1))-f)?i:b,0)); } });
  /* entrada: la escena arranca con la primera estación fuera de cuadro y el tranvía llega solo */
  ['lf','lm','ln'].forEach((id,k)=>{ const e=$l(id); e.style.transition='none'; e.style.transform=`translateX(${(tx(-1)*[.1,.3,1][k]).toFixed(2)}rem)`; void e.offsetWidth; e.style.transition=''; });
  rail(-1); boton(); tm=setTimeout(()=>ir2(0),700);
};

/* ============ 4c · condiciones: el tranvía espera la luz verde ============ */
VIS.appC = root => {
  const COND=['Nuevo CONPES','Evaluación integral del sistema','Aclaraciones al proponente','Estudios prediales, estructurales y de demanda'], on=new Set();
  root.innerHTML=`<div class="tc">
    <div class="tc-s" id="tcs"><div class="tc-msg" id="tcm">Hoy el tranvía espera en la estación<span>El CONPES 4017 no permite desarrollarlo. Para avanzar se necesitan 4 condiciones: tócalas a la derecha.</span></div>
      <svg class="esc tc-l" viewBox="0 0 660 340" preserveAspectRatio="xMidYMax slice"><rect x="0" y="222" width="660" height="118" fill="#94A5C7"/><rect x="0" y="222" width="660" height="7" fill="#C9D5EA"/>
        <rect x="0" y="286" width="660" height="4" fill="#9CC4FF" opacity=".9"/><path d="M0 288H660" stroke="#fff" stroke-width="3" stroke-dasharray="26 18" opacity=".7"/>
        <g fill="#DCE7F7">${[30,88,140,188,540,590,624].map((x,k)=>`<rect x="${x}" y="${150-((k*37)%50)}" width="${34+(k*11)%16}" height="${72+((k*37)%50)}" rx="3"/>`).join('')}</g>
        <g transform="translate(470 222)"><rect x="-4" y="-140" width="8" height="140" fill="#7E8AA3"/><rect x="-46" y="-152" width="96" height="98" rx="14" fill="#34456E"/>
          ${[0,1,2,3].map(k=>`<circle class="luz" id="lz${k}" cx="2" cy="${-130+k*22}" r="9" fill="#E5626A"/>`).join('')}</g>
        <g transform="translate(548 222)"><rect x="-6" y="-46" width="12" height="46" fill="#7E8AA3"/><g class="gate"><rect x="0" y="-52" width="112" height="8" rx="3" fill="#fff"/><path d="M8 -52l16 8M36 -52l16 8M64 -52l16 8M92 -52l16 8" stroke="#E5626A" stroke-width="7"/></g></g>
      </svg>
      <div class="tc-tram" id="tct">${tramSVG()}</div><button class="btn borde tc-rs" id="tcr" style="display:none">↺ Volver a la estación</button></div>
    <div class="tc-c"><h4 style="display:flex;justify-content:space-between;align-items:baseline;gap:1rem"><span>Condiciones para avanzar<small>Cada una que se cumple enciende una luz del semáforo.</small></span><span class="tc-k" id="tck"><span id="tct2">0 de 4 luces</span></span></h4>
      ${COND.map((c,i)=>`<button class="tc-o" data-i="${i}"><span class="ck"></span>${c}</button>`).join('')}</div>
    <div class="tc-h">Compromisos de la mesa interinstitucional</div>
    <div class="tc-p">
      <div class="tc-cm"><em>1</em><span>Concepto del DNP remitido a la APP privada · SETP</span><span class="pill ok">10 jun</span></div>
      <div class="tc-cm"><em>2</em><span>Mesa con MinHacienda, DNP y MinTransporte · SETP</span><span class="pill pr">Programada · 24 sep</span></div>
      <div class="tc-cm"><em>3</em><span>Avances de la prefactibilidad · APP privada</span><span class="pill sf">Solicitados · 24 sep</span></div></div></div>`;
  const sc=$('#tcs',root), tr=$('#tct',root);
  const pinta=()=>{ const k=on.size, ok=k===4;
    $$('.tc-o',root).forEach(b=>b.classList.toggle('on',on.has(+b.dataset.i))); [0,1,2,3].forEach(i=>$('#lz'+i,root).style.fill=on.has(i)?'#4FD693':'#E5626A');
    $('#tct2',root).textContent=ok?'4 de 4: luz verde':k+' de 4 luces'; $('#tck',root).classList.toggle('ok',ok);
    sc.classList.toggle('ok',ok); const m=$('#tcm',root);
    m.innerHTML=ok?'Luz verde: el tranvía puede avanzar<span>Con un nuevo CONPES, la evaluación integral, las aclaraciones y los estudios, el proyecto puede seguir su camino.</span>':'Hoy el tranvía espera en la estación<span>El CONPES 4017 no permite desarrollarlo. Para avanzar se necesitan 4 condiciones: tócalas a la derecha.</span>';
    if(ok){ setTimeout(()=>{ if(on.size===4){ tr.classList.add('va'); $('#tcr',root).style.display=''; } },1300); } else tr.classList.remove('va'); if(!ok) $('#tcr',root).style.display='none'; };
  $$('.tc-o',root).forEach(b=>b.onclick=()=>{ const i=+b.dataset.i; on.has(i)?on.delete(i):on.add(i); pinta(); });
  $('#tcr',root).onclick=()=>{ on.clear(); pinta(); };
  pinta();
};
