import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-wide text-white hover:text-pink-300 transition">
        InstantPlay
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/book"
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-sm font-medium"
        >
          Book Game
        </Link>
        <Link
          to="/dashboard"
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-sm font-medium"
        >
          Dashboard
        </Link>
        <AuthButton />
      </div>
    </nav>
  );
}

export default Navbar;
