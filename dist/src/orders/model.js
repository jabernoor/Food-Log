"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
    "id": "String",
    "date": "String",
    "restaurant_id": "String",
    "entries": [{
        "user_id": "String",
        "unit_id": "String"
    }]
});
var Order = _mongoose2.default.model('Order', schema);

exports.default = Order;