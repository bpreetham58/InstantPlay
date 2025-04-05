import React from "react";
import { useBooking } from "../context/BookingContext";

function BookingHistory() {
  const { bookings } = useBooking();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Booking History</h2>
      {bookings.length === 0 ? <p>No bookings yet.</p> : (
        <ul>
          {bookings.map((b, index) => (
            <li key={index}>{b.game} for {b.hours} hours</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default BookingHistory;