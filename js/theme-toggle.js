// theme-toggle.js - Theme and palette toggle logic

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const paletteToggle = document.getElementById('palette-toggle');
    const paletteMenu = document.getElementById('palette-menu');
    
    // Initialize theme toggle
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        document.body.classList.add('theme-light');
        themeToggle.innerHTML = '<i class="fas fa-sun text-white"></i>';
    } else {
        document.body.classList.remove('theme-light');
        themeToggle.innerHTML = '<i class="fas fa-moon text-white"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('theme-light')) {
            document.body.classList.remove('theme-light');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon text-white"></i>';
        } else {
            document.body.classList.add('theme-light');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun text-white"></i>';
        }
    });
    
    // Color palette toggle
    paletteToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        paletteMenu.classList.toggle('hidden');
    });
    
    document.addEventListener('click', function() {
        paletteMenu.classList.add('hidden');
    });
    
    const paletteOptions = document.querySelectorAll('#palette-menu a');
    paletteOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const theme = this.getAttribute('data-theme');
            document.body.className = `font-sans antialiased theme-${theme}`;
            localStorage.setItem('colorTheme', theme);
            paletteMenu.classList.add('hidden');
        });
    });
    
    // Apply saved color theme
    const savedColorTheme = localStorage.getItem('colorTheme');
    if (savedColorTheme) {
        document.body.className = `font-sans antialiased theme-${savedColorTheme}`;
    }
});
