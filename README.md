# Weather App

A responsive weather application built to practice **async/await** and **API integration** concepts from The Odin Project.

## What I Learned

**Asynchronous JavaScript**
- Using `async/await` syntax for cleaner asynchronous code
- Handling promises with try-catch blocks
- Managing API calls and waiting for responses

**API Integration**
- Making HTTP requests with the Fetch API
- Processing JSON data from external APIs
- Error handling for failed requests

**Code Organization**
- Separating concerns into modules (API, data processing, DOM rendering)
- Data transformation before rendering
- Event-driven architecture

## Features

- Search weather by city name
- Temperature toggle (Celsius/Fahrenheit)
- **Comprehensive weather data** from Visual Crossing API:
  - Temperature (current, feels like)
  - Weather conditions with description
  - Humidity and dew point
  - Wind (speed, direction, gusts)
  - Visibility and cloud cover
  - UV index and solar radiation
  - Atmospheric pressure
  - Precipitation data (amount, type, probability)
  - Snow data (when applicable)
  - Moon phase
  - Sunrise and sunset times
- Responsive design with animations
- Loading and error states

## Technologies

- JavaScript (ES6+) - async/await, modules
- Webpack - bundling and dev server
- Visual Crossing Weather API
- Font Awesome icons


## Project Structure

```
src/
├── index.js     # Entry point, event handlers
├── api.js       # API fetch calls
├── weather.js   # Data processing
├── dom.js       # UI rendering
└── styles.css   # Styling
```

---

*Built for [The Odin Project](https://www.theodinproject.com/)*