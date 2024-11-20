import  Sequelize  from "sequelize"
import sequelize from "../utils/connect.js"

const data = sequelize.define('movie', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


export default data
