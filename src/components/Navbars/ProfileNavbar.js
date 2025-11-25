/*eslint-disable*/
import React from "react";
import  { useState } from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [isActive, setIsActive] = useState(false);
      const [scrollY, setScrollY] = React.useState(0);
    
      React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
        // Limite la remontée à 100px
  const translate = Math.min(scrollY, 300);
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <img
          className="logo"
          src={require("assets/img/logo.png").default}
          alt="..."
        />
                  <ul className="flex flex-row flex-wrap items-center justify-center mx-auto text-lg font-bold text-white gap-4">

                    <li className="px-4">
            <Link to="/MyProfile" className=" text-white hover:text-blueGray-700 transition-colors duration-200 text-lg ">
              My Profile
            </Link>
          </li>
          <li className="px-4">
            <Link to="/BookClass" className=" text-white hover:text-blueGray-700 transition-colors duration-200 text-lg ">
              Book Class
            </Link>
          </li>
          <li className="px-4">
            <Link to="/MyBookings" className=" text-white hover:text-blueGray-700 transition-colors duration-200 text-lg ">
              My Bookings
            </Link>
          </li>
          <li className="px-4">
            <Link to="/Shop" className=" text-white hover:text-blueGray-700 transition-colors duration-200 text-lg ">
              Shop 
            </Link>
          </li>
          <li className="px-4">
            <Link to="/MyPlan" className=" text-white hover:text-blueGray-700 transition-colors duration-200 text-lg ">
              My Plan
            </Link>
          </li>
          </ul>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex bg-black rounded ">
             <button
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      className="flex items-center gap-2 bg-white hover:bg-gray active:bg-grey px-4 py-2 rounded shadow outline-none focus:outline-none transition-colors duration-150"
    >
      <CiLogout className={`text-lg ${isActive ? "text-white" : "text-black"} transition-colors duration-150`} />
      <Link to="/">
        <span className={`${isActive ? "text-white" : "text-black"} transition-colors duration-150`}>
          Logout
        </span>
      </Link>
    </button>

          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
