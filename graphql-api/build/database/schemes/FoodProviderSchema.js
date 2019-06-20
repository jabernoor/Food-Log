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

const FoodProvider = _database2.default.define('food_providers', {
    id: {
        type: _sequelize.Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: _sequelize.Sequelize.STRING
    },
    description: {
        type: _sequelize.Sequelize.STRING
    },
    phoneNumber: {
        type: _sequelize.Sequelize.STRING
    },
    avatar: {
        type: _sequelize.Sequelize.STRING
    }
});

FoodProvider.sync({ force: _config2.default.forceSync });

FoodProvider.cacheKeyPrefix = "food_provider_";

exports.default = FoodProvider;
//# sourceMappingURL=FoodProviderSchema.js.map