'strict mode';

const home = document.querySelector('.home');
const arrow = document.getElementById('up-arrow');
const form = document.getElementById('form');
const nameEl = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const menu = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

const capFirstLetter = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const showArrow = function (entry) {
  if (!entry[0].isIntersecting) arrow.classList.add('active');
  if (entry[0].isIntersecting) arrow.classList.remove('active');
};

const observeHome = function () {
  const observer = new IntersectionObserver(showArrow, {
    rootMargin: '-200px',
    // threshold: 1,
  });
  observer.observe(home);
};

const scrollToTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const showError = function (input, msg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  formControl.classList.add('error');
  small.textContent =
    input.id === 'email' ? `Valid email is required` : `${capFirstLetter(msg)}`;
};

const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  formControl.classList.add('success');
};

const checkRequired = function (inputArr) {
  inputArr.forEach(input => {
    if (!input.value.trim()) {
      showError(input, `${input.id} is required`);
    }

    if (input.value.trim()) {
      showSuccess(input);
    }
  });
};

const checkInputValidity = function (inputArr) {
  return inputArr.every(input =>
    input.parentElement.classList.contains('success')
  );
};

const handleForm = function (e) {
  e.preventDefault();
  const inputs = [nameEl, email, message];

  checkRequired(inputs);
  const allInputsValid = checkInputValidity(inputs);

  if (allInputsValid) form.submit();
};

const toggleMenu = function () {
  menu.classList.toggle('move');
  navbar.classList.toggle('open-menu');
};

// Event handlers
window.addEventListener('load', observeHome);
arrow.addEventListener('click', scrollToTop);
form.addEventListener('submit', handleForm);
menu.addEventListener('click', toggleMenu);
navbar.addEventListener('click', e => {
  if (e.target.className === 'nav-link') toggleMenu();
});
