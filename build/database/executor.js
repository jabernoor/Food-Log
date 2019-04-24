'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.execute = undefined;

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const execute = exports.execute = (procName, params) => {
    return new Promise((resolve, reject) => {
        const query = buildQuery(procName, params);
        const normalizedParams = normalizeParams(params);
        _database2.default.query(query, normalizedParams).then(rows => {
            resolve(rows);
        }).then(rows => _database2.default.release()).catch(error => reject(error));
    });
};

const buildQuery = (procName, params) => {
    let query = "";
    query = query.concat('CALL ').concat(procName).concat(' (');
    let item;
    for (item in params) {
        query = query.concat('?').concat(',');
    }
    query = query.slice(0, -1);
    return query.concat(')');
};

const normalizeParams = params => {
    let normalized = [];
    for (let item in params) {
        normalized.push(params[item]);
    }
    return normalized;
};
exports.default = execute;
//# sourceMappingURL=executor.js.map