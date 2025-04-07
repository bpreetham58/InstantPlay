import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import person1 from "../assets/games/person1.png";
import person2 from "../assets/games/person2.png";
import person3d from "../assets/games/person3d.png";

const personImages = [person1, person2, person3d];
const introMessage = "Where Play Begins. Anytime, Anywhere.";

function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const storedIndex = sessionStorage.getItem("bgIndex");
    let nextIndex = 0;
    if (storedIndex !== null) {
      nextIndex = (parseInt(storedIndex) + 1) % personImages.length;
    }
    sessionStorage.setItem("bgIndex", nextIndex);
    setImageIndex(nextIndex);
  }, []);

  useEffect(() => {
    if (typedText.length === introMessage.length) {
      setTimeout(() => setShowIntro(false), 1500);
      return;
    }

    const timer = setTimeout(() => {
      setTypedText(introMessage.slice(0, typedText.length + 1));
    }, 70);

    return () => clearTimeout(timer);
  }, [typedText]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans">
      {/* Intro screen */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-white z-50"
          >
            <h1 className="text-green-600 text-3xl md:text-5xl font-[NothingMobile] px-6 tracking-widest">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Navbar on scroll */}
      {showNavbar && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 w-full bg-[#0a0a44] text-white z-40 shadow-md"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">InstantPlay</h1>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md transition">
                Book Game
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow-md transition">
                Dashboard
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-md transition">
                Login
              </button>
            </div>
          </div>
        </motion.nav>
      )}

      {/* Main Section */}
      {!showIntro && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-black"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${personImages[imageIndex]})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          {/* Background glow effects */}
          <div className="absolute inset-0 z-0">
            <div className="w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-purple-500/20 rounded-full blur-3xl absolute top-10 left-10"></div>
            <div className="w-80 h-80 bg-gradient-to-br from-pink-400/30 to-yellow-300/20 rounded-full blur-3xl absolute bottom-10 right-10"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-5xl w-full text-center mb-12 z-10"
          >
            <h1 className="text-6xl font-extrabold mb-4 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
                InstantPlay
              </span>
            </h1>
            <p className="text-xl text-black/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Book your favorite outdoor sports instantly and effortlessly.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Home;
