'use strict';
const {
  Model, DataTypes
} = require('sequelize');
// import { now } from "sequelize/dist/lib/utils";
import db from "../config/config";
interface TweetAttributes{
  id: string;
  twit: string;
  comment: string;
}
// module.exports = (sequelize, DataTypes) => {
 export class Tweet extends Model<TweetAttributes> implements TweetAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
    id!: string;
    twit!: string;
    comment!: string;

  };
Tweet.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },

    twit: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize: db,
    modelName: 'Tweet',
  });
//   return Tweet;
// };