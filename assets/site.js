(() => {
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('#nav-links');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const isOpen = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!isOpen));
      links.classList.toggle('open', !isOpen);
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
    }));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { menu.setAttribute('aria-expanded', 'false'); links.classList.remove('open'); }
    });
  }
  document.querySelectorAll('[data-print-guide]').forEach(button => button.addEventListener('click', () => window.print()));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
