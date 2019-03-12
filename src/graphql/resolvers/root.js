import FoodProvider from './provider'
import Unit from './unit'
import OrderEntry from './orderEntries'
import Order from './order'
import User from './user'

export default root = {
    order: async ({id})=>{
        return await new Order(id);
    },
    provider: async ({id})=>{
        return await new FoodProvider(id);
    },
    unit: async ({id})=>{
        return await new Unit(id);
    },
    user: async ({id})=>{
        return await new User(id);
    },
    orderEntry: async ({id})=>{
        return await new OrderEntry(id);
    }
} 