const search = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const secDiv = document.getElementById("secDiv");
const API_key = "a2d8501d934a4b62addb3a2e0e4de8d5";
search.addEventListener("click", () => {
  let city = cityName.value;
  cityName.value = "";
  fetchData(city);
});
async function fetchData(city) {
  try {
    console.log(API_key);
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    );
    let result = await res.json();
    console.log(result);
    if (result.message) {
      secDiv.innerHTML = `<h1>${city} ${result.message}</h1>`;
    }
    display(result);
  } catch (err) {}
}
async function fetchDataBycorditates(lati, long) {
  try {
    console.log(API_key);
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_key}&units=metric`
    );
    let result = await res.json();
    console.log(result);
    display(result);
  } catch (err) {}
}
function display({ name, main, wind,weather }) {
  secDiv.innerHTML = `
    <div id="weatherInfo">
                <p id="temp">${main.temp}°C</p><p id="discription">${weather[0].description}</p>
                <img src="https://openweathermap.org/img/w/${weather[0].icon}.png">
                
                <p id="city">${name}</p>
                <div class="otherInfo">
                    <div  class="wind">
                        <p>Wind</p>
                        <p>${wind.speed}m/s</p>
                    </div>
                    <div class="wind">
                        <p>Pressure</p>
                        <p>${main.pressure} ma</p>
                    </div>
                    <div class="wind">
                        <p>Humidity</p>
                        <p>${main.humidity}%</p>
                    </div>
                </div>
            </div>`;
}
document.getElementById("curLocation").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lati = position.coords.latitude;
    let long = position.coords.longitude;
    fetchDataBycorditates(lati, long);
  });
});
