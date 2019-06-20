'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = require('../database');

var _database2 = _interopRequireDefault(_database);

var _sequelize = require('sequelize');

var _UnitSchema = require('./UnitSchema');

var _UnitSchema2 = _interopRequireDefault(_UnitSchema);

var _UserSchema = require('./UserSchema');

var _UserSchema2 = _interopRequireDefault(_UserSchema);

var _OrderSchema = require('./OrderSchema');

var _OrderSchema2 = _interopRequireDefault(_OrderSchema);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OrderEntry = _database2.default.define('order_entries', {
    id: {
        type: _sequelize.Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    unit_id: {
        type: _sequelize.Sequelize.BIGINT,
        references: {
            model: _UnitSchema2.default,
            key: 'id'
        }
    },
    user_id: {
        type: _sequelize.Sequelize.STRING,
        references: {
            model: _UserSchema2.default,
            key: 'id'
        }
    },
    order_id: {
        type: _sequelize.Sequelize.BIGINT,
        references: {
            model: _OrderSchema2.default,
            key: 'id'
        }
    }
});
OrderEntry.sync({ force: _config2.default.forceSync });

OrderEntry.cacheKeyPrefix = "order_entry_";

exports.default = OrderEntry;
//# sourceMappingURL=OrderEntrySchema.js.map