import { IFooEntity } from '@domain/entities/foo'
import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../utils/database'

export class FooModel extends Model<IFooEntity> {}

FooModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'foos',
    timestamps: false,
    underscored: true,
    sequelize,
  }
)
