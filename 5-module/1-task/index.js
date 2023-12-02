function hideSelf() {
  const button = document.querySelector('.hide-self-button')
  button.addEventListener('click', function () {
    return button.setAttribute('hidden', true)
  })
}
