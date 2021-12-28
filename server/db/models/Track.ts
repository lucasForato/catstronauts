import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/connection';
import { AuthorModel } from './Author';

interface ITrack extends Model {
  id: number;
  title: string;
  author_id: number;
  thumbnail: string;
  length: number;
  modules_count: number;
  created_at: Date;
  updated_at: Date;
}

export const TrackModel = sequelize.define<ITrack>('Author', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    references: {
      // This is a reference to another model
      model: AuthorModel,
      // This is the column name of the referenced model
      key: 'id',
    },
  },
  thumbnail: {
    type: DataTypes.STRING,
  },
  length: {
    type: DataTypes.INTEGER,
  },
  modules_count: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
});
