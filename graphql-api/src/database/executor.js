import database from './database'

export const execute = (procName, params) => {
    return new Promise((resolve, reject) => {
        const query = buildQuery(procName, params);
        const normalizedParams = normalizeParams(params);
        database.query(query, normalizedParams).then(rows => {
            resolve(rows);
        }).then(rows => database.release()).catch(error => reject(error))
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

const normalizeParams = (params) => {
    let normalized = [];
    for (let item in params) {
        normalized.push(params[item]);
    }
    return normalized;
};
export default execute