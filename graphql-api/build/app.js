'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _indexRouter = require('./indexRouter');

var _indexRouter2 = _interopRequireDefault(_indexRouter);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _responseTime = require('response-time');

var _responseTime2 = _interopRequireDefault(_responseTime);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use((0, _responseTime2.default)());
app.use((0, _helmet2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));

app.use('/', _indexRouter2.default);

exports.default = app;
//# sourceMappingURL=app.js.map