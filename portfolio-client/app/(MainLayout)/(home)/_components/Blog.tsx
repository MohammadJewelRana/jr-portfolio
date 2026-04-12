"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";

const blogs = [
  {
    title: "Mastering MERN Stack in 2026",
    slug: "mastering-mern-stack-2026",
    excerpt:
      "Learn how to build scalable applications using MERN stack with modern tools.",
    content:
      "In this guide, we will explore how to build scalable full-stack applications using MongoDB, Express, React, and Node.js...",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1581090700227-1e8a1d0f8b8c",
    ],
    authorName: "Jewel Rana",
    authorImage: "https://i.pravatar.cc/150?img=3",
    category: "Development",
    tags: ["MERN", "React", "Node", "MongoDB"],
    metaTitle: "Master MERN Stack",
    metaDescription:
      "Complete MERN stack development guide for beginners and advanced developers.",
    status: "published",
    featured: true,
    views: 250,
    likes: 40,
    isDeleted: false,
  },
  {
    title: "Next.js Performance Optimization Tips",
    slug: "nextjs-performance-optimization-tips",
    excerpt:
      "Boost your Next.js app performance with these advanced techniques.",
    content:
      "Performance is critical in modern web applications. In this blog, we will cover lazy loading, image optimization, SSR strategies...",
    thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    images: [],
    authorName: "Jewel Rana",
    category: "Next.js",
    tags: ["Next.js", "Optimization", "Performance"],
    metaTitle: "Next.js Optimization Guide",
    metaDescription: "Learn how to optimize Next.js apps for speed and SEO.",
    status: "published",
    featured: false,
    views: 180,
    likes: 22,
    isDeleted: false,
  },
  {
    title: "Backend Architecture with NestJS",
    slug: "nestjs-backend-architecture",
    excerpt: "Build scalable backend systems using NestJS and PostgreSQL.",
    content:
      "NestJS is a powerful framework for building scalable backend systems. In this article, we will explore module architecture...",
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    coverImage: "https://images.unsplash.com/photo-1537432376769-00a6c7e1c5aa",
    images: [],
    authorName: "Jewel Rana",
    category: "Backend",
    tags: ["NestJS", "PostgreSQL", "Architecture"],
    status: "draft",
    featured: false,
    views: 60,
    likes: 5,
    isDeleted: false,
  },
  {
    title: "Understanding JWT Authentication",
    slug: "understanding-jwt-authentication",
    excerpt: "A complete guide to JWT authentication in modern applications.",
    content:
      "JWT (JSON Web Token) is widely used for secure authentication. In this blog, we will break down access token, refresh token...",
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    images: [],
    authorName: "Jewel Rana",
    category: "Security",
    tags: ["JWT", "Authentication", "Security"],
    metaTitle: "JWT Authentication Guide",
    metaDescription:
      "Learn JWT authentication step by step with real examples.",
    status: "published",
    featured: true,
    views: 320,
    likes: 55,
    isDeleted: false,
  },
  {
    title: "React Best Practices for Clean Code",
    slug: "react-best-practices-clean-code",
    excerpt: "Write clean and maintainable React code with best practices.",
    content:
      "Writing clean code in React is essential for scalability. In this blog, we will cover component structure, hooks usage...",
    thumbnail: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    coverImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    images: [],
    authorName: "Jewel Rana",
    category: "Frontend",
    tags: ["React", "Clean Code", "Best Practices"],
    status: "published",
    featured: false,
    views: 210,
    likes: 30,
    isDeleted: false,
  },
];
const Blog = () => {
  const isLoading = false; // 🔥 initial loading

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
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))
            : blogs
                .slice(0, 3)
                .map((blog, index) => (
                  <BlogCard key={blog.slug || index} blog={blog} />
                ))}
        </div>

        {/* Button (Only if blogs > 2 & not loading) */}
        {!isLoading && blogs.length > 2 && (
          <div className="text-center mt-10">
            <motion.div
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Link
                href="/blog"
                className="inline-block px-6 py-3 rounded-full bg-main text-black font-medium text-sm sm:text-base"
              >
                View All Blog ↗
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
