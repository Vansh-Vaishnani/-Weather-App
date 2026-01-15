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
- **API Key Security**: Using environment variables to protect sensitive API keys

**Environment Variables & Security**
- Storing API keys in `.env` files (never committed to Git)
- Using `dotenv-webpack` plugin to load environment variables
- Keeping sensitive credentials out of source code
- Following security best practices for API key management
- Understanding the importance of `.gitignore` for protecting secrets

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
- dotenv-webpack - environment variable management
- Visual Crossing Weather API
- Font Awesome icons


**⚠️ Important Security Notes:**
- Never commit your `.env` file to Git
- Never share your API key publicly
- The `.gitignore` file ensures `.env` stays private


## Project Structure

```
src/
├── index.js     # Entry point, event handlers
├── api.js       # API fetch calls (with env variables)
├── weather.js   # Data processing
├── dom.js       # UI rendering
└── styles.css   # Styling

Root files:
├── .env         # Environment variables (not committed)
├── .gitignore   # Ignores .env and sensitive files
└── webpack.config.js # Webpack config with dotenv plugin
```

## How Environment Variables Work in This Project

This project uses **environment variables** to securely store the API key:

1. **`dotenv-webpack`** plugin loads variables from `.env` file
2. **`process.env.WEATHER_API_KEY`** accesses the API key in `api.js`
3. **`.gitignore`** prevents `.env` from being committed to Git

**Code Example:**
```javascript
// api.js
const API_KEY = process.env.WEATHER_API_KEY; // Secure way
// ❌ const API_KEY = "abc123"; // Never hardcode API keys!
```

## Key Takeaways About API Security

- **Never hardcode API keys** directly in your source code
- **Use environment variables** for all sensitive credentials
- **Add `.env` to `.gitignore`** before your first commit
- **Rotate your API keys** if they're accidentally exposed
- **Use free tier wisely** - most APIs have rate limits

---

*Built for [The Odin Project](https://www.theodinproject.com/)*