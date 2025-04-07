import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./tailwind.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import "./styles/animations.css";

// ✅ Font loader component
function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  

  return null;
}

// ✅ Render everything
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <FontLoader /> {/* Loads font once on app start */}
          <App />
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
