export default class ProductCard {
  constructor(product) {
    this.product = product
    this._container = this._createCardElement()
    this._button = this._container.querySelector('.card__button')

    this._button.addEventListener('click', this._onButtonClick.bind(this))
  }

  _createCardElement() {
    const card = createElement(`
            <div class="card">
                <div class="card__top">
                    <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
                    <span class="card__price">€${this.product.price.toFixed(2)}</span>
                </div>
                <div class="card__body">
                    <div class="card__title">${this.product.name}</div>
                    <button type="button" class="card__button">
                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                    </button>
                </div>
            </div>
        `)

    return card
  }

  _onButtonClick() {
    const event = new CustomEvent('product-add', {
      detail: this.product.id,
      bubbles: true
    })

    this._container.dispatchEvent(event)
  }

  get elem() {
    return this._container
  }
}

function createElement(html) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = html
  return wrapper.firstElementChild
}