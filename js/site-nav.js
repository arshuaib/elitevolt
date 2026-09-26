(function () {
  "use strict";

  function initMenu(container, links) {
    if (!links || container.querySelector(".mobile-menu-toggle")) return;

    var brand = container.querySelector(":scope > .brand, :scope > .logo");
    if (!brand) return;

    if (!links.id) links.id = "site-menu-" + Math.random().toString(36).slice(2, 8);
    links.setAttribute("aria-label", links.getAttribute("aria-label") || "Main navigation");
    links.setAttribute("aria-hidden", String(window.matchMedia("(max-width: 800px)").matches));

    var button = document.createElement("button");
    button.type = "button";
    button.className = "mobile-menu-toggle";
    button.setAttribute("aria-controls", links.id);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation menu");
    button.innerHTML = '<span class="menu-toggle-label">Menu</span><span class="menu-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span>';
    brand.insertAdjacentElement("afterend", button);
    container.classList.add("has-mobile-menu");

    function setOpen(open) {
      container.classList.toggle("menu-open", open);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      links.setAttribute("aria-hidden", String(!open && window.matchMedia("(max-width: 800px)").matches));
    }

    button.addEventListener("click", function () {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    links.addEventListener("click", function (event) {
      if (event.target.closest("a") && window.matchMedia("(max-width: 800px)").matches) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && container.classList.contains("menu-open")) {
        setOpen(false);
        button.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!container.contains(event.target) && container.classList.contains("menu-open")) setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (!window.matchMedia("(max-width: 800px)").matches) {
        container.classList.remove("menu-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation menu");
        links.setAttribute("aria-hidden", "false");
      } else {
        links.setAttribute("aria-hidden", String(button.getAttribute("aria-expanded") !== "true"));
      }
    });
  }

  function init() {
    document.querySelectorAll(".nav-inner, .nav-container").forEach(function (container) {
      var links = container.querySelector(":scope > .main-nav, :scope > .nav-links");
      initMenu(container, links);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
