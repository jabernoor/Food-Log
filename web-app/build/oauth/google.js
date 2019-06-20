'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require('passport-google-oauth');

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {findOrCreate} from '../users/create'

_passport2.default.use(new _passportGoogleOauth.OAuth2Strategy({
    clientID: _config2.default.google_client_id,
    clientSecret: _config2.default.google_client_secret,
    callbackURL: _config2.default.google_callback_url
}, function (accessToken, refreshToken, profile, done) {
    const params = {};

    params['id'] = profile.id;
    params['name'] = profile.displayName;
    params['email'] = profile.emails[0].value;
    params['imagePath'] = profile.photos[0].value;
    params['oauthProvider'] = profile.provider;
    return done(null, params);
}));

_passport2.default.serializeUser(function (user, done) {
    done(null, user);
});
_passport2.default.deserializeUser(function (user, done) {
    done(null, user);
});

exports.default = _passport2.default;
//# sourceMappingURL=google.js.map