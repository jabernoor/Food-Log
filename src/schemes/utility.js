import mongoose from "mongoose";

export default class {
    static getModel(modelName, json){
        try{
            const schema = new mongoose.Schema(json);
            return mongoose.model(modelName,schema);
        } catch (e) {
            return mongoose.model(modelName);
        }
    }
}