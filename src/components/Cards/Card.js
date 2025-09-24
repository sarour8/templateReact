import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useRef} from "react";
function useOnScreen(ref) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return isVisible;
}

export default function Card({ card }) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto transition-all ${
        isVisible ? "fadeInUp" : ""
      }`}
    >
      <div className="relative group overflow-hidden rounded-lg shadow-lg mb-6">
        <img
          alt={card.name}
          src={card.image}
          className="w-full h-56 object-cover rounded-t-lg"
        />
        <blockquote className="relative p-8 mb-4">
          <h4 className="text-xl font-bold text-white">{card.name}</h4>
          <p className="text-xl font-light mt-2 text-orange-500 font-bold">{card.price}</p>
          <div className="flex justify-left mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < card.rating ? "⭐" : "☆"}</span>
            ))}
          </div>
          <div className="mt-12">
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
  );
}

