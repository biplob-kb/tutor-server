const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const SubTopics = sequelize.define(
  "SubTopics",
  {
    subTopicId: {
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
    topicId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Topics",
        key: "topicsId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = SubTopics;
