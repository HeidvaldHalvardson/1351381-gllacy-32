if (document.querySelector('.slider')) {
  const preButton = document.querySelector('.pre-slider')
  const nextButton = document.querySelector('.next-slider')
  const body = document.querySelector('body')

  const backgroundColors = ['#FEAFC3', '#69A9FF', '#FCC850']

  const changeSlide = (prop) => {
    const slides = document.querySelectorAll('.slide-item')
    const sliderControls = document.querySelectorAll('.slider-dots-item')

    let currentSlideIndex

    Array.from(sliderControls).map((item, index) => {
      if (item.className.includes('current')) {
        currentSlideIndex = index
      }
    })

    let newCurrentSlideIndex

    if (prop === 'next') {
      newCurrentSlideIndex = currentSlideIndex + 1
      if (newCurrentSlideIndex > 2) {
        newCurrentSlideIndex = 0
      }
    } else if (prop === 'pre') {
      newCurrentSlideIndex = currentSlideIndex - 1
      if (newCurrentSlideIndex < 0) {
        newCurrentSlideIndex = 2
      }
    }

    slides[currentSlideIndex].classList.remove('slide-current')
    slides[currentSlideIndex].classList.add('slide')
    sliderControls[currentSlideIndex].classList.remove('current')

    slides[newCurrentSlideIndex].classList.remove('slide')
    slides[newCurrentSlideIndex].classList.add('slide-current')
    sliderControls[newCurrentSlideIndex].classList.add('current')
    body.style.backgroundColor = `${backgroundColors[newCurrentSlideIndex]}`
  }

  nextButton.addEventListener('click', () => changeSlide('next'))

  preButton.addEventListener('click', () => changeSlide('pre'))
}
