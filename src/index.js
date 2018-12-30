import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import session from 'express-session'
import passport from 'passport'
import redis from "redis";
import indexRouter from "./indexRouter";
import jade from "jade";
import redisConnect from 'connect-redis';
import bodyParser from 'body-parser';
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

app.use('/',indexRouter);

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true });

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.on('connect', function () {
    console.log('Redis client connected');
});

app.listen(process.env.PORT,()=>{
    console.log(`listening at ${process.env.PORT}`);
});
