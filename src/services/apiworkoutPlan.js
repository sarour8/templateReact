import axios from "axios";
const apiUrl = "http://localhost:5000/workoutPlans";

export const listWorkoutPlans = async () => {
    return await axios.get(`${apiUrl}/listWorkoutPlans`);
}
export const deleteWorkoutPlan = async (id) => {    
    return await axios.delete(`${apiUrl}/deleteWorkoutPlan/${id}`);
}
export const updateWorkoutPlan = async (id, planData) => {
    return await axios.put(`${apiUrl}/updateWorkoutPlan/${id}`, planData);
}   
export const addWorkoutPlan = async (planData) => {
    return await axios.post(`${apiUrl}/addWorkoutPlan`, planData);
}   
export async function getMembers() {
    return await axios.get("http://localhost:5000/user/getMembers");
}
export const  getWorkoutPlanById = async (id) => {
    return await axios.get(`${apiUrl}/getWorkoutPlanById/${id}`);
}
// ✅ AJOUTEZ CETTE NOUVELLE FONCTION
export const getPlansByMember = async (memberId) => {
    return await axios.get(`${apiUrl}/getPlansByMember/${memberId}`);
};