import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { JobServices } from "./job.service";
import httpStatus from "http-status";

//  Create Job
const createJob = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await JobServices.createJobIntoDB(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Job created successfully",
    data: result,
  });
});

//  Get All Jobs 
const getAllJobs = catchAsync(async (_req, res) => {
  const result = await JobServices.getAllJobs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Jobs fetched successfully",
    data: result,
  });
});

//  Get Single Job
const getSingleJob = catchAsync(async (req, res) => {
  const id = req.params.id as string;

  const result = await JobServices.getSingleJob(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single job fetched successfully",
    data: result,
  });
});

// Delete Job 
const deleteSingleJob = catchAsync(async (req, res) => {
  const id = req.params.id as string;

  const result = await JobServices.deleteSingleJob(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Job deleted successfully",
    data: result,
  });
});

export const JobController = {
  createJob,
  getAllJobs,
  getSingleJob,
  deleteSingleJob,
};
