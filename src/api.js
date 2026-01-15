const API_KEY = "BNEBKBQWN6BE7MQVLGL9STS6K";

export async function fetchWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Location not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
}
