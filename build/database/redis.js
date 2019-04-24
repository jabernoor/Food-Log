'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ttl = exports.client = undefined;

var _ioredis = require('ioredis');

var _ioredis2 = _interopRequireDefault(_ioredis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client = exports.client = new _ioredis2.default('redis');

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.on('connect', function () {
    console.log('Redis client connected');
});

const ttl = exports.ttl = 24 * 60 * 60;
//# sourceMappingURL=redis.js.map