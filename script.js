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

// --- FML: IT ---
"common.back": "← Torna al portfolio",
"fml.page_title": "Flexible Manufacturing Line — Dettagli progetto",
"fml.page_desc": "Modello AS-IS su Simulink, analisi statistica su MATLAB, collo di bottiglia, TO-BE e availability.",
"fml.title": "Flexible Manufacturing Line (FML)",
"fml.lead": "Modello digitale AS-IS su Simulink; analisi statistica dei tempi su MATLAB (fit distribuzioni, IQR per outlier); identificazione del collo di bottiglia (Robot Cell) e redesign TO-BE con raddoppio della stazione robot e della Front Cover.",
"fml.desc_title": "Descrizione",
"fml.desc_p1": "La linea flessibile (7 stazioni) è stata modellata in Simulink con code FIFO, gate e server; i tempi di servizio sono stati acquisiti e analizzati in MATLAB per definire le distribuzioni più adatte (non sempre gaussiane), rimuovere outlier con metodo IQR e calcolare attesi/varianze per stazione.",
"fml.desc_p2": "Il collo di bottiglia dell’AS-IS è la Robot Cell (TH minimo), per cui nel TO-BE è stata raddoppiata la stazione robot: il TH della cella raddoppia e il sistema raggiunge ~0,075 pallet/s, con WIP critico ≈6,709.",
"fml.desc_p3": "Per l’availability si è duplicata anche la Front Cover (stazione con disponibilità più bassa), portando la capacità effettiva a 92,74 pz/h (availability linea ≈68,61% sul collo di bottiglia).",
"fml.results_title": "Risultati & conclusioni",
"fml.res_1": "AS-IS: Robot Cell bottleneck (min TH); caratterizzazione statistica per ogni stazione.",
"fml.res_2": "TO-BE (throughput): raddoppio Robot → bilanciamento carichi e incremento TH di linea.",
"fml.res_3": "TO-BE (availability): duplico Front Cover → capacità effettiva sale a 92,74 pz/h.",
"fml.res_4": "Capacità teorica finale ≈270,35 pz/h; capacità effettiva finale ≈164,19 pz/h.",
"fml.res_5": "Buffer sizing complessivo: 21 spazi distribuiti sulle code operative.",
"fml.conclusion": "In sintesi: duplicando le stazioni critiche (Robot e poi Front Cover) si ottiene un deciso salto di performance senza spostare il collo di bottiglia, massimizzando il ROI del redesign.",
"fml.download": "Scarica report (PDF)",

// --- QDA: Topics (IT) ---
"proj.c.title": "Analisi finanziaria: gruppo Volkswagen in un contesto competitivo",
"proj.c.desc": "Valutazione economico-finanziaria del gruppo Volkswagen rispetto ai principali concorrenti, con focus su redditività, struttura patrimoniale, cash flow ed efficienza operativa.",
"qda.topics.title": "Argomenti trattati",
"qda.topics.item.desc_stats": "Analisi descrittiva dei dati (media, mediana, moda, varianza, deviazione standard)",
"qda.topics.item.normality_tests": "Test di normalità (Shapiro–Wilk, Kolmogorov–Smirnov)",
"qda.topics.item.hypothesis_tests": "Test di ipotesi (t-test, z-test, test chi-quadrato, ANOVA)",
"qda.topics.item.correlation_regression": "Analisi di correlazione e regressione lineare",
"qda.topics.item.time_series": "Serie temporali: trend, stagionalità, smoothing",
"qda.topics.item.control_charts": "Carte di controllo:",
"qda.topics.sub.xbar_r": "Carte X-barra/R",
"qda.topics.sub.xbar_s": "Carte X-barra/S",
"qda.topics.sub.x_imr": "Carte X-IMR",
"qda.topics.sub.probabilistic": "Carte di controllo probabilistiche",
"qda.topics.sub.trend_model_based": "Carte di controllo basate su trend e modelli",
"qda.topics.sub.fitted_special_causes": "Carte con valori stimati e cause speciali",
"qda.topics.sub.between_group": "Carte di controllo tra gruppi",
"qda.topics.sub.multivariate": "Carte di controllo multivariate",
"qda.topics.sub.ewma": "Carte di controllo EWMA",
"qda.topics.item.outliers_missing": "Rilevamento outlier e gestione dei dati mancanti",
"qda.topics.item.multivariate_analysis": "Analisi statistica multivariata (ACP, clustering)",
"qda.topics.item.evaluation_interpretation": "Valutazione e interpretazione dei risultati per decisioni di qualità",

 // --- vw (IT) ---   
