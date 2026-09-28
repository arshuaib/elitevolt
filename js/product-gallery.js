(function () {
  "use strict";

  function escapeAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function openLightbox(src, alt) {
    var overlay = document.createElement("div");
    overlay.className = "image-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Product image viewer");

    overlay.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Close image viewer">×</button>' +
      '<img src="' + escapeAttr(src) + '" alt="' + escapeAttr(alt) + '" draggable="false">' +
      '<p class="lightbox-help">Pinch or scroll to zoom. Drag to explore.</p>';

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    var image = overlay.querySelector("img");
    var closeButton = overlay.querySelector(".lightbox-close");

    var scale = 1;
    var tx = 0;
    var ty = 0;
    var dragging = false;
    var pointerId = null;
    var sx = 0;
    var sy = 0;
    var startDist = 0;
    var startScale = 1;
    var lastTap = 0;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function render() {
      image.style.transform =
        "translate3d(" + tx + "px," + ty + "px,0) scale(" + scale + ")";
    }

    function resetPosition() {
      tx = 0;
      ty = 0;
    }

    function close() {
      document.removeEventListener("keydown", key);
      overlay.remove();
      document.body.style.overflow = "";
    }

    function key(event) {
      if (event.key === "Escape") close();
    }

    function distance(a, b) {
      return Math.hypot(
        a.clientX - b.clientX,
        a.clientY - b.clientY
      );
    }

    function zoomTo(nextScale) {
      scale = clamp(nextScale, 1, 4);
      if (scale === 1) resetPosition();
      render();
    }

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay || event.target === closeButton) {
        close();
      }
    });

    image.addEventListener("wheel", function (event) {
      event.preventDefault();
      zoomTo(scale + (event.deltaY < 0 ? 0.25 : -0.25));
    }, { passive: false });

    image.addEventListener("dblclick", function (event) {
      event.preventDefault();
      zoomTo(scale === 1 ? 2 : 1);
    });

    image.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      var now = Date.now();
      if (now - lastTap < 300 && event.pointerType !== "mouse") {
        zoomTo(scale === 1 ? 2 : 1);
      }
      lastTap = now;

      if (event.pointerType === "touch") {
        // Do not start a one-finger drag while a second finger is present.
        if (event.isPrimary === false) return;
      }

      dragging = true;
      pointerId = event.pointerId;
      sx = event.clientX;
      sy = event.clientY;

      try {
        image.setPointerCapture(event.pointerId);
      } catch (e) {}

      if (scale > 1) {
        image.style.cursor = "grabbing";
      }
    });

    image.addEventListener("pointermove", function (event) {
      if (!dragging || scale <= 1 || event.pointerId !== pointerId) return;

      tx += event.clientX - sx;
      ty += event.clientY - sy;
      sx = event.clientX;
      sy = event.clientY;
      render();
    });

    function endPointer(event) {
      if (event.pointerId !== pointerId) return;

      dragging = false;
      try {
        image.releasePointerCapture(event.pointerId);
      } catch (e) {}

      pointerId = null;
      image.style.cursor = scale > 1 ? "grab" : "";
    }

    image.addEventListener("pointerup", endPointer);
    image.addEventListener("pointercancel", endPointer);
    image.addEventListener("lostpointercapture", function () {
      dragging = false;
      pointerId = null;
      image.style.cursor = scale > 1 ? "grab" : "";
    });

    // Pinch zoom is handled separately from one-finger dragging.
    image.addEventListener("touchstart", function (event) {
      if (event.touches.length === 2) {
        dragging = false;
        startDist = distance(event.touches[0], event.touches[1]);
        startScale = scale;
      }
    }, { passive: true });

    image.addEventListener("touchmove", function (event) {
      if (event.touches.length !== 2 || !startDist) return;

      event.preventDefault();

      var currentDist = distance(
        event.touches[0],
        event.touches[1]
      );

      zoomTo(startScale * currentDist / startDist);
    }, { passive: false });

    image.addEventListener("touchend", function (event) {
      if (event.touches.length < 2) {
        startDist = 0;
        startScale = scale;
      }
    }, { passive: true });

    image.addEventListener("touchcancel", function () {
      startDist = 0;
      dragging = false;
    }, { passive: true });

    document.addEventListener("keydown", key);

    // Keep focus inside the close control when the viewer opens.
    closeButton.focus();
    image.style.cursor = "grab";
    render();
  }

  function initGallery(gallery) {
    var sources = Array.prototype.map.call(
      gallery.querySelectorAll(":scope > img"),
      function (image) {
        return {
          src: image.getAttribute("src"),
          alt: image.getAttribute("alt") || "Product photo"
        };
      }
    ).filter(function (image) {
      return image.src;
    });

    if (!sources.length) return;

    var active = 0;
    var interval = null;
    var resumeTimer = null;

    gallery.classList.add("product-gallery");
    gallery.setAttribute("tabindex", "0");

    gallery.innerHTML =
      '<div class="product-gallery-stage">' +
        '<button class="gallery-arrow gallery-prev" type="button" aria-label="Previous product image">‹</button>' +
        '<img class="product-gallery-main" alt="" draggable="false" tabindex="0">' +
        '<button class="gallery-arrow gallery-next" type="button" aria-label="Next product image">›</button>' +
        '<div class="gallery-counter" aria-live="polite"></div>' +
      '</div>' +
      '<div class="product-gallery-thumbnails" role="group" aria-label="Choose a product image"></div>';

    var main = gallery.querySelector(".product-gallery-main");
    var counter = gallery.querySelector(".gallery-counter");
    var rail = gallery.querySelector(".product-gallery-thumbnails");
    var previous = gallery.querySelector(".gallery-prev");
    var next = gallery.querySelector(".gallery-next");

    var thumbnails = sources.map(function (item, index) {
      var button = document.createElement("button");

      button.type = "button";
      button.className = "gallery-thumbnail";
      button.setAttribute(
        "aria-label",
        "Show product image " + (index + 1)
      );
      button.setAttribute("aria-pressed", "false");

      button.innerHTML =
        '<img src="' + escapeAttr(item.src) + '" alt="" loading="lazy">';

      button.addEventListener("click", function () {
        show(index);
        pauseThenResume();
      });

      rail.appendChild(button);
      return button;
    });

    function show(index) {
      active = (index + sources.length) % sources.length;

      main.src = sources[active].src;
      main.alt = sources[active].alt;

      counter.textContent =
        sources.length > 1
          ? (active + 1) + " / " + sources.length
          : "";

      thumbnails.forEach(function (button, buttonIndex) {
        var isActive = buttonIndex === active;

        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      if (sources.length > 1) {
        var nextIndex = (active + 1) % sources.length;
        var preload = new Image();
        preload.src = sources[nextIndex].src;
      }
    }

    function stopAutoplay() {
      if (interval !== null) {
        window.clearInterval(interval);
        interval = null;
      }

      if (resumeTimer !== null) {
        window.clearTimeout(resumeTimer);
        resumeTimer = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();

      if (
        sources.length > 1 &&
        !document.hidden &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        interval = window.setInterval(function () {
          show(active + 1);
        }, 5000);
      }
    }

    function pauseThenResume() {
      stopAutoplay();

      resumeTimer = window.setTimeout(function () {
        resumeTimer = null;
        startAutoplay();
      }, 8500);
    }

    previous.addEventListener("click", function () {
      show(active - 1);
      pauseThenResume();
    });

    next.addEventListener("click", function () {
      show(active + 1);
      pauseThenResume();
    });

    main.addEventListener("click", function () {
      openLightbox(
        sources[active].src,
        sources[active].alt
      );
    });

    main.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(
          sources[active].src,
          sources[active].alt
        );
      }
    });

    gallery.addEventListener("pointerenter", stopAutoplay);
    gallery.addEventListener("pointerleave", startAutoplay);
    gallery.addEventListener("focusin", stopAutoplay);

    gallery.addEventListener("focusout", function (event) {
      if (!gallery.contains(event.relatedTarget)) {
        startAutoplay();
      }
    });

    gallery.addEventListener("keydown", function (event) {
      if (event.target !== gallery && event.target !== main) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(active - 1);
        pauseThenResume();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        show(active + 1);
        pauseThenResume();
      }
    });

    var touchStartX = null;
    var touchStartY = null;

    gallery.addEventListener("touchstart", function (event) {
      if (event.touches.length !== 1) return;

      touchStartX = event.changedTouches[0].clientX;
      touchStartY = event.changedTouches[0].clientY;
    }, { passive: true });

    gallery.addEventListener("touchend", function (event) {
      if (touchStartX === null || touchStartY === null) return;

      var deltaX = event.changedTouches[0].clientX - touchStartX;
      var deltaY = event.changedTouches[0].clientY - touchStartY;

      // Only treat predominantly horizontal movement as a gallery swipe.
      if (
        Math.abs(deltaX) > 45 &&
        Math.abs(deltaX) > Math.abs(deltaY)
      ) {
        show(active + (deltaX < 0 ? 1 : -1));
        pauseThenResume();
      }

      touchStartX = null;
      touchStartY = null;
    }, { passive: true });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    show(0);
    startAutoplay();
  }

  function init() {
    document.querySelectorAll(".gallery").forEach(initGallery);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
