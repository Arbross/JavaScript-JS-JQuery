const btn = document.getElementById("btn");
const xhr = new XMLHttpRequest();

btn.addEventListener("click", (event) => {
    event.preventDefault();

    const search_city = document.getElementById("search-city");
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${search_city.value}&appid=c7ddc5e4eec2098deecc3642c7d61151`;
    
    search_city.value = "";

    xhr.open("GET", api_url);
    xhr.send();
});

xhr.onload = () => {
    const city = document.getElementById("city");
    const date = document.getElementById("date");
    const weather_type = document.getElementById("weather-type");
    const main_img = document.getElementById("main-img");
    const temperature = document.getElementById("temperature");
    const min_temperature = document.getElementById("min-temperature");
    const max_temperature = document.getElementById("max-temperature");
    const wind_speed = document.getElementById("wind-speed");

    let result = JSON.parse(xhr.responseText);

    console.log(`images/${result.weather[0].icon}.png`);

    main_img.src = `images/${result.weather[0].icon}.png`;
    main_img.style.width = '200%';
    city.textContent = result.name;
    date.textContent = result.sys.sunrise;
    weather_type.textContent = result.weather[0].main;
    temperature.textContent = Math.round(result.main.temp - 273) + " °C"; 
    min_temperature.textContent = "Min temperature " + Math.round(result.main.temp_min - 273) + " °C"; 
    max_temperature.textContent = "Max temperature " + Math.round(result.main.temp_max - 273) + " °C"; 
    wind_speed.textContent = "Wind speed " + result.wind.speed;


    const day = document.getElementById("day");
}