"vw.page_title": "Analisi finanziaria: gruppo Volkswagen in un contesto competitivo",
"vw.lead": "Questa pagina offre l’accesso diretto al report completo in PDF. In seguito potremo aggiungere anteprima, estratti e grafici.",
"vw.desc_title": "Descrizione del progetto",
"vw.desc_p": "Analisi economico-finanziaria del <strong>Gruppo Volkswagen</strong> nel contesto competitivo automotive. Il lavoro combina <em>benchmarking</em> tra pari (focus su Toyota e Mercedes-Benz, con approfondimenti su Stellantis), analisi <strong>PESTEL</strong> e <strong>SWOT</strong>, segmentazione geografica/prodotto, <em>common-size</em> verticale/orizzontale e un set di indicatori su redditività, liquidità, leva e capacità di investimento.",
"vw.objectives_title": "Obiettivi & perimetro",
"vw.obj_1": "Valutare la posizione competitiva di Volkswagen rispetto ai principali peer globali.",
"vw.obj_2": "Misurare l’evoluzione delle performance 2020–2022 su ricavi, marginalità e ritorni sul capitale.",
"vw.obj_3": "Individuare punti di forza/debolezza e implicazioni strategiche (transizione EV, scala industriale, geografie).",
"vw.method_title": "Metodologia",
"vw.method_1": "<strong>Raccolta & normalizzazione dati:</strong> allineamento perimetri, valute e principi contabili; costruzione tavole <em>common-size</em>.",
"vw.method_2": "<strong>KPI su base annuale/TTM:</strong> crescita ricavi, margini (EBIT/EBITDA), ROI/ROCE/ROE, leva finanziaria, liquidità (cassa e net liquidity).",
"vw.method_3": "<strong>Benchmarking tra pari:</strong> confronto puntuale 2022 e analisi dei trend 2020–2022.",
"vw.method_4": "<strong>Lettura strategica:</strong> PESTEL/SWOT e segmentazione (geografie/prodotti, focus elettrificazione).",
"vw.quant_title": "Quadro quantitativo 2020–2022 (Volkswagen)",
"vw.quant_revenue": "<strong>Ricavi:</strong> 222,9 → 250,2 → <strong>279,2</strong> € mld (YoY: +12,3% nel 2021; +11,6% nel 2022; CAGR ≈ 11,9%).",
"vw.quant_ebitmargin": "<strong>EBIT margin:</strong> 4,34% → 7,70% → <strong>7,92%</strong> (marginalità operativa in miglioramento).",
"vw.quant_roi": "<strong>ROI:</strong> 2,79% → 5,16% → <strong>5,38%</strong> (superiore a Toyota nel 2022, 4,50%).",
"vw.quant_cash": "<strong>Cassa & equivalenti:</strong> 33,4 → 39,1 → <strong>29,7</strong> € mld; <strong>Net liquidity</strong>: −137,4 → −136,6 → <strong>−125,8</strong> € mld (miglioramento ~€10,8 mld nel 2022).",
"vw.comparative_title": "Evidenze comparative 2022",
"vw.comp_1": "<strong>Marginalità:</strong> Mercedes presenta l’<em>EBIT margin</em> più elevato (13,64%) rispetto a Volkswagen (7,92%) e Toyota (7,33%).",
"vw.comp_2": "<strong>Redditività operativa:</strong> ROI Volkswagen 5,38% &gt; Toyota 4,50%, ma &lt; Mercedes 9,92%.",
"vw.insights_title": "Spunti strategici",
"vw.ins_1": "<strong>Transizione elettrica:</strong> consolidare gamma BEV e volumi, sfruttando sinergie di piattaforma e riduzione costi batteria.",
"vw.ins_2": "<strong>Nord America:</strong> opportunità di crescita con maggiore presenza e capacità locale in un mercato BEV in accelerazione.",
"vw.ins_3": "<strong>Resilienza post-shock:</strong> normalizzazione supply-chain/energia come volano per margini e ritorni su R&amp;D.",
"vw.note": "Nota: i prospetti completi e le tavole <em>common-size</em> sono nel PDF allegato.",
"vw.download": "Scarica PDF",

