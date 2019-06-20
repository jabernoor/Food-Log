'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

let config = {
    forceSync: false,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
        max: 1000,
        min: 50,
        acquire: 30000,
        idle: 10000
    }
};

exports.default = config;
//# sourceMappingURL=config.js.map