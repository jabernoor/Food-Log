import schema from '../../schemes/OrderEntrySchema';
import Unit from './unit'
import cache from '../../database/redis'

class OrderEntry {

    constructor(id){
        return (async () => {
            this.id = id;
            let cacheKey = `order_entry_${id}`;
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
    
    async unit(){
        return await new Unit(this.source.unit_id);
    }

    createdAt(){
        return this.source.createdAt;
    }

    updatedAt(){
        return this.source.updatedAt;
    }


}
export default OrderEntry;