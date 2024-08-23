import { useState } from 'react';

import logo_light from '../../assets/logo.jpg';
import logo_dark from '../../assets/logo.jpg';
import toggle_light from '../../assets/day.png';
import toggle_dark from '../../assets/night.png';
import shopping_cart from '../../assets/Cart.png';
import shopping_cart_dark from '../../assets/Cart.png';
import insta from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import telegram from '../../assets/telegram.png';
import whatsapp from '../../assets/whatsapp.png';
import hamburger from '../../assets/humbargur.png';

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`w-full p-4 transition duration-500 ${theme === 'light' ? 'bg-gray-400 text-[#fff]' : 'bg-gray-800 text-[#C6D5D4]'}`}>
      <div className="flex items-center justify-between mx-auto max-w-screen-xl px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="rounded-full p-1 bg-blue-100 transition-transform duration-500 transform hover:scale-110">
            <img
              src={theme === 'light' ? logo_light : logo_dark}
              alt="Logo"
              className="w-10 cursor-pointer rounded-full"
            />
          </div>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {['HOME', 'SHOP', 'SOFTWARES', 'ABOUT US', 'CONTACT US'].map((item) => (
            <li key={item} className="relative group">
              <a
                href="#"
                className="text-lg font-medium transition duration-300 ease-in-out transform hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110"
              >
                {item}
              </a>
              <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-800 dark:group-hover:bg-blue-400 transition-all duration-500"></div>
            </li>
          ))}
        </ul>

        {/* Social Media Icons and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="flex space-x-2">
            {[insta, youtube, telegram, whatsapp].map((icon, index) => (
              <a key={index} href="#">
                <div className="p-2 rounded-full transition-transform duration-500 transform hover:scale-110 shadow-md">
                  <img 
                    src={icon} 
                    alt="Social Media Icon" 
                    className="w-6 text-white shadow-md" 
                  />
                </div>
              </a>
            ))}
          </div>
          <img
            src={theme === 'light' ? shopping_cart : shopping_cart_dark}
            alt="Shopping Cart"
            className="w-10 transition-transform duration-500 transform hover:scale-110"
          />
          <img
            onClick={toggleMode}
            src={theme === 'light' ? toggle_dark : toggle_light}
            alt="Toggle Icon"
            className="w-10 cursor-pointer transition-transform duration-500 transform hover:scale-110"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none p-2 rounded-full transition-transform duration-500 transform hover:scale-110 ${theme === 'light' ? 'bg-white text-black' : 'bg-white text-black'}`}
        >
          <img
            src={hamburger}
            alt="Menu"
            className={`w-8 ${theme === 'light' ? 'text-black' : 'text-black'}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center space-y-4 mt-4 border-t border-gray-200 pt-4">
          {['HOME', 'SHOP', 'SOFTWARES', 'ABOUT US', 'CONTACT US'].map((item) => (
            <li key={item} className="text-lg font-medium text-sm">
              <a
                href="#"
                className="block w-full text-center py-2 hover:text-blue-500 dark:hover:text-blue-400 hover:border-l-4 border-blue-500 pl-2 transition-all duration-300 ease-in-out"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons and Dark Mode Toggle in Mobile */}
        <div className="flex justify-between mt-4 px-4">
          <div className="flex space-x-2">
            {[insta, youtube, telegram, whatsapp].map((icon, index) => (
              <a key={index} href="#">
                <div className="p-2 rounded-full transition-transform duration-500 transform hover:scale-110 shadow-md">
                  <img 
                    src={icon} 
                    alt="Social Media Icon" 
                    className="w-4 text-white shadow-md" 
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            <img
              src={theme === 'light' ? shopping_cart : shopping_cart_dark}
              alt="Shopping Cart"
              className="w-7 transition-transform duration-500 transform hover:scale-110"
            />
            <img
              onClick={toggleMode}
              src={theme === 'light' ? toggle_dark : toggle_light}
              alt="Toggle Icon"
              className="w-7 cursor-pointer transition-transform duration-500 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
