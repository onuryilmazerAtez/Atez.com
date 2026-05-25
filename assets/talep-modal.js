/* ── Atez Talep Modal ───────────────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── CSS ──────────────────────────────────────────────────────────────── */
  var CSS = [
    /* overlay */
    '#talep-overlay{position:fixed;inset:0;z-index:9900;background:rgba(0,0,0,.52);',
    'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);',
    'display:flex;align-items:center;justify-content:center;padding:16px;',
    'opacity:0;pointer-events:none;transition:opacity .22s ease;}',

    '#talep-overlay.talep-open{opacity:1;pointer-events:all;}',

    /* panel */
    '#talep-modal{background:var(--bg,#fff);border:1px solid var(--card-border,#e5e7eb);',
    'border-radius:16px;width:100%;max-width:640px;max-height:92vh;overflow-y:auto;',
    'overscroll-behavior:contain;padding:36px 40px;',
    'box-shadow:0 24px 80px rgba(0,0,0,.2),0 4px 16px rgba(0,0,0,.08);',
    'transform:translateY(14px);transition:transform .22s ease;}',

    '[data-theme="dark"] #talep-modal{background:var(--card-bg,#1c1e26);}',
    '#talep-overlay.talep-open #talep-modal{transform:translateY(0);}',

    /* header */
    '.talep-header{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px;}',
    '.talep-header-left{display:flex;align-items:center;gap:11px;}',
    '.talep-icon{width:36px;height:36px;border-radius:10px;flex-shrink:0;',
    'background:rgba(0,82,135,.1);border:1px solid rgba(0,82,135,.18);',
    'display:flex;align-items:center;justify-content:center;color:var(--primary,#005287);}',
    '[data-theme="dark"] .talep-icon{background:rgba(0,82,135,.2);border-color:rgba(0,82,135,.35);}',
    '.talep-title{font-size:1.1rem;font-weight:600;color:var(--text,rgba(0,0,0,.88));',
    'letter-spacing:-.015em;font-family:var(--ff,"Inter",sans-serif);}',

    '.talep-close{width:30px;height:30px;border-radius:8px;flex-shrink:0;',
    'border:1px solid var(--card-border,#e5e7eb);background:none;cursor:pointer;',
    'display:flex;align-items:center;justify-content:center;',
    'color:var(--muted,rgba(0,0,0,.5));transition:background .15s,border-color .15s,color .15s;',
    'margin-top:3px;}',
    '.talep-close:hover{background:var(--bg-alt,#f5f7fa);border-color:var(--primary,#005287);color:var(--text,rgba(0,0,0,.88));}',

    /* desc */
    '.talep-desc{font-size:.875rem;color:var(--muted,rgba(0,0,0,.6));line-height:1.65;',
    'margin-bottom:26px;font-family:var(--ff,"Inter",sans-serif);}',

    /* grid rows */
    '.talep-form{display:flex;flex-direction:column;}',
    '.talep-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}',
    '.talep-row.talep-full{grid-template-columns:1fr;}',
    '.talep-group{display:flex;flex-direction:column;gap:5px;}',

    /* label */
    '.talep-label{font-size:.78rem;font-weight:600;color:var(--text,rgba(0,0,0,.88));',
    'font-family:var(--ff,"Inter",sans-serif);letter-spacing:.01em;}',
    '.talep-req{color:var(--primary,#005287);margin-left:1px;}',

    /* inputs */
    '.talep-input,.talep-select,.talep-textarea{width:100%;padding:10px 13px;',
    'border:1.5px solid var(--card-border,#e5e7eb);border-radius:8px;',
    'background:var(--bg,#fff);font-family:var(--ff,"Inter",sans-serif);',
    'font-size:.875rem;color:var(--text,rgba(0,0,0,.88));outline:none;',
    'transition:border-color .18s,box-shadow .18s;-webkit-appearance:none;appearance:none;}',

    '[data-theme="dark"] .talep-input,[data-theme="dark"] .talep-select,[data-theme="dark"] .talep-textarea{',
    'background:rgba(255,255,255,.05);border-color:var(--card-border,#2d2f3a);',
    'color:var(--text,rgba(255,255,255,.85));}',

    '.talep-input::placeholder,.talep-textarea::placeholder{color:var(--muted,rgba(0,0,0,.4));opacity:.65;}',
    '[data-theme="dark"] .talep-input::placeholder,[data-theme="dark"] .talep-textarea::placeholder{',
    'color:rgba(255,255,255,.3);opacity:1;}',

    '.talep-input:focus,.talep-select:focus,.talep-textarea:focus{',
    'border-color:var(--primary,#005287);box-shadow:0 0 0 3px rgba(0,82,135,.1);}',

    /* select arrow */
    '.talep-select-wrap{position:relative;}',
    '.talep-select-wrap::after{content:"";position:absolute;right:13px;top:50%;transform:translateY(-50%);',
    'width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;',
    'border-top:5px solid var(--muted,rgba(0,0,0,.4));pointer-events:none;}',
    '.talep-select{padding-right:34px;cursor:pointer;}',

    /* textarea */
    '.talep-textarea{min-height:96px;resize:vertical;}',

    /* checkboxes */
    '.talep-checks{display:flex;flex-direction:column;gap:10px;margin:14px 0 20px;}',
    '.talep-check{display:flex;align-items:flex-start;gap:10px;}',
    '.talep-check input[type="checkbox"]{width:16px;height:16px;margin-top:2px;flex-shrink:0;',
    'accent-color:var(--primary,#005287);cursor:pointer;}',
    '.talep-check-label{font-size:.8rem;color:var(--muted,rgba(0,0,0,.65));line-height:1.55;',
    'font-family:var(--ff,"Inter",sans-serif);cursor:pointer;}',
    '.talep-check-label a{color:var(--primary,#005287);text-decoration:underline;}',
    '.talep-check-note{font-size:.73rem;color:var(--muted,rgba(0,0,0,.5));line-height:1.4;',
    'margin-top:5px;margin-left:26px;font-family:var(--ff,"Inter",sans-serif);}',

    /* submit */
    '.talep-submit{width:100%;padding:13px 24px;background:var(--primary,#005287);',
    'color:#fff;border:none;border-radius:8px;',
    'font-family:var(--ff,"Inter",sans-serif);font-size:.95rem;font-weight:600;',
    'cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;',
    'transition:opacity .18s,transform .15s;}',
    '.talep-submit:hover{opacity:.88;transform:translateY(-1px);}',
    '.talep-submit:active{transform:translateY(0);}',
    '.talep-submit:disabled{opacity:.6;cursor:not-allowed;transform:none;}',

    /* success */
    '.talep-success{display:none;text-align:center;padding:24px 20px;',
    'background:rgba(0,82,135,.07);border:1px solid rgba(0,82,135,.2);',
    'border-radius:10px;color:var(--primary,#005287);',
    'font-family:var(--ff,"Inter",sans-serif);font-size:.95rem;font-weight:500;',
    'margin-top:16px;}',

    /* mobile */
    '@media(max-width:560px){#talep-modal{padding:24px 18px;}.talep-row{grid-template-columns:1fr;}}'
  ].join('');

  /* ── HTML ─────────────────────────────────────────────────────────────── */
  var HTML = [
    '<div id="talep-overlay" role="dialog" aria-modal="true" aria-labelledby="talep-heading">',
    '<div id="talep-modal">',

    /* header */
    '<div class="talep-header">',
      '<div class="talep-header-left">',
        '<div class="talep-icon">',
          '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
            '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
          '</svg>',
        '</div>',
        '<span class="talep-title" id="talep-heading">Talep Formu</span>',
      '</div>',
      '<button class="talep-close" id="talep-close-btn" aria-label="Kapat">',
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">',
          '<path d="M18 6 6 18M6 6l12 12"/>',
        '</svg>',
      '</button>',
    '</div>',

    /* desc */
    '<p class="talep-desc">',
      'Şirket ihtiyaçlarınıza bağlı olarak bir veya birden fazla fonksiyonu ve ürünü bir arada kullanarak ',
      'uçtan uca bir çözüm elde edebilirsiniz.',
    '</p>',

    /* form */
    '<form class="talep-form" id="talep-form-el" novalidate>',

      /* talep türü */
      '<div class="talep-row talep-full">',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-turu">Talep Türü<span class="talep-req">*</span></label>',
          '<div class="talep-select-wrap">',
            '<select class="talep-select" id="tf-turu" name="talep_turu" required>',
              '<option value="" disabled selected>Talep Türü</option>',
              '<option value="demo">Demo Talebi</option>',
              '<option value="bilgi">Genel Bilgi</option>',
              '<option value="fiyat">Fiyat Teklifi</option>',
              '<option value="teknik">Teknik Destek</option>',
              '<option value="ortaklik">Ortaklık / İş Birliği</option>',
              '<option value="diger">Diğer</option>',
            '</select>',
          '</div>',
        '</div>',
      '</div>',

      /* ad + soyad */
      '<div class="talep-row">',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-ad">Ad<span class="talep-req">*</span></label>',
          '<input class="talep-input" type="text" id="tf-ad" name="ad" placeholder="Ad" required autocomplete="given-name">',
        '</div>',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-soyad">Soyad<span class="talep-req">*</span></label>',
          '<input class="talep-input" type="text" id="tf-soyad" name="soyad" placeholder="Soyad" required autocomplete="family-name">',
        '</div>',
      '</div>',

      /* e-posta */
      '<div class="talep-row talep-full">',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-eposta">İş ePosta Adresi<span class="talep-req">*</span></label>',
          '<input class="talep-input" type="email" id="tf-eposta" name="eposta" placeholder="İş e-Posta adresiniz" required autocomplete="email">',
        '</div>',
      '</div>',

      /* şirket + pozisyon */
      '<div class="talep-row">',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-sirket">Şirket<span class="talep-req">*</span></label>',
          '<input class="talep-input" type="text" id="tf-sirket" name="sirket" placeholder="Şirketinizin adı" required autocomplete="organization">',
        '</div>',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-pozisyon">Pozisyon<span class="talep-req">*</span></label>',
          '<input class="talep-input" type="text" id="tf-pozisyon" name="pozisyon" placeholder="Şirketinizdeki pozisyon veya unvanınız" required>',
        '</div>',
      '</div>',

      /* ülke + telefon */
      '<div class="talep-row">',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-ulke">Ülke<span class="talep-req">*</span></label>',
          '<input class="talep-input" type="text" id="tf-ulke" name="ulke" placeholder="Ülke" required autocomplete="country-name">',
        '</div>',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-telefon">Telefon Numarası<span class="talep-req">*</span></label>',
          '<input class="talep-input" type="tel" id="tf-telefon" name="telefon" placeholder="Telefon numaranız. Örn. +90 5XX XXXXXXX" autocomplete="tel">',
        '</div>',
      '</div>',

      /* mesaj */
      '<div class="talep-row talep-full">',
        '<div class="talep-group">',
          '<label class="talep-label" for="tf-mesaj">Mesajınız<span class="talep-req">*</span></label>',
          '<textarea class="talep-textarea" id="tf-mesaj" name="mesaj" placeholder="Kısaca talebinizin özeti" required></textarea>',
        '</div>',
      '</div>',

      /* checkboxes */
      '<div class="talep-checks">',
        '<div>',
          '<div class="talep-check">',
            '<input type="checkbox" id="tf-kvkk" name="kvkk" required>',
            '<label class="talep-check-label" for="tf-kvkk">',
              'Şirketinizin <a href="hukuki-politikalar.html#gizlilik-politikasi">Gizlilik Politikası</a>\'nı okudum ve kabul ediyorum.',
              '<span class="talep-req"> *</span>',
            '</label>',
          '</div>',
        '</div>',
        '<div>',
          '<div class="talep-check">',
            '<input type="checkbox" id="tf-mailchimp" name="mailchimp">',
            '<label class="talep-check-label" for="tf-mailchimp">',
              'Ayrıca <a href="hukuki-politikalar.html#gizlilik-politikasi">Gizlilik Politikası</a> kapsamında ',
              'Mailchimp üzerinden ürün odaklı takip iletişimleri almayı kabul ediyorum.',
            '</label>',
          '</div>',
          '<p class="talep-check-note">',
            'Opsiyonel: işaretlerseniz, kurumsal iletişim bilgileriniz ürün güncellemeleri için Mailchimp listemize eklenir.',
          '</p>',
        '</div>',
      '</div>',

      /* submit */
      '<button type="submit" class="talep-submit" id="talep-submit-btn">',
        'Gönder',
      '</button>',

      /* success */
      '<div class="talep-success" id="talep-success-msg">',
        '<strong>✓ Talebiniz alındı!</strong> Ekibimiz en kısa sürede sizinle iletişime geçecek.',
      '</div>',

    '</form>',
    '</div>',
    '</div>'
  ].join('');

  /* ── Init ─────────────────────────────────────────────────────────────── */
  function init() {
    if (document.getElementById('talep-overlay')) return;

    /* inject CSS */
    var styleEl = document.createElement('style');
    styleEl.id = 'talep-modal-css';
    styleEl.textContent = CSS;
    document.head.appendChild(styleEl);

    /* inject HTML */
    document.body.insertAdjacentHTML('beforeend', HTML);

    var overlay    = document.getElementById('talep-overlay');
    var closeBtn   = document.getElementById('talep-close-btn');
    var formEl     = document.getElementById('talep-form-el');
    var submitBtn  = document.getElementById('talep-submit-btn');
    var successMsg = document.getElementById('talep-success-msg');
    var submitHTML = submitBtn.innerHTML;

    function openModal(e) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      /* reset */
      formEl.reset();
      submitBtn.style.display = '';
      submitBtn.innerHTML = submitHTML;
      submitBtn.disabled = false;
      successMsg.style.display = 'none';
      /* open */
      overlay.classList.add('talep-open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () {
        var first = formEl.querySelector('select, input');
        if (first) first.focus();
      }, 230);
    }

    function closeModal() {
      overlay.classList.remove('talep-open');
      document.body.style.overflow = '';
    }

    /* close triggers */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('talep-open')) closeModal();
    });

    /* form submit */
    formEl.addEventListener('submit', function (e) {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Gönderiliyor&hellip;';
      setTimeout(function () {
        submitBtn.style.display = 'none';
        successMsg.style.display = 'block';
        setTimeout(closeModal, 3500);
      }, 800);
    });

    /* ── intercept CTA triggers ── */
    var SELECTORS = [
      'a[href="#demo-cta"]',   /* links pointing at the demo CTA section  */
      '.btn-demo-submit',      /* email-capture form submit buttons        */
      '.hero-cta-btn',         /* index.html + solutions.html hero buttons */
      '.hms-cta-form-btn',     /* index.html HMS section button            */
      '.btn-inv-primary',      /* investor page main button                */
      '.btn-cta-white'         /* product page "İletişime Geçin" buttons   */
    ].join(', ');

    document.querySelectorAll(SELECTORS).forEach(function (el) {
      if (el.closest('#talep-overlay')) return;
      el.addEventListener('click', openModal);
    });

    /* intercept surrounding form submits (hero email capture forms) */
    ['form#demo-form', 'form.hero-cta', 'form.hms-cta-form'].forEach(function (sel) {
      var f = document.querySelector(sel);
      if (f) f.addEventListener('submit', openModal);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
