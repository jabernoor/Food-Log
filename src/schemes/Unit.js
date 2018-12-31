import util from './utility'

const schema = {
    "id": "String",
    "description": "String",
    "provider_id": "String",
    "price": "String"
};

const Order = util.getModel('Unit', schema);

export default Order;