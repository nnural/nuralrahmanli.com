// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.querySelector('#skills');

let skillsAnimated = false;

function animateSkillBars() {
    if (!skillsAnimated && skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight - 100);
        
        if (isVisible) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                    bar.style.transition = 'width 1.5s ease-in-out';
                }, 100);
            });
            
            skillsAnimated = true;
        }
    }
}

// Trigger animation on scroll
window.addEventListener('scroll', animateSkillBars);

// Also trigger on page load if section is already visible
window.addEventListener('load', animateSkillBars);

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .main-nav a.active {
        background: #3498db;
        color: white !important;
    }
    
    .content-section {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Add hover effects to skill tags and cards
document.querySelectorAll('.skill-tag, .book-card, .project-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        if (this.classList.contains('skill-tag')) {
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        } else if (this.classList.contains('book-card') || this.classList.contains('project-card')) {
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
        }
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        if (this.classList.contains('skill-tag')) {
            this.style.boxShadow = '0 4px 6px rgba(52, 152, 219, 0.2)';
        } else if (this.classList.contains('book-card') || this.classList.contains('project-card')) {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
        }
    });
});

// Simple console log
console.log('Nural Rahmanli Portfolio loaded successfully!');