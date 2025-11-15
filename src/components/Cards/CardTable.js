import React, {useEffect,useState, useCallback} from "react";
import PropTypes from "prop-types";
import { createPopper } from '@popperjs/core';
import { useHistory } from "react-router-dom"; 
import  {ToastContainer, toast} from 'react-toastify';  

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import {addUser, updateUserStatus,getAllUsersSortedByFirstName, getCoachs,deleteUserById ,getAllUsers,getMembers,getPendingUsers,getUserByRole,searchUserByFirstName} from "../../services/apiuser"
import StatusCircle from "components/StatusCircle";

export default function CardTable({ color }) {
  const [showModal, setShowModal] = React.useState(false);
  const [usersList, setUsersList] = useState([]);
  const [name, setName] = useState("");
   const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    user_image: "",
  });
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
   const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom",
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };

const handlechange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };


  const getUsers = useCallback( async () => {
    try {
      await getAllUsers().then((response) => {    
        setUsersList(response.data.usersList);
        console.log(response.data.usersList);
        closeDropdownPopover();
      });

      
    } catch (error) {
      console.log("Error: ", error);
      
    }
  }, []);
  const getAllMembers = useCallback (async () => {
    try {
      await getMembers().then((response) => {    
        setUsersList(response.data);
        console.log(response.data);
        closeDropdownPopover();
      });

      
    } catch (error) {
      console.log("Error: ", error);
      
    }
  }, []);
  const getAllPendingUsers = useCallback (async () => {
    try {
      await getPendingUsers().then((response) => {    
        setUsersList(response.data.pendingUsers);
        console.log(response.data.pendingUsers);
        closeDropdownPopover();
      });

      
    } catch (error) {
      console.log("Error: ", error);
      
    }
  }, []);
  const getAllCoachs = useCallback (async () => {
    try {
      await getCoachs().then((response) => {    
        setUsersList(response.data);
        console.log(response.data);
        closeDropdownPopover();
      });

      
    } catch (error) {
      console.log("Error: ", error);
      
    }
  }, []);

const searchUser = async () => {
    try {
      console.log(name)
      await searchUserByFirstName(name).then((response) => {    
        setUsersList(response.data.usersList);
        console.log(response);
        
      });

      
    } catch (error) {
      console.log("Error: ", error);
      
    }
  };
   const deleteUser = async (id) => {
    try {
      await deleteUserById(id)
      
        .then((response) => {
          getUsers();
          toast("So easy")
          console.log("user deleted");
        })
        .catch((error) => {
          console.log("Error while calling deleteUserById API ", error);
        });
    } catch (error) {
      console.log("Error while calling getUsers API ", error);
    }
  };
  const history = useHistory();

  const getUsersOrdred = useCallback( async () => {
    try {
      await getAllUsersSortedByFirstName().then((response) => {    
        setUsersList(response.data.usersList);
        console.log(response);
        closeDropdownPopover();
      });

      
    } catch (error) {
      console.log("Error: ", error);
      
    }
  }, []);
  useEffect(() => {

    getUsers();
    const interval = setInterval(() => {
      getUsers(); 
    }, 60000); // fetch data every 5 seconds

    return () => clearInterval(interval); 

  }, []);
  useEffect(() => {
    
      searchUser();
    }, [name]);
    const handlechangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(image);
    };

