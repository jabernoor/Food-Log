import database from '../database'
import {Sequelize as datatype} from 'sequelize';
import config from '../config'
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
    phoneNumber:{
        type: datatype.STRING,
    },
    avatar:{
        type: datatype.STRING,
    }
})

FoodProvider.sync({force: config.forceSync});

FoodProvider.cacheKeyPrefix = "food_provider_"

export default FoodProvider;