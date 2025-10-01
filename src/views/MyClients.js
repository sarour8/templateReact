import React from 'react'
import Navbar from "components/Navbars/CoachNavbar";
import Footer from "components/Footers/Footer.js";
import yogaImg from "assets/img/team/team1.jpg"
import memberImg from "assets/img/team/team3.jpg"

export default function MyBookings() {
  return (
    <>
      <div>
        <Navbar transparent />
        <br />

        {/* Container avec flex */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-16 px-6">

          {/* Booking 1 */}
          <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row w-full md:w-1/2">
            {/* Image */}
            <div className="md:w-1/3 w-full flex justify-center items-center bg-gray-700 p-2">
              <img
                src={yogaImg}
                alt="Yoga"
                className="w-3/4 h-28 object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 w-full p-4 flex flex-col justify-center text-center md:text-left space-y-2">
              <h2 className="text-xl font-bold text-white">AZIZ ELMAHER</h2>
              <p className="text-sm text-orange-500 font-medium">MONDAY, APRIL 4</p>
              <p className="font-medium text-white text-sm">10:00 AM</p>
              <p className="font-medium text-white text-sm">Yoga Session</p>
              <div className="mt-2 text-center md:text-left">
                <button className="text-white font-bold px-4 py-1 rounded bg-orange-500 hover:bg-orange-600 transition-colors duration-150 text-sm">
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Booking 2 */}
          <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row w-full md:w-1/2">
            {/* Image */}
            <div className="md:w-1/3 w-full flex justify-center items-center bg-gray-700 p-2">
              <img
                src={memberImg}
                alt="Stretch"
                className="w-3/4 h-28 object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 w-full p-4 flex flex-col justify-center text-center md:text-left space-y-2">
              <h2 className="text-xl font-bold text-white">SARRA BEN AROUS</h2>
              <p className="text-sm text-orange-500 font-medium">MONDAY, APRIL 5</p>
              <p className="font-medium text-white text-sm">12:30 AM</p>
              <p className="font-medium text-white text-sm">Stretch & Relax Session</p>
              <div className="mt-2 text-center md:text-left">
                <button className="text-white font-bold px-4 py-1 rounded bg-orange-500 hover:bg-orange-600 transition-colors duration-150 text-sm">
                  Contact
                </button>
              </div>
            </div>
          </div>

        </div>

        <br /><br /><br /><br />
        <Footer />
      </div>
    </>
  )
}


