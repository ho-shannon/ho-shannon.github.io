document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '▲'; // Black up-pointing triangle;
backToTopButton.classList.add('back-to-top');
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});