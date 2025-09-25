import React, { useState } from "react";
import Navbar from "components/Navbars/ProfileNavbar.js";
import Footer from "components/Footers/Footer.js";


import yoga1Img from "assets/img/classes/yoga1.png"
import weightImg from "assets/img/classes/weight.png.jpg"
import karateImg from "assets/img/classes/karate.png.jpg"
import groupImg from "assets/img/classes/group.png.jpg"
import group1Img from "assets/img/classes/group1.jpg"
import crossfitImg from "assets/img/classes/crossfit.jpg"
import yoga from "assets/img/classes/class-2.jpg"

import girlImg from "assets/img/classes/girl.png.jpg"
import boxImg from "assets/img/classes/box.png.jpg"
import pilateImg from "assets/img/classes/pilate.png.jpg"


import { Link } from "react-router-dom";


const weeklySessions = {
  Monday: [
    {
      title: "YOGA Flow",
      type: "Relaxing",
      duration: "50 min",
      start: "10:00 AM",
      level: "Beginner",
      image: yoga1Img,
    },
    {
      title: "Fitness Cardio",
      type: "Cardio",
      duration: "45 min",
      start: "06:00 PM",
      level: "All Levels",
      image: weightImg,
    },
    {
        title: "Stretch & Relax",
        type: "Recovery",
        duration: "40 min",
        start: "05:00 PM",
        level: "Beginner",
        image: yoga,
      },
    {
      title: "Group Training",
      type: "Mixed",
      duration: "50 min",
      start: "07:00 PM",
      level: "All Levels",
      image: groupImg,
    },
    
  ],
  Tuesday: [
    {
      title: "Box Training",
      type: "Strength",
      duration: "60 min",
      start: "05:00 PM",
      level: "Intermediate",
      image: boxImg,
    },
    {
        title: "Strength Training",
        type: "Strength",
        duration: "60 min",
        start: "11:00 AM",
        level: "Advanced",
        image: girlImg,
      },
      {
        title: "Pilate Class",
        type: "Strength",
        duration: "60 min",
        start: "09:00 AM",
        level: "Intermediated",
        image: pilateImg,
      },
  ],
  Wednesday: [
    {
      title: "Group Training",
      type: "Mixed",
      duration: "50 min",
      start: "07:00 PM",
      level: "All Levels",
      image: groupImg,
    },
    {
      title: "Karate Class",
      type: "strength",
      duration: "60 min",
      start: "07:00 PM",
      level: "Beginner",
      image: karateImg,
    },
    {
      title: "Fitness Cardio",
      type: "Cardio",
      duration: "90 min",
      start: "07:00 PM",
      level: "All Levels",
      image: girlImg,
    },
    {
      title: "Group Training",
      type: "Mixed",
      duration: "50 min",
      start: "07:00 PM",
      level: "All Levels",
      image: weightImg,
    }
  ],
  Thursday: [
    {
        title: "CrossFit Challenge",
        type: "Strength & Cardio",
        duration: "75 min",
        start: "10:00 AM",
        level: "Advanced",
        image: crossfitImg,
      },
    {
    title: "Yoga Flow",
      type: "Mixed",
      duration: "50 min",
      start: "07:00 AM",
      level: "All Levels",
      image: yoga1Img },
      {
        title: "Group Training",
      type: "Mixed",
      duration: "50 min",
      start: "07:00 PM",
      level: "All Levels",
      image: groupImg,
      },
      {
        title: "Karate Class",
      type: "strength",
      duration: "30 min",
      start: "08:00 PM",
      level: "Beginner",
      image: karateImg,
      }
  ],
  Friday: [
    {
      title: "Weight Training",
      type: "Strength",
      duration: "70 min",
      start: "08:00 PM",
      level: "Advanced",
      image: group1Img,
    },
    {
    title: "Yoga Flow",
      type: "Mixed",
      duration: "50 min",
      start: "07:00 AM",
      level: "All Levels",
      image: yoga1Img },
    {
        title: "CrossFit Challenge",
        type: "Strength & Cardio",
        duration: "75 min",
        start: "10:00 AM",
        level: "Advanced",
        image: boxImg,
      },
  ],
  Saturday: [
    {
      title: "Cardio Class",
      type: "Cardio",
      duration: "60 min",
      start: "07:30 PM",
      level: "All Levels",
      image: girlImg,

    },
    {
      title: "Pilate Class",
      type: "Mixed",
      duration: "50 min",
      start: "09:00 AM",
      level: "All Levels",
      image: pilateImg,
    },
    {
      title: "Group Training",
      type: "Mixed",
      duration: "50 min",
      start: "07:00 PM",
      level: "All Levels",
      image: groupImg,
    }
  ],
  Sunday: [
    {
      title: "Box Training",
      type: "Mixed",
      duration: "50 min",
      start: "07:30 AM",
      level: "All Levels",
      image: boxImg,

    },
    {
        title: "Yoga Flow",
        type: "Relaxing",
        duration: "50 min",
        start: "10:00 AM",
        level: "Beginner",
        image: yoga1Img,
      },
    {
      title: "Cardio Training",
      type: "Mixed",
      duration: "50 min",
      start: "07:00 PM",
      level: "All Levels",
      image: girlImg,
    }
  ],
};
export default function WeeklySessions() {
  const [currentDay, setCurrentDay] = useState("Monday");
  

      
    

  return (
    <>
    <Navbar/>
    <br />
    <br/>
    <div className="text-center mb-16 mt-16">
            <span className="text-orange-500 uppercase tracking-wider text-sm ">Our Sessions</span>
            <h2 className="text-4xl text-white font-bold mt-2">
          {currentDay}{" "}
        </h2>
    </div>
     
    <section className="block relative z-1 mt-12 ">
  <div className="container mx-auto ">
    {/* === pagination : ne change pas tes classes de wrapper === */}
    <div className="justify-center flex gap-2 mb-6 flex-wrap">
      
      {/* zone de pagination (boutons pour choisir le jour) */}
      <div className="w-full flex justify-center mb-4">
        {Object.keys(weeklySessions).map((day) => (
          <button
  key={day}
  onClick={() => setCurrentDay(day)}
  className={
    "w-12 h-12 flex items-center justify-center rounded-full mr-2 text-sm font-semibold border " +
    (currentDay === day
      ? "bg-orange-500 text-white border-orange-500"
      : "bg-white text-orange-500 border-orange-500 hover:bg-orange-100")
  }
>
  {day.slice(0,3)} {/* affiche seulement les 3 premières lettres ex: Mon, Tue */}
</button>
        ))}
      </div>
      <span className="text-l text-white ml-2">
            {weeklySessions[currentDay].length} session
            {weeklySessions[currentDay].length > 1 ? "s" : ""}
          </span>

      {/* === zone des cartes : on garde ta structure de wrapper === */}
      <div className="w-full lg:w-12/12 px-4  mt-16">
        <div className="flex flex-wrap">

          {/* si aucune session ce jour */}
          {(!weeklySessions[currentDay] || weeklySessions[currentDay].length === 0) ? (
            <div className="w-full px-4">
              <div className="relative w-full mb-6 rounded-lg text-center p-8 bg-white">
                <p className="text-gray-600">No sessions for {currentDay}</p>
              </div>
            </div>
          ) : (
            /* pour chaque session on réutilise EXACTEMENT tes classes internes */
            weeklySessions[currentDay].map((s, idx) => (
              <div className="w-full lg:w-4/12 px-4" key={idx}>
                <Link to="/ClassDetails">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150 text-center h-72 ">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="ps-item p-4 text-sm">
                      <h1>{s.title}</h1>
                      <div className="pi-price">
                        <h4>{s.type}</h4>
                        <ul className="text-xs space-y-1">
                          <li>Duration : {s.duration}</li>
                          <li>start : {s.start}</li>
                          <li>Level : {s.level}</li>
                        </ul>

                        <a
                          href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                          target="_blank"
                          rel="noreferrer"
                          className="enroll-btn"
                        >
                          Book Now
                        </a>

                        {/* j'ai converti `class` en `className` ici parce que React exige `className` — 
                            cela n'altère pas ton CSS (seulement nécessaire pour que la classe soit prise en compte) */}
                        <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  </div>
</section>

    <Footer />
  
    </>
  );
}
