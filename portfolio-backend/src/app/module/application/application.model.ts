import { model, Schema } from "mongoose";
import { IApplication } from "./application.interface";

const applicationSchema = new Schema<IApplication>(
  {
    jobID: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: [true, "Job ID is required"],
    },
    name: {
      type: String,
      required: [true, "Applicant name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      validate: {
        validator: function (value: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Please provide a valid email address",
      },
    },
    resumeLink: {
      type: String,
      required: [true, "Resume link is required"],
      trim: true,
      match: [/^(https?:\/\/)[^\s$.?#].[^\s]*$/i, "Please provide a valid URL"],
    },
    coverNote: {
      type: String,
      required: [true, "Cover note is required"],
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const ApplicationModel = model<IApplication>(
  "Application",
  applicationSchema
);
