/* eslint-disable react/button-has-type */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/function-component-definition */

import React, { useState } from 'react';
import { useFetchData } from '../../hooks/UseFetchData';
import InputField from './input/InputField';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  wind: {
    speed: number;
  };
  name: string;
}

const Weather: React.FC = () => {
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
    <section className="relative">
      <h1 className="text-4xl font-bold text-center py-12">Weather App</h1>

      <div className="flex justify-center items-center">
        <InputField onInputChange={setCity} placeholder="Enter city name" />

        <button
          type="button"
          className="bg-blue-400 px-3 py-3 rounded-md shadow-inner shadow-blue-800"
          onClick={handleFetchWeather}
        >
          Search
        </button>
      </div>

      {error && <p>{error}</p>}
      <div>
        {weatherData && (
          <div className="flex">
            <h2>{weatherData.name}</h2>
            <p>{weatherData.main.temp}°C</p>
            <p>{weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
