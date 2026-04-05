"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobServices = void 0;
const job_model_1 = require("./job.model");
//  Create Job
const createJobIntoDB = async (payload) => {
    if (!payload) {
        throw new Error("Job data missing");
    }
    const { title, company, location, category, description } = payload;
    if (!title || !company || !location || !category || !description) {
        throw new Error("All required fields must be provided");
    }
    const result = await job_model_1.JobModel.create(payload);
    return result;
};
//  Get All Jobs
const getAllJobs = async () => {
    const result = await job_model_1.JobModel.find({ isDeleted: false })
        .sort({ createdAt: -1 })
        .lean();
    return result;
};
// Get Single Job
const getSingleJob = async (id) => {
    if (!id)
        throw new Error("Job ID missing");
    const result = await job_model_1.JobModel.findOne({
        _id: id,
        isDeleted: false,
    }).lean();
    return result;
};
// Soft Delete Job
const deleteSingleJob = async (id) => {
    if (!id)
        throw new Error("Job ID missing");
    const result = await job_model_1.JobModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
};
exports.JobServices = {
    createJobIntoDB,
    getAllJobs,
    getSingleJob,
    deleteSingleJob,
};
//# sourceMappingURL=job.service.js.map