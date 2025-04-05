import React from "react";
import { useAuth } from "../context/AuthContext";

function AuthButton() {
  const { user, logout } = useAuth();

  return user ? (
    <button
      onClick={logout}
      className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      Logout
    </button>
  ) : (
    <a
      href="/login"
      className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      Login
    </a>
  );
}

export default AuthButton;
