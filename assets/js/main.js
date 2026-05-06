/* Header et footer partages, injectes a la volee */

const HEADER_HTML = `
<header class="header">
  <div class="header-inner">
    <a href="index.html" class="logo">
      <span class="logo-mark">myvolt</span>
      <span class="logo-suffix">by Rexel</span>
    </a>
    <nav class="nav">
      <a href="audience-reseaux.html" data-nav="reseaux">Réseaux</a>
      <a href="audience-integrateurs.html" data-nav="integrateurs">Intégrateurs</a>
      <a href="audience-clients-finaux.html" data-nav="clients">Clients finaux</a>
      <a href="ressources.html" data-nav="ressources">Ressources</a>
    </nav>
    <a href="https://www.rexel.fr/frx/" class="btn-webshop" target="_blank">Webshop ↗</a>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-main">
    <div class="footer-col footer-brand">
      <span class="logo-mark">myvolt</span>
      <p>Le média des pros de l'électricité, par Rexel. Guides, expertises et ressources pour les professionnels du réseau.</p>
    </div>
    <div class="footer-col">
      <h4>Audiences</h4>
      <ul>
        <li><a href="audience-reseaux.html">Réseaux Rexel</a></li>
        <li><a href="audience-integrateurs.html">Intégrateurs</a></li>
        <li><a href="audience-clients-finaux.html">Clients finaux</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Ressources</h4>
      <ul>
        <li><a href="#">Tous les articles</a></li>
        <li><a href="#">Guides pratiques</a></li>
        <li><a href="#">Newsletter</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Rexel</h4>
      <ul>
        <li><a href="https://www.rexel.fr/frx/" target="_blank">Webshop</a></li>
        <li><a href="https://entreprise.rexel.fr/" target="_blank">Entreprise</a></li>
        <li><a href="https://entreprise.rexel.fr/courant-positif/" target="_blank">Courant Positif</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    © 2026 Rexel · myvolt.rexel.fr
    <a href="#">Mentions légales</a> ·
    <a href="#">Données personnelles</a> ·
    <a href="#">Gestion des cookies</a>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

  // Active nav state
  const activeNav = document.body.dataset.nav;
  if (activeNav) {
    setTimeout(() => {
      const link = document.querySelector(`[data-nav="${activeNav}"]`);
      if (link) link.classList.add('active');
    }, 0);
  }
});
