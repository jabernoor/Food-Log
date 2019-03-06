import database from '../database/database'
import {Sequelize as datatype} from 'sequelize';
import config from '../database/config'
const FoodProvider = database.define('food_providers',{
    id:{
        type: datatype.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: datatype.STRING,
    },
    description:{
        type: datatype.STRING,
    },
    phone_number:{
        type: datatype.STRING,
    },
    avatar:{
        type: datatype.STRING,
    }
})

FoodProvider.sync({force: config.forceSync});

export default FoodProvider;