const [image, setImage] = useState();
const formData = new FormData();
  const addNewUser = async () => {
    try {
      formData.append("firstName", newUser.firstName);  
      formData.append("lastName", newUser.lastName);  
      formData.append("email", newUser.email);  
      formData.append("password", newUser.password);
      formData.append("role", newUser.role);
      formData.append('user_Image', image , `${image.name}`)
      // Champs spécifiques au coach
  if (newUser.role === "coach") {
    formData.append("specialty", newUser.specialty || "");
    formData.append("experience", newUser.experience || "");
    formData.append("certifications", newUser.certifications || "");
  }
  
console.log(image)
console.log(newUser);
      await addUser(formData)
        .then((response) => {
          getUsers();
          console.log("user added");
        })
        .catch((error) => {
          console.log("Error while calling addUser API ", error);
        });
      setNewUser({
        firstName: "",
        lastName: "",
      
        email: "",
        password: "",
          role: "",
      });
    } catch (error) {
      console.log("Error while calling getUsers API ", error);
    }
  };

 

  
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <ToastContainer/>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex items-center justify-between">
  <h3 className={"font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white")}>
    Users List
  </h3>
  {/*<button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
  onClick={()=> getUsersOrdred()}>
    Sort by Name
    
  </button>*/}
  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
  <div className="flex flex-wrap w-full md:w-auto">
                <div className="w-full text-center ">
                  <button
                    className="bg-grey  text-white active:bg-orange-700  mr-300 font-bold uppercase text-sm px-6 py-3 ml-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      popoverShow ? closePopover() : openPopover();
                    }}
                    ref={btnRef}
                  >
                      ➕ Add Client
                  </button>
                  <div
                    className={
                      (popoverShow ? "" : "hidden ") +
                      "bg-orange-500 border-0 justify-center mr-300 ml-0  block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg "
                    }
                    ref={popoverRef}
                    >
                    <div >
                      <div className="bg-orange-500 text-white mr-7 opacity-100 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg">
                        Add Client
                      </div>
                      <div className="text-white p-3">
                        <div class="flex gap-4 mb-3">
                          <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={newUser.firstName}

                            class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-6/12"
                            onChange={handlechange}
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            class="px-2 ml-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-6/12"
                            onChange={handlechange}
                                                        value={newUser.lastName}

                          />
                          <input
                            type="text"
                            placeholder="Role"
                            name="role"
                            class="px-2 py-1 ml-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-6/12"
                            onChange={handlechange}
                                                        value={newUser.role}

                          />
                        </div>
                        <div class="flex gap-4 mb-3">
                          <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-6/12"
                            onChange={handlechange}
                                                        value={newUser.email}

                          />
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            class="px-2 ml-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-6/12"
                            onChange={handlechange}
                                                        value={newUser.password }

                          />
                        </div>
                        <input
                            type="file"
                          
                            name="user_Image"
                            class="px-2  py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-6/12"
                            onChange={handlechangeImage}
                            //value={newUser.password }

                          />
                        <button
                          className="bg-grey ml-2 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            addNewUser();
                            closePopover();
                          }}
                        >
                          Add User
                        </button>
                        {/*<button
                          className="bg-lightBlue-500 ml-2 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => getUserBetweenAges(minAge, maxAge)}
                        >
                          Add User with Image
                        </button>*/}
                  </div>
                    </div>
      </div>
                  
 <input
    type="text"
    placeholder="Search User"
    className="flex-1 px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded shadow text-sm outline-none focus:outline-none focus:shadow-outline"
    onChange={(e) => setName(e.target.value)}
  />
  <div className="relative inline-flex align-middle ml-3">
    <button
      className="text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none bg-grey  active:bg-orange-700 ease-linear transition-all duration-150"
      type="button"
      ref={btnDropdownRef}
      onClick={() => {
        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
      }}
    >
      Sort Users
    </button>
    <div
      ref={popoverDropdownRef}
      className={
        (dropdownPopoverShow ? "block " : "hidden ") +
        "absolute bg-orange-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
      }
    >
      <a onClick={() => getUsersOrdred()} className="text-sm py-2 px-4 block text-white">Sort By Name</a>
      <a onClick={() => getUsers()} className="text-sm py-2 px-4 block text-white">Get All Users</a>
      <a onClick={() => getAllMembers()} className="text-sm py-2 px-4 block text-white">Get Members</a>
      <a onClick={() => getAllCoachs()} className="text-sm py-2 px-4 block text-white">Get Coachs</a>
      <a onClick={() => getAllPendingUsers()} className="text-sm py-2 px-4 block text-white">Get Pending Users</a>
    </div>
  </div>
</div>
 

{/*<div>
        
        <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>*/}
      
</div>



          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Role
                </th>
                <th
                  className={
                    "px-24 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Actions 
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user) => (
                
                  
              <tr key={user._id}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={`http://localhost:5000/images/${user.user_Image}`}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    {user.firstName}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {user.lastName}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  <StatusCircle
    user={user}
    onStatusChange={(id, newStatus) => {
      setUsersList(prev =>
        prev.map(u => (u._id === id ? { ...u, status: newStatus } : u))
      );
    }}
  />
</td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    {user.role}
                    {/*<img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>*/}
                  </div>

                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
  <div className="flex items-center gap-4">
    <button
      className="bg-grey  active:bg-orange-500 text-white font-bold uppercase text-xs px-4  py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 "
      type="button"
      onClick={()=>history.push({
        pathname : "/admin/UpdateUser", 
        state : {user : user }
      })}
    >
      Update
    </button>
    <button className="bg-grey active:bg-orange-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none"
    type="button "
    onClick={() => deleteUser( user._id )}>  
      Delete
    </button>
  </div>
                    {/*<span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "60%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>*/}
                    {showModal === user._id ? (
    <>
     <div
  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  onClick={() => setShowModal(null)}
>
        <div
    className="relative w-full max-w-5xl mx-auto my-6 transform transition-transform duration-300 ease-out scale-100"
    style={{ animation: 'slide-up 0.3s ease-out forwards' }}
  >
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Modal Title</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(null)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Contenu du modal pour {user.firstName} {user.lastName}.
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(null)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(null)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null}

                  
                </td>
                
              </tr>
               ))}
             
              {/*<tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/angular.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $1,800 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  completed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/sketch.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $3,150 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-red-500 mr-2"></i> delayed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">73%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "73%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/react.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $4,400 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-teal-500 mr-2"></i> on
                  schedule
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">90%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                        <div
                          style={{ width: "90%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/vue.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,200 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                  completed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={require("assets/img/team-1-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src={require("assets/img/team-2-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-3-800x800.jpg").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={require("assets/img/team-4-470x470.png").default}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>*/}
              
            </tbody>
          </table>
        </div>
      </div>
      </div></div>
           
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
