/* EliteVolt defensive fixes. Loaded after the original scripts. */
(function () {
  'use strict';

  function encodeWhatsAppMessage(text) {
    return encodeURIComponent(text);
  }

  function fixHomeCalculator() {
    if (!document.getElementById('applianceTable')) return;

    // The original calculator starts quantity at 0 but later forces it to 1.
    // Normalize the initial rows so the UI and internal state agree.
    try {
      if (typeof defaultAppliances !== 'undefined' &&
          typeof applianceRows !== 'undefined' &&
          applianceRows.length === 0) {
        applianceRows = defaultAppliances.map(function (item) {
          return {
            name: String(item.name || '').trim(),
            qty: 1,
            watt: Number(item.watt) || 0,
            hours: Number(item.hours) || 0
          };
        });
        if (typeof renderTable === 'function') renderTable();
        if (typeof updateEstimation === 'function') updateEstimation();
      }
    } catch (e) {
      console.warn('EliteVolt calculator normalization:', e);
    }

    // Prevent the original WhatsApp handler from creating an incorrectly
    // encoded URL. Capture the click before the old bubble handler.
    var wa = document.getElementById('whatsappQuoteBtn');
    if (wa && !wa.dataset.evFixed) {
      wa.dataset.evFixed = '1';
      wa.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        try {
          var data = typeof computeSystem === 'function'
            ? computeSystem()
            : { totalDailyKwh: 0, solarKwp: 0, batteryKwh: 0 };

          if (!data.totalWhRaw && (!window.applianceRows || !applianceRows.length)) {
            alert('Please add at least one appliance to generate quote.');
            return;
          }

          var rows = (typeof applianceRows !== 'undefined' ? applianceRows : []);
          var list = rows.map(function (a) {
            return (a.name || 'Appliance') + ' (' +
              (Number(a.qty) || 1) + 'x ' +
              (Number(a.watt) || 0) + 'W, ' +
              (Number(a.hours) || 0) + 'h/day)';
          }).join(', ');

          var msg =
            'Hello EliteVolt Team,\\n\\n' +
            'I need a quote for a solar power system based on my load calculation:\\n' +
            '• Total Daily Consumption: ' + data.totalDailyKwh + ' kWh\\n' +
            '• Recommended Solar PV: ' + data.solarKwp + ' kWp\\n' +
            '• Battery Bank: ' + data.batteryKwh + ' kWh (1-day backup)\\n' +
            '• Appliances: ' + (list || 'Custom setup') + '\\n\\n' +
            'Please provide pricing & installation details. Thank you!';

          window.open(
            'https://wa.me/233249976762?text=' + encodeWhatsAppMessage(msg),
            '_blank',
            'noopener,noreferrer'
          );
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

  function init() {
    fixHomeCalculator();
    fixShopCart();
    document.documentElement.classList.add('ev-mobile-fixes-loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
