import RateLimiter from "./utils/RateLimiter.js";
import { metaApi } from "./config/index.js";
import Logger from "./utils/logger.js";
import MetaService from "./api/MetaService.js";
const metaService = new MetaService(metaApi.accessToken);
const rateLimiter = new RateLimiter(metaApi.rateLimitWindowMs);

async function fetchAndLogUserData() {
  try {
    const userData = await metaService.fetchUserData();
    Logger.info(`User Data: ${JSON.stringify(userData)}`);
  } catch (error) {
    Logger.error(`Failed to fetch user data: ${error.message}`);
    if (error.response && error.response.status === 429) {
      Logger.warn("Rate limit exceeded. Adjusting request frequency.");
    }
  }
}

async function start() {
  setInterval(() => {
    rateLimiter.limit(fetchAndLogUserData);
  }, metaApi.rateLimitWindowMs);
}

start();
