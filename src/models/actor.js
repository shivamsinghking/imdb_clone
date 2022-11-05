import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let schema = new Schema({
    name:{type:String, required:true},
    bio :{type:String, required:false},
    dob:{type:Date, required: false},
    gender: {type: String, required: true}
});

export const Actor = mongoose.model('Actor',schema);