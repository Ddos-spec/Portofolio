// form-handler.js - Contact form submission handling

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        setTimeout(() => {
            contactForm.reset();
            formSuccess.classList.remove('hidden');
            formError.classList.add('hidden');
            
            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 5000);
        }, 1000);
    });
});
