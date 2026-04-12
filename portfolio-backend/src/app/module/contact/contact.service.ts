import { ContactModel } from "./contact.model";
import { IContact } from "./contact.interface";
import { sendEmail } from "../../utils/sendEmail";

const createContact = async (payload: IContact) => {
  // ✅ Save to DB
  const result = await ContactModel.create(payload);

  // ✅ Send Email (safe)
  try {
    await sendEmail(payload);
  } catch (error) {
    console.error("Email failed:", error);
  }

  return result;
};

const getAllContacts = async () => {
  return await ContactModel.find().sort({ createdAt: -1 });
};

const markAsRead = async (id: string) => {
  return await ContactModel.findByIdAndUpdate(
    id,
    { isRead: true },
    { new: true }
  );
};

export const ContactService = {
  createContact,
  getAllContacts,
  markAsRead,
};