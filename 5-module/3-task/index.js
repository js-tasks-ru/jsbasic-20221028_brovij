function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner')
  const carouselarrowLeft = document.querySelector('.carousel__arrow_left')
  const carouselArrowRight = document.querySelector('.carousel__arrow_right')

  const carouselSlide = document.querySelector('.carousel__slide').offsetWidth
  const slidesCount = carouselInner.children.length

  let position = 0

  carouselarrowLeft.addEventListener('click', () => {
    position += carouselSlide

    changeSlide()
    checkArrow()
  })

  carouselArrowRight.addEventListener('click', () => {
    position -= carouselSlide

    changeSlide()
    checkArrow()
  })

  function changeSlide() {
    carouselInner.style.transform = `translateX(${position}px)`
  }

  function checkArrow() {
    carouselarrowLeft.style.display = ''
    carouselArrowRight.style.display = ''

    if (position === 0) {
      carouselarrowLeft.style.display = 'none'
    }

    if (position <= -((slidesCount - 1) * carouselSlide)) {
      carouselArrowRight.style.display = 'none'
    }
  }

  checkArrow();
}
