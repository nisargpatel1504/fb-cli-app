import dotenv from "dotenv";
dotenv.config();

const TWO_SECOND_RATE_LIMIT_TIME = 2000;

export const metaApi = {
  accessToken: process.env.FACEBOOK_ACCESS_TOKEN,
  baseUrl: "https://graph.facebook.com/v19.0",
  rateLimitWindowMs: TWO_SECOND_RATE_LIMIT_TIME, // Example: 2 seconds window for rate limiting
};

export const logLevel = process.env.LOG_LEVEL || "info";
