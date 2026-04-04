import { Router } from "express";
import { ProjectControllers } from "./project.controller";
import { ProjectValidation } from "./project.validation.zod";
import validateRequest from "../../middleware/validateRequest";

const router = Router();

// 🔹 Create Project
router.post(
  "/",
  validateRequest(ProjectValidation.createProjectZodSchema),
  ProjectControllers.createProject
);

// 🔹 Get All Projects
router.get("/", ProjectControllers.getAllProjects);

// 🔹 Get Single Project (id OR slug)
router.get("/:id", ProjectControllers.getSingleProject);

// 🔹 Update Project
router.patch(
  "/:id",
  validateRequest(ProjectValidation.updateProjectZodSchema),
  ProjectControllers.updateProject
);

// 🔹 Soft Delete
router.delete("/:id", ProjectControllers.deleteProject);

// 🔹 Like Project
router.patch("/like/:id", ProjectControllers.likeProject);

export const ProjectRoutes = router;