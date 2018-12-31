import util from './utility'

const schema = {
    "id": "String",
    "description": "String",
    "phone_number": "String",
    "avatar": "String"
};

const Order = util.getModel('FoodProvider', schema);

export default Order;