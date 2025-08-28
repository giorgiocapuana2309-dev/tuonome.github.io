// --- i18n dictionary (IT/ES/EN) ---
const I18N = {
  it: { /* …uguale a prima… */ },
  es: { /* …uguale a prima… */ },
  en: { /* …uguale a prima… */ }
};

// ---------- helper ----------
function applyI18n(lang) {
  const dict = I18N[lang] || I18N.it;

  // <title>
  if (dict["site.title"]) document.title = dict["site.title"];

  // <meta name="description">
  const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
  if (metaDesc && dict["site.description"]) {
    metaDesc.setAttribute("content", dict["site.description"]);
  }

  // tutto il resto con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) {
      // utile per debug: guarda la console del browser
      console.warn("i18n key not found:", key);
      return;
    }
    if (el.tagName.toLowerCase() === "meta") return; // già gestito sopra
    el.innerHTML = value; // consente <strong> ecc.
  });

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

// ---------- main ----------
document.addEventListener("DOMContentLoaded", () => {
  // anno footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // language switcher
  const select = document.getElementById("lang");
  const saved = localStorage.getItem("lang") || (navigator.language || "it").slice(0, 2);
  const initial = ["it", "es", "en"].includes(saved) ? saved : "it";

  if (select) {
    select.value = initial;
    applyI18n(initial);
    select.addEventListener("change", (e) => applyI18n(e.target.value));
  } else {
    // fallback: applica comunque IT
    applyI18n(initial);
  }

  // ------- filtri portfolio (come prima) -------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("active"); btn.setAttribute("aria-selected", "true");
      const filter = btn.getAttribute("data-filter");
      projects.forEach(card => {
        const tags = (card.getAttribute("data-tags") || "").split(",");
        card.style.display = (filter === "all" || tags.includes(filter)) ? "" : "none";
      });
    });
  });
});
