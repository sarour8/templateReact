import React, { useState } from "react";
import Navbar from "components/Navbars/ProfileNavbar.js";
import Footer from "components/Footers/Footer.js";
import yogaImg from "assets/img/classes/class-detailsl.jpg"
import sportImg from "assets/img/classes/class-1.jpg"
import boxImg from "assets/img/classes/class-2.jpg"
import groupImg from "assets/img/classes/class-4.jpg"
import poidsImg from "assets/img/classes/class-5.jpg"
import { Link } from "react-router-dom";



export default function WeeklySessions() {
  const weeklySessions = {
    Monday: [
      {
        title: "Cardio Blast",
        type: "Cardio",
        duration: "45 min",
        start: "09:00 AM",
        level: "Intermediate",
        image: boxImg,
      },
      {
        title: "Strength Training",
        type: "Strength",
        duration: "60 min",
        start: "11:00 AM",
        level: "Advanced",
        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      },
    ],
    Tuesday: [
      {
        title: "Yoga Flow",
        type: "Relaxing",
        duration: "50 min",
        start: "10:00 AM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26",
      },
      {
        title: "HIIT Express",
        type: "Cardio",
        duration: "30 min",
        start: "05:00 PM",
        level: "Advanced",
        image: "https://images.unsplash.com/photo-1594737625785-c0f67d3e4b6e",
      },
    ],
    Wednesday: [
      {
        title: "Pilates Core",
        type: "Strength",
        duration: "40 min",
        start: "08:30 AM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
      },
    ],
    Thursday: [
      {
        title: "Boxing Class",
        type: "Combat",
        duration: "60 min",
        start: "06:00 PM",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07c",
      },
    ],
    Friday: [
      {
        title: "Zumba Dance",
        type: "Cardio",
        duration: "50 min",
        start: "07:00 PM",
        level: "All levels",
        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      },
    ],
    Saturday: [
      {
        title: "CrossFit Challenge",
        type: "Strength & Cardio",
        duration: "75 min",
        start: "10:00 AM",
        level: "Advanced",
        image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
      },
    ],
    Sunday: [
      {
        title: "Stretch & Relax",
        type: "Recovery",
        duration: "40 min",
        start: "05:00 PM",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1602192106321-6a32e1f5dba3",
      },
    ],
  };

  return (
    <>
    <Navbar/>
    <div className="pb-20 -mt-36 ">
      <div className="container mx-auto px-4">
        {/* Boucle sur les jours */}
        {Object.entries(weeklySessions).map(([day, sessions]) => (
          <div key={day} className="mb-12">
            {/* Titre du jour */}
            <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
              {day}
            </h2>

            <div className="flex flex-wrap">
              {sessions.map((session, index) => (
                <div
                  key={index}
                  className="lg:pt-12 w-full md:w-4/12 px-4 text-center"
                >
                  <div className="relative hover:-mt-4 border flex flex-col min-w-0 break-words text-white w-full mb-8 shadow-lg rounded-lg bg-gray-800">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="px-4 py-5 flex-auto">
                     

                      {/* Titre de séance */}
                      <h6 className="text-xl font-semibold">{session.title}</h6>
                      {/* Description */}
                      <p className="mt-2 mb-4 text-white">{session.desc}</p>

                      {/* Bouton réserver */}
                      <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                        RESERVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <section className="block relative z-1 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link to="/auth/register">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 text-center ">
                      <img
                  src={yogaImg}
                  alt="Class drop-in"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                      <div className="col-lg-4 col-md-8">
                        <div className="ps-item">
                        <h1>Class drop-in</h1>
                        <div className="pi-price">
                            <h2>30 Dt</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <div className="mt-12">
                            <a
                              href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                              target="_blank"
                              className="enroll-btn"
                            >
                              Enroll Now
                            </a>
                          </div>

                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                  </div>

                </div>
                  </Link>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link to="/auth/register">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 text-center">
                      <div className="col-lg-4 col-md-8">
                        <div className="ps-item">
                        <h1>12 Month unlimited</h1>
                        <div className="pi-price">
                            <h2>300 Dt</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <div className="mt-12">
                            <a
                              href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                              target="_blank"
                              className="enroll-btn"
                            >
                              Enroll Now
                            </a>
                          </div>

                        <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                    </div>
                  </div>

                </div>
                  </Link>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  
                  <Link to="">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 text-center">
                      <div className="col-lg-4 col-md-8">
                        <div className="ps-item">
                        <h1>6 Month unlimited</h1>
                        <div className="pi-price">
                            <h2> 160 Dt</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Free riding</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Month to mouth</li>
                            <li>No time restriction</li>
                        </ul>
                        <div className="mt-12">
                            <a
                              href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                              target="_blank"
                              className="enroll-btn"
                            >
                              Enroll Now
                            </a>
                            
                          </div>
                        {/*<a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>*/}
                    </div>
                  </div>

                </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
  
    </>
  );
}
