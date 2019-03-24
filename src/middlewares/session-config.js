import client from "../database/redis";
import redisConnect from 'connect-redis';
import session from 'express-session'

const redisStore = redisConnect(session);


const config =  {
    secret: 's3cr3t',
    store: new redisStore({
        host: 'localhost',
        client: client,
        ttl: 260
    }),
    saveUninitialized: false,
    resave: false
}


export default session(config)