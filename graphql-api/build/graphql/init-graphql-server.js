'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _root = require('./resolvers/root');

var _root2 = _interopRequireDefault(_root);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stringSchema = _fs2.default.readFileSync(_path2.default.join(__dirname, "/schema.graphql"), "utf8");
var schema = (0, _graphql.buildSchema)(stringSchema);

exports.default = (0, _expressGraphql2.default)({
    schema: schema,
    rootValue: _root2.default,
    graphiql: true
});
//# sourceMappingURL=init-graphql-server.js.map