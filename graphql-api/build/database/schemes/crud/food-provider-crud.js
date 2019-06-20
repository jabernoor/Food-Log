'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FoodProviderSchema = require('../FoodProviderSchema');

var _FoodProviderSchema2 = _interopRequireDefault(_FoodProviderSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Crud {
    async create(input) {
        return await _FoodProviderSchema2.default.create(input).then(provider => {
            return provider;
        }).catch(error => {
            return error;
        });
    }
    async update(input, id) {
        return await _FoodProviderSchema2.default.update(input, {
            where: {
                id: id
            }
        }).then((rowsUpdate, updatedProvider) => {
            console.log(updatedProvider);
            return updatedProvider;
        }).catch(error => {
            return error;
        });
    }
}

exports.default = new Crud();
//# sourceMappingURL=food-provider-crud.js.map