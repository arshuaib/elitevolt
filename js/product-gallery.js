(function () {
  "use strict";

  function escapeAttr(value) {
    return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  function openLightbox(src, alt) {
    var overlay = document.createElement("div");
    overlay.className = "image-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Product image viewer");
    overlay.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image viewer">×</button><img src="' + escapeAttr(src) + '" alt="' + escapeAttr(alt) + '"><p class="lightbox-help">Pinch or scroll to zoom. Drag to explore.</p>';
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    var image = overlay.querySelector("img");
    var closeButton = overlay.querySelector(".lightbox-close");
    var scale = 1, startDist = 0, startScale = 1, dragging = false, sx = 0, sy = 0, tx = 0, ty = 0;
    function render() { image.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + scale + ")"; }
    function close() {
      overlay.remove();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", key);
    }
    function key(event) { if (event.key === "Escape") close(); }

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay || event.target === closeButton) close();
    });
    image.addEventListener("wheel", function (event) {
      event.preventDefault();
      scale = Math.min(4, Math.max(1, scale + (event.deltaY < 0 ? .25 : -.25)));
      if (scale === 1) tx = ty = 0;
      render();
    }, { passive: false });
    image.addEventListener("pointerdown", function (event) {
      dragging = true;
      image.setPointerCapture(event.pointerId);
      sx = event.clientX; sy = event.clientY;
    });
    image.addEventListener("pointermove", function (event) {
      if (!dragging || scale <= 1) return;
      tx += event.clientX - sx; ty += event.clientY - sy;
      sx = event.clientX; sy = event.clientY; render();
    });
    image.addEventListener("pointerup", function () { dragging = false; });
    image.addEventListener("pointercancel", function () { dragging = false; });
    image.addEventListener("touchstart", function (event) {
      if (event.touches.length === 2) {
        startDist = Math.hypot(event.touches[0].clientX - event.touches[1].clientX, event.touches[0].clientY - event.touches[1].clientY);
        startScale = scale;
      }
    }, { passive: true });
    image.addEventListener("touchmove", function (event) {
      if (event.touches.length !== 2 || !startDist) return;
      event.preventDefault();
      var distance = Math.hypot(event.touches[0].clientX - event.touches[1].clientX, event.touches[0].clientY - event.touches[1].clientY);
      scale = Math.min(4, Math.max(1, startScale * distance / startDist));
      if (scale === 1) tx = ty = 0;
      render();
    }, { passive: false });
    document.addEventListener("keydown", key);
    closeButton.focus();
  }

  function initGallery(gallery) {
    var sources = Array.prototype.map.call(gallery.querySelectorAll(":scope > img"), function (image) {
      return { src: image.getAttribute("src"), alt: image.getAttribute("alt") || "Product photo" };
    }).filter(function (image) { return image.src; });
    if (!sources.length) return;

    var active = 0, interval = null, resumeTimer = null;
    gallery.classList.add("product-gallery");
    gallery.innerHTML = '<div class="product-gallery-stage"><button class="gallery-arrow gallery-prev" type="button" aria-label="Previous product image">‹</button><img class="product-gallery-main" alt=""><button class="gallery-arrow gallery-next" type="button" aria-label="Next product image">›</button><div class="gallery-counter" aria-live="polite"></div></div><div class="product-gallery-thumbnails" role="group" aria-label="Choose a product image"></div>';

    var main = gallery.querySelector(".product-gallery-main");
    var counter = gallery.querySelector(".gallery-counter");
    var rail = gallery.querySelector(".product-gallery-thumbnails");
    var previous = gallery.querySelector(".gallery-prev");
    var next = gallery.querySelector(".gallery-next");
    var thumbnails = sources.map(function (item, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-thumbnail";
      button.setAttribute("aria-label", "Show product image " + (index + 1));
      button.innerHTML = '<img src="' + escapeAttr(item.src) + '" alt="" loading="lazy">';
      button.addEventListener("click", function () { show(index); pauseThenResume(); });
      rail.appendChild(button);
      return button;
    });

    function show(index) {
      active = (index + sources.length) % sources.length;
      main.src = sources[active].src;
      main.alt = sources[active].alt;
      counter.textContent = sources.length > 1 ? (active + 1) + " / " + sources.length : "";
      thumbnails.forEach(function (button, buttonIndex) {
        button.classList.toggle("is-active", buttonIndex === active);
        button.setAttribute("aria-pressed", String(buttonIndex === active));
      });
      if (sources.length > 1) new Image().src = sources[(active + 1) % sources.length].src;
    }

    function stopAutoplay() {
      if (interval) window.clearInterval(interval);
      interval = null;
      if (resumeTimer) window.clearTimeout(resumeTimer);
    }
    function startAutoplay() {
      stopAutoplay();
      if (sources.length > 1 && !document.hidden && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) interval = window.setInterval(function () { show(active + 1); }, 5000);
    }
    function pauseThenResume() {
      stopAutoplay();
      resumeTimer = window.setTimeout(startAutoplay, 8500);
    }

    previous.addEventListener("click", function () { show(active - 1); pauseThenResume(); });
    next.addEventListener("click", function () { show(active + 1); pauseThenResume(); });
    main.addEventListener("click", function () { openLightbox(sources[active].src, sources[active].alt); });
    gallery.addEventListener("pointerenter", stopAutoplay);
    gallery.addEventListener("pointerleave", startAutoplay);
    gallery.addEventListener("focusin", stopAutoplay);
    gallery.addEventListener("focusout", function (event) {
      if (!gallery.contains(event.relatedTarget)) startAutoplay();
    });
    gallery.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") { show(active - 1); pauseThenResume(); }
      if (event.key === "ArrowRight") { show(active + 1); pauseThenResume(); }
    });
    var touchStartX = null;
    gallery.addEventListener("touchstart", function (event) { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
    gallery.addEventListener("touchend", function (event) {
      if (touchStartX === null) return;
      var delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 45) { show(active + (delta < 0 ? 1 : -1)); pauseThenResume(); }
      touchStartX = null;
    }, { passive: true });
    document.addEventListener("visibilitychange", function () { if (document.hidden) stopAutoplay(); else startAutoplay(); });
    show(0);
    startAutoplay();
  }

  function init() { document.querySelectorAll(".gallery").forEach(initGallery); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
