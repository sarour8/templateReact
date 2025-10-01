import axios from "axios";

const apiUrl = "http://localhost:5000/user";

export const getAllUsers = async () => {
    return await axios.get(`${apiUrl}/getAllUsers`);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${apiUrl}/deleteUser/${id}`);
}
export const updateUser = async (id, userData) => {
    return await axios.put(`${apiUrl}/updateUser/${id}`, userData);
}
export const  addMember = async (memberData) => {
    return await axios.post(`${apiUrl}/addMember`, memberData);
}   
export async function searchUserByFirstName(name) {
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

