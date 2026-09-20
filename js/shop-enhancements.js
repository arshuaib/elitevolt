/* EliteVolt professional shop interactions: zoom viewer, keyboard controls,
   image loading polish and accessibility improvements. */
(function () {
  'use strict';

  var zoom = 1, minZoom = 1, maxZoom = 4;
  var panX = 0, panY = 0;
  var lightbox, lightboxImg, counter, caption;
  var dragging = false, startX = 0, startY = 0, startPanX = 0, startPanY = 0;
  var lastTap = 0;

  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

  function getModalImages() {
    return Array.isArray(window.modalImages) && window.modalImages.length
      ? window.modalImages
      : [];
  }

  function buildLightbox() {
    if (document.getElementById('evLightbox')) return;
    lightbox = document.createElement('div');
    lightbox.id = 'evLightbox';
    lightbox.className = 'ev-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Product image viewer');
    lightbox.innerHTML =
      '<button class="ev-lightbox-close" type="button" aria-label="Close image viewer">&times;</button>' +
      '<div class="ev-lightbox-toolbar" role="toolbar" aria-label="Image controls">' +
        '<button type="button" data-zoom="out" aria-label="Zoom out">−</button>' +
        '<span class="ev-lightbox-counter">1 / 1</span>' +
        '<button type="button" data-zoom="in" aria-label="Zoom in">+</button>' +
        '<button type="button" data-zoom="reset" aria-label="Reset zoom">↺</button>' +
      '</div>' +
      '<div class="ev-lightbox-image-wrap">' +
        '<img alt="Product image">' +
      '</div>' +
      '<div class="ev-lightbox-caption"></div>';
    document.body.appendChild(lightbox);
    lightboxImg = lightbox.querySelector('img');
    counter = lightbox.querySelector('.ev-lightbox-counter');
    caption = lightbox.querySelector('.ev-lightbox-caption');

    lightbox.querySelector('.ev-lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    lightbox.querySelectorAll('[data-zoom]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var action = btn.getAttribute('data-zoom');
        if (action === 'in') setZoom(zoom + .5);
        else if (action === 'out') setZoom(zoom - .5);
        else resetZoom();
      });
    });

    lightboxImg.addEventListener('wheel', function (e) {
      e.preventDefault();
      setZoom(zoom + (e.deltaY < 0 ? .25 : -.25));
    }, { passive: false });

    lightboxImg.addEventListener('dblclick', function () {
      setZoom(zoom > 1 ? 1 : 2.5);
    });

    var activePointers = new Map();
    var pinchStartDistance = 0;
    var pinchStartZoom = 1;

    lightboxImg.addEventListener('pointerdown', function (e) {
      activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      try { lightboxImg.setPointerCapture(e.pointerId); } catch (_) {}
      if (activePointers.size === 2) {
        var pts = Array.from(activePointers.values());
        pinchStartDistance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        pinchStartZoom = zoom;
        dragging = false;
        return;
      }
      if (zoom <= 1) return;
      dragging = true;
      startX = e.clientX; startY = e.clientY;
      startPanX = panX; startPanY = panY;
      lightboxImg.classList.add('dragging');
    });

    lightboxImg.addEventListener('pointermove', function (e) {
      if (activePointers.has(e.pointerId)) activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activePointers.size === 2) {
        var pts = Array.from(activePointers.values());
        var distance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        if (pinchStartDistance > 0) setZoom(pinchStartZoom * (distance / pinchStartDistance));
        return;
      }
      if (!dragging) return;
      panX = startPanX + (e.clientX - startX);
      panY = startPanY + (e.clientY - startY);
      applyTransform();
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (name) {
      lightboxImg.addEventListener(name, function (e) {
        activePointers.delete(e.pointerId);
        if (activePointers.size < 2) pinchStartDistance = 0;
        dragging = false;
        lightboxImg.classList.remove('dragging');
      });
    });
  }

  function applyTransform() {
    lightboxImg.style.transform = 'translate3d(' + panX + 'px,' + panY + 'px,0) scale(' + zoom + ')';
  }

  function resetZoom() {
    zoom = 1; panX = 0; panY = 0; applyTransform();
  }

  function setZoom(value) {
    zoom = clamp(value, minZoom, maxZoom);
    if (zoom === 1) { panX = 0; panY = 0; }
    var limit = 250 * (zoom - 1);
    panX = clamp(panX, -limit, limit);
    panY = clamp(panY, -limit, limit);
    applyTransform();
  }

  function openLightbox(index) {
    buildLightbox();
    var imgs = getModalImages();
    if (!imgs.length) return;
    index = (Number(index) || 0) % imgs.length;
    if (index < 0) index += imgs.length;
    lightboxImg.src = imgs[index];
    lightboxImg.alt = (document.getElementById('modalMainImg') || {}).alt || 'Product image';
    counter.textContent = (index + 1) + ' / ' + imgs.length;
    caption.textContent = lightboxImg.alt;
    lightbox.dataset.index = String(index);
    lightbox.classList.add('open');
    resetZoom();
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    if (!document.getElementById('productModal') || document.getElementById('productModal').style.display !== 'flex') {
      document.body.style.overflow = '';
    }
  }

  function navigate(delta) {
    var imgs = getModalImages();
    if (!lightbox || !imgs.length) return;
    var index = Number(lightbox.dataset.index || 0) + delta;
    if (index < 0) index = imgs.length - 1;
    if (index >= imgs.length) index = 0;
    openLightbox(index);
  }

  function enhanceModalImage() {
    var img = document.getElementById('modalMainImg');
    if (!img || img.dataset.evZoomBound) return;
    img.dataset.evZoomBound = '1';
    img.title = 'Click to zoom';
    img.addEventListener('click', function () {
      var idx = Number(window.modalImageIndex || 0);
      openLightbox(idx);
    });

    var gallery = img.closest('.product-gallery');
    if (gallery && !gallery.querySelector('.gallery-hint')) {
      var hint = document.createElement('div');
      hint.className = 'gallery-hint';
      hint.textContent = 'Tap image to zoom • Double-tap • Pinch or use + / −';
      gallery.appendChild(hint);
    }
  }

  function polishImages() {
    document.querySelectorAll('img.product-image').forEach(function (img) {
      img.loading = 'lazy';
      img.decoding = 'async';
      img.addEventListener('error', function () {
        img.style.visibility = 'hidden';
        img.parentElement && img.parentElement.classList.add('image-load-error');
      }, { once: true });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (lightbox && lightbox.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') navigate(1);
      else if (e.key === 'ArrowLeft') navigate(-1);
      else if (e.key === '+') setZoom(zoom + .5);
      else if (e.key === '-') setZoom(zoom - .5);
      return;
    }
    if (document.getElementById('productModal')?.style.display === 'flex') {
      if (e.key === 'Escape' && typeof window.closeModal === 'function') window.closeModal();
      else if (e.key === 'ArrowRight' && typeof window.selectModalImage === 'function') window.selectModalImage((window.modalImageIndex || 0) + 1);
      else if (e.key === 'ArrowLeft' && typeof window.selectModalImage === 'function') window.selectModalImage((window.modalImageIndex || 0) - 1);
    }
  });

  var observer = new MutationObserver(function () {
    enhanceModalImage();
    polishImages();
  });

  function init() {
    buildLightbox();
    enhanceModalImage();
    polishImages();
    var modalInner = document.getElementById('modalInner');
    if (modalInner) observer.observe(modalInner, { childList: true, subtree: true });

    // Swipe/tap-friendly thumbnail behavior.
    document.addEventListener('click', function (e) {
      var img = e.target.closest('.modal-thumbnail');
      if (!img) return;
      var now = Date.now();
      if (now - lastTap < 350) {
        var idx = Array.prototype.indexOf.call(document.querySelectorAll('.modal-thumbnail'), img);
        openLightbox(idx >= 0 ? idx : 0);
      }
      lastTap = now;
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
