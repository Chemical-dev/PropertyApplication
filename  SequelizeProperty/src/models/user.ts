'use strict';
const {
  Model, DataTypes
} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
  import db from "../config/config";
  interface UsersAttributes{
    id: string;
    username: string;
    email: string;
    password: string;
  }
   export class User extends Model<UsersAttributes> implements UsersAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
    id!: string;
    username!: string;
    email!: string;
    password!: string;
  };
  User.init({
     id: {
      type: DataTypes.UUID,
      allownull: false,
      primaryKey: true
    },

    username: {
      type: DataTypes.STRING,
      allownull: false,
     
    },
    email: {
      type: DataTypes.STRING,
      allownull: false
    },
     
    password: {
      type: DataTypes.STRING,
      allownull: false
    
    },
    createdAt: {
      type: DataTypes.DATE,
      allownull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allownull: false
    }
  }, {
    sequelize: db,
    modelName: 'User',
  });
//   return User;
// };