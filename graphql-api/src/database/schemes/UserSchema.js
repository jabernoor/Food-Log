import database from '../database'
import {Sequelize as datatype} from 'sequelize';
import config from '../config'

const User = database.define('user', {
    id: {
        type: datatype.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: datatype.STRING
    },
    email: {
        type: datatype.STRING,
        allowNull: false,
        unique: true
    },
    imagePath: {
        type: datatype.STRING
    },
    oauthProvider: {
        type: datatype.STRING
    }
});

User.sync({force: config.forceSync});

User.cacheKeyPrefix = "user_";

export default User;