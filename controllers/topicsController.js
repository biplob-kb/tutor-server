const { successResponse } = require("./responseController");

const createTopic = async (req, res, next) => {
  try {
    
    return successResponse(res, {
      statusCode: 201,
      message: "Topic created successfully",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTopic };
