require("dotenv").config();
import { Response } from "express";
import { IUser } from "../models/user.model";
import { redis } from "./redis";

interface ITokenOptions {
  expires: Date;
  maxAge: number;
  httpOnly: boolean;
  sameSite: "lax" | "strict" | "none" | undefined;
  secure?: boolean;
}

//parse environment variable to integrates with fallback values
const accessTokenExpire = parseInt(
    process.env.ACCESS_TOKEN_EXPIRE || "300",
    10
  );
  const refreshTokenExpire = parseInt(
    process.env.REFRESH_TOKEN_EXPIRE || "1200",
    10
  );

  //options for cookies
 export const accessTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire*60*60 * 1000),
    maxAge: accessTokenExpire*60*60 * 1000,
    httpOnly: true,
    sameSite: "lax",
  };
 export const refreshTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + refreshTokenExpire * 1000),
    maxAge: refreshTokenExpire*60*60*24 * 1000,
    httpOnly: true,
    sameSite: "lax",
  };



export const sendToken = (user: IUser, statusCode: number, res: Response) => {
  const accessToken = user.SignAccessToken();
  const refreshToken = user.SignRefreshToken();

  // Ensure _id is a string before storing it in Redis
  const userId = String(user._id);

  // Upload session to Redis
  redis.setex(userId, refreshTokenExpire*1000, JSON.stringify(user));

  //only set secure to true in production
  if (process.env.NODE_ENV === "production") {
    accessTokenOptions.secure = true;
  }
  res.cookie("access_token", accessToken, accessTokenOptions);
  res.cookie("refresh_token", refreshToken, refreshTokenOptions);
  res.status(statusCode).json({
    success: true,
    user,
    accessToken,
  });
};
