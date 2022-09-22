'strict mode';

const header = document.querySelector('header');
const arrow = document.getElementById('up-arrow');
const form = document.getElementById('form');
const nameEl = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const menu = document.getElementById('menu-icon');

const capFirstLetter = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const showArrow = function (entry) {
  if (!entry[0].isIntersecting) arrow.style.display = 'block';
  if (entry[0].isIntersecting) arrow.style.display = 'none';
};

const observeHeader = function () {
  const observer = new IntersectionObserver(showArrow, {
    rootMargin: '-200px',
    // threshold: 1,
  });
  observer.observe(header);
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

// Event handlers
window.addEventListener('load', observeHeader);
arrow.addEventListener('click', scrollToTop);
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const inputs = [nameEl, email, message];

//   checkRequired(inputs);
//   const allInputsValid = checkInputValidity(inputs);

//   if (allInputsValid) form.submit();
// });
menu.addEventListener('click', () => menu.classList.toggle('move'));
