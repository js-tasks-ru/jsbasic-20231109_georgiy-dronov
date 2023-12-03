function initCarousel() {
  const carousel = document.querySelector('.carousel__inner')
  const next = document.querySelector('.carousel__arrow_right')
  const prev = document.querySelector('.carousel__arrow_left')

  prev.style.display = 'none'
  
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth
  let currentSlide = 0

  function checkButtons() {
    if (currentSlide === 0) {
      prev.style.display = 'none';
    } else {
      prev.style.display = '';
    }

    if (currentSlide === (carousel.children.length - 1)) {
      next.style.display = 'none';
    } else {
      next.style.display = '';
    }
  }

  next.addEventListener('click', function () {
    currentSlide++;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    checkButtons();
  });

  prev.addEventListener('click', function () {
    currentSlide--;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    checkButtons();
  });
}
