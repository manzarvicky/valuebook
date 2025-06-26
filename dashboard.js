// Initialize charts and sidebar functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle functionality
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('toggleSidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Submenu toggle functionality
    const submenuItems = document.querySelectorAll('.has-submenu');

    submenuItems.forEach(item => {
        item.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('open');
        });
    });

    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f0f0f0'
                }
            }
        }
    };

    // Sample data for Net Sale Chart
    const netSaleChart = new Chart(
        document.getElementById('net-sale-chart'),
        {
            type: 'line',
            data: {
                labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
                datasets: [{
                    label: 'Net Sale',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25.42],
                    borderColor: '#006d77',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Net Sale',
                        align: 'start',
                        font: {
                            size: 16,
                            weight: 'normal'
                        }
                    }
                }
            }
        }
    );

    // Net Purchase Chart
    const netPurchaseChart = new Chart(
        document.getElementById('net-purchase-chart'),
        {
            type: 'line',
            data: {
                labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
                datasets: [{
                    label: 'Net Purchase',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    borderColor: '#2a9d8f',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Net Purchase',
                        align: 'start',
                        font: {
                            size: 16,
                            weight: 'normal'
                        }
                    }
                }
            }
        }
    );

    // Flow Chart
    const flowChart = new Chart(
        document.getElementById('flow-chart'),
        {
            type: 'line',
            data: {
                labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
                datasets: [{
                    label: 'Flow Chart',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    borderColor: '#e9c46a',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Flow Chart',
                        align: 'start',
                        font: {
                            size: 16,
                            weight: 'normal'
                        }
                    }
                }
            }
        }
    );
});