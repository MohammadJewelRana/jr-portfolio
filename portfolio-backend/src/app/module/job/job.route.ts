import { Router } from "express";
import { JobController } from "./job.controller";
import { JobValidation } from "./job.validation.zod";
import validateRequest from "../../middleware/validateRequest";

const router = Router();

router.post(
  "/",
  validateRequest(JobValidation.createJobZodSchema),
  JobController.createJob
);

router.get("/", JobController.getAllJobs);

router.get("/:id", JobController.getSingleJob);

router.delete("/:id", JobController.deleteSingleJob);

export const JobRoutes = router;
