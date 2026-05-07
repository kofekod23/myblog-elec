/* =========================================
   MYVOLT — Scripts principaux v2
   ========================================= */

/* --- Produits mock pour carrousels --- */
const PRODUCTS = {
  'led-tertiaire': [
    { ref: 'LED-TUB-840', name: 'Tube LED T8 18W 840 IRC≥80 – Philips', image: 'assets/img/product-led.svg', url: 'https://www.rexel.fr/frx/search/?text=tube+LED+T8+18W+840&maxProd=4' },
    { ref: 'LED-DLD-940', name: 'Downlight LED 20W IRC≥90 3000K – Osram', image: 'assets/img/product-led.svg', url: 'https://www.rexel.fr/frx/search/?text=downlight+LED+20W+IRC90&maxProd=4' },
    { ref: 'LED-PNL-840', name: 'Panneau LED 36W 4000K IP40 – Ledvance', image: 'assets/img/product-led.svg', url: 'https://www.rexel.fr/frx/search/?text=panneau+LED+36W+4000K&maxProd=4' },
    { ref: 'LED-INL-865', name: 'Industriel LED Highbay 100W 6500K IP65', image: 'assets/img/product-led.svg', url: 'https://www.rexel.fr/frx/search/?text=highbay+LED+100W+IP65&maxProd=4' },
    { ref: 'LED-PRJ-840', name: 'Projecteur LED 50W IP65 4000K – Legrand', image: 'assets/img/product-led.svg', url: 'https://www.rexel.fr/frx/search/?text=projecteur+LED+50W+IP65&maxProd=4' }
  ],
  's7-1500': [
    { ref: '6ES7515-2AM02-0AB0', name: 'CPU 1515-2 PN S7-1500 – Siemens', image: 'assets/img/product-siemens.svg', url: 'https://www.rexel.fr/frx/gammes/siemens-distribution-et-contr%C3%B4le/s7-1500' },
    { ref: '6ES7521-1BH00-0AB0', name: 'Module DI 16×24VDC HF S7-1500', image: 'assets/img/product-siemens.svg', url: 'https://www.rexel.fr/frx/search/?text=S7-1500+DI+16&maxProd=4' },
    { ref: '6ES7522-1BH01-0AB0', name: 'Module DQ 16×24VDC/0.5A S7-1500', image: 'assets/img/product-siemens.svg', url: 'https://www.rexel.fr/frx/search/?text=S7-1500+DQ+16&maxProd=4' },
    { ref: '6ES7531-7KF00-0AB0', name: 'Module AI 8×U/I/R/RTD S7-1500', image: 'assets/img/product-siemens.svg', url: 'https://www.rexel.fr/frx/search/?text=S7-1500+AI+8&maxProd=4' },
    { ref: '6ES7592-1AM00-0XB0', name: 'Frontal câblage S7-1500 40 broches', image: 'assets/img/product-siemens.svg', url: 'https://www.rexel.fr/frx/gammes/siemens-distribution-et-contr%C3%B4le/s7-1500' }
  ],
  'chauffage-industriel-tertiaire': [
    { ref: 'CAB-RAD-2000W', name: 'Radiateur à bain d\'huile 2000W – Thermor', image: 'assets/img/product-chauffage.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-industriel-et-tertiaire/c/M2_0602' },
    { ref: 'CAB-CVC-400V', name: 'Convecteur à soufflerie 1500W IP44 – Fondis', image: 'assets/img/product-chauffage.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-industriel-et-tertiaire/c/M2_0602' },
    { ref: 'CAB-CRT-24KW', name: 'Aérotherme électrique 24 kW 400V – Stiebel', image: 'assets/img/product-chauffage.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-industriel-et-tertiaire/c/M2_0602' },
    { ref: 'CAB-PAC-R32', name: 'Pompe à chaleur air/air split 5kW R32', image: 'assets/img/product-chauffage.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-industriel-et-tertiaire/c/M2_0602' }
  ],
  'kit-photovoltaique': [
    { ref: 'KIT-PV-3KWC', name: 'Kit solaire autoconsommation 3 kWc – Longi + SMA', image: 'assets/img/product-pv.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Production-d%27%C3%A9nergie---Photovolta%C3%AFque/Kit-photovolta%C3%AFque/c/M2_1407' },
    { ref: 'KIT-PV-ONT', name: 'Onduleur string 3kW + micro-onduleurs APS', image: 'assets/img/product-pv.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Production-d%27%C3%A9nergie---Photovolta%C3%AFque/Kit-photovolta%C3%AFque/c/M2_1407' },
    { ref: 'KIT-PV-BAT', name: 'Batterie de stockage 5 kWh LFP – BYD', image: 'assets/img/product-pv.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Production-d%27%C3%A9nergie---Photovolta%C3%AFque/Kit-photovolta%C3%AFque/c/M2_1407' },
    { ref: 'KIT-PV-MCB', name: 'Protection DC 1000V + parafoudre – Hager', image: 'assets/img/product-pv.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Production-d%27%C3%A9nergie---Photovolta%C3%AFque/Kit-photovolta%C3%AFque/c/M2_1407' }
  ],
  'led-non-interchangeable': [
    { ref: 'LED-NI-PNL-840', name: 'Panneau LED intégré 36W 4000K 600×600 – Ledvance', image: 'assets/img/product-led-classique.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Eclairage/c/M2_07?page=1&filter=EF002423:LED%20non%20interchangeable;categoryCode:M2_0702' },
    { ref: 'LED-NI-DLT-927', name: 'Downlight LED 15W 2700K IRC90 – Philips', image: 'assets/img/product-led-classique.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Eclairage/c/M2_07?page=1&filter=EF002423:LED%20non%20interchangeable;categoryCode:M2_0702' },
    { ref: 'LED-NI-LNR-840', name: 'Réglette LED 58W 4000K IP65 – Osram', image: 'assets/img/product-led-classique.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Eclairage/c/M2_07?page=1&filter=EF002423:LED%20non%20interchangeable;categoryCode:M2_0702' },
    { ref: 'LED-NI-SFT-830', name: 'Spot LED encastré 7W 3000K IRC90 – Legrand', image: 'assets/img/product-led-classique.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/Eclairage/c/M2_07?page=1&filter=EF002423:LED%20non%20interchangeable;categoryCode:M2_0702' }
  ],
  'videoprotection': [
    { ref: 'CAM-IP-4MP', name: 'Caméra IP dôme 4 MP IR 30m – Dahua', image: 'assets/img/product-camera.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/S%C3%A9curit%C3%A9-et-communication/Vid%C3%A9oprotection/c/M2_0504' },
    { ref: 'NVR-8CH-4K', name: 'NVR 8 canaux 4K avec disque 4 To – Hikvision', image: 'assets/img/product-camera.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/S%C3%A9curit%C3%A9-et-communication/Vid%C3%A9oprotection/c/M2_0504' },
    { ref: 'CAM-EXT-IP66', name: 'Caméra bullet 8 MP IP66 IR 50m – Axis', image: 'assets/img/product-camera.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/S%C3%A9curit%C3%A9-et-communication/Vid%C3%A9oprotection/c/M2_0504' },
    { ref: 'SWITCH-PoE-8P', name: 'Switch PoE+ 8 ports 120W – TP-Link', image: 'assets/img/product-camera.svg', url: 'https://www.rexel.fr/frx/Cat%C3%A9gorie/S%C3%A9curit%C3%A9-et-communication/Vid%C3%A9oprotection/c/M2_0504' }
  ]
};

