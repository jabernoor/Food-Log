'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redis = require('../database/redis');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CacheService {

    constructor(ttl) {
        this.ttl = ttl;
        this.pipeline = _redis.client.pipeline;
        this.enabled = _config2.default.enabled;
    }

    async get(key) {
        if (!this.enabled) {
            console.log('Cache service is disabled.');
            return null;
        }
        return await _redis.client.get(key).then(t => {
            return t;
        }).catch(e => {
            console.error(e);
            return null;
        });
        return null;
    }

    async set(key, value) {
        if (!this.enabled) {
            console.log('Cache service is disabled.');
            return 0;
        }

        return await _redis.client.multi().set(key, value).expire(key, this.ttl).exec().then(d => {
            return 1;
        }).catch(e => {
            console.error(e);
            return 0;
        });
    }

    flush() {
        if (!this.enabled) {
            console.log('Cache service is disabled.');
            return 0;
        }
        _redis.client.flushall();
    }

    async remove(key) {
        if (!this.enabled) {
            console.log('Cache service is disabled.');
            return 0;
        }

        await _redis.client.del(key).then(d => {
            return 1;
        }).catch(e => {
            console.error(e);
            return 0;
        });
    }
}

exports.default = new CacheService(_redis.ttl);
//# sourceMappingURL=cache-service.js.map