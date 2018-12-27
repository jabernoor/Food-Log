'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _indexRouter = require('./indexRouter');

var _indexRouter2 = _interopRequireDefault(_indexRouter);

var _connectRedis = require('connect-redis');

var _connectRedis2 = _interopRequireDefault(_connectRedis);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redisStore = (0, _connectRedis2.default)(_expressSession2.default);
var app = (0, _express2.default)();
var client = _redis2.default.createClient();

_dotenv2.default.config();

app.use((0, _expressSession2.default)({
    secret: 's3cr3t',
    store: new redisStore({ host: 'localhost', client: client, ttl: 260 }),
    saveUninitialized: false,
    resave: false
}));

app.use(_passport2.default.initialize());
app.use(_passport2.default.session());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use('/', _indexRouter2.default);

_mongoose2.default.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});
client.on('connect', function () {
    console.log('Redis client connected');
});

app.listen(3000);