// Liman Hukuk Bürosu - Tüm JS kodları buraya taşındı
function showPage(pageId, evt) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) selectedPage.classList.add('active');
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => link.classList.remove('active'));
  if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
  document.getElementById('mainNav')?.classList.remove('open');
  window.scrollTo(0, 0);
}
function toggleNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', () => {
  // ...hesaplama ile ilgili eventler kaldırıldı...
  document.querySelectorAll('#mainNav a').forEach(a => {
    a.addEventListener('click', (ev) => {
      const onclick = a.getAttribute('onclick');
      if (onclick) {
        const match = onclick.match(/showPage\(['"]?(\w+)['"]?\)/);
        if (match) showPage(match[1], ev);
      }
      document.getElementById('mainNav')?.classList.remove('open');
    });
  });
  // Cookie banner gösterimi
  if (!localStorage.getItem('cookieAccepted')) {
    document.getElementById('cookieBanner').style.display = 'block';
  }
});

function acceptCookies() {
  localStorage.setItem('cookieAccepted', '1');
  document.getElementById('cookieBanner').style.display = 'none';
}
