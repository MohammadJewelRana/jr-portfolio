"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const application_service_1 = require("./application.service");
const http_status_1 = __importDefault(require("http-status"));
const createApplication = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const result = await application_service_1.ApplicationServices.createApplicationIntoDB(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Application submitted successfully",
        data: result,
    });
});
exports.ApplicationController = {
    createApplication,
};
//# sourceMappingURL=application.controller.js.map