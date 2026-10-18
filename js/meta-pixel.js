/* EliteVolt Meta Pixel and standard web event tracking. */
(function () {
  'use strict';

  var pixelId = '1115706364423032';
  if (!/^\d+$/.test(pixelId)) return;

  if (typeof window.fbq !== 'function') {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  }

  // Initialize this Pixel once even if another script created fbq first.
  window.__eliteVoltMetaPixelIds = window.__eliteVoltMetaPixelIds || {};
  if (!window.__eliteVoltMetaPixelIds[pixelId]) {
    window.fbq('init', pixelId);
    window.__eliteVoltMetaPixelIds[pixelId] = true;
  }

  function track(eventName, parameters) {
    if (typeof window.fbq !== 'function') return;
    if (parameters && Object.keys(parameters).length) window.fbq('track', eventName, parameters);
    else window.fbq('track', eventName);
    window.dispatchEvent(new CustomEvent('elitevolt:' + eventName.toLowerCase(), { detail: parameters || {} }));
  }

  function productParameters(product) {
    if (!product || !product.id) return {};

    var id = String(product.id);
    var price = Number(product.price);
    var categories = Array.isArray(product.categories) ? product.categories : (product.category ? [product.category] : []);
    var subcategories = Array.isArray(product.subcategories) ? product.subcategories : (product.subcategory ? [product.subcategory] : []);
    var parameters = {
      content_ids: [id],
      content_name: product.name || id,
      content_type: 'product',
      contents: [{ id: id, quantity: 1 }]
    };

    if (categories.length || subcategories.length) {
      parameters.content_category = categories.join(', ');
      if (subcategories.length) parameters.content_category += (categories.length ? ' > ' : '') + subcategories.join(', ');
    }
    if (Number.isFinite(price) && price >= 0) {
      parameters.value = price;
      parameters.currency = 'GHS';
      parameters.contents[0].item_price = price;
    }
    return parameters;
  }

  window.EVMetaPixel = window.EVMetaPixel || {};
  window.EVMetaPixel.track = track;
  window.EVMetaPixel.productParameters = productParameters;

  track('PageView');
  if (window.EV_PRODUCT && window.EV_PRODUCT.id) {
    track('ViewContent', productParameters(window.EV_PRODUCT));
  }

  // Record shopper contact intent on WhatsApp, email, or phone links.
  // Product context is included on product pages; message contents are never sent.
  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!link) return;

    var href = (link.getAttribute('href') || '').trim().toLowerCase();
    var method = '';
    if (href.indexOf('wa.me/') !== -1 || href.indexOf('whatsapp.com/') !== -1) method = 'whatsapp';
    else if (href.indexOf('mailto:') === 0) method = 'email';
    else if (href.indexOf('tel:') === 0) method = 'phone';
    if (!method) return;

    var parameters = { contact_method: method };
    var product = productParameters(window.EV_PRODUCT);
    Object.keys(product).forEach(function (key) { parameters[key] = product[key]; });
    track('Contact', parameters);
  }, true);
})();
