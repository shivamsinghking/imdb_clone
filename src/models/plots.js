import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let schema = new Schema({
    name:{type:String, required:true}
});

export const Plots = mongoose.model('Plots',schema);