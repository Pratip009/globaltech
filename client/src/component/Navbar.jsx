import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaShareSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services +", path: "/services" },
    { name: "Staffing Solutions", path: "/staffing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full font-outfit">
      {/* Top Header */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center px-6 py-4 bg-white shadow text-center sm:text-left">
        <Link
          to="/"
          className="w-full sm:w-auto text-center font-bold text-lg text-black hover:text-blue-800 transition duration-300"
        >
          GLOBAL TECH SERVICES
        </Link>

        <div className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:space-x-10 text-sm">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-800" />
            <div>
              <p className="font-semibold">info@globaltechservices.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <HiLocationMarker className="text-blue-800" />
            <div>
              <p className="font-semibold">United States | India | Canada</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-blue-800" />
            <div>
              <p className="text-xl font-bold">803–510–1029</p>
              <p className="font-semibold">(24 hours / 7 days)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-900 to-blue-600 px-6 py-3 text-white font-play">
        {/* Hamburger for Mobile */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex flex-grow justify-center gap-8 text-base font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-white"
              } hover:no-underline transition duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="hidden sm:flex items-center gap-2 bg-white text-black font-bold px-5 py-2 rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition duration-300"
        >
          <FaShareSquare />
          CONTACT US
        </Link>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg p-6 text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">Menu</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <FaTimes size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-base font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "text-orange-500"
                      : "text-black"
                  } hover:no-underline transition duration-300`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow-md transition duration-300"
                onClick={() => setSidebarOpen(false)}
              >
                <FaShareSquare className="inline mr-2" />
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
