/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  
  const [navbarOpen, setNavbarOpen] = React.useState(false);
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
     
      <nav
  className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-4 py-3 navbar-expand-lg bg-transparent transition-transform duration-300 "
  style={{ transform: `translateY(-${translate}px)` }}>

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
          >
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
            >
            </Link>
            <img
          className="logo"
          src={require("assets/img/logo.png").default}
          alt="..."
        />
           <button
  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent 
             rounded bg-transparent block lg:hidden outline-none focus:outline-none"
  type="button"
  onClick={() => setNavbarOpen(!navbarOpen)}
>
  <i className="fas fa-bars text-white text-3xl"></i>
</button>

          </div>
          <div
  className="hidden lg:flex flex-grow items-center"
>
            <ul className="flex flex-col  lg:flex-row items-center pl-20 justify-center mx-auto text-2xl font-bold text-gray-800">
  <li className="px-4">
    <Link to="/" className=" text-white hover:text-orange-500 transition-colors duration-200 text-lg ">
      Home
    </Link>
  </li>
 
  
  <li className="px-4">
    <Link to="/Team" className=" text-white hover:text-orange-500 transition-colors duration-200 text-lg ">
      Our team
    </Link>
  </li>
  <li className="px-4">
    <Link to="/Classes" className=" text-white hover:text-orange-500 transition-colors duration-200 text-lg ">
      Classes
    </Link>
  </li>
  <li className="px-4">
    <Link to="/Contact" className=" text-white hover:text-orange-500 transition-colors duration-200 text-lg ">
      Contact
    </Link>
  </li>
  <li className="px-4">
    <Link to="/auth/Login" className=" text-white hover:text-orange-500 transition-colors duration-200 text-lg ">
      Log in
    </Link>
  </li>
  <li className="px-4">
    <Link to="/Shop" className=" text-white hover:text-orange-500 transition-colors duration-200 text-lg ">
      Shop
    </Link>
  </li>
</ul>

            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                {/*<a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar"
                >
                  
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>*/}
              </li>
            </ul>
            <ul className="hidden lg:flex flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center ">
                <a
                  className="hover:text-orange-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <i className="text-current fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-orange-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                  <i className=" fab fa-instagram text-lg leading-lg text-current  " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-orange-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  <i className="text-current fab fa-youtube text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              {/*<li className="flex items-center">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                 <CiLogin />
Login
                </button>
              </li>*/}
            </ul>
          </div>
        </div>
        
{navbarOpen && (
  <div className="fixed inset-0 bg-black  pb-96 pt-96 opacity-80 z-50 flex flex-col transition-colors duration-200 items-center justify-center space-y-8 text-white text-2xl text-center font-bold pl-96 pr-96 lg:hidden ml-9 mt-480">

    <Link to="/" onClick={() => setNavbarOpen(false)} className="hover:text-orange-500">Home</Link>

    <Link to="/Team" onClick={() => setNavbarOpen(false)} className="hover:text-orange-500">Our team</Link>

    <Link to="/Classes" onClick={() => setNavbarOpen(false)} className="hover:text-orange-500">Classes</Link>

    <Link to="/Contact" onClick={() => setNavbarOpen(false)} className="hover:text-orange-500">Contact</Link>

    <Link to="/auth/Login" onClick={() => setNavbarOpen(false)} className="hover:text-orange-500">Log in</Link>

    <Link to="/Shop" onClick={() => setNavbarOpen(false)} className="hover:text-orange-500">Shop</Link>
  </div>
)}

      </nav>
    </>
  );
}
