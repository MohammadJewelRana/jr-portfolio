"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const routes_1 = __importDefault(require("./routes"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const app = (0, express_1.default)();
//Middlewares
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://quick-hire-job-xi.vercel.app",
];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
// app.options('*', cors(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
// base route
app.get("/api", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Quick Hire Backend Server is running ",
    });
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map