import { z } from "zod";

// 🔹 Enum
const statusEnum = z.enum(["draft", "published"]);

// 🔹 Create Blog
const createBlogZodSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),

  thumbnail: z.string().url(),
  coverImage: z.string().url().optional(),
  images: z.array(z.string().url()).optional(),

  authorName: z.string().optional(),
  authorImage: z.string().url().optional(),

  category: z.string().min(1),
  tags: z.array(z.string()).optional(),

  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),

  status: statusEnum.optional(),
  featured: z.boolean().optional(),
});

// 🔹 Update Blog
const updateBlogZodSchema = createBlogZodSchema
  .omit({ slug: true })
  .partial();

export const BlogValidation = {
  createBlogZodSchema,
  updateBlogZodSchema,
};