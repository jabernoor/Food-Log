'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findOrCreate = exports.create = undefined;

var _executor = require('../database/executor');

var _executor2 = _interopRequireDefault(_executor);

var _database = require('../database/database');

var _database2 = _interopRequireDefault(_database);

var _UserSchema = require('../database/schemes/UserSchema');

var _UserSchema2 = _interopRequireDefault(_UserSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = exports.create = params => {
    return new Promise((resolve, reject) => {
        (0, _executor2.default)('createUser', params).then(rows => {
            resolve(rows.id);
        }).catch(error => {
            reject(error);
        });
    });
};

const findOrCreate = exports.findOrCreate = params => {
    _database2.default.transaction(function (t) {
        console.log(params);
        return _UserSchema2.default.findOrCreate({
            where: {
                id: params.id,
                email: params.email
            },
            defaults: params,
            transaction: t
        }).spread(function (userResult, created) {
            if (created) {
                console.log('created');
            } else {
                console.log('not created');
            }
        });
    });
};
//# sourceMappingURL=create.js.map