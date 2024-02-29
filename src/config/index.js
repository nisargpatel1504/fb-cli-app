import dotenv from "dotenv";
dotenv.config();
const RATE_LIMIT_SECONDS = 2000; //2000 means 2 seconds
export const metaApi = {
  accessToken: process.env.FACEBOOK_ACCESS_TOKEN,
  baseUrl: "https://graph.facebook.com/v19.0",
  rateLimitWindowMs: RATE_LIMIT_SECONDS,
};

export const logLevel = process.env.LOG_LEVEL || "info";
