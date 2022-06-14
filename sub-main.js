// My Buttons
const menuBtn = document.querySelector('.menu-btn')
const menu  = document.querySelector('nav')
// My inputs

const search = document.querySelector('#search')
function toggleMenu(){
    menuBtn.classList.toggle('open')
    menu.classList.toggle('open')
}
// clicking of the buttons
menuBtn.addEventListener('click', toggleMenu)



const humidity = document.querySelector('#humidity-result')
const pressure = document.querySelector('#pressure-result')
const headerLocation = document.querySelector('#header-location')
const date = document.querySelector('#date-taken')
const tempValue = document.querySelector('#temp-texting')
const cloudyText = document.querySelector('#cloud-text')
// const indexText = document.querySelector('#Index-result')
const windText = document.querySelector('#wind-result')
const probabilityText = document.querySelector('#probability-result')
const image = document.querySelector('img')
const realFeel = document.querySelector('#real')

// 
// 
const local = localStorage.getItem('value')
headerLocation.textContent = local


 cloudyText.textContent = localStorage.getItem('cloudText')
tempValue.textContent = localStorage.getItem('tempValue')
 // tempValue.textContent = data.currentConditions.temp.c
humidity.textContent = localStorage.getItem('humidity')
windText.textContent = localStorage.getItem('windValue')
image.src = localStorage.getItem('image')
date.textContent  = localStorage.getItem('date')
// date.textContent = data.currentConditions.dayhour
probabilityText.textContent = localStorage.getItem('RainProb')

realFeel.textContent = localStorage.getItem('region')
