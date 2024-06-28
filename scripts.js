let slideIndex = 0;
let slides = document.querySelectorAll('.timeline-item');
let slideWidth = slides[0].offsetWidth;

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    document.querySelector('.timeline-slide').style.transform = `translateX(${slideIndex * -slideWidth}px)`;
}

// Inicialize a linha do tempo
moveSlide(0);

let timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    // Mostrar o conteúdo do item ao passar o mouse
    item.classList.add('active');
  });

  item.addEventListener('mouseout', () => {
    // Esconder o conteúdo do item ao sair do mouse
    item.classList.remove('active');
  });
});

