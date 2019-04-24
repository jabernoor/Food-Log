import {
    ttl,
    client as cache
} from '../database/redis'

import config from './config'
class CacheService {

    constructor(ttl) {
        this.ttl = ttl;
        this.pipeline = cache.pipeline;
        this.enabled = config.enabled;
    }

    async get(key) {
        if(!this.enabled){
            console.log('Cache service is disabled.')            
            return null;
        }
        return await cache.get(key).then(t => {
            return t;
        }).catch(e => {
            console.error(e);
            return null;
        });
        return null;
    }

    async set(key, value) {
        if(!this.enabled){
            console.log('Cache service is disabled.')
            return 0;
        }

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
        if(!this.enabled){
            console.log('Cache service is disabled.')
            return 0;
        }
        cache.flushall();
    }

    async remove(key) {
        if(!this.enabled){
            console.log('Cache service is disabled.')
            return 0;
        }

        await cache.del(key).then(d => {
            return 1;
        }).catch(e => {
            console.error(e);
            return 0;
        })
    }
}

export default new CacheService(ttl);