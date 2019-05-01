'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _googleRouter = require('./google-router');

var _googleRouter2 = _interopRequireDefault(_googleRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.use('/google', _googleRouter2.default);
exports.default = router;
//# sourceMappingURL=router.js.map