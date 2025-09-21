import React, { useState } from "react";
import Navbar from "components/Navbars/ProfileNavbar.js";
import Footer from "components/Footers/Footer.js";
import yogaImg from "assets/img/classes/class-detailsl.jpg"
import sportImg from "assets/img/classes/class-1.jpg"
import boxImg from "assets/img/classes/class-2.jpg"
import groupImg from "assets/img/classes/class-4.jpg"
import poidsImg from "assets/img/classes/class-5.jpg"

export default function BookClass() {
  const [reserves, setReserves] = useState([]);

  // Déclaration des séances en dehors de la fonction handleReserver
  const seances = [
    {
      id: 1,
      nom: "Yoga Relax",
      date: "2025-09-25",
      description: "Séance de yoga pour débutants, détente et respiration.",
      image: require("assets/img/classes/class-1.jpg").default,
    },
    {
      id: 2,
      nom: "HIIT Intensif",
      date: "2025-09-26",
      description: "Entraînement cardio haute intensité pour brûler des calories.",
      image: "https://images.unsplash.com/photo-1594737625785-0419a2d27f37?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      nom: "Renforcement Musculaire",
      date: "2025-09-27",
      description: "Travail du haut et du bas du corps avec poids léger.",
      image: "https://images.unsplash.com/photo-1594737625790-2d4e5e7d5c7e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleReserver = (id) => {
    if (!reserves.includes(id)) {
      setReserves([...reserves, id]);
      alert("Réservation réussie !");
    } else {
      alert("Vous avez déjà réservé cette séance.");
    }
  };

  return (
    <>
      <Navbar transparent />

      <div className="container mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto  ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={boxImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white text-orange-500">
                    CARDIO
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    INDOOR CYCLING
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto  ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={boxImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white text-orange-500">
                    CARDIO
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    INDOOR CYCLING
                  </p>
                </blockquote>
              </div>
            </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={sportImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="bg-grey fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold  text-orange-500">
                    STRENGTH
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    KETTLEBELL POWER
                  </p>
                </blockquote>
              </div>
            </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={yogaImg}
                className="w-full align-middle rounded-t-lg "
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-orange-500">
                    RELAXING
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    YOGA
                  </p>
                </blockquote>
              </div>
            </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={poidsImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-orange-500">
                    TRAINING
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    BOXING
                  </p>
                </blockquote>
              </div>
            </div>
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-grey-800">
                <img
                alt="..."
                src={groupImg}
                className="w-full align-middle rounded-t-lg"
              />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-orange-500">
                  STRENGTH
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    WIEGHTLIFTING
                  </p>
                
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <br/>
      <Footer />
    </>
  );
}

