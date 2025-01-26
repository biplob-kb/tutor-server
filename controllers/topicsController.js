const Topics = require("../models/topicsModel");
const { successResponse } = require("./responseController");
const createError = require("http-errors");

const createTopic = async (req, res, next) => {
  try {
    const topic = await Topics.create(req.body);

    if (!topic) throw createError(400, "Failed to create the topic");

    return successResponse(res, {
      statusCode: 201,
      message: "Topic created successfully",
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTopics = async (req, res, next) => {
  try {
    const topics = await Topics.findAll();

    return successResponse(res, {
      statusCode: 200,
      message: "All topics get successfully",
      data: topics,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTopic, getAllTopics };
