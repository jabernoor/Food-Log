'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    forceSync: false,
    host: 'mysql',
    port: 3306,
    pool: {
        max: 1000,
        min: 50,
        acquire: 30000,
        idle: 10000
    }
};
//# sourceMappingURL=config.js.map