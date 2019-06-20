'use strict';

import express from 'express';
import indexRouter from "./indexRouter";
import bodyParser from 'body-parser';
import helmet from 'helmet'
import responseTime from 'response-time'
import compression from 'compression'
const app = express();

app.use(compression())
app.use(responseTime());
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRouter);

export default app;