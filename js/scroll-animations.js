// scroll-animations.js - GSAP scroll animations

document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Animate skill bars
    gsap.utils.toArray('.skill-progress').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        ScrollTrigger.create({
            trigger: bar,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(bar, {
                    width: width,
                    duration: 1.5,
                    ease: 'power2.out'
                });
            }
        });
    });
});
