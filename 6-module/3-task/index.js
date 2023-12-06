import createElement from '../../assets/lib/create-element.js'


export default class Carousel {
  constructor(slides) {
    this.slides = slides
    this.currentSlideIndex = 0
    this.render()
  }

  render() {
    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left" style="display: none">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map(slide => this.renderSlide(slide)).join('')}
        </div>
      </div>
    `)

    this.carouselInner = this.elem.querySelector('.carousel__inner')
    this.carouselArrows = {
      left: this.elem.querySelector('.carousel__arrow_left'),
      right: this.elem.querySelector('.carousel__arrow_right')
    }

    this.addEventListeners()
  }

  renderSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `
  }

  addEventListeners() {
    this.carouselArrows.left.addEventListener('click', this.prevSlide.bind(this))
    this.carouselArrows.right.addEventListener('click', this.nextSlide.bind(this))

    this.elem.addEventListener('click', event => {
      if (event.target.classList.contains('carousel__button')) {
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: event.target.closest('.carousel__slide').dataset.id,
          bubbles: true
        }))
      }
    })
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--
      this.updateCarousel()
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++
      this.updateCarousel()
    }
  }

  updateCarousel() {
    const slideWidth = this.elem.offsetWidth
    const translateX = -slideWidth * this.currentSlideIndex
    this.carouselInner.style.transform = `translateX(${translateX}px)`

    this.toggleArrows()
  }

  toggleArrows() {
    this.carouselArrows.left.style.display = this.currentSlideIndex === 0 ? 'none' : ''
    this.carouselArrows.right.style.display =
      this.currentSlideIndex === this.slides.length - 1 ? 'none' : ''
  }
}