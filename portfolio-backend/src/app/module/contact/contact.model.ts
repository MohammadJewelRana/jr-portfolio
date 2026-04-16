import { Schema, model } from "mongoose";
import { IContact } from "./contact.interface";

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      
      trim: true,
    },
    phone: {
      type: String,
      
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ContactModel = model<IContact>("Contact", contactSchema);