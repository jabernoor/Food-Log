import schema from '../../schemes/OrderSchema';
import OrderEntrySchema from '../../schemes/OrderEntrySchema';
import FoodProvider from './provider'
import OrderEntry from './orderEntries'
import User from './user';
import cache from '../../database/redis'
class Order {

    constructor(id){
        return (async () => {
            this.id = id;
            let cacheKey = `order_${id}`;
            let status = await cache.existsAsync(cacheKey).then(reply=>{
                return reply;
            });
            if(status == 1){
                var cachedValue = await cache.getAsync(cacheKey).then(result=>{
                    return result;
                });
                this.source = JSON.parse(cachedValue);
                console.debug("Getting graphQL values from redis cache ...... ");
            } else {
                this.source = await schema.findByPk(id,{raw:true});
                console.debug("Getting graphQL values from database ...... ");
                if(this.source != null)
                    cache.set(cacheKey,JSON.stringify(this.source));
            }
            return this; // when done
        })();
    }
    id(){
        return this.source.id;
    }
    
    date(){
        return this.source.date;
    }
    
    async provider(){
        return await new FoodProvider(this.source.provider_id);        
    }
    async creator(){
        return await new User(this.source.creatorId);
    }
    async entries(){
        let ret = await this.getEntries(this.source.id);
        return ret;
    }
    async getEntries(id){
        return await OrderEntrySchema.findAll({
            where:{
                order_id:id
            },
            raw:true,
            attributes: ['id']
        }).then(async rows=>{
            let objects = [];
            for(var i =0;i<rows.length;++i){
                let object = await new OrderEntry(rows[i].id);
                objects.push(object);
            }
            return objects;
        })
    }
    
    createdAt(){
        return this.source.createdAt;
    }

    updatedAt(){
        return this.source.updatedAt;
    }


}
export default Order