(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function v(n){var r=0;[].forEach.call(document.querySelectorAll('input[name='+n+']'),function(x){if(x.checked)r=+x.value;});return r;}
var BK=[[322,'No break','The hem just touches the top of the shoe. Clean and modern; best with slim, tapered trousers and when you show a little sock.','Ankle length or cropped looks go even shorter.'],[328,'Quarter break','A slight dimple at the front. The easiest choice for most trousers and shoes.','The safest default if you are unsure.'],[332,'Half break','One soft fold. Classic for suits and straight-leg trousers.','Allow a little more length at the back of the hem.'],[336,'Full break','A deep fold resting on the shoe. Traditional, and best with wide legs.','Too much on slim trousers looks sloppy.']];
if(document.querySelector('input[name=bk]')){function bk(){var k=v('bk'),b=BK[k],y=b[0],f=k*5;$('lg').setAttribute('d','M76 10h68l8 '+(y-10)+'H68z');$('fold').setAttribute('d',k?'M68 '+(y-6-f)+'h84l-2 '+(f+6)+'q-40 '+(f/2+4)+'-80 0z':'');$('bk-o').innerHTML='<h3>'+b[1]+'</h3><p>'+b[2]+'</p><small>'+b[3]+'</small>';}
 [].forEach.call(document.querySelectorAll('input[name=bk]'),function(x){x.addEventListener('change',bk);});bk();}
var at=$('al-t');if(at){var as=$('al-s');function al(){var h=parseFloat(at.value),s=Math.max(0,parseFloat(as.value)||0),keep=(h===2.5?h*2:h);
 $('al-o').innerHTML='<svg viewBox="0 0 300 150" aria-hidden="true"><rect x="10" y="10" width="280" height="130" fill="#EEF1F6" stroke="#2A2A2A"/><line x1="10" y1="60" x2="290" y2="60" stroke="#2A2A2A" stroke-dasharray="6 4"/><text x="16" y="54" font-size="11" font-family="monospace" fill="#2A2A2A">NEW HEM (FOLD)</text><line x1="10" y1="100" x2="290" y2="100" stroke="#B5322B" stroke-width="2" stroke-dasharray="10 5"/><text x="16" y="94" font-size="11" font-family="monospace" fill="#B5322B">CUT LINE &#9986;</text><text x="16" y="130" font-size="11" font-family="monospace" fill="#615A50">OLD HEM: '+s+' CM BELOW FOLD</text></svg><dl><dt>Mark the fold</dt><dd>'+s+' cm above the current finished edge</dd><dt>Cut line</dt><dd>'+keep+' cm below the fold line'+(h===2.5?' (two turns of '+h+' cm)':'')+'</dd><dt>Cut away</dt><dd>about '+s+' cm of fabric in total</dd></dl><p class="hw-small">Unpick the old hem first and press flat. Try it on with pins before you cut.</p>';}
 at.addEventListener('change',al);as.addEventListener('input',al);al();}
var HL=[[200,'Mini','Mid-thigh. Playful and casual; pairs well with tights and flat shoes or boots.'],[232,'Knee','At or just below the kneecap. The most versatile length for work and everyday.'],[284,'Midi','Mid-calf. Elegant and easy; best with a heel, a pointed flat or a boot under the hem.'],[330,'Tea length','Just above the ankle. A vintage, formal feel that shows off shoes.'],[370,'Maxi','Ankle to floor. Relaxed in cotton, dramatic in silk; check it clears your shoes.']];
if(document.querySelector('input[name=hl]')){function hl(){var k=v('hl'),y=HL[k][0],w=32+(y-168)*.22;$('sk').setAttribute('d','M76 168h48l'+(w-24)+' '+(y-168)+'H'+(100-w)+'z');var g='';HL.forEach(function(h,i){g+='<line x1="150" y1="'+h[0]+'" x2="196" y2="'+h[0]+'" stroke="'+(i===k?'#E8C547':'#777')+'" stroke-width="'+(i===k?3:1)+'"/>';});$('ln').innerHTML=g;$('hl-o').innerHTML='<h3>'+HL[k][1]+'</h3><p>'+HL[k][2]+'</p><small>Tip: hemlines look best ending at a narrow point of the leg.</small>';}
 [].forEach.call(document.querySelectorAll('input[name=hl]'),function(x){x.addEventListener('change',hl);});hl();}
})();
