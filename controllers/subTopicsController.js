const SubTopics = require("../models/subTopiceModel");
const { successResponse } = require("./responseController");
const createError = require("http-errors");

const createSubTopic = async (req, res, next) => {
  try {
    const subtopic = await SubTopics.create(req.body);

    if (!subtopic) throw createError(400, "Failed to create sub topic");

    return successResponse(res, {
      statusCode: 201,
      message: "Sub topic created successfully",
      data: subtopic,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSubTopics = async (req, res, next) => {
  try {
    const subTopics = await SubTopics.findAll();

    return successResponse(res, {
      statusCode: 200,
      message: "All sub topics get successfully",
      data: subTopics,
    });
  } catch (error) {
    next(error);
  }
};

const getSubTopicsByTopics = async (req, res, next) => {
  try {
    const { topicId } = req.params;

    const subTopics = await SubTopics.findAll({ where: { topicId } });

    return successResponse(res, {
      statusCode: 200,
      message: "Sub topics get successfully by topics",
      data: subTopics,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createSubTopic, getAllSubTopics, getSubTopicsByTopics };
