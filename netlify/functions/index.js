const serverless = require("serverless-http");
const app = require("../../src/server/app");

exports.handler = serverless(app);
