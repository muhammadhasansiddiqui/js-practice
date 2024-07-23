// Select the necessary elements
let city = document.getElementById("city");
let country = document.getElementById("country");
let temprature = document.getElementById("temprature");
let weatherType = document.getElementById("weather-type");
let humidity = document.getElementById("humidity");
let clouds = document.getElementById("clouds");
let windSpeed = document.getElementById("wind-speed");
let feelsLike = document.getElementById("feels-like");
let weatherImg = document.getElementById("weather-img-div");
let weatherLocation = document.getElementById("weather-location");

// Display the current date
let displayDate = document.getElementById("date");
displayDate.innerHTML = moment().format("MMM Do YYYY");

// Show weather based on current location
navigator.geolocation.getCurrentPosition((location) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
    .then((res) => res.json())
    .then((res) => {
      city.innerHTML = res.name;
      country.innerHTML = res.sys.country;
      temprature.innerHTML = `${Math.round(res.main.temp)}°`;
      weatherType.innerHTML = res.weather[0].main;
      humidity.innerHTML = `${res.main.humidity}%`;
      clouds.innerHTML = `${res.clouds.all}%`;
      windSpeed.innerHTML = `${res.wind.speed}km/h`;
      feelsLike.innerHTML = `${Math.round(res.main.feels_like)}°`;

      // Weather images
      switch (true) {
        case (res.weather[0].id <= 232 && res.weather[0].id >= 200):
          weatherImg.innerHTML = `<img src="images/thunderstorms.svg" alt="thunderstorm" class="weather-image">`;
          break;
        case (res.weather[0].id >= 300 && res.weather[0].id <= 321):
          weatherImg.innerHTML = `<img src="images/drizzle.svg" alt="drizzle" class="weather-image">`;
          break;
        case (res.weather[0].id >= 500 && res.weather[0].id <= 531):
          weatherImg.innerHTML = `<img src="images/rainy-1.svg" alt="Rain" class="weather-image">`;
          break;
        case (res.weather[0].id >= 600 && res.weather[0].id <= 621):
          weatherImg.innerHTML = `<img src="images/snow.svg" alt="Snow" class="weather-image">`;
          break;
        case (res.weather[0].id == 701):
          weatherImg.innerHTML = `<img src="images/mist.svg" alt="Mist" class="weather-image">`;
          break;
        case (res.weather[0].id == 711):
          weatherImg.innerHTML = `<img src="images/smoke.svg" alt="Smoke" class="weather-image">`;
          break;
        case (res.weather[0].id == 721):
          weatherImg.innerHTML = `<img src="images/haze.svg" alt="Haze" class="weather-image">`;
          break;
        case (res.weather[0].id == 731 || res.weather[0].id == 761 || res.weather[0].id == 751):
          weatherImg.innerHTML = `<img src="images/dust.svg" alt="Dust" class="weather-image">`;
          break;
        case (res.weather[0].id == 741):
          weatherImg.innerHTML = `<img src="images/fog.svg" alt="Fog" class="weather-image">`;
          break;
        case (res.weather[0].id == 781):
          weatherImg.innerHTML = `<img src="images/tornado.svg" alt="Tornado" class="weather-image">`;
          break;
        case (res.weather[0].id >= 801 && res.weather[0].id <= 804):
          weatherImg.innerHTML = `<img src="images/cloudy.svg" alt="Clouds" class="weather-image">`;
          break;
        default:
          weatherImg.innerHTML = `<img src="images/clear-day.svg" alt="clear-day" class="weather-image">`;
      }
    })
    .catch((rej) => {
      console.log(rej);
    });
});

// Function to get weather by city name
function getWeather() {
  if (weatherLocation.value.trim()) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation.value}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
      .then((res) => res.json())
      .then((res) => {
        if (res.name) {
          city.innerHTML = res.name;
          country.innerHTML = res.sys.country;
          temprature.innerHTML = `${Math.round(res.main.temp)}°`;
          weatherType.innerHTML = res.weather[0].main;
          humidity.innerHTML = `${res.main.humidity}%`;
          clouds.innerHTML = `${res.clouds.all}%`;
          windSpeed.innerHTML = `${res.wind.speed}km/h`;

          // Weather images
          switch (true) {
            case (res.weather[0].id <= 232 && res.weather[0].id >= 200):
              weatherImg.innerHTML = `<img src="images/thunderstorms.svg" alt="thunderstorm" class="weather-image">`;
              break;
            case (res.weather[0].id >= 300 && res.weather[0].id <= 321):
              weatherImg.innerHTML = `<img src="images/drizzle.svg" alt="drizzle" class="weather-image">`;
              break;
            case (res.weather[0].id >= 500 && res.weather[0].id <= 531):
              weatherImg.innerHTML = `<img src="images/rainy-1.svg" alt="Rain" class="weather-image">`;
              break;
            case (res.weather[0].id >= 600 && res.weather[0].id <= 621):
              weatherImg.innerHTML = `<img src="images/snow.svg" alt="Snow" class="weather-image">`;
              break;
            case (res.weather[0].id == 701):
              weatherImg.innerHTML = `<img src="images/mist.svg" alt="Mist" class="weather-image">`;
              break;
            case (res.weather[0].id == 711):
              weatherImg.innerHTML = `<img src="images/smoke.svg" alt="Smoke" class="weather-image">`;
              break;
            case (res.weather[0].id == 721):
              weatherImg.innerHTML = `<img src="images/haze.svg" alt="Haze" class="weather-image">`;
              break;
            case (res.weather[0].id == 731 || res.weather[0].id == 761 || res.weather[0].id == 751):
              weatherImg.innerHTML = `<img src="images/dust.svg" alt="Dust" class="weather-image">`;
              break;
            case (res.weather[0].id == 741):
              weatherImg.innerHTML = `<img src="images/fog.svg" alt="Fog" class="weather-image">`;
              break;
            case (res.weather[0].id == 781):
              weatherImg.innerHTML = `<img src="images/tornado.svg" alt="Tornado" class="weather-image">`;
              break;
            case (res.weather[0].id >= 801 && res.weather[0].id <= 804):
              weatherImg.innerHTML = `<img src="images/cloudy.svg" alt="Clouds" class="weather-image">`;
              break;
            default:
              weatherImg.innerHTML = `<img src="images/clear-day.svg" alt="clear-day" class="weather-image">`;
          }

          weatherLocation.value = "";
        } else {
          Swal.fire({
            icon: "error",
            title: "Error...",
            text: "Enter Correct City Name!",
          });

          weatherLocation.value = "";
        }
      })
      .catch((rej) => {
        console.log(rej);
      });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error...",
      text: "Enter City Name!",
    });
  }
}

// Event listener for pressing Enter key
weatherLocation.addEventListener("keydown", (code) => {
  if (code.key === "Enter") {
    getWeather();
    weatherLocation.blur();
  }
});
