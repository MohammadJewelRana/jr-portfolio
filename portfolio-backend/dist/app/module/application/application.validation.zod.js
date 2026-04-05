"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationValidation = exports.updateApplicationZodSchema = exports.createApplicationZodSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
const objectIdSchema = zod_1.z
    .string()
    .min(1, "Job ID is required")
    .refine((val) => mongoose_1.default.Types.ObjectId.isValid(val), {
    message: "Invalid Job ID",
});
exports.createApplicationZodSchema = zod_1.z.object({
    jobID: objectIdSchema,
    name: zod_1.z
        .string()
        .min(1, "Applicant name is required")
        .min(2, "Name must be at least 2 characters")
        .max(100)
        .trim(),
    email: zod_1.z
        .string()
        .min(1, "Email is required")
        .email("Please provide a valid email address")
        .trim(),
    resumeLink: zod_1.z
        .string()
        .min(1, "Resume link is required")
        .url("Please provide a valid URL")
        .trim(),
    coverNote: zod_1.z
        .string()
        .min(1, "Cover note is required")
        .min(20, "Cover note must be at least 20 characters")
        .max(5000)
        .trim(),
    isDeleted: zod_1.z.boolean().optional(),
});
exports.updateApplicationZodSchema = exports.createApplicationZodSchema.partial();
exports.ApplicationValidation = {
    createApplicationZodSchema: exports.createApplicationZodSchema,
    updateApplicationZodSchema: exports.updateApplicationZodSchema,
};
//# sourceMappingURL=application.validation.zod.js.map