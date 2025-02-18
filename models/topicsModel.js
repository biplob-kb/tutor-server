const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const SubTopics = require("./subTopiceModel");

const Topics = sequelize.define(
  "Topics",
  {
    topicsId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

// Association
Topics.hasMany(SubTopics, {
  foreignKey: "topicId",
  as: "subTopics", // Alias for the association
});
SubTopics.belongsTo(Topics, {
  foreignKey: "topicId",
  as: "topic", // Alias for the parent
});

module.exports = Topics;
