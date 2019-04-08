import mysql from "mysql";

import Sequelize from "sequelize";

const sequelize = new Sequelize('food_server', 'root', 'root', {
    host: 'mysql',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 1000,
        min: 5,
        acquire: 30000,
        idle: 10000
    },
});
sequelize.query("SET foreign_key_checks = 0;").spread((results, metadata) => {
})
export default sequelize;
