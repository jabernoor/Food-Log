import OrderEntrySchema from '../../schemes/OrderEntrySchema'

class Crud {
    async create(input) {
        return await OrderEntrySchema.create(input).then((orderEntry) => {
            return orderEntry.id;
        }).catch(error => {
            return error;
        });
    }
}


export default new Crud();