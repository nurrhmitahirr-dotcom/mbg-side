// 1. Intro Animation
window.addEventListener('load', () => {
    const intro = document.getElementById('intro-overlay');
    setTimeout(() => {
        intro.style.transform = 'translateY(-100%)';
    }, 2500); // Intro hilang setelah 2.5 detik
});

// 2. Scroll Reveal Animation (Fade In)
const reveal = () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

// 3. Auto-Active Navbar on Scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});