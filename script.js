// === Dizionario i18n completo (IT / ES / EN) ===
const I18N = {
  it: {
    "site.title": "Portfolio - Giorgio Capuana",
    "site.description": "Portfolio personale di Giorgio Capuana: progetti ingegneristici e di gestione/finance.",
    "nav.about": "Chi sono",
    "nav.portfolio": "Portfolio",
    "nav.languages": "Lingue",
    "nav.contact": "Contatti",
    "lang.select_label": "Scegli lingua",
    "hero.hi": "Ciao! Sono <span class='hl'>Giorgio Capuana</span>.",
    "hero.lead": "Ingegnere gestionale con una formazione internazionale tra <strong>Politecnico di Milano</strong> e <strong>Universidad Politécnica de Valencia</strong>. Ho conseguito la <strong>Laurea triennale in Ingegneria Gestionale (BSc)</strong> e la <strong>Laurea magistrale in Management Engineering (MSc)</strong> con major in <strong>Industry 4.0</strong> al Politecnico di Milano. Sto proseguendo con un <strong>secondo master in Ingeniería Industrial</strong> (especialidad en <strong>Diseño, técnicas de fabricación y produzione industrial</strong>) presso la <strong>UPV</strong>, nell'ambito di una <strong>doppia laurea</strong> ottenuta grazie a una borsa di studio, con <strong>tesi condivisa</strong> tra i due atenei.",
    "hero.cta_projects": "Vedi i progetti",
    "hero.cta_contact": "Contattami",
    "about.title": "Chi sono",
    "about.body": "Appassionato di innovazione e Industria 4.0, mi muovo tra progetti di <strong>ingegneria</strong> e <strong>gestione d’impresa</strong>. Competenze principali: analisi dati, gestione progetti, digitalizzazione dei processi, miglioramento continuo.",
    "about.badge1": "Industry 4.0",
    "about.badge2": "Gestione progetti",
    "about.badge3": "Analisi dati",
    "about.badge4": "Operations",
    "edu.title": "Formazione",
    "edu.msc_polimi_title": "M.Sc. Management Engineering",
    "edu.msc_polimi_meta": "Major: Industry 4.0 — Politecnico di Milano",
    "edu.msc_upv_title": "M.Sc. Ingeniería Industrial",
    "edu.msc_upv_meta": "Especialidad en Diseño, técnicas de fabricación y produzione industrial — UPV (Valencia)<br>Double degree con Politecnico di Milano, borsa di studio; tesi condivisa tra i due atenei",
    "edu.bsc_title": "B.Sc. Ingegneria Gestionale",
    "edu.bsc_meta": "Politecnico di Milano",
    "edu.erasmus_title": "Erasmus — Politechnika Warszawska",
    "edu.erasmus_meta": "Varsavia, 6 mesi",
    "portfolio.title": "Portfolio",
    "portfolio.filter_all": "Tutti",
    "portfolio.filter_eng": "Ingegneria",
    "portfolio.filter_mgmt": "Gestione/Finance",
    "proj.a.title": "Progetto Ingegneristico A",
    "proj.a.desc": "Analisi e prototipazione di un modulo IoT per il monitoraggio ambientale.",
    "proj.b.title": "Progetto Ingegneristico B",
    "proj.b.desc": "Analisi profili alari con parametrizzazione CST: camber, spessore, bordo d’attacco.",
    "proj.c.title": "Market Selection HVDC",
    "proj.c.desc": "Comparativa paesi e priorità per l’espansione internazionale nel settore consulenza HVDC.",
    "proj.d.title": "Report di Sostenibilità",
    "proj.d.desc": "Framework GRI/CSRD, calcolo GHG e roadmap KPI ESG.",
    // --- Monopattino: IT ---
"proj.scooter.title": "Studio della dinamica, selezione componenti e disegno di un monopattino elettrico",
"proj.scooter.desc": "Modello dinamico, dimensionamento powertrain, scelta batteria e telaio; disegni e BOM.",
"proj.scooter.page_title": "Monopattino elettrico — Dettagli progetto",
"proj.scooter.page_desc": "Studio dinamico, selezione componenti e disegno di un monopattino elettrico.",
"proj.scooter.lead":
  "Modello a corpo rigido della dinamica (longitudinale e laterale), baricentri e resistenze (Cd·A≈0,30; f_v≈0,001), sizing motore/ESC/batteria per 25 km/h in piano e 5 km/h al 15%; disegno telaio e BOM.",

"proj.scooter.btn_dynamics":"Scarica PDF — Dinamica",
"proj.scooter.btn_cad":"Scarica PDF — CAD & Tavole",
"proj.scooter.btn_back":"← Torna al portfolio",

"proj.scooter.desc_title": "Descrizione",
"proj.scooter.desc_long":
  "Vincoli: carico utile 1500 N; 25 km/h in piano e 5 km/h al 15% (a≈0,5 m/s² allo spunto). Modello a corpo rigido con masse e baricentri (veicolo ≈15,7 kg), Cd·A≈0,30; f_v≈0,001; r_ruota 0,1016 m; η≈0,9; τ=1. Calcolo coppie/potenze, verifica aderenza (≈1,7 m/s²) e anti-ribaltamento (≈49,9%). Selezione motore/ESC/batteria, disegno telaio e tavole CAD con BOM.",

"proj.scooter.specs_title":"Scheda tecnica",
"proj.scooter.specs.payload":"Carico utile","proj.scooter.specs.payload_val":"1500 N",
"proj.scooter.specs.v_flat":"Velocità progetto (piano)","proj.scooter.specs.v_flat_val":"25 km/h",
"proj.scooter.specs.slope":"Pendenza obiettivo","proj.scooter.specs.slope_val":"15% @ 5 km/h",
"proj.scooter.specs.mass":"Massa veicolo","proj.scooter.specs.mass_val":"≈ 15,7 kg",
"proj.scooter.specs.rwheel":"Raggio ruota","proj.scooter.specs.rwheel_val":"0,1016 m",
"proj.scooter.specs.cda":"Resistenza aerodinamica","proj.scooter.specs.cda_val":"Cd·A ≈ 0,30",
"proj.scooter.specs.rr":"Resistenza al rotolamento","proj.scooter.specs.rr_val":"f_v ≈ 0,001",
"proj.scooter.specs.eta":"Rendimento complessivo","proj.scooter.specs.eta_val":"η ≈ 0,9",
"proj.scooter.specs.tau":"Rapporto di trasmissione","proj.scooter.specs.tau_val":"τ = 1",
"proj.scooter.specs.traction":"Limite aderenza (stima)","proj.scooter.specs.traction_val":"≈ 1,7 m/s²",
"proj.scooter.specs.antitip":"Pendenza anti-ribaltamento","proj.scooter.specs.antitip_val":"≈ 49,9%",
    
    "proj.details": "Dettagli",
    "lang.title": "Lingue",
    "lang.body": "Ho una forte passione per le lingue e la comunicazione interculturale. Oltre all'italiano, parlo <strong>spagnolo</strong> e <strong>inglese</strong> a livello avanzato (C1). Nel breve periodo inizierò a studiare <strong>francese</strong>.",
    "lang.it": "Italiano",
    "lang.it_level": "C2 (Madrelingua)",
    "lang.es": "Spagnolo",
    "lang.es_level": "C1",
    "lang.en": "Inglese",
    "lang.en_level": "C1",
    "lang.it_aria": "Italiano C2 (Madrelingua)",
    "lang.es_aria": "Spagnolo C1",
    "lang.en_aria": "Inglese C1",
    "intl.title": "Esperienze Internazionali",
    "intl.erasmus_title": "Erasmus — Politechnika Warszawska",
    "intl.erasmus_meta": "Varsavia, 6 mesi",
    "intl.double_title": "Double Degree — PoliMi & UPV",
    "intl.double_meta": "Borsa di studio; tesi condivisa tra i due atenei",
    "contact.title": "Contatti",
    "contact.body": "Per collaborazioni o informazioni:",
    "contact.email": "giorgio@example.com",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.msg": "Messaggio",
    "contact.form.send": "Invia",
    "contact.form.note": "Su hosting statico gratuito il form non invia email. In futuro puoi usare servizi come Formspree o Netlify Forms.",
    "contact.form.placeholder_name": "Il tuo nome",
    "contact.form.placeholder_email": "La tua email",
    "contact.form.placeholder_msg": "Scrivi qui...",
    "contact.form.alert": "Grazie! Il form è solo dimostrativo su GitHub Pages.",
    "footer.rights": "Tutti i diritti riservati"
  },
  es: {
    "site.title": "Portafolio - Giorgio Capuana",
    "site.description": "Portafolio personal de Giorgio Capuana: proyectos de ingeniería y gestión/finanzas.",
    "nav.about": "Sobre mí",
    "nav.portfolio": "Portafolio",
    "nav.languages": "Idiomas",
    "nav.contact": "Contacto",
    "lang.select_label": "Elegir idioma",
    "hero.hi": "¡Hola! Soy <span class='hl'>Giorgio Capuana</span>.",
    "hero.lead": "Ingeniero de gestión con formación internacional entre el <strong>Politecnico di Milano</strong> y la <strong>Universidad Politécnica de Valencia</strong>. Obtuve el <strong>BSc en Ingeniería de Gestión</strong> y el <strong>MSc en Management Engineering</strong> con especialidad en <strong>Industria 4.0</strong> en el Politecnico di Milano. Actualmente curso un <strong>segundo máster en Ingeniería Industrial</strong> (especialidad en <strong>Diseño, técnicas de fabricación y producción industrial</strong>) en la <strong>UPV</strong>, dentro de un <strong>doble grado</strong> con beca y <strong>tesis compartida</strong> entre ambas universidades.",
    "hero.cta_projects": "Ver proyectos",
    "hero.cta_contact": "Contáctame",
    "about.title": "Sobre mí",
    "about.body": "Apasionado por la innovación y la Industria 4.0, trabajo entre proyectos de <strong>ingeniería</strong> y <strong>gestión empresarial</strong>. Competencias: análisis de datos, gestión de proyectos, digitalización de procesos y mejora continua.",
    "about.badge1": "Industria 4.0",
    "about.badge2": "Gestión de proyectos",
    "about.badge3": "Análisis de datos",
    "about.badge4": "Operaciones",
    "edu.title": "Formación",
    "edu.msc_polimi_title": "M.Sc. Management Engineering",
    "edu.msc_polimi_meta": "Especialidad: Industry 4.0 — Politecnico di Milano",
    "edu.msc_upv_title": "M.Sc. Ingeniería Industrial",
    "edu.msc_upv_meta": "Especialidad en Diseño, técnicas de fabricación y producción industrial — UPV (Valencia)<br>Doble titulación con Politecnico di Milano, beca; tesis compartida",
    "edu.bsc_title": "B.Sc. Ingeniería de Gestión",
    "edu.bsc_meta": "Politecnico di Milano",
    "edu.erasmus_title": "Erasmus — Politechnika Warszawska",
    "edu.erasmus_meta": "Varsovia, 6 meses",
    "portfolio.title": "Portafolio",
    "portfolio.filter_all": "Todos",
    "portfolio.filter_eng": "Ingeniería",
    "portfolio.filter_mgmt": "Gestión/Finanzas",
    "proj.a.title": "Proyecto de Ingeniería A",
    "proj.a.desc": "Análisis y prototipado de un módulo IoT para monitoreo ambiental.",
    "proj.b.title": "Proyecto de Ingeniería B",
    "proj.b.desc": "Análisis de perfiles alares con parametrización CST: combadura, espesor y borde de ataque.",
    "proj.c.title": "Selección de Mercados HVDC",
    "proj.c.desc": "Comparativa de países y prioridades para la expansión internacional en consultoría HVDC.",
    "proj.d.title": "Informe de Sostenibilidad",
    "proj.d.desc": "Marco GRI/CSRD, cálculo GHG y hoja de ruta de KPIs ESG.",
    // --- Monopattino: ES ---
"proj.scooter.title": "Estudio de la dinámica, selección de componentes y diseño de un patinete eléctrico",
"proj.scooter.desc": "Modelo dinámico, dimensionamiento del powertrain, batería y chasis; planos y BOM.",
"proj.scooter.page_title": "Patinete eléctrico — Detalles del proyecto",
"proj.scooter.page_desc": "Estudio dinámico, selección de componentes y diseño.",
"proj.scooter.lead":
  "Modelo de cuerpo rígido (longitudinal/lateral), masas y resistencias (Cd·A≈0,30; f_v≈0,001). Dimensionado motor/ESC/batería para 25 km/h en llano y 5 km/h al 15%; diseño de chasis y BOM.",

"proj.scooter.btn_dynamics":"Descargar PDF — Dinámica",
"proj.scooter.btn_cad":"Descargar PDF — CAD y planos",
"proj.scooter.btn_back":"← Volver al portafolio",    
    
"proj.scooter.desc_title": "Descripción",
"proj.scooter.desc_long":
  "Requisitos: carga útil 1500 N; 25 km/h en llano y 5 km/h al 15%. Cálculo de pares/potencias, verificación de adherencia (~1,7 m/s²) y anti-vuelco (~49,9%). Selección de componentes y planos CAD con BOM.",

"proj.scooter.specs_title":"Ficha técnica",
"proj.scooter.specs.payload":"Carga útil","proj.scooter.specs.payload_val":"1500 N",
"proj.scooter.specs.v_flat":"Velocidad objetivo (llano)","proj.scooter.specs.v_flat_val":"25 km/h",
"proj.scooter.specs.slope":"Pendiente objetivo","proj.scooter.specs.slope_val":"15% @ 5 km/h",
"proj.scooter.specs.mass":"Masa del vehículo","proj.scooter.specs.mass_val":"≈ 15,7 kg",
"proj.scooter.specs.rwheel":"Radio de rueda","proj.scooter.specs.rwheel_val":"0,1016 m",
"proj.scooter.specs.cda":"Resistencia aerodinámica","proj.scooter.specs.cda_val":"Cd·A ≈ 0,30",
"proj.scooter.specs.rr":"Resistencia a la rodadura","proj.scooter.specs.rr_val":"f_v ≈ 0,001",
"proj.scooter.specs.eta":"Rendimiento global","proj.scooter.specs.eta_val":"η ≈ 0,9",
"proj.scooter.specs.tau":"Relación de transmisión","proj.scooter.specs.tau_val":"τ = 1",
"proj.scooter.specs.traction":"Límite de adherencia (est.)","proj.scooter.specs.traction_val":"≈ 1,7 m/s²",
"proj.scooter.specs.antitip":"Pendiente anti-vuelco","proj.scooter.specs.antitip_val":"≈ 49,9%",
    
    "proj.details": "Detalles",
    "lang.title": "Idiomas",
    "lang.body": "Me apasionan los idiomas y la comunicación intercultural. Además del italiano, hablo <strong>español</strong> e <strong>inglés</strong> a nivel avanzado (C1). Empezaré a estudiar <strong>francés</strong> en el corto plazo.",
    "lang.it": "Italiano",
    "lang.it_level": "C2 (Lengua materna)",
    "lang.es": "Español",
    "lang.es_level": "C1",
    "lang.en": "Inglés",
    "lang.en_level": "C1",
    "lang.it_aria": "Italiano C2 (Lengua materna)",
    "lang.es_aria": "Español C1",
    "lang.en_aria": "Inglés C1",
    "intl.title": "Experiencias internacionales",
    "intl.erasmus_title": "Erasmus — Politechnika Warszawska",
    "intl.erasmus_meta": "Varsovia, 6 meses",
    "intl.double_title": "Doble Titulación — PoliMi & UPV",
    "intl.double_meta": "Beca; tesis compartida entre ambas universidades",
    "contact.title": "Contacto",
    "contact.body": "Para colaboraciones o información:",
    "contact.email": "giorgio@example.com",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo",
    "contact.form.msg": "Mensaje",
    "contact.form.send": "Enviar",
    "contact.form.note": "En hosting estático gratuito el formulario no envía correos. Puedes usar Formspree o Netlify Forms.",
    "contact.form.placeholder_name": "Tu nombre",
    "contact.form.placeholder_email": "Tu correo",
    "contact.form.placeholder_msg": "Escribe aquí...",
    "contact.form.alert": "¡Gracias! Este formulario es solo demostrativo en GitHub Pages.",
    "footer.rights": "Todos los derechos reservados"
  },
  en: {
    "site.title": "Portfolio - Giorgio Capuana",
    "site.description": "Personal portfolio of Giorgio Capuana: engineering and management/finance projects.",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.languages": "Languages",
    "nav.contact": "Contact",
    "lang.select_label": "Choose language",
    "hero.hi": "Hi! I'm <span class='hl'>Giorgio Capuana</span>.",
    "hero.lead": "Management engineer with international training between <strong>Politecnico di Milano</strong> and <strong>Universidad Politécnica de Valencia</strong>. I hold a <strong>BSc in Management Engineering</strong> and an <strong>MSc in Management Engineering</strong> with a major in <strong>Industry 4.0</strong> from Politecnico di Milano. I'm pursuing a <strong>second master's in Industrial Engineering</strong> (specialization in <strong>Design, manufacturing techniques and industrial production</strong>) at <strong>UPV</strong>, as part of a <strong>double degree</strong> scholarship with a <strong>joint thesis</strong> between both universities.",
    "hero.cta_projects": "See projects",
    "hero.cta_contact": "Contact me",
    "about.title": "About",
    "about.body": "Passionate about innovation and Industry 4.0, I work across <strong>engineering</strong> and <strong>business management</strong> projects. Key skills: data analysis, project management, process digitalization, continuous improvement.",
    "about.badge1": "Industry 4.0",
    "about.badge2": "Project management",
    "about.badge3": "Data analysis",
    "about.badge4": "Operations",
    "edu.title": "Education",
    "edu.msc_polimi_title": "M.Sc. Management Engineering",
    "edu.msc_polimi_meta": "Major: Industry 4.0 — Politecnico di Milano",
    "edu.msc_upv_title": "M.Sc. Industrial Engineering",
    "edu.msc_upv_meta": "Specialization in Design, Manufacturing Techniques and Industrial Production — UPV (Valencia)<br>Double degree with Politecnico di Milano, scholarship; joint thesis",
    "edu.bsc_title": "B.Sc. Management Engineering",
    "edu.bsc_meta": "Politecnico di Milano",
    "edu.erasmus_title": "Erasmus — Politechnika Warszawska",
    "edu.erasmus_meta": "Warsaw, 6 months",
    "portfolio.title": "Portfolio",
    "portfolio.filter_all": "All",
    "portfolio.filter_eng": "Engineering",
    "portfolio.filter_mgmt": "Management/Finance",
    "proj.a.title": "Engineering Project A",
    "proj.a.desc": "Analysis and prototyping of an IoT module for environmental monitoring.",
    "proj.b.title": "Engineering Project B",
    "proj.b.desc": "Airfoil profile analysis with CST parameterization: camber, thickness, leading edge.",
    "proj.c.title": "HVDC Market Selection",
    "proj.c.desc": "Country comparison and priorities for international expansion in HVDC consulting.",
    "proj.d.title": "Sustainability Report",
    "proj.d.desc": "GRI/CSRD framework, GHG accounting, and ESG KPI roadmap.",
    // --- Monopattino: EN ---
"proj.scooter.title": "Dynamics study, component selection and design of an electric scooter",
"proj.scooter.desc": "Dynamic model, powertrain sizing, battery & frame selection; drawings and BOM.",
"proj.scooter.page_title": "Electric scooter — Project details",
"proj.scooter.page_desc": "Dynamics study, component selection and design.",
"proj.scooter.lead":
  "Rigid-body dynamics (longitudinal/lateral), masses and resistances (Cd·A≈0.30; f_v≈0.001). Motor/ESC/battery sizing for 25 km/h on flat and 5 km/h at 15%; frame design and BOM.",

"proj.scooter.btn_dynamics":"Download PDF — Dynamics",
"proj.scooter.btn_cad":"Download PDF — CAD & drawings",
"proj.scooter.btn_back":"← Back to portfolio",    

"proj.scooter.desc_title": "Description",
"proj.scooter.desc_long":
  "Requirements: payload 1500 N; 25 km/h flat and 5 km/h at 15%. Compute torques/power, traction limit (~1.7 m/s²) and anti-tip slope (~49.9%). Component selection, frame design and CAD drawings with BOM.",
    
"proj.scooter.specs_title":"Technical sheet",
"proj.scooter.specs.payload":"Payload","proj.scooter.specs.payload_val":"1500 N",
"proj.scooter.specs.v_flat":"Target speed (flat)","proj.scooter.specs.v_flat_val":"25 km/h",
"proj.scooter.specs.slope":"Target slope","proj.scooter.specs.slope_val":"15% @ 5 km/h",
"proj.scooter.specs.mass":"Vehicle mass","proj.scooter.specs.mass_val":"≈ 15.7 kg",
"proj.scooter.specs.rwheel":"Wheel radius","proj.scooter.specs.rwheel_val":"0.1016 m",
"proj.scooter.specs.cda":"Aerodynamic drag","proj.scooter.specs.cda_val":"Cd·A ≈ 0.30",
"proj.scooter.specs.rr":"Rolling resistance","proj.scooter.specs.rr_val":"f_v ≈ 0.001",
"proj.scooter.specs.eta":"Overall efficiency","proj.scooter.specs.eta_val":"η ≈ 0.9",
"proj.scooter.specs.tau":"Gear ratio","proj.scooter.specs.tau_val":"τ = 1",
"proj.scooter.specs.traction":"Traction limit (est.)","proj.scooter.specs.traction_val":"≈ 1.7 m/s²",
"proj.scooter.specs.antitip":"Anti-tip slope","proj.scooter.specs.antitip_val":"≈ 49.9%",
    
    "proj.details": "Details",
    "lang.title": "Languages",
    "lang.body": "I’m passionate about languages and intercultural communication. Besides Italian, I speak <strong>Spanish</strong> and <strong>English</strong> at an advanced (C1) level. I plan to start studying <strong>French</strong> soon.",
    "lang.it": "Italian",
    "lang.it_level": "C2 (Native)",
    "lang.es": "Spanish",
    "lang.es_level": "C1",
    "lang.en": "English",
    "lang.en_level": "C1",
    "lang.it_aria": "Italian C2 (Native)",
    "lang.es_aria": "Spanish C1",
    "lang.en_aria": "English C1",
    "intl.title": "International Experiences",
    "intl.erasmus_title": "Erasmus — Politechnika Warszawska",
    "intl.erasmus_meta": "Warsaw, 6 months",
    "intl.double_title": "Double Degree — PoliMi & UPV",
    "intl.double_meta": "Scholarship; joint thesis between both universities",
    "contact.title": "Contact",
    "contact.body": "For collaborations or info:",
    "contact.email": "giorgio@example.com",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.msg": "Message",
    "contact.form.send": "Send",
    "contact.form.note": "On free static hosting the form doesn't send emails. You can use services like Formspree or Netlify Forms.",
    "contact.form.placeholder_name": "Your name",
    "contact.form.placeholder_email": "Your email",
    "contact.form.placeholder_msg": "Write here...",
    "contact.form.alert": "Thanks! This form is demo-only on GitHub Pages.",
    "footer.rights": "All rights reserved"
  }
};

