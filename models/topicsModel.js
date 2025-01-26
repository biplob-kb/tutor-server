const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

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

module.exports = Topics;
