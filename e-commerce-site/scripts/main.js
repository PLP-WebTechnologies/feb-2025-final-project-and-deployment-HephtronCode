// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamic Testimonials Rotation
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

// Rotate testimonials every 5 seconds
setInterval(rotateTestimonials, 5000);

// Form Validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', event => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields before submitting.');
    } else if (!validateEmail(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Email Validation Helper Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Search Functionality
const searchButton = document.getElementById('search-button');
const searchInput = document.querySelector('input[aria-label="Search"]');

searchButton.addEventListener('click', event => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (query) {
        alert(`Searching for: ${query}`);
        // Redirect to a search results page or handle search logic here
    } else {
        alert('Please enter a search term.');
    }
});

// Hero Section Animation
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    // Add animation classes after a slight delay
    setTimeout(() => {
        heroContent.classList.add('animate-fade-in');
        heroImage.classList.add('animate-slide-in');
    }, 500); // Delay for smooth effect
});

// Testimonial Carousel
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const slider = document.querySelector('.testimonial-slider');
    let currentIndex = 0;

    function moveSlider() {
        // Calculate the width of a single testimonial
        const testimonialWidth = testimonials[0].offsetWidth;

        // Move the slider to the next testimonial
        slider.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;

        // Increment the index or reset to 0 if at the end
        currentIndex = (currentIndex + 1) % testimonials.length;
    }

    // Automatically move the slider every 5 seconds
    setInterval(moveSlider, 5000);
});