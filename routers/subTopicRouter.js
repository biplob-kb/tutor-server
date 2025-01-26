const express = require("express");
const { createSubTopic } = require("../controllers/subTopicsController");
const subTopicRouter = express.Router();

subTopicRouter.post("/", createSubTopic);

module.exports = subTopicRouter;
