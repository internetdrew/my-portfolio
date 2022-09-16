'strict mode';

const header = document.querySelector('header');
const arrow = document.getElementById('up-arrow');
const form = document.getElementById('form');
const nameEl = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const showArrow = function (entry) {
  if (!entry[0].isIntersecting) arrow.style.opacity = 1;
  if (entry[0].isIntersecting) arrow.style.opacity = 0;
};

const toggleArrow = function () {
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
  small.textContent = msg;
};

const showsuccess = function (input) {};

const checkRequired = function (inputArr) {
  inputArr.forEach(input => {
    if (!input.value.trim()) {
      showError(input, `${input.id} is required`);
      return;
    }

    if (input.value.trim()) {
      showSuccess(input);
    }
  });
};

// Event handlers
window.addEventListener('scroll', toggleArrow);
arrow.addEventListener('click', scrollToTop);
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([nameEl, email, message]);

  return;
  form.submit();
});