/* --- Auteurs fictifs Rexel --- */
const AUTHORS = {
  'jean-louis-dupont': {
    name: 'Jean-Louis Dupont',
    title: 'Chef de marché Génie Climatique',
    company: 'Rexel France',
    linkedin: 'https://www.linkedin.com/in/jl-dupont-rexel',
    initials: 'JD'
  },
  'marie-lefevre': {
    name: 'Marie Lefèvre',
    title: 'Cheffe de marché Photovoltaïque',
    company: 'Rexel France',
    linkedin: 'https://www.linkedin.com/in/marie-lefevre-rexel',
    initials: 'ML'
  },
  'thomas-bernard': {
    name: 'Thomas Bernard',
    title: 'Chef de marché Éclairage Tertiaire',
    company: 'Rexel France',
    linkedin: 'https://www.linkedin.com/in/thomas-bernard-rexel',
    initials: 'TB'
  },
  'sophie-martin': {
    name: 'Sophie Martin',
    title: 'Cheffe de marché Sécurité & Communication',
    company: 'Rexel France',
    linkedin: 'https://www.linkedin.com/in/sophie-martin-rexel',
    initials: 'SM'
  },
  'antoine-petit': {
    name: 'Antoine Petit',
    title: 'Chef de marché Industrie & Automatismes',
    company: 'Rexel France',
    linkedin: 'https://www.linkedin.com/in/antoine-petit-rexel',
    initials: 'AP'
  },
  'claire-dubois': {
    name: 'Claire Dubois',
    title: 'Responsable Conformité & Réglementation',
    company: 'Rexel France',
    linkedin: 'https://www.linkedin.com/in/claire-dubois-rexel',
    initials: 'CD'
  },
  'paul-garnier': {
    name: 'Paul Garnier',
    title: 'Chef de produit Outils Digitaux',
    company: 'Rexel France',
    linkedin: 'https://www.linkedin.com/in/paul-garnier-rexel',
    initials: 'PG'
  }
};

