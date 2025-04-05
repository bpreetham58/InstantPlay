// BookGame.jsx
import React from "react";
import BookingForm from "../components/BookingForm";
import { useBooking } from "../context/BookingContext";

function BookGame() {
  const { addBooking } = useBooking();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-4 flex items-center justify-center">
      {/* Foreground Content */}
      <div className="relative z-10 max-w-2xl w-full mx-auto mt-10 p-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
          Instantly Book Your Favorite Game 🎯
        </h2>
        <p className="text-white text-center mb-8 text-lg">
          Choose your sport, pick a time, and you're good to go!
        </p>
        <BookingForm onBook={addBooking} />
      </div>
    </div>
  );
}

export default BookGame;
