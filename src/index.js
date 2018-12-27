import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import session from 'express-session'
import passport from 'passport'
import redis from "redis";
import orderRouter from "./orders/router";
import redisConnect from 'connect-redis';

const redisStore = redisConnect(session);
const app = express();
const client = redis.createClient();

dotenv.config();

app.use(session({
    secret: 's3cr3t',
    store: new redisStore({host: 'localhost', client: client, ttl: 260}),
    saveUninitialized: false,
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/orders',orderRouter);

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true });

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});
client.on('connect', function () {
    console.log('Redis client connected');
});

app.listen(3000);
