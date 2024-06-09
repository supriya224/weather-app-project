/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      className=" relative w-16 h-8 flex items-center border dark:bg-gray-800 bg-zinc-300  cursor-pointer rounded-full p-2 transform duration-150 scale-100 "
      onClick={() => setDarkMode(!darkMode)}
    >
      <Moon className="text-white" size={18} />
      <div
        className="absolute bg-gray-800 p-1 dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      />
      <Sun className="ml-auto text-yellow-300" size={18} />
    </div>
  );
}

export default ThemeToggle;
