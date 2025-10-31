/* === PARTICLES.JS === */
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6366f1'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6366f1',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
} else {
    console.log('Particles.js library not loaded, continuing with other features...');
}

/* === NAVBAR & HAMBURGER === */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* === NAVBAR SCROLL === */
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

/* === TYPEWRITER EFFECT === */
const texts = ['Full-Stack Developer', 'UI/UX Designer', 'Creative Coder', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterElement = document.getElementById('typewriter');

if (typewriterElement) {
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, typingSpeed);
    }
    
    typeWriter();
}

/* === INTERSECTION OBSERVER FOR ANIMATIONS === */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
            
            if (entry.target.classList.contains('skill-progress')) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Animate general elements
document.querySelectorAll('.project-card, .skill-item, .stat-box, .info-card, .tech-icon').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Animate number counters
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    let current = 0;
    const increment = target / 50; 
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target; 
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30); 
}

// Observe counters and skill bars
document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

document.querySelectorAll('.skill-progress').forEach(skill => {
    observer.observe(skill);
});

/* === CONTACT FORM (Connected to Google Sheets) === */
const contactForm = document.getElementById('contactForm');

// ❗ PASTE YOUR URL HERE
const scriptURL = 'https://script.google.com/macros/s/AKfycbw7WeoRY-bOQe-FPK9wixmR8cHBcCajHkLRAxD2j7YlrjQ44rolflaqNg4ZH1YoOo-V2A/exec';

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        // Show "Sending" state
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => response.text())
            .then(text => {
                try {
                    const data = JSON.parse(text);
                    if (data.result === 'success') {
                        submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
                        submitBtn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
                        contactForm.reset();
                    } else {
                        throw new Error(data.message || 'Submission failed. Please try again.');
                    }
                } catch {
                    throw new Error('Invalid server response.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                submitBtn.innerHTML = '<span>Error!</span> <i class="fas fa-times"></i>';
                submitBtn.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ff0844 100%)';
                alert('An error occurred: ' + error.message);
            })
            .finally(() => {
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            });
    });
}
/* === END OF CONTACT FORM === */

/* === SMOOTH SCROLL === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

/* === PROJECT CARD ANIMATION DELAY === */
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

/* === PAGE LOAD FADE-IN === */
window.addEventListener('load', () => {
    document.documentElement.style.opacity = '1';
});

// Add this to your CSS for the fade-in effect
/*
html {
    opacity: 0;
    transition: opacity 0.5s ease-in;
}
*/
