'use strict';


import express from 'express';
import mongoose from "mongoose";

import passport from 'passport'
import indexRouter from "./indexRouter";
import pug from "pug";
import bodyParser from 'body-parser';
import helmet from 'helmet'
import responseTime from 'response-time'
import sessionConfig from './middlewares/session-config'
import compression from 'compression'
const app = express();

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

app.listen(5000,()=>{
    console.log('listening at port ',5000);
})