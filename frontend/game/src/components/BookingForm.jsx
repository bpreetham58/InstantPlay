import React, { useState } from "react";

function BookingForm({ onBook }) {
  const [game, setGame] = useState("");
  const [hours, setHours] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (game && hours > 0) {
      onBook({ game, hours });
      setGame("");
      setHours(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded">
      <div>
        <label className="block mb-1">Select Game:</label>
        <select value={game} onChange={(e) => setGame(e.target.value)} className="w-full p-2 border rounded">
          <option value="">-- Choose a game --</option>
          <option value="Football">Football</option>
          <option value="Cricket">Cricket</option>
          <option value="Basketball">Basketball</option>
          <option value="Tennis">Tennis</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Hours:</label>
        <input type="number" min="1" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;
