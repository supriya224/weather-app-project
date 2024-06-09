import { Link } from 'react-router-dom';
import ThemeToggle from '../../core/darkTheme/ThemeToggle';

function Header() {
  return (
    <header className="container mx-auto w-auto ">
      <section className="px-3 flex justify-between items-center  ">
        {/* kraftshala logo */}
        <img
          width={100}
          src="https://www.kraftshala.com/static/91fae91e429948d7db90a40999c96093/83b9e/new_nav_logo.webp"
          alt=""
          loading="lazy"
        />

        <ul className="flex gap-7 items-center justify-center ">
          {/* toggle theme */}
          <ThemeToggle />
          <Link to="/">
            {/* link the home page */}
            <li className="text-gray-600 hover:text-gray-900 text-lg dark:text-white font-semibold dark:hover:text-gray-400">
              Home
            </li>
          </Link>
        </ul>
      </section>
    </header>
  );
}

export default Header;
