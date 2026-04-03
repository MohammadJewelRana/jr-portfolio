import React from "react";
import { FaStar } from "react-icons/fa";

const Experience = () => {
  const data = [
    {
      year: "2025 - Present",
      role: "Junior Full Stack Developer",
      company: "Rtemis Limited — Dhanmondi, Dhaka",
      type: "Full-Time",
      points: [
        "Develop scalable apps using MERN, Next.js, NestJS",
        "Built secure REST APIs with JWT (PostgreSQL & MongoDB)",
        "Collaborated with cross-functional teams",
        "Published Sharikana React Native app on Play Store",
      ],
    },
    {
      year: "2024",
      role: "Intern",
      company: "Solutya Pvt. Ltd. — Uttara, Dhaka",
      type: "Internship",
      points: [
        "Supported MERN full-stack development",
        "Collaborated in a team environment",
      ],
    },
    {
      year: "2024",
      role: "Intern",
      company: "Adeffi Limited — Banani, Dhaka",
      type: "Internship",
      points: [
        "Supported internal software processes",
        "Researched Camlytics & analytics solutions",
      ],
    },
  ];

  return (
    <div className="bg-[#0f1117] text-white py-16 px-4 md:px-10 ">
      {/* Heading */}
      <div className="text-center space-y-3 mb-12">
        <div className="flex items-center justify-center gap-2 text-main text-sm">
          <FaStar />
          <span>My Experience</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My <span className="text-main">Work</span> Experience
        </h1>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto space-y-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="group grid grid-cols-1 md:grid-cols-3 gap-4 
            border-b border-white/10 
            px-3 py-4 rounded-lg
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:bg-white/5 hover:shadow-[0_0_25px_rgba(40,233,140,0.1)]"
          >
            {/* Year */}
            <span className="text-gray-400 text-sm md:text-base">
              {item.year}
            </span>

            {/* Content */}
            <div>
              <h3 className="font-semibold text-base md:text-lg">
                {item.role}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm">{item.company}</p>

              {/* 🔥 Smooth Expand (FIXED) */}
              <div
                className="
                overflow-hidden
                max-h-0 opacity-0
                transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:max-h-60 group-hover:opacity-100
                "
              >
                <ul className="list-disc ml-4 mt-3 text-gray-400 text-xs sm:text-sm space-y-1">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Type */}
            <span className="text-gray-400 text-sm md:text-right">
              {item.type}
            </span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div
        className="max-w-4xl mx-auto mt-12 border border-white/10 rounded-xl p-4 md:p-6 
      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center"
      >
        {[
          { val: "95%", name: "React / Next.js" },
          { val: "92%", name: "Node / NestJS" },
          { val: "90%", name: "MongoDB" },
          { val: "88%", name: "PostgreSQL" },
          { val: "85%", name: "React Native" },
        ].map((skill, i) => (
          <div
            key={i}
            className="transition-all duration-300 ease-out hover:scale-110"
          >
            <h3 className="text-main font-bold text-lg">{skill.val}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
