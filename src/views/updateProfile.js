import React, { useState } from "react";
import Navbar from "components/Navbars/ProfileNavbar";
import Footer from "components/Footers/Footer";


export default function UpdateProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    membershipType: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundColor: "orange" }}
        >
          <span className="w-full h-full absolute opacity-60 bg-orange-500"></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 2560 100"
          >
            <polygon className="text-black fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>

      <main className="relative py-16 bg-black min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="relative flex flex-col lg:flex-row min-w-0 break-words bg-gray-900 w-full mb-6 shadow-xl rounded-lg -mt-64">
            {/* Formulaire */}
            <div className="w-full max-w-xl bg-gray-900 shadow-xl rounded-lg p-6 mx-auto">
              <h4 className="text-2xl font-semibold text-white mb-4 text-center">
                Update Your Profile
              </h4>
              <p className="text-white mb-8 text-center">
                Fill out the details below to keep your profile up to date.
              </p>

              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                {/* First Name */}
                <div className="relative w-1/2 mb-3 mx-auto">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-1"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="relative w-1/2 mb-3 mx-auto">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-1"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative w-1/2 mb-3 mx-auto">
                  
                  <label
                    className="block uppercase text-white text-xs font-bold mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="relative w-1/2 mb-3 mx-auto">

                  <label
                    className="block uppercase text-white text-xs font-bold mb-1"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>

                {/* Birth Date */}
                <div className="relative w-1/2 mb-3 mx-auto">
                 
                  <label
                    className="block uppercase text-white text-xs font-bold mb-1"
                    htmlFor="birthDate"
                  >
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>

                {/* Gender */}
                <div className="relative w-1/2 mb-3 mx-auto">
                  
                  <label
                    className="block uppercase text-white text-xs font-bold mb-1"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Membership Type */}
                <div className="relative w-1/2 mb-3 mx-auto">
                 
                  <label
                    className="block uppercase text-white text-xs font-bold mb-1"
                    htmlFor="membershipType"
                  >
                    Membership Type
                  </label>
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <option value="">Select Membership</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="vip">VIP</option>
                  </select>
                </div>

                {/* Profile Image */}
                <div className="relative w-1/2 mb-3 mx-auto">
                  
                  <label
                    className="block uppercase text-white text-xs font-bold mb-1"
                    htmlFor="profileImage"
                  >
                    Profile Image
                  </label>
                  <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    onChange={handleChange}
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>

                <div className="text-center mt-6">
                      <button
                      type="submit"
                        className="bg-orange-500 text-white active:bg-orange-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        
                      >
                        Update Profile
                      </button>
                    </div>
              </form>
            </div>

            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}



