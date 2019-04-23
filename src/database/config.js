import path from 'path'
var dotenv = require('dotenv').config({path: path.join(__dirname, '.env')})

export default {
    forceSync : false,
    host: 'mysql',
    port: 3306,
    pool: {
        max: 1000,
        min: 50,
        acquire: 30000,
        idle: 10000
    },
}