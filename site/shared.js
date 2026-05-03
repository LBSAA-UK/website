// Shared header/footer/cookie banner injection for LBSAA UK Chapter site
// Usage: <script src="shared.js" data-page="home"></script> at end of <body>

(function() {
  const script = document.currentScript;
  const activePage = script ? script.dataset.page : '';

  const navItems = [
    { key: 'home', label: 'Home', href: 'index.html' },
    { key: 'about', label: 'About', href: 'about.html' },
    { key: 'membership', label: 'Membership', href: 'membership.html' },
    { key: 'events', label: 'Events', href: 'events.html' },
    { key: 'news', label: 'News', href: 'news.html' },
    { key: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  const navHTML = navItems.map(i =>
    `<a href="${i.href}" class="${i.key === activePage ? 'active' : ''}">${i.label}</a>`
  ).join('');

  const headerHTML = `
    <a href="#main" class="skip-link">Skip to main content</a>
    <div class="utility-bar">
      <div class="inner">
        <div class="utility-meta">
          <span><span class="dot"></span> A regional chapter of the Lagos Business School Alumni Association</span>
        </div>
        <div class="utility-links">
          <a href="news.html">News</a>
          <a href="contact.html">Contact</a>
          <a href="#" aria-label="Member portal (coming soon)">Member Portal &rarr;</a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="inner">
        <a href="index.html" class="wordmark" aria-label="LBSAA UK Chapter home">
          <img src="assets/lbsaa-icon.png" alt="" class="wordmark-icon">
          <div class="text">
            <div class="top">LBSAA</div>
            <div class="sub">United Kingdom Chapter</div>
          </div>
        </a>
        <nav class="primary-nav" aria-label="Primary">
          ${navHTML}
          <a href="membership.html#apply" class="nav-cta">Become a Member</a>
        </nav>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" id="mobileNav" aria-label="Mobile" hidden>
        ${navHTML}
        <a href="membership.html#apply" class="mobile-cta">Become a Member &rarr;</a>
      </nav>
    </header>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="wordmark wordmark-footer">
              <img src="assets/lbsaa-icon.png" alt="" class="wordmark-icon">
              <div class="text">
                <div class="top">LBSAA</div>
                <div class="sub">United Kingdom Chapter</div>
              </div>
            </div>
            <p>The United Kingdom regional chapter of the Lagos Business School Alumni Association &mdash; promoting, supporting and serving in good standing with our parent body in Lagos.</p>
            <form class="newsletter" id="newsletterForm">
              <input type="email" placeholder="Email address" aria-label="Newsletter email" required>
              <button type="submit">Subscribe</button>
            </form>
            <div class="form-note">Newsletter delivery is in setup. We'll write back to confirm before adding you.</div>
          </div>
          <div class="footer-col">
            <h5>Chapter</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="membership.html">Membership</a></li>
              <li><a href="events.html">Events</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Governance</h5>
            <ul>
              <li><a href="about.html#exco">Executive Committee</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="cookies.html">Cookies Policy</a></li>
              <li><span class="muted">Constitution &mdash; in draft</span></li>
              <li><span class="muted">Annual Report &mdash; first edition due 2026</span></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Parent Body</h5>
            <ul>
              <li><a href="https://lbs.edu.ng/alumni/" rel="external noopener">LBSAA (Lagos)</a></li>
              <li><a href="https://lbs.edu.ng/" rel="external noopener">Lagos Business School</a></li>
              <li><a href="https://pau.edu.ng/" rel="external noopener">Pan-Atlantic University</a></li>
              <li><span class="muted">Footprints Magazine</span></li>
              <li><span class="muted">Littleprints Newsletter</span></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div>&copy; 2026 LBSAA United Kingdom Chapter. Unincorporated Association. CIO transition planned.</div>
          <div>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="mailto:secretary@lbsaa.uk">secretary@lbsaa.uk</a>
          </div>
        </div>
        <div class="prelaunch-note" role="note">
          <strong>Pre-launch:</strong> this site is being prepared for the Chapter. Some content is illustrative pending Exco confirmation.
          The domain shown in email addresses is provisional.
        </div>
      </div>
    </footer>
  `;

  const cookieHTML = `
    <div class="cookie-banner" id="cookieBanner" role="dialog" aria-labelledby="cookieTitle" hidden>
      <p><strong id="cookieTitle">Cookies on this site.</strong><br>
      We use a small number of cookies to make this site work and to understand how it is used. We do not use marketing cookies. Read our <a href="cookies.html">cookies policy</a>.</p>
      <div class="actions">
        <button class="primary" data-cookie-accept>Accept</button>
        <button data-cookie-necessary>Necessary only</button>
      </div>
    </div>
  `;

  // Inject
  const headerSlot = document.getElementById('site-header-slot');
  const footerSlot = document.getElementById('site-footer-slot');
  if (headerSlot) headerSlot.outerHTML = headerHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML + cookieHTML;

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.classList.toggle('open', !open);
      if (open) {
        mobileNav.hidden = true;
      } else {
        mobileNav.hidden = false;
      }
    });
  }

  // Cookie banner with localStorage persistence
  try {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      const choice = localStorage.getItem('lbsaa-cookie-choice');
      if (!choice) {
        // small delay so it does not flash before paint
        setTimeout(() => { banner.hidden = false; }, 350);
      }
      banner.querySelector('[data-cookie-accept]').addEventListener('click', () => {
        localStorage.setItem('lbsaa-cookie-choice', 'all');
        banner.hidden = true;
      });
      banner.querySelector('[data-cookie-necessary]').addEventListener('click', () => {
        localStorage.setItem('lbsaa-cookie-choice', 'necessary');
        banner.hidden = true;
      });
    }
  } catch (e) { /* localStorage blocked */ }

  // Newsletter form: honest copy on submit
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterForm.querySelector('input').value = '';
      const btn = newsletterForm.querySelector('button');
      btn.textContent = 'Noted';
      btn.disabled = true;
      const note = newsletterForm.parentElement.querySelector('.form-note');
      if (note) note.textContent = "Thank you. We've recorded your interest and will write back once the newsletter is set up.";
    });
  }
})();
