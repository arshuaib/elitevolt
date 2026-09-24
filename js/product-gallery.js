/* EliteVolt product gallery v8 */
(function(){'use strict';
function lightbox(src,alt){
  var overlay=document.createElement('div'); overlay.className='image-lightbox';
  overlay.innerHTML='<button class="lightbox-close" aria-label="Close">×</button><img src="'+src.replace(/"/g,'&quot;')+'" alt="'+(alt||'').replace(/"/g,'&quot;')+'"><div class="lightbox-help">Scroll/pinch to zoom • Drag the image • Esc to close</div>';
  document.body.appendChild(overlay); document.body.style.overflow='hidden';
  var image=overlay.querySelector('img'), scale=1, startDist=0, startScale=1, dragging=false, sx=0, sy=0, tx=0, ty=0;
  function render(){image.style.transform='translate('+tx+'px,'+ty+'px) scale('+scale+')';}
  function close(){overlay.remove();document.body.style.overflow='';document.removeEventListener('keydown',key);}
  function key(e){if(e.key==='Escape')close();}
  overlay.addEventListener('click',function(e){if(e.target===overlay||e.target.classList.contains('lightbox-close'))close();});
  image.addEventListener('wheel',function(e){e.preventDefault();scale=Math.min(4,Math.max(1,scale+(e.deltaY<0?.25:-.25)));if(scale===1){tx=ty=0;}render();},{passive:false});
  image.addEventListener('pointerdown',function(e){dragging=true;image.setPointerCapture?.(e.pointerId);sx=e.clientX;sy=e.clientY;});
  image.addEventListener('pointermove',function(e){if(!dragging||scale<=1)return;tx+=e.clientX-sx;ty+=e.clientY-sy;sx=e.clientX;sy=e.clientY;render();});
  image.addEventListener('pointerup',function(){dragging=false;});
  image.addEventListener('pointercancel',function(){dragging=false;});
  image.addEventListener('touchstart',function(e){if(e.touches.length===2){startDist=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);startScale=scale;}},{passive:true});
  image.addEventListener('touchmove',function(e){if(e.touches.length===2){e.preventDefault();var d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);scale=Math.min(4,Math.max(1,startScale*(d/startDist)));if(scale===1){tx=ty=0;}render();}},{passive:false});
  document.addEventListener('keydown',key);
}
function init(){document.querySelectorAll('.product-gallery img, .gallery img').forEach(function(img){
  img.addEventListener('mouseenter',function(){this.classList.add('zoom-hover');});
  img.addEventListener('mouseleave',function(){this.classList.remove('zoom-hover');});
  img.addEventListener('mousemove',function(e){if(window.innerWidth<=700)return;var r=this.getBoundingClientRect();var x=((e.clientX-r.left)/r.width)*100;var y=((e.clientY-r.top)/r.height)*100;this.style.transformOrigin=x+'% '+y+'%';});
  img.addEventListener('click',function(){lightbox(this.src,this.alt);});
});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
