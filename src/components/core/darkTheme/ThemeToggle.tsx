/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true); // state to  track the current them
  // effect to set the initial theme based on local storage value
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') setDarkMode(true); // If theme in localStorage is 'dark', set darkMode to true
  }, []);

  // Effect to update the document's class and localStorage based on darkMode state

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // Add 'dark' class to document
      localStorage.setItem('theme', 'dark'); // Save 'dark' theme in localStorage
    } else {
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from document
      localStorage.setItem('theme', 'light'); // Save 'light' theme in localStorage
    }
  }, [darkMode]);

  return (
    <div
      className=" relative w-16 h-8 flex items-center border dark:bg-gray-800 bg-zinc-500  cursor-pointer rounded-full p-2 transform duration-150 scale-100 "
      onClick={() => setDarkMode(!darkMode)}
    >
      {/* icon from react feather */}
      <Moon className="text-white" size={18} />
      <div
        className="absolute bg-gray-800 p-1 dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      />
      {/* icon from react feather */}
      <Sun className="ml-auto text-yellow-300" size={18} />
    </div>
  );
}

export default ThemeToggle;
