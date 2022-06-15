// My Buttons
const menuBtn = document.querySelector('.menu-btn')
const menu  = document.querySelector('nav')
// My inputs

const search = document.querySelector('#search')
// const tempValue = document.querySelector('#temp-reading')
// const tempMainValue = document.querySelector('#temp-texting')
// const lastDate = document.querySelector('#last-date')
// const cloudyText = document.querySelector('#cloud-text')
// const indexText = document.querySelector('#Index-result')
// const windText = document.querySelector('#wind-result')
// const probabilityText = document.querySelector('#probability-result')
// const image = document.querySelector('#new-Image')
// const realFeel = document.querySelector('#real')
const input = document.querySelector('input')

function toggleMenu(){
    menuBtn.classList.toggle('open')
    menu.classList.toggle('open')
}
// clicking of the buttons
menuBtn.addEventListener('click', toggleMenu)




function getWeather(callback){
         let value = input.value
        //  const local = localStorage.setItem("value",value)
        fetch(`https://weatherdbi.herokuapp.com/data/weather/${value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // console.log(data.currentConditions.comment)
            let local = localStorage.setItem('value',data.region)
            let cloud = localStorage.setItem("cloudText",data.currentConditions.comment )
            // cloudyText.textContent = data.currentConditions.comment
            let temp = localStorage.setItem("tempValue",data.currentConditions.temp.c )
            // tempMainValue.textContent = data.currentConditions.temp.c
            // tempValue.textContent = data.currentConditions.temp.c
            let humidityValue = localStorage.setItem('humidity',data.currentConditions.humidity)
            // humidity.textContent = data.currentConditions.humidity
            let prob = localStorage.setItem('RainProb',data.currentConditions.precip)
            // probabilityText.textContent = data.currentConditions.precip
            let wind = localStorage.setItem('windValue',`${data.currentConditions.wind.km} km`)
            // windText.textContent = `${data.currentConditions.wind.km} km`
            let imageValue = localStorage.setItem('image', data.currentConditions.iconURL)
            // image.src = data.currentConditions.iconURL
            let date = localStorage.setItem("date",data.currentConditions.dayhour)

            // localStorage.setItem("region",`${data.currentConditions.temp.f} f`)

            if(data.currentConditions.temp.c > 35){
                localStorage.setItem("region","Very Hot")
            }else if(((data.currentConditions.temp.c) >= 30) && ((data.currentConditions.temp.c) < 35)){
                localStorage.setItem("region","Hot")
            }else if(((data.currentConditions.temp.c) >= 26) && ((data.currentConditions.temp.c) <= 29)){
                localStorage.setItem("region","Normal")
            }else if(((data.currentConditions.temp.c) >= 20) && ((data.currentConditions.temp.c) <= 25)){
                localStorage.setItem('region',"Warmly-Cold")
            }else if(((data.currentConditions.temp.c) <= 19)){
                localStorage.setItem('region',"Very Cold")
            }
        }) 
        .catch(err => console.error(err));
        setTimeout(() => {
             callback()
        }, 4500);
           
    }

    function loading(){
        if(input.value === ""){
            alert("Enter Location")
            localStorage.clear()
        }else{
             getWeather(get)
        }
    }
   function get(){
    window.location.assign('./src/newIndex.html')
   }

search.addEventListener("click",loading)
