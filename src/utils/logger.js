import winston from "winston";

import { logLevel } from "../config/index.js";

const Logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      (info) =>
        `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

export default Logger;
