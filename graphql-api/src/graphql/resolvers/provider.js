import schema from '../../database/schemes/FoodProviderSchema';
import {findByPK} from '../../database/schemes/crud/crud';

class FoodProvider {

    constructor(id){
        return (async () => {
            this.id = id;
            this.source = await findByPK(schema,id);
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