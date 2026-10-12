/* Waterlight Group — homepage behaviour */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  /* ---------------------------------------------------------- reveal on scroll */
  root.classList.add('reveal-ready');
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && !reduce) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); ro.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.18 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ------------------------------------------------------- raking light (sig.) */
  var rake = document.querySelector('.rake');
  if (rake && !reduce) {
    var target = 42, current = 42, ticking = false;
    var pointX = 0.5;
    function apply() {
      current += (target - current) * 0.12;
      rake.style.setProperty('--rake', current.toFixed(2) + '%');
      if (Math.abs(target - current) > 0.15) { requestAnimationFrame(apply); }
      else { ticking = false; }
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(apply); } }
    function onScroll() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      target = 20 + p * 60; // light travels across the wall as you descend
      request();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', function (e) {
      pointX = e.clientX / window.innerWidth;
      target = 20 + (target - 20) * 0.9 + pointX * 6;
      request();
    }, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------- mega menus */
  var menuItems = Array.prototype.slice.call(document.querySelectorAll('.nav__item.has-menu'));
  menuItems.forEach(function (item) {
    var btn = item.querySelector('.nav__link');
    function set(open) {
      item.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      var open = btn.getAttribute('aria-expanded') !== 'true';
      menuItems.forEach(function (o) { if (o !== item) { o.classList.remove('open'); var b = o.querySelector('.nav__link'); if (b) b.setAttribute('aria-expanded', 'false'); } });
      set(open);
    });
    item.addEventListener('mouseenter', function () { btn.setAttribute('aria-expanded', 'true'); });
    item.addEventListener('mouseleave', function () {
      if (!item.classList.contains('open')) { btn.setAttribute('aria-expanded', 'false'); }
    });
    item.addEventListener('focusout', function (e) {
      if (!item.contains(e.relatedTarget)) { set(false); }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav__item.has-menu')) {
      menuItems.forEach(function (o) { o.classList.remove('open'); var b = o.querySelector('.nav__link'); if (b) b.setAttribute('aria-expanded', 'false'); });
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      menuItems.forEach(function (o) { o.classList.remove('open'); var b = o.querySelector('.nav__link'); if (b) b.setAttribute('aria-expanded', 'false'); });
      closeDrawer();
    }
  });

  /* ----------------------------------------------------------------- drawer */
  var burger = document.querySelector('.burger');
  var drawer = document.getElementById('drawer');
  var drawerNav = drawer ? drawer.querySelector('.drawer__nav') : null;
  if (drawerNav && menuItems.length) {
    menuItems.forEach(function (item) {
      var d = document.createElement('details');
      var s = document.createElement('summary');
      s.textContent = item.querySelector('.nav__link').textContent.trim();
      d.appendChild(s);
      var links = item.querySelectorAll('.slab a');
      Array.prototype.forEach.call(links, function (a) {
        var c = document.createElement('a');
        c.href = a.getAttribute('href');
        c.textContent = a.textContent;
        d.appendChild(c);
      });
      drawerNav.appendChild(d);
    });
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = !drawer.classList.contains('open');
      drawer.classList.toggle('open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) closeDrawer(); });
  }

  /* ------------------------------------------------------------ work lifecycle */
  var cycle = document.getElementById('lifecycle');
  if (cycle) {
    var fill = document.createElement('span');
    fill.className = 'lifecycle__fill';
    cycle.appendChild(fill);
    var stages = Array.prototype.slice.call(cycle.querySelectorAll('.lifecycle__stage'));
    function setStage(i) {
      stages.forEach(function (s, k) { s.classList.toggle('active', k <= i); });
      fill.style.width = (((i + 1) / stages.length) * 100).toFixed(1) + '%';
    }
    if ('IntersectionObserver' in window && !reduce) {
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { setStage(stages.indexOf(e.target)); }
        });
      }, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });
      stages.forEach(function (s) { so.observe(s); });
    } else {
      setStage(stages.length - 1);
    }
  }

  /* --------------------------------------------------------------- world map */
  var markets = {
    'africa':       ['Africa', 'Home market', 'The group’s founding market and operating base. Approved activity summary pending verification.'],
    'gcc':          ['GCC', 'Target market', 'Approved activity summary pending verification. No presence is claimed beyond what is confirmed.'],
    'europe':       ['Europe', 'Target market', 'Approved activity summary pending verification. No presence is claimed beyond what is confirmed.'],
    'north-america':['North America', 'Target market', 'Approved activity summary pending verification. No presence is claimed beyond what is confirmed.'],
    'asia-pacific': ['Asia-Pacific', 'Target market', 'Approved activity summary pending verification. No presence is claimed beyond what is confirmed.'],
    'emerging':     ['Emerging & strategic markets', 'Target market', 'Approved activity summary pending verification. No presence is claimed beyond what is confirmed.']
  };
  var mName = document.getElementById('marketName');
  var mStatus = document.getElementById('marketStatus');
  var mBody = document.getElementById('marketBody');
  var nodes = Array.prototype.slice.call(document.querySelectorAll('.node'));
  nodes.forEach(function (n) {
    function select() {
      var d = markets[n.getAttribute('data-market')];
      if (!d) return;
      nodes.forEach(function (x) { x.classList.remove('active'); });
      n.classList.add('active');
      mName.textContent = d[0];
      mStatus.textContent = d[1];
      mBody.textContent = d[2];
    }
    n.addEventListener('click', select);
    n.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); }
    });
  });

  /* ---------------------------------------------------------------- newsletter */
  var sub = document.querySelector('.sub');
  if (sub) {
    var btn = sub.querySelector('button');
    var input = sub.querySelector('input');
    btn.addEventListener('click', function () {
      if (input.value && input.checkValidity()) {
        sub.innerHTML = '<span>Thank you</span><p style="font-size:.82rem">You are on the list. Updates are sent only when there is verified news.</p>';
      } else {
        input.focus();
        input.setCustomValidity('Please enter a valid email address.');
        input.reportValidity();
        input.addEventListener('input', function h() { input.setCustomValidity(''); input.removeEventListener('input', h); });
      }
    });
  }

  /* ------------------------------------------------------------------- year */
  var yr = document.getElementById('yr');
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
