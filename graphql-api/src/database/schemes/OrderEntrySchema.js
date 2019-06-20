import database from '../database'
import {Sequelize as datatype} from 'sequelize'
import Unit from './UnitSchema'
import User from './UserSchema'
import Order from './OrderSchema'
import config from '../config'

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
        type: datatype. BIGINT,                
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

OrderEntry.cacheKeyPrefix = "order_entry_";

export default OrderEntry;