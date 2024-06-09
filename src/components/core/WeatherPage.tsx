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
  dt: number; // Add the dt field for the timestamp
}

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // create a function to handle the button when user will be click on the button
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
  // function to handle date
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };
  return (
    <section className="container mx-auto h-screen ">
      <h4 className="text-4xl font-bold text-center py-12 dark:text-white  ">
        Weather App using open weather API
      </h4>

      <div className="flex  flex-wrap justify-center items-center gap-3 px-32 ">
        <InputField
          onInputChange={setCity}
          placeholder="Enter the city name...."
        />
        {/* button to handle fetch data */}
        <button
          type="button"
          className="bg-blue-400 px-3 py-3 text-white rounded-md shadow-inner shadow-blue-800"
          onClick={handleFetchWeather}
        >
          Search
        </button>
      </div>
      {error && <p>{error}</p>}
      <div className="flex justify-center items-center m-12 leading-10  ">
        {/* all data fetching from the api */}
        {weatherData && (
          <div className="bg-gray-100 mb-12 h-fit dark:bg-gradient-to-b from-[#1d2627] to-[#201c25] dark:text-white p-12 shadow-inner rounded-lg shadow-black dark:shadow-white  w-fit">
            <div className="  ">
              <h3 className="text-2xl">
                City name:{' '}
                <span className="font-bold ">{weatherData.name}</span>
              </h3>
              <p className="text-2xl">
                Tempreture:{' '}
                <span className="font-bold">{weatherData.main.temp}°C</span>
              </p>
              <p className="text-2xl">
                Weather Discription{' '}
                <span className="font-bold">
                  {weatherData.weather[0].description}
                </span>{' '}
              </p>
              <p className="text-2xl">
                Humidity:{' '}
                <span className="font-bold">{weatherData.main.humidity}%</span>{' '}
              </p>
              <p className="text-2xl">
                Wind Speed:{' '}
                <span className="font-bold"> {weatherData.wind.speed} m/s</span>
              </p>
              <p className="text-2xl">
                Date and Time:{' '}
                <span className="font-bold"> {formatDate(weatherData.dt)}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
