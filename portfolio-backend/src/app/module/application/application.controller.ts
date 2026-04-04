import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ApplicationServices } from "./application.service";
import httpStatus from "http-status";


const createApplication = catchAsync(async (req, res) => {
  const payload = req.body;

  const result =
    await ApplicationServices.createApplicationIntoDB(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Application submitted successfully",
    data: result,
  });
});

export const ApplicationController = {
  createApplication,
};