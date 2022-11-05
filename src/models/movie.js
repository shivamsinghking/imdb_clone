import mongoose from 'mongoose'
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let schema = new Schema({
    movie_name:{type:String, required:true},
    casts :[
      {_id: {type: ObjectId}},
      {actor_name: {type: String}}
    ],
    dob:{type:Date, required:true},
    gender: {type: String, required: true},
    year_of_release: {type: Date, default: null, required: false},
    producer: {_id: {type: ObjectId}, name:{type: String}}
});

export const Movie = mongoose.model('Movie',schema);