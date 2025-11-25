import React, { useState, useEffect } from "react";
import Navbar from "components/Navbars/CoachNavbar";
import Footer from "components/Footers/Footer.js";
import { listExercises, deleteExercise, updateExercise, createExercise } from "../services/apiexercise";
import yoga1Img from "assets/img/exercices/exercice1.jpg";
import weightImg from "assets/img/exercices/exercice2.jpg";
import karateImg from "assets/img/classes/girl.png.jpg";
import UpdateExerciseModal from "components/Modals/UpdateExerciseModal"; // adapte le chemin



export default function AddExercise() {
  const staticImages = [
    { name: "Yoga", src: yoga1Img },
    { name: "Weight", src: weightImg },
    { name: "Cardio", src: karateImg },
  ];

  const [exercises, setExercises] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
   const [showUpdateModal, setShowUpdateModal] = useState(false);
const [selectedExercise, setSelectedExercise] = useState(null);

  const [newExercise, setNewExercise] = useState({
    name: "",
  description: "",
  difficulty: "beginner",  // valeur par défaut compatible avec le schema
  targetMuscles: [],       // tableau vide au lieu de string
  defaultReps: 0,          // nombre au lieu de string
  mediaUrl: "",            // correspond au champ du backend
  category: "strength", 
  });
  
   
     

   const getExercises = async () => {
       try {
         await listExercises()
           .then((response) => {
             setExercises(response.data);
             console.log("exercises", response.data);
           })
           .catch((error) => {
             console.log("Error while fetching Exercises ", error);
           });
       } catch (error) {
         console.log("Error while fetching Exercises ", error);
       }
     };
       useEffect(() => {
    getExercises();
  }, []);
 
  const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "targetMuscles") {
    // convertir string séparée par virgule en tableau
    setNewExercise({ ...newExercise, targetMuscles: value.split(",").map(m => m.trim()) });
  } else if (name === "defaultReps") {
    setNewExercise({ ...newExercise, defaultReps: Number(value) });
  } else {
    setNewExercise({ ...newExercise, [name]: value });
  }
};
  

      
 const handleAddExercise = async (e) => {
  e.preventDefault();

  // Vérification des champs obligatoires
  if (!newExercise.name.trim() || !newExercise.description.trim()) return;

  try {
    // Appel de l'API pour créer l'exercice
     await createExercise({
              ...newExercise,
              image: newExercise.mediaUrl, // <-- backend attend 'image'
            });

    // Fermeture du modal
    setShowModal(false);

    // Réinitialisation de l'état avec les bons types et noms de champs
    setNewExercise({
      name: "",
      description: "",
      difficulty: "beginner",  // valeur par défaut compatible backend
      targetMuscles: [],       // tableau vide
      defaultReps: 0,          // nombre
      mediaUrl: "",            // correspond au backend
      category: "strength",    // valeur par défaut valide
    });

    // Rechargement de la liste
    getExercises();
  } catch (error) {
    console.log("Error while adding exercise", error);
  }
};

    


  const deleteExerciseById = async (id) => {
     if (!window.confirm("Are you sure you want to delete this exercise ?")) return;
      try {
        await deleteExercise(id)
        .then((response) => {
            
            console.log("exercise deleted");
            getExercises();
          })
          .catch((error) => {
            console.log("Error while calling deleting Exercise API ", error);
         });
      } catch (error) {
        console.log("Error while calling getExercises API ", error);
      }
    };
  



  const togglePopup = () => setShowPopup(!showPopup);

  

   
  return (
    <>
       <Navbar transparent />
      <div className="min-h-screen bg-gray-900 text-white p-6 mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-orange-500 ml-22 mt-6">Exercises List</h2>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-all mr-100 mt-3"
            onClick={() => setShowModal(true)}
          >
            ➕ Add An Exercise
          </button>
        </div>
<div className="overflow-x-auto block overflow-y-auto rounded-lg shadow-md w-full justify-center max-h-[50vh] ml-91">

  <table className="min-w-full bg-gray-800 text-white">
            <thead className="bg-green-700">
              <tr>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Nom</th>
                <th className="px-6 py-3 text-left">Difficulty</th>
                <th className="px-6 py-3 text-left">Target Muscles</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Repetitions</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise) => (
                <tr
                  key={exercise._id}
                  className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4">
                    {exercise.image ? (
                      <img
                        src={
                          exercise.image.startsWith("http")
                            ? exercise.image
                            : staticImages.find((img) => img.name === exercise.image)?.src
                        }
                        alt={exercise.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4">{exercise.name || "-"}</td>
                  <td className="px-6 py-4">{exercise.difficulty || "-"}</td>
                  <td className="px-6 py-4">{exercise.targetMuscles || "-"}</td>
                  <td className="px-6 py-4">{exercise.description || "-"}</td>
                  <td className="px-6 py-4">{exercise.defaultReps || "-"}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      className="bg-orange-500 text-white active:bg-orange-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    
  onClick={() => {
  console.log("Selected exercise:", exercise);
  setSelectedExercise(exercise);
  setShowUpdateModal(true);
}}

                    >
                      Update
                    </button>
                    <button
                      className="bg-orange-500 text-white active:bg-orange-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    
                      onClick={() => deleteExerciseById(exercise._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className=" fixed inset-0  flex items-center  justify-center bg-black bg-opacity-40 z-50 p-4 w-1/2  -mt-29 ml-33 mr-4">
                 

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg animate-fadeIn w-11/12 md:w-2/3 lg:w-1/2">

              <h2 className="text-xl font-semibold text-orange-500 mb-4 ml-1 w-full">Add Exercise</h2>
              <form onSubmit={handleAddExercise} className="flex flex-col gap-3 w-full">

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input type="text" name="name" placeholder="Exercise Name" value={newExercise.name}
            onChange={handleChange} className="border p-2 rounded bg-gray-700 text-black" required />

          <input type="text" name="difficulty" placeholder="Difficulty" value={newExercise.difficulty}
            onChange={handleChange} className="border p-2 rounded bg-gray-700 text-black" />

          <input
  type="text"
  name="targetMuscles"
  placeholder="Target Muscles"
  value={newExercise.targetMuscles.join(", ")}
  onChange={handleChange} className="border p-2 rounded bg-gray-700 text-black"
/>

<input
  type="number"
  name="defaultReps"
  placeholder="Repetitions"
  value={newExercise.defaultReps}
  onChange={handleChange} className="border p-2 rounded bg-gray-700 text-black"
/>

<input
  type="text"
  name="mediaUrl"
  placeholder="Image URL"
  value={newExercise.mediaUrl}
  onChange={handleChange} className="border p-2 rounded bg-gray-700 text-black"
/>
<input name="description" placeholder="Description" value={newExercise.description}
          onChange={handleChange} className="border p-2 rounded bg-gray-700 text-black" required />

        </div>

  
        

        <div className="flex justify-end gap-2 mt-3">
          <button type="button" className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
            onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-orange-500 rounded hover:bg-green-700">
            Add
          </button>
        </div>

      </form>
            </div>
          </div>
        )}
        {/* Update Exercise Modal */}
        {showUpdateModal && selectedExercise && (
          <UpdateExerciseModal
            isOpen={showUpdateModal}
            onClose={() => { setShowUpdateModal(false); setSelectedExercise(null); }}
            exercise={selectedExercise}
            onUpdated={getExercises}
          />
        )}
      </div>
      <Footer />
    </>
  );
}