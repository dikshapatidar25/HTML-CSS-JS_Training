// Scroll Reveal Effect for Dark Theme
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', revealSections);

function revealSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight - 100) {
      section.classList.add('show-section');
    }
  });
}

// CV Download Function
function downloadCV() {
  const link = document.createElement('a');
  link.href = 'CV.pdf'; // Replace with your CV file
  link.download = 'My_CV.pdf';
  link.click();
}

// Contact Form Submission
function submitForm(event) {
  event.preventDefault();
  alert('✅ Your message has been sent successfully!');
}