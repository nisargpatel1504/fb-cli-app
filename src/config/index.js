import dotenv from "dotenv";
dotenv.config();

// src/config/index.js

export const metaApi = {
  accessToken: process.env.FACEBOOK_ACCESS_TOKEN,
  baseUrl: "https://graph.facebook.com/v19.0",
  rateLimitWindowMs: 2000, // Example: 2 seconds window for rate limiting
};

export const logLevel = process.env.LOG_LEVEL || "info";
