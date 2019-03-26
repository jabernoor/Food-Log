import Redis from "ioredis";

export const client = new Redis();

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.on('connect', function () {
    console.log('Redis client connected');
});


export const ttl = 24 * 60 * 60;