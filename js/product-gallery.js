/* EliteVolt product gallery */
(function(){
'use strict';
function init(){
  document.querySelectorAll('.product-gallery img, .gallery img').forEach(function(img){
    img.addEventListener('mouseenter', function(){ this.classList.add('zoom-hover'); });
    img.addEventListener('mouseleave', function(){ this.classList.remove('zoom-hover'); });
    img.addEventListener('click', function(){
      var overlay=document.createElement('div'); overlay.className='image-lightbox';
      overlay.innerHTML='<button class="lightbox-close" aria-label="Close">×</button><img src="'+this.src+'" alt="'+(this.alt||'')+'"><div class="lightbox-help">Tap outside or × to close • Pinch/scroll to zoom</div>';
      document.body.appendChild(overlay);
      var image=overlay.querySelector('img'), scale=1;
      function close(){overlay.remove();document.removeEventListener('keydown', key);}
      function key(e){if(e.key==='Escape')close();}
      overlay.addEventListener('click',function(e){if(e.target===overlay||e.target.classList.contains('lightbox-close'))close();});
      image.addEventListener('wheel',function(e){e.preventDefault();scale=Math.min(4,Math.max(1,scale+(e.deltaY<0?.2:-.2)));image.style.transform='scale('+scale+')';},{passive:false});
      document.addEventListener('keydown',key);
    });
  });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();