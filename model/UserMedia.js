const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

UserMedia.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    mediaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    watched: {
      type: DataTypes.BIT,
      allowNull: false,
    },
    watchedCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usermedia',
  }
);
module.exports = UserMedia;