(() => {
  const STORAGE_KEY = "soberana-lang";
  const PRODUCT_PAGES = ["paneles.html", "paquetes.html", "baterias.html", "inteligentes.html"];

  const TEXT = {
    es: {
      categories: "Categorías", models: "Modelos", recommendations: "Recomendaciones", products: "Productos",
      panels: "Paneles", packages: "Paquetes", batteries: "Baterías", smart: "Inteligentes",
      viewModels: "Ver modelos", openMenu: "Abrir menú", closeMenu: "Cerrar menú", switchLang: "Switch to English",
      catalog: "Catálogo", stations: "Estaciones", legal: "Legal", privacy: "Aviso de privacidad", terms: "Términos y condiciones",
      footerCopy: "Soluciones EcoFlow para respaldo, energía portátil, paneles solares, baterías y paquetes comerciales.",
      footerProducts: "Productos", footerRecommendations: "Recomendaciones", footerComparator: "Comparador",
      footerAvailability: "Precios sujetos a disponibilidad.", footerMexico: "Atención en México.",
      footerRights: "© 2026. Todos los derechos reservados.",
      footerDisclaimer: "Catálogo informativo. Validar compatibilidad antes de compra o instalación.",
      viewMore: "Ver más", onRequest: "Bajo pedido", publicPrice: "Precio público:", distributorPrice: "Precio distribuidor:",
      panelCharge: "Carga con panel:", capacity: "Capacidad:", output: "Salida:"
    },
    en: {
      categories: "Categories", models: "Models", recommendations: "Recommendations", products: "Products",
      panels: "Panels", packages: "Packages", batteries: "Batteries", smart: "Smart devices",
      viewModels: "View models", openMenu: "Open menu", closeMenu: "Close menu", switchLang: "Cambiar a español",
      catalog: "Catalog", stations: "Stations", legal: "Legal", privacy: "Privacy notice", terms: "Terms and conditions",
      footerCopy: "EcoFlow solutions for backup power, portable energy, solar panels, batteries, and commercial packages.",
      footerProducts: "Products", footerRecommendations: "Recommendations", footerComparator: "Comparator",
      footerAvailability: "Prices subject to availability.", footerMexico: "Service in Mexico.",
      footerRights: "© 2026. All rights reserved.",
      footerDisclaimer: "Informational catalog. Validate compatibility before purchase or installation.",
      viewMore: "View more", onRequest: "On request", publicPrice: "Public price:", distributorPrice: "Distributor price:",
      panelCharge: "Panel charging:", capacity: "Capacity:", output: "Output:"
    }
  };

  const PAGE_TEXT = {
    "paneles.html": {
      es: ["Soberana Solutions · Paneles solares", "Catálogo de paneles solares EcoFlow con precios calculados con IVA y margen operativo.", "Energía solar", "Paneles solares", "Opciones portátiles, ligeras y rígidas para complementar estaciones EcoFlow, cargar durante el día y extender autonomía en campo, hogar u operación móvil.", "Ver paneles", "Ver estaciones", "Catálogo solar", "Portátiles, ligeros y rígidos", "Paneles solares", "Modelos disponibles"],
      en: ["Soberana Solutions · Solar panels", "EcoFlow solar panel catalog with prices calculated with VAT and operating margin.", "Solar energy", "Solar panels", "Portable, lightweight, and rigid options to complement EcoFlow stations, charge during the day, and extend runtime in the field, at home, or on mobile operations.", "View panels", "View stations", "Solar catalog", "Portable, lightweight, and rigid", "Solar panels", "Available models"]
    },
    "paquetes.html": {
      es: ["Soberana Solutions · Paquetes solares", "Paquetes EcoFlow con estación y panel solar correspondiente, precio combinado, carga solar estimada y autonomías por dispositivos.", "Combos solares", "Paquetes solares", "Equipo EcoFlow más panel correspondiente, con precio combinado, tiempo de carga solar y autonomía estimada según dispositivos conectados.", "Ver paquetes", "Ver paneles", "Paquetes EcoFlow", "Equipo + panel solar"],
      en: ["Soberana Solutions · Solar packages", "EcoFlow packages with the matching solar panel, combined price, estimated solar charge time, and runtime by connected devices.", "Solar bundles", "Solar packages", "EcoFlow unit plus matching panel, with combined price, solar charge time, and estimated runtime by connected devices.", "View packages", "View panels", "EcoFlow packages", "Unit + solar panel"]
    },
    "baterias.html": {
      es: ["Soberana Solutions · Baterías", "Catálogo de baterías EcoFlow con precios.", "Expansión de energía", "Baterías", "Baterías extra para ampliar autonomía, respaldar más horas y construir sistemas escalables según el modelo EcoFlow compatible.", "Ver baterías", "Ver estaciones", "Catálogo de baterías", "Más horas de respaldo", "Baterías EcoFlow", "Modelos disponibles"],
      en: ["Soberana Solutions · Batteries", "EcoFlow battery catalog with prices.", "Energy expansion", "Batteries", "Extra batteries to extend runtime, support more hours, and build scalable systems depending on the compatible EcoFlow model.", "View batteries", "View stations", "Battery catalog", "More backup hours", "EcoFlow batteries", "Available models"]
    },
    "inteligentes.html": {
      es: ["Soberana Solutions · Inteligentes", "Catálogo de equipos inteligentes EcoFlow con descripción, precios y uso recomendado.", "Control, clima y carga móvil", "Inteligentes", "Equipos complementarios para automatizar respaldo residencial, cargar desde vehículos y manejar clima o refrigeración portátil dentro del ecosistema EcoFlow.", "Ver equipos", "Ver estaciones", "Equipos inteligentes", "Control y respaldo conectado", "EcoFlow inteligentes", "Modelos disponibles"],
      en: ["Soberana Solutions · Smart devices", "EcoFlow smart device catalog with description, prices, and recommended use.", "Control, climate, and mobile charging", "Smart devices", "Complementary devices to automate residential backup, charge from vehicles, and manage climate or portable cooling within the EcoFlow ecosystem.", "View devices", "View stations", "Smart devices", "Control and connected backup", "EcoFlow smart devices", "Available models"]
    },
    "aviso-privacidad.html": {
      es: ["Soberana Solutions · Aviso de privacidad", "Aviso de privacidad de Soberana Solutions conforme a obligaciones generales de protección de datos personales en México.", "Legal", "Aviso de privacidad", "Información sobre el tratamiento de datos personales recabados a través del sitio, cotizaciones y canales comerciales."],
      en: ["Soberana Solutions · Privacy notice", "Soberana Solutions privacy notice under general personal-data protection obligations in Mexico.", "Legal", "Privacy notice", "Information about the processing of personal data collected through the site, quotes, and commercial channels."]
    },
    "terminos-condiciones.html": {
      es: ["Soberana Solutions · Términos y condiciones", "Términos y condiciones de uso del catálogo comercial de Soberana Solutions.", "Legal", "Términos y condiciones", "Reglas generales para el uso del sitio, consulta de productos, precios, cotizaciones, garantías e información comercial."],
      en: ["Soberana Solutions · Terms and conditions", "Terms and conditions for using the Soberana Solutions commercial catalog.", "Legal", "Terms and conditions", "General rules for using the site, viewing products, prices, quotes, warranties, and commercial information."]
    }
  };

  const pageName = () => (window.location.pathname.split("/").pop() || "index.html").toLowerCase() || "index.html";
  const isHome = () => pageName() === "index.html";
  const normalizeLang = (lang) => lang === "es" ? "es" : "en";
  const getLang = () => { try { return normalizeLang(localStorage.getItem(STORAGE_KEY)); } catch { return "en"; } };
  const saveLang = (lang) => { try { localStorage.setItem(STORAGE_KEY, normalizeLang(lang)); } catch {} };
  const homeHref = (hash) => isHome() ? hash : `index.html${hash}`;
  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value !== undefined) el.textContent = value;
  };

  function productLink(file, label, current) {
    return `<a class="${current === file ? "active" : ""}" href="${file}">${label}</a>`;
  }

  function buildNav(lang) {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const t = TEXT[lang];
    const current = pageName();
    const productsActive = PRODUCT_PAGES.includes(current);
    nav.innerHTML = `
      <div class="container nav-inner">
        <a class="brand" href="${homeHref("#inicio")}">
          <span class="brand-mark"><img src="assets/hojita-removebg-preview.png" alt="" aria-hidden="true"></span>
          <span>Soberana Solutions</span>
        </a>
        <button class="nav-toggle" type="button" aria-label="${t.openMenu}" aria-expanded="false" aria-controls="navMenu"><span></span><span></span><span></span></button>
        <div class="nav-menu" id="navMenu">
          <div class="nav-links">
            <a href="${homeHref("#categorias")}">${t.categories}</a>
            <a href="${homeHref("#modelos")}">${t.models}</a>
            <a href="${homeHref("#recomendador")}">${t.recommendations}</a>
            <div class="nav-dropdown">
              <button class="nav-dropdown-button ${productsActive ? "active" : ""}" type="button" aria-haspopup="true" aria-expanded="false">${t.products}</button>
              <div class="nav-dropdown-menu">
                ${productLink("paneles.html", t.panels, current)}
                ${productLink("paquetes.html", t.packages, current)}
                ${productLink("baterias.html", t.batteries, current)}
                ${productLink("inteligentes.html", t.smart, current)}
              </div>
            </div>
          </div>
          <div class="nav-actions">
            <button class="lang-toggle" id="langToggle" type="button" aria-label="${t.switchLang}">${lang.toUpperCase()}</button>
            <a class="nav-cta" href="${homeHref("#modelos")}">${t.viewModels}</a>
          </div>
        </div>
      </div>`;
    bindNav(lang);
  }

  function bindNav(lang) {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector(".nav-toggle");
    const langToggle = document.getElementById("langToggle");
    if (!nav || !toggle) return;
    const t = TEXT[lang];
    const setOpen = (open) => {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? t.closeMenu : t.openMenu);
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a") && window.matchMedia("(max-width: 1000px)").matches) setOpen(false);
    });
    window.addEventListener("keydown", (event) => { if (event.key === "Escape") setOpen(false); });
    window.addEventListener("resize", () => { if (!window.matchMedia("(max-width: 1000px)").matches) setOpen(false); });
    if (langToggle) langToggle.addEventListener("click", () => setSiteLanguage(lang === "en" ? "es" : "en"));
  }

  function translateFooter(lang) {
    const t = TEXT[lang];
    setText(".footer-brand p", t.footerCopy);
    const cols = document.querySelectorAll(".footer-col");
    if (cols[0]) {
      cols[0].querySelector("h3") && (cols[0].querySelector("h3").textContent = t.catalog);
      const links = cols[0].querySelectorAll("a");
      [t.stations, t.panels, t.batteries, t.packages].forEach((label, index) => { if (links[index]) links[index].textContent = label; });
    }
    if (cols[1]) {
      cols[1].querySelector("h3") && (cols[1].querySelector("h3").textContent = t.footerProducts);
      const links = cols[1].querySelectorAll("a");
      [t.smart, t.footerRecommendations, t.footerComparator].forEach((label, index) => { if (links[index]) links[index].textContent = label; });
    }
    if (cols[2]) {
      cols[2].querySelector("h3") && (cols[2].querySelector("h3").textContent = t.legal);
      const links = cols[2].querySelectorAll("a");
      if (links[0]) links[0].textContent = t.privacy;
      if (links[1]) links[1].textContent = t.terms;
      const spans = cols[2].querySelectorAll("span");
      if (spans[0]) spans[0].textContent = t.footerAvailability;
      if (spans[1]) spans[1].textContent = t.footerMexico;
    }
    const bottom = document.querySelectorAll(".footer-bottom span");
    if (bottom[0]) bottom[0].textContent = t.footerRights;
    if (bottom[1]) bottom[1].textContent = t.footerDisclaimer;
  }

  function translatePage(lang) {
    document.documentElement.lang = lang;
    const page = pageName();
    const values = PAGE_TEXT[page]?.[lang];
    if (values) {
      const [title, meta, kicker, h1, desc, primary, secondary, featureStrong, featureSmall, sectionKicker, sectionTitle] = values;
      document.title = title;
      const metaEl = document.querySelector('meta[name="description"]');
      if (metaEl) metaEl.setAttribute("content", meta);
      setText("main .kicker", kicker);
      setText("main h1", h1);
      setText("main h1 + p", desc);
      const actions = document.querySelectorAll(".solar-catalog-hero .hero-actions .btn");
      if (actions[0] && primary) actions[0].textContent = primary;
      if (actions[1] && secondary) actions[1].textContent = secondary;
      setText(".solar-feature-meta strong", featureStrong);
      setText(".solar-feature-meta small", featureSmall);
      const sectionHead = document.querySelector(".section-head");
      if (sectionHead) {
        const sectionK = sectionHead.querySelector(".kicker");
        const sectionH = sectionHead.querySelector("h2");
        if (sectionK && sectionKicker) sectionK.textContent = sectionKicker;
        if (sectionH && sectionTitle) sectionH.textContent = sectionTitle;
      }
    }
    translateFooter(lang);
    translateGenericLabels(lang);
  }

  function translateGenericLabels(lang) {
    const t = TEXT[lang];
    document.querySelectorAll(".details-btn").forEach((el) => {
      if (/^(Ver más|View more)$/i.test(el.textContent.trim())) el.textContent = t.viewMore;
    });
    document.querySelectorAll(".card-price em").forEach((el) => {
      if (/^(Bajo pedido|On request)$/i.test(el.textContent.trim())) el.textContent = t.onRequest;
    });
    const exact = {
      "Precio público:": t.publicPrice, "Public price:": t.publicPrice,
      "Precio distribuidor:": t.distributorPrice, "Distributor price:": t.distributorPrice,
      "Carga con panel:": t.panelCharge, "Panel charging:": t.panelCharge,
      "Capacidad:": t.capacity, "Capacity:": t.capacity,
      "Salida:": t.output, "Output:": t.output
    };
    document.querySelectorAll("strong").forEach((el) => {
      const value = el.textContent.trim();
      if (exact[value]) el.textContent = exact[value];
    });
  }

  function setSiteLanguage(lang) {
    const normalized = normalizeLang(lang);
    saveLang(normalized);
    if (isHome() && typeof window.setLanguage === "function") window.setLanguage(normalized);
    buildNav(normalized);
    translatePage(normalized);
  }

  window.SoberanaI18n = { setLanguage: setSiteLanguage, getLanguage: getLang };
  const init = () => setSiteLanguage(getLang());
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
