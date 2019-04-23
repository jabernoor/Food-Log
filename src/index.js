'use strict';

require('dotenv').config();
import express from 'express';
import mongoose from "mongoose";
import passport from 'passport'
import indexRouter from "./indexRouter";
import ordersRouter from "./orders/router";
import pug from "pug";
import bodyParser from 'body-parser';
import helmet from 'helmet'
import responseTime from 'response-time'
import sessionConfig from './middlewares/session-config'
import compression from 'compression'
import figlet from 'figlet'
const app = express();


console.log('AFTER DOTENV CONFIG: '+process.env.DB_HOST);
console.log('AFTER DOTENV CONFIG: '+process.env.DB_PORT);

app.use(compression())
app.use(sessionConfig);
app.use(responseTime());
app.use(helmet())
app.use(passport.initialize());
app.use(passport.session());
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRouter);

app.listen(process.env.PORT, () => {
    console.log(figlet.textSync(`Listening`));    
    console.log(figlet.textSync(`at`));    
    console.log(figlet.textSync(`port`));    
    console.log(figlet.textSync(`${process.env.PORT}`));    
});



