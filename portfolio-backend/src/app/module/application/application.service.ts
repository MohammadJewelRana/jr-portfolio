import mongoose from "mongoose";
import { IApplication } from "./application.interface";
import { ApplicationModel } from "./application.model";
import { JobModel } from "../job/job.model";

// Submit Application
const createApplicationIntoDB = async (payload: IApplication) => {
  if (!payload) {
    throw new Error("Application data missing");
  }

  const { jobID, name, email, resumeLink, coverNote } = payload;

  if (!jobID || !name || !email || !resumeLink || !coverNote) {
    throw new Error("All required fields must be provided");
  }

  if (!mongoose.Types.ObjectId.isValid(jobID)) {
    throw new Error("Invalid Job ID");
  }

  //  Check Job exists or not
  const jobExists = await JobModel.findOne({
    _id: jobID,
    isDeleted: false,
  });

  if (!jobExists) {
    throw new Error("Job not found");
  }

  const existingApplication = await ApplicationModel.findOne({
    jobID,
    email,
    isDeleted: false,
  });

  if (existingApplication) {
    throw new Error("You have already applied for this job using this email");
  }

  const result = await ApplicationModel.create({
    ...payload,
    jobID: new mongoose.Types.ObjectId(jobID),
  });

  return result;
};

export const ApplicationServices = {
  createApplicationIntoDB,
};
