/* EliteVolt Meta Pixel loader.
 * Add the numeric Meta Pixel ID to the <meta name="meta-pixel-id"> tag
 * present in every page's <head> (see META-COMMERCE-SETUP.txt).
 * Once set, this fires PageView on every page, ViewContent on product
 * pages (via window.EV_PRODUCT, set inline on each product page), and
 * shop.js sends AddToCart / InitiateCheckout on top of that.
 */
(function () {
  'use strict';
  var meta = document.querySelector('meta[name="meta-pixel-id"]');
  var pixelId = meta ? String(meta.content || '').trim() : '';
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

    window.fbq('init', pixelId);
  }

  window.fbq('track', 'PageView');

  // Product pages set window.EV_PRODUCT = { id, name, price } before loading
  // this script, so we can report ViewContent for the Meta catalog/pixel.
  if (window.EV_PRODUCT && window.EV_PRODUCT.id) {
    window.fbq('track', 'ViewContent', {
      content_ids: [window.EV_PRODUCT.id],
      content_name: window.EV_PRODUCT.name,
      content_type: 'product',
      value: Number(window.EV_PRODUCT.price) || 0,
      currency: 'GHS'
    });
  }
})();
