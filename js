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
document.querySelectorAll('.skill-tag, .project-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        if (this.classList.contains('skill-tag')) {
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        } else if (this.classList.contains('project-card')) {
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
        }
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        if (this.classList.contains('skill-tag')) {
            this.style.boxShadow = '0 4px 6px rgba(52, 152, 219, 0.2)';
        } else if (this.classList.contains('project-card')) {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
        }
    });
});

// Project image modal functionality
const projectImages = document.querySelectorAll('.project-img');
projectImages.forEach(img => {
    img.addEventListener('click', function() {
        // Create modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        // Close modal on click
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Close modal on ESC key
        document.addEventListener('keydown', function closeModal(e) {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', closeModal);
            }
        });
    });
});

// Simple console log
console.log('Nural Rahmanli Portfolio loaded successfully!');