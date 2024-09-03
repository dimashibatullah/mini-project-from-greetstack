const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#btn");
const describe = document.querySelector(".describe");
const tempDisplay = document.querySelector(".temp");

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  let inputValue = searchInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=7c8d83da7eac6473a07fd276fcc6ed28&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const cuaca = data.weather[0].main;
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      tempDisplay.innerHTML = `${data.main.temp} C`;
      
    });
});
