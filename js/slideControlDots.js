if (document.querySelector('.slider')) {
  const sliderControls = document.querySelector('.slider-dots-list')
  const sliderDots = document.querySelectorAll('.slider-dots-item')
  const body = document.querySelector('body')

  const backgroundColors = ['#FEAFC3', '#69A9FF', '#FCC850']

  sliderControls.addEventListener('click', (evt) => {
    const slides = document.querySelectorAll('.slide-item')
    let currentSlideIndex

    if (evt.target.classList.contains('slider-dots-item')) {
      for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].classList.remove('current')
      }
      evt.target.classList.add('current')

      Array.from(sliderDots).map((item, index) => {
        if (item.className.includes('current')) {
          currentSlideIndex = index
        }
      })

      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-current')
        slides[i].classList.add('slide')
      }

      slides[currentSlideIndex].classList.remove('slide')
      slides[currentSlideIndex].classList.add('slide-current')
      body.style.backgroundColor = `${backgroundColors[currentSlideIndex]}`
    }
  })
}
