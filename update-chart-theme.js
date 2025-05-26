document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Updated colors for dark themes (white instead of purple)
    const darkColors = {
        angleLines: 'rgba(255, 255, 255, 0.1)',
        grid: 'rgba(255, 255, 255, 0.1)',
        ticks: 'rgba(255, 255, 255, 0.7)',
        pointLabels: 'rgba(255, 255, 255, 0.7)',
        legendLabels: 'rgba(255, 255, 255, 0.7)',
        borderColor: 'rgba(255, 255, 255, 1)', // changed from purple to white
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // changed from purple to white with opacity
        pointBackgroundColor: 'rgba(255, 255, 255, 1)' // changed from purple to white
    };

    // Colors for light theme (black)
    const lightColors = {
        angleLines: 'rgba(0, 0, 0, 0.1)',
        grid: 'rgba(0, 0, 0, 0.1)',
        ticks: 'rgba(0, 0, 0, 0.7)',
        pointLabels: 'rgba(0, 0, 0, 0.7)',
        legendLabels: 'rgba(0, 0, 0, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)', // Tailwind blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)'
    };

    // Create chart instance
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'UI/UX', 'Mobile'],
            datasets: [{
                label: 'Skill Level',
                data: [75, 85, 85, 80, 80, 90],
                backgroundColor: darkColors.backgroundColor,
                borderColor: darkColors.borderColor,
                borderWidth: 2,
                pointBackgroundColor: darkColors.pointBackgroundColor,
                pointRadius: 4
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: darkColors.angleLines
                    },
                    grid: {
                        color: darkColors.grid
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        backdropColor: 'transparent',
                        color: darkColors.ticks
                    },
                    pointLabels: {
                        color: darkColors.pointLabels
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: darkColors.legendLabels
                    }
                }
            }
        }
    });

    // Function to update chart colors based on theme
    function updateChartColors(theme) {
        let colors = darkColors;
        if (theme === 'light') {
            colors = lightColors;
        }
        skillsChart.data.datasets[0].backgroundColor = colors.backgroundColor;
        skillsChart.data.datasets[0].borderColor = colors.borderColor;
        skillsChart.data.datasets[0].pointBackgroundColor = colors.pointBackgroundColor;

        skillsChart.options.scales.r.angleLines.color = colors.angleLines;
        skillsChart.options.scales.r.grid.color = colors.grid;
        skillsChart.options.scales.r.ticks.color = colors.ticks;
        skillsChart.options.scales.r.pointLabels.color = colors.pointLabels;
        skillsChart.options.plugins.legend.labels.color = colors.legendLabels;

        skillsChart.update();
    }

    // Detect current theme from body class
    function getCurrentTheme() {
        if (document.body.classList.contains('theme-light')) {
            return 'light';
        }
        // For dracula, solarized, monokai, dark, treat as dark
        return 'dark';
    }

    // Initial update
    updateChartColors(getCurrentTheme());

    // Animate label text changing between names with typing effect
    const labelNames = ['Fadjar Aryo Seto', 'Ddos-spec', 'setoooo14'];
    let currentLabelIndex = 0;
    const animatedNameElement = document.getElementById('animated-name');

            function typeText(text, element, callback) {
                let index = 0;
                element.textContent = '';
                const interval = setInterval(() => {
                    element.textContent += text.charAt(index);
                    index++;
                    if (index === text.length) {
                        clearInterval(interval);
                        setTimeout(callback, 2000); // pause after typing (increased duration)
                    }
                }, 150); // typing speed
            }

    function eraseText(element, callback) {
        let text = element.textContent;
        let index = text.length;
        const interval = setInterval(() => {
            element.textContent = text.substring(0, index - 1);
            index--;
            if (index === 0) {
                clearInterval(interval);
                setTimeout(callback, 500); // pause after erasing
            }
        }, 100); // erasing speed
    }

    function animateNames() {
        typeText(labelNames[currentLabelIndex], animatedNameElement, () => {
            eraseText(animatedNameElement, () => {
                currentLabelIndex = (currentLabelIndex + 1) % labelNames.length;
                animateNames();
            });
        });
    }

    if (animatedNameElement) {
        animateNames();
    }

    // Listen for theme changes (assuming theme toggle triggers class changes on body)
    const observer = new MutationObserver(() => {
        updateChartColors(getCurrentTheme());
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});
