'strict mode';

const sections = document.querySelectorAll('section');
const arrow = document.getElementById('up-arrow');

const toggleArrow = function () {
  const showArrow = function (e) {
    if (e[0].isIntersecting) arrow.style.opacity = 1;
    if (!e[0].isIntersecting) arrow.style.opacity = 0;
  };

  const observer = new IntersectionObserver(showArrow);
  observer.observe(sections[0]);
};

// Event handlers
window.addEventListener('scroll', toggleArrow);
