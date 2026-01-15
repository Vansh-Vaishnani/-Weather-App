import "./styles.css";
import { fetchWeather } from "./api";
import { processWeather } from "./weather";
import { renderWeather } from "./dom";

const form = document.getElementById("search-form");
const input = document.getElementById("location-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const location = input.value;
  if (!location) return;

  const rawData = await fetchWeather(location);
  const weatherData = processWeather(rawData);
  renderWeather(weatherData);
});