/* --- SVG icons (inline) --- */
const ICONS = {
  bolt: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  boltWhite: `<svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  external: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  clock: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
  cal: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
};

/* --- SVG icons inline pour la nav --- */
const NAV_ICONS = {
  flame: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  sun: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  bulb: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.5c.5.5 1 1.5 1 2.5h6c0-1 .5-2 1-2.5A7 7 0 0 0 12 2z"/></svg>',
  shield: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
};

/* --- Header HTML --- */
const HEADER_HTML = `
<div id="reading-progress"></div>
<header class="header">
  <div class="header-inner">
    <a href="index.html" class="logo" aria-label="MyVolt — accueil">
      <div class="logo-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      </div>
      <div class="logo-wordmark">
        <span class="logo-name">MyVolt</span>
        <span class="logo-tagline">par Rexel</span>
      </div>
    </a>

    <nav class="nav" aria-label="Navigation principale">
      <a href="profil-electricien.html" data-nav="electriciens">Électriciens</a>
      <a href="audience-reseaux.html" data-nav="reseaux">Plombiers-Chauffagistes</a>
      <a href="audience-climaticien.html" data-nav="climaticiens">Climaticiens</a>
      <a href="audience-integrateurs.html" data-nav="integrateurs">Intégrateurs</a>
      <a href="audience-clients-finaux.html" data-nav="partenaires">Vos partenaires</a>
      <span class="nav-divider" aria-hidden="true"></span>
      <a href="rubrique-genie-climatique.html" data-nav="genie-climatique">${NAV_ICONS.flame}<span>Génie climatique</span></a>
      <a href="rubrique-photovoltaique.html" data-nav="photovoltaique">${NAV_ICONS.sun}<span>Photovoltaïque</span></a>
      <a href="rubrique-eclairage.html" data-nav="eclairage">${NAV_ICONS.bulb}<span>Éclairage</span></a>
      <a href="rubrique-securite-communication.html" data-nav="securite">${NAV_ICONS.shield}<span>Sécurité & comm.</span></a>
    </nav>

    <div class="header-search" role="search">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="search" placeholder="Rechercher un article…" aria-label="Rechercher">
    </div>

    <a href="https://www.rexel.fr/frx/" class="btn-header-cta" target="_blank" rel="noopener">
      Webshop <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </a>

    <button class="btn-mobile-menu" id="mobile-menu-btn" aria-label="Ouvrir le menu" aria-expanded="false">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
  </div>
</header>

<nav class="mobile-nav" id="mobile-nav" aria-label="Navigation mobile">
  <p class="mobile-nav-label">Métiers</p>
  <a href="profil-electricien.html">Électriciens</a>
  <a href="audience-reseaux.html">Plombiers-Chauffagistes</a>
  <a href="audience-climaticien.html">Climaticiens</a>
  <a href="audience-integrateurs.html">Intégrateurs</a>
  <a href="audience-clients-finaux.html">Vos partenaires</a>
  <p class="mobile-nav-label">Thématiques</p>
  <a href="rubrique-genie-climatique.html">${NAV_ICONS.flame}<span>Génie climatique</span></a>
  <a href="rubrique-photovoltaique.html">${NAV_ICONS.sun}<span>Photovoltaïque</span></a>
  <a href="rubrique-eclairage.html">${NAV_ICONS.bulb}<span>Éclairage</span></a>
  <a href="rubrique-securite-communication.html">${NAV_ICONS.shield}<span>Sécurité &amp; comm.</span></a>
  <hr>
  <a href="https://www.rexel.fr/frx/" target="_blank" rel="noopener">Webshop ↗</a>
</nav>
`;

/* --- Footer HTML --- */
const FOOTER_HTML = `
<div class="newsletter-section">
  <div class="newsletter-inner">
    <div class="newsletter-content">
      <h2>Restez au courant</h2>
      <p>Chaque semaine, les meilleures ressources pour les pros de l'électricité : normes, marchés, guides pratiques.</p>
    </div>
    <form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
      <input type="email" placeholder="Votre adresse email professionnelle" aria-label="Adresse email">
      <button type="submit" class="btn-newsletter">S'abonner</button>
    </form>
  </div>
</div>

<footer class="footer">
  <div class="footer-main">
    <div class="footer-col footer-brand">
      <div class="footer-logo">
        <div class="logo-icon-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <span class="logo-name">MyVolt</span>
      </div>
      <p>Le média de référence des professionnels de l'électricité, par Rexel. Guides, expertises et ressources pour le réseau.</p>
    </div>
    <div class="footer-col">
      <h4>Métiers</h4>
      <ul>
        <li><a href="profil-electricien.html">Électriciens</a></li>
        <li><a href="audience-reseaux.html">Plombiers-Chauffagistes</a></li>
        <li><a href="audience-climaticien.html">Climaticiens</a></li>
        <li><a href="audience-integrateurs.html">Intégrateurs</a></li>
        <li><a href="audience-clients-finaux.html">Vos partenaires</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Thématiques</h4>
      <ul>
        <li><a href="rubrique-genie-climatique.html">Génie Climatique</a></li>
        <li><a href="rubrique-photovoltaique.html">Photovoltaïque</a></li>
        <li><a href="rubrique-eclairage.html">Éclairage</a></li>
        <li><a href="rubrique-securite-communication.html">Sécurité & comm.</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Ressources</h4>
      <ul>
        <li><a href="#">Tous les articles</a></li>
        <li><a href="#">Guides pratiques</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Glossaire</a></li>
        <li><a href="arborescence.html">Arborescence &amp; contenu</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Rexel</h4>
      <ul>
        <li><a href="https://www.rexel.fr/frx/" target="_blank" rel="noopener">Webshop</a></li>
        <li><a href="https://entreprise.rexel.fr/" target="_blank" rel="noopener">Entreprise</a></li>
        <li><a href="https://entreprise.rexel.fr/courant-positif/" target="_blank" rel="noopener">Courant Positif</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-divider"></div>
  <div class="footer-bottom">
    <span>© 2026 Rexel — MyVolt · Tous droits réservés</span>
    <div class="footer-bottom-links">
      <a href="#">Mentions légales</a>
      <a href="#">Données personnelles</a>
      <a href="#">Gestion des cookies</a>
    </div>
  </div>
</footer>
`;

/* =========================================
   INIT
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  injectHeaderFooter();
  initMobileMenu();
  initReadingProgress();
  initTOC();
  initActiveNav();
  initProductCarousels();
  initArticleTags();
  initArticlePageTags();
});

function injectHeaderFooter() {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
}

/* =========================================
   MOBILE MENU
   ========================================= */

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  const menuIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  const closeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = open ? closeIcon : menuIcon;
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

/* =========================================
   ACTIVE NAV
   ========================================= */

function initActiveNav() {
  const activeNav = document.body.dataset.nav;
  if (!activeNav) return;
  requestAnimationFrame(() => {
    const link = document.querySelector(`.nav [data-nav="${activeNav}"]`);
    if (link) link.classList.add('active');
  });
}

/* =========================================
   READING PROGRESS BAR
   ========================================= */

function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;

  const article = document.querySelector('.article-content') || document.querySelector('article');
  if (!article) return;

  const update = () => {
    const rect = article.getBoundingClientRect();
    const scrolled = -rect.top / (rect.height - window.innerHeight);
    bar.style.width = Math.max(0, Math.min(100, scrolled * 100)) + '%';
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* =========================================
   TABLE OF CONTENTS
   ========================================= */

function initTOC() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;

  const headings = document.querySelectorAll('.article-content h2');
  if (!headings.length) return;

  headings.forEach((h, i) => {
    if (!h.id) h.id = 'section-' + i;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });

  const links = tocList.querySelectorAll('a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = tocList.querySelector(`a[href="#${entry.target.id}"]`);
      if (link) link.classList.toggle('toc-active', entry.isIntersecting);
    });
  }, { rootMargin: '-10% 0px -80% 0px' });

  headings.forEach(h => observer.observe(h));
}

/* =========================================
   PRODUCT CAROUSELS
   ========================================= */

function initProductCarousels() {
  document.querySelectorAll('.product-carousel[data-products]').forEach(section => {
    const key = section.dataset.products;
    const items = PRODUCTS[key];
    if (!items) return;

    const track = section.querySelector('.product-track');
    if (!track) return;

    items.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card-mini';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-card-mini-body">
          <span class="product-card-mini-ref">${p.ref}</span>
          <span class="product-card-mini-name">${p.name}</span>
          <a href="${p.url}" class="product-card-mini-cta" target="_blank" rel="noopener">Voir sur Rexel ↗</a>
        </div>`;
      track.appendChild(card);
    });

    const prevBtn = section.querySelector('.product-carousel-btn[data-dir="prev"]');
    const nextBtn = section.querySelector('.product-carousel-btn[data-dir="next"]');
    if (prevBtn) prevBtn.addEventListener('click', () => { track.scrollBy({ left: -200, behavior: 'smooth' }); });
    if (nextBtn) nextBtn.addEventListener('click', () => { track.scrollBy({ left: 200, behavior: 'smooth' }); });
  });
}

