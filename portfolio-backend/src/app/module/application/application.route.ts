import { Router } from "express";
import { ApplicationController } from "./application.controller";
import validateRequest from "../../middleware/validateRequest";
import { ApplicationValidation } from "./application.validation.zod";

const router = Router();
router.post(
  "/",
  validateRequest(ApplicationValidation.createApplicationZodSchema),
  ApplicationController.createApplication
);

export const ApplicationRoutes = router;
