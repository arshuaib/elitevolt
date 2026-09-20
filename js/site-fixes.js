/* EliteVolt defensive fixes. Loaded after the original scripts. */
(function () {
  'use strict';

  function encodeWhatsAppMessage(text) {
    return encodeURIComponent(text);
  }

  function fixHomeCalculator() {
    // Do not normalize calculator quantities: quantity 0 is intentional.
    // Keep only the safer WhatsApp quote handler below.
    var wa = document.getElementById('whatsappQuoteBtn');
    if (wa && !wa.dataset.evFixed) {
      wa.dataset.evFixed = '1';
      wa.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        try {
          var data = typeof computeSystem === 'function'
            ? computeSystem()
            : { totalDailyKwh: 0, solarKwp: 0, batteryKwh: 0, totalWhRaw: 0 };
          var rows = (typeof applianceRows !== 'undefined' ? applianceRows : []);
          if (!data.totalWhRaw && !rows.length) {
            alert('Please add at least one appliance to generate quote.');
            return;
          }
          var list = rows.map(function (a) {
            return (a.name || 'Appliance') + ' (' +
              (Number.isFinite(Number(a.qty)) ? Number(a.qty) : 0) + 'x ' +
              (Number(a.watt) || 0) + 'W, ' +
              (Number(a.hours) || 0) + 'h/day)';
          }).join(', ');
          var msg =
            'Hello EliteVolt Team\n\n' +
            'I need a quote for a solar power system based on my load calculation:\n' +
            '• Total Daily Consumption: ' + data.totalDailyKwh + ' kWh\n' +
            '• Recommended Solar PV: ' + data.solarKwp + ' kWp\n' +
            '• Battery Bank: ' + data.batteryKwh + ' kWh (1-day backup)\n' +
            '• Appliances: ' + (list || 'Custom setup') + '\n\n' +
            'Please provide pricing & installation details. Thank you!';
          window.open('https://wa.me/233249976762?text=' + encodeWhatsAppMessage(msg), '_blank', 'noopener,noreferrer');
        } catch (e) {
          console.error('EliteVolt WhatsApp quote:', e);
        }
      }, true);
    }
  }

  function fixShopCart() {
    if (!document.getElementById('productsGrid')) return;

    // Repair malformed/old localStorage entries without destroying good carts.
    try {
      var key = 'ev_cart_v4';
      var raw = localStorage.getItem(key);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) throw new Error('Cart is not an array');

        parsed = parsed
          .filter(function (item) {
            return item && typeof item.id === 'string';
          })
          .map(function (item) {
            return {
              id: item.id,
              name: String(item.name || ''),
              price: Math.max(0, Number(item.price) || 0),
              quantity: Math.max(1, Math.floor(Number(item.quantity) || 1))
            };
          });

        localStorage.setItem(key, JSON.stringify(parsed));
      }
    } catch (e) {
      localStorage.removeItem('ev_cart_v4');
      console.warn('EliteVolt cart storage repaired:', e);
    }
  }



  function initShopMobileNav() {
    var toggle = document.getElementById('mobileMenuToggle');
    var nav = document.getElementById('shopNavLinks');
    if (!toggle || !nav || toggle.dataset.evNavFixed) return;
    toggle.dataset.evNavFixed = '1';

    function closeNav() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      var icon = toggle.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      var icon = toggle.querySelector('i');
      if (icon) icon.className = open ? 'fas fa-times' : 'fas fa-bars';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('is-open')) return;
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) closeNav();
    });
  }

  function init() {
    fixHomeCalculator();
    fixShopCart();
    initShopMobileNav();
    document.documentElement.classList.add('ev-mobile-fixes-loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
