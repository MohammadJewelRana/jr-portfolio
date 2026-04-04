import { z } from "zod";

// 🔹 Enum
const stackTypeEnum = z.enum(["frontend", "backend", "fullstack", "mobile"]);
const statusEnum = z.enum(["ongoing", "completed", "planned"]);

// 🔹 Create Project Schema
const createProjectZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    slug: z.string().min(1, "Slug is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().min(1, "Description is required"),

    // Media
    thumbnail: z.string().url("Thumbnail must be a valid URL"),
    images: z.array(z.string().url()).optional(),
    videoDemo: z.string().url().optional(),

    // Tech
    technologies: z
      .array(z.string().min(1))
      .min(1, "At least one technology is required"),
    stackType: stackTypeEnum.optional(),

    // Links
    liveLink: z.string().url().optional(),
    githubClient: z.string().url().optional(),
    githubServer: z.string().url().optional(),

    // Details
    features: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    solutions: z.array(z.string()).optional(),

    // SEO
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),

    // Status
    status: statusEnum.optional(),

    // Highlight
    featured: z.boolean().optional(),
    priority: z.number().optional(),

    // Client Info
    client: z.string().optional(),
    duration: z.string().optional(),
    teamSize: z.number().optional(),
  }),
});


// 🔹 Update Project Schema (partial)
const updateProjectZodSchema = z.object({
  body: createProjectZodSchema.shape.body.partial(),
});


// 🔹 Export
export const ProjectValidation = {
  createProjectZodSchema,
  updateProjectZodSchema,
};