/* =========================================
   NEWSLETTER
   ========================================= */

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const btn = e.target.querySelector('button');
  if (!input || !input.value) return;
  btn.textContent = '✓ Inscrit !';
  btn.style.background = '#22C55E';
  input.value = '';
  input.disabled = true;
}

/* =========================================
   ARTICLE TAGS
   ========================================= */

const TAG_LABELS = {
  'maprimerenov': 'MaPrimeRénov',
  'rge': 'RGE',
  'renovation': 'Rénovation',
  'assurance': 'Assurance',
  'juridique': 'Juridique',
  'f-gas': 'F-Gas',
  'attestation-capacite': 'Attestation capacité',
  'fluides-frigorigenes': 'Fluides frigorigènes',
  'climatisation': 'Climatisation',
  'cvc': 'CVC',
  'logiciels-calcul': 'Logiciels calcul',
  'eclairage-led': 'Éclairage LED',
  'led': 'LED',
  'irc': 'IRC',
  'normes': 'Normes',
  'industrie': 'Industrie',
  'automatisme': 'Automatisme',
  'siemens': 'Siemens',
  'outils-rexel': 'Outils Rexel',
  'configurateur': 'Configurateur',
  'reglement-machines': 'Règlement Machines',
  'led-non-interchangeable': 'LED non interchangeable',
  'irve': 'IRVE',
  'operat': 'OPERAT',
  'decret-tertiaire': 'Décret tertiaire',
  'tableauterie': 'Tableauterie',
  'iec-61439': 'NF EN 61439',
  'gmao': 'GMAO',
  'fm': 'FM / Facility Management',
  'gir': 'GIR / GIN',
  'eplan': 'EPLAN',
  'tia-portal': 'TIA Portal',
  'integration-industrielle': 'Intégration industrielle',
  'qualification': 'Qualification',
  'maintenance': 'Maintenance',
  'aides-renovation': 'Aides à la rénovation',
  'tertiaire': 'Tertiaire',
  'auto-entrepreneur': 'Auto-entrepreneur'
};

