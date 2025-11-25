import React, { useEffect, useState } from "react";
import { updateExercise } from "../../services/apiexercise.js"; // si tu veux l'importer localement
// adapte le chemin si besoin

export default function UpdateExerciseModal({ isOpen, onClose, exercise, onUpdated }) {
  const [form, setForm] = useState({
    _id: "",
    name: "",
    description: "",
    difficulty: "beginner",
    targetMuscles: [],
    defaultReps: 0,
    mediaUrl: "",
    category: "strength",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (exercise) {
      setForm({
        _id: exercise._id || "",
        name: exercise.name || "",
        description: exercise.description || "",
        difficulty: exercise.difficulty || "beginner",
        targetMuscles: Array.isArray(exercise.targetMuscles)
          ? exercise.targetMuscles
          : (exercise.targetMuscles || "").split(",").map(m => m.trim()).filter(Boolean),
        defaultReps: exercise.defaultReps ?? 0,
        mediaUrl: exercise.mediaUrl || exercise.image || "",
        category: exercise.category || "strength",
      });
    }
  }, [exercise]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "targetMuscles") {
      setForm(prev => ({ ...prev, targetMuscles: value.split(",").map(m => m.trim()) }));
    } else if (name === "defaultReps") {
      setForm(prev => ({ ...prev, defaultReps: Number(value) }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateExercise(form._id, { 
        ...form, 
        image: form.mediaUrl, // backend expects 'image'
      });
      setLoading(false);
      onUpdated && onUpdated(); // refresh parent list
      onClose();
    } catch (err) {
      setLoading(false);
      console.error("Error updating exercise:", err);
      // tu peux afficher une notif ici si tu utilises une lib notification
    }
  };

  if (!isOpen) return null;

  return (
          <div className=" fixed inset-0  flex items-center  justify-center bg-black bg-opacity-40 z-50 p-4 w-1/2  -mt-29 ml-33 mr-4">
                 

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg animate-fadeIn w-11/12 md:w-2/3 lg:w-1/2">

             {/* Header avec titre et bouton close */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-orange-500">Update Exercise</h2>
        <button
          type="button"
          onClick={onClose}
          className="text-black bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
        >
          ✕
        </button>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        
       {/* Ligne 1: Name + Difficulty */}
        <div className="grid grid-cols-2 gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 rounded bg-gray-700 text-black border border-gray-600 w-full"
            required
          />
          <input
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            placeholder="Difficulty"
            className="p-2 rounded bg-gray-700 text-black border border-gray-600 w-full"
          />
        </div>

        {/* Ligne 2: Target Muscles + Repetitions */}
        <div className="grid grid-cols-2 gap-3">
          <input
            name="targetMuscles"
            value={form.targetMuscles.join(", ")}
            onChange={handleChange}
            placeholder="Target Muscles"
            className="p-2 rounded bg-gray-700 text-black border border-gray-600 w-full"
          />
          <input
            name="defaultReps"
            type="number"
            value={form.defaultReps}
            onChange={handleChange}
            placeholder="Repetitions"
            className="p-2 rounded bg-gray-700 text-black border border-gray-600 w-full"
          />
        </div>

        {/* Ligne 3: Image URL (pleine largeur) */}
        <div className="w-full">
          <input
            name="mediaUrl"
            value={form.mediaUrl}
            onChange={handleChange}
            placeholder="Image URL or static image name"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 w-full"
          />
        </div>

        {/* Ligne 4: Description (pleine largeur) */}
        <div className="w-full">
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-2 rounded bg-gray-700 text-black border border-gray-600 w-full"
            rows={3}
            required
          />
        </div>

        {/* Boutons */}
        <div className="flex gap-2 justify-end mt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Update"}
          </button>
        </div>
      </form>
      
    </div>
  </div>
);}