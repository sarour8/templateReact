import React, { useState,useCallback, useEffect } from "react";
import Navbar from 'components/Navbars/CoachNavbar';
import Footer from "components/Footers/Footer.js";
import { createPopper } from "@popperjs/core";
import { addWorkoutPlan, deleteWorkoutPlan,updateWorkoutPlan, listWorkoutPlans, getMembers } from "../services/apiworkoutPlan";
import { listExercises } from "../services/apiexercise";
import yoga1Img from "assets/img/exercices/exercice1.jpg"
import weightImg from "assets/img/exercices/exercice2.jpg"
import karateImg from "assets/img/classes/girl.png.jpg"

export default function AddProgram() {
  const staticImages = [
  { name: "Yoga", src: yoga1Img },
  { name: "Weight", src: weightImg },
  { name: "Cardio", src: karateImg },
  
];
  const [programs, setPrograms] = useState([]);
  const [members, setMembers] = useState([]);
    const [exercises, setExercises] = useState([]); // ✅ liste d’exercices
  const [searchExercise, setSearchExercise] = useState("");
  const [searchMember, setSearchMember] = useState("");
  const [searchByProgramId, setSearchByProgramId] = useState({});
    const [selectedMember, setSelectedMember] = useState(null); 



  const [showModal, setShowModal] = useState(false);
  

  const [newProgram, setNewProgram] = useState({
    title: "",
    description: "",
    duration: "",
    image: "",
    assignedTo: [],
    exercises: [],
    createdBy: "68c0bb1b48f3d23d4d1cd6a0"
  });

 

  const handleProgramChange = (e) => {
    setNewProgram({ ...newProgram, [e.target.name]: e.target.value });
  };
  const getPrograms = async () => {
    try {
      await listWorkoutPlans()
        .then((response) => {
          setPrograms(response.data.plans);
          console.log("programs", response.data.plans);
        })
        .catch((error) => {
          console.log("Error while fetching workout plans ", error);
        });
    } catch (error) {
      console.log("Error while fetching workout plans ", error);
    }
  };
  const getAllMembers = useCallback (async () => {
      try {
        await getMembers().then((response) => {    
          setMembers(response.data);
          console.log(response.data);
        
        });
  
        
      } catch (error) {
        console.log("Error: ", error);
        
      }
    }, []);
    const getAllExercises = useCallback(async () => {
    try {
      const response = await listExercises();
      setExercises(response.data);
    } catch (error) {
      console.log("Error while fetching exercises", error);
    }
  }, []);
  useEffect(() => {
    getPrograms();
    getAllMembers();
    getAllExercises(); 
  }, []);
  
 const filteredMembers = members.filter(m =>
  (`${m.firstName} ${m.lastName}`).toLowerCase().includes(searchMember.toLowerCase())
);
const filteredExercises = exercises.filter((ex) =>
    ex.name.toLowerCase().includes(searchExercise.toLowerCase())
  );

 const deleteProgram = async (id) => {
    try {
      await deleteWorkoutPlan(id)
      .then((response) => {
          
          console.log("Program deleted");
          getPrograms();
        })
        .catch((error) => {
          console.log("Error while calling deleting Program API ", error);
       });
    } catch (error) {
      console.log("Error while calling getPrograms API ", error);
    }
  };
  {/*const deleteProgram= async () => {
    try {
      await deleteWorkoutPlan(confirmDelete.id);
      setConfirmDelete({ show: false, id: null, title: "" });
      getPrograms();
    } catch (error) {
      console.log("Error deleting program:", error);
    }
  };*/}
  
   const addNewProgram = async () => {
    try {
      await addWorkoutPlan(newProgram)
        .then((response) => {
          
          
          console.log("Program added");
        })
        .catch((error) => {
          console.log("Error while calling addProgram API ", error);
        });setShowModal(false);
      setNewProgram({
        title: "",
    description: "",
    duration: "",
    image: "",
    assignedTo: [],
    exercises: [],
    createdBy: "68c0bb1b48f3d23d4d1cd6a0"
    
      });
      setSearchMember("");
      setSelectedMember(null);
      getPrograms();
    } catch (error) {
      console.log("Error while calling getPrograms API ", error);
    }
  };

  // ✅ Gérer la sélection d’exercices
  const toggleExerciseSelection = (exercise) => {
    setNewProgram((prev) => {
      const exists = prev.exercises.includes(exercise._id);
      const updatedExercises = exists
        ? prev.exercises.filter((id) => id !== exercise._id)
        : [...prev.exercises, exercise._id];
      return { ...prev, exercises: updatedExercises };
    });
  };

  return (

    <>
    <Navbar transparent />
      <div className="min-h-screen bg-gray-900 text-white p-6 mt-20">
        <div className="flex justify-end mb-8 gap-2">
          {/* Bouton Add Program */}
          <button
            className="bg-orange-500 text-white active:bg-orange-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-100 mt-4"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add Program
          </button>
        </div>

        {/* Table des programmes */}
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="bg-white text-black px-6 py-3 text-left">Image</th>
                
                <th className="bg-white text-black px-6 py-3 text-left">Title</th>
                <th className="bg-white text-black px-6 py-3 text-left">Description</th>
                <th className="bg-white text-black px-6 py-3 text-left">Duration</th>
                <th className="bg-white text-black px-6 py-3 text-left">Actions</th>
                <th className="bg-white text-black px-6 py-3 text-left">Assigned To</th>
                
                <th className="bg-white text-black px-6 py-3 text-left">Exercices</th>

              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.id} className="text-white">
                  <td className="px-6 py-4">
  {program.image ? (
    <img
      src={staticImages.find(img => img.name === program.image)?.src}
      alt={program.title}
      className="w-16 h-16 object-cover rounded"
    />
  ) : "-"}
</td>
                  <td className="border-t-0 px-6 py-4">{program.title}</td>
                  <td className="border-t-0 px-6 py-4">{program.description}</td>
                  <td className="border-t-0 px-6 py-4">{program.duration}</td>
                  <td className="border-t-0 px-6 py-4">
                    <button className="bg-orange-500 text-white active:bg-orange-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    onClick={() => deleteProgram(program._id)}>
  Update
</button>
                    <button className="bg-orange-500 text-white active:bg-orange-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    onClick={() => deleteProgram(program._id)}>
  Delete
</button>
                  </td>
                 <td className="px-6 py-4">
  {program.assignedTo.length > 0
    ? program.assignedTo.map((m) => `${m.firstName} ${m.lastName}`).join(", ")
    : "-"}
</td>

<td className="px-6 py-4">
  {program.exercises?.length > 0
    ? program.exercises.map((ex) => ex.name).join(", ")
    : "-"}
</td>



  
      

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Add Program */}
        {showModal && (
          <div className="fixed inset-0 bg-black flex justify-center items-center z-50 -mt-48 ml-99 mr-99 pl-3 pr-3 pt-2 pb-2 ">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 relative">
              <h2 className="text-lg text-orange-500 font-bold mb-4">Add Program</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="w-6/12 p-2 rounded bg-gray-700 text-black"
                  value={newProgram.title}
                  onChange={handleProgramChange}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="w-6/12 p-2 rounded bg-gray-700 text-black"
                  value={newProgram.description}
                  onChange={handleProgramChange}
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  className="w-6/12 p-2 rounded bg-gray-700 text-black"
                  value={newProgram.duration}
                  onChange={handleProgramChange}
                />
                <select
  name="image"
  className="w-6/12 p-2 rounded bg-gray-700 text-black"
  value={newProgram.image}
  onChange={(e) => setNewProgram({ ...newProgram, image: e.target.value })}
>
  <option value="">Select an image</option>
  {staticImages.map((img, index) => (
    <option key={index} value={img.name}>{img.name}</option>
  ))}
</select>

                {/* Recherche membre */}
                <div className="relative">

              <input
                type="text"
                placeholder="Search member "
                className="w-full p-2 rounded bg-gray-700 text-black mb-1"
                value={selectedMember ? `${selectedMember.firstName} ${selectedMember.lastName}` : searchMember}

                onChange={(e) => {
                  setSearchMember(e.target.value);
                  setSelectedMember(null);
                }}
              />
              {searchMember.length > 0 && filteredMembers.length > 0 && (
  <ul className="absolute bg-orange-500 w-full max-h-32 overflow-y-auto rounded mt-1 z-50">
    {filteredMembers.map((m) => (
      <li
        key={m._id}
        className="px-2 py-1 cursor-pointer hover:bg-gray-600"
        onClick={() => {
          setSelectedMember(m);
          setSearchMember("");
          setNewProgram({ ...newProgram, assignedTo: [m._id] });

        }}
      >
        {m.firstName} {m.lastName}
      </li>
    ))}
  </ul>
  
)}
</div>
 {/* 🔸 Recherche et sélection multi-exercices */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search or add exercises"
            className="w-full p-2 rounded bg-gray-700 text-black mb-1"
            value={searchExercise}
            onChange={(e) => setSearchExercise(e.target.value)}
          />

          {/* Champ affichant les exercices sélectionnés */}
          {newProgram.exercises.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {newProgram.exercises.map((id) => {
                const ex = exercises.find((e) => e._id === id);
                return (
                  <span
                    key={id}
                    className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {ex ? ex.name : "Unknown"}
                  </span>
                );
              })}
            </div>
          )}

          {searchExercise.length > 0 && filteredExercises.length > 0 && (
            <ul className="absolute bg-orange-500 text-white w-full max-h-40 overflow-y-auto rounded mt-1 z-50">
              {filteredExercises.map((ex) => (
                <li
                  key={ex._id}
                  className={`px-2 py-1 cursor-pointer hover:bg-orange-600 ${
                    newProgram.exercises.includes(ex._id)
                      ? "bg-orange-700"
                      : ""
                  }`}
                  onClick={() => {
                    toggleExerciseSelection(ex);
                    setSearchExercise(""); // ✅ efface le champ après ajout
                  }}
                >
                  {ex.name}
                </li>
              ))}
            </ul>
          )}
        </div>


                <div className="flex justify-end gap-2 mt-4">
                  <button
                    className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
                    onClick={addNewProgram}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}