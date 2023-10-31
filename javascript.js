
// Select DOM elements 
const navLinks = document.querySelectorAll('nav ul li a'); 
const sections = document.querySelectorAll('section'); 
const contactForm = document.querySelector('#contact-form'); 
const nameInput = document.querySelector('#name'); 
const emailInput = document.querySelector('#email'); 
const messageInput = document.querySelector('#message'); 
  
// Add event listeners to the navigation links to scroll to sections 
navLinks.forEach(link => { 
  link.addEventListener('click', e => { 
    e.preventDefault(); 
    const sectionId = link.getAttribute('href'); 
    const section = document.querySelector(sectionId); 
    section.scrollIntoView({behavior: 'smooth'}); 
  }); 
}); 
  
// Add event listener to the contact form to send email 
contactForm.addEventListener('submit', e => { 
  e.preventDefault(); 
  const name = nameInput.value; 
  const email = emailInput.value; 
  const message = messageInput.value; 
  const emailUrl = `mailto:your-email@example.com? 
  subject=New message from ${name}&body=${message} (${email})`; 
  window.location.href = emailUrl; 
});
