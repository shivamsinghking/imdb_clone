import mongoose from 'mongoose'
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let schema = new Schema({
  name: { type: String, required: true },
  casts: [{ _id: ObjectId, actor_name: String }],
  year_of_release: { type: Date, default: null, required: false },
  producer: { _id: { type: ObjectId, required: true }, name: { type: String, required: true } },
  plot: [{ type: String, require: true }]
});

export const Movie = mongoose.model('Movie', schema);