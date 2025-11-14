import React, { useState, useEffect } from "react";
import { updateUserStatus } from "../services/apiuser";

const StatusCircle = ({ user, onStatusChange }) => {
  const [currentStatus, setCurrentStatus] = useState(user.status);

  useEffect(() => {
    setCurrentStatus(user.status); // mettre à jour si parent change
  }, [user.status]);

  const handleClick = async (newStatus) => {
    try {
      await updateUserStatus(user._id, newStatus);
      setCurrentStatus(newStatus); // mise à jour immédiate
      onStatusChange(user._id, newStatus); // mise à jour du tableau parent
    } catch (error) {
      console.error("Erreur update status:", error);
    }
  };

  // 🚨 Remplacer tout le return précédent par ce nouveau return
  return (
    <div className="flex gap-2">
      <div
  onClick={() => handleClick("active")}
  style={{ 
    backgroundColor: currentStatus === "active" ? "green" : "lightgray"
  }}
  className="w-5 h-5 rounded-full cursor-pointer border-2 border-black"
  title="active"
/>
<div
  onClick={() => handleClick("pending")}
  style={{ 
    backgroundColor: currentStatus === "pending" ? "orange" : "lightgray"
  }}
  className="w-5 h-5 rounded-full cursor-pointer border-2 border-black"
  title="pending"
/>
<div
  onClick={() => handleClick("inactive")}
  style={{ 
    backgroundColor: currentStatus === "inactive" ? "red" : "lightgray"
  }}
  className="w-5 h-5 rounded-full cursor-pointer border-2 border-black"
  title="inactive"
/>

    </div>
  );
};

export default StatusCircle;

