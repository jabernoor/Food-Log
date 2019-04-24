'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OrderEntrySchema = require('../../database/schemes/OrderEntrySchema');

var _OrderEntrySchema2 = _interopRequireDefault(_OrderEntrySchema);

var _unit = require('./unit');

var _unit2 = _interopRequireDefault(_unit);

var _crud = require('../../database/schemes/crud/crud');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrderEntry {

    constructor(id) {
        return (async () => {
            this.id = id;
            this.source = await (0, _crud.findByPK)(_OrderEntrySchema2.default, id);
            return this; // when done
        })();
    }

    id() {

        return this.source.id;
    }

    async unit() {
        return await new _unit2.default(this.source.unit_id);
    }

    createdAt() {
        return this.source.createdAt;
    }

    updatedAt() {
        return this.source.updatedAt;
    }

}
exports.default = OrderEntry;
//# sourceMappingURL=orderEntries.js.map