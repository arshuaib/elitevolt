/* EliteVolt v5 — modal/gallery repair and mobile interaction */
(function () {
  'use strict';

  function cleanText(value) {
    return String(value == null ? '' : value)
      .replace(/\u25a1/g, '•')
      .replace(/\uFFFD/g, '•')
      .trim();
  }

  function cleanProductData() {
    try {
      if (typeof productsData === 'undefined') return;

      /* The current 6kW HV listing contains an unrelated sneaker image.
         Remove that thumbnail rather than showing an unrelated product photo. */
      var p9 = productsData.find(function (p) { return p.id === 'p9'; });
      if (p9) {
        p9.description = cleanText(p9.description);
        p9.specs = (p9.specs || []).map(cleanText);
        p9.thumbnails = (p9.thumbnails || []).filter(function (src) {
          return !/unsplash\.com/i.test(String(src));
        });
      }

      productsData.forEach(function (p) {
        p.description = cleanText(p.description);
        p.specs = (p.specs || []).map(cleanText);
      });
    } catch (e) {
      console.warn('EliteVolt v5 product cleanup:', e);
    }
  }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];
    });
  }

  function openProfessionalModal(pid) {
    if (typeof productsData === 'undefined') return;

    var p = productsData.find(function (item) { return item.id === pid; });
    if (!p) return;

    var modal = document.getElementById('productModal');
    var inner = document.getElementById('modalInner');
    if (!modal || !inner) return;

    var images = Array.from(new Set([p.mainImg].concat(p.thumbnails || [])));
    var thumbs = images.map(function (src, i) {
      return '<img class="modal-thumbnail ' + (i === 0 ? 'active' : '') +
        '" src="' + esc(src) + '" alt="' + esc(p.name) + ' image ' + (i + 1) +
        '" onclick="selectModalImage(' + i + ')">';
    }).join('');

    var desc = cleanText(p.description).replace(/•\s*/g, '• ');
    var specHtml = (p.specs || []).map(function (s) {
      return '<li>' + esc(cleanText(s)) + '</li>';
    }).join('');

    inner.innerHTML =
      '<div class="modal-layout">' +
        '<div class="product-gallery">' +
          '<img id="modalMainImg" src="' + esc(p.mainImg) + '" alt="' + esc(p.name) + '">' +
          '<div class="thumbnails">' + thumbs + '</div>' +
          '<div class="gallery-hint">Tap image to zoom • Double-tap • Pinch • + / −</div>' +
        '</div>' +
        '<div class="modal-details">' +
          '<h3>' + esc(p.name) + '</h3>' +
          '<p>' + esc(desc) + '</p>' +
          (specHtml ? '<ul>' + specHtml + '</ul>' : '') +
          (!p.stock ? '<p style="color:#b91c1c;font-weight:700;">Out of stock</p>' : '') +
          (p.stock ?
            '<a href="https://wa.me/233249976762?text=' + encodeURIComponent(p.whatsappMsg || p.name) +
            '" target="_blank" rel="noopener">' +
            '<button class="btn-whatsapp" style="width:100%;">Enquire on WhatsApp</button></a>' : '') +
        '</div>' +
      '</div>';

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    /* Reuse the existing slideshow state/functions from shop.js. */
    try {
      modalImages = images;
      modalImageIndex = 0;
      if (typeof startModalSlideshow === 'function') startModalSlideshow();
    } catch (e) {}
  }

  function init() {
    cleanProductData();

    /* Override the global handler used by the existing inline product-card buttons. */
    window.openModal = openProfessionalModal;

    /* Clean up square glyphs if an older modal is already present. */
    var observer = new MutationObserver(function () {
      var details = document.querySelector('.modal-details');
      if (!details) return;
      details.querySelectorAll('p, li').forEach(function (el) {
        if (el.textContent.indexOf('\u25a1') !== -1) {
          el.textContent = cleanText(el.textContent);
        }
      });
    });
    var modalInner = document.getElementById('modalInner');
    if (modalInner) observer.observe(modalInner, { childList: true, subtree: true });

    /* Improve mobile modal scrolling without fighting the page. */
    var modal = document.getElementById('productModal');
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal && typeof closeModal === 'function') closeModal();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
