"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../config/connection");
const Author_1 = require("./Author");
exports.TrackModel = connection_1.sequelize.define('Author', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    author_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            // This is a reference to another model
            model: Author_1.AuthorModel,
            // This is the column name of the referenced model
            key: 'id',
        },
    },
    thumbnail: {
        type: sequelize_1.DataTypes.STRING,
    },
    length: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    modules_count: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
    },
});
