const API_KEY = process.env.WEATHER_API_KEY;

export async function fetchWeather(location) {
  try {
    // Include current conditions and days to get moon phase
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current,days&key=${API_KEY}&contentType=json`
    );

    if (!response.ok) {
      throw new Error("Location not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}
