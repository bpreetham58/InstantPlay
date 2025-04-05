import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-white/10 mt-20 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">InstantPlay</span>. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
