import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { updateWorkoutPlan } from "../../services/apiworkoutPlan"; // adapte le chemin

export default function UpdateProgramModal({ isOpen, onClose, program, exercisesList = [], membersList = [], onUpdated }) {
  const [form, setForm] = useState({
    _id: "",
    title: "",
    description: "",
    duration: "",
    image: "",
    assignedTo: [], // ids
    exercises: [], // ids
    createdBy: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (program) {
      setForm({
        _id: program._id || program.id || "",
        title: program.title || "",
        description: program.description || "",
        duration: program.duration || "",
        image: program.image || "",
        assignedTo: Array.isArray(program.assignedTo) ? program.assignedTo.map(m => m._id ?? m) : [],
        exercises: Array.isArray(program.exercises) ? program.exercises.map(ex => ex._id ?? ex) : [],
        createdBy: program.createdBy || "",
      });
    }
  }, [program]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const toggleExercise = (id) => {
    setForm(prev => {
      const exists = prev.exercises.includes(id);
      return { ...prev, exercises: exists ? prev.exercises.filter(x => x !== id) : [...prev.exercises, id] };
    });
  };

  const handleAssignMember = (memberId) => {
    setForm(prev => ({ ...prev, assignedTo: [memberId] })); // usage comme ton code : single assignedTo
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await updateWorkoutPlan(form._id, {
        ...form,
      });
      setLoading(false);
      onUpdated && onUpdated();
      onClose();
    } catch (err) {
      setLoading(false);
      console.error("Error updating program:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0  flex items-center  justify-center bg-black bg-opacity-40 z-50 p-4 w-1/2  -mt-999 ml-33 mr-4">
                 

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg animate-fadeIn w-11/12 md:w-2/3 lg:w-1/2">

             {/* Header avec titre et bouton close */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-orange-500">Update Program</h2>
          <button className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="space-y-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="p-2 rounded bg-gray-700 text-black w-full"
            required
          />
          <input
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="Duration"
            className="p-2 rounded bg-gray-700 text-black w-full"
          />
          <select
            name="image"
            value={form.image}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-black w-full"
          >
            <option value="">Select image</option>
            {/* si tu veux, tu peux remplir dynamiquement depuis staticImages dans le parent */}
          </select>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-2 rounded bg-gray-700 text-black w-full"
            rows={2}
          />

          <div>
            <div className="mb-2 font-semibold text-sm  text-white">Assign Member </div>
            <div className="flex flex-wrap gap-2">
              {membersList.map(m => (
                <button
                  key={m._id}
                  type="button"
                  onClick={() => handleAssignMember(m._id)}
                  className={`px-3 py-1 rounded text-sm ${form.assignedTo.includes(m._id) ? "bg-orange-500 text-white" : "bg-gray-700 text-white"}`}
                >
                  {m.firstName} {m.lastName}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 font-semibold text-sm text-white">Select Exercises</div>
            <div className="flex flex-wrap gap-2">
              {exercisesList.map(ex => (
                <button
                  key={ex._id}
                  type="button"
                  onClick={() => toggleExercise(ex._id)}
                  className={`px-3 py-1 rounded text-sm ${form.exercises.includes(ex._id) ? "bg-orange-500 text-white" : "bg-gray-700 text-white"}`}
                >
                  {ex.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-4 py-2 text-white">Cancel</button>
            <button onClick={handleSubmit} className="px-4 py-2 text-white  bg-orange-500 rounded hover:bg-orange-600">
              {loading ? "Saving..." : "Save Update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
