"use client";

import Image from "next/image";
import heroImg from "@/assets/hero/1.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-[#0c0f14] text-white overflow-hidden">

      {/* BG Glow */}
      <div className="absolute left-10 md:left-20 top-10 md:top-20 w-32 md:w-40 h-32 md:h-40 bg-green-500/20 blur-3xl rounded-full" />
      <div className="absolute right-10 md:right-20 bottom-10 w-40 md:w-60 h-40 md:h-60 bg-green-400/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-8   md:pt-20 lg:pt-24 relative">

        {/* ===== MOBILE STACK (TEXT FIRST) ===== */}
        <div className="md:hidden space-y-6 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-1 border border-green-400/30 rounded-full text-green-400 text-xs">
            ✨ Hi, I’m George Holdbrook
          </div>

          <h1 className="text-3xl font-bold leading-snug">
            Code The Future With <br />
            Innovative Development
          </h1>

          <p className="text-gray-400 text-sm">
            Unlock the power of innovation with cutting-edge development
            solutions.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-5 py-2.5 bg-green-400 text-black rounded-full text-sm font-medium">
              Let’s Talk →
            </button>

            <div className="flex gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                <FaTwitter />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* IMAGE AFTER TEXT */}
          <div className="flex justify-center pt-4">
            <div className="relative">

              <div className="absolute w-32 h-32 bg-green-400 rotate-45 rounded-2xl blur-xl opacity-70" />

              <Image
                src={heroImg}
                alt="hero"
                width={250}
                height={300}
                className="relative z-10"
              />
            </div>
          </div>
        </div>

        {/* ===== DESKTOP ORIGINAL (UNCHANGED) ===== */}
        <div className="hidden md:block text-center relative">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-green-400/30 rounded-full text-green-400 text-xs mb-6">
            ✨ Hi, I’m George Holdbrook
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Code The Future With <br />
            Innovative Development
          </h1>

          {/* LEFT CONTENT */}
          <div className="absolute left-0 top-[55%] -translate-y-1/2 hidden md:block text-left max-w-sm px-2">

            <p className="text-gray-400 text-sm mb-6">
              Unlock the power of innovation with cutting-edge development
              solutions. From web and mobile apps to AI and blockchain.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button className="px-6 py-3 bg-green-400 text-black rounded-full font-semibold">
                Let’s Talk →
              </button>

              <div className="flex gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
                  <FaFacebookF />
                </div>
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
                  <FaTwitter />
                </div>
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center mt-10">

            <div className="absolute w-48 h-48 bg-green-400 rotate-45 rounded-2xl blur-xl opacity-70" />

            <Image
              src={heroImg}
              alt="hero"
              width={350}
              height={420}
              className="relative z-10"
            />

            {/* RIGHT CARD */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block pr-2">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl text-sm w-[220px]">
                <p className="text-green-400 font-semibold mb-1">
                  ✨ My Tech Stacks
                </p>
                <p className="text-gray-400 text-xs">
                  Expert in modern tech stacks: React, Node.js, Python, and more.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;