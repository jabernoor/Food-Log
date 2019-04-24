"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FoodProviderSchema = require("../FoodProviderSchema");

var _FoodProviderSchema2 = _interopRequireDefault(_FoodProviderSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

class Crud {
    async create(input) {
        input.description = makeString(20);
        input.name = makeString(10);
        input.avatar = makeString(35);
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