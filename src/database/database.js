import mysql from "mysql";

import Sequelize from "sequelize";

const sequelize = new Sequelize('food_server', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 10,
        min: 5,
        acquire: 30000,
        idle: 10000
    },
});
sequelize.query("SET foreign_key_checks = 0;").spread((results, metadata) => {
})
export default sequelize;
