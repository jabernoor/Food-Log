import database from '../database';
import {Sequelize as datatype } from 'sequelize';
import FoodProvider from './FoodProviderSchema'
import User from './UserSchema'
import config from '../config'

const Order = database.define('orders',{
    id:{
        type: datatype.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    date:{
        type: datatype.DATE
    },
    provider_id:{
        type: datatype.BIGINT,
        references:{
            model: FoodProvider,
            key: 'id'
        }       
    },
    creatorId: {
        type: datatype.BIGINT,
        references:{
            model:User,
            key:'id'
        }        
    }
})

Order.sync({force:config.forceSync});

Order.cacheKeyPrefix = "order_"
export default Order;