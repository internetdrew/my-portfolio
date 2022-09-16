'strict mode';

const sections = document.querySelectorAll('section');
const arrow = document.getElementById('up-arrow');

const showArrow = function (entry) {
  console.log(entry[0].isIntersecting);
  if (entry[0].isIntersecting) arrow.style.opacity = 1;
  if (!entry[0].isIntersecting) arrow.style.opacity = 0;
};

const toggleArrow = function () {
  const observer = new IntersectionObserver(showArrow, { threshold: 1 });
  observer.observe(sections[0]);
};

const scrollToTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Event handlers
window.addEventListener('scroll', toggleArrow);
arrow.addEventListener('click', scrollToTop);
