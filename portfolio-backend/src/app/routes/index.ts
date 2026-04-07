import { Router } from "express";
 
import { ProjectRoutes } from "../module/project/project.route";
import { BlogRoutes } from "../module/blog/blog.route";
 

const router = Router();

const moduleRoutes = [
 
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
