/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { API_KEY, BASE_URL } from '../utils/constants';

export const useFetchData = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Use 'imperial' for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching the weather data:', error);
    throw error;
  }
};
