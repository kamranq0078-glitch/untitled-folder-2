/* ================================================
   EXOTIC COLLECTION — Core JS
   Scroll Reveal · Navbar · Mobile Menu · Counters
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ──────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile menu ───────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const closeBtn = document.getElementById('nav-mobile-close');
  const mobileMenu = document.getElementById('nav-mobile');
  const overlay = document.getElementById('nav-mobile-overlay');

  if (hamburger && mobileMenu && overlay) {
    const toggleMenu = (open) => {
      mobileMenu.classList.toggle('open', open);
      overlay.classList.toggle('visible', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    overlay.addEventListener('click', () => toggleMenu(false));

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  /* ── Active nav link ───────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll reveal (IntersectionObserver) ──── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* ── Counter animation ─────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2200;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    let start = null;
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      el.textContent = prefix + Math.floor(easeOut(progress) * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target + suffix;
    };
    requestAnimationFrame(step);
  }

  /* ── Hero parallax (Disabled for mobile) ───── */
  const heroBg = document.querySelector('.hero-parallax');
  if (heroBg) {
    const maxShift = 30;
    const onParallax = () => {
      if (window.innerWidth < 769) {
        heroBg.style.transform = 'none';
        return;
      }
      const pct = Math.min(window.scrollY / window.innerHeight, 1);
      heroBg.style.transform = `translateY(${pct * maxShift}px) scale(1.08)`;
    };
    window.addEventListener('scroll', onParallax, { passive: true });
    // Initial check
    if (window.innerWidth < 769) heroBg.style.transform = 'none';
  }

  /* ── Smooth scroll for anchor links ────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
