import util from './utility'

const schema = {
    "id": "String",
    "date": "String",
    "restaurant_id": "String",
    "creatorId":"String",
    "entries": [{
        "user_id": "String",
        "unit_id": "String"
    }]
};

const Order = util.getModel('Order', schema);

export default Order;