// --- IP (IT) ---
"proj.ip.title": "INNOVATION PROJECT: abilitare il futuro con rivoluzione digitale guidata dall’IoT ed energia green",
"proj.ip.desc": "Concept e roadmap per l’innovazione: IoT, trasformazione digitale e transizione green applicati a processi e prodotti.",
"ip.page_title": "INNOVATION  PROJECT: Empower the future through IoT driven  digital shift and green energy",
"ip.lead": "Preview del progetto e accesso al report completo in PDF.",
"ip.gallery_title": "Preview immagini",
"ip.download": "Scarica PDF",
"ip.desc_title":"Descrizione del progetto",
"ip.desc_intro":"Progetto di Leadership & Innovation svolto al Politecnico di Milano in collaborazione con Prysmian Group. L’output è una proposta ad alto impatto per l’industria degli ascensori che integra IoT, AI e sostenibilità.",
"ip.s1_title":"Analisi & interpretazione del brief",
"ip.s1_i1":"Inquadramento di Prysmian e del settore ascensori; obiettivo: passare da manutenzione reattiva a proattiva tramite IoT.",
"ip.s1_i2":"Benchmark competitivi e tendenze (MULTI, high-speed, green) con framework STEEP e Stakeholder analysis.",
"ip.s1_i3":"SWOT: leadership e R&D tra i punti di forza; complessità manageriale e volatilità materie prime tra le criticità.",
"ip.s1_i4":"Selezione idee: (1) Cold plates + AI, (2) KERS, (3) App/Avatar AI; scelta finale: Cold plates + AI.",
"ip.s2_title":"Soluzione “The Cool Elevator”",
"ip.s2_i1":"UCP — Ultralight Cold Plates (tecnologia CERN) per stabilizzare la temperatura del motore e ridurre usura/manutenzione.",
"ip.s2_i2":"AI predittiva: pre-posizionamento dell’ascensore in base a pattern orari/giornalieri per ridurre i tempi d’attesa.",
"ip.s2_i3":"“Prysmian Chart”: software per tecnici con dati IoT e analytics a supporto della manutenzione proattiva.",
"ip.s2_i4":"Value proposition B2B2C: benefici per produttori, proprietari, tecnici e utenti finali; tripla sostenibilità (ambientale, economica, sociale).",
"ip.s3_title":"Economics & business model",
"ip.s3_i1":"Target: ascensori “high-use” (circa 5% del mercato); stima 32.000 unità nella nicchia.",
"ip.s3_i2":"Pricing indicativo per retrofit/nuovo: ~€450 per unità; saving atteso su manutenzione e disponibilità macchina.",
"ip.s3_i3":"NPV positivo sia con produzione interna (PV ≈ €3,51M) sia in outsourcing (PV ≈ €4,78M); raccomandazione: partire in outsourcing.",
"ip.s3_i4":"Business Model Canvas: partnership con produttori ascensori e fornitori; ricavi da vendita/partnership e servizi dati.",
"ip.team_title":"Team, leadership & lavoro internazionale",
"ip.t_i1":"Team eterogeneo (studenti PoliMi ed Erasmus/NTNU) con background differenti: ingegneria gestionale, matematica, industriale.",
"ip.t_i2":"Composizione personalità (16Personalities): Analysts, Diplomats e Sentinels; uso di Managerial Grid e Full-Range Model per la leadership.",
"ip.t_i3":"Evoluzione verso leadership situazionale: dal confronto iniziale all’allineamento su ruoli e obiettivi, con collaborazione e feedback continui.",
"ip.t_i4":"Ambiente internazionale: confronto culturale e metodi di lavoro diversi hanno favorito creatività, problem solving e apprendimento reciproco.",
"ip.t_i5":"Supervisione e feedback da rappresentanti Prysmian (brief a cura di Ing. Nicola Imbimbo) e faculty PoliMi (Prof. Emilio Bellini, Tutor Alessandro Biffi)."
    
"site.title": "Portfolio - Giorgio Capuana",
    "proj.qda.title": "Analisi Statistica dei Dati con Python",
    "proj.qda.desc": "Questo progetto spiega tecniche di analisi statistica applicata alla qualità, usando Python per gestire e modellare i dati.",
    "proj.qda.download": "Scarica PDF",
    "common.back": "← Torna al portfolio",
  
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

