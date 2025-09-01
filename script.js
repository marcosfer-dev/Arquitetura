const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');
let index = 0;

// Atualiza slide e dot ativo
function updateSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Próximo slide
document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % images.length; // vai para o próximo, volta ao início no final
  updateSlide();
});

// Slide anterior
document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length; // volta ao final se estiver no primeiro
  updateSlide();
});

// Clique nas bolinhas
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlide();
  });
});
