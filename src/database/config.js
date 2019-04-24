import path from 'path'

const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

let config = {
    forceSync : false,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
        max: 1000,
        min: 50,
        acquire: 30000,
        idle: 10000
    },
}

export default config;