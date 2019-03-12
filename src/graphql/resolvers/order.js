import schema from '../../schemes/OrderSchema';
import OrderEntrySchema from '../../schemes/OrderEntrySchema';
import FoodProvider from './provider'
import OrderEntry from './orderEntries'
import User from './user';
class Order {

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
    
    date(){
        return this.source.date;
    }
    
    async provider(){
        return await new FoodProvider(this.source.provider_id);        
    }
    async creator(){
        return await new User(this.source.creatorId);
    }
    async entries(){
        let ret = await this.getEntries(this.source.id);
        return ret;
    }
    async getEntries(id){
        return await OrderEntrySchema.findAll({
            where:{
                order_id:id
            },
            raw:true,
            attributes: ['id']
        }).then(async rows=>{
            let objects = [];
            for(var i =0;i<rows.length;++i){
                let object = await new OrderEntry(rows[i].id);
                objects.push(object);
            }
            return objects;
        })
    }


}
export default Order