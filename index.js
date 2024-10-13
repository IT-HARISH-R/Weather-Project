let cityInput = document.getElementById('cityInput');
let searchBtn = document.getElementById('searchBtn');
let cityName = document.getElementById('cityName');
let weatherinfo = document.querySelector('.weather-info');
let loading = document.getElementById('loading');
let temperature = document.getElementById('temperature');
let weather = document.getElementById('weather');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    databaseInput(city);

})

async function databaseInput(city) {
    const url = `https://wttr.in/${city}?format=j1`;

    try {
        loading.style.display = 'block';

        const respontes = await fetch(url);

        if (!respontes.ok) {
            throw new Error('City Note Found');
        }
        const data = await respontes.json();
        displayValue(data);
        loading.style.display = 'none';


    } catch (error) { 
        loading.innerHTML = "Something went worng, try later"
        console.log(error.message);
    }
}

function displayValue(data) {
    const corentData = data.current_condition[0];
    cityName.textContent = data.nearest_area[0].areaName[0].value;
    temperature.textContent = `Temperature: ${corentData.temp_C}°C`;
    weather.textContent = `Weather: ${corentData.weatherDesc[0].value}`;
    humidity.textContent = `Humidity: ${corentData.humidity}%`;
    wind.textContent = `Wind Speed: ${corentData.windspeedKmph} Km/h`;
    weatherinfo.style.display = 'block';

}