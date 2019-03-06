import database from '../database/database'
import {Sequelize as datatype} from 'sequelize';
import FoodProvider from './FoodProviderSchema'
import config from '../database/config'


const Unit = database.define('units',{
    id:{
        type: datatype.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type:datatype.STRING
    },
    provider_id:{
        type:datatype.BIGINT,
        references:{
            model: FoodProvider,
            key:'id'
        }
    },
    price:{
        type:datatype.BIGINT
    },
    currency:{
        type: datatype.STRING,
        defaultValue: "JOD"
    }
})

Unit.sync({force:config.forceSync});

export default Unit;