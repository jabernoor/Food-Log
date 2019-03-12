import schema from '../../schemes/FoodProviderSchema';

class FoodProvider {

    constructor(id){
        return (async () => {
            this.id = id;
            this.source = await schema.findByPk(id,{raw:true});
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

}
export default FoodProvider