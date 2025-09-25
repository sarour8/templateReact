import React from 'react'
import Navbar from "components/Navbars/ProfileNavbar.js";
import Footer from "components/Footers/Footer.js";
import yogaImg from "assets/img/classes/yoga1.png"

export default function MyBookings() {
  return (
    <>
    
    <div>
      <Navbar transparent />
      <br/>
      <table className='text-center border mt-16 mx-auto w-11/12 md:w-1/2 '>
        
        <tbody>
        
        <tr className='text-center border  '>
              <td className='p-2 w-1/2 font-bold text-white '>
                monday
                <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row mt-4 ">

                  {/* Image */}
                  <div className="md:w-1/4 w-full flex justify-center items-center bg-gray-700 p-1">
                    <img
                      src={yogaImg}
                      alt="Yoga"
                      className="w-1/2 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3  w-full  p-4 flex flex-col justify-center text-center md:text-left space-y-2">
                    <h2 className="text-xl font-bold text-white">Yoga Flow</h2>
                    <p className="text-sm text-orange-500 font-medium">MONDAY, APRIL 4</p>
                    <p className="font-medium text-white text-sm">10:00 AM</p>


                    <div className="mt-2 text-center md:text-left">
                      <button
                        className="text-white font-bold px-4 py-1 rounded bg-orange-500 hover:bg-orange-600 transition-colors duration-150 text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                </div>
              </td>
            </tr>
            <tr className='text-center'>
              <td className='p-2  w-1/2  text-white font-bold'>
                monday
                <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row mt-4 ">

                  {/* Image */}
                  <div className="md:w-1/4 w-full flex justify-center items-center bg-gray-700 p-1">
                    <img
                      src={yogaImg}
                      alt="Yoga"
                      className="w-1/2 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 w-full p-4 flex flex-col justify-center text-center md:text-left space-y-2">
                    <h2 className="text-xl font-bold text-white">Yoga Flow</h2>
                    <p className="text-sm text-orange-500 font-medium">MONDAY, APRIL 4</p>
                    <p className="font-medium text-white text-sm">10:00 AM</p>


                    <div className="mt-2 text-center md:text-left">
                      <button
                        className="text-white font-bold px-4 py-1 rounded bg-orange-500 hover:bg-orange-600 transition-colors duration-150 text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <br/>
        <Footer />
    </div>
    </>
  )
}
