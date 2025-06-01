//live server

const API_KEY = "f97e06dac70e1e784eb7b570c5d80758";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;

      document.querySelector("#weather").innerText = `도시: ${city}\n 날씨: ${weather} \n 온도: ${temp}°C`;
    });
}

function onGeoError() {
  alert("위치 정보를 찾을 수 없습니다. 날씨 정보를 표시할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
