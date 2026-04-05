"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRoutes = void 0;
const express_1 = require("express");
const job_controller_1 = require("./job.controller");
const job_validation_zod_1 = require("./job.validation.zod");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(job_validation_zod_1.JobValidation.createJobZodSchema), job_controller_1.JobController.createJob);
router.get("/", job_controller_1.JobController.getAllJobs);
router.get("/:id", job_controller_1.JobController.getSingleJob);
router.delete("/:id", job_controller_1.JobController.deleteSingleJob);
exports.JobRoutes = router;
//# sourceMappingURL=job.route.js.map