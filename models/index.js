const SubTopics = require("./subTopiceModel");
const Topics = require("./topicsModel");
const User = require("./userModel");

const initModels = async () => {
  await User.sync({ alter: true });
  await Topics.sync({ alter: true });
  await SubTopics.sync({ alter: true });
  console.log("Models synced");
};

module.exports = initModels;
