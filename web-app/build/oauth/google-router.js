'use strict';

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _google = require("./google");

var _google2 = _interopRequireDefault(_google);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', _google2.default.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
}));

router.get('/callback', _google2.default.authenticate('google', {
    successRedirect: '/oauth/success',
    failureRedirect: '/login'
}), function (req, res) {
    console.log('after callback');
});

module.exports = router;
//# sourceMappingURL=google-router.js.map