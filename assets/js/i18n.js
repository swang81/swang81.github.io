(function () {
  'use strict';

  var STORAGE_KEY = 'preferred-lang';
  var DEFAULT_LANG = 'zh';

  function applyLanguage(lang) {
    // Show/hide content blocks
    var zhBlocks = document.querySelectorAll('.lang-zh');
    var enBlocks = document.querySelectorAll('.lang-en');

    if (lang === 'zh') {
      for (var i = 0; i < zhBlocks.length; i++) {
        zhBlocks[i].style.display = 'block';
      }
      for (var j = 0; j < enBlocks.length; j++) {
        enBlocks[j].style.display = 'none';
      }
    } else {
      for (var k = 0; k < zhBlocks.length; k++) {
        zhBlocks[k].style.display = 'none';
      }
      for (var l = 0; l < enBlocks.length; l++) {
        enBlocks[l].style.display = 'block';
      }
    }

    // Update navigation link text
    var navLinks = document.querySelectorAll('nav a[data-zh]');
    for (var m = 0; m < navLinks.length; m++) {
      navLinks[m].textContent = lang === 'zh'
        ? navLinks[m].getAttribute('data-zh')
        : navLinks[m].getAttribute('data-en');
    }

    // Update toggle button label
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中';
    }

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY);
    var lang = (saved === 'en' || saved === 'zh') ? saved : DEFAULT_LANG;

    applyLanguage(lang);

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
        var next = current === 'zh' ? 'en' : 'zh';
        localStorage.setItem(STORAGE_KEY, next);
        applyLanguage(next);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
