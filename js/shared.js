/* ================================================
   EXOTIC COLLECTION — Shared Components
   Navbar HTML · Footer HTML · WhatsApp Float
   ================================================ */

/* ── WhatsApp float button (injected on all pages) ─ */
function injectWhatsApp(fallbackMessage) {
  const WA_MESSAGES = {
    '/': 'Hello Exotic Collection! I found your website and would love to know more about your jewellery.',
    '/collections.html': 'Hello! I am browsing your collection and would like to ask about a specific piece.',
    '/pashmina.html': 'Hello! I am interested in your authentic Pashmina. Can you share more details?',
    '/story.html': 'Hello! I read about your Kashmir heritage. I would love to learn more.',
    '/stores.html': 'Hello! I am planning to visit your store. Can you share any details?',
    '/contact.html': 'Hello! I would like to discuss a custom jewellery order.'
  };
  const slug = window.location.pathname.split('/').pop() || '/';
  const message = WA_MESSAGES['/' + slug] || WA_MESSAGES[slug] || WA_MESSAGES['/'];
  const encoded = encodeURIComponent(message);
  const btn = document.createElement('a');
  btn.className = 'whatsapp-float';
  btn.href = `https://wa.me/919881287132?text=${encoded}`;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');
  btn.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  document.body.appendChild(btn);
}

/* ── Navbar HTML ──────────────────────────────────── */
function injectNavbar(activePage) {
  const pages = [
    { href: 'index.html',       label: 'Home' },
    { href: 'collections.html', label: 'Collections' },
    { href: 'pashmina.html',    label: 'Pashmina' },
    { href: 'story.html',       label: 'Our Story' },
    { href: 'stores.html',      label: 'Stores' },
    { href: 'contact.html',     label: 'Contact' },
  ];
  const linksHTML = pages.map(p =>
    `<li><a href="${p.href}" ${p.href === activePage ? 'class="active"' : ''}>${p.label}</a></li>`
  ).join('');
  const mobileHTML = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  const navHtml = `
    <input type="checkbox" id="nav-toggle" style="position:absolute; opacity:0; width:0; height:0; pointer-events:none;">
    <nav class="navbar" id="navbar-main">
      <a href="index.html" class="nav-logo" aria-label="Exotic Collection Home">
        <span class="nav-logo-name">Exotic Collection</span>
        <span class="nav-logo-sub">Est. Heritage · Since 1995</span>
      </a>
      <ul class="nav-links">${linksHTML}</ul>
      <label for="nav-toggle" class="nav-hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </label>
    </nav>
    <div class="nav-mobile" id="nav-mobile">
      <label for="nav-toggle" class="nav-mobile-close" aria-label="Close menu">&times;</label>
      ${mobileHTML}
    </div>
    <label for="nav-toggle" class="nav-mobile-overlay" id="nav-mobile-overlay"></label>
  `;
  // We insert at the start of the body
  document.body.insertAdjacentHTML('afterbegin', navHtml);

}

/* ── Footer HTML ──────────────────────────────────── */
function injectFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <div class="footer-logo-name">Exotic Collection</div>
          <div class="footer-tagline">"Where Heritage Meets the World."</div>
          <p class="footer-desc">Handmade platinum, gold &amp; silver jewellery set with genuine rubies, emeralds &amp; sapphires. Authentic Pashmina shawls. Two boutiques — Artisan Boutique and Morjim, Goa.</p>
        </div>
        <div class="footer-column">
          <div class="footer-heading">Explore</div>
          <ul class="footer-links">
            <li><a href="collections.html">Jewellery Collections</a></li>
            <li><a href="pashmina.html">Pashmina Shawls</a></li>
            <li><a href="story.html">Our Story</a></li>
            <li><a href="stores.html">Artisan Boutique Store</a></li>
            <li><a href="stores.html#goa">Goa Store</a></li>
            <li><a href="https://wa.me/919881287132" target="_blank" rel="noopener">WhatsApp Us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <div class="footer-heading">Find Us</div>
          <div class="footer-address">
            <strong style="color:var(--gold);font-family:var(--font-display);font-style:italic">Artisan Boutique, Heritage</strong><br>
            Dr Ali Jan Road, Near Shah-i-Hamdan<br>Zunnamar, Artisan Boutique — 190011<br>
            J&amp;K, India<br><br>
            <strong style="color:var(--gold);font-family:var(--font-display);font-style:italic">Morjim, Goa</strong><br>
            Ashvem Beach Road, opp. Papa Jolly<br>
            Morjim, Goa 403512<br>
            Open: 8am – 11pm daily<br><br>
            <strong style="color:var(--gold)">Goa (WhatsApp):</strong> <a href="https://wa.me/919881287132" target="_blank" rel="noopener" style="color:var(--gold)">98812 87132</a><br><strong style="color:var(--gold)">Srinagar:</strong> <a href="tel:9881287132" style="color:var(--gold)">9881287132</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-bottom-text">© 2025 Exotic Collection · All rights reserved</span>
        <span class="footer-bottom-text">Made with love from <a href="https://quantumtechai.org" target="_blank" rel="noopener" style="color:var(--gold)">Quantum Tech AI</a> ♥</span>
        <span class="footer-bottom-text"><a href="#" style="color:var(--muted)">Privacy</a></span>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}
