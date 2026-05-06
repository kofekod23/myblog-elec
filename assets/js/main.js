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
  ]
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

/* --- Header HTML --- */
const HEADER_HTML = `
<div id="reading-progress"></div>
<header class="header">
  <div class="header-inner">
    <a href="index.html" class="logo">
      <div class="logo-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      </div>
      <div class="logo-wordmark">
        <span class="logo-name">myvolt</span>
        <span class="logo-tagline">par Rexel</span>
      </div>
    </a>

    <nav class="nav">
      <a href="profil-electricien.html" data-nav="electriciens">Électriciens</a>
      <a href="audience-reseaux.html" data-nav="plombiers">Plombiers-chauffagistes</a>
      <a href="audience-integrateurs.html" data-nav="integrateurs">Intégrateurs</a>
      <a href="audience-clients-finaux.html" data-nav="partenaires">Vos partenaires</a>
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

<nav class="nav-secondary" aria-label="Rubriques thématiques">
  <div class="nav-secondary-inner">
    <span class="nav-secondary-label">Thématiques</span>
    <a href="rubrique-genie-climatique.html" data-nav-sec="genie-climatique">♨️ Génie climatique</a>
    <a href="rubrique-photovoltaique.html" data-nav-sec="photovoltaique">☀️ Photovoltaïque</a>
    <a href="rubrique-eclairage.html" data-nav-sec="eclairage">💡 Éclairage</a>
    <a href="rubrique-securite-communication.html" data-nav-sec="securite">🔒 Sécurité & comm.</a>
  </div>
</nav>

<nav class="mobile-nav" id="mobile-nav" aria-label="Navigation mobile">
  <a href="profil-electricien.html">⚡ Électriciens</a>
  <a href="audience-reseaux.html">🔧 Plombiers-chauffagistes</a>
  <a href="audience-integrateurs.html">🏗️ Intégrateurs</a>
  <a href="audience-clients-finaux.html">🤝 Vos partenaires</a>
  <hr style="border:none;border-top:1px solid rgba(255,255,255,0.15);margin:8px 16px;">
  <a href="rubrique-genie-climatique.html">♨️ Génie climatique</a>
  <a href="rubrique-photovoltaique.html">☀️ Photovoltaïque</a>
  <a href="rubrique-eclairage.html">💡 Éclairage</a>
  <a href="rubrique-securite-communication.html">🔒 Sécurité & comm.</a>
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
        <span class="logo-name">myvolt</span>
      </div>
      <p>Le média de référence des professionnels de l'électricité, par Rexel. Guides, expertises et ressources pour le réseau.</p>
    </div>
    <div class="footer-col">
      <h4>Audiences</h4>
      <ul>
        <li><a href="profil-electricien.html">⚡ Électriciens</a></li>
        <li><a href="audience-reseaux.html">🔧 Plombiers-chauffagistes</a></li>
        <li><a href="audience-integrateurs.html">🏗️ Intégrateurs</a></li>
        <li><a href="audience-clients-finaux.html">🤝 Vos partenaires</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Ressources</h4>
      <ul>
        <li><a href="#">Tous les articles</a></li>
        <li><a href="#">Guides pratiques</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Glossaire</a></li>
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
    <span>© 2026 Rexel — myvolt.rexel.fr · Tous droits réservés</span>
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
