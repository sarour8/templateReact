import React from "react";

export default function Progress({ value }) {
  return (
    <div className="mb-3 w-full">
      <span className="font-bold text-white mr-2">Progress:</span>
      <div className="relative w-full h-5 bg-orange-500 rounded-full mt-2 overflow-hidden shadow-inner">
        {/* Partie remplie */}
        <div
          className="h-5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-l-full transition-all duration-700 flex items-center justify-end pr-2 text-xs font-bold text-white"
          style={{ width: `${value}%` }}
        >
          {value}%
        </div>
        {/* Le reste de la barre gris reste visible automatiquement */}
      </div>
    </div>
  );
}
