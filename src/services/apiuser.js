import axios from "axios";

const apiUrl = "http://localhost:5000/user";

export const getAllUsers = async () => {
    return await axios.get(`${apiUrl}/getAllUsers`);
}
export const deleteUserById = async (id) => {
    return await axios.delete(`${apiUrl}/deleteUserById/${id}`);
}
export const updateUser = async (id, updateData) => {
    return await axios.put(`${apiUrl}/updateUser/${id}`, updateData);
}
export const  addUser = async (userData) => {
    return await axios.post(`${apiUrl}/addUser`, userData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
}   
export async function searchUserByFirstName(name) {
    console.log(name);
    return await axios.get(`${apiUrl}/searchUserByFirstName?name=${name}`);
}
export const getUserByRole = async (role) => {
    return await axios.get(`${apiUrl}/getUserByRole/${role}`);
}
export async function getPendingUsers() {
    return await axios.get(`${apiUrl}/getPendingUsers`);
}
export async function getMembers() {
    return await axios.get(`${apiUrl}/getMembers`);
}
export async function getAllUsersSortedByFirstName  () {
    return await axios.get(`${apiUrl}/getAllUsersSortedByFirstName`);
}
export async function getCoachs  () {
    return await axios.get(`${apiUrl}/getCoachs`);
}

export async function updateUserStatus  (id, status) {
    return await axios.put(`${apiUrl}/updateUserStatus/${id}`, { status });
}
