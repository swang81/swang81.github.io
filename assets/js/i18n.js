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

    // 更新移动端面板标题
    var panelTitle = document.getElementById('toc-mobile-panel-title');
    if (panelTitle) panelTitle.textContent = lang === 'zh' ? '目录' : 'Contents';

    buildToc(lang);
  }

  function buildToc(lang) {
    var tocEl = document.getElementById('page-toc');
    if (!tocEl) return;

    var selector = lang === 'zh' ? '.lang-zh' : '.lang-en';
    var container = document.querySelector(selector);
    if (!container) return;

    var headings = container.querySelectorAll('h1, h2');
    if (headings.length === 0) {
      tocEl.style.display = 'none';
      var btn = document.getElementById('toc-mobile-btn');
      if (btn) btn.style.display = 'none';
      return;
    }

    var ul = document.createElement('ul');
    for (var i = 0; i < headings.length; i++) {
      var h = headings[i];
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      if (h.tagName === 'H2') {
        li.style.marginLeft = '1em';
      }
      li.appendChild(a);
      ul.appendChild(li);
    }

    tocEl.innerHTML = '';
    tocEl.appendChild(ul);
    tocEl.style.display = '';

    // 同步更新移动端 panel
    var panel = document.getElementById('toc-mobile-panel-list');
    if (panel) {
      panel.innerHTML = ul.cloneNode(true).outerHTML;
      // 点击链接后自动关闭面板
      panel.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', window.closeMobileToc);
      });
    }
    // 控制悬浮按钮显隐（无标题时隐藏按钮）
    var mobileBtn = document.getElementById('toc-mobile-btn');
    if (mobileBtn) {
      mobileBtn.style.display = headings.length === 0 ? 'none' : '';
    }
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
