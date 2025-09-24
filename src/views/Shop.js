import React, { useState } from "react";
import { useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import Card from "components/Cards/Card"
import Footer from "components/Footers/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import basketImg from "../assets/img/Shop/basket.png";
import pullImg from "../assets/img/Shop/image.png";
import bouteille1Img from "../assets/img/Shop/buttle3.png";
import buttle1Img from "../assets/img/Shop/buttle1.png";
import buttle2Img from "../assets/img/Shop/buttle2.png";
import glovesImg from "../assets/img/Shop/gloves.png";
import proteineImg from "../assets/img/Shop/proteines.png";
import tshirt1Img from "../assets/img/Shop/pull.png";
import tshirt2Img from "../assets/img/Shop/pull1.png";
import maskImg from "../assets/img/Shop/poids-de-dynamophilie.jpg";
import proteine1Img from "../assets/img/Shop/proteines-et-gymnastique.jpg";
import halterImg from "../assets/img/Shop/halter.png"
import shoesImg from "../assets/img/Shop/shoes.png"

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 🟠 Données variées
  const cards = [
    
    {
      id: 4,
      name: "Water Buttle",
       
      price: "25  Dt",
      rating: 3,
      image: bouteille1Img,
    },
    {
      id: 9,
      name: "STRENGTH",
      description: "WEIGHTLIFTING",
      price: "60 Dt ",
      rating: 4,
      image: proteineImg,
    },
    
    
    {
      id: 3,
      name: "STRENGTH",
      price: "40 Dt",
      rating: 5,
      image: tshirt2Img,
    },
    
    {
      id: 6,
      name: "STRENGTH",
      description: "WEIGHTLIFTING",
      price: "60 Dt",
      rating: 4,
      image: buttle1Img,
    },
    {
      id: 10,
      name: "STRENGTH",
      description: "WEIGHTLIFTING",
      price: "60 Dt ",
      rating: 4,
      image: tshirt1Img,
    },
    {
      id: 11,
      name: "STRENGTH",
      description: "WEIGHTLIFTING",
      price: "60 Dt ",
      rating: 4,
      image: proteine1Img,
    },
    
    
     {
      id: 7,
      name: "STRENGTH",
      description: "WEIGHTLIFTING",
      price: "60 Dt ",
      rating: 4,
      image: buttle2Img,
    },
    
    
    {
      id: 1,
      name: "CARDIO",
      description: "INDOOR CYCLING",
      price: "30 Dt",
      rating: 4,
      image: basketImg,
    },
    {
      id: 11,
      name: "STRENGTH",
      description: "WEIGHTLIFTING",
      price: "60 Dt",
      rating: 4,
      image: pullImg,
    },
    {
      id: 1,
      name: "CARDIO",
      description: "INDOOR CYCLING",
      price: "30 Dt",
      rating: 4,
      image: shoesImg,
    },
   
    {
      id: 8,
      name: "STRENGTH",
      description: "WEIGHTLIFTING",
      price: "60 Dt" ,
      rating: 4,
      image: glovesImg,
    },
    {
      id: 12,
      name: "STRENGTH",
      description: "WEIGHTLIFTING",
      price: "60 Dt" ,
      rating: 3,
      image: halterImg,
    },
    
    
    
    
  ];
 
 

  return (
    <>
     <IndexNavbar fixed />
     <main>
     
     <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
             backgroundImage: `url(${require("assets/img/discount.png").default})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
            </div>
          </section>
    <div className="container mx-auto mt-16">
      <div className="flex flex-wrap items-center">
        {cards.map((card) => (
          <>
           <Card key={card.id} card={card} />
          <div
          
            key={card.id}
            ref={ref}
            className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto"
          >
            <div className="relative group overflow-hidden rounded-lg shadow-lg mb-6">
              <img
                alt={card.name}
                src={card.image}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <h4 className="text-xl font-bold text-white">
                  {card.name}
                </h4>
                <p className="text-xl font-light mt-2 text-orange-500 font-bold">
                  {card.price}
                </p>

                {/* ⭐ Notes dynamiques */}
                <div className="flex justify-left mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i < card.rating ? "⭐" : "☆"}</span>
                  ))}
                </div>

                {/* 🔘 Bouton dynamique */}
                <div className="mt-12  ">
                <Link
                  to="#"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-orange-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  See More
                </Link>
                
              </div>
              </blockquote>
            </div>
          </div>
          </>
))}
      </div>

      {/* Modal dynamique */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-neutral-900 p-6 rounded-2xl shadow-xl relative max-w-md w-full text-center">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-56 object-contain rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-300 mb-4">
              {selectedProduct.description}
            </p>
            <p className="text-orange-400 font-bold text-lg mb-4">
              ${selectedProduct.price}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition">
              Commander
            </button>
          </div>
        </div>
      )}
    </div>
    </main>
    <br/>
    <br/>
    <Footer />
    </>
  );
}



