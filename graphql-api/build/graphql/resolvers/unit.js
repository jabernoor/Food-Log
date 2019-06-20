'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UnitSchema = require('../../database/schemes/UnitSchema');

var _UnitSchema2 = _interopRequireDefault(_UnitSchema);

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

var _crud = require('../../database/schemes/crud/crud');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Unit {

    constructor(id) {
        return (async () => {
            this.id = id;
            this.source = await (0, _crud.findByPK)(_UnitSchema2.default, id);
            return this; // when done
        })();
    }

    id() {

        return this.source.id;
    }

    description() {
        return this.source.description;
    }

    price() {
        return this.source.price;
    }

    currency() {
        return this.source.currency;
    }

    async provider() {
        return await new _provider2.default(this.source.provider_id);
    }

    createdAt() {
        return this.source.createdAt;
    }

    updatedAt() {
        return this.source.updatedAt;
    }

}
exports.default = Unit;
//# sourceMappingURL=unit.js.map