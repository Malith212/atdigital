import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-purple-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3"> {/* Home Page */}
          <svg
            width="47"
            height="37"
            viewBox="0 0 47 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3404 0.888885H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888885ZM22.8257 5.46211L33.0937 22.009H13.101L22.8257 5.46211ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z"
              fill="white"
            />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            AT DIGITAL
          </span>
        </a>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          {menuOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        {/* Menu links */}
        <div
          className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-purple-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-purple-700 text-white">
            <li>
              <a href="/" className="block py-2 px-3 hover:underline md:p-0"> {/* Home Page */}
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="block py-2 px-3 hover:underline md:p-0"> {/* Services Page */}
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="block py-2 px-3 hover:underline md:p-0"> {/* About Us Page */}
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="block py-2 px-3 hover:underline md:p-0"> {/* Contact Us Page */}
                Contact Us
              </a>
            </li>
            <li>
              <a href="/careers" className="block py-2 px-3 hover:underline md:p-0"> {/* Careers Page */}
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
