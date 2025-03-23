import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { generateLast12MonthsData } from "../utils/analytics.generator";
import userModel from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import OrderModel from "../models/order.model";
import CourseModel from "../models/course.model";

//get user analytics
export const getUserAnalytics = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await generateLast12MonthsData(userModel)
        res.status(200).json({
            success: true,
            users
        })

    }
    catch (error: any) {
        return next(new ErrorHandler(error.message,500))
    }
})

//get Order analytics
export const getOrderAnalytics = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = await generateLast12MonthsData(OrderModel)
        res.status(200).json({
            success: true,
            order
        })

    }
    catch (error: any) {
        return next(new ErrorHandler(error.message,500))
    }
})

//get Courses analytics
export const getCoursesAnalytics = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const courses = await generateLast12MonthsData(CourseModel)
        res.status(200).json({
            success: true,
            courses
        })

    }
    catch (error: any) {
        return next(new ErrorHandler(error.message,500))
    }
})