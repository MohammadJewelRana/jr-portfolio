import { Request, Response } from "express";
import { ProjectServices } from "./project.service";

// 🔹 Create Project
const createProject = async (req: Request, res: Response) => {
  try {
    const result = await ProjectServices.createProjectIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create project",
    });
  }
};


// 🔹 Get All Projects
const getAllProjects = async (req: Request, res: Response) => {
  try {
    const result = await ProjectServices.getAllProjects(req.query);

    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to get projects",
    });
  }
};


// 🔹 Get Single Project
const getSingleProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await ProjectServices.getSingleProject(id as string);

    res.status(200).json({
      success: true,
      message: "Project retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || "Project not found",
    });
  }
};


// 🔹 Update Project
const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await ProjectServices.updateProject(id as string, req.body);

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to update project",
    });
  }
};


// 🔹 Delete Project (Soft Delete)
const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await ProjectServices.deleteProject(id as string);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to delete project",
    });
  }
};


// 🔹 Like Project
const likeProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await ProjectServices.likeProject(id as string);

    res.status(200).json({
      success: true,
      message: "Project liked",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to like project",
    });
  }
};


export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
  likeProject,
};