'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

var _unit = require('./unit');

var _unit2 = _interopRequireDefault(_unit);

var _orderEntries = require('./orderEntries');

var _orderEntries2 = _interopRequireDefault(_orderEntries);

var _order = require('./order');

var _order2 = _interopRequireDefault(_order);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _pubsub = require('../pubsub');

var _pubsub2 = _interopRequireDefault(_pubsub);

var _crud = require('../../database/schemes/crud/crud');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    order: async ({ id }) => {
        return await new _order2.default(id);
    },
    provider: async ({
        id
    }) => {
        return await new _provider2.default(id);
    },
    unit: async ({
        id
    }) => {
        return await new _unit2.default(id);
    },
    user: async ({
        id
    }) => {
        return await new _user2.default(id);
    },
    orderEntry: async ({
        id
    }) => {
        return await new _orderEntries2.default(id);
    },
    Subscription: {
        fooder: {
            subscribe: () => _pubsub2.default.asyncIterator("PROVIDER_CHANGED")
        }
    },
    createFoodProvider: async ({ input }) => {
        return await _crud.FoodProviderCrud.create(input);
    },
    createUnit: async ({ input }) => {
        return await _crud.UnitCrud.create(input);
    },
    createOrderEntry: async ({ input }) => {
        return await _crud.OrderEntryCrud.create(input);
    },
    createOrder: async ({ input }) => {
        return await _crud.OrderCrud.create(input);
    },
    createUser: async ({ input }) => {
        return await userCrud.create(input);
    },
    updateFoodProvider: async ({ input, id }) => {
        return await _crud.FoodProviderCrud.update(input, id);
    }
};
//# sourceMappingURL=root.js.map