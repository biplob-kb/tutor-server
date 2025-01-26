const express = require("express");
const { createTopic } = require("../controllers/topicsController");
const topicsRouter = express.Router();

topicsRouter.post("/", createTopic);

module.exports = topicsRouter;
