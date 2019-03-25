import redis from "redis";
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);

const client = redis.createClient();

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.on('connect', function () {
    console.log('Redis client connected');
});


export default client;