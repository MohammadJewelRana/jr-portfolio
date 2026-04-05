"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobModel = void 0;
const mongoose_1 = require("mongoose");
const jobSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Job title is required"],
        trim: true,
    },
    company: {
        type: String,
        required: [true, "Company name is required"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Job description is required"],
        trim: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
jobSchema.index({ title: "text", company: "text", location: "text" });
exports.JobModel = (0, mongoose_1.model)("Job", jobSchema);
//# sourceMappingURL=job.model.js.map