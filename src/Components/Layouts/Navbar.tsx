import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMobile((prev) => !prev);
  const handleDropdownEnter = () => setDropdownOpen(true);
  const handleDropdownLeave = () => setDropdownOpen(false);

  const dropdowndata = ["Pokhara", "Kathmandu", "Biratnagar"];

  return (
    <>
      {/* web view */}
      <nav className="max-w-7xl px-4 py-4 mx-auto flex flex-row items-center md:justify-between justify-evenly">
        {/* logoImage */}
        <img src={logo} alt="logoImage" />

        <ul className="md:flex md:flex-row gap-8 items-center hidden">
          <li className="cursor-pointer relative">
            <div
              className="flex flex-row items-center gap-2"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              Destinations <IoIosArrowDown />
            </div>

            {dropdownOpen && (
              <div
                className="absolute top-6 left-0 bg-gray-600 shadow-2xl min-w-[140px] text-white rounded-md px-2 py-1"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                {dropdowndata.map((item, index) => (
                  <div
                    key={index}
                    className="text-lg p-1 hover:bg-gray-500 rounded"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </li>
          <li className="cursor-pointer">Hotels</li>
          <li className="cursor-pointer">Bookings</li>
          <li className="cursor-pointer">Login</li>
          <li className="border-2 border-gray-500 py-2 px-4 rounded-lg cursor-pointer">
            Sign up
          </li>
          <li className="cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
              EN <IoIosArrowDown />
            </div>
          </li>
        </ul>

        <GiHamburgerMenu
          className="flex md:hidden size-7 cursor-pointer"
          onClick={toggleMenu}
        />
      </nav>

      {/* mobile view */}
      {isMobile && (
        <nav>
          <ul className="flex flex-col gap-8 py-4 items-center bg-gray-600 text-white">
            <li className="cursor-pointer relative"  onClick={toggleMenu}>
              <div
                className="flex flex-row items-center gap-2"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                Destinations <IoIosArrowDown />
              </div>

              {dropdownOpen && (
                <div
                  className="absolute top-6 left-0 bg-gray-600 shadow-2xl min-w-[140px] text-white rounded-md px-2 py-1"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  {dropdowndata.map((item, index) => (
                    <div
                      key={index}
                      className="text-lg p-1 hover:bg-gray-500 rounded"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>
              Hotels
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>
              Bookings
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>
              Login
            </li>
            <li
              className="border-2 border-gray-500 py-2 px-4 rounded-lg cursor-pointer"
              onClick={toggleMenu}
            >
              Sign up
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>
              <div className="flex flex-row gap-2 items-center">
                EN <IoIosArrowDown />
              </div>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
