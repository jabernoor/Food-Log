'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _OrderSchema = require('../OrderSchema');

var _OrderSchema2 = _interopRequireDefault(_OrderSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Crud {
    async create(input) {
        return await _OrderSchema2.default.create(input).then(order => {
            return order;
        }).catch(error => {
            return error;
        });
    }
}

exports.default = new Crud();
//# sourceMappingURL=order-crud.js.map