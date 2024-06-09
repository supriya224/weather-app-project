import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../../core/darkTheme/ThemeToggle';

function Header() {
  return (
    <header className="relative ">
      <section className="container mx-auto  flex justify-between items-center ">
        <img
          width={100}
          src="https://www.kraftshala.com/static/91fae91e429948d7db90a40999c96093/83b9e/new_nav_logo.webp"
          alt=""
        />

        <ul className="flex gap-12">
          <ThemeToggle />
          <Link to="/">
            <li className="text-gray-600 hover:text-gray-900 text-xl dark:text-white font-semibold dark:hover:text-gray-400">
              Home
            </li>
          </Link>
        </ul>
      </section>
    </header>
  );
}

export default Header;
