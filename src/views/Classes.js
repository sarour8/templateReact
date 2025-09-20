import React from "react";
import { Link } from "react-router-dom";

//import { motion } from "framer-motion";
import { useState } from "react";
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
//import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

import boxImg from "assets/img/classes/class-6.jpg"




export default function Classes() {
  
  return (
    <>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
             backgroundImage: `url(${require("assets/img/classes/class-6.jpg").default})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-80 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12 fadeInUp ">
                  <h2 className="text-white font-semibold text-5xl">
                    Discover our energizing workout sessions
                  </h2>
                  
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 w-full absolute  h-20-px bg-orange-500"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-orange-500 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
         <br/>
        {/*<section className="relative py-20">
          

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                alt="..."
                src={boxImg}
                className="w-full align-middle rounded-t-lg"
              />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    
                  </div>
                  <h3 className="text-3xl font-semibold text-white -mt-24">Strength Training</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>  */}
        <section className="class-timetable-section spad justify-center">
      <div className="container">
        <div className="row justify-center">
          <div className="text-center mb-16">
          <br/>
          
          <h4 className="text-4xl text-white font-bold mt-2 uppercase">Classes timetable</h4>
        </div>
          <br/>
          
        </div>

        <div className="row justify-center">
          <div className="col-lg-12 d-flex justify-center">
            <div className="class-timetable overflow-auto">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Ligne 1 */}
                  <tr>
                    <td className="class-time">6.00am - 8.00am</td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                      <h5>WEIGHT LOOSE</h5>
                      <span>RLefew D. Loee</span>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="fitness">
                      <h5>Cardio</h5>
                      <span>RLefew D. Loee</span>
                    </td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                      <h5>Yoga</h5>
                      <span>Keaf Shen</span>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="fitness">
                      <h5>Fitness</h5>
                      <span>Kimberly Stone</span>
                    </td>
                    <td className="dark-bg blank-td"></td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <h5>Boxing</h5>
                      <span>Rachel Adam</span>
                    </td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                      <h5>Body Building</h5>
                      <span>Robert Cage</span>
                    </td>
                  </tr>

                  {/* Ligne 2 */}
                  <tr>
                    <td className="class-time">10.00am - 12.00pm</td>
                    <td className="blank-td"></td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                      <h5>Fitness</h5>
                      <span>Kimberly Stone</span>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="workout">
                      <h5>WEIGHT LOOSE</h5>
                      <span>RLefew D. Loee</span>
                    </td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="motivation">
                      <h5>Cardio</h5>
                      <span>RLefew D. Loee</span>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="workout">
                      <h5>Body Building</h5>
                      <span>Robert Cage</span>
                    </td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="motivation">
                      <h5>Karate</h5>
                      <span>Donald Grey</span>
                    </td>
                    <td className="blank-td"></td>
                  </tr>

                  {/* Ligne 3 */}
                  <tr>
                    <td className="class-time">5.00pm - 7.00pm</td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                      <h5>Boxing</h5>
                      <span>Rachel Adam</span>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <h5>Karate</h5>
                      <span>Donald Grey</span>
                    </td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                      <h5>Body Building</h5>
                      <span>Robert Cage</span>
                    </td>
                    <td className="blank-td"></td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                      <h5>Yoga</h5>
                      <span>Keaf Shen</span>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <h5>Cardio</h5>
                      <span>RLefew D. Loee</span>
                    </td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                      <h5>Fitness</h5>
                      <span>Kimberly Stone</span>
                    </td>
                  </tr>

                  {/* Ligne 4 */}
                  <tr>
                    <td className="class-time">7.00pm - 9.00pm</td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <h5>Cardio</h5>
                      <span>RLefew D. Loee</span>
                    </td>
                    <td className="dark-bg blank-td"></td>
                    <td className="hover-bg ts-meta" data-tsmeta="fitness">
                      <h5>Boxing</h5>
                      <span>Rachel Adam</span>
                    </td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                      <h5>Yoga</h5>
                      <span>Keaf Shen</span>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="motivation">
                      <h5>Karate</h5>
                      <span>Donald Grey</span>
                    </td>
                    <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                      <h5>Boxing</h5>
                      <span>Rachel Adam</span>
                    </td>
                    <td className="hover-bg ts-meta" data-tsmeta="workout">
                      <h5>WEIGHT LOOSE</h5>
                      <span>RLefew D. Loee</span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section> 
        
        <br/>
        <br/>
        <br/>
              </main>
              <Footer />
            </>
          );
        }