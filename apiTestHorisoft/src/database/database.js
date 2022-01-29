const Sequelize = require('sequelize')

// CONEXION CON LA BASE DE DATOS
const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'root',{
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max:5,
            min: 0,
            require: 30000,
            idle: 10000
        },   
    }
)
module.exports = {sequelize};