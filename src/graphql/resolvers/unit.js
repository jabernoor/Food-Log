import unit from '../../schemes/UnitSchema'
import schema from '../../schemes/UnitSchema';
import FoodProvider from './provider'
import {findByPK} from '../../schemes/crud/crud';

class Unit {

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