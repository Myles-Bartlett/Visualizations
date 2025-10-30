// Shared JavaScript functionality can be added here
document.addEventListener('DOMContentLoaded', function() {
    // Any shared initialization code
    console.log('BudgetViz application loaded');
    
    // Tooltip initialization
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
