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

function togglePortfolioLink() {
  menu.classList.remove('open');

  nav.classList.toggle('hide');

  mainNav.classList.remove('cover-header');
  logo.classList.remove('logo-hide');
  messageIcon.classList.toggle('message-hiden');
}

function toggleContactLink() {
  menu.classList.remove('open');

  nav.classList.toggle('hide');
  messageIcon.classList.toggle('message-hiden');
  mainNav.classList.remove('cover-header');
  logo.classList.remove('logo-hide');
}

function toggleAboutLink() {
  menu.classList.remove('open');

  nav.classList.toggle('hide');
  messageIcon.classList.toggle('message-hiden');
  mainNav.classList.remove('cover-header');
  logo.classList.remove('logo-hide');
}
aboutLink.addEventListener('click', toggleAboutLink);
contactLink.addEventListener('click', toggleContactLink);

menu.addEventListener('click', toggleMenu);
portfolioLink.addEventListener('click', togglePortfolioLink);



