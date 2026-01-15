// Helper function to convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Helper function to convert Fahrenheit to Celsius
export function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Helper function to get wind direction from degrees
export function getWindDirection(degrees) {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

// Helper function to get moon phase description
export function getMoonPhase(phase) {
  if (phase === 0) return 'New Moon';
  if (phase < 0.25) return 'Waxing Crescent';
  if (phase === 0.25) return 'First Quarter';
  if (phase < 0.5) return 'Waxing Gibbous';
  if (phase === 0.5) return 'Full Moon';
  if (phase < 0.75) return 'Waning Gibbous';
  if (phase === 0.75) return 'Last Quarter';
  return 'Waning Crescent';
}

export function processWeather(data) {
  const current = data.currentConditions;
  
  return {
    location: data.resolvedAddress,
    tempF: current.temp,
    tempC: fahrenheitToCelsius(current.temp),
    feelsLikeF: current.feelslike,
    feelsLikeC: fahrenheitToCelsius(current.feelslike),
    conditions: current.conditions,
    description: data.description,
    humidity: current.humidity,
    dew: current.dew,
    precip: current.precip,
    precipprob: current.precipprob,
    snow: current.snow,
    snowdepth: current.snowdepth,
    preciptype: current.preciptype,
    windSpeed: current.windspeed,
    windDir: current.winddir,
    windGust: current.windgust,
    visibility: current.visibility,
    uvIndex: current.uvindex,
    cloudCover: current.cloudcover,
    pressure: current.pressure,
    solarRadiation: current.solarradiation,
    solarEnergy: current.solarenergy,
    icon: current.icon,
    sunrise: current.sunrise,
    sunriseEpoch: current.sunriseEpoch,
    sunset: current.sunset,
    sunsetEpoch: current.sunsetEpoch,
    moonPhase: data.days?.[0]?.moonphase,
    severeRisk: current.severerisk,
    source: current.source,
  };
}
