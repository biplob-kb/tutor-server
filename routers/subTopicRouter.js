const express = require("express");
const {
  createSubTopic,
  getAllSubTopics,
  getSubTopicsByTopics,
} = require("../controllers/subTopicsController");
const subTopicRouter = express.Router();

subTopicRouter.post("/", createSubTopic);
subTopicRouter.get("/", getAllSubTopics);
subTopicRouter.get("/get-by-topic/:topicId", getSubTopicsByTopics);

module.exports = subTopicRouter;
