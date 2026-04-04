import { IJob } from "./job.interface";
import { JobModel } from "./job.model";

//  Create Job
const createJobIntoDB = async (payload: IJob) => {
  if (!payload) {
    throw new Error("Job data missing");
  }

  const { title, company, location, category, description } = payload;

  if (!title || !company || !location || !category || !description) {
    throw new Error("All required fields must be provided");
  }

  const result = await JobModel.create(payload);

  return result;
};

//  Get All Jobs
const getAllJobs = async () => {
  const result = await JobModel.find({ isDeleted: false })
    .sort({ createdAt: -1 })
    .lean();

  return result;
};

// Get Single Job
const getSingleJob = async (id: string) => {
  if (!id) throw new Error("Job ID missing");

  const result = await JobModel.findOne({
    _id: id,
    isDeleted: false,
  }).lean();

  return result;
};

// Soft Delete Job
const deleteSingleJob = async (id: string) => {
  if (!id) throw new Error("Job ID missing");

  const result = await JobModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  return result;
};

export const JobServices = {
  createJobIntoDB,
  getAllJobs,
  getSingleJob,
  deleteSingleJob,
};
