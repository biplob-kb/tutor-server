const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const { errorResponse } = require("./controllers/responseController");
const authRouter = require("./routers/authRouter");
const { connectDb } = require("./config/db");
const initModels = require("./models");
const userRouter = require("./routers/userRouter");
const topicsRouter = require("./routers/topicsRouter");

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDb();
initModels();

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/topics", topicsRouter);

app.get("/", (req, res) => {
  res.send("Postgres server is running from third...");
});

app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
