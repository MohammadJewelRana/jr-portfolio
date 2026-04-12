import { Request, Response } from "express";
import httpStatus from "http-status";
 
import sendResponse from "../../utils/sendResponse";
import { ContactService } from "./contact.service";
import { catchAsync } from "../../utils/catchAsync";

// 🔥 Create Contact
const createContact = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.createContact(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Message sent successfully",
    data: result,
  });
});

// 🔥 Get All Contacts
const getAllContacts = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.getAllContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contacts retrieved successfully",
    data: result,
  });
});

// 🔥 Mark as Read
const markAsRead = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ContactService.markAsRead(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Message marked as read",
    data: result,
  });
});

export const ContactController = {
  createContact,
  getAllContacts,
  markAsRead,
};