export function renderWeather(weather) {
  const container = document.getElementById("weather");

  container.innerHTML = `
    <h2>${weather.location}</h2>
    <p>Temperature: ${weather.tempC}°C</p>
    <p>Condition: ${weather.conditions}</p>
    <p>Humidity: ${weather.humidity}%</p>
  `;
}
