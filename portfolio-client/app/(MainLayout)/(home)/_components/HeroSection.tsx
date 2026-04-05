"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero/1.png";

const HeroSection = () => {
  return (
    <section className="relative isolate w-full overflow-hidden pt-32 pb-20 bg-white">

      {/* 🔥 TOP RIGHT GRADIENT */}
      <div className="
        absolute top-0 right-0 
        w-[800px] h-[400px]
        bg-gradient-to-br from-[#aef3d9] to-transparent
        rounded-full blur-3xl opacity-80
        -z-10
      " />

      {/* 🔥 BOTTOM LEFT GRADIENT */}
      <div className="
        absolute bottom-0 left-0 
        w-[400px] h-[400px]
        bg-gradient-to-tr from-[#cfeaf3] to-transparent
        rounded-full blur-3xl opacity-80
        -z-10
      " />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* green shape */}
          <div className="
            absolute 
            w-[360px] h-[360px] 
            bg-main 
            rounded-full 
            left-10 top-16 
            -z-10
          " />

          <Image
            src={heroImg}
            alt="hero"
            className="w-[340px] md:w-[420px]"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* small text */}
          <p className="text-main mb-3 flex items-center gap-2">
            ✨ <span className="font-medium">Hey There!</span>
          </p>

          {/* heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            I'm Rachel Davis <br />
            <span>Web Developer</span>
          </h1>

          {/* description */}
          <p className="text-gray-500 mt-5 max-w-md leading-relaxed">
            We're a team of strategic working globally with largest brands,
            We believe that progress only you to play things safe.
          </p>

          {/* buttons */}
          <div className="flex items-center gap-4 mt-8">

            <button className="
              bg-main text-black 
              px-7 py-3 
              rounded-full 
              font-medium
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_10px_30px_rgba(40,233,140,0.4)]
            ">
              Get Started →
            </button>

            <button className="flex items-center gap-3 text-gray-700 group">

              <div className="
                w-10 h-10 
                rounded-full 
                border border-gray-300 
                flex items-center justify-center
                transition-all duration-300
                group-hover:bg-main group-hover:text-white group-hover:border-main
              ">
                ▶
              </div>

              <span className="group-hover:text-main transition">
                Show Reel
              </span>

            </button>

          </div>
        </motion.div>

      </div>

      {/* floating shape */}
      <motion.div
        className="absolute top-20 right-36 text-main text-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute top-24 right-40 text-main text-6xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✦
      </motion.div>

    </section>
  );
};

export default HeroSection;