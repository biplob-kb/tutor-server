const { Sequelize } = require("sequelize");
const { successResponse } = require("./responseController");
const User = require("../models/userModel");

const getAllUser = async (req, res, next) => {
  try {
    const page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10;
    const search = req.query.search || "";

    const filter = {};

    if (search) {
      filter[Sequelize.Op.or] = [
        {
          name: {
            [Sequelize.Op.iLike]: `%${search}%`,
          },
        },
        {
          email: {
            [Sequelize.Op.iLike]: `%${search}%`,
          },
        },
      ];
    }

    const users = await User.findAndCountAll({
      where: filter,
      limit: limit,
      offset: (page - 1) * limit,
      attributes: { exclude: ["password"] },
    });

    return successResponse(res, {
      statusCode: 200,
      message: "All user get successfully",
      meta: {
        totalRecords: users.count,
        page: page,
        limit: limit,
        totalPages: Math.ceil(users.count / limit),
      },
      data: users?.rows,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUser };
