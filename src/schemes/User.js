import database from '../database/database'
import {Sequelize as datatype} from 'sequelize';
const User = database.define('user', {
    id: {
        type: datatype.STRING,
        primaryKey: true
    },
    name: {
        type: datatype.STRING
    },
    email: {
        type: datatype.STRING
    },
    imagePath: {
        type: datatype.STRING
    },
    oauthProvider: {
        type: datatype.STRING
    }
});

User.sync({force: true});

export default User;