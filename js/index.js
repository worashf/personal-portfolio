const menu = document.getElementById('hamburger');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav-link');
const mainNav = document.querySelector('.main-nav');
const messageIcon = document.getElementById('message-envelope');
const portfolioLink = document.getElementById('portfolio-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
function toggleMenu() {
  menu.classList.toggle('open');
  nav.classList.toggle('hide');
  mainNav.classList.toggle('cover-header');
  logo.classList.toggle('logo-hide');
  messageIcon.classList.toggle('message-hiden');
}




menu.addEventListener('click', toggleMenu);




