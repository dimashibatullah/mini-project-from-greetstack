const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#btn");
const describe = document.querySelector(".describe");
const tempDisplay = document.querySelector(".temp");
const cityDisplay = document.querySelector(".city");
const humidityDisplay = document.querySelector(".humidityDisplay");
const windSpeedDisplay = document.querySelector(".wind-speedDisplay");
const imgWeather = document.querySelector(".img-weather");

let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "&appid=7c8d83da7eac6473a07fd276fcc6ed28";
async function displayWeather(kota) {
    const response = await fetch(apiURL + kota + apiKey);
    let data = await response.json();
    const weatherIcon = data.weather[0].icon;
    const city = data.name;
    const cuaca = data.weather[0].main;
    const temp = Math.round(data.main.temp) + " C";
    const humidity = data.main.humidity + "%";
    const windSpeed = data.wind.speed + "km/h";

    tempDisplay.innerHTML = temp;
    cityDisplay.innerHTML = city;
    humidityDisplay.innerHTML = humidity;
    windSpeedDisplay.innerHTML = windSpeed;
    imgWeather.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
}

searchButton.addEventListener("click", () => {
  displayWeather(searchInput.value);
});
