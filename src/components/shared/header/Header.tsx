import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="relative bg-gray-200 ">
      <section className="container mx-auto  flex justify-between items-center ">
        <img
          width={100}
          src="https://www.kraftshala.com/static/91fae91e429948d7db90a40999c96093/83b9e/new_nav_logo.webp"
          alt=""
        />
        <ul>
          <Link to="/">
            <li className="text-gray-600 text-xl font-semibold hover:text-black">
              Home
            </li>
          </Link>
        </ul>
      </section>
    </header>
  );
}

export default Header;
