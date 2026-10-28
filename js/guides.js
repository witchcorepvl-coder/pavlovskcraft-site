(function () {
  var hub = document.getElementById('hub');
  var guides = [].slice.call(document.querySelectorAll('.guide'));
  var topics = [].slice.call(document.querySelectorAll('.topic'));
  var groups = [].slice.call(document.querySelectorAll('.ggroup'));
  var q = document.getElementById('q');
  var chips = [].slice.call(document.querySelectorAll('.chips button'));
  var empty = document.getElementById('empty');
  var baseTitle = document.title, curGroup = 'all';

  function applyFilter() {
    var term = (q.value || '').trim().toLowerCase(), any = false;
    topics.forEach(function (t) {
      var okG = curGroup === 'all' || t.getAttribute('data-g') === curGroup;
      var okQ = !term || (t.getAttribute('data-s') || '').indexOf(term) !== -1;
      var show = okG && okQ;
      t.style.display = show ? '' : 'none';
      if (show) any = true;
    });
    groups.forEach(function (g) {
      var vis = [].some.call(g.querySelectorAll('.topic'), function (t) { return t.style.display !== 'none'; });
      g.style.display = vis ? '' : 'none';
    });
    empty.style.display = any ? 'none' : 'block';
  }

  chips.forEach(function (b) {
    b.addEventListener('click', function () {
      curGroup = b.getAttribute('data-g');
      chips.forEach(function (c) { c.classList.toggle('on', c === b); });
      applyFilter();
    });
  });
  q.addEventListener('input', applyFilter);

  function route() {
    var id = decodeURIComponent((location.hash || '').replace('#', ''));
    var cur = null;
    guides.forEach(function (g) {
      var on = g.id === id;
      g.classList.toggle('on', on);
      if (on) cur = g;
    });
    hub.classList.toggle('off', !!cur);
    document.title = cur ? (cur.getAttribute('data-title') + ' — гайды PavlovskCraft') : baseTitle;
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
  applyFilter();
})();
