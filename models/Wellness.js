const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Wellness extends Model { }

Wellness.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        caloriesPerDay: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        minutesExercised: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ouncesOfWater: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
    },
    {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: "wellness",
    }  
);
// got mysql fixed by changing this modelname above to wellness

module.exports = Wellness;