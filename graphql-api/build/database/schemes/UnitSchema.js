'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = require('../database');

var _database2 = _interopRequireDefault(_database);

var _sequelize = require('sequelize');

var _FoodProviderSchema = require('./FoodProviderSchema');

var _FoodProviderSchema2 = _interopRequireDefault(_FoodProviderSchema);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Unit = _database2.default.define('units', {
    id: {
        type: _sequelize.Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: _sequelize.Sequelize.STRING
    },
    provider_id: {
        type: _sequelize.Sequelize.BIGINT,
        references: {
            model: _FoodProviderSchema2.default,
            key: 'id'
        }
    },
    price: {
        type: _sequelize.Sequelize.BIGINT
    },
    currency: {
        type: _sequelize.Sequelize.STRING,
        defaultValue: "JOD"
    }
});

Unit.sync({ force: _config2.default.forceSync });

Unit.cacheKeyPrefix = "unit_";

exports.default = Unit;
//# sourceMappingURL=UnitSchema.js.map