// --- FML: ES ---
"common.back": "← Volver al portafolio",
"fml.page_title": "Flexible Manufacturing Line — Detalles del proyecto",
"fml.page_desc": "Modelo AS-IS en Simulink, análisis estadístico en MATLAB, cuello de botella, TO-BE y disponibilidad.",
"fml.title": "Flexible Manufacturing Line (FML)",
"fml.lead": "Modelo digital AS-IS en Simulink; análisis estadístico de tiempos en MATLAB (ajuste de distribuciones, IQR para outliers); identificación del cuello de botella (Robot Cell) y rediseño TO-BE duplicando la estación robot y la Front Cover.",
"fml.desc_title": "Descripción",
"fml.desc_p1": "La línea flexible (7 estaciones) se modeló en Simulink con colas FIFO, compuertas y servidores; los tiempos de servicio se analizaron en MATLAB para elegir las distribuciones adecuadas (no siempre gaussianas), eliminar outliers con IQR y calcular medias/varianzas por estación.",
"fml.desc_p2": "El cuello de botella del AS-IS es la Robot Cell (TH mínimo); en el TO-BE se duplica la estación robot: el TH de la celda se duplica y el sistema alcanza ~0,075 pallet/s, con WIP crítico ≈6,709.",
"fml.desc_p3": "Para la availability se duplica también la Front Cover (estación con menor disponibilidad), elevando la capacidad efectiva a 92,74 pz/h (availability de línea ≈68,61% sobre el cuello de botella).",
"fml.results_title": "Resultados y conclusiones",
"fml.res_1": "AS-IS: Robot Cell como cuello de botella (TH mínimo); caracterización estadística por estación.",
"fml.res_2": "TO-BE (throughput): duplicar Robot → balanceo de cargas y aumento del TH de línea.",
"fml.res_3": "TO-BE (availability): duplicar Front Cover → capacidad efectiva sube a 92,74 pz/h.",
"fml.res_4": "Capacidad teórica final ≈270,35 pz/h; capacidad efectiva final ≈164,19 pz/h.",
"fml.res_5": "Dimensionamiento de buffers: 21 espacios distribuidos en las colas operativas.",
"fml.conclusion": "En síntesis: duplicando las estaciones críticas (Robot y luego Front Cover) se logra un salto de rendimiento sin mover el cuello de botella, maximizando el ROI del rediseño.",
"fml.download": "Descargar informe (PDF)",

// --- QDA: Topics (ES) ---
"qda.topics.title": "Temas tratados",
"qda.topics.item.desc_stats": "Análisis descriptivo de datos (media, mediana, moda, varianza, desviación estándar)",
"qda.topics.item.normality_tests": "Pruebas de normalidad (Shapiro–Wilk, Kolmogórov–Smirnov)",
"qda.topics.item.hypothesis_tests": "Pruebas de hipótesis (t-test, z-test, ji-cuadrado, ANOVA)",
"qda.topics.item.correlation_regression": "Análisis de correlación y regresión lineal",
"qda.topics.item.time_series": "Series temporales: tendencia, estacionalidad, smoothing",
"qda.topics.item.control_charts": "Gráficas de control:",
"qda.topics.sub.xbar_r": "Gráficas X-barra/R",
"qda.topics.sub.xbar_s": "Gráficas X-barra/S",
"qda.topics.sub.x_imr": "Gráficas X-IMR",
"qda.topics.sub.probabilistic": "Gráficas de control probabilísticas",
"qda.topics.sub.trend_model_based": "Gráficas basadas en tendencia y modelos",
"qda.topics.sub.fitted_special_causes": "Gráficas con valores ajustados y causas especiales",
"qda.topics.sub.between_group": "Gráficas de control entre grupos",
"qda.topics.sub.multivariate": "Gráficas de control multivariantes",
"qda.topics.sub.ewma": "Gráficas de control EWMA",
"qda.topics.item.outliers_missing": "Detección de outliers y gestión de datos faltantes",
"qda.topics.item.multivariate_analysis": "Análisis estadístico multivariante (ACP/PCA, clustering)",
"qda.topics.item.evaluation_interpretation": "Evaluación e interpretación de resultados para decisiones de calidad",

 // --- vw (ES) ---
