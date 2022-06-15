// My Buttons
// const menuBtn = document.querySelector('.menu-btn')
// const menu  = document.querySelector('nav')
// // My inputs

// const search = document.querySelector('#search')
// function toggleMenu(){
//     menuBtn.classList.toggle('open')
//     menu.classList.toggle('open')
// }
// // clicking of the buttons
// menuBtn.addEventListener('click', toggleMenu)

const lastLocation = document.querySelector('#last-location')
const textReading = document.querySelector('#temp-reading')
const date = document.querySelector('#last-date')
const image = document.querySelector('img')


const local = localStorage.getItem("value")
lastLocation.textContent = local

textReading.textContent = localStorage.getItem('tempValue')
image.src = localStorage.getItem('image')
date.textContent = localStorage.getItem('date')
