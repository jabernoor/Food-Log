'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _app = require('../src/app');

var _app2 = _interopRequireDefault(_app);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
const server = _http2.default.createServer(_app2.default);

server.listen(process.env.PORT || 5000);
server.on('error', error => {
    console.error(error);
});

server.on('listening', () => {
    console.log(_figlet2.default.textSync(`Listening`));
    console.log(_figlet2.default.textSync(`at`));
    console.log(_figlet2.default.textSync(`port`));
    console.log(_figlet2.default.textSync(`${process.env.PORT || 5000}`));
});
//# sourceMappingURL=www.js.map