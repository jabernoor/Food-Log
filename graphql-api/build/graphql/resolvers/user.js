'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UserSchema = require('../../database/schemes/UserSchema');

var _UserSchema2 = _interopRequireDefault(_UserSchema);

var _crud = require('../../database/schemes/crud/crud');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User {

    constructor(id) {
        return (async () => {
            this.id = id;
            this.source = await (0, _crud.findByPK)(_UserSchema2.default, id);
            return this; // when done
        })();
    }

    id() {

        return this.source.id;
    }

    name() {
        return this.source.name;
    }

    email() {
        return this.source.email;
    }

    imagePath() {
        return this.source.imagePath;
    }

    oauthProvider() {
        return this.source.oauthProvider;
    }

    createdAt() {
        return this.source.createdAt;
    }

    updatedAt() {
        return this.source.updatedAt;
    }

}
exports.default = User;
//# sourceMappingURL=user.js.map