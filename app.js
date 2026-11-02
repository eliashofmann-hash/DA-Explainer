'use strict';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const slides=$$('.slide');let current=0,notesOpen=false,motionReduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const notes=["Der Businessplan untersucht eine theoretische Repositionierung des Hotel National Bern. Ausgangspunkt ist der Unterschied zwischen dem charaktervollen Haus und seinem heutigen Auftritt.", "Mit Weiter durch die fünf Stationen gehen: Seidenfabrik im 18. Jahrhundert, Brauerei ab 1792, Neubau 1911/12 für die Typographia nach Gottfried Läderach, Eröffnung 1912 als Monbijou, Name National seit 1918. Die ältere Ansicht zeigt den Vorgängerbau am Standort; ihre genaue Entstehungszeit und damalige Nutzung sind nicht bestimmt. Die Schwarzweissaufnahme mit der Aufschrift Maulbeerbaum gehört zur Brauerei. Die historische Hoteldarstellung ist ausdrücklich mit Hotel Monbijou beschriftet. Die Bilder sind nicht alle am dargestellten Ereignisdatum entstanden.", "Hier sind nur echte Ansichten der heutigen Webseite. Mit den zwei kleinen Bildern wechselst du zwischen Einstieg und Zimmerdarstellung. Die Webseite erklärt den Ausgangspunkt. Eine neue Webseite wird nicht vorgetäuscht.", "Links Zimmer 201 im Bestand, rechts der aktuelle Entwurf. Danach zeigen die nächsten Schritte direkt am Zimmerbild, woher die Gestaltung kommt.", "Mit Weiter oder den drei Bildtasten: Die frühere Seidenfabrik ist der Grund für den textilen Wandstreifen und Maulbeerrot. Das Moodboard zeigt historischen Seidenbrokat um 1760 als Materialreferenz. Das ist kein erhaltenes Stoffmuster der Berner Fabrik. Das Haus entstand für die Typographia. Das Druckhandwerk führt zum eigenen N-Druck im Zimmer. Das historische Faksimile aus dem Moodboard veranschaulicht den gestalterischen Bezug; der N-Druck ist eine neue eigene Arbeit. Die gewölbte Front und das Nussbaumfurnier des Nachttischs greifen Berner Möbel des 18. Jahrhunderts auf. Konkrete Moodboard-Referenz ist eine Funk-Kommode um 1750. Sie ist ein Formvorbild, kein Originalmöbel des National oder der früheren Seidenfabrik.", "Das Badezimmer gehört zu Zimmer 201. Alle ausgewählten Bilder stammen aus dem finalen V7-Master. Die neue Waschplatzansicht 09 zeigt die warme glatte Decke und den glatten oberen Wandabschluss; darunter dezente leinenbeige Kalkfarbe. Grüne Glasur, Nussbaum, Opalleuchten, offene Dusche und moderne WC-Keramik bleiben erhalten. Mit den vier Bildtasten Ansichten wechseln. «Details ansehen» öffnet drei vergrösserbare Ausschnitte, ebenfalls frisch aus V7. Die Spülplatte hat den profilierten Chromrahmen mit gestalteten Ecken und zwei runden Knöpfen.", "Mit Weiter oder den sechs Moodboard-Tasten: heutige grüne Glasur als Materialvorbild, reale Butzenverglasung als Vorbild für eine moderne Replik. Die Hausgeschichte übersetzt sich in kleine Gegenstände: Brauerei zu Steinzeug-Seifenspender, Seidenverarbeitung zu spulenförmigem Becher, Druckhandwerk zu offener Ablage nach dem Satzschiff. Die historischen Vergleichsobjekte stammen aus Museumssammlungen, nicht aus dem National. Das Schreib- und Lesezimmer ist im Haus 1911 dokumentiert. Von dort kommt der Bezug zum Tintenglas als heutigem Raumduft. Die konkrete Londoner Referenz ist nur durch Katalogtext belegt; kein Originalfoto verwenden. Nussbaum-Tuchkassette nach dem Material- und Konstruktionsvorbild eines Schreibkastens des 19. Jahrhunderts. Neue eigene Übertragungen, keine originalen National-Gebrauchsobjekte.", "IMG_5896 zeigt den heutigen Empfangsraum und die Sitzecke. Rechts sind die vier finalen Endansichten aus «Limewash V2 Dezent» wählbar: Lobby, EG-Eingang, Treppenankunft und Blick von der oberen Treppe. Auch die beiden zuletzt korrigierten EG-Wände hinter der Konsole und an der linken Flanke sind enthalten. Der dezentere Kalkanstrich ist mit dem Bad V7 abgestimmt. Bestand und Entwurf zeigen unterschiedliche Blickrichtungen.", "Mit Weiter oder den sechs Bildtasten: Alleegasse Sofa, Josef Hoffmann 1912, heutige Wittmann-Re-Edition. Das Entwurfsjahr entspricht dem Eröffnungsjahr; es ist kein belegtes Originalmöbel des National. Die Typographischen Monatsblätter vom Januar 1933 regen die neue eigene Wandgrafik und den Wegweiser an. Keine identische Reproduktion, keine originale Hotelausstattung und keine Druckerei im Hotel behaupten. Setzregal aus Plau und Schriftenschrank aus dem Museum der Arbeit geben Schrägpult, flache Schübe und geordnete Ablage vor, heute für Flyer, Stadtpläne und Bücher. Herstellungsjahre und eine Herkunft aus dem National sind nicht belegt. Der Winkelhaken ist ein Handsatzwerkzeug, im Entwurf als historische Rekonstruktion inszeniert, kein National-Fundstück. Die Vergrösserung zeigt einen Ausschnitt desselben freigegebenen Renders.", "Archiv, vorhandenes Bestandsfoto und aktueller Restaurantentwurf im direkten Vergleich. Die historische Raumzuordnung ist nicht lückenlos belegt. Die nächste Szene zeigt die konkreten Gestaltungsbezüge.", "Mit Weiter oder den drei Bildtasten: Die Archivaufnahme des Vorderen Restaurants führt zu Arkaden, Holzverkleidungen und der Raumwirkung des Entwurfs. Gezeigt wird eine gestalterische Interpretation. Ob historische Arkaden im heutigen Raum erhalten sind, ist damit nicht belegt. Der Bezug zur Bauherrschaft wird an der Zeitungswand sichtbar: die Helvetische Typographia von 1858 ist die konkrete historische Vorlage im Moodboard. Damit wird keine Druckerei im National behauptet. Die abstrakte Gegenwand ist eine neue typografische Komposition. Die Sitznischen und ihre Atmosphäre kommen aus dem Café-Sperl-Vorbild im Restaurant-Moodboard. Das Café wurde 1880 eröffnet; das Foto zeigt den heutigen Raum. Es ist ein ergänzendes Raumvorbild aus Wien und keine historische Aufnahme des National.", "Die alten Aufnahmepläne von 2007 zeigen das Haus als Ganzes. Mit Weiter oder den vier Tasten durch Erdgeschoss, 1. Obergeschoss mit Lobby sowie 2. und 3. Obergeschoss gehen. Ein Klick auf den Plan öffnet das vollständige Originalblatt. Das sind die ursprünglichen Pläne, nicht die neuen Zimmerstudien.", "Räume und Geschichte verstehen, eine Gestaltung entwickeln und den Betrieb durchrechnen. Der Rechner öffnet die weiterhin optionalen Rechnungen zu Umbau, Startkapital und Personal.", "Das Zimmerbild kann zum Schluss stehen bleiben."];
slides.forEach((s,i)=>{const d=document.createElement('button');d.className='dot';d.title=s.dataset.title;d.setAttribute('aria-label',`Szene ${i+1}: ${s.dataset.title}`);d.onclick=()=>go(i);$('#dots').append(d);const b=document.createElement('button');b.className='chapter-link';b.setAttribute('aria-label',`Szene ${i+1}: ${s.dataset.title}`);const im=document.createElement('img');im.src=s.querySelector('img')?.src||$('.work-plan img').src;im.alt='';const label=document.createElement('span');label.textContent=s.dataset.title;b.append(im,label);b.onclick=()=>{$('#overviewDialog').close();go(i)};$('#chapterGrid').append(b)});
function renderNav(){$('#chapterCount').textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');$('#chapterAnnouncement').textContent=slides[current].dataset.title;$('#prevBtn').disabled=current===0;$('#nextBtn').textContent=current===slides.length-1?'↺':'→';$('#nextBtn').setAttribute('aria-label',current===slides.length-1?'Zum Anfang':'Nächste Szene');$$('.dot').forEach((d,i)=>i===current?d.setAttribute('aria-current','step'):d.removeAttribute('aria-current'));$('#noteText').textContent=notes[current];document.title=`${current+1}/${slides.length} · ${slides[current].dataset.title} · DA Explainer`;}
let flight=null;
function finishFlight(){if(!flight)return;const f=flight;flight=null;f.animation.cancel();f.target.style.opacity='';f.clone.remove()}
function go(i,backwards=false){
 i=Math.max(0,Math.min(slides.length-1,i));if(i===current)return;finishFlight();
 const from=slides[current],to=slides[i];
 // Only a photograph actually visible on the outgoing scene can take flight.
 const oldImages=[...from.querySelectorAll('img')].filter(im=>{const r=im.getBoundingClientRect();return r.width>1&&r.height>1&&!im.closest('.gallery-thumbs')});
 const newImages=[...to.querySelectorAll('img')].filter(im=>!im.closest('[data-sequence-panel][hidden],.gallery-thumbs')&&!im.classList.contains('full-plan-source'));
 let shared=null;
 if(!motionReduced&&!to.matches('.design-story-scene,.work-scene')){for(const a of oldImages){const b=newImages.find(x=>x.src===a.src);if(b){shared={a,b,rect:a.getBoundingClientRect()};break}}}
 from.hidden=true;from.inert=true;from.classList.remove('shared-enter');current=i;to.hidden=false;to.inert=false;
 if(shared){
  to.classList.add('shared-enter');
  const end=shared.b.getBoundingClientRect(),clone=shared.a.cloneNode(),style=getComputedStyle(shared.b);
  clone.className='shared-flight';clone.alt='';clone.setAttribute('aria-hidden','true');
  clone.style.cssText=`left:${shared.rect.left}px;top:${shared.rect.top}px;width:${shared.rect.width}px;height:${shared.rect.height}px;object-fit:${style.objectFit};object-position:${style.objectPosition}`;
  document.body.append(clone);shared.b.style.opacity='0';
  const animation=clone.animate([{left:shared.rect.left+'px',top:shared.rect.top+'px',width:shared.rect.width+'px',height:shared.rect.height+'px'},{left:end.left+'px',top:end.top+'px',width:end.width+'px',height:end.height+'px'}],{duration:950,easing:'cubic-bezier(.22,.7,.2,1)',fill:'forwards'});
  flight={clone,target:shared.b,animation};animation.onfinish=finishFlight;
 }
 renderNav();activateSequence(to,backwards);paintConnections();
}
$('#prevBtn').onclick=()=>advance(-1);$('#nextBtn').onclick=()=>advance(1);
function toggleNotes(){notesOpen=!notesOpen;$('#notes').hidden=!notesOpen;$('#notesBtn').setAttribute('aria-pressed',String(notesOpen));$('#notesBtn').setAttribute('aria-label',notesOpen?'Sprechhinweise ausblenden':'Sprechhinweise einblenden')}$('#notesBtn').onclick=toggleNotes;$('#closeNotes').onclick=toggleNotes;
$('#overviewBtn').onclick=()=>$('#overviewDialog').showModal();$('#sourcesBtn').onclick=()=>$('#sourcesDialog').showModal();$$('.dialog .close').forEach(b=>b.onclick=()=>b.closest('dialog').close());
function toast(message){$('#toast').textContent=message;$('#toast').hidden=false;setTimeout(()=>$('#toast').hidden=true,3500)}
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else toast('Vollbild im Browsermenü öffnen.')}catch(e){toast('Vollbild im Browsermenü öffnen.')}}$('#fullBtn').onclick=fullscreen;
function setMotion(){document.body.classList.toggle('no-motion',motionReduced);$('#motionBtn').setAttribute('aria-pressed',String(motionReduced));paintConnections();drawConnector(slides[current],false)}$('#motionBtn').onclick=()=>{motionReduced=!motionReduced;setMotion()};
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||$('dialog[open]')||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(['ArrowRight','PageDown'].includes(e.key)||(e.key===' '&&e.target.tagName!=='BUTTON')){e.preventDefault();advance(1)}else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();advance(-1)}else if(e.key==='Home'){e.preventDefault();go(0)}else if(e.key==='End'){e.preventDefault();go(slides.length-1)}else if(e.key.toLowerCase()==='n')toggleNotes();else if(e.key.toLowerCase()==='f')fullscreen();else if(e.key==='Escape'&&notesOpen)toggleNotes()});
document.addEventListener('DOMContentLoaded',()=>{setMotion();renderNav();paintConnections()});