// ---------- Applica dizionario ----------
function applyI18n(lang) {
  const dict = I18N[lang] || I18N.it;

  // <title> + <meta name="description">
  if (dict["site.title"]) document.title = dict["site.title"];
  const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
  if (metaDesc && dict["site.description"]) metaDesc.setAttribute("content", dict["site.description"]);

  // testi con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value || el.tagName.toLowerCase() === "meta") return;
    el.innerHTML = value;
  });

  // placeholder del form
  const nome = document.getElementById("nome");
  if (nome && dict["contact.form.placeholder_name"]) nome.placeholder = dict["contact.form.placeholder_name"];
  const email = document.getElementById("email");
  if (email && dict["contact.form.placeholder_email"]) email.placeholder = dict["contact.form.placeholder_email"];
  const msg = document.getElementById("msg");
  if (msg && dict["contact.form.placeholder_msg"]) msg.placeholder = dict["contact.form.placeholder_msg"];

  // aria-label per le barre lingua
  const bars = document.querySelectorAll(".lang-list .lang-item .level-bar");
  if (bars[0]) bars[0].setAttribute("aria-label", dict["lang.it_aria"] || "");
  if (bars[1]) bars[1].setAttribute("aria-label", dict["lang.es_aria"] || "");
  if (bars[2]) bars[2].setAttribute("aria-label", dict["lang.en_aria"] || "");

  // alert localizzato del form (sostituisce quello inline)
  const form = document.querySelector("form.card");
  if (form && dict["contact.form.alert"]) {
    form.onsubmit = (e) => { e.preventDefault(); alert(dict["contact.form.alert"]); };
  }

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

// ---------- Init robusta ----------
function initI18n() {
  const select = document.getElementById("lang");
  const saved = localStorage.getItem("lang") || (navigator.language || "it").slice(0,2);
  const initial = ["it","es","en"].includes(saved) ? saved : "it";
  if (select) {
    select.value = initial;
    applyI18n(initial);
    select.addEventListener("change", e => applyI18n(e.target.value));
  } else {
    applyI18n(initial);
  }

  // anno footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // filtri portfolio
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("active"); btn.setAttribute("aria-selected","true");
      const filter = btn.getAttribute("data-filter");
      projects.forEach(card => {
        const tags = (card.getAttribute("data-tags") || "").split(",");
        card.style.display = (filter === "all" || tags.includes(filter)) ? "" : "none";
      });
    });
  });
}

// esegui subito se il DOM è già pronto, altrimenti aspetta DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}



