/* Nerd MarTech — shared behaviour: pixel icon sprite + credit→THB formatter + image lightbox */
(function(){
  // --- pixel icons: inline the sprite so <use href="#i-xxx"> works everywhere (incl. file://) ---
  /* @icons:start — generated from assets/pixel-icons.svg, do not edit by hand */
  var SPRITE = '<symbol id="i-ai" viewBox="0 0 12 12"><path d="M2 1h8v1h-8zM1 2h1v1h-1zM10 2h1v1h-1zM1 3h1v1h-1zM3 3h2v1h-2zM7 3h2v1h-2zM10 3h1v1h-1zM1 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM3 5h1v1h-1zM8 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM4 6h4v1h-4zM10 6h1v1h-1zM1 7h1v1h-1zM10 7h1v1h-1zM2 8h8v1h-8zM4 9h1v1h-1zM7 9h1v1h-1zM3 10h2v1h-2zM7 10h2v1h-2z"/></symbol><symbol id="i-data" viewBox="0 0 12 12"><path d="M10 1h1v1h-1zM7 2h1v1h-1zM10 2h1v1h-1zM7 3h1v1h-1zM10 3h1v1h-1zM4 4h1v1h-1zM7 4h1v1h-1zM10 4h1v1h-1zM4 5h1v1h-1zM7 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM4 6h1v1h-1zM7 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM4 7h1v1h-1zM7 7h1v1h-1zM10 7h1v1h-1zM1 8h1v1h-1zM4 8h1v1h-1zM7 8h1v1h-1zM10 8h1v1h-1zM1 9h1v1h-1zM4 9h1v1h-1zM7 9h1v1h-1zM10 9h1v1h-1zM1 10h10v1h-10z"/></symbol><symbol id="i-prompt" viewBox="0 0 12 12"><path d="M1 1h10v1h-10zM1 2h1v1h-1zM10 2h1v1h-1zM1 3h1v1h-1zM3 3h1v1h-1zM10 3h1v1h-1zM1 4h1v1h-1zM4 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM5 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM4 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM3 7h1v1h-1zM6 7h3v1h-3zM10 7h1v1h-1zM1 8h1v1h-1zM10 8h1v1h-1zM1 9h10v1h-10z"/></symbol><symbol id="i-model" viewBox="0 0 12 12"><path d="M4 1h1v1h-1zM7 1h1v1h-1zM2 2h8v1h-8zM2 3h1v1h-1zM9 3h1v1h-1zM1 4h2v1h-2zM9 4h2v1h-2zM2 5h1v1h-1zM5 5h2v1h-2zM9 5h1v1h-1zM2 6h1v1h-1zM5 6h2v1h-2zM9 6h1v1h-1zM1 7h2v1h-2zM9 7h2v1h-2zM2 8h1v1h-1zM9 8h1v1h-1zM2 9h8v1h-8zM4 10h1v1h-1zM7 10h1v1h-1z"/></symbol><symbol id="i-credit" viewBox="0 0 12 12"><path d="M4 1h4v1h-4zM3 2h1v1h-1zM8 2h1v1h-1zM2 3h1v1h-1zM5 3h2v1h-2zM9 3h1v1h-1zM2 4h1v1h-1zM4 4h1v1h-1zM9 4h1v1h-1zM2 5h1v1h-1zM4 5h1v1h-1zM9 5h1v1h-1zM2 6h1v1h-1zM4 6h1v1h-1zM9 6h1v1h-1zM2 7h1v1h-1zM5 7h2v1h-2zM9 7h1v1h-1zM3 8h1v1h-1zM8 8h1v1h-1zM4 9h4v1h-4z"/></symbol><symbol id="i-time" viewBox="0 0 12 12"><path d="M4 1h4v1h-4zM3 2h1v1h-1zM8 2h1v1h-1zM2 3h1v1h-1zM5 3h1v1h-1zM9 3h1v1h-1zM1 4h1v1h-1zM5 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM5 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM5 6h3v1h-3zM10 6h1v1h-1zM1 7h1v1h-1zM10 7h1v1h-1zM2 8h1v1h-1zM9 8h1v1h-1zM3 9h1v1h-1zM8 9h1v1h-1zM4 10h4v1h-4z"/></symbol><symbol id="i-cost" viewBox="0 0 12 12"><path d="M5 1h2v1h-2zM2 2h8v1h-8zM1 3h1v1h-1zM4 3h2v1h-2zM10 3h1v1h-1zM1 4h1v1h-1zM4 4h2v1h-2zM2 5h6v1h-6zM4 6h2v1h-2zM10 6h1v1h-1zM1 7h1v1h-1zM4 7h2v1h-2zM10 7h1v1h-1zM2 8h8v1h-8zM5 9h2v1h-2z"/></symbol><symbol id="i-video" viewBox="0 0 12 12"><path d="M1 2h7v1h-7zM1 3h1v1h-1zM7 3h1v1h-1zM9 3h2v1h-2zM1 4h1v1h-1zM7 4h2v1h-2zM10 4h1v1h-1zM1 5h1v1h-1zM7 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM7 6h2v1h-2zM10 6h1v1h-1zM1 7h1v1h-1zM7 7h1v1h-1zM9 7h2v1h-2zM1 8h7v1h-7z"/></symbol><symbol id="i-image" viewBox="0 0 12 12"><path d="M1 1h10v1h-10zM1 2h1v1h-1zM10 2h1v1h-1zM1 3h1v1h-1zM4 3h2v1h-2zM10 3h1v1h-1zM1 4h1v1h-1zM4 4h2v1h-2zM10 4h1v1h-1zM1 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM6 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM5 7h3v1h-3zM10 7h1v1h-1zM1 8h1v1h-1zM4 8h5v1h-5zM10 8h1v1h-1zM1 9h10v1h-10z"/></symbol><symbol id="i-automation" viewBox="0 0 12 12"><path d="M5 1h2v1h-2zM4 2h4v1h-4zM1 3h1v1h-1zM4 3h1v1h-1zM7 3h1v1h-1zM10 3h1v1h-1zM1 4h4v1h-4zM7 4h4v1h-4zM1 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM10 6h1v1h-1zM1 7h4v1h-4zM7 7h4v1h-4zM1 8h1v1h-1zM4 8h1v1h-1zM7 8h1v1h-1zM10 8h1v1h-1zM4 9h4v1h-4zM5 10h2v1h-2z"/></symbol><symbol id="i-pass" viewBox="0 0 12 12"><path d="M9 2h2v1h-2zM8 3h2v1h-2zM7 4h2v1h-2zM1 5h2v1h-2zM6 5h2v1h-2zM2 6h2v1h-2zM5 6h2v1h-2zM3 7h3v1h-3zM4 8h1v1h-1z"/></symbol><symbol id="i-maybe" viewBox="0 0 12 12"><path d="M4 1h4v1h-4zM3 2h1v1h-1zM8 2h1v1h-1zM2 3h1v1h-1zM9 3h1v1h-1zM9 4h1v1h-1zM8 5h1v1h-1zM7 6h1v1h-1zM6 7h1v1h-1zM6 8h1v1h-1zM6 10h1v1h-1z"/></symbol><symbol id="i-fail" viewBox="0 0 12 12"><path d="M1 1h2v1h-2zM9 1h2v1h-2zM2 2h2v1h-2zM8 2h2v1h-2zM3 3h2v1h-2zM7 3h2v1h-2zM4 4h4v1h-4zM5 5h2v1h-2zM4 6h4v1h-4zM3 7h2v1h-2zM7 7h2v1h-2zM2 8h2v1h-2zM8 8h2v1h-2zM1 9h2v1h-2zM9 9h2v1h-2z"/></symbol><symbol id="i-cursor" viewBox="0 0 12 12"><path d="M1 1h1v1h-1zM1 2h2v1h-2zM1 3h3v1h-3zM1 4h4v1h-4zM1 5h5v1h-5zM1 6h6v1h-6zM1 7h7v1h-7zM1 8h4v1h-4zM1 9h1v1h-1zM3 9h2v1h-2zM4 10h2v1h-2z"/></symbol><symbol id="i-copy" viewBox="0 0 12 12"><path d="M4 1h7v1h-7zM4 2h1v1h-1zM10 2h1v1h-1zM1 3h7v1h-7zM10 3h1v1h-1zM1 4h1v1h-1zM7 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM7 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM7 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM7 7h4v1h-4zM1 8h1v1h-1zM7 8h1v1h-1zM1 9h7v1h-7z"/></symbol><symbol id="i-arrow" viewBox="0 0 12 12"><path d="M6 2h1v1h-1zM7 3h1v1h-1zM8 4h1v1h-1zM1 5h9v1h-9zM8 6h1v1h-1zM7 7h1v1h-1zM6 8h1v1h-1z"/></symbol><symbol id="i-idea" viewBox="0 0 12 12"><path d="M4 1h4v1h-4zM3 2h1v1h-1zM8 2h1v1h-1zM2 3h1v1h-1zM9 3h1v1h-1zM2 4h1v1h-1zM9 4h1v1h-1zM2 5h1v1h-1zM9 5h1v1h-1zM3 6h1v1h-1zM8 6h1v1h-1zM4 7h1v1h-1zM7 7h1v1h-1zM4 8h4v1h-4zM4 9h4v1h-4zM5 10h2v1h-2z"/></symbol><symbol id="i-external" viewBox="0 0 12 12"><path d="M6 1h5v1h-5zM1 2h4v1h-4zM9 2h2v1h-2zM1 3h1v1h-1zM8 3h1v1h-1zM10 3h1v1h-1zM1 4h1v1h-1zM7 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM6 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM5 6h1v1h-1zM1 7h1v1h-1zM9 7h1v1h-1zM1 8h1v1h-1zM9 8h1v1h-1zM1 9h1v1h-1zM9 9h1v1h-1zM1 10h9v1h-9z"/></symbol>';
  /* @icons:end */
  var holder = document.createElement('div');
  holder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">' + SPRITE + '</svg>';
  document.body.insertBefore(holder.firstChild, document.body.firstChild);

  // --- shared layout: header + [left TOC | body | right slot] + footer ---
  // pages only contain: optional hero, <main id="content"> with <section id data-toc="label">, optional <aside class="side-right">
  var NAV = [['index.html', 'หน้าแรก'], ['ai-video.html', 'ทำคลิปด้วย AI'], ['ai-edit.html', 'ตัดต่อด้วย AI'], ['compare.html', 'Model Compare']];
  var FB = 'https://www.facebook.com/NerdMarTech';
  var here = document.body.getAttribute('data-page') || location.pathname.split('/').pop() || 'index.html';
  // home = '/' on the live site (no index.html in the URL); file:// preview still needs the file name
  var HOME = location.protocol === 'file:' ? 'index.html' : '/';
  var href = function(f){ return f === 'index.html' ? HOME : f; };
  if (location.protocol !== 'file:' && /\/index\.html$/.test(location.pathname) && history.replaceState) {
    history.replaceState(null, '', location.pathname.replace(/index\.html$/, '') + location.search + location.hash);
  }
  var navLinks = function(cls){
    return NAV.map(function(n){ return '<a href="' + href(n[0]) + '"' + (n[0] === here && cls ? ' class="active"' : '') + '>' + n[1] + '</a>'; }).join('');
  };
  var head = document.createElement('header');
  head.className = 'site-head';
  head.innerHTML = '<a class="logo" href="' + HOME + '" aria-label="Nerd MarTech"><img src="assets/brand/logo-on-light.svg" alt="" class="logo-sym">' +
    '<span class="logo-wm">Nerd<br>Mar<span>Tech</span></span></a>' +
    '<nav class="site-nav"><div class="wrap"><div class="links">' + navLinks(true) + '</div></div></nav>';
  document.body.insertBefore(head, document.body.firstChild.nextSibling);

  // header is sticky with a negative top = logo row scrolls away, nav bar stays. Heights feed the CSS.
  var navBar = head.querySelector('.site-nav'), rootStyle = document.documentElement.style;
  function measureHead(){
    rootStyle.setProperty('--head-h', head.offsetHeight + 'px');
    rootStyle.setProperty('--logo-h', (head.offsetHeight - navBar.offsetHeight) + 'px');
  }
  measureHead();
  addEventListener('resize', measureHead);
  addEventListener('load', measureHead);  // web fonts change the header height
  // home: header sits on top of the video hero (white) until the hero scrolls away
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    document.body.classList.add('home');
    var logoImg = head.querySelector('.logo-sym');
    var onScroll = function(){
      var past = heroBg.getBoundingClientRect().bottom <= navBar.offsetHeight + 120;  // flip to light a bit before the hero is fully gone
      document.body.classList.toggle('past-hero', past);
      var dark = !past || innerWidth <= 700;
      var want = 'assets/brand/logo-on-' + (dark ? 'dark' : 'light') + '.svg';
      if (logoImg.getAttribute('src') !== want) logoImg.setAttribute('src', want);
    };
    addEventListener('resize', onScroll);
    addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  var main = document.getElementById('content');
  if (main) {
    var lay = document.createElement('div');
    lay.className = 'wrap layout';
    main.parentNode.insertBefore(lay, main);
    var left = document.createElement('aside');
    left.className = 'side-toc';
    var secs = main.querySelectorAll('section[id][data-toc]');
    if (secs.length) {
      left.innerHTML = '<span class="toc-title">ไปที่หัวข้อ</span>' + Array.prototype.map.call(secs, function(s){
        return '<a href="#' + s.id + '">' + s.getAttribute('data-toc') + '</a>';
      }).join('');
    }
    var right = document.querySelector('aside.side-right') || document.createElement('aside');
    right.className = 'side-right';
    lay.appendChild(left); lay.appendChild(main); lay.appendChild(right);
    if (right.children.length) lay.classList.add('has-right');
    if (!secs.length) lay.classList.add('no-left');

    var foot = document.createElement('footer');
    foot.className = 'site-foot';
    foot.innerHTML = '<div class="wrap"><div class="foot-links">' + navLinks(false) +
      '<a class="fb" href="' + FB + '" target="_blank" rel="noopener">เพจ Facebook <svg class="pi sm"><use href="#i-external"/></svg></a></div>' +
      '<p>Nerd MarTech · จัดทำโดย AOO Commerce · ผลทดสอบเป็นข้อมูล ณ วันที่ทดสอบ โมเดล AI เปลี่ยนเร็ว ควรทดสอบซ้ำก่อนใช้งานจริง</p></div>';
    lay.parentNode.insertBefore(foot, lay.nextSibling);
  }

  // --- nav: on narrow screens scroll the active menu item into view ---
  var act = document.querySelector('.links a.active'), lk = document.querySelector('.links');
  if (act && lk && lk.scrollWidth > lk.clientWidth) lk.scrollLeft = act.offsetLeft - (lk.clientWidth - act.offsetWidth) / 2;

  // --- side TOC: highlight section in view · on mobile becomes a bottom "journey" bar that opens the list ---
  var toc = document.querySelector('.side-toc');
  if (toc) {
    var links = {}, secs = [], order = [];
    toc.querySelectorAll('a[href^="#"]').forEach(function(a){
      var sec = document.getElementById(a.getAttribute('href').slice(1));
      if (sec) { links[sec.id] = a; secs.push(sec); order.push(sec.id); }
    });
    var bar = document.createElement('button');
    bar.type = 'button'; bar.className = 'toc-bar'; bar.setAttribute('aria-expanded', 'false');
    bar.innerHTML = '<span class="toc-step"></span><span class="toc-now"></span><span class="toc-dots">' +
      order.map(function(){ return '<i></i>'; }).join('') + '</span>';
    toc.appendChild(bar);
    var step = bar.querySelector('.toc-step'), now = bar.querySelector('.toc-now'), dots = bar.querySelectorAll('.toc-dots i');
    function setOpen(v){ toc.classList.toggle('open', v); bar.setAttribute('aria-expanded', v ? 'true' : 'false'); }
    bar.addEventListener('click', function(){ setOpen(!toc.classList.contains('open')); });
    toc.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setOpen(false); }); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setOpen(false); });
    function mark(id){
      var i = order.indexOf(id); if (i < 0) return;
      toc.querySelectorAll('a.on').forEach(function(a){ a.classList.remove('on'); });
      links[id].classList.add('on');
      step.textContent = (i + 1) + '/' + order.length;
      now.textContent = links[id].textContent;
      dots.forEach(function(d, j){ d.className = j < i ? 'past' : (j === i ? 'cur' : ''); });
    }
    if (order.length) mark(order[0]);
    // scroll-spy: the last section whose top has passed 35% of the viewport is "current"
    var ticking = false;
    function spy(){
      ticking = false;
      var line = innerHeight * 0.35, cur = order[0];
      for (var k = 0; k < secs.length; k++) { if (secs[k].getBoundingClientRect().top <= line) cur = secs[k].id; }
      mark(cur);
    }
    addEventListener('scroll', function(){ if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, {passive:true});
    addEventListener('resize', spy);
    spy();
  }

  // --- before/after video slider (.ba): drag to reveal, keep both videos in sync, tabs swap the "after" clip ---
  document.querySelectorAll('[data-ba]').forEach(function(ba){
    var range = ba.querySelector('.ba-range'), after = ba.querySelector('.ba-after'), before = ba.querySelector('.ba-before video');
    range.addEventListener('input', function(){ ba.style.setProperty('--pos', range.value + '%'); });
    before.addEventListener('timeupdate', function(){
      if (Math.abs(after.currentTime - before.currentTime) > 0.25 && before.currentTime < (after.duration || 99)) after.currentTime = before.currentTime;
    });
    var tabs = ba.querySelectorAll('.ba-tabs button');
    tabs.forEach(function(b){
      b.addEventListener('click', function(){
        tabs.forEach(function(x){ x.classList.toggle('on', x === b); });
        after.src = b.getAttribute('data-src');
        var lab = ba.querySelector('.ba-lab.r'), cr = b.getAttribute('data-cr-tab');
        if (lab && cr) lab.textContent = 'Genjutsu · ' + cr + ' credits';
        after.currentTime = before.currentTime;
        after.play().catch(function(){});
      });
    });
  });

  // --- synced pair ([data-sync]): videos start when visible, stay on the same frame, loop together ---
  document.querySelectorAll('[data-sync]').forEach(function(box){
    var vids = box.querySelectorAll('video'); if (vids.length < 2) return;
    var lead = vids[0], rest = Array.prototype.slice.call(vids, 1);
    var playAll = function(){ vids.forEach(function(v){ v.play().catch(function(){}); }); };
    lead.addEventListener('timeupdate', function(){
      rest.forEach(function(v){ if (Math.abs(v.currentTime - lead.currentTime) > 0.2) v.currentTime = lead.currentTime; });
    });
    lead.addEventListener('ended', function(){ vids.forEach(function(v){ v.currentTime = 0; }); playAll(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function(es){
        es.forEach(function(e){ if (e.isIntersecting) playAll(); else vids.forEach(function(v){ v.pause(); }); });
      }, {threshold: 0.3}).observe(box);
    } else { playAll(); }
  });

  // --- datatable (shared): label cells for the mobile card view · sortable headers on table.dt ---
  document.querySelectorAll('.tablewrap table').forEach(function(t){
    var headRow = t.tHead ? t.tHead.rows[0] : (t.rows[0] && t.rows[0].cells[0] && t.rows[0].cells[0].tagName === 'TH' ? t.rows[0] : null);
    if (!headRow) return;
    if (!t.tHead) headRow.classList.add('head-row');
    var labels = Array.prototype.map.call(headRow.cells, function(c){ var d = document.createElement('div'); d.innerHTML = c.innerHTML.replace(/<br\s*\/?>/gi, ' '); return d.textContent.replace(/\s+/g, ' ').trim(); });
    t.classList.add('stack');
    Array.prototype.forEach.call(t.rows, function(r){
      if (r === headRow) return;
      Array.prototype.forEach.call(r.cells, function(c, i){ if (!c.hasAttribute('data-label')) c.setAttribute('data-label', labels[i] || ''); });
    });
    if (!t.classList.contains('dt') || !t.tBodies[0]) return;
    var num = function(td){ var v = parseFloat((td.getAttribute('data-sort') || td.textContent).replace(/[^0-9.\-]/g, '')); return isNaN(v) ? null : v; };
    Array.prototype.forEach.call(headRow.cells, function(th, i){
      if (th.classList.contains('nosort')) return;
      th.setAttribute('role', 'button'); th.tabIndex = 0;
      var go = function(){
        var dir = th.getAttribute('aria-sort') === 'descending' ? 'ascending' : 'descending';
        Array.prototype.forEach.call(headRow.cells, function(x){ x.removeAttribute('aria-sort'); });
        th.setAttribute('aria-sort', dir);
        var body = t.tBodies[0], rows = Array.prototype.slice.call(body.rows);
        rows.sort(function(a, b){
          var x = a.cells[i], y = b.cells[i], nx = num(x), ny = num(y), r;
          r = (nx !== null && ny !== null) ? nx - ny : x.textContent.trim().localeCompare(y.textContent.trim(), 'th');
          return dir === 'ascending' ? r : -r;
        });
        rows.forEach(function(r){ body.appendChild(r); });
        t.dispatchEvent(new CustomEvent('dt:sorted'));
      };
      th.addEventListener('click', go);
      th.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  });

  // --- decision matrix ([data-matrix]): preset buttons set weights x scores (1-5) = total /100, re-rank live ---
  document.querySelectorAll('[data-matrix]').forEach(function(mx){
    var presets = mx.querySelectorAll('.mx-presets button'), body = mx.querySelector('tbody');
    // score pills: 1 = red · 3 = yellow · 5 = green (hue 5 → 145, never reaches blue)
    mx.querySelectorAll('td.sc').forEach(function(td){
      var v = parseFloat(td.textContent); if (isNaN(v)) return;
      td.setAttribute('data-sort', v);
      td.innerHTML = '<span style="--h:' + Math.round(5 + (Math.min(Math.max(v, 1), 5) - 1) / 4 * 140) + '">' + td.textContent + '</span>';
    });
    var renumber = function(){
      Array.prototype.forEach.call(body.rows, function(r, i){ r.querySelector('.rk').textContent = i + 1; r.querySelector('.mdl').setAttribute('data-rank', i + 1); });
    };
    var calc = function(w){
      var sum = w.reduce(function(a, b){ return a + b; }, 0) || 1, rows = Array.prototype.slice.call(body.rows);
      rows.forEach(function(r){
        var t = 0;
        r.getAttribute('data-s').split(',').map(Number).forEach(function(v, i){ t += (w[i] || 0) * v / 5; });
        t = Math.round(t / sum * 100);
        r.setAttribute('data-total', t);
        var cell = r.querySelector('.tot'); cell.setAttribute('data-sort', t);
        cell.querySelector('b').textContent = t; cell.querySelector('.bar i').style.width = t + '%';
      });
      rows.sort(function(a, b){ return b.getAttribute('data-total') - a.getAttribute('data-total'); });
      rows.forEach(function(r){ body.appendChild(r); });
      renumber();
    };
    presets.forEach(function(p){
      p.addEventListener('click', function(){
        presets.forEach(function(x){ x.classList.toggle('on', x === p); });
        calc(p.getAttribute('data-w').split(',').map(Number));
      });
    });
    mx.querySelector('table').addEventListener('dt:sorted', renumber);
    var on = mx.querySelector('.mx-presets .on') || presets[0];
    calc(on.getAttribute('data-w').split(',').map(Number));
  });

  // --- copy buttons: .prompt .copy (copies <pre>) · .anno .copy (joins <mark> parts) ---
  var ICON_COPY = '<svg class="pi sm"><use href="#i-copy"/></svg>', ICON_DONE = '<svg class="pi sm"><use href="#i-pass"/></svg>';
  document.querySelectorAll('.prompt .copy, .anno .copy').forEach(function(btn){
    var label = btn.textContent.trim() || 'Copy';
    btn.innerHTML = ICON_COPY + label;
    btn.addEventListener('click', function(){
      var box = btn.parentNode, marks = box.querySelectorAll('mark'), pre = box.querySelector('pre');
      var t = marks.length ? Array.prototype.map.call(marks, function(m){ return m.textContent.trim(); }).join(' ') : (pre ? pre.innerText : '');
      navigator.clipboard.writeText(t).then(function(){
        btn.innerHTML = ICON_DONE + 'Copied'; btn.classList.add('done');
        setTimeout(function(){ btn.innerHTML = ICON_COPY + label; btn.classList.remove('done'); }, 1800);
      });
    });
  });

  // --- credits → บาท (Higgsfield $39 package = 1.29 THB/credit) ---
  var RATE = 1.29;
  function baht(c){ return '฿' + Math.round(c * RATE).toLocaleString('th-TH'); }
  document.querySelectorAll('[data-cr]').forEach(function(el){
    var c = parseFloat(el.getAttribute('data-cr'));
    if (isNaN(c)) return;
    if (el.tagName === 'TD') { el.innerHTML = c + ' <small>' + baht(c) + '</small>'; }
    else { el.innerHTML = c + ' credits <span class="thb">' + baht(c) + '</span>'; }
  });

  // --- lightbox (shared): img[data-zoom] + [data-zoom-video] · prev/next (buttons, ←/→, swipe) · Esc / click outside closes ---
  // items are grouped by the nearest [data-gallery] ancestor; without one, all images (or all videos) on the page form one group
  var lb = document.createElement('div');
  lb.className = 'lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true');
  lb.innerHTML = '<button class="lb-x" aria-label="ปิด">×</button>' +
    '<button class="lb-nav prev" aria-label="ก่อนหน้า">‹</button><button class="lb-nav next" aria-label="ถัดไป">›</button>' +
    '<img alt=""><video controls playsinline></video><div class="lb-cap"></div>';
  document.body.appendChild(lb);
  var img = lb.querySelector('img'), vid = lb.querySelector('video'), cap = lb.querySelector('.lb-cap');
  var prevB = lb.querySelector('.prev'), nextB = lb.querySelector('.next');
  var list = [], idx = 0;
  var isVid = function(el){ return el.hasAttribute('data-zoom-video'); };
  var groupOf = function(el){
    var g = el.closest('[data-gallery]');
    var sel = isVid(el) ? '[data-zoom-video]' : 'img[data-zoom]';
    return Array.prototype.slice.call((g || document).querySelectorAll(sel)).filter(function(x){ return g || !x.closest('[data-gallery]'); });
  };
  function show(){
    var el = list[idx], v = isVid(el);
    lb.classList.toggle('vid', v);
    vid.pause();
    if (v) { vid.src = el.getAttribute('data-zoom-video'); vid.play().catch(function(){}); }
    else { vid.removeAttribute('src'); img.src = el.getAttribute('data-zoom') || el.src; img.alt = el.alt || ''; }
    var text = v ? (el.getAttribute('data-cap') || '') : (el.alt || '');
    cap.textContent = (list.length > 1 ? (idx + 1) + ' / ' + list.length + (text ? ' · ' : '') : '') + text;
    prevB.hidden = nextB.hidden = list.length < 2;
  }
  function open(el){ list = groupOf(el); idx = Math.max(0, list.indexOf(el)); show(); lb.classList.add('on'); document.body.style.overflow = 'hidden'; }
  function step(d){ if (list.length < 2) return; idx = (idx + d + list.length) % list.length; show(); }
  function close(){ lb.classList.remove('on'); document.body.style.overflow = ''; img.src = ''; vid.pause(); vid.removeAttribute('src'); vid.load(); }
  document.querySelectorAll('img[data-zoom]').forEach(function(im){
    im.classList.add('zoomable');
    im.addEventListener('click', function(){ open(im); });
  });
  document.querySelectorAll('[data-zoom-video]').forEach(function(el){
    el.addEventListener('click', function(e){ e.preventDefault(); open(el); });
  });
  prevB.addEventListener('click', function(e){ e.stopPropagation(); step(-1); });
  nextB.addEventListener('click', function(e){ e.stopPropagation(); step(1); });
  lb.addEventListener('click', function(e){ if (e.target !== img && e.target !== vid) close(); });
  document.addEventListener('keydown', function(e){
    if (!lb.classList.contains('on')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });
  var tx = null;
  lb.addEventListener('touchstart', function(e){ tx = e.touches[0].clientX; }, {passive: true});
  lb.addEventListener('touchend', function(e){ if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); tx = null; });
})();
