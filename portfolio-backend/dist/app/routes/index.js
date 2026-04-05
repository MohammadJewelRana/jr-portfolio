"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_route_1 = require("../module/job/job.route");
const application_route_1 = require("../module/application/application.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/jobs",
        route: job_route_1.JobRoutes,
    },
    {
        path: "/applications",
        route: application_route_1.ApplicationRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
//# sourceMappingURL=index.js.map