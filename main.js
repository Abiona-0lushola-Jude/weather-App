let colorArray = [
    {
        color: 'blue'
    },
    {
        color: 'red'
    },
    {
        color:'darkgreen'
    },
    {
        color:'gray'
    },
    {
        color:'maroon'
    }
]
const btn = document.querySelector('#btn')
if (btn.addEventListener == true){
    getWeather()
}

btn.addEventListener('click', getWeather)
function getWeather(){
     
    const input = document.querySelector('#input').value
        fetch(`https://weatherdbi.herokuapp.com/data/weather/${input}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.currentConditions.iconURL
            document.querySelector('#humidity').textContent = data.currentConditions.humidity
            document.querySelector('#country').textContent = data.region
            document.querySelector('#wind').textContent = data.currentConditions.wind.km +'km'
            document.querySelector('#date').textContent = data.currentConditions.dayhour
            document.querySelector('#weatherText').textContent = data.currentConditions.comment
            document.querySelector('#tempOne').textContent = data.currentConditions.temp.c+'c'
            document.querySelector('#tempTwo').textContent = data.currentConditions.temp.f+'f'
            document.querySelector('#preci').textContent = data.currentConditions.precip
        }) 
        .catch(err => console.error(err));
	
}