const ARTICLE_META = [
  {
    href: 'article-maprimerenov-2026.html',
    title: 'MaPrimeRénov 2026 : ce qui change pour les professionnels RGE',
    tags: ['maprimerenov', 'renovation', 'rge', 'aides-renovation'],
    audience: 'Électriciens · Plombiers-Chauffagistes',
    date: '6 mai 2026', readTime: '6 min'
  },
  {
    href: 'article-assurance-electricien.html',
    title: 'Assurances de l\'électricien indépendant : RC pro, décennale et multirisque',
    tags: ['assurance', 'juridique'],
    audience: 'Électriciens',
    date: '6 mai 2026', readTime: '7 min'
  },
  {
    href: 'article-mandataire-maprimerenov.html',
    title: 'Comment devenir mandataire MaPrimeRénov : procédure, missions et rémunération',
    tags: ['maprimerenov', 'renovation', 'rge'],
    audience: 'Électriciens · Plombiers-Chauffagistes',
    date: '6 mai 2026', readTime: '8 min'
  },
  {
    href: 'article-eclairage-led-tertiaire.html',
    title: 'Éclairage LED tertiaire : comment choisir l\'IRC, la température de couleur et l\'indice IP',
    tags: ['eclairage-led', 'led', 'irc', 'normes'],
    audience: 'Électriciens · Intégrateurs',
    date: '6 mai 2026', readTime: '9 min'
  },
  {
    href: 'article-reglement-machines-ue.html',
    title: 'Règlement machines UE 2023/1230 : ce que doit savoir l\'intégrateur industriel',
    tags: ['reglement-machines', 'industrie', 'normes'],
    audience: 'Intégrateurs industriels',
    date: '6 mai 2026', readTime: '8 min'
  },
  {
    href: 'article-migration-s7-1500.html',
    title: 'Migration Siemens S7-300 vers S7-1500 : retours terrain et guide pratique',
    tags: ['automatisme', 'industrie', 'siemens'],
    audience: 'Intégrateurs industriels',
    date: '6 mai 2026', readTime: '10 min'
  },
  {
    href: 'article-configurateurs-rexel.html',
    title: 'Configurateurs Rexel : comment gagner du temps sur chaque chiffrage ?',
    tags: ['configurateur', 'outils-rexel'],
    audience: 'Électriciens · Plombiers-Chauffagistes · Intégrateurs',
    date: '6 mai 2026', readTime: '6 min'
  },
  {
    href: 'article-led-non-interchangeable.html',
    title: 'LED non interchangeable : comprendre la directive UE 2021/2015',
    tags: ['led', 'led-non-interchangeable', 'normes'],
    audience: 'Électriciens · Intégrateurs',
    date: '6 mai 2026', readTime: '8 min'
  },
  {
    href: 'article-attestation-capacite.html',
    title: 'Attestation de capacité F-Gas : guide complet pour le climaticien',
    tags: ['f-gas', 'attestation-capacite', 'fluides-frigorigenes'],
    audience: 'Climaticiens',
    date: '6 mai 2026', readTime: '10 min'
  },
  {
    href: 'article-climaticien-logiciels-calcul.html',
    title: 'Logiciels de calcul CVC : quel outil choisir pour le climaticien ?',
    tags: ['cvc', 'climatisation', 'logiciels-calcul'],
    audience: 'Climaticiens',
    date: '6 mai 2026', readTime: '8 min'
  },
  {
    href: 'article-electricien-auto-entrepreneur.html',
    title: 'Devenir électricien auto-entrepreneur : étapes et démarches 2026',
    tags: ['juridique', 'auto-entrepreneur'],
    audience: 'Électriciens',
    date: '6 mai 2026', readTime: '12 min'
  },
  {
    href: 'article-installateur-irve.html',
    title: 'Comment devenir installateur IRVE en 2026 : qualification, recyclage et réglementation',
    tags: ['irve', 'qualification', 'tertiaire'],
    audience: 'Intégrateurs — Installateur tertiaire',
    date: '6 mai 2026', readTime: '10 min'
  },
  {
    href: 'article-plateforme-operat.html',
    title: 'Plateforme OPERAT : déclarer et suivre les consommations tertiaires en 2026',
    tags: ['operat', 'decret-tertiaire', 'tertiaire'],
    audience: 'Intégrateurs — Installateur tertiaire',
    date: '6 mai 2026', readTime: '8 min'
  },
  {
    href: 'article-societe-integration.html',
    title: 'Créer une société d\'intégration industrielle : étapes, statuts et qualifications',
    tags: ['integration-industrielle', 'industrie', 'juridique'],
    audience: 'Intégrateurs — Installateur industriel',
    date: '6 mai 2026', readTime: '9 min'
  },
  {
    href: 'article-tia-portal.html',
    title: 'TIA Portal : bonnes pratiques de programmation pour intégrateurs industriels',
    tags: ['tia-portal', 'automatisme', 'siemens'],
    audience: 'Intégrateurs — Installateur industriel',
    date: '6 mai 2026', readTime: '11 min'
  },
  {
    href: 'article-metier-gir.html',
    title: 'Le métier de GIR / GIN / FM en 2026 : périmètre, organisation et enjeux',
    tags: ['gir', 'fm', 'maintenance'],
    audience: 'Intégrateurs — GIR / GIN / FM',
    date: '6 mai 2026', readTime: '8 min'
  },
  {
    href: 'article-choisir-gmao.html',
    title: 'Comment choisir sa GMAO pour la maintenance multi-sites ?',
    tags: ['gmao', 'fm', 'maintenance'],
    audience: 'Intégrateurs — GIR / GIN / FM',
    date: '6 mai 2026', readTime: '9 min'
  },
  {
    href: 'article-devenir-tableautier.html',
    title: 'Devenir tableautier : formations, qualifications et débouchés en 2026',
    tags: ['tableauterie', 'qualification', 'tertiaire'],
    audience: 'Intégrateurs — Tableautier tertiaire',
    date: '6 mai 2026', readTime: '10 min'
  },
  {
    href: 'article-logiciels-armoires.html',
    title: 'Logiciels de conception d\'armoires électriques : comparatif EPLAN, SEE Electrical, Caneco',
    tags: ['eplan', 'tableauterie', 'logiciels-calcul'],
    audience: 'Intégrateurs — Tableautier tertiaire',
    date: '6 mai 2026', readTime: '9 min'
  },
  {
    href: 'article-tableautier-industriel.html',
    title: 'Tableautier industriel : spécificités, normes IEC 61439 et contraintes de production',
    tags: ['tableauterie', 'iec-61439', 'industrie'],
    audience: 'Intégrateurs — Tableautier industriel',
    date: '6 mai 2026', readTime: '11 min'
  },
  {
    href: 'article-eplan-pro-panel.html',
    title: 'EPLAN Pro Panel 3D : guide de prise en main pour tableautiers industriels',
    tags: ['eplan', 'tableauterie', 'industrie'],
    audience: 'Intégrateurs — Tableautier industriel',
    date: '6 mai 2026', readTime: '12 min'
  }
];

