const express = require("express");
const { getAllUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/", getAllUser);

module.exports = userRouter;
