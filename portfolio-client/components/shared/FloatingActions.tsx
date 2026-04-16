"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  // 🔥 show only last section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fullHeight = document.body.scrollHeight - window.innerHeight;

      // 👉 show after 70% scroll
      setShowTop(scrollY > fullHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

      {/* 🔹 WhatsApp (always visible) */}
      <div className="relative group">
        <a
          href="https://wa.me/8801533850435"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg"
        >
          {/* pulse ring */}
          <span className="absolute w-full h-full rounded-full border-2 border-green-400 animate-ping opacity-40"></span>

          <FaWhatsapp className="relative z-10 text-lg" />
        </a>

        {/* tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
          Chat on WhatsApp
        </span>
      </div>

      {/* 🔹 Back to Top (only last section) */}
      {showTop && (
        <div className="relative group ">
          <button
            onClick={handleTop}
            className="w-12 h-12 flex items-center justify-center rounded-full 
            bg-gradient-to-br from-main to-green-400 text-white 
            shadow-md    
            transition-all duration-300 
            hover:scale-110 hover:shadow-[0_0_15px_rgba(40,233,140,0.5)]"
          >
            <FiArrowUp size={18} />
          </button>

          {/* tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300">
            Back to Top
          </span>
        </div>
      )}

    </div>
  );
};

export default FloatingActions;