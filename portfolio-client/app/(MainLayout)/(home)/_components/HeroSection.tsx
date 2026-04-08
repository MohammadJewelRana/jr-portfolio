"use client";

import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/hero/1.png";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-[#0c0f14] text-white overflow-hidden  pt-16">
      {/* BG Glow */}
      <div className="absolute left-10 md:left-20 top-10 md:top-20 w-32 md:w-40 h-32 md:h-40 bg-green-500/20 blur-3xl rounded-full" />
      <div className="absolute right-10 md:right-20 bottom-10 w-40 md:w-60 h-40 md:h-60 bg-green-400/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-10 md:pt-16 lg:pt-20 relative">
        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-green-400/30 rounded-full text-green-400 text-xs">
            ✨ Hi, I’m Md. Jewel Rana
          </div>

          <h1 className="text-3xl font-bold leading-snug">
            Full Stack Developer Building <br />
            Scalable Web & Mobile Apps
          </h1>

          <p className="text-gray-400 text-sm">
            MERN, Next.js & NestJS developer crafting secure, scalable
            applications.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-green-400 text-black rounded-full text-sm font-medium"
            >
              Hire Me →
            </Link>

            <div className="flex gap-2">
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://github.com/MohammadJewelRana"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10"
              >
                <FaGithub />
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center pt-4">
            <div className="relative">
              <div className="absolute w-32 h-32 bg-green-400 rotate-45 rounded-2xl blur-xl opacity-70" />
              <Image
                src={heroImg}
                alt="Jewel Rana"
                width={250}
                height={300}
                className="relative z-10"
              />
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-green-400/30 rounded-full text-green-400 text-xs mb-6">
            ✨ Hi, I’m Md. Jewel Rana
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Building Modern Web & Mobile Applications
          </h1>

          {/* LEFT CONTENT */}
          <div className="absolute left-0 top-[55%] -translate-y-1/2 text-left max-w-sm px-2">
            <p className="text-gray-400 text-sm mb-6">
              I build scalable web and mobile applications using MERN, Next.js,
              and NestJS with modern UI and secure APIs.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-6 py-3 bg-green-400 text-black rounded-full font-semibold"
              >
                Hire Me →
              </Link>

              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/MohammadJewelRana"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center mt-10">
            <div className="absolute w-48 h-48 bg-green-400 rotate-45 rounded-2xl blur-xl opacity-70" />

            <Image
              src={heroImg}
              alt="Jewel Rana"
              width={350}
              height={420}
              className="relative z-10"
            />

            {/* ✅ TECH STACK CARD (UPPER ALIGN FIXED) */}
            <div className="absolute right-0 top-[35%] -translate-y-1/2 pr-2">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl text-sm w-[230px]">
                <p className="text-green-400 font-semibold mb-2">
                  🚀 Tech Stack
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  MERN, Next.js, NestJS, PostgreSQL, Prisma, React Native
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
