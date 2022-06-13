// My Buttons
const menuBtn = document.querySelector('.menu-btn')
const menu  = document.querySelector('nav')
// My inputs
const humidity = document.querySelector('#humidity-result')
const pressure = document.querySelector('#pressure-result')
const headerLocation = document.querySelector('#header-location')
const data = document.querySelector('#date-taken')
const search = document.querySelector('#search')
const tempValue = document.querySelector('#temp-reading')
const tempMainValue = document.querySelector('#temp-texting')
const lastLocation = document.querySelector('#last-location')
const lastDate = document.querySelector('#last-date')
const cloudyText = document.querySelector('#cloud-text')
const indexText = document.querySelector('#Index-result')
const windText = document.querySelector('#wind-result')
const probabilityText = document.querySelector('#probability-result')
const image = document.querySelector('#new-Image')
const realFeel = document.querySelector('#real')
const input = document.querySelector('input')

function toggleMenu(){
    menuBtn.classList.toggle('open')
    menu.classList.toggle('open')
}
// clicking of the buttons
menuBtn.addEventListener('click', toggleMenu)




function getWeather(){
         let value = input.value
        fetch(`https://weatherdbi.herokuapp.com/data/weather/london`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.currentConditions.comment)
            cloudyText.textContent = data.currentConditions.comment
            tempMainValue.textContent = data.currentConditions.temp.c
            tempValue.textContent = data.currentConditions.temp.c
            humidity.textContent = data.currentConditions.humidity
            windText.textContent = `${data.currentConditions.wind.km} km`
            image.src = data.currentConditions.iconURL
        }) 
        .catch(err => console.error(err));
	
}


search.addEventListener('click',getWeather)
