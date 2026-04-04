import { Router } from "express";
import { JobController } from "./project.controller";
import { JobValidation } from "./project.validation.zod";
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

export const ProjectRoutes = router;
