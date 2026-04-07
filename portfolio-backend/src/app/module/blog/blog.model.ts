import { Schema, model } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
  {
    // 🔹 Basic Info
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },

    // 🔹 Media
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },
    coverImage: {
      type: String,
    },
    images: {
      type: [String],
      default: [],
    },

    // 🔹 Author
    authorName: {
      type: String,
      default: "Jewel Rana",
    },
    authorImage: {
      type: String,
    },

    // 🔹 Category
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },

    // 🔹 SEO
    metaTitle: String,
    metaDescription: String,

    // 🔹 Status
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    featured: {
      type: Boolean,
      default: false,
    },

    // 🔹 Engagement
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },

    // 🔹 System
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// 🔍 Search Index (VERY IMPORTANT)
blogSchema.index({
  title: "text",
  excerpt: "text",
  content: "text",
  tags: "text",
  category: "text",
});

export const BlogModel = model<IBlog>("Blog", blogSchema);