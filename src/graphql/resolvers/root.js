import FoodProvider from './provider'
import Unit from './unit'
import OrderEntry from './orderEntries'
import Order from './order'
import User from './user'
import pubSub from '../pubsub'
import {
    UserCrud,
    FoodProviderCrud,
    OrderCrud,
    OrderEntryCrud,
    UnitCrud
} from '../../schemes/crud/crud'

export default {
    order: async ({id}) => {
        return await new Order(id);
    },
    provider: async ({
        id
    }) => {
        return await new FoodProvider(id);
    },
    unit: async ({
        id
    }) => {
        return await new Unit(id);
    },
    user: async ({
        id
    }) => {
        return await new User(id);
    },
    orderEntry: async ({
        id
    }) => {
        return await new OrderEntry(id);
    },
    Subscription: {
        fooder: {
            subscribe: () => pubSub.asyncIterator("PROVIDER_CHANGED")
        }
    },
    createFoodProvider: async ({input}) => {
        return await FoodProviderCrud.create(input);
    },
    createUnit: async ({input}) => {
        return await UnitCrud.create(input);
    },
    createOrderEntry: async ({input}) => {
        return await OrderEntryCrud.create(input);
    },
    createOrder: async ({input}) => {
        return await OrderCrud.create(input);
    },
    createUser: async ({input}) => {
        return await userCrud.create(input);
    },
    updateFoodProvider: async ({input, id})=>{
        return await FoodProviderCrud.update(input,id);        
    }
}