'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = require('../database');

var _database2 = _interopRequireDefault(_database);

var _sequelize = require('sequelize');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _database2.default.define('user', {
    id: {
        type: _sequelize.Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: _sequelize.Sequelize.STRING
    },
    email: {
        type: _sequelize.Sequelize.STRING,
        allowNull: false
    },
    imagePath: {
        type: _sequelize.Sequelize.STRING
    },
    oauthProvider: {
        type: _sequelize.Sequelize.STRING
    }
});

User.sync({ force: _config2.default.forceSync });

User.cacheKeyPrefix = "user_";

exports.default = User;
//# sourceMappingURL=UserSchema.js.map