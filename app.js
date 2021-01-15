// Import resourses.
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Do animation.
container.addEventListener('mousemove', e => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 35;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 35;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener(`mouseenter`, () => {
  card.style.transition = 'none';
});

//Animate Out
container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
