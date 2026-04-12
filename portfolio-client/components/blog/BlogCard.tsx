"use client";

import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

type BlogCardProps = {
  blog: {
    _id: string;
    title: string;
    thumbnail: string;
    category: string;
    createdAt: string;
    slug: string;
  };
};

const BlogCard = ({ blog }: BlogCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      onClick={() => router.push(`/blog/${blog.slug}`)}
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
            src={blog.thumbnail}
            alt="blog"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category + Date */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="text-main font-medium">{blog.category}</span>
          <span>• {new Date(blog.createdAt).toDateString()}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug">
          {blog.title}
        </h3>

        {/* Bottom */}
        <div className="flex items-center gap-3 pt-4">
          <motion.div
            variants={{
              rest: { rotate: 45, scale: 1 },
              hover: { rotate: 45, scale: 1.1 },
            }}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-main text-main 
            transition-all duration-300 group-hover:bg-main group-hover:text-white"
          >
            <FaArrowUp className="text-sm" />
          </motion.div>

          <motion.span
            variants={{
              rest: { opacity: 0, x: -15 },
              hover: { opacity: 1, x: 0 },
            }}
            className="text-sm text-main font-medium"
          >
            Read Blog →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;