'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redis = require('../database/redis');

var _redis2 = _interopRequireDefault(_redis);

var _connectRedis = require('connect-redis');

var _connectRedis2 = _interopRequireDefault(_connectRedis);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const redisStore = (0, _connectRedis2.default)(_expressSession2.default);

const config = {
    secret: 's3cr3t',
    store: new redisStore({
        host: 'localhost',
        client: _redis2.default,
        ttl: 260
    }),
    saveUninitialized: false,
    resave: false
};

exports.default = (0, _expressSession2.default)(config);
//# sourceMappingURL=session-config.js.map