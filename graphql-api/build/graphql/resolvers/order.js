'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OrderSchema = require('../../database/schemes/OrderSchema');

var _OrderSchema2 = _interopRequireDefault(_OrderSchema);

var _crud = require('../../database/schemes/crud/crud');

var _OrderEntrySchema = require('../../database/schemes/OrderEntrySchema');

var _OrderEntrySchema2 = _interopRequireDefault(_OrderEntrySchema);

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

var _orderEntries = require('./orderEntries');

var _orderEntries2 = _interopRequireDefault(_orderEntries);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _cacheService = require('../../cache/cache-service');

var _cacheService2 = _interopRequireDefault(_cacheService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Order {

    constructor(id) {
        return (async () => {
            this.id = id;
            this.source = await (0, _crud.findByPK)(_OrderSchema2.default, id);
            return this; // when done
        })();
    }
    id() {
        return this.source.id;
    }

    date() {
        return this.source.date;
    }

    async provider() {
        return await new _provider2.default(this.source.provider_id);
    }
    async creator() {
        return await new _user2.default(this.source.creatorId);
    }
    async entries() {
        let ret = await this.getEntries(this.source.id);
        return ret;
    }
    async getEntries(id) {
        const cacheKey = `entries_of_${id}`;
        let ids = await _cacheService2.default.get(cacheKey);
        let entries = [];
        if (ids == null || ids.length == 0) {
            ids = await _OrderEntrySchema2.default.findAll({
                where: {
                    order_id: id
                },
                raw: true,
                attributes: ['id']
            });
            _cacheService2.default.set(cacheKey, ids);
        }
        if (ids != null) {
            for (var i = 0; i < ids.length; ++i) {
                let entry = await new _orderEntries2.default(ids[i].id);
                entries.push(entry);
            }
        }
        return entries;
    }

    createdAt() {
        return this.source.createdAt;
    }

    updatedAt() {
        return this.source.updatedAt;
    }

}
exports.default = Order;
//# sourceMappingURL=order.js.map