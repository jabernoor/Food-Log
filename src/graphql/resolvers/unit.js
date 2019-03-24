import unit from '../../schemes/UnitSchema'
import schema from '../../schemes/UnitSchema';
import FoodProvider from './provider'

class Unit {

    constructor(id){
        return (async () => {
            this.id = id;
            this.source = await schema.findByPk(id,{raw:true});
            return this;
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