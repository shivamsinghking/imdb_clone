import express from 'express'
import cors from 'cors';
import routes from './src/routes'
import dotenv from 'dotenv'
import {connectDB} from './src/helpers/database'

dotenv.config()
const app = express()

// Connecting the db
connectDB()
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));
app.use('/api', routes);

app.listen(process.env.PORT, () => console.log('app is listening', process.env.PORT))