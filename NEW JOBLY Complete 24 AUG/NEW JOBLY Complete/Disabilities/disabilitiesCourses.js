document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('site-navigation');

    toggleBtn.addEventListener('click', () => {
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('open');
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (
        !nav.contains(e.target) &&
        e.target !== toggleBtn &&
        nav.classList.contains('open')
        ) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        }
    });
});
