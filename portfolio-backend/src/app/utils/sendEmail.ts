import nodemailer from "nodemailer";
import config from "../config";

export const sendEmail = async (payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email_user,
      pass: config.email_pass,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${config.email_user}>`,
    to: config.email_user,
    subject: "New Contact Message 🚀",
    html: `
      <h3>New Contact Message</h3>
      <p><b>Name:</b> ${payload.name}</p>
      <p><b>Email:</b> ${payload.email}</p>
      <p><b>Phone:</b> ${payload.phone}</p>
      <p><b>Message:</b> ${payload.message}</p>
    `,
  });
};