import { DataTypes, Model } from "sequelize";
import db from "./index";

export default class Schedule extends Model {
  public id!: number;
  public createdBy!: string;
  public value!: string;
  public status!: string;
  public created?: Date;
  public updated?: Date;
}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "schedule",
    underscored: true,
    timestamps: true,
  }
);
