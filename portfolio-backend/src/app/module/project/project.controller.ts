import { Request, Response } from "express";
import httpStatus from "http-status";

import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";
import { catchAsync } from "../../utils/catchAsync";

// 🔹 Create Project
const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

// 🔹 Get All Projects
const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getAllProjects(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});

// 🔹 Get Single Project
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await ProjectServices.getSingleProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully",
    data: result,
  });
});

// 🔹 Update Project
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await ProjectServices.updateProject(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

// 🔹 Delete Project (Soft Delete)
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await ProjectServices.deleteProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project deleted successfully",
    data: result,
  });
});

// 🔹 Like Project
const likeProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const result = await ProjectServices.likeProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project liked successfully",
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
  likeProject,
};
