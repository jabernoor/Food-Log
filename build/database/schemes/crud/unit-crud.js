'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UnitSchema = require('../UnitSchema');

var _UnitSchema2 = _interopRequireDefault(_UnitSchema);

var _provider = require('../../../graphql/resolvers/provider');

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Crud {
    async create(input) {
        return await _UnitSchema2.default.create(input).then(async unit => {
            unit.provider = await new _provider2.default(unit.id);
            return unit;
        }).catch(error => {
            return error;
        });
    }
}

exports.default = new Crud();
//# sourceMappingURL=unit-crud.js.map