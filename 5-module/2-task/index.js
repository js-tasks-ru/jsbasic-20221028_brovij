function toggleText() {
  let toggleTextButton = document.querySelector('.toggle-text-button')
  toggleTextButton.addEventListener('click', (event) => {
    let text = document.querySelector('#text')
    text.hidden = !text.hidden
  })
}
