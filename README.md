A simple React and TypeScript application to fetch and display weather data from the OpenWeather API. [Deplopy](https://weather-app-project-phi.vercel.app/),

API
useFetchData
Fetches weather data for a given city from the OpenWeather API.

Parameters:
city (string): The name of the city to fetch weather data for.
Returns:
An object containing weather data including temperature, weather description, humidity, wind speed, and the date and time of the weather data.
Components
Header
Displays the application logo, toggle button for dark/light mode, and navigation to the home page.

InputField
A reusable input component for capturing user input.

Props:
onInputChange (function): A callback function to handle input changes.
placeholder (string, optional): Placeholder text for the input field.
Weather
Fetches and displays weather data based on user input.

State:
city (string): The name of the city.
weatherData (object | null): The fetched weather data.
error (string | null): Error message if fetching fails.
ToggleButton
Allows the user to switch between dark mode and light mode.

Hooks
useFetchData
A custom hook to fetch data using Axios with error handling using try and catch.

Parameters:
url (string): The API endpoint to fetch data from.
options (object): Axios request configuration options.
Returns:
An object containing data, error, and loading state.
Technologies Used
React
TypeScript
TailwindCSS
React-Feather
Axios
##screenshot

<img width="1440" alt="Screenshot 2024-06-09 at 4 57 17 PM" src="https://github.com/supriya224/weather-app-project/assets/52038704/ecea1589-4fb6-4be1-8a81-01231c88cde3">