function initArticlePageTags() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const meta = ARTICLE_META.find(a => a.href === page);
  if (!meta || !meta.tags.length) return;
  const heroBadges = document.querySelector('.article-hero-badges');
  if (!heroBadges) return;
  const tagsEl = document.createElement('div');
  tagsEl.className = 'article-page-tags';
  meta.tags.forEach(tag => {
    const a = document.createElement('a');
    a.href = 'tag.html?tag=' + encodeURIComponent(tag);
    a.className = 'article-tag article-tag--page';
    a.textContent = TAG_LABELS[tag] || tag;
    tagsEl.appendChild(a);
  });
  heroBadges.insertAdjacentElement('afterend', tagsEl);
}

function initArticleTags() {
  document.querySelectorAll('.article-card[data-tags]').forEach(card => {
    const tags = card.dataset.tags.split(' ').filter(Boolean);
    if (!tags.length) return;
    const body = card.querySelector('.article-body');
    if (!body) return;
    const tagsEl = document.createElement('div');
    tagsEl.className = 'article-tags';
    tags.forEach(tag => {
      const a = document.createElement('a');
      a.href = 'tag.html?tag=' + encodeURIComponent(tag);
      a.className = 'article-tag';
      a.textContent = TAG_LABELS[tag] || tag;
      tagsEl.appendChild(a);
    });
    const footer = body.querySelector('.article-card-footer');
    if (footer) {
      body.insertBefore(tagsEl, footer);
    } else {
      body.appendChild(tagsEl);
    }
  });
}
