/* EliteVolt Meta Pixel loader.
 * Add the numeric Meta Pixel ID to the meta tag in shop.html.
 * shop.js will then send AddToCart events through fbq().
 */
(function () {
  'use strict';
  var meta = document.querySelector('meta[name="meta-pixel-id"]');
  var pixelId = meta ? String(meta.content || '').trim() : '';
  if (!/^\d+$/.test(pixelId)) return;
  if (typeof window.fbq === 'function') return;

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
  window.fbq('track', 'PageView');
})();
