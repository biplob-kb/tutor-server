const express = require("express");
const {
  createTopic,
  getAllTopics,
} = require("../controllers/topicsController");
const topicsRouter = express.Router();

topicsRouter.post("/", createTopic);
topicsRouter.get("/", getAllTopics);

module.exports = topicsRouter;
