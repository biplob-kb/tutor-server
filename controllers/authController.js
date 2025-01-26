const User = require("../models/userModel");
const { successResponse } = require("./responseController");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const { createJsonWebToken } = require("../helper/jsonwebtoken");
const { jwtAccessKey } = require("../secret");

const signup = async (req, res, next) => {
  try {
    const { email } = req.body;

    const existUser = await User.findOne({ where: { email } });

    if (existUser)
      throw createError(409, "User already exist with this email.");

    const newUser = await User.create(req.body);

    return successResponse(res, {
      statusCode: 201,
      message: "Sign up successful",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) throw createError(401, "Invalid email or password");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw createError(401, "Invalid email or password");

    const token = createJsonWebToken({ user }, jwtAccessKey, "5d");

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 5 * 24 * 60 * 60 * 1000,
    });

    const { password: _, ...sanitizedUser } = user.toJSON();

    return successResponse(res, {
      statusCode: 200,
      message: "Login successful",
      data: { token, user: sanitizedUser },
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res, next) => {
  try {
    res.clearCookie("token");
    return successResponse(res, {
      statusCode: 200,
      message: "Logout successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login, logout };
