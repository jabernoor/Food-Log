import mongoose from "mongoose";

const schema= new mongoose.Schema({
    "id": "String",
    "date": "String",
    "restaurant_id": "String",
    "entries": [{
        "user_id": "String",
        "unit_id": "String"
    }]
});
const Order = mongoose.model('Order',schema);

export default Order;