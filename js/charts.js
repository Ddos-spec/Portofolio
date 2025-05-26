// charts.js - Chart.js initialization

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'UI/UX', 'Mobile'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 80, 75, 85, 80],
                backgroundColor: 'rgba(189, 147, 249, 0.2)',
                borderColor: 'rgba(189, 147, 249, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(189, 147, 249, 1)',
                pointRadius: 4
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        backdropColor: 'transparent',
                        color: 'rgba(255, 255, 255, 0.7)'
                    },
                    pointLabels: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            }
        }
    });
});
