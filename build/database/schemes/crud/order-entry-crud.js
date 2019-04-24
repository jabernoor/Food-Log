'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OrderEntrySchema = require('../OrderEntrySchema');

var _OrderEntrySchema2 = _interopRequireDefault(_OrderEntrySchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Crud {
    async create(input) {
        return await _OrderEntrySchema2.default.create(input).then(orderEntry => {
            return orderEntry.id;
        }).catch(error => {
            return error;
        });
    }
}

exports.default = new Crud();
//# sourceMappingURL=order-entry-crud.js.map