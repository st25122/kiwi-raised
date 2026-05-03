// grabs all the slides on the page
const slides = document.querySelectorAll('.slide')

// grabs the arrow buttons
const prevBtn = document.querySelector('.slider-btn.prev')
const nextBtn = document.querySelector('.slider-btn.next')

// tracks which slide is showing, starts at 0 (first one)
let currentSlide = 0

// shows the slide we want and hides the rest
function goToSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[index].classList.add('active')
}

// moves to the next slide, loops back to start if at the end
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length
  goToSlide(currentSlide)
}

// moves back a slide, loops to the end if at the start
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length
  goToSlide(currentSlide)
}

// only runs the slider if there are slides on this page
if (slides.length > 0) {
  nextBtn.addEventListener('click', nextSlide)
  prevBtn.addEventListener('click', prevSlide)
  // auto moves to next slide every 4 seconds
  setInterval(nextSlide, 4000)
}

// form validation for the contact page
const contactForm = document.querySelector('.contact-form')

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    // stops the page refreshing when you hit submit
    event.preventDefault()

    const name = document.querySelector('#name').value.trim()
    const email = document.querySelector('#email').value.trim()
    const message = document.querySelector('#message').value.trim()
    const errorBox = document.querySelector('.form-error')

    if (name === '') {
      errorBox.textContent = 'Please enter your name.'
      errorBox.style.display = 'block'
      return
    }

    if (email === '') {
      errorBox.textContent = 'Please enter your email.'
      errorBox.style.display = 'block'
      return
    }

    // checks the email looks like a real one
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      errorBox.textContent = 'That email doesnt look right.'
      errorBox.style.display = 'block'
      return
    }

    if (message === '') {
      errorBox.textContent = 'Dont forget to write a message.'
      errorBox.style.display = 'block'
      return
    }

    // everything passed so show success and clear the form
    errorBox.style.display = 'none'
    alert('Message sent, cheers!')
    contactForm.reset()
  })
}