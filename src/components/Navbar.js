import React, { useState } from 'react';
import Link from 'react-scroll/modules/components/Link';

const Navbar = ({ className }) => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    // <nav className="bg-dark px-2">
    <nav className={nav ? 'nav active' : 'nav'}>
      <div className="container mx-auto flex flex-wrap items-center md:flex-nowrap">
        <Link to="home" className="" smooth={true} duration={2000}>
          {/* <img src={logo} alt="" /> */}
        </Link>
        <ul className="mt-4 flex flex-col text-gray-light md:mt-0 md:flex-row md:text-sm">
          <li className="border-b border-gray-300 p-4 md:border-0">
            <Link to="home" smooth={true} duration={2000}>
              Home
            </Link>
          </li>
          <li className="border-b border-gray-300 p-4 md:border-0">
            <Link to="about" smooth={true} duration={2000}>
              About
            </Link>
          </li>
          <li className="border-b border-gray-300 p-4 md:border-0">
            <Link to="menu" smooth={true} duration={2000}>
              Menu
            </Link>
          </li>
          <li className="border-b border-gray-300 p-4 md:border-0">
            <Link to="contact" smooth={true} duration={2000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
