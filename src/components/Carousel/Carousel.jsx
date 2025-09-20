/* eslint-disable */
import React, { useEffect } from "react";
import yogaImg from "assets/img/classes/class-1.jpg";
import cardioImg from "assets/img/classes/class-2.jpg";
import muscuImg from "assets/img/classes/class-4.jpg";
import bikingImg from "assets/img/classes/class-5.jpg";

const slides = [
  { title: "Yoga", description: "Relaxation, équilibre et bien-être.", image: yogaImg },
  { title: "Cardio", description: "Brûlez des calories en rythme.", image: cardioImg },
  { title: "Musculation", description: "Développez force et puissance.", image: muscuImg },
  { title: "Cycling", description: "Endurance et énergie maximale.", image: bikingImg },
];

export default function ClassesCarouselBootstrap() {
  // Assure l'initialisation du carousel même si React monte le composant après le chargement du DOM
  useEffect(() => {
    const el = document.getElementById("classesCarousel");
    if (el && typeof window !== "undefined" && window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(el, { interval: 3000, ride: "carousel" });
      return () => carousel.dispose();
    }
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Nos classes disponibles</h2>

      <div id="classesCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#classesCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((s, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img
                src={s.image}
                className="d-block w-100"
                alt={s.title}
                style={{ height: "420px", objectFit: "cover" }}
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ background: "rgba(0,0,0,0.45)", borderRadius: 6, padding: "0.5rem 0.75rem" }}
              >
                <h5>{s.title}</h5>
                <p className="mb-0">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#classesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#classesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
}
