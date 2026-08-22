(() => {
  const body = document.body;
  const header = document.querySelector('#site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');
  const links = [...menu.querySelectorAll('a')];
  const form = document.querySelector('#contact-form');
  let lastFocus = null;

  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) { lastFocus = document.activeElement; window.setTimeout(() => links[0].focus(), 180); }
    else if (lastFocus) lastFocus.focus();
  }

  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links.forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false);
    if (event.key !== 'Tab' || toggle.getAttribute('aria-expanded') !== 'true') return;
    const focusable = [toggle, ...links], first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  const darkSections = [...document.querySelectorAll('[data-header-dark]')];
  const updateHeader = () => {
    const sampleY = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) / 2;
    const overDark = darkSections.some(section => {
      const rect = section.getBoundingClientRect();
      return rect.top <= sampleY && rect.bottom >= sampleY;
    });
    header.classList.toggle('on-dark', overDark);
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const inquiry = String(data.get('inquiry') || 'General Inquiry');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`${inquiry}: ${name}`);
    const content = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}\n\n${message}`);
    window.location.href = `mailto:salwa@salwaqadir.com?subject=${subject}&body=${content}`;
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
