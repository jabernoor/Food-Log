'use strict';

import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import passport from 'passport'
import indexRouter from "./indexRouter";
import ordersRouter from "./orders/router";
import pug from "pug";
import bodyParser from 'body-parser';
import helmet from 'helmet'
import root from './graphql/resolvers/root'
import sessionConfig from './middlewares/session-config'
const app = express();


dotenv.config();

app.use(sessionConfig);

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
    console.log(`listening at ${process.env.PORT}`);
});
