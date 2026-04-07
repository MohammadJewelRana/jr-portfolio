import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import { BlogValidation } from "./blog.validation.zod";
import validateRequest from "../../middleware/validateRequest";

const router = Router();

// 🔹 Create Blog
router.post(
  "/create-blog",
  validateRequest(BlogValidation.createBlogZodSchema),
  BlogControllers.createBlog
);

// 🔹 Get All Blogs
router.get("/", BlogControllers.getAllBlogs);

// 🔹 Get Single Blog (id OR slug later extendable)
router.get("/:id", BlogControllers.getSingleBlog);

// 🔹 Update Blog
router.patch(
  "/:id",
  validateRequest(BlogValidation.updateBlogZodSchema),
  BlogControllers.updateBlog
);

// 🔹 Soft Delete
router.delete("/:id", BlogControllers.deleteBlog);

// 🔹 Like Blog
router.patch("/like/:id", BlogControllers.likeBlog);

export const BlogRoutes = router;