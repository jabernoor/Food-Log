'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = require('../database');

var _database2 = _interopRequireDefault(_database);

var _sequelize = require('sequelize');

var _FoodProviderSchema = require('./FoodProviderSchema');

var _FoodProviderSchema2 = _interopRequireDefault(_FoodProviderSchema);

var _UserSchema = require('./UserSchema');

var _UserSchema2 = _interopRequireDefault(_UserSchema);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Order = _database2.default.define('orders', {
    id: {
        type: _sequelize.Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: _sequelize.Sequelize.DATE
    },
    provider_id: {
        type: _sequelize.Sequelize.BIGINT,
        references: {
            model: _FoodProviderSchema2.default,
            key: 'id'
        }
    },
    creatorId: {
        type: _sequelize.Sequelize.bigint,
        references: {
            model: _UserSchema2.default,
            key: 'id'
        }
    }
});

Order.sync({ force: _config2.default.forceSync });

Order.cacheKeyPrefix = "order_";
exports.default = Order;
//# sourceMappingURL=OrderSchema.js.map