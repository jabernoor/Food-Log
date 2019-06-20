'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _initGraphqlServer = require('./graphql/init-graphql-server');

var _initGraphqlServer2 = _interopRequireDefault(_initGraphqlServer);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

const router = _express2.default.Router();

router.use('/graphql', _initGraphqlServer2.default);
router.get('/test', (req, res) => {
    res.send(100);
});

exports.default = router;
//# sourceMappingURL=indexRouter.js.map