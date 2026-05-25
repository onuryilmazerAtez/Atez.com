/* ═══════════════════════════════════════════════════
   ATEZ — Mobile Navigation
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Product catalogue (matches desktop mega-menu) ── */
  var PRODUCTS = {
    'Gümrük ve Dış Ticaret': [
      { name: 'TariffAI',       desc: 'AI ile GTİP sınıflandırma',       href: 'tariffai.html',     icon: 'assets/icons/TariffAI.svg' },
      { name: 'Logicust',       desc: 'Merkezi ürün gümrük uyum yönetimi', href: 'logicust.html',   icon: 'assets/icons/Logicust.svg' },
      { name: 'Customs Shield', desc: 'Beyan öncesi mevzuat uyum kontrolü', href: 'customs-shield.html', icon: 'assets/icons/CustomShield.svg' },
      { name: 'Customs X-Ray', desc: 'AI ile beyan sonrası uyum kontrolü', href: 'customs-xray.html',   icon: 'assets/icons/XrayAI.svg' }
    ],
    'Gümrük ve Transit': [
      { name: 'Transcode',    desc: 'Transit beyan yönetim sistemi',       href: 'transcode.html',    icon: 'assets/icons/TransCode.svg' },
      { name: 'Declarant',   desc: 'Gümrük beyannamesi yönetimi',         href: 'declarant.html',    icon: 'assets/icons/Declarant.svg' },
      { name: 'TransitAI',   desc: 'AI ile transit belge işleme',          href: 'transitai.html',   icon: 'assets/icons/TransitAI.svg' },
      { name: 'DeclarantAI', desc: 'AI destekli beyan otomasyonu ve IDP', href: 'declarantai.html', icon: 'assets/icons/DeclarantAI.svg' }
    ],
    'Yeşil Mutabakat': [
      { name: 'Greenpulse', desc: 'CBAM ve sürdürülebilirlik raporlaması', href: 'greenpulse.html', icon: 'assets/icons/greenpulse.svg' }
    ],
    'İş Zekası ve Analitik': [
      { name: 'Customs Loupe', desc: 'Gümrük iş zekası ve analitik çözümü', href: 'customs-loupe.html', icon: 'assets/icons/CustomsLoupe.svg' }
    ]
  };

  /* ── Helpers ── */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  }
  function mk(tag, attrs, html) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function(k){ e.setAttribute(k, attrs[k]); });
    if (html) e.innerHTML = html;
    return e;
  }

  /* chevron SVG */
  var CHEV = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>';

  /* ── Build hamburger button ── */
  function buildBtn() {
    var btn = mk('button', { id: 'nav-mob-btn', 'aria-label': 'Menüyü Aç', 'aria-expanded': 'false' });
    btn.innerHTML =
      '<svg id="mob-icon-open"  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
      '<svg id="mob-icon-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="display:none"><path d="M18 6 6 18M6 6l12 12"/></svg>';
    return btn;
  }

  /* ── Build accordion section ── */
  function buildAcc(title, bodyFn) {
    var acc  = el('div', 'mob-nav-acc');
    var hd   = el('div', 'mob-nav-acc-hd');
    hd.innerHTML = '<span>' + title + '</span>' + CHEV;
    var body = el('div', 'mob-nav-acc-body');
    bodyFn(body);
    acc.appendChild(hd);
    acc.appendChild(body);
    hd.addEventListener('click', function() { acc.classList.toggle('open'); });
    return acc;
  }

  /* ── Build mobile menu overlay ── */
  function buildMenu() {
    var overlay = mk('div', { id: 'mobile-nav', role: 'navigation', 'aria-label': 'Mobil Menü' });
    var inner   = el('div', 'mob-nav-inner');

    /* ── Çözümler accordion ── */
    var solAcc = buildAcc('Çözümler', function(body) {
      var a1 = mk('a', { href: 'solutions.html', class: 'mob-nav-acc-sub' }, 'Çözümler');
      var s1 = el('span', 'mob-nav-acc-sub disabled');
      s1.innerHTML = 'Nasıl Çalışır <span style="font-size:.6rem;font-weight:600;background:#005287;color:#fff;padding:1px 7px;border-radius:4px;letter-spacing:.05em;text-transform:uppercase;display:inline-block;vertical-align:middle;">Yakında</span>';
      body.appendChild(a1);
      body.appendChild(s1);
    });
    inner.appendChild(solAcc);

    /* ── Ürünler accordion ── */
    var prodAcc = buildAcc('Ürünler', function(body) {
      Object.keys(PRODUCTS).forEach(function(cat) {
        var lbl = el('div', 'mob-nav-cat-label');
        lbl.textContent = cat;
        body.appendChild(lbl);
        PRODUCTS[cat].forEach(function(p) {
          var a    = mk('a', { href: p.href, class: 'mob-nav-prod' });
          var ico  = el('div', 'mob-nav-prod-icon');
          var img  = mk('img', { src: p.icon, alt: p.name });
          img.style.cssText = 'width:20px;height:20px';
          ico.appendChild(img);
          var nm   = el('span', 'mob-nav-prod-name');
          nm.textContent = p.name;
          a.appendChild(ico);
          a.appendChild(nm);
          body.appendChild(a);
        });
      });
      /* All products link */
      var allLink = mk('a', { href: 'solutions.html', class: 'mob-nav-acc-sub' });
      allLink.style.cssText = 'color:var(--primary);font-weight:600;margin-top:4px;';
      allLink.textContent = 'Tüm Ürünleri Gör';
      body.appendChild(allLink);
    });
    inner.appendChild(prodAcc);

    /* ── Direct links ── */
    var LINKS = [
      { label: 'Yapay Zekâ',    href: 'yapay-zeka.html' },
      { label: 'Blockchain',    href: 'blockchain.html' },
      { label: 'Yatırımcılar', href: 'yatirimcilar.html' },
      { label: 'Hakkımızda',   href: 'hakkimizda.html' },
      { label: 'İletişim',     href: 'iletisim.html' }
    ];
    var curPage = window.location.pathname.split('/').pop() || 'index.html';
    LINKS.forEach(function(lk) {
      var a = mk('a', { href: lk.href, class: 'mob-nav-link' + (curPage === lk.href ? ' active' : '') });
      a.textContent = lk.label;
      inner.appendChild(a);
    });

    /* ── CTA ── */
    var actions = el('div', 'mob-nav-actions');
    var cta = mk('a', { href: 'iletisim.html', class: 'mob-nav-cta' }, 'Demo Talep Et');
    actions.appendChild(cta);
    inner.appendChild(actions);

    overlay.appendChild(inner);
    return overlay;
  }

  /* ── Init ── */
  function init() {
    var header = document.querySelector('header');
    if (!header) return;

    var btn    = buildBtn();
    var menu   = buildMenu();
    var open   = false;

    /* Inject hamburger into header-right, or directly into header */
    var hRight = header.querySelector('.header-right');
    if (hRight) {
      hRight.appendChild(btn);
    } else {
      header.appendChild(btn);
    }

    /* Inject overlay right after header in DOM */
    header.parentNode.insertBefore(menu, header.nextSibling);

    /* Toggle */
    function toggleMenu(force) {
      open = (force !== undefined) ? force : !open;
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.getElementById('mob-icon-open').style.display  = open ? 'none'  : '';
      document.getElementById('mob-icon-close').style.display = open ? ''      : 'none';
      document.body.style.overflow = open ? 'hidden' : '';
    }

    btn.addEventListener('click', function() { toggleMenu(); });

    /* Close on navigation */
    menu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() { toggleMenu(false); });
    });

    /* Close on resize to desktop */
    window.addEventListener('resize', function() {
      if (window.innerWidth > 860 && open) toggleMenu(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
