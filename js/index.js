import './slideButtonControl.js'
import './slideControlDots.js'

const searchPopup = document.querySelector('.search-popup')
const searchButton = document.querySelector('.transparent-button-search')

const loginPopup = document.querySelector('.login-popup')
const loginButton = document.querySelector('.transparent-button-login')

const basketPopup = document.querySelector('.basket-popup')
const basketButton = document.querySelector('.transparent-button-basket')

searchButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  loginPopup.classList.remove('login-popup-open')
  basketPopup.classList.remove('basket-popup-open')
  searchPopup.classList.toggle('search-popup-open')
})

loginButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  searchPopup.classList.remove('search-popup-open')
  basketPopup.classList.remove('basket-popup-open')
  loginPopup.classList.toggle('login-popup-open')
})

basketButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  searchPopup.classList.remove('search-popup-open')
  loginPopup.classList.remove('login-popup-open')
  basketPopup.classList.toggle('basket-popup-open')
})

if (document.querySelector('#callback-form-button')) {
  const callbackFormButton = document.querySelector('#callback-form-button')
  const callbackForm = document.querySelector('.modal-container')
  const closeButton = document.querySelector('#modal-close')

  callbackFormButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    callbackForm.classList.add('modal-container-open')
  })

  closeButton.addEventListener('click', () => {
    callbackForm.classList.remove('modal-container-open')
  })
}
