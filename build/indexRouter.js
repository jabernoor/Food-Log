'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _initGraphqlServer = require('./graphql/init-graphql-server');

var _initGraphqlServer2 = _interopRequireDefault(_initGraphqlServer);

var _router = require('./oauth/router');

var _router2 = _interopRequireDefault(_router);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

const router = _express2.default.Router();

router.use('/oauth', _router2.default);

router.use('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) {
        res.render('/login');
    }
    res.redirect('/dashboard');
});

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/dashboard');
    }
    res.render('login');
});

router.use('/graphql', _initGraphqlServer2.default);

exports.default = router;
//# sourceMappingURL=indexRouter.js.map