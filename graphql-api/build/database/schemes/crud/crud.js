'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findByPK = exports.UnitCrud = exports.OrderEntryCrud = exports.OrderCrud = exports.FoodProviderCrud = exports.UserCrud = undefined;

var _foodProviderCrud = require('./food-provider-crud');

var _foodProviderCrud2 = _interopRequireDefault(_foodProviderCrud);

var _orderCrud = require('./order-crud');

var _orderCrud2 = _interopRequireDefault(_orderCrud);

var _orderEntryCrud = require('./order-entry-crud');

var _orderEntryCrud2 = _interopRequireDefault(_orderEntryCrud);

var _userCrud = require('./user-crud');

var _userCrud2 = _interopRequireDefault(_userCrud);

var _unitCrud = require('./unit-crud');

var _unitCrud2 = _interopRequireDefault(_unitCrud);

var _cacheService = require('../../../cache/cache-service');

var _cacheService2 = _interopRequireDefault(_cacheService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserCrud = _userCrud2.default;
exports.FoodProviderCrud = _foodProviderCrud2.default;
exports.OrderCrud = _orderCrud2.default;
exports.OrderEntryCrud = _orderEntryCrud2.default;
exports.UnitCrud = _unitCrud2.default;
let findByPK = exports.findByPK = async (schema, id) => {
    console.debug("Trying to get values from cache ...... ");
    const cacheKey = schema.cacheKeyPrefix + id;
    let value = await _cacheService2.default.get(cacheKey);
    if (value != null) {
        console.debug(`[CACHE HIT] found value for key: ${cacheKey}`);
        value = JSON.parse(value);
    } else {
        console.debug(`[CACHE MISS] getting values from database for key: ${cacheKey}`);
        value = await schema.findByPk(id, {
            raw: true
        });
        console.debug(value);
        if (value != null) {
            console.debug(`[CACHE SET] key: ${cacheKey}`);
            _cacheService2.default.set(cacheKey, JSON.stringify(value));
        }
    }
    return value;
};
//# sourceMappingURL=crud.js.map