import { DataTypes, Model } from "sequelize";
import db from "./index";

export default class Client extends Model {
  public id!: number;
  public clientName!: string;
  public genre!: string;
  public birthday!: string;
  public naturalness!: string;
  public profession!: string;
  public maritalStatus!: string;
  public cellphone!: string;
  public email!: string;
  dateValues: any;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    naturalness: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maritalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "clients",
    underscored: false,
    timestamps: false,
  }
);
