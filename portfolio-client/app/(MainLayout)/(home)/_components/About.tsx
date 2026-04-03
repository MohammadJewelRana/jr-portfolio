import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaQuoteLeft, FaUser } from "react-icons/fa";

import img from "@/assets/hero/2.png";

const About = () => (
  <div className="text-black border border-white/10 p-5 md:p-8 rounded-2xl shadow-lg mt-10 bg-white/5 backdrop-blur-lg">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={img}
          alt="About Me"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
        />
      </div>

      {/* Content */}
      <div className="space-y-5 text-center md:text-left">
        
        {/* About label */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <FaUser className="text-main text-sm md:text-base" />
          <h3 className="text-main font-medium text-sm md:text-base">
            About Me
          </h3>
        </div>

        {/* Heading */}
        <h1 className="font-bold leading-snug text-2xl sm:text-3xl md:text-4xl max-w-lg mx-auto md:mx-0">
          Experienced Developers Ready To Help
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque
          temporibus ad voluptates, sed deserunt blanditiis doloremque iste
          placeat fugiat?
        </p>

        {/* Quote */}
        <div className="flex items-start gap-3 md:gap-4 max-w-lg mx-auto md:mx-0">
          <FaQuoteLeft className="text-xl md:text-2xl text-main flex-shrink-0 mt-1 opacity-50" />
          <p className="italic text-gray-600 text-sm sm:text-base leading-relaxed">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            fuga."
          </p>
        </div>

        {/* Feature */}
        <div className="flex items-center gap-3 md:gap-4 py-3 px-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 max-w-xs mx-auto md:mx-0">
          <FaCheckCircle className="text-lg md:text-xl text-main flex-shrink-0" />
          <p className="text-gray-700 font-medium text-sm sm:text-base">
            Proven Experience
          </p>
        </div>

        {/* Button */}
        <div className="pt-2">
          <button className="px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-main text-white font-semibold text-sm sm:text-base shadow-[0_10px_30px_rgba(40,233,140,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(40,233,140,0.6)]">
            Explore More →
          </button>
        </div>

      </div>
    </div>
  </div>
);

export default About;