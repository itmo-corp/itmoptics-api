import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelize from "../../common/sequelize";

export default class Exhibit extends Model<InferAttributes<Exhibit>, InferCreationAttributes<Exhibit>> {
  id: number;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

Exhibit.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
     type: DataTypes.TEXT,
     allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Exhibit',
});
