/* Nerd MarTech — shared behaviour: credit→THB formatter + image lightbox */
(function(){
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
