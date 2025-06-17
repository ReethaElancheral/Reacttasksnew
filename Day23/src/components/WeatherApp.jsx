import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../actions/weatherActions";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.weather);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    dispatch(fetchWeather(city));
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <form className="weather-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="weather-input"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="weather-button">
          Search
        </button>
      </form>

      {loading && <p className="loading-message">Loading weather...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {data && (
        <div className="weather-info">
          <h3>
            {data.name}, {data.sys.country}
          </h3>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
