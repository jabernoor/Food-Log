'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.redirect('/login');
};
//# sourceMappingURL=isLoggedIn.js.map