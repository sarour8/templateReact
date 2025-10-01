import React, { useState, useEffect, useRef } from "react";
import Navbar from 'components/Navbars/CoachNavbar';
import Footer from "components/Footers/Footer.js";
import { createPopper } from "@popperjs/core";
import { addWorkoutPlan, deleteWorkoutPlan, listWorkoutPlans } from "../services/apiworkoutPlan";

export default function AddProgram() {
  const [programs, setPrograms] = useState([]);
  const [showModal, setShowModal] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState({ show: false, programId: null, programTitle: "" });

  const [newProgram, setNewProgram] = useState({
    title: "",
    description: "",
    duration: "",
    image: "",
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
  useEffect(() => {
    getPrograms();
  }, []);
 // const deleteProgram = async (id) => {
    //try {
      //await deleteWorkoutPlan(id)
        //.then((response) => {
          
          //console.log("Program deleted");
          //getPrograms();
        //})
        //.catch((error) => {
          //console.log("Error while calling deleting Program API ", error);
       // });
    //} catch (error) {
      //console.log("Error while calling getPrograms API ", error);
    //}
  //};
  const deleteProgram= async () => {
    try {
      await deleteWorkoutPlan(confirmDelete.id);
      setConfirmDelete({ show: false, id: null, title: "" });
      getPrograms();
    } catch (error) {
      console.log("Error deleting program:", error);
    }
  };
  
   const addNewProgram = async () => {
    try {
      await addWorkoutPlan(newProgram)
        .then((response) => {
          
          getPrograms();
          console.log("Program added");
        })
        .catch((error) => {
          console.log("Error while calling addProgram API ", error);
        });
      setNewProgram({
        title: "",
    description: "",
    duration: "",
    image: "",
    
      });
    } catch (error) {
      console.log("Error while calling getPrograms API ", error);
    }
  };

  return (

    <>
    <Navbar transparent />
      <div className="min-h-screen bg-gray-900 text-white p-6 mt-20">
        <div className="flex justify-end mb-8 gap-2">
          {/* Bouton Add Program */}
          <button
            className="bg-orange-500 text-white active:bg-orange-700 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none "
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
                <th className="bg-lightBlue-800 text-lightBlue-300 px-6 py-3 text-left">Title</th>
                <th className="bg-lightBlue-800 text-lightBlue-300 px-6 py-3 text-left">Description</th>
                <th className="bg-lightBlue-800 text-lightBlue-300 px-6 py-3 text-left">Duration</th>
                <th className="bg-lightBlue-800 text-lightBlue-300 px-6 py-3 ml-1 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.id} className="text-white">
                  <td className="border-t-0 px-6 py-4">{program.title}</td>
                  <td className="border-t-0 px-6 py-4">{program.description}</td>
                  <td className="border-t-0 px-6 py-4">{program.duration}</td>
                  <td className="border-t-0 px-6 py-4">
                    <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    onClick={() => deleteProgram(program.id)}>
  Update
</button>
                    <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    onClick={() => deleteProgram(program.id)}>
  Delete
</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Add Program */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 -mt-48 ml-99">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-96">
              <h2 className="text-lg font-bold mb-4">Add Program</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="w-full p-2 rounded bg-gray-700 text-black"
                  value={newProgram.title}
                  onChange={handleProgramChange}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="w-full p-2 rounded bg-gray-700 text-black"
                  value={newProgram.description}
                  onChange={handleProgramChange}
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  className="w-full p-2 rounded bg-gray-700 text-black"
                  value={newProgram.duration}
                  onChange={handleProgramChange}
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="w-full p-2 rounded bg-gray-700 text-black"
                  value={newProgram.image}
                  onChange={handleProgramChange}
                />
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