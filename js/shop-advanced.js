/* EliteVolt advanced shop UX: sorting + wishlist */
(function(){
'use strict';
var wishKey='ev_wishlist_v1';
function getWish(){try{return JSON.parse(localStorage.getItem(wishKey)||'[]')}catch(e){return[]}}
function setWish(a){localStorage.setItem(wishKey,JSON.stringify(a))}
function paintWishlist(){
  var grid=document.getElementById('productsGrid'); if(!grid)return;
  var wishes=getWish();
  grid.querySelectorAll('[data-wish]').forEach(function(btn){
    var active=wishes.indexOf(btn.dataset.wish)>=0;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',active?'true':'false');
    btn.textContent=active?'♥':'♡';
    btn.setAttribute('aria-label',active?'Remove from wishlist':'Add to wishlist');
  });
}
function toggleWish(id){
  var a=getWish(), i=a.indexOf(id);
  if(i>=0)a.splice(i,1);else a.push(id);
  setWish(a); paintWishlist();
}
function init(){
  var grid=document.getElementById('productsGrid');
  if(!grid||typeof productsData==='undefined')return;
  var bar=document.querySelector('.category-bar');
  if(bar&&!document.getElementById('sortProducts')){
    var s=document.createElement('select');
    s.id='sortProducts';
    s.setAttribute('aria-label','Sort products');
    s.innerHTML='<option value="default">Sort: Featured</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option><option value="name">Name A–Z</option>';
    bar.appendChild(s);
    s.addEventListener('change',function(){
      var mode=s.value;
      productsData.sort(function(a,b){
        if(mode==='price-asc')return Number(a.price)-Number(b.price);
        if(mode==='price-desc')return Number(b.price)-Number(a.price);
        if(mode==='name')return a.name.localeCompare(b.name);
        return Number(String(a.id).slice(1))-Number(String(b.id).slice(1));
      });
      if(typeof currentPage!=='undefined')currentPage=1;
      if(typeof renderProducts==='function')renderProducts();
      paintWishlist();
    });
  }
  grid.addEventListener('click',function(e){
    var btn=e.target.closest('[data-wish]');
    if(!btn)return;
    e.preventDefault(); e.stopPropagation();
    toggleWish(btn.dataset.wish);
  });
  var observer=new MutationObserver(paintWishlist);
  observer.observe(grid,{childList:true});
  paintWishlist();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
