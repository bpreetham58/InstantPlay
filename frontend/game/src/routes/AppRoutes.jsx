import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookGame from "../pages/BookGame";
import BookingHistory from "../pages/BookingHistory";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookGame />} />
      <Route path="/history" element={<BookingHistory />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRoutes;