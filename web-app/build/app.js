'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _indexRouter = require('./indexRouter');

var _indexRouter2 = _interopRequireDefault(_indexRouter);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _responseTime = require('response-time');

var _responseTime2 = _interopRequireDefault(_responseTime);

var _sessionConfig = require('./middlewares/session-config');

var _sessionConfig2 = _interopRequireDefault(_sessionConfig);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use(_sessionConfig2.default);
app.use((0, _responseTime2.default)());
app.use((0, _helmet2.default)());
app.use(_passport2.default.initialize());
app.use(_passport2.default.initialize());
app.use(_passport2.default.session({
    secret: 'cookie_secret',
    name: 'cookie_name',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));

app.use('/', _indexRouter2.default);

app.listen(5002, () => {
    console.log('listening at port ', 5002);
});

exports.default = app;
//# sourceMappingURL=app.js.map