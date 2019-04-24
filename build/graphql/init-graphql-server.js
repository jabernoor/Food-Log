'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _root = require('./graphql/resolvers/root');

var _root2 = _interopRequireDefault(_root);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stringSchema = fs.readFileSync(path.join(__dirname, "/graphql/schema.graphql"), "utf8");
var schema = (0, _graphql.buildSchema)(stringSchema);

exports.default = (0, _expressGraphql2.default)({
    schema: schema,
    rootValue: _root2.default,
    graphiql: true
});
//# sourceMappingURL=init-graphql-server.js.map