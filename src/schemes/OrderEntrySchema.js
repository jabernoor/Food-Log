import database from '../database/database'
import {Sequelize as datatype} from 'sequelize'
import Unit from './Unit'
import User from './UserSchema'
import Order from './Order'
import config from '../database/config'

const OrderEntry = database.define('order_entries',{
    id:{
        type: datatype.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    unit_id:{
        type: datatype.BIGINT,
        references:{
            model: Unit,
            key: 'id'
        }        

    },
    user_id:{
        type: datatype.BIGINT,                
        references:{
            model: User,
            key: 'id'
        }        
    },
    order_id:{
        type: datatype.BIGINT,
        references:{
            model: Order,
            key: 'id'
        }                        
    }
})
OrderEntry.sync({force:config.forceSync});

export default OrderEntry;