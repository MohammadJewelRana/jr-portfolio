import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaQuoteLeft, FaUser } from "react-icons/fa";

import img from "@/assets/hero/2.png";

const About = () => (
  <div className="text-black  p-5 md:p-8   mt-10 bg-white/5 backdrop-blur-lg">
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

      <div className="space-y-6 text-center md:text-left">
        {/* About badge */}
        <div className="flex justify-center md:justify-start">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-main text-main text-sm font-medium bg-main/10">
            ✨ <span>About Me</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl max-w-xl mx-auto md:mx-0">
          My Story And Expertise
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
          With a passion for technology and years of experience, I specialize in
          web, mobile, AI, and blockchain development. My expertise lies in
          creating innovative, scalable, and efficient solutions that help
          businesses.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto md:mx-0 pt-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">10+</h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Years of Experience
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">4529+</h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Project Completed
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">600+</h2>
            <p className="text-xs sm:text-sm text-gray-500">Happy Customer</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <button className="px-6 py-3 rounded-full bg-main text-black font-medium text-sm sm:text-base hover:scale-105 transition-all duration-300">
            About Me ↗
          </button>

          <button className="px-6 py-3 rounded-full border border-black text-black font-medium text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300">
            Contact Me ↗
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default About;
