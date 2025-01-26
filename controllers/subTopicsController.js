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

module.exports = { createSubTopic };
