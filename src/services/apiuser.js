import axios from "axios";

const apiUrl = "http://localhost:5000/user";
const token = localStorage.getItem("token"); // ou sessionStorage selon ton login

// Fonction utilitaire pour inclure le token dans les headers
// Toutes les requêtes protégées utiliseront avecCredentials: true
const withAuth = { withCredentials: true };


export const getAllUsers = async () => {
  return await axios.get(`${apiUrl}/getAllUsers`, withAuth);
};

export const deleteUserById = async (id) => {
  return await axios.delete(`${apiUrl}/deleteUserById/${id}`, withAuth);
};

export const updateUser = async (id, updateData) => {
  return await axios.put(`${apiUrl}/updateUser/${id}`, updateData, withAuth);
};

export const addUser = async (userData) => {
  return await axios.post(`${apiUrl}/addUser`, userData, {
    ...withAuth,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const searchUserByFirstName = async (name) => {
  console.log(name);
  return await axios.get(`${apiUrl}/searchUserByFirstName?name=${name}`, withAuth);
};

export const getUserByRole = async (role) => {
  return await axios.get(`${apiUrl}/getUserByRole/${role}`,withAuth);
};

export const getPendingUsers = async () => {
  return await axios.get(`${apiUrl}/getPendingUsers`, withAuth);
};

export const getMembers = async () => {
  return await axios.get(`${apiUrl}/getMembers`, withAuth);
};

export const getAllUsersSortedByFirstName = async () => {
  return await axios.get(`${apiUrl}/getAllUsersSortedByFirstName`, withAuth);
};

export const getCoachs = async () => {
  return await axios.get(`${apiUrl}/getCoachs`, withAuth);
};

export const updateUserStatus = async (id, status) => {
  return await axios.put(`${apiUrl}/updateUserStatus/${id}`, { status }, withAuth);
};
