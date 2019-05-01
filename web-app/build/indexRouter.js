'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./oauth/router');

var _router2 = _interopRequireDefault(_router);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.use('/oauth', _router2.default);

router.use('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect('/login');
    }
    res.render('dashboard');
});

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/dashboard');
    }
    res.render('login');
});

exports.default = router;
//# sourceMappingURL=indexRouter.js.map