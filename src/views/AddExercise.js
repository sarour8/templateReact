import React, { useState } from "react";
import Navbar from "components/Navbars/CoachNavbar";
import Footer from "components/Footers/Footer.js";
import yoga1Img from "assets/img/exercices/exercice1.jpg"
import weightImg from "assets/img/exercices/exercice2.jpg"
import karateImg from "assets/img/classes/girl.png.jpg"

export default function AddExercise() {
  // Exercices déjà enregistrés (exemple statique, tu peux remplacer par un fetch API)
  const [exercises, setExercises] = useState([
    {
      id: 1,
      name: "Pompes",
      description: "Renforce les pectoraux et les triceps",
      repititions: "3 séries de 15",
      difficulty: "beginner",
      targetMuscles: "Legs",
      image: yoga1Img,
    },
    {
      id: 2,
      name: "Squats",
      description: "Travaille les jambes et les fessiers",
      repititions: "3 séries de 15",
      difficulty: "intermediate",
      targetMuscles: "Chest",

      image: weightImg,
    },
    {
      id: 3,
      name: "Planche",
      description: "Exercice de gainage pour les abdominaux",
      repititions: "3 séries de 15",
      difficulty: "advanced",
      targetMuscles: "Chest, Arms",
      image: karateImg,
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newExercise, setNewExercise] = useState({
    name: "",
    description: "",
    repititions: "",
    difficulty: "",
    targetMuscles :"",
    image: "",
  });

  const togglePopup = () => setShowPopup(!showPopup);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExercise({ ...newExercise, [name]: value });
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (!newExercise.name.trim() || !newExercise.description.trim()) return;

    setExercises([
      ...exercises,
      { id: Date.now(), ...newExercise },
    ]);

    setNewExercise({ name: "", description: "", repititions:"" , difficulty:"", targetMuscles: "", image: "" });
    setShowPopup(false);
  };

  return (
    <>
      <Navbar transparent />

      <div className="container mx-auto px-4 mt-25 ml-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-white">Liste des Exercices</h2>
          
          <button  onClick={togglePopup} className="bg-orange-500 text-white active:bg-lightBlue-600 font-bold  uppercase text-sm px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
  ➕ Ajouter un Exercice
</button>
        </div>

        {/* Tableau des exercices */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Nom</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">difficulty</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Target Mucles</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Repititions</th> 
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th> 
                
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise) => (
                <tr key={exercise.id} className="border-b border-gray-700">
                  <td className="w-full lg:w-4/12 px-4">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="w-32 h-32 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4">{exercise.name}</td>
                  <td className="px-6 py-4">{exercise.difficulty}</td>
                  <td className="px-6 py-4">{exercise.targetMuscles}</td>
                  <td className="px-6 py-4">{exercise.description}</td>
                  <td className="px-6 py-4">{exercise.repititions}</td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <button className="bg-orange-500 text-white active:bg-orange-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      Update
                    </button>
                    <boutton className="bg-orange-500 text-white active:bg-orange-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Delete</boutton>
                    
                  </div>
                </td>
                  <br/>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Nouvel Exercice</h2>
            <form onSubmit={handleAddExercise} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Nom de l'exercice"
                value={newExercise.name}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newExercise.description}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="URL de l'image"
                value={newExercise.image}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={togglePopup}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
<br/>
<br/>
<br/>
      <Footer />
    </>
  );
}


