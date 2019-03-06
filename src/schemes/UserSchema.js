import database from '../database/database'
import {Sequelize as datatype} from 'sequelize';
import config from '../database/config'

const User = database.define('user', {
    id: {
        type: datatype.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: datatype.STRING
    },
    email: {
        type: datatype.STRING,
        allowNull: false
    },
    imagePath: {
        type: datatype.STRING
    },
    oauthProvider: {
        type: datatype.STRING
    }
});

User.sync({force: config.forceSync});

export default User;