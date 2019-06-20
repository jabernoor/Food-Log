"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sequelize = new _sequelize2.default('food_server', 'root', 'root', {
    host: _config2.default.host,
    port: _config2.default.port,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: _config2.default.pool
});
sequelize.query("SET foreign_key_checks = 0;").spread((results, metadata) => {});

exports.default = sequelize;
//# sourceMappingURL=database.js.map