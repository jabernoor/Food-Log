import unit from '../../schemes/UnitSchema'
import schema from '../../schemes/UnitSchema';
import FoodProvider from './provider'
import cache from '../../database/redis'

class Unit {

    constructor(id){
        return (async () => {
            this.id = id;
            let cacheKey = `unit_${id}`;
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
    
    description(){
        return this.source.description;
    }
    
    price(){
        return this.source.price;        
    }

    currency(){
        return this.source.currency;
    }

    async provider(){
        return await new FoodProvider(this.source.provider_id);
    }
    
    createdAt(){
        return this.source.createdAt;
    }

    updatedAt(){
        return this.source.updatedAt;
    }

}
export default Unit