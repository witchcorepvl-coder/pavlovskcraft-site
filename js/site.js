// ================= НАСТРОЙКИ САЙТА (меняй здесь) =================
var REPO = 'witchcorepvl-coder/my-launcher';          // репозиторий лаунчера на GitHub
var FILES = {                                         // имена файлов в релизе
  win: 'PavlovskCraft.exe',
  'mac-arm': 'PavlovskCraft-arm64.dmg',
  'mac-intel': 'PavlovskCraft-x64.dmg'
};
// =================================================================
(function () {
  var base = 'https://github.com/' + REPO;
  document.querySelectorAll('[data-dl]').forEach(function (a) {
    var k = a.getAttribute('data-dl');
    if (FILES[k]) a.href = base + '/releases/latest/download/' + FILES[k];
    else if (k === 'all') a.href = base + '/releases';
    else if (k === 'repo') a.href = base;
    if (k !== 'repo') { a.rel = 'noopener'; }
  });

  var calm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // снег
  var box = document.getElementById('snow');
  if (box && !calm) {
    var n = window.innerWidth < 700 ? 18 : 40, chars = ['*', '✱', '.', '+'];
    for (var i = 0; i < n; i++) {
      var f = document.createElement('span');
      f.className = 'flake';
      f.textContent = chars[Math.floor(Math.random() * chars.length)];
      f.style.left = (Math.random() * 100) + 'vw';
      f.style.fontSize = (10 + Math.random() * 12) + 'px';
      f.style.opacity = (0.25 + Math.random() * 0.5).toFixed(2);
      f.style.setProperty('--dx', (Math.random() * 80 - 40) + 'px');
      f.style.animationDuration = (9 + Math.random() * 14) + 's';
      f.style.animationDelay = (-Math.random() * 20) + 's';
      box.appendChild(f);
    }
  }

  // логотип падает один раз
  var art = document.getElementById('titleArt');
  if (art && !calm) art.classList.add('drop');
})();
