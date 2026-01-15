import "./styles.css";
import { fetchWeather } from "./api";
import { processWeather } from "./weather";
import { renderWeather } from "./dom";

const form = document.getElementById("search-form");
const input = document.getElementById("location-input");

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const location = input.value.trim();
  if (!location) return;

  try {
    // Add loading state
    const weatherContainer = document.getElementById("weather");
    weatherContainer.innerHTML = `
      <div class="weather-card" style="text-align: center; padding: 50px;">
        <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: #667eea; margin-bottom: 20px;"></i>
        <p style="font-size: 1.2rem; color: #718096;">Loading weather data...</p>
      </div>
    `;

    const rawData = await fetchWeather(location);
    const weatherData = processWeather(rawData);
    renderWeather(weatherData);
  } catch (error) {
    const weatherContainer = document.getElementById("weather");
    weatherContainer.innerHTML = `
      <div class="weather-card" style="text-align: center; padding: 50px; background: #fff5f5; border: 2px solid #fc8181;">
        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e53e3e; margin-bottom: 20px;"></i>
        <p style="font-size: 1.2rem; color: #e53e3e; font-weight: 600;">Error loading weather data</p>
        <p style="color: #718096; margin-top: 10px;">Please check the location and try again.</p>
      </div>
    `;
  }
});

// Optional: Add enter key support and clear button functionality
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    form.dispatchEvent(new Event("submit"));
  }
});
