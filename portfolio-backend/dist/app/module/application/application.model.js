"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModel = void 0;
const mongoose_1 = require("mongoose");
const applicationSchema = new mongoose_1.Schema({
    jobID: {
        type: mongoose_1.Schema.Types.ObjectId,
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
            validator: function (value) {
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
}, {
    timestamps: true,
});
exports.ApplicationModel = (0, mongoose_1.model)("Application", applicationSchema);
//# sourceMappingURL=application.model.js.map