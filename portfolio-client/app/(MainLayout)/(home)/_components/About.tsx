"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  return (
    <section className="relative py-12  md:py-20 bg-gradient-to-b from-white to-green-50/30 overflow-hidden">
      {/* soft bg glow */}

      <div className="max-w-7xl mx-auto    grid md:grid-cols-2 gap-12 items-center relative z-10   ">
        {/* ================= LEFT ================= */}
        <div className="space-y-8 text-center md:text-left order-1 ">
          {/* Badge */}
          <div className="flex justify-center md:justify-start">
            <div className="px-4 py-1.5 rounded-full border border-main text-main text-sm font-medium bg-main/10">
              ✨ About Me
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl max-w-xl mx-auto md:mx-0 text-black">
            Building Scalable Digital Products
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            I’m a Full Stack Developer specializing in MERN, Next.js, and
            NestJS. I develop scalable web applications, secure APIs, and
            production-ready mobile apps. I have experience working in
            real-world teams and delivering production systems.
          </p>

          {/* Stats */}
<div className="grid grid-cols-3 gap-6 max-w-xl mx-auto md:mx-0 pt-4">
  
  <div>
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
      <CountUp end={2} duration={4} />+
    </h2>
    <p className="text-xs sm:text-sm text-gray-500">
      Years Experience
    </p>
  </div>

  <div>
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
      <CountUp end={10} duration={4} />+
    </h2>
    <p className="text-xs sm:text-sm text-gray-500">
      Projects Completed
    </p>
  </div>

</div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-full bg-main text-black font-medium hover:scale-105 transition">
              Download CV ↗
            </button>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex justify-center order-2 ">
          <div className="space-y-6 w-full max-w-md">
            {/* Education Timeline */}
            <motion.div
              // whileHover={{ y: -5 }}
              className="p-3 rounded-2xl bg-white border border-gray-100  "
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                🎓 Education
              </h3>

              <div className="space-y-4 border-l-2 border-main/30 pl-4">
                <div>
                  <p className="font-semibold text-gray-800">
                    BSc in Computer Science & Engineering
                  </p>
                  <p className="text-sm text-gray-500">Southeast University</p>
                  <p className="text-sm text-main font-medium">
                    CGPA: 3.93 / 4.00
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    Higher Secondary (Science)
                  </p>
                  <p className="text-sm text-gray-500">GPA: 5.00 / 5.00</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    Secondary School (Science)
                  </p>
                  <p className="text-sm text-gray-500">GPA: 5.00 / 5.00</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Highlight */}
            <motion.div
              // whileHover={{ y: -5 }}
              className="p-3 rounded-2xl bg-gradient-to-br from-main/10 to-white border border-main/20"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                💼 Experience
              </h3>

              <p className="text-sm text-gray-600">
                Junior Full Stack Developer at Rtemis Limited. Built scalable
                apps, REST APIs, and developed mobile applications deployed to
                Play Store.
              </p>
            </motion.div>

            {/* Highlight */}
            <div className="p-6 rounded-2xl bg-main text-black">
              <p className="text-sm leading-relaxed">
                🚀 Passionate about building scalable systems and solving
                real-world problems using modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