$$('.gallery-scene').forEach(section=>{const main=section.querySelector('.gallery-main');section.querySelectorAll('.gallery-thumbs button').forEach(button=>{button.onclick=()=>{finishFlight();const thumb=button.querySelector('img');main.src=thumb.src;main.alt=thumb.alt;section.querySelectorAll('.gallery-thumbs button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const label=section.querySelector('.gallery-view-label');if(label)label.textContent=button.dataset.viewLabel||'';if(!motionReduced)main.animate([{opacity:.3,transform:'scale(1.02)'},{opacity:1,transform:'scale(1)'}],{duration:600,easing:'ease-out'})}})});
$$('.plan-card').forEach(card=>card.onclick=()=>{const source=card.querySelector('.full-plan-source');$('#dialogPlan').src=source.src;$('#dialogPlan').alt=source.alt;$('#planDialog').showModal()});

$$('.photo-open').forEach(button=>button.onclick=()=>{finishFlight();const im=button.querySelector('img');$('#dialogPhoto').src=im.src;$('#dialogPhoto').alt=im.alt;$('#dialogPhotoCaption').textContent=button.closest('figure').querySelector('figcaption')?.textContent||'';$('#photoDialog').showModal()});
$$('[data-open-calculations]').forEach(b=>b.onclick=()=>{finishFlight();$('#calculationsDialog').showModal()});
$$('[data-open-bath-details]').forEach(b=>b.onclick=()=>{finishFlight();$('#bathDetailsDialog').showModal()});
const calcTabs=$$('[data-calc]');
function selectCalc(b){calcTabs.forEach(t=>{const active=t===b;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1});$$('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==b.dataset.calc)}
calcTabs.forEach((b,i)=>{b.onclick=()=>selectCalc(b);b.onkeydown=e=>{let n;if(e.key==='ArrowRight')n=(i+1)%calcTabs.length;else if(e.key==='ArrowLeft')n=(i+calcTabs.length-1)%calcTabs.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=calcTabs.length-1;else return;e.preventDefault();selectCalc(calcTabs[n]);calcTabs[n].focus()}});
$$('[data-cost-detail]').forEach(b=>b.onclick=()=>{$$('[data-cost-detail]').forEach(t=>t.setAttribute('aria-pressed',String(t===b)));$$('.staff-detail').forEach(p=>p.hidden=p.dataset.detail!==b.dataset.costDetail)});
$('#calculationsDialog').addEventListener('click',e=>{if(e.target===$('#calculationsDialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});

function sequenceButtons(s){return [...s.querySelectorAll('[data-sequence-step]')]}
function selectSequence(s,index,animate=true){
 const buttons=sequenceButtons(s);if(!buttons.length)return;
 index=Math.max(0,Math.min(buttons.length-1,index));s.dataset.sequenceIndex=String(index);
 buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
 s.querySelectorAll('[data-sequence-panel]').forEach(p=>p.hidden=Number(p.dataset.sequencePanel)!==index);
 const count=s.querySelector('.sequence-count');if(count)count.textContent=(index+1)+' / '+buttons.length;
 s.style.setProperty('--history-progress',String(index/(buttons.length-1||1)));
 if(animate&&!motionReduced){const panel=s.querySelector('[data-sequence-panel]:not([hidden])');panel?.animate([{opacity:.15,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:500,easing:'ease-out'})}
 updateDetailRender(s,animate);
}
function hideConnector(s){s.querySelectorAll('.reference-connector path,.reference-connector circle').forEach(el=>{el.getAnimations().forEach(a=>a.cancel());if(el.tagName.toLowerCase()==='path')el.style.strokeDashoffset='1';else el.style.opacity='0'})}
function updateDetailRender(s,animate=true){
 const panel=s.querySelector('.reference-panel:not([hidden])'),pic=s.querySelector('.detail-main-image');
 const source=panel?.dataset.renderSource?document.getElementById(panel.dataset.renderSource):null;
 const reveal=()=>{if(s.hidden||panel?.hidden)return;paintConnections();drawConnector(s,animate)};
 if(source&&pic.src!==source.src){hideConnector(s);pic.src=source.src;pic.alt=source.alt;if(pic.complete&&pic.naturalWidth)reveal();else pic.addEventListener('load',reveal,{once:true})}
 else reveal();
}
function drawConnector(s,animate=true){
 const paths=[...s.querySelectorAll('.reference-connector path')],dots=[...s.querySelectorAll('.reference-connector circle')];
 if(!paths.length)return;
 [...paths,...dots].forEach(el=>el.getAnimations().forEach(a=>a.cancel()));
 const moving=animate&&!motionReduced;
 paths.forEach(p=>{p.style.strokeDashoffset=moving?'1':'0';if(moving)p.animate([{strokeDashoffset:1},{strokeDashoffset:0}],{duration:1100,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'})});
 dots.forEach(c=>{c.style.opacity=moving?'0':'1';if(moving)c.animate([{opacity:0},{opacity:0,offset:.82},{opacity:1}],{duration:1100,fill:'forwards'})});
}
function activateSequence(s,backwards=false){const bs=sequenceButtons(s);if(bs.length)selectSequence(s,backwards?bs.length-1:0)}
function advance(delta){const s=slides[current],bs=sequenceButtons(s),index=Number(s.dataset.sequenceIndex||0),next=index+delta;if(bs.length&&next>=0&&next<bs.length){selectSequence(s,next);return}go(current===slides.length-1&&delta>0?0:current+delta,delta<0)}
$$('.sequence-scene').forEach(s=>sequenceButtons(s).forEach((b,i)=>b.onclick=()=>selectSequence(s,i)));
function paintConnections(){
 const s=slides[current];if(!s?.classList.contains('design-story-scene'))return;
 const work=s.querySelector('.detail-workspace'),pic=s.querySelector('.detail-main-image'),panel=s.querySelector('.reference-panel:not([hidden])'),svg=s.querySelector('.reference-connector');if(!pic.naturalWidth||!panel)return;
 const zoom=Number(panel.dataset.renderZoom||1),frame=pic.parentElement.getBoundingClientRect();
 const baseScale=Math.min(frame.width/pic.naturalWidth,frame.height/pic.naturalHeight),bw=pic.naturalWidth*baseScale,bh=pic.naturalHeight*baseScale;
 const fx=(frame.width-bw)/2+Number(panel.dataset.pointX)*bw,fy=(frame.height-bh)/2+Number(panel.dataset.pointY)*bh;
 pic.style.transformOrigin='0 0';pic.style.transform=zoom>1?`translate(${frame.width/2-fx*zoom}px,${frame.height/2-fy*zoom}px) scale(${zoom})`:'';
 pic.closest('.detail-render').classList.toggle('has-detail-zoom',zoom>1);
 const wr=work.getBoundingClientRect(),pr=pic.getBoundingClientRect(),ref=panel.getBoundingClientRect(),scale=Math.min(pr.width/pic.naturalWidth,pr.height/pic.naturalHeight),iw=pic.naturalWidth*scale,ih=pic.naturalHeight*scale;
 const x=pr.left-wr.left+(pr.width-iw)/2+Number(panel.dataset.pointX)*iw,y=pr.top-wr.top+(pr.height-ih)/2+Number(panel.dataset.pointY)*ih;
 const mobile=ref.top>frame.top+frame.height/2;
 const sx=mobile?ref.left-wr.left+ref.width/2:ref.left-wr.left-7,sy=mobile?ref.top-wr.top-8:ref.top-wr.top+Math.min(130,ref.height*.5);
 const d=mobile?`M ${sx} ${sy} C ${sx} ${sy-35} ${x} ${y+45} ${x} ${y}`:`M ${sx} ${sy} C ${sx-55} ${sy} ${x+65} ${y} ${x} ${y}`;
 svg.setAttribute('viewBox',`0 0 ${wr.width} ${wr.height}`);svg.querySelectorAll('path').forEach(p=>p.setAttribute('d',d));svg.querySelectorAll('circle').forEach(c=>{c.setAttribute('cx',x);c.setAttribute('cy',y)});
}
window.addEventListener('resize',paintConnections);
new ResizeObserver(paintConnections).observe($('#stage'));
$$('.detail-main-image').forEach(i=>i.addEventListener('load',paintConnections));
