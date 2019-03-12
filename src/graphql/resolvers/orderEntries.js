import schema from '../../schemes/OrderEntrySchema';
import Unit from './unit'

class OrderEntry {

    constructor(id){
        return (async () => {
            this.id = id;
            this.source = await schema.findByPk(id,{raw:true});
            console.log(`source is here: ${id}`);
            return this; // when done
        })();
    }
    
    id(){
        
        return this.source.id;
    }
    
    async unit(){
        return await new Unit(this.source.unit_id);
    }

}
export default OrderEntry;