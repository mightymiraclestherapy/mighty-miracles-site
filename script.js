// Mighty Miracles Therapy — site behavior

document.addEventListener("DOMContentLoaded", function () {
  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Cookie banner
  var banner = document.getElementById("cookieBanner");
  if (banner) {
    var choice = null;
    try { choice = localStorage.getItem("mmt_cookie_choice"); } catch (e) {}
    if (!choice) banner.hidden = false;

    var accept = document.getElementById("cookieAccept");
    var decline = document.getElementById("cookieDecline");
    if (accept) accept.addEventListener("click", function () {
      try { localStorage.setItem("mmt_cookie_choice", "accepted"); } catch (e) {}
      banner.hidden = true;
    });
    if (decline) decline.addEventListener("click", function () {
      try { localStorage.setItem("mmt_cookie_choice", "declined"); } catch (e) {}
      banner.hidden = true;
    });
  }
});
