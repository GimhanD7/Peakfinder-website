// Modern Navbar Scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar
    checkNavbarState();

    // Event listeners
    window.addEventListener('scroll', checkNavbarState);
    window.addEventListener('resize', checkNavbarState);

    // Toggle button animation
    const navToggle = document.getElementById('nav-toggle');
    navToggle.addEventListener('click', function() {
        const icon = document.getElementById('nav-toggle-icon');
        if (icon.classList.contains('fa-leaf')) {
            icon.classList.remove('fa-leaf');
            icon.classList.add('fa-times');
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-leaf');
            icon.style.transform = 'rotate(0deg)';
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dropdown hover effect for desktop
    if (window.innerWidth > 992) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function() {
                this.querySelector('.dropdown-menu').style.display = 'block';
                setTimeout(() => {
                    this.querySelector('.dropdown-menu').style.opacity = '1';
                    this.querySelector('.dropdown-menu').style.transform = 'translateY(0)';
                }, 50);
            });
            dropdown.addEventListener('mouseleave', function() {
                this.querySelector('.dropdown-menu').style.opacity = '0';
                this.querySelector('.dropdown-menu').style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    this.querySelector('.dropdown-menu').style.display = 'none';
                }, 300);
            });
        });
    }

    // Home section height adjustment
    const homeSection = document.getElementById('home');
    const projectScope = document.getElementById('project-scope');
    if (homeSection && projectScope) {
        const homeSectionHeight = homeSection.offsetHeight - 70;
        projectScope.style.marginTop = `${homeSectionHeight}px`;
    }
});

// Check navbar state on scroll
function checkNavbarState() {
    const navbar = document.getElementById('navmenu');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active menu item
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollPosition >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.parentElement.classList.add('active');
        }
    });
}

// Hero Image Spotlight
document.addEventListener('mousemove', function(e) {
    const x = e.pageX;
    const y = e.pageY;
    const spotlightImage = document.querySelector('.spotlight-image');
    if (spotlightImage) {
        spotlightImage.style.clipPath = `circle(20% at ${x}px ${y}px)`;
    }
});