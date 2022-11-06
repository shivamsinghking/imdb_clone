import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let schema = new Schema({
    name:{type:String, required:true},
    bio :{type:String, required:false},
    dob:{type:Date, required:false, default: null},
    gender: {type: String, required: true}
});

export const Producer = mongoose.model('Producer',schema);