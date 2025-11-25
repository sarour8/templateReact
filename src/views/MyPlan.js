import React, { useState, useEffect } from "react";
import Navbar from "components/Navbars/ProfileNavbar"; 
import Footer from "components/Footers/Footer.js";
import { getPlansByMember } from "../services/apiworkoutPlan"; // ✅ CHANGEZ L'IMPORT
import yoga1Img from "assets/img/exercices/exercice1.jpg";
import weightImg from "assets/img/exercices/exercice2.jpg";
import karateImg from "assets/img/classes/girl.png.jpg";

export default function MyPlan() {
  const staticImages = [
    { name: "Yoga", src: yoga1Img },
    { name: "Weight", src: weightImg },
    { name: "Cardio", src: karateImg },
  ];

  const [myPlans, setMyPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // ========== TEMPORAIRE - ID EN DUR POUR LES TESTS ==========
  const currentMemberId = "68e19ad0314a1f239ff41caf";
  
  // ========== DÉCOMMENTER PLUS TARD QUAND VOUS AUREZ LE LOGIN ==========
  // const currentMemberId = localStorage.getItem("userId"); 
  // =========================================================================

  const getMyPlans = async () => {
    try {
      setLoading(true);
      console.log("Fetching plans for member:", currentMemberId); // ✅ Debug
      
      const response = await getPlansByMember(currentMemberId); // ✅ BONNE FONCTION
      
      console.log("API Response:", response.data); // ✅ Debug
      setMyPlans(response.data.plans || []);
      console.log("My plans:", response.data.plans);
    } catch (error) {
      console.log("Error while fetching my plans:", error);
      console.log("Error details:", error.response?.data); // ✅ Debug
      setMyPlans([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyPlans();
  }, []);

  const handleViewDetails = (plan) => {
    setSelectedPlan(plan);
    setShowDetailsModal(true);
  };

  if (loading) {
    return (
      <>
        <Navbar transparent />
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-xl">Loading your plans...</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar transparent />
            
            
      <div className="text-center mb-16 mt-16">
        <br/>
        <br/>
          <span className="text-orange-500 uppercase tracking-wider text-sm mt-9 ">Our Sessions</span>
          
          <p className="text-4xl text-white font-bold mt-2">Plans found: {myPlans.length}</p>
        

        {myPlans.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-xl text-gray-400">No workout plans assigned yet.</p>
            <p className="text-gray-500 mt-2">Contact your coach to get a personalized workout plan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myPlans.map((plan) => (
              <div
                key={plan._id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <br/>
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  {plan.image ? (
                    <img
                      src={staticImages.find((img) => img.name === plan.image)?.src}
                      alt={plan.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-500 text-xl">No Image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">{plan.title}</h3>
                  <p className="text-white text-sm mb-3 line-clamp-2"> Description : {plan.description}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-3 text-center">
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                        Duration :
                      {plan.duration} min
                    </span>

                    <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                        Number of Exercises : 
                      {plan.exercises?.length || 0} 
                    </span>
                  </div>

                  <button
                    onClick={() => handleViewDetails(plan)}
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-orange-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 mt-999"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Details - reste identique */}
        {showDetailsModal && selectedPlan && (
          <div className="fixed inset-0  flex items-center  justify-center bg-black bg-opacity-40 z-50 p-4 w-1/2  -mt-999 ml-33 mr-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg animate-fadeIn w-11/12 md:w-2/3 lg:w-1/2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-orange-500">{selectedPlan.title}</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
                >
                  ✕
                </button>
              </div>

              {selectedPlan.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={staticImages.find((img) => img.name === selectedPlan.image)?.src}
                    alt={selectedPlan.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Description : </h3>
                <p className="text-gray-300">{selectedPlan.description}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-orange-500 mb-2">Duration : </h3>
                <p className="text-white">{selectedPlan.duration}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-orange-500 mb-3">
                    Number of Exercises :  
                </h3>
                <p className="text-white">{selectedPlan.exercises?.length || 0}</p>
                {selectedPlan.exercises?.length > 0 ? (
                  <div className="space-y-3">
                    {selectedPlan.exercises.map((exercise, index) => (
                      <div
                        key={exercise._id || index}
                        className="bg-gray-700 p-4 rounded-lg flex items-start gap-4"
                      >
                        {exercise.image && (
                          <img
                            src={
                              exercise.image.startsWith("http")
                                ? exercise.image
                                : staticImages.find((img) => img.name === exercise.image)?.src
                            }
                            alt={exercise.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                        )}
                       

                        <div className="flex-1"  >
                            
                          <h4 className="text-white font-semibold mb-1">  {exercise.name}</h4>
                          <p className="text-white text-sm mb-2"> Description : {exercise.description}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                              {exercise.difficulty}
                            </span>
                            {exercise.defaultReps && (
                              <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                                {exercise.defaultReps} reps
                              </span>
                            )}
                            {exercise.targetMuscles && (
                              <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                                {Array.isArray(exercise.targetMuscles)
                                  ? exercise.targetMuscles.join(", ")
                                  : exercise.targetMuscles}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No exercises in this plan.</p>
                )}
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <br/>
      <br/>
      <Footer />
    </>
  );
}