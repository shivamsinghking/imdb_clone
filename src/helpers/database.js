import mongoose from 'mongoose'

export const connectDB = () => {
  mongoose.connect(process.env.DB_CONFIG_KEY, {dbName: 'test'})
    .then(() => {
      console.log("mongoose connected");
    })
    .catch(err => console.log(err))
}