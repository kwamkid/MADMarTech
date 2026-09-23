/* Nerd MarTech — shared behaviour: pixel icon sprite + credit→THB formatter + image lightbox */
(function(){
  // --- pixel icons: inline the sprite so <use href="#i-xxx"> works everywhere (incl. file://) ---
  /* @icons:start — generated from assets/pixel-icons.svg, do not edit by hand */
  var SPRITE = '<symbol id="i-ai" viewBox="0 0 12 12"><path d="M2 1h8v1h-8zM1 2h1v1h-1zM10 2h1v1h-1zM1 3h1v1h-1zM3 3h2v1h-2zM7 3h2v1h-2zM10 3h1v1h-1zM1 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM3 5h1v1h-1zM8 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM4 6h4v1h-4zM10 6h1v1h-1zM1 7h1v1h-1zM10 7h1v1h-1zM2 8h8v1h-8zM4 9h1v1h-1zM7 9h1v1h-1zM3 10h2v1h-2zM7 10h2v1h-2z"/></symbol><symbol id="i-data" viewBox="0 0 12 12"><path d="M10 1h1v1h-1zM7 2h1v1h-1zM10 2h1v1h-1zM7 3h1v1h-1zM10 3h1v1h-1zM4 4h1v1h-1zM7 4h1v1h-1zM10 4h1v1h-1zM4 5h1v1h-1zM7 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM4 6h1v1h-1zM7 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM4 7h1v1h-1zM7 7h1v1h-1zM10 7h1v1h-1zM1 8h1v1h-1zM4 8h1v1h-1zM7 8h1v1h-1zM10 8h1v1h-1zM1 9h1v1h-1zM4 9h1v1h-1zM7 9h1v1h-1zM10 9h1v1h-1zM1 10h10v1h-10z"/></symbol><symbol id="i-prompt" viewBox="0 0 12 12"><path d="M1 1h10v1h-10zM1 2h1v1h-1zM10 2h1v1h-1zM1 3h1v1h-1zM3 3h1v1h-1zM10 3h1v1h-1zM1 4h1v1h-1zM4 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM5 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM4 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM3 7h1v1h-1zM6 7h3v1h-3zM10 7h1v1h-1zM1 8h1v1h-1zM10 8h1v1h-1zM1 9h10v1h-10z"/></symbol><symbol id="i-model" viewBox="0 0 12 12"><path d="M4 1h1v1h-1zM7 1h1v1h-1zM2 2h8v1h-8zM2 3h1v1h-1zM9 3h1v1h-1zM1 4h2v1h-2zM9 4h2v1h-2zM2 5h1v1h-1zM5 5h2v1h-2zM9 5h1v1h-1zM2 6h1v1h-1zM5 6h2v1h-2zM9 6h1v1h-1zM1 7h2v1h-2zM9 7h2v1h-2zM2 8h1v1h-1zM9 8h1v1h-1zM2 9h8v1h-8zM4 10h1v1h-1zM7 10h1v1h-1z"/></symbol><symbol id="i-credit" viewBox="0 0 12 12"><path d="M4 1h4v1h-4zM3 2h1v1h-1zM8 2h1v1h-1zM2 3h1v1h-1zM5 3h2v1h-2zM9 3h1v1h-1zM2 4h1v1h-1zM4 4h1v1h-1zM9 4h1v1h-1zM2 5h1v1h-1zM4 5h1v1h-1zM9 5h1v1h-1zM2 6h1v1h-1zM4 6h1v1h-1zM9 6h1v1h-1zM2 7h1v1h-1zM5 7h2v1h-2zM9 7h1v1h-1zM3 8h1v1h-1zM8 8h1v1h-1zM4 9h4v1h-4z"/></symbol><symbol id="i-time" viewBox="0 0 12 12"><path d="M4 1h4v1h-4zM3 2h1v1h-1zM8 2h1v1h-1zM2 3h1v1h-1zM5 3h1v1h-1zM9 3h1v1h-1zM1 4h1v1h-1zM5 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM5 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM5 6h3v1h-3zM10 6h1v1h-1zM1 7h1v1h-1zM10 7h1v1h-1zM2 8h1v1h-1zM9 8h1v1h-1zM3 9h1v1h-1zM8 9h1v1h-1zM4 10h4v1h-4z"/></symbol><symbol id="i-cost" viewBox="0 0 12 12"><path d="M5 1h2v1h-2zM2 2h8v1h-8zM1 3h1v1h-1zM4 3h2v1h-2zM10 3h1v1h-1zM1 4h1v1h-1zM4 4h2v1h-2zM2 5h6v1h-6zM4 6h2v1h-2zM10 6h1v1h-1zM1 7h1v1h-1zM4 7h2v1h-2zM10 7h1v1h-1zM2 8h8v1h-8zM5 9h2v1h-2z"/></symbol><symbol id="i-video" viewBox="0 0 12 12"><path d="M1 2h7v1h-7zM1 3h1v1h-1zM7 3h1v1h-1zM9 3h2v1h-2zM1 4h1v1h-1zM7 4h2v1h-2zM10 4h1v1h-1zM1 5h1v1h-1zM7 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM7 6h2v1h-2zM10 6h1v1h-1zM1 7h1v1h-1zM7 7h1v1h-1zM9 7h2v1h-2zM1 8h7v1h-7z"/></symbol><symbol id="i-image" viewBox="0 0 12 12"><path d="M1 1h10v1h-10zM1 2h1v1h-1zM10 2h1v1h-1zM1 3h1v1h-1zM4 3h2v1h-2zM10 3h1v1h-1zM1 4h1v1h-1zM4 4h2v1h-2zM10 4h1v1h-1zM1 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM6 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM5 7h3v1h-3zM10 7h1v1h-1zM1 8h1v1h-1zM4 8h5v1h-5zM10 8h1v1h-1zM1 9h10v1h-10z"/></symbol><symbol id="i-automation" viewBox="0 0 12 12"><path d="M5 1h2v1h-2zM4 2h4v1h-4zM1 3h1v1h-1zM4 3h1v1h-1zM7 3h1v1h-1zM10 3h1v1h-1zM1 4h4v1h-4zM7 4h4v1h-4zM1 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM10 6h1v1h-1zM1 7h4v1h-4zM7 7h4v1h-4zM1 8h1v1h-1zM4 8h1v1h-1zM7 8h1v1h-1zM10 8h1v1h-1zM4 9h4v1h-4zM5 10h2v1h-2z"/></symbol><symbol id="i-pass" viewBox="0 0 12 12"><path d="M9 2h2v1h-2zM8 3h2v1h-2zM7 4h2v1h-2zM1 5h2v1h-2zM6 5h2v1h-2zM2 6h2v1h-2zM5 6h2v1h-2zM3 7h3v1h-3zM4 8h1v1h-1z"/></symbol><symbol id="i-maybe" viewBox="0 0 12 12"><path d="M4 1h4v1h-4zM3 2h1v1h-1zM8 2h1v1h-1zM2 3h1v1h-1zM9 3h1v1h-1zM9 4h1v1h-1zM8 5h1v1h-1zM7 6h1v1h-1zM6 7h1v1h-1zM6 8h1v1h-1zM6 10h1v1h-1z"/></symbol><symbol id="i-fail" viewBox="0 0 12 12"><path d="M1 1h2v1h-2zM9 1h2v1h-2zM2 2h2v1h-2zM8 2h2v1h-2zM3 3h2v1h-2zM7 3h2v1h-2zM4 4h4v1h-4zM5 5h2v1h-2zM4 6h4v1h-4zM3 7h2v1h-2zM7 7h2v1h-2zM2 8h2v1h-2zM8 8h2v1h-2zM1 9h2v1h-2zM9 9h2v1h-2z"/></symbol><symbol id="i-cursor" viewBox="0 0 12 12"><path d="M1 1h1v1h-1zM1 2h2v1h-2zM1 3h3v1h-3zM1 4h4v1h-4zM1 5h5v1h-5zM1 6h6v1h-6zM1 7h7v1h-7zM1 8h4v1h-4zM1 9h1v1h-1zM3 9h2v1h-2zM4 10h2v1h-2z"/></symbol><symbol id="i-copy" viewBox="0 0 12 12"><path d="M4 1h7v1h-7zM4 2h1v1h-1zM10 2h1v1h-1zM1 3h7v1h-7zM10 3h1v1h-1zM1 4h1v1h-1zM7 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM7 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM7 6h1v1h-1zM10 6h1v1h-1zM1 7h1v1h-1zM7 7h4v1h-4zM1 8h1v1h-1zM7 8h1v1h-1zM1 9h7v1h-7z"/></symbol><symbol id="i-arrow" viewBox="0 0 12 12"><path d="M6 2h1v1h-1zM7 3h1v1h-1zM8 4h1v1h-1zM1 5h9v1h-9zM8 6h1v1h-1zM7 7h1v1h-1zM6 8h1v1h-1z"/></symbol><symbol id="i-idea" viewBox="0 0 12 12"><path d="M4 1h4v1h-4zM3 2h1v1h-1zM8 2h1v1h-1zM2 3h1v1h-1zM9 3h1v1h-1zM2 4h1v1h-1zM9 4h1v1h-1zM2 5h1v1h-1zM9 5h1v1h-1zM3 6h1v1h-1zM8 6h1v1h-1zM4 7h1v1h-1zM7 7h1v1h-1zM4 8h4v1h-4zM4 9h4v1h-4zM5 10h2v1h-2z"/></symbol><symbol id="i-external" viewBox="0 0 12 12"><path d="M6 1h5v1h-5zM1 2h4v1h-4zM9 2h2v1h-2zM1 3h1v1h-1zM8 3h1v1h-1zM10 3h1v1h-1zM1 4h1v1h-1zM7 4h1v1h-1zM10 4h1v1h-1zM1 5h1v1h-1zM6 5h1v1h-1zM10 5h1v1h-1zM1 6h1v1h-1zM5 6h1v1h-1zM1 7h1v1h-1zM9 7h1v1h-1zM1 8h1v1h-1zM9 8h1v1h-1zM1 9h1v1h-1zM9 9h1v1h-1zM1 10h9v1h-9z"/></symbol>';
  /* @icons:end */
  var holder = document.createElement('div');
  holder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">' + SPRITE + '</svg>';
  document.body.insertBefore(holder.firstChild, document.body.firstChild);

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
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if (e.isIntersecting) mark(e.target.id); });
      }, {rootMargin:'-30% 0px -60% 0px'});
      secs.forEach(function(s){ io.observe(s); });
    }
  }

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

  // --- lightbox for [data-zoom] images ---
  var lb = document.createElement('div');
  lb.className = 'lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true');
  lb.innerHTML = '<button class="lb-x" aria-label="ปิด">×</button><img alt=""><div class="lb-cap"></div>';
  document.body.appendChild(lb);
  var img = lb.querySelector('img'), cap = lb.querySelector('.lb-cap');
  function open(src, alt){ img.src = src; img.alt = alt || ''; cap.textContent = alt || ''; lb.classList.add('on'); document.body.style.overflow='hidden'; }
  function close(){ lb.classList.remove('on'); document.body.style.overflow=''; img.src=''; }
  document.querySelectorAll('img[data-zoom]').forEach(function(im){
    im.classList.add('zoomable');
    im.addEventListener('click', function(){ open(im.getAttribute('data-zoom') || im.src, im.alt); });
  });
  lb.addEventListener('click', function(e){ if (e.target !== img) close(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && lb.classList.contains('on')) close(); });
})();
