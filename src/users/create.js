import execute from '../database/executor'
import sequelize from '../database/database'
import User from '../schemes/User'

export const create = (params) => {
    return new Promise((resolve, reject) => {
        execute('createUser', params).then(rows => {
            resolve(rows.id);
        }).catch(error => {
            reject(error);
        });
    })
};

export const findOrCreate = (params) => {
    sequelize.transaction(function (t) {
        return User.findOrCreate({
            where: {
                id: params.id,
                email: params.email
            },
            defaults: params,
            transaction: t
        }).spread(function (userResult, created) {
            if (created) {
                console.log('created');
            } else {
                console.log('not created');
            }
        });
    });
};
