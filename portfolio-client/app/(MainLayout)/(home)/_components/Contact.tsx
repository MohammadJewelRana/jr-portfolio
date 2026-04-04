"use client";

import Image from "next/image";
import React from "react";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import img from "@/assets/hero/jewel_rana.jpg";

const Contact = () => {
  return (
    <div className="py-16 bg-[#0f1117] text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 
          text-main text-sm 
          px-4 py-1.5 
          rounded-full 
          border border-main 
          bg-main/10"
          >
            <FaStar />
            <span>Stay connected</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Building Something Great Together
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
            Each demo built with Teba will look different. You customize almost
            anything in the appearance of your website with only a few clicks.
          </p>

          {/* Call */}
          <div className="flex items-center gap-4 pt-4">
            {/* Image */}
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-main">
              <Image src={img} alt="Jewel Rana" className="object-cover" />
            </div>

            {/* Text */}
            <div>
              <p className="text-gray-400 text-sm">Call Now</p>
              <p className="font-semibold text-lg flex items-center gap-2">
                <FaPhoneAlt className="text-main text-sm" />
                +880 1533850435
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="border border-main rounded-2xl p-6 sm:p-8 bg-[#111318] shadow-[0_0_40px_rgba(40,233,140,0.15)]">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Get In Touch
          </h2>

          {/* Inputs */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-sm outline-none focus:border-main transition"
              />

              <input
                type="text"
                placeholder="Enter Your Number"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-sm outline-none focus:border-main transition"
              />
            </div>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-sm outline-none focus:border-main transition"
            />

            <textarea
              rows={4}
              placeholder="Enter Your Message"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 text-sm outline-none focus:border-main transition"
            ></textarea>
          </div>

          {/* Button */}
          <button
            className="
          mt-6 w-full 
          py-3 
          rounded-full 
          bg-main text-black 
          font-medium 
          text-sm sm:text-base
          transition-all duration-300
          hover:scale-105 
          hover:shadow-[0_10px_30px_rgba(40,233,140,0.4)]
          "
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
