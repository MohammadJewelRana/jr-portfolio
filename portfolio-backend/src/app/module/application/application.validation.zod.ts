import { z } from "zod";
import mongoose from "mongoose";

const objectIdSchema = z
  .string()
  .min(1, "Job ID is required")
  .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid Job ID",
  });

export const createApplicationZodSchema = z.object({
  jobID: objectIdSchema,

  name: z
    .string()
    .min(1, "Applicant name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100)
    .trim(),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please provide a valid email address")
    .trim(),

  resumeLink: z
    .string()
    .min(1, "Resume link is required")
    .url("Please provide a valid URL")
    .trim(),

  coverNote: z
    .string()
    .min(1, "Cover note is required")
    .min(20, "Cover note must be at least 20 characters")
    .max(5000)
    .trim(),

  isDeleted: z.boolean().optional(),
});

export const updateApplicationZodSchema = createApplicationZodSchema.partial();

export const ApplicationValidation = {
  createApplicationZodSchema,
  updateApplicationZodSchema,
};
