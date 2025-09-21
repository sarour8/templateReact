/*eslint-disable*/
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const productsData = [
  {
    id: 1,
    name: "T-shirt Sport",
    price: 25,
    rating: 4,
    image: require("assets/img/Shop/t-shirt.png").default,
    description: "T-shirt confortable et respirant pour vos séances de sport.",
  },
  {
    id: 2,
    name: "Bouteille d'eau",
    price: 15,
    rating: 5,
    image: require("assets/img/Shop/bouteille-1.png").default,
    description: "Bouteille d'eau de 1L, pratique et légère.",
  },
  {
    id: 3,
    name: "Protéines en poudre",
    price: 50,
    rating: 4,
    image: require("assets/img/Shop/proteine.png").default,
    description: "Protéines de haute qualité pour récupération musculaire.",
  },
  {
    id: 4,
    name: "Short Sport",
    price: 30,
    rating: 3,
    image: require("assets/img/Shop/short.png").default,
    description: "Short léger et respirant pour tous types de sports.",
  },
];

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-black min-h-screen py-12 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-10">
        Shop - Produits Sportifs
      </h1>

      {/* Grid produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-white">{product.name}</h2>
              <p className="text-orange-500 font-semibold text-lg">${product.price}</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`mr-1 ${i < product.rating ? "text-yellow-400" : "text-gray-500"}`}
                  />
                ))}
              </div>
              <button
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition-colors duration-200"
                onClick={() => setSelectedProduct(product)}
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal détails produit */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div className="flex flex-col md:flex-row">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full md:w-1/2 h-80 object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              />
              <div className="p-6 flex flex-col justify-between md:w-1/2">
                <div>
                  <h2 className="text-3xl font-bold text-orange-500 mb-4">{selectedProduct.name}</h2>
                  <p className="text-white text-lg mb-4">{selectedProduct.description}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`mr-1 ${i < selectedProduct.rating ? "text-yellow-400" : "text-gray-500"}`}
                      />
                    ))}
                  </div>
                  <p className="text-orange-500 font-bold text-2xl mb-4">${selectedProduct.price}</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded w-full transition-colors duration-200">
                  Commander
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
