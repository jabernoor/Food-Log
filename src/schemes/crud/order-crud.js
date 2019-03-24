import OrderSchema from '../../schemes/OrderSchema'

class Crud {
    async create(input) {
        return await OrderSchema.create(input).then((order) => {
            return order;
        }).catch(error => {
            return error;
        });
    }
}


export default new Crud();