"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const job_service_1 = require("./job.service");
const http_status_1 = __importDefault(require("http-status"));
//  Create Job
const createJob = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const result = await job_service_1.JobServices.createJobIntoDB(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Job created successfully",
        data: result,
    });
});
//  Get All Jobs 
const getAllJobs = (0, catchAsync_1.catchAsync)(async (_req, res) => {
    const result = await job_service_1.JobServices.getAllJobs();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Jobs fetched successfully",
        data: result,
    });
});
//  Get Single Job
const getSingleJob = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const result = await job_service_1.JobServices.getSingleJob(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Single job fetched successfully",
        data: result,
    });
});
// Delete Job 
const deleteSingleJob = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const result = await job_service_1.JobServices.deleteSingleJob(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Job deleted successfully",
        data: result,
    });
});
exports.JobController = {
    createJob,
    getAllJobs,
    getSingleJob,
    deleteSingleJob,
};
//# sourceMappingURL=job.controller.js.map