/* ================================================================
   RADIO ODYSSEY — main.js
   ================================================================ */

// Active nav link in offcanvas
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-nav a.nav-link').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
})();