"proj.c.title": "Análisis financiero: Grupo Volkswagen en un contexto competitivo",
"proj.c.desc": "Evaluación económico-financiera del Grupo Volkswagen frente a los principales competidores, con foco en rentabilidad, estructura patrimonial, flujo de caja y eficiencia operativa.",
"vw.page_title": "Análisis financiero: Grupo Volkswagen en un contexto competitivo",
"vw.lead": "Esta página ofrece acceso directo al informe completo en PDF. Más adelante podremos añadir vista previa, extractos y gráficos.",
"vw.desc_title": "Descripción del proyecto",
"vw.desc_p": "Análisis económico-financiero del <strong>Grupo Volkswagen</strong> en el contexto competitivo del automóvil. El trabajo combina <em>benchmarking</em> entre pares (foco en Toyota y Mercedes-Benz, con notas sobre Stellantis), análisis <strong>PESTEL</strong> y <strong>SWOT</strong>, segmentación geográfica/producto, <em>common-size</em> vertical/horizontal y un conjunto de indicadores de rentabilidad, liquidez, apalancamiento y capacidad de inversión.",
"vw.objectives_title": "Objetivos y alcance",
"vw.obj_1": "Evaluar la posición competitiva de Volkswagen frente a los principales pares globales.",
"vw.obj_2": "Medir la evolución 2020–2022 en ingresos, márgenes y retornos sobre el capital.",
"vw.obj_3": "Identificar fortalezas/debilidades e implicaciones estratégicas (transición EV, escala industrial, geografías).",
"vw.method_title": "Metodología",
"vw.method_1": "<strong>Recopilación y normalización:</strong> alineación de perímetros, divisas y políticas contables; construcción de tablas <em>common-size</em>.",
"vw.method_2": "<strong>KPI anual/TTM:</strong> crecimiento de ingresos, márgenes (EBIT/EBITDA), ROI/ROCE/ROE, apalancamiento, liquidez (caja y net liquidity).",
"vw.method_3": "<strong>Benchmark entre pares:</strong> comparación puntual 2022 y análisis de tendencias 2020–2022.",
"vw.method_4": "<strong>Lectura estratégica:</strong> PESTEL/SWOT y segmentación (geografías/productos, foco electrificación).",
"vw.quant_title": "Marco cuantitativo 2020–2022 (Volkswagen)",
"vw.quant_revenue": "<strong>Ingresos:</strong> 222,9 → 250,2 → <strong>279,2</strong> € mil M (YoY: +12,3% en 2021; +11,6% en 2022; CAGR ≈ 11,9%).",
"vw.quant_ebitmargin": "<strong>Margen EBIT:</strong> 4,34% → 7,70% → <strong>7,92%</strong> (margen operativo en mejora).",
"vw.quant_roi": "<strong>ROI:</strong> 2,79% → 5,16% → <strong>5,38%</strong> (superior a Toyota en 2022, 4,50%).",
"vw.quant_cash": "<strong>Efectivo y equivalentes:</strong> 33,4 → 39,1 → <strong>29,7</strong> € mil M; <strong>Net liquidity</strong>: −137,4 → −136,6 → <strong>−125,8</strong> € mil M (mejora ~€10,8 mil M en 2022).",
"vw.comparative_title": "Evidencias comparativas 2022",
"vw.comp_1": "<strong>Margen:</strong> Mercedes presenta el <em>margen EBIT</em> más alto (13,64%) frente a Volkswagen (7,92%) y Toyota (7,33%).",
"vw.comp_2": "<strong>Rentabilidad operativa:</strong> ROI Volkswagen 5,38% &gt; Toyota 4,50%, pero &lt; Mercedes 9,92%.",
"vw.insights_title": "Pistas estratégicas",
"vw.ins_1": "<strong>Transición eléctrica:</strong> consolidar gama BEV y volúmenes, aprovechando sinergias de plataforma y menores costes de batería.",
"vw.ins_2": "<strong>Norteamérica:</strong> oportunidad de crecimiento con mayor presencia y capacidad local en un mercado BEV en aceleración.",
"vw.ins_3": "<strong>Resiliencia post-shock:</strong> normalización de la cadena de suministro/energía como motor de márgenes y retornos de I+D.",
"vw.note": "Nota: los estados financieros completos y las tablas <em>common-size</em> están en el PDF adjunto.",
"vw.download": "Descargar PDF",

