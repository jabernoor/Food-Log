'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _googleRouter = require('./google-router');

var _googleRouter2 = _interopRequireDefault(_googleRouter);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.use('/google', _googleRouter2.default);

router.get('/success', (req, res) => {
    let user = {
        name: req.user.displayName,
        email: req.user.email,
        imagePath: req.user.imagePath,
        oauthProvider: req.user.oauthProvider
    };
    saveUser(user).then(result => {
        req.user['id'] = result.data.createUser.id;
        return res.redirect('/dashboard');
    }).catch(error => {
        return res.redirect('/error');
    });
});

let saveUser = function (user) {
    return new Promise((resolve, reject) => {
        const query = _fs2.default.readFileSync(_path2.default.join(__dirname, "/../graphql-queries/create-user.graphql"), "utf8");
        let queryString = _querystring2.default.stringify({
            query: query,
            variables: JSON.stringify(user)
        });
        _axios2.default.post(_config2.default.gqlRoute, {
            query: query,
            variables: JSON.stringify(user)
        }).then(function (response) {
            resolve(response.data);
        }).catch(function (error) {
            return reject({
                status: 500,
                message: 'Internal server error.',
                stackTrace: error
            });
        });
    });
};
exports.default = router;
//# sourceMappingURL=router.js.map