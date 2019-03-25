import schema from '../../schemes/FoodProviderSchema';
import cache from '../../database/redis'

class FoodProvider {

    constructor(id){
        return (async () => {
            this.id = id;
            let cacheKey = `provider_${id}`;
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
    
    name(){
        return this.source.name;
    }
    
    description(){
        return this.source.description;        
    }

    phoneNumber(){
        return this.source.phoneNumber;
    }

    avatar(){
        return this.source.avatar;
    }

    createdAt(){
        return this.source.createdAt;
    }

    updatedAt(){
        return this.source.updatedAt;
    }
}
export default FoodProvider