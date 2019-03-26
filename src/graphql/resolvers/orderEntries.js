import schema from '../../schemes/OrderEntrySchema';
import Unit from './unit'
import {findByPK} from '../../schemes/crud/crud';

class OrderEntry {

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