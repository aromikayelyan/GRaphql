import Sequelize from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

const NAME = process.env.NAME
const USER =   process.env.USER
const PASSWORD = process.env.PASSWORD


const sequelize = new Sequelize(NAME, USER , PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})


export default sequelize