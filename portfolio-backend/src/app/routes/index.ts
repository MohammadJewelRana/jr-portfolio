import { Router } from "express";
import { JobRoutes } from "../module/job/job.route";
import { ApplicationRoutes } from "../module/application/application.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/jobs",
    route: JobRoutes,
  },
  {
    path: "/applications",
    route: ApplicationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
