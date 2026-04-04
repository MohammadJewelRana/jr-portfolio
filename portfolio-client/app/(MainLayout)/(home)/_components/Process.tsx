"use client";

import React from "react";
import { FaCode, FaRocket, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Development",
    desc: "We provide cutting-edge development solutions, including web, mobile.",
    icon: <FaCode />,
  },
  {
    title: "Deployment & Launch",
    desc: "We ensure a smooth deployment and launch by setting up servers, optimizing performance.",
    icon: <FaRocket />,
  },
  {
    title: "Maintenance & Support",
    desc: "We provide ongoing maintenance and support, including updates, security patches.",
    icon: <FaCogs />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Process = () => {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 
        text-main text-xs sm:text-sm 
        px-3 sm:px-4 py-1 sm:py-1.5 
        rounded-full border border-main bg-main/10 mb-4"
        >
          ✨ <span>How It Works</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Our Development Process
        </h2>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6"
        >
          {/* Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gray-300"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative flex flex-col items-center text-center max-w-xs"
            >
              {/* Icon Circle */}
              <div
                className="
              w-14 h-14 sm:w-16 sm:h-16
              flex items-center justify-center
              rounded-full
              border-2 border-main
              text-main text-xl sm:text-2xl
              bg-white
              z-10
              transition-all duration-300
              hover:bg-main hover:text-white hover:scale-110
              "
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-base sm:text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
