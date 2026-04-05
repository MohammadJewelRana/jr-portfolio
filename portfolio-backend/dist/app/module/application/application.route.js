"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRoutes = void 0;
const express_1 = require("express");
const application_controller_1 = require("./application.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const application_validation_zod_1 = require("./application.validation.zod");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(application_validation_zod_1.ApplicationValidation.createApplicationZodSchema), application_controller_1.ApplicationController.createApplication);
exports.ApplicationRoutes = router;
//# sourceMappingURL=application.route.js.map