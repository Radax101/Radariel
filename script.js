const bottomSection = document.querySelector('.bottom');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const { offsetWidth, offsetHeight } = bottomSection;

  const xPercent = 50 + (clientX / offsetWidth - 0.2) * 8;
  const yPercent = 50 + (clientY / offsetHeight - 0.2) * 8;

  bottomSection.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
});
