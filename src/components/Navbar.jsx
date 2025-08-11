import React, { useState } from "react";
import { FaApple, FaBars, FaTimes, FaSearch, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods",
    "TV & Home", "Entertainment", "Accessories", "Support"
  ];

  return (
    <nav className= "bg-white fixed top-0 left-0 w-full z-50 shadow-sm text-gray-800 text-sm font-normal">
      <div className="max-w-[1200px] mx-auto px-4 h-[44px] flex items-center justify-between">

        {/* Apple logo */}
        <div className="flex items-center">
          <FaApple className="text-lg cursor-pointer" />
        </div>

        {/* Center links (desktop only) */}
        <ul className="hidden md:flex space-x-11 items-center">
          {links.map((link, index) => (
            <li key={index} className="hover:text-black cursor-pointer transition">
              {link}
            </li>
          ))}
        </ul>

        {/* Icons + Mobile hamburger */}
        <div className="flex items-center gap-8 text-gray-800 font-light">
          <FaSearch className="text-sm cursor-pointer" />
          <FaShoppingBag className="text-sm cursor-pointer" />
          {/* Hamburger menu (mobile only) */}
          <button
            className="md:hidden text-xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f5f7] shadow-md px-4 py-3 text-sm space-y-2">
          {links.map((link, index) => (
            <div key={index} className="font-normal pb-2 hover:text-black cursor-pointer">
              {link}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;