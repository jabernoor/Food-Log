import schema from '../../schemes/UserSchema';
import cache from '../../database/redis'
class User {

    constructor(id){
        return (async () => {
            this.id = id;
            let cacheKey = `user_${id}`;
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
    
    email(){
        return this.source.email;        
    }

    imagePath(){
        return this.source.imagePath;
    }

    oauthProvider(){
        return this.source.oauthProvider;
    }

    createdAt(){
        return this.source.createdAt;
    }

    updatedAt(){
        return this.source.updatedAt;
    }

}
export default User