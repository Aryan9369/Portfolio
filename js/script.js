/* ===========================================================
   AK PORTFOLIO — SCRIPT
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  const closeMenu = () => {
    burger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- Active link highlight on scroll ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav__link');

  const setActive = (id) => {
    navAnchors.forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
    });
  };

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => navObserver.observe(s));

    /* ---------- Scroll-reveal for content blocks ---------- */
    const revealTargets = document.querySelectorAll(
      '.photo-card, .about__text, .about__stats .stat-card, .schema, .project-card, .timeline__item, .badge-card, .resume-card, .contact-form, .contact-direct'
    );
    revealTargets.forEach((el) => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: show everything if IntersectionObserver isn't supported
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Subtle tilt on hero JSON panel (desktop only, motion-safe) ---------- */
  const panelWrap = document.getElementById('heroPanel');
  const panel = panelWrap ? panelWrap.querySelector('.panel') : null;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

  if (panel && !prefersReducedMotion && !isCoarsePointer) {
    panelWrap.addEventListener('mousemove', (e) => {
      const rect = panelWrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      panel.style.transform = `rotateX(${(-y * 6 + 2).toFixed(2)}deg) rotateY(${(x * 10 - 4).toFixed(2)}deg)`;
    });
    panelWrap.addEventListener('mouseleave', () => {
      panel.style.transform = 'rotateX(2deg) rotateY(-4deg)';
    });
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Contact form -> opens a pre-filled email ---------- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('cName').value.trim();
      const email = document.getElementById('cEmail').value.trim();
      const message = document.getElementById('cMessage').value.trim();

      if (!name || !email || !message) return;

      const subject = encodeURIComponent(`Opportunity for Aryan — from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      const mailto = `mailto:aryankatiyarjnv@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailto;

      note.textContent = 'Opening your email client…';
      setTimeout(() => { note.textContent = ''; }, 4000);
    });
  }

});
