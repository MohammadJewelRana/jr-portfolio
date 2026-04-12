import { Router } from "express";
 
import { ProjectRoutes } from "../module/project/project.route";
import { BlogRoutes } from "../module/blog/blog.route";
import { ContactRoutes } from "../module/contact/contact.route";
 

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
  {
    path: "/contacts",
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
