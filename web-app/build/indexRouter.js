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
        return res.redirect('/login');
    }
    return res.render('dashboard', { data: { isLoggedIn: true, user: req.user } });
});

router.use('/orders', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    return res.render('orders', { data: { isLoggedIn: true } });
});

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/dashboard');
    }
    return res.render('login', { data: { isLoggedIn: false } });
});

exports.default = router;
//# sourceMappingURL=indexRouter.js.map