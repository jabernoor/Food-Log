import mysql from "mysql";
import config from './config'
import Sequelize from "sequelize";

const sequelize = new Sequelize('food_server', 'root', 'root', {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: config.pool
});
sequelize.query("SET foreign_key_checks = 0;").spread((results, metadata) => {
})

export default sequelize;
