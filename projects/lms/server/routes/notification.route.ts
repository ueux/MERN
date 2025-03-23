import { authorizeRoles } from "../controllers/user.controller";
import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { getNotifications, updateNotifications } from "../controllers/notification.controller";
const notificationRoute = express.Router();
notificationRoute.get(
  "/get-all-notifications",
  isAuthenticated,
  authorizeRoles("admin"),
  getNotifications
);
notificationRoute.get(
    "/update-notification/:id",
    isAuthenticated,
    authorizeRoles("admin"),
    updateNotifications
  );
export default notificationRoute;
