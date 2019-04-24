'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UserSchema = require('../UserSchema');

var _UserSchema2 = _interopRequireDefault(_UserSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Crud {
    async create(input) {
        return await _UserSchema2.default.create(input).then(user => {
            return user;
        }).catch(error => {
            return error;
        });
    }
}

exports.default = new Crud();
//# sourceMappingURL=user-crud.js.map