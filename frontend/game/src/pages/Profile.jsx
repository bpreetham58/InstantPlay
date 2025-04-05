import React from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Profile</h2>
      {user ? <p>Welcome, {user.email}</p> : <p>Please login.</p>}
    </div>
  );
}
export default Profile;