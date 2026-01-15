import { celsiusToFahrenheit, getWindDirection, getMoonPhase } from "./weather";

let currentWeatherData = null;
let isCelsius = true; // Default to Celsius

// Function to get weather icon class based on condition
function getWeatherIcon(icon) {
  const iconMap = {
    "clear-day": "fa-sun",
    "clear-night": "fa-moon",
    "partly-cloudy-day": "fa-cloud-sun",
    "partly-cloudy-night": "fa-cloud-moon",
    cloudy: "fa-cloud",
    rain: "fa-cloud-rain",
    snow: "fa-snowflake",
    wind: "fa-wind",
    fog: "fa-smog",
  };
  return iconMap[icon] || "fa-cloud-sun";
}

// Function to toggle temperature unit
export function toggleTemperature() {
  isCelsius = !isCelsius;
  if (currentWeatherData) {
    renderWeather(currentWeatherData);
  }
}

export function renderWeather(weather) {
  currentWeatherData = weather; // Store for toggle functionality
  
  const container = document.getElementById("weather");
  
  // Determine which temperature to display
  const temp = isCelsius ? Math.round(weather.tempC) : Math.round(weather.tempF);
  const feelsLike = isCelsius ? Math.round(weather.feelsLikeC) : Math.round(weather.feelsLikeF);
  const dewPoint = isCelsius ? Math.round((weather.dew - 32) * 5 / 9) : Math.round(weather.dew);
  const unit = isCelsius ? "°C" : "°F";
  const toggleBtnText = isCelsius ? "Switch to °F" : "Switch to °C";

  container.innerHTML = `
    <div class="weather-card">
      <div class="weather-header">
        <div class="location-info">
          <h2 class="location"><i class="fas fa-map-marker-alt"></i> ${weather.location}</h2>
          <p class="description">${weather.description || weather.conditions}</p>
        </div>
        <button id="temp-toggle" class="temp-toggle">
          <i class="fas fa-thermometer-half"></i> ${toggleBtnText}
        </button>
      </div>

      <div class="main-weather">
        <div class="temp-display">
          <i class="fas ${getWeatherIcon(weather.icon)} weather-icon"></i>
          <div class="temp-info">
            <span class="temperature">${temp}${unit}</span>
            <span class="feels-like">Feels like ${feelsLike}${unit}</span>
          </div>
        </div>
        <div class="condition">${weather.conditions}</div>
      </div>

      <div class="weather-grid">
        <div class="weather-item">
          <i class="fas fa-tint item-icon"></i>
          <div class="item-content">
            <span class="item-label">Humidity</span>
            <span class="item-value">${weather.humidity}%</span>
          </div>
        </div>

        <div class="weather-item">
          <i class="fas fa-wind item-icon"></i>
          <div class="item-content">
            <span class="item-label">Wind Speed</span>
            <span class="item-value">${weather.windSpeed} mph</span>
          </div>
        </div>

        <div class="weather-item">
          <i class="fas fa-compass item-icon"></i>
          <div class="item-content">
            <span class="item-label">Wind Direction</span>
            <span class="item-value">${getWindDirection(weather.windDir)} (${weather.windDir}°)</span>
          </div>
        </div>

        ${weather.windGust ? `
        <div class="weather-item">
          <i class="fas fa-wind item-icon"></i>
          <div class="item-content">
            <span class="item-label">Wind Gust</span>
            <span class="item-value">${weather.windGust} mph</span>
          </div>
        </div>` : ''}

        <div class="weather-item">
          <i class="fas fa-eye item-icon"></i>
          <div class="item-content">
            <span class="item-label">Visibility</span>
            <span class="item-value">${weather.visibility} mi</span>
          </div>
        </div>

        <div class="weather-item">
          <i class="fas fa-sun item-icon"></i>
          <div class="item-content">
            <span class="item-label">UV Index</span>
            <span class="item-value">${weather.uvIndex}</span>
          </div>
        </div>

        <div class="weather-item">
          <i class="fas fa-cloud item-icon"></i>
          <div class="item-content">
            <span class="item-label">Cloud Cover</span>
            <span class="item-value">${weather.cloudCover}%</span>
          </div>
        </div>

        <div class="weather-item">
          <i class="fas fa-compress-arrows-alt item-icon"></i>
          <div class="item-content">
            <span class="item-label">Pressure</span>
            <span class="item-value">${weather.pressure} mb</span>
          </div>
        </div>

        <div class="weather-item">
          <i class="fas fa-temperature-low item-icon"></i>
          <div class="item-content">
            <span class="item-label">Dew Point</span>
            <span class="item-value">${dewPoint}${unit}</span>
          </div>
        </div>

        ${weather.precip ? `
        <div class="weather-item">
          <i class="fas fa-cloud-showers-heavy item-icon"></i>
          <div class="item-content">
            <span class="item-label">Precipitation</span>
            <span class="item-value">${weather.precip} in${weather.preciptype ? ` (${weather.preciptype.join(', ')})` : ''}</span>
          </div>
        </div>` : ''}

        ${weather.snow ? `
        <div class="weather-item">
          <i class="fas fa-snowflake item-icon"></i>
          <div class="item-content">
            <span class="item-label">Snow</span>
            <span class="item-value">${weather.snow} in</span>
          </div>
        </div>` : ''}

        ${weather.solarRadiation ? `
        <div class="weather-item">
          <i class="fas fa-solar-panel item-icon"></i>
          <div class="item-content">
            <span class="item-label">Solar Radiation</span>
            <span class="item-value">${weather.solarRadiation} W/m²</span>
          </div>
        </div>` : ''}

        ${weather.moonPhase !== undefined ? `
        <div class="weather-item">
          <i class="fas fa-moon item-icon"></i>
          <div class="item-content">
            <span class="item-label">Moon Phase</span>
            <span class="item-value">${getMoonPhase(weather.moonPhase)}</span>
          </div>
        </div>` : ''}
      </div>

      <div class="sun-times">
        <div class="sun-time">
          <i class="fas fa-sunrise sun-icon"></i>
          <span class="sun-label">Sunrise</span>
          <span class="sun-value">${weather.sunrise}</span>
        </div>
        <div class="sun-time">
          <i class="fas fa-sunset sun-icon"></i>
          <span class="sun-label">Sunset</span>
          <span class="sun-value">${weather.sunset}</span>
        </div>
      </div>
    </div>
  `;

  // Add event listener to the toggle button using event delegation
  const toggleBtn = document.getElementById("temp-toggle");
  if (toggleBtn) {
    // Remove any existing listeners by cloning the button
    const newToggleBtn = toggleBtn.cloneNode(true);
    toggleBtn.parentNode.replaceChild(newToggleBtn, toggleBtn);
    
    // Add fresh event listener
    newToggleBtn.addEventListener("click", toggleTemperature);
  }
}
