export function processWeather(data) {
  return {
    location: data.resolvedAddress,
    tempC: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    humidity: data.currentConditions.humidity,
  };
}
