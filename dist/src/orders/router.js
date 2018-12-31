'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Order = require('../schemes/Order');

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
   var orderId = req.query.orderId;
   _Order2.default.find({ orderId: orderId, creatorId: req.user.id });
   res.send(req.user._json);
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