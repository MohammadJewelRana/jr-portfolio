import { Types } from "mongoose";

export interface IApplication {
  jobID: Types.ObjectId;  
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}