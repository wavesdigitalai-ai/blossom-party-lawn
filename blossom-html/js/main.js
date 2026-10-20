(function () {
  'use strict';

  const pre = document.querySelector('.preloader');
  if (pre) {
    const done = () => { pre.classList.add('done'); document.body.classList.add('loaded'); };
    if (document.readyState === 'complete') { done(); } else { window.addEventListener('load', done); }
    setTimeout(done, 2800);
  }

  const url = new URL(window.location.href);
  const file = url.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mob-menu a').forEach(a => {
    const target = a.getAttribute('href');
    if (target === file || (file === '' && target === 'index.html')) a.classList.add('active');
  });

  const nav = document.getElementById('nav');
  const prog = document.getElementById('prog');
  const topBtn = document.getElementById('topBtn');

  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 40);
    if (topBtn) topBtn.classList.toggle('show', y > 700);
    if (prog) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) prog.style.width = ((y / h) * 100).toFixed(2) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.classList.toggle('open', open);
      document.body.classList.toggle('no-scroll', open);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }));
  }

  const hero = document.getElementById('hero');
  if (hero) {
    const slides = hero.querySelectorAll('.hero-slide');
    const dots = hero.querySelectorAll('.dot');
    const count = hero.querySelector('.slide-count b');
    let idx = 0, timer;
    const setIdxWords = () => {
      const words = hero.querySelectorAll('.hero-title .word span');
      words.forEach((w, i) => { w.style.transitionDelay = (0.06 * i) + 's'; });
    };
    setIdxWords();
    const go = (n) => {
      slides[idx].classList.remove('active');
      dots[idx] && dots[idx].classList.remove('active');
      if (count) count.textContent = '0' + ((n % slides.length) + 1);
      idx = (n + slides.length) % slides.length;
      const s = slides[idx];
      s.classList.add('active');
      void s.offsetWidth;
      dots[idx] && dots[idx].classList.add('active');
    };
    const next = () => go(idx + 1);
    const prev = () => go(idx - 1);
    const play = () => { timer = setInterval(next, 6000); };
    const reset = () => { clearInterval(timer); play(); };
    play();
    hero.querySelector('.hero-arrow-next')?.addEventListener('click', () => { next(); reset(); });
    hero.querySelector('.hero-arrow-prev')?.addEventListener('click', () => { prev(); reset(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); reset(); }));
    document.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { next(); reset(); } if (e.key === 'ArrowLeft') { prev(); reset(); } });
    setTimeout(() => hero.classList.add('loaded'), 250);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('revealed');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));

  const cio = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseFloat(el.dataset.count);
      const dec = el.dataset.dec ? parseInt(el.dataset.dec) : 0;
      const dur = 1900;
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = (target * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

  const bandParallax = () => {
    document.querySelectorAll('.band[data-parallax]').forEach(b => {
      const r = b.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const speed = parseFloat(b.dataset.parallax || '0.25');
      const shift = ((window.innerHeight - r.top) * speed * 0.4).toFixed(1);
      b.style.backgroundPosition = 'center calc(50% +' + shift + 'px)';
      b.style.backgroundAttachment = 'fixed';
    });
  };
  window.addEventListener('scroll', () => requestAnimationFrame(bandParallax), { passive: true });
  bandParallax();

  const lb = document.getElementById('lightbox');
  if (lb) {
    const items = Array.from(document.querySelectorAll('.gal-item[data-full]'));
    const imgEl = lb.querySelector('img');
    const capEl = lb.querySelector('.lb-cap');
    let cur = 0;
    const openLb = (i) => {
      cur = (i + items.length) % items.length;
      const it = items[cur];
      imgEl.src = it.dataset.full;
      imgEl.alt = it.dataset.cap || '';
      capEl.textContent = it.dataset.cap || '';
      lb.classList.add('open');
      document.body.classList.add('no-scroll');
    };
    const closeLb = () => { lb.classList.remove('open'); document.body.classList.remove('no-scroll'); };
    items.forEach((it, i) => it.addEventListener('click', () => openLb(i)));
    lb.querySelector('.lb-close').addEventListener('click', closeLb);
    lb.querySelector('.lb-prev').addEventListener('click', () => openLb(cur - 1));
    lb.querySelector('.lb-next').addEventListener('click', () => openLb(cur + 1));
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowRight') openLb(cur + 1);
      if (e.key === 'ArrowLeft') openLb(cur - 1);
    });
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.gal-item').forEach(it => {
        const show = f === 'all' || (it.dataset.cat || '').includes(f);
        it.classList.toggle('hide', !show);
        if (show) { it.classList.remove('revealed'); void it.offsetWidth; it.classList.add('revealed'); }
      });
    });
  });

  const tstWrap = document.getElementById('tst');
  if (tstWrap) {
    const slides = tstWrap.querySelectorAll('.tst');
    const dots = tstWrap.getAttribute('data-dots') === 'off' ? [] : Array.from(tstWrap.querySelectorAll('.tst-dot'));
    let ti = 0, tt;
    const show = (n) => {
      slides[ti].classList.remove('active');
      dots[ti] && dots[ti].classList.remove('active');
      ti = (n + slides.length) % slides.length;
      slides[ti].classList.add('active');
      dots[ti] && dots[ti].classList.add('active');
    };
    dots.forEach((d, i) => d.addEventListener('click', () => { show(i); restart(); }));
    const restart = () => { if (slides.length > 1) { clearInterval(tt); tt = setInterval(() => show(ti + 1), 7000); } };
    restart();
  }

  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const open = q.classList.contains('open');
      document.querySelectorAll('.faq-item .faq-q.open').forEach(o => {
        o.classList.remove('open');
        o.parentElement.querySelector('.faq-a').style.maxHeight = '0px';
      });
      if (!open) {
        q.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  document.querySelectorAll('[data-tilt]').forEach(card => {
    const strength = parseFloat(card.dataset.tilt || '6');
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'perspective(900px) rotateX(' + (-py * strength).toFixed(2) + 'deg) rotateY(' + (px * strength).toFixed(2) + 'deg) translateY(-8px)';
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  document.querySelectorAll('[data-magnet] strong, .btn[data-magnet]').forEach(el => {
    const btn = el.classList.contains('btn') ? el : el.closest('[data-magnet]');
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * 0.14;
      const dy = (e.clientY - r.top - r.height / 2) * 0.2;
      btn.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + (dy - 3).toFixed(1) + 'px)';
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });

  const form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = form.querySelector('.form-ok');
      const send = form.querySelector('button[type="submit"]');
      if (send) { send.disabled = true; send.innerHTML = '<span>Sending the blossoming envelope&#8230;</span>'; }
      setTimeout(() => {
        if (ok) ok.classList.add('show');
        try { if (send) { send.innerHTML = 'Request Sent — We Will Call You'; } form.reset(); } catch (err) {}
      }, 1100);
    });
  }

  const nlBtn = document.getElementById('nlBtn');
  if (nlBtn) nlBtn.addEventListener('click', () => {
    const ok = document.querySelector('.newsletter-ok');
    if (ok) ok.classList.add('show');
  });

  document.querySelectorAll('.count-visit').forEach(el => {
    el.addEventListener('click', () => el.classList.add('clicked'));
  });
})();
