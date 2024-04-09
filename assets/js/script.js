'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

/**
 * form validation
 */
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', function(event) {
  let isValid = true;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      isValid = false;
      inputs[i].classList.add('error');
    } else {
      inputs[i].classList.remove('error');
    }
  }

  if (!isValid) {
    event.preventDefault();
  }
});




/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});
setTimeout(() => {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('video').pause(); // Pause the video
}, 2500);