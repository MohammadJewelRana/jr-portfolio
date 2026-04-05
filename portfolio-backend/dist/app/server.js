"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const mongoose_1 = __importDefault(require("mongoose"));
let server;
const startServer = async () => {
    try {
        await mongoose_1.default.connect(config_1.default.database_url);
        console.log("✅ MongoDB connected successfully");
        //here config.port comes from index.js file
        server = app_1.default.listen(config_1.default.port, () => {
            console.log(`The feedback app listening on port ${config_1.default.port}`);
        });
    }
    catch (err) {
        console.log(err);
    }
};
startServer();
//for Asynchronous code
process.on("unhandledRejection", (err) => {
    console.log("unhandledRejection is detected,shutting down...", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
//for synchronous code
process.on("uncaughtException", (err) => {
    console.log("unhandledException is detected,shutting down...", err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map