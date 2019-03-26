import {
    ttl,
    client as cache
} from '../database/redis'

class CacheService {

    constructor(ttl) {
        this.ttl = ttl;
        this.pipeline = cache.pipeline;
    }

    async get(key) {
        return await cache.get(key).then(t => {
            return t;
        }).catch(e => {
            console.error(e);
            return null;
        });
    }

    async set(key, value) {
        return await cache.multi()
            .set(key, value)
            .expire(key, this.ttl)
            .exec()
            .then(d => {
                return 1;
            }).catch(e => {
                console.error(e);
                return 0;
            });
    }

    flush() {
        cache.flushall();
    }

    async remove(key) {
        await cache.del(key).then(d => {
            return 1;
        }).catch(e => {
            console.error(e);
            return 0;
        })
    }
}

export default new CacheService(ttl);