import React from 'react'
import Navbar from "components/Navbars/ProfileNavbar.js";
import Footer from "components/Footers/Footer.js";
import { FaUser } from "react-icons/fa";

import yoga1Img from "assets/img/classes/yoga1.png"

export default function ClassDetails() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center bg-gray-700">
            <img
              src={yoga1Img}
              alt="Yoga"
              className="w-11/12 h-auto md:h-full object-cover rounded-lg m-4"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center text-center md:text-left space-y-4 mt-12">

            <h2 className="text-3xl font-bold text-white leading-snug">Yoga Flow</h2>
            <p className="text-md text-orange-500 font-medium">MONDAY, APRIL 4</p>
            <p className="font-semibold text-white">10:00 AM</p>

            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Overview</h3>
              <p className="text-white text-sm leading-relaxed">
                A 45-minute flow session designed to energize your body and calm your mind. This dynamic sequence combines fluid movement, strength-building poses, and mindful breathing to increase flexibility, improve balance, and boost overall vitality. Suitable for all levels, this class leaves you feeling strong, focused, and refreshed.
              </p>
            </div>

            {/* Details */}
            <ul className="text-white text-sm space-y-1">
              <li><span className="text-orange-500">Duration:</span> 50 min</li>
              <li><span className="text-orange-500">Starts:</span> 10:00 AM</li>
              <li><span className="text-orange-500">Level:</span> Beginner</li>
              <li><span className="text-orange-500">Coach:</span> Sarah L.</li>
            </ul>
<h3 className="text-white text-lg font-semibold mb-2">Description</h3>
            <p className="text-white text-sm ">
              This class is suitable for individuals with an advanced fitness level.
            </p>

            {/* Spots available */}
            <p className="text-white text-sm flex items-center space-x-2 mt-2">
              <FaUser className="text-orange-500" /> 
              <span>10 places available</span>
            </p>

            {/* Reserve button */}
            <div className="mt-4 text-center">
              <button
                className="text-white font-bold px-6 py-2 rounded bg-orange-500 hover:bg-orange-600 transition-colors duration-150"
              >
                Reserve a Spot
              </button>
            </div>

          </div>
        </div>
      </div>
      <br/>
      <br/>
      <Footer />
    </>
  )
}


