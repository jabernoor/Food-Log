'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FoodProviderSchema = require('../../database/schemes/FoodProviderSchema');

var _FoodProviderSchema2 = _interopRequireDefault(_FoodProviderSchema);

var _crud = require('../../database/schemes/crud/crud');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FoodProvider {

    constructor(id) {
        return (async () => {
            this.id = id;
            this.source = await (0, _crud.findByPK)(_FoodProviderSchema2.default, id);
            return this; // when done
        })();
    }
    id() {
        return this.source.id;
    }

    name() {
        return this.source.name;
    }

    description() {
        return this.source.description;
    }

    phoneNumber() {
        return this.source.phoneNumber;
    }

    avatar() {
        return this.source.avatar;
    }

    createdAt() {
        return this.source.createdAt;
    }

    updatedAt() {
        return this.source.updatedAt;
    }
}
exports.default = FoodProvider;
//# sourceMappingURL=provider.js.map