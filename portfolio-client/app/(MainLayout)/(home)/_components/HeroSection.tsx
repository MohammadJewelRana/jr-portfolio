"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero/1.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20">
      {/* 🔥 Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-green-400/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* green shape */}
          <div className="absolute w-[350px] h-[350px] bg-main rounded-[50%] left-10 top-10 -z-10"></div>

          <Image src={heroImg} alt="hero" className="w-[350px] md:w-[420px]" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-main mb-2">✨ Hey There!</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            I'm Rachel Davis <br />
            <span className="text-black">Web Developer</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            We're a team of strategic working globally with largest brands, We
            believe that progress only you to play things safe.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-main text-black px-6 py-3 rounded-full font-medium">
              Get Started →
            </button>

            <button className="flex items-center gap-2 text-gray-700">
              ▶ Show Reel
            </button>
          </div>
        </motion.div>
      </div>

      {/* 🔥 Floating Shapes Animation */}
      <motion.div
        className="absolute top-20 right-16 text-main text-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 text-main text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✦
      </motion.div>
    </section>
  );
};

export default HeroSection;
