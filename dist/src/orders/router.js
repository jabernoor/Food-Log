'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
   res.send('orders goes here');
});

router.post('/', function (req, res) {
   res.send('orders goes here');
});

router.delete('/', function (req, res) {
   res.send('orders goes here');
});

router.put('/', function (req, res) {
   res.send('orders goes here');
});

exports.default = router;