// --- IP (ES) ---
"proj.ip.title": "INNOVATION PROJECT: impulsar el futuro mediante transformación digital basada en IoT y energía verde",
"proj.ip.desc": "Concepto y hoja de ruta de innovación: IoT, transformación digital y transición verde aplicadas a procesos y productos.",
"ip.page_title": "INNOVATION  PROJECT: Empower the future through IoT driven  digital shift and green energy",
"ip.lead": "Vista previa del proyecto y acceso al informe completo en PDF.",
"ip.gallery_title": "Vista previa de imágenes",
"ip.download": "Descargar PDF",
"ip.desc_title":"Descripción del proyecto",
"ip.desc_intro":"Proyecto de Leadership & Innovation realizado en el Politécnico de Milán con Prysmian Group. El resultado es una propuesta de alto impacto para la industria de ascensores integrando IoT, IA y sostenibilidad.",
"ip.s1_title":"Análisis e interpretación del brief",
"ip.s1_i1":"Marco de Prysmian y del sector ascensores; objetivo: pasar del mantenimiento reactivo al proactivo mediante IoT.",
"ip.s1_i2":"Benchmark competitivo y tendencias (MULTI, alta velocidad, green) con STEEP y análisis de stakeholders.",
"ip.s1_i3":"SWOT: liderazgo y I+D entre las fortalezas; complejidad directiva y volatilidad de materias primas entre las debilidades/amenazas.",
"ip.s1_i4":"Selección de ideas: (1) Cold plates + IA, (2) KERS, (3) App/Avatar IA; elección final: Cold plates + IA.",
"ip.s2_title":"Solución “The Cool Elevator”",
"ip.s2_i1":"UCP — Ultralight Cold Plates (tecnología CERN) para estabilizar la temperatura del motor y reducir desgaste/mantenimiento.",
"ip.s2_i2":"IA predictiva: pre-posicionamiento del ascensor según patrones horarios/diarios para reducir tiempos de espera.",
"ip.s2_i3":"“Prysmian Chart”: software técnico con datos IoT y analítica para mantenimiento proactivo.",
"ip.s2_i4":"Propuesta de valor B2B2C: beneficios para fabricantes, propietarios, técnicos y usuarios; triple sostenibilidad (ambiental, económica, social).",
"ip.s3_title":"Economía y modelo de negocio",
"ip.s3_i1":"Objetivo: ascensores de alto uso (≈5% del mercado); estimación 32.000 unidades en el nicho.",
"ip.s3_i2":"Precio indicativo retrofit/nuevo: ~€450 por unidad; ahorro esperado en mantenimiento y disponibilidad.",
"ip.s3_i3":"VAN positiva con producción interna (VP ≈ €3,51M) y outsourcing (VP ≈ €4,78M); recomendación: iniciar con outsourcing.",
"ip.s3_i4":"Business Model Canvas: alianzas con fabricantes y proveedores; ingresos por ventas/partnerships y servicios de datos.",
"ip.team_title":"Equipo, liderazgo y trabajo internacional",
"ip.t_i1":"Equipo heterogéneo (estudiantes PoliMi y Erasmus/NTNU) con backgrounds diversos: gestión, matemática, industrial.",
"ip.t_i2":"Personalidades (16Personalities): Analysts, Diplomats y Sentinels; uso de Managerial Grid y Full-Range Model.",
"ip.t_i3":"Evolución hacia liderazgo situacional: del debate inicial al alineamiento en roles y objetivos con colaboración continua.",
"ip.t_i4":"Entorno internacional: diversidad cultural y de métodos fomentó creatividad, resolución de problemas y aprendizaje mutuo.",
"ip.t_i5":"Supervisión y feedback de representantes de Prysmian (brief por Ing. Nicola Imbimbo) y faculty de PoliMi (Prof. Emilio Bellini, Tutor Alessandro Biffi)."
    
"site.title": "Portafolio - Giorgio Capuana",
    "proj.qda.title": "Análisis Estadístico de Datos con Python",
    "proj.qda.desc": "Este proyecto explica técnicas de análisis estadístico aplicadas a la calidad, usando Python para gestionar y modelar los datos.",
    "proj.qda.download": "Descargar PDF",
    "common.back": "← Volver al portafolio",
    
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

    // --- FML: EN --
"common.back": "← Back to portfolio",
"fml.page_title": "Flexible Manufacturing Line — Project details",
"fml.page_desc": "AS-IS model in Simulink, statistical analysis in MATLAB, bottleneck, TO-BE and availability.",
"fml.title": "Flexible Manufacturing Line (FML)",
"fml.lead": "AS-IS digital model in Simulink; statistical time analysis in MATLAB (distribution fitting, IQR for outliers); bottleneck identification (Robot Cell) and TO-BE redesign by doubling the robot station and the Front Cover.",
"fml.desc_title": "Description",
"fml.desc_p1": "The 7-station flexible line was modelled in Simulink with FIFO queues, gates and servers; service times were analysed in MATLAB to select best-fit distributions (not always Gaussian), remove outliers via IQR and compute means/variances per station.",
"fml.desc_p2": "The AS-IS bottleneck is the Robot Cell (minimum TH); in the TO-BE the robot station is doubled: cell TH doubles and the system reaches ~0.075 pallet/s with critical WIP ≈6.709.",
"fml.desc_p3": "For availability, the Front Cover (lowest availability station) is also duplicated, bringing effective capacity to 92.74 pcs/h (line availability ≈68.61% at the bottleneck).",
"fml.results_title": "Results & conclusions",
"fml.res_1": "AS-IS: Robot Cell bottleneck (min TH); statistical characterisation per station.",
"fml.res_2": "TO-BE (throughput): doubling Robot → load balancing and higher line TH.",
"fml.res_3": "TO-BE (availability): duplicate Front Cover → effective capacity rises to 92.74 pcs/h.",
"fml.res_4": "Final theoretical capacity ≈270.35 pcs/h; final effective ≈164.19 pcs/h.",
"fml.res_5": "Overall buffer sizing: 21 slots distributed over the operating queues.",
"fml.conclusion": "In short: by duplicating the critical stations (Robot and then Front Cover) you get a clear performance jump without shifting the bottleneck, maximising redesign ROI.",
"fml.download": "Download report (PDF)",

