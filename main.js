(function(){
var d=document,h=d.documentElement,$=function(s,r){return(r||d).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||d).querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function save(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function flash(){if(reduce)return;h.classList.add('trans');setTimeout(function(){h.classList.remove('trans')},450)}
/* theme */
var tb=$('.theme');
if(tb)tb.addEventListener('click',function(){flash();var t=h.getAttribute('data-theme')==='light'?'dark':'light';h.setAttribute('data-theme',t);save('theme',t);tb.setAttribute('aria-pressed',t==='light')});
if(tb)tb.setAttribute('aria-pressed',h.getAttribute('data-theme')==='light');
/* menu */
var nav=$('#nav'),mb=$('.menu');
if(mb)mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
if(nav)nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded','false')}});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav&&nav.classList.contains('open')){nav.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.focus()}});
/* config links */
var C=window.SITE||{};
$$('[data-solven]').forEach(function(a){if(C.solvenUrl){a.href=C.solvenUrl;a.target='_blank';a.rel='noopener noreferrer'}else{a.removeAttribute('href');a.setAttribute('aria-disabled','true');a.textContent='Live platform link coming soon'}});
$$('[data-x]').forEach(function(a){if(C.xUrl){a.href=C.xUrl;a.target='_blank';a.rel='noopener noreferrer'}});
/* language */
var langBtns=$$('.lang button');
function setLang(l,keep){
 var sec=null,off=0;if(keep){var ss=$$('section[id],header+main>section');for(var i=0;i<ss.length;i++){var r=ss[i].getBoundingClientRect();if(r.bottom>80){sec=ss[i];off=r.top;break}}}
 flash();h.lang=l;h.dir=l==='ar'?'rtl':'ltr';save('lang',l);
 langBtns.forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-lang')===l)});
 if(window.I18N)I18N.apply(l);
 if(sec){var n=sec.getBoundingClientRect().top;scrollBy({top:n-off,behavior:'instant'})}
}
langBtns.forEach(function(b){b.addEventListener('click',function(){var l=b.getAttribute('data-lang');if(h.lang!==l)setLang(l,true)})});
var cur=h.lang==='ar'?'ar':'en';langBtns.forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-lang')===cur)});
if(cur==='ar'&&window.I18N)I18N.apply('ar');
/* active nav */
var links=$$('#nav a');
function mark(id){links.forEach(function(a){var hr=a.getAttribute('href'),m=(hr.split('#')[1]||'home')===id&&hr.indexOf('index.html')===0;if(m)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')})}
var page=location.pathname.split('/').pop()||'index.html';
if(page==='solven.html'){links.forEach(function(a){if(a.getAttribute('href')==='solven.html')a.setAttribute('aria-current','page')})}
else if(page==='index.html'||page===''){
 var secs=$$('main section[id]');if('IntersectionObserver'in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)mark(e.target.id)})},{rootMargin:'-40% 0px -55% 0px'});secs.forEach(function(s){so.observe(s)})}
}else if(page!=='404.html'){links.forEach(function(a){if(a.getAttribute('href').indexOf('#projects')>0)a.setAttribute('aria-current','true')})}
/* reveal */
var els=$$('.reveal');
if(!reduce&&'IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e,i){e.classList.add('pre');io.observe(e)})}
/* touch: highlight the project card nearest the viewport centre */
var cards=$$('.pcard');
if(cards.length&&matchMedia('(hover: none)').matches&&'IntersectionObserver'in window){
 var co=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('active',e.isIntersecting)})},{rootMargin:'-42% 0px -42% 0px'});cards.forEach(function(c){co.observe(c)})}
})();
