import { Model, DataTypes } from "sequelize";
import {sequelize} from "../config/connection"

export interface IAuthor extends Model {
  id: number;
  name: string;
  photo: string;
  created_at: Date;
  updated_at: Date;
}

export const AuthorModel = sequelize.define<IAuthor>("Author", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    }
  });





