import axios from "axios";
const apiUrl = "http://localhost:5000/exercises";

export const listExercises = async () => {
    return await axios.get(`${apiUrl}/listExercises`);
}

export const deleteExercise = async (id) => {    
    return await axios.delete(`${apiUrl}/deleteExercise/${id}`);
}

export const updateExercise = async (id, exerciseData) => {
    return await axios.put(`${apiUrl}/updateExercise/${id}`, exerciseData);
}

export const createExercise = async (exerciseData) => {
    return await axios.post(`${apiUrl}/createExercise`, exerciseData);
}

export async function getExerciseById(id)    {
    return await axios.get(`${apiUrl}/getExerciseById/${id}`);
}   
