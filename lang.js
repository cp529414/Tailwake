// Tailwake language switcher. First-party only: no storage, cookies or network requests.
// Each language is its own static page. ?lang=en or ?lang=zhtw opens the matching version.
(function () {
  var aliases = {
    "en": "en", "en-us": "en", "english": "en",
    "zh": "zh-Hant", "zhtw": "zh-Hant", "zh-tw": "zh-Hant", "zh_tw": "zh-Hant", "zh-hant": "zh-Hant", "zh-hant-tw": "zh-Hant"
  };
  var requested = new URLSearchParams(window.location.search).get("lang");
  var wanted = requested ? aliases[requested.toLowerCase()] : null;
  if (wanted && wanted !== document.documentElement.lang) {
    var link = document.querySelector('.lang a[data-lang="' + wanted + '"]');
    if (link) {
      window.location.replace(link.href);
      return;
    }
  }

  var menu = document.querySelector("details.lang");
  if (!menu) return;
  document.addEventListener("click", function (event) {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });
})();
