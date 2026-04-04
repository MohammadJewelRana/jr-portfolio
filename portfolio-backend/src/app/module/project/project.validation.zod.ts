import { z } from "zod";

export const createJobZodSchema = z.object({
  title: z
    .string()
    .min(1, "Job title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title is too long")
    .trim(),

  company: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters")
    .max(100)
    .trim(),

  location: z
    .string()
    .min(1, "Location is required")
    .min(2)
    .max(100)
    .trim(),

  category: z
    .string()
    .min(1, "Category is required")
    .min(2)
    .max(50)
    .trim(),

  description: z
    .string()
    .min(1, "Job description is required")
    .min(20, "Description must be at least 20 characters")
    .max(5000)
    .trim(),

  isDeleted: z.boolean().optional(),
});

export const updateJobZodSchema = createJobZodSchema.partial();
 

export const JobValidation={
    createJobZodSchema,
    updateJobZodSchema
}