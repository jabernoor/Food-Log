import FoodProviderCrud from './food-provider-crud'
import OrderCrud from './order-crud'
import OrderEntryCrud from './order-entry-crud'
import UserCrud from './user-crud'
import UnitCrud from './unit-crud'
import cacheService from '../../cache/cache-service'

export {
    UserCrud,
    FoodProviderCrud,
    OrderCrud,
    OrderEntryCrud,
    UnitCrud
}



export let findByPK = async (schema, id) => {
    console.debug("Trying to get values from cache ...... ");
    const cacheKey = schema.cacheKeyPrefix + id;
    let value = await cacheService.get(cacheKey);
    if (value != null) {
        console.debug(`[CACHE HIT] found value for key: ${cacheKey}`);
        value = JSON.parse(value);
    } else {
        console.debug(`[CACHE MISS] getting values from database for key: ${cacheKey}`);
        value = await schema.findByPk(id, {
            raw: true
        });
        console.debug(value);
        if (value != null) {
            console.debug(`[CACHE SET] key: ${cacheKey}`);
            cacheService.set(cacheKey, JSON.stringify(value));
        }
    }
    return value;

}