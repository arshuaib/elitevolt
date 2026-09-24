/* EliteVolt advanced shop UX: sort + wishlist + recently viewed */
(function(){
'use strict';
var wishKey='ev_wishlist_v1';
function getWish(){try{return JSON.parse(localStorage.getItem(wishKey)||'[]')}catch(e){return[]}}
function setWish(a){localStorage.setItem(wishKey,JSON.stringify(a))}
function toggleWish(id,btn){
 var a=getWish(), i=a.indexOf(id); if(i>=0)a.splice(i,1);else a.push(id);setWish(a);
 btn.classList.toggle('active',a.indexOf(id)>=0); btn.setAttribute('aria-pressed',a.indexOf(id)>=0?'true':'false');
}
function init(){
 var grid=document.getElementById('productsGrid'); if(!grid||typeof productsData==='undefined')return;
 var bar=document.querySelector('.category-bar'); if(bar&&!document.getElementById('sortProducts')){
  var s=document.createElement('select');s.id='sortProducts';s.setAttribute('aria-label','Sort products');
  s.innerHTML='<option value="default">Sort: Featured</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option><option value="name">Name A–Z</option>';
  bar.appendChild(s);s.addEventListener('change',function(){productsData.sort(function(a,b){
    if(s.value==='price-asc')return a.price-b.price;if(s.value==='price-desc')return b.price-a.price;
    if(s.value==='name')return a.name.localeCompare(b.name);return Number(a.id.slice(1))-Number(b.id.slice(1));
  });if(typeof currentPage!=='undefined')currentPage=1;if(typeof renderProducts==='function')renderProducts();});
 }
 var old=window.renderProducts; if(typeof old==='function'&&!window.evAdvancedWrapped){
  window.evAdvancedWrapped=true;
  window.renderProducts=function(){old();setTimeout(function(){
    getWish().forEach(function(id){var b=grid.querySelector('[data-wish="'+id+'"]');if(b)b.classList.add('active')});
    grid.querySelectorAll('[data-wish]').forEach(function(b){b.onclick=function(e){e.preventDefault();e.stopPropagation();toggleWish(b.dataset.wish,b)}});
  },0)}
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();