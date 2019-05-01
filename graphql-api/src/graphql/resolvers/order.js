import schema from '../../database/schemes/OrderSchema';
import {
    findByPK
} from '../../database/schemes/crud/crud';
import OrderEntrySchema from '../../database/schemes/OrderEntrySchema';
import FoodProvider from './provider'
import OrderEntry from './orderEntries'
import User from './user';
import cacheService from '../../cache/cache-service'
class Order {

    constructor(id) {
        return (async () => {
            this.id = id;
            this.source = await findByPK(schema, id);
            return this; // when done
        })();
    }
    id() {
        return this.source.id;
    }

    date() {
        return this.source.date;
    }

    async provider() {
        return await new FoodProvider(this.source.provider_id);
    }
    async creator() {
        return await new User(this.source.creatorId);
    }
    async entries() {
        let ret = await this.getEntries(this.source.id);
        return ret;
    }
    async getEntries(id) {
        const cacheKey = `entries_of_${id}`;
        let ids = await cacheService.get(cacheKey);
        let entries = [];
        if (ids == null || ids.length == 0) {
            ids = await OrderEntrySchema.findAll({
                where: {
                    order_id: id
                },
                raw: true,
                attributes: ['id']
            })
            cacheService.set(cacheKey, ids);
        }
        if (ids != null) {
            for (var i = 0; i < ids.length; ++i) {
                let entry = await new OrderEntry(ids[i].id);
                entries.push(entry);
            }
        }
        return entries;
    }

    createdAt() {
        return this.source.createdAt;
    }

    updatedAt() {
        return this.source.updatedAt;
    }


}
export default Order