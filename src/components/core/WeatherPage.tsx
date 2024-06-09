/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useFetchData } from '../../hooks/UseFetchData';
// import { getWeatherByCity } from '';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  name: string;
}

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchWeather = async () => {
    try {
      const data = await useFetchData(city);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleFetchWeather}>Get Weather</button>

      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.main.temp}°C</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
