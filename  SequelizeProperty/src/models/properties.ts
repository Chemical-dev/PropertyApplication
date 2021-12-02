'use strict';
const {
  Model, DataTypes
} = require('sequelize');
import db from "../config/config";
interface PropertiesAttributes{
  id: string;
  status: string;
  type: string;
  city: string;
  address: string;
  price: string;
  image_url: string;

}
// module.exports = (sequelize, DataTypes) => {
  export class Properties extends Model<PropertiesAttributes> implements PropertiesAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
    
       id!: string;
      status!: string;
      type!: string;
      city!: string;
      address!: string;
      price!: string;
      createdOn!: Date;
      image_url!: string;
  
    
    };
  Properties.init({
    id: {
      type:  DataTypes.UUID,
       primaryKey: true,
       allownull: false
    },
    status: {
      type: DataTypes.STRING,
      allownull: false
    },
    type: {
      type: DataTypes.STRING,
      allownull: false
    },
    city: {
     type: DataTypes.STRING,
     allownull: false
    },
    address: {
      type: DataTypes.STRING,
      allownull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allownull: false
    },
    createdOn: {
      type: DataTypes.DATE,
      allownull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize: db,
    modelName: 'Properties',
  });
//   return Properties;
// };