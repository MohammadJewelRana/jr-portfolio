"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    category: "UI/UX Design",
    date: "4 Apr 26",
    title: "The Importance Of User In UI/UX Design",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    category: "Visual Design",
    date: "4 Apr 26",
    title: "The Behind Color Choices In UI/UX Design",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    category: "Web Design",
    date: "4 Apr 26",
    title: "The Role Of Prototyping In UI/UX Design",
  },
];

const Blog = () => {
  const router = useRouter();

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-main text-sm px-4 py-1.5 rounded-full border border-main bg-main/10">
            ✨ <span>My Blog</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Latest <span className="text-main">Blog</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              onClick={() => router.push(`/blog/${blog.id}`)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-200 
              transition-shadow duration-300 hover:bg-[#28e98c0e]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-t-xl">
                <motion.div
                  variants={{
                    rest: { scale: 1, filter: "brightness(1)" },
                    hover: { scale: 1.1, filter: "brightness(1.1)" },
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={blog.img}
                    alt="blog"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Category + Date */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="text-main font-medium">{blog.category}</span>
                  <span>• {blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug">
                  {blog.title}
                </h3>

                {/* Bottom Row */}
                <div className="flex items-center gap-3 pt-4">
                  {/* Arrow */}
                  <motion.div
                    variants={{
                      rest: { rotate: 45, scale: 1 },
                      hover: { rotate: 45, scale: 1.1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-main text-main 
                    transition-all duration-300 group-hover:bg-main group-hover:text-white"
                  >
                    <FaArrowUp className="text-sm" />
                  </motion.div>

                  {/* Read Blog */}
                  <motion.span
                    variants={{
                      rest: { opacity: 0, x: -15 },
                      hover: { opacity: 1, x: 0 },
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="text-sm text-main font-medium whitespace-nowrap"
                  >
                    Read Blog →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-10">
          <motion.button
            onClick={() => router.push("/blog")}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 15px 40px rgba(40,233,140,0.35)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="px-6 py-3 rounded-full bg-main text-black font-medium text-sm sm:text-base cursor-pointer"
          >
            View All Blog ↗
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
