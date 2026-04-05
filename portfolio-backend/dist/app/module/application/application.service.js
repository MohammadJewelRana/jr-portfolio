"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const application_model_1 = require("./application.model");
const job_model_1 = require("../job/job.model");
// Submit Application
const createApplicationIntoDB = async (payload) => {
    if (!payload) {
        throw new Error("Application data missing");
    }
    const { jobID, name, email, resumeLink, coverNote } = payload;
    if (!jobID || !name || !email || !resumeLink || !coverNote) {
        throw new Error("All required fields must be provided");
    }
    if (!mongoose_1.default.Types.ObjectId.isValid(jobID)) {
        throw new Error("Invalid Job ID");
    }
    //  Check Job exists or not
    const jobExists = await job_model_1.JobModel.findOne({
        _id: jobID,
        isDeleted: false,
    });
    if (!jobExists) {
        throw new Error("Job not found");
    }
    const existingApplication = await application_model_1.ApplicationModel.findOne({
        jobID,
        email,
        isDeleted: false,
    });
    if (existingApplication) {
        throw new Error("You have already applied for this job using this email");
    }
    const result = await application_model_1.ApplicationModel.create({
        ...payload,
        jobID: new mongoose_1.default.Types.ObjectId(jobID),
    });
    return result;
};
exports.ApplicationServices = {
    createApplicationIntoDB,
};
//# sourceMappingURL=application.service.js.map