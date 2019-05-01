'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const redisStore = redisConnect(session);


const config = {
    secret: 's3cr3t',
    // store: new redisStore({
    //     host: 'localhost',
    //     client: client,
    //     ttl: 260
    // }),
    saveUninitialized: false,
    resave: false
}; // import client from "../database/redis";
// import redisConnect from 'connect-redis';
exports.default = (0, _expressSession2.default)(config);
//# sourceMappingURL=session-config.js.map