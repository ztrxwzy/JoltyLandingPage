// JavaScript: Observa cuando los elementos con la clase "animate__animated" estén en el campo de visión del usuario
const animateElements = document.querySelectorAll('.animate__animated');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__' + entry.target.dataset.animation);
      observer.unobserve(entry.target);
    }
  });
});

animateElements.forEach(element => {
  observer.observe(element);
});
