import { authorizeRoles } from "../controllers/user.controller";
import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrderAnalytics, getUserAnalytics } from "../controllers/analytics.controller";
const analyticsRoute = express.Router();
analyticsRoute.get(
  "/get-users-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getUserAnalytics
);
analyticsRoute.get(
    "/get-order-analytics",
    isAuthenticated,
    authorizeRoles("admin"),
    getOrderAnalytics
);
analyticsRoute.get(
    "/get-courses-analytics",
    isAuthenticated,
    authorizeRoles("admin"),
    getCoursesAnalytics
  );
export default analyticsRoute;
