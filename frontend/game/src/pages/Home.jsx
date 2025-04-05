// Home.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import person1 from "../assets/games/person1.png";
import person2 from "../assets/games/person2.png";
import person3d from "../assets/games/person3d.png";

const personImages = [person1, person2, person3d];

function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const storedIndex = sessionStorage.getItem("bgIndex");
    let nextIndex = 0;
    if (storedIndex !== null) {
      nextIndex = (parseInt(storedIndex) + 1) % personImages.length;
    }
    sessionStorage.setItem("bgIndex", nextIndex);
    setImageIndex(nextIndex);
  }, []);

  return (
    <div
      className="relative min-h-screen text-white flex flex-col items-center justify-center px-6 py-12 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${personImages[imageIndex]})`,
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      {/* Animated glow or visual effects */}
      <div className="absolute inset-0 z-0">
        <div className="w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-purple-500/20 rounded-full blur-3xl absolute top-10 left-10"></div>
        <div className="w-80 h-80 bg-gradient-to-br from-pink-400/30 to-yellow-300/20 rounded-full blur-3xl absolute bottom-10 right-10"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full text-center mb-12 z-10"
      >
        <h1 className="text-6xl font-extrabold mb-4 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          Welcome to <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">InstantPlay</span>
        </h1>
        <p className="text-xl text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          Book your favorite outdoor sports instantly and effortlessly.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;