const listPhoto = [
  './public/img/choupi1.jpeg',
  './public/img/choupi2.jpeg',
  './public/img/choupi3.jpeg',
  './public/img/choupi4.jpeg',
]

const btnNext = document.querySelector('.fa-circle-chevron-right')
const btnPrevious = document.querySelector('.fa-circle-chevron-left')
const btnPause = document.querySelector('.fa-pause')
const btnPlay = document.querySelector('.fa-play')
let img = document.querySelector('.player__picture > img')
let imgSrc = document.querySelector('img').getAttribute('src')
let arrayPhotoIndex = listPhoto.indexOf(imgSrc)
let interval = ''

const imgTiming = {
  duration: 1000,
}
const imgShowsUp = [{ opacity: 0 }, { opacity: 1 }]

btnNext.addEventListener('click', function () {
  next()
})

btnPrevious.addEventListener('click', function () {
  previous()
})

document.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowRight') {
    next()
  }
  if (event.key == 'ArrowLeft') {
    previous()
  }
})

btnPlay.addEventListener('click', function () {
  interval = setInterval(next, 1000)
})
btnPause.addEventListener('click', function () {
  clearInterval(interval)
})

const next = function () {
  if (arrayPhotoIndex === listPhoto.length - 1) {
    arrayPhotoIndex = 0
    img.setAttribute('src', listPhoto[arrayPhotoIndex])
  } else {
    arrayPhotoIndex++
    console.log(arrayPhotoIndex)
    img.setAttribute('src', listPhoto[arrayPhotoIndex])
  }
  document.getElementById('tunnel').animate(imgShowsUp, imgTiming)
}

const previous = () => {
  if (arrayPhotoIndex === 0) {
    arrayPhotoIndex = listPhoto.length - 1
    img.setAttribute('src', listPhoto[arrayPhotoIndex])
  } else {
    arrayPhotoIndex--
    console.log(arrayPhotoIndex)
    img.setAttribute('src', listPhoto[arrayPhotoIndex])
  }
  document.getElementById('tunnel').animate(imgShowsUp, imgTiming)
}
