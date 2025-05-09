// Burger Menu
const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.getElementById('mobile-menu');

burgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// FAQ Toggle
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const plus = button.querySelector('.plus');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      plus.textContent = '+';
    } else {
      answer.style.display = 'block';
      plus.textContent = '−';
    }
  });
});

// Testimonials
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function showSlide(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % cards.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showSlide(currentIndex);
}

// Auto slide
setInterval(nextSlide, 2000);

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter form');
const emailInput = newsletterForm.querySelector('input[type="email"]');

newsletterForm.addEventListener('submit', function(event) {
  if (!emailInput.value.includes('@')) {
    event.preventDefault();
    alert('Please enter a valid email address!');
  }
});