// --- QDA: Topics (EN) ---
"qda.topics.title": "Topics covered",
"qda.topics.item.desc_stats": "Descriptive statistics (mean, median, mode, variance, standard deviation)",
"qda.topics.item.normality_tests": "Normality tests (Shapiro–Wilk, Kolmogorov–Smirnov)",
"qda.topics.item.hypothesis_tests": "Hypothesis testing (t-test, z-test, chi-square test, ANOVA)",
"qda.topics.item.correlation_regression": "Correlation analysis and linear regression",
"qda.topics.item.time_series": "Time series: trend, seasonality, smoothing",
"qda.topics.item.control_charts": "Control charts:",
"qda.topics.sub.xbar_r": "X-bar/R charts",
"qda.topics.sub.xbar_s": "X-bar/S charts",
"qda.topics.sub.x_imr": "X-IMR charts",
"qda.topics.sub.probabilistic": "Probabilistic control charts",
"qda.topics.sub.trend_model_based": "Trend- and model-based control charts",
"qda.topics.sub.fitted_special_causes": "Fitted value and special-cause control charts",
"qda.topics.sub.between_group": "Between-group control charts",
"qda.topics.sub.multivariate": "Multivariate control charts",
"qda.topics.sub.ewma": "EWMA control charts",
"qda.topics.item.outliers_missing": "Outlier detection and missing-data handling",
"qda.topics.item.multivariate_analysis": "Multivariate statistical analysis (PCA, clustering)",
"qda.topics.item.evaluation_interpretation": "Evaluation and interpretation of results for quality decisions",

// --- vw (EN) ---
"proj.c.title": "Financial analysis: Volkswagen Group in a competitive context",
"proj.c.desc": "Economic–financial assessment of Volkswagen Group versus key competitors, focusing on profitability, balance-sheet structure, cash flow and operating efficiency.",
"vw.page_title": "Financial analysis: Volkswagen Group in a competitive context",
"vw.lead": "This page provides direct access to the full report in PDF. We can later add previews, excerpts and charts.",
"vw.desc_title": "Project description",
"vw.desc_p": "Economic–financial analysis of the <strong>Volkswagen Group</strong> within the competitive automotive landscape. The work combines peer <em>benchmarking</em> (focus on Toyota and Mercedes-Benz, with notes on Stellantis), <strong>PESTEL</strong> and <strong>SWOT</strong>, geographic/product segmentation, vertical/horizontal <em>common-size</em> statements, and KPIs on profitability, liquidity, leverage and investment capacity.",
"vw.objectives_title": "Objectives & scope",
"vw.obj_1": "Assess Volkswagen’s competitive position versus key global peers.",
"vw.obj_2": "Track 2020–2022 performance on revenues, margins and returns on capital.",
"vw.obj_3": "Identify strengths/weaknesses and strategic implications (EV transition, industrial scale, geographies).",
"vw.method_title": "Methodology",
"vw.method_1": "<strong>Data gathering & normalization:</strong> perimeter, currency and accounting alignment; build <em>common-size</em> statements.",
"vw.method_2": "<strong>Annual/TTM KPIs:</strong> revenue growth, margins (EBIT/EBITDA), ROI/ROCE/ROE, leverage, liquidity (cash and net liquidity).",
"vw.method_3": "<strong>Peer benchmarking:</strong> point-in-time 2022 comparison and 2020–2022 trend analysis.",
"vw.method_4": "<strong>Strategic read-out:</strong> PESTEL/SWOT and segmentation (geographies/products, EV focus).",
"vw.quant_title": "Quantitative picture 2020–2022 (Volkswagen)",
"vw.quant_revenue": "<strong>Revenue:</strong> €222.9 → €250.2 → <strong>€279.2</strong> bn (YoY: +12.3% in 2021; +11.6% in 2022; CAGR ≈ 11.9%).",
"vw.quant_ebitmargin": "<strong>EBIT margin:</strong> 4.34% → 7.70% → <strong>7.92%</strong> (operating profitability improving).",
"vw.quant_roi": "<strong>ROI:</strong> 2.79% → 5.16% → <strong>5.38%</strong> (above Toyota in 2022, 4.50%).",
"vw.quant_cash": "<strong>Cash & equivalents:</strong> €33.4 → €39.1 → <strong>€29.7</strong> bn; <strong>Net liquidity</strong>: −€137.4 → −€136.6 → <strong>−€125.8</strong> bn (≈€10.8 bn improvement in 2022).",
"vw.comparative_title": "Comparative evidence 2022",
"vw.comp_1": "<strong>Margins:</strong> Mercedes shows the highest <em>EBIT margin</em> (13.64%) vs Volkswagen (7.92%) and Toyota (7.33%).",
"vw.comp_2": "<strong>Operating returns:</strong> Volkswagen ROI 5.38% &gt; Toyota 4.50%, but &lt; Mercedes 9.92%.",
"vw.insights_title": "Strategic takeaways",
"vw.ins_1": "<strong>EV transition:</strong> consolidate BEV line-up and volumes, leveraging platform synergies and battery cost deflation.",
"vw.ins_2": "<strong>North America:</strong> growth opportunity via stronger presence and local capacity in an accelerating BEV market.",
"vw.ins_3": "<strong>Post-shock resilience:</strong> supply-chain/energy normalization as a tailwind for margins and R&D returns.",
"vw.note": "Note: full financial statements and <em>common-size</em> tables are available in the attached PDF.",
"vw.download": "Download PDF",

