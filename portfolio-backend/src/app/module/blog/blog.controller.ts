import { Request, Response } from "express";
import httpStatus from "http-status";

import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";
import { catchAsync } from "../../utils/catchAsync";

// 🔹 Create
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

// 🔹 Get All
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getAllBlogs(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs retrieved successfully",
    data: result,
  });
});

// 🔹 Get Single
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await BlogServices.getSingleBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog retrieved successfully",
    data: result,
  });
});

// 🔹 Update
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await BlogServices.updateBlog(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

// 🔹 Delete
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await BlogServices.deleteBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

// 🔹 Like
const likeBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await BlogServices.likeBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog liked successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
};
