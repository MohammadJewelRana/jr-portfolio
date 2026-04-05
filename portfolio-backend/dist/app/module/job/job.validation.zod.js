"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobValidation = exports.updateJobZodSchema = exports.createJobZodSchema = void 0;
const zod_1 = require("zod");
exports.createJobZodSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(1, "Job title is required")
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title is too long")
        .trim(),
    company: zod_1.z
        .string()
        .min(1, "Company name is required")
        .min(2, "Company name must be at least 2 characters")
        .max(100)
        .trim(),
    location: zod_1.z
        .string()
        .min(1, "Location is required")
        .min(2)
        .max(100)
        .trim(),
    category: zod_1.z
        .string()
        .min(1, "Category is required")
        .min(2)
        .max(50)
        .trim(),
    description: zod_1.z
        .string()
        .min(1, "Job description is required")
        .min(20, "Description must be at least 20 characters")
        .max(5000)
        .trim(),
    isDeleted: zod_1.z.boolean().optional(),
});
exports.updateJobZodSchema = exports.createJobZodSchema.partial();
exports.JobValidation = {
    createJobZodSchema: exports.createJobZodSchema,
    updateJobZodSchema: exports.updateJobZodSchema
};
//# sourceMappingURL=job.validation.zod.js.map