// --- IP (EN) ---
"proj.ip.title": "INNOVATION  PROJECT: Empower the future through IoT driven  digital shift and green energy",
"proj.ip.desc": "Innovation concept and roadmap: IoT, digital transformation and green transition applied to processes and products.",    
"ip.page_title": "INNOVATION  PROJECT: Empower the future through IoT driven  digital shift and green energy",
"ip.lead": "Project preview and direct access to the full PDF report.",
"ip.gallery_title": "Image preview",
"ip.download": "Download PDF",    
"ip.desc_title":"Project description",
"ip.desc_intro":"Leadership & Innovation project at Politecnico di Milano in collaboration with Prysmian Group. The outcome is a high-impact proposal for the elevator industry integrating IoT, AI and sustainability.",
"ip.s1_title":"Analysis & interpretation of the brief",
"ip.s1_i1":"Framing Prysmian and the elevator sector; goal: shift from reactive to proactive maintenance via IoT.",
"ip.s1_i2":"Competitive benchmarking and trends (MULTI, high-speed, green) with STEEP and Stakeholder analysis.",
"ip.s1_i3":"SWOT: market leadership and R&D as strengths; managerial complexity and raw-material volatility among issues.",
"ip.s1_i4":"Idea selection: (1) Cold plates + AI, (2) KERS, (3) App/AI avatar; final choice: Cold plates + AI.",
"ip.s2_title":"Solution “The Cool Elevator”",
"ip.s2_i1":"UCP — Ultralight Cold Plates (CERN tech) to stabilise motor temperature and cut wear/maintenance.",
"ip.s2_i2":"Predictive AI: pre-positioning based on hourly/daily patterns to reduce waiting times.",
"ip.s2_i3":"“Prysmian Chart”: technician software with IoT data and analytics enabling proactive maintenance.",
"ip.s2_i4":"B2B2C value proposition: benefits for manufacturers, owners, technicians and end-users; triple sustainability (environmental, economic, social).",
"ip.s3_title":"Economics & business model",
"ip.s3_i1":"Target: high-use elevators (~5% of market); ~32,000 units in the niche.",
"ip.s3_i2":"Indicative price retrofit/new: ~€450 per unit; expected savings on maintenance and uptime.",
"ip.s3_i3":"Positive NPV for both in-house (PV ≈ €3.51M) and outsourcing (PV ≈ €4.78M); suggestion: start with outsourcing.",
"ip.s3_i4":"Business Model Canvas: partnerships with OEMs and suppliers; revenues from sales/partnerships and data services.",
"ip.team_title":"Team, leadership & international work",
"ip.t_i1":"Heterogeneous team (PoliMi and Erasmus/NTNU) with varied backgrounds: management, mathematics, industrial.",
"ip.t_i2":"Personality mix (16Personalities): Analysts, Diplomats and Sentinels; use of Managerial Grid and Full-Range Model.",
"ip.t_i3":"Shift towards situational leadership: from initial debate to alignment on roles and goals through continuous collaboration.",
"ip.t_i4":"International setting: cultural and methodological diversity boosted creativity, problem-solving and mutual learning.",
"ip.t_i5":"Supervision and feedback from Prysmian representatives (brief by Eng. Nicola Imbimbo) and PoliMi faculty (Prof. Emilio Bellini, Tutor Alessandro Biffi)."
    
    "site.title": "Portfolio - Giorgio Capuana",
    "proj.qda.title": "Statistical Data Analysis with Python",
    "proj.qda.desc": "This project explains statistical data analysis techniques applied to quality, using Python for data management and modeling.",
    "proj.qda.download": "Download PDF",
    "common.back": "← Back to portfolio",
  
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



