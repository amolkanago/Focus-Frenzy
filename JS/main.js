// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Cookie consent functionality
function acceptCookies() {
    document.getElementById('cookieConsent').style.display = 'none';
    localStorage.setItem('cookieConsent', 'accepted');
}

// Check if user has already accepted cookies
window.onload = function () {
    if (!localStorage.getItem('cookieConsent')) {
        document.getElementById('cookieConsent').style.display = 'block';
    }
}

// Add smooth scrolling for skip link
document.querySelector('.skip-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#main-content').focus();
    document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' });
});
