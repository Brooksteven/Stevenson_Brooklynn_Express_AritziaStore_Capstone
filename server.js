import { config } from 'dotenv'; config(); //this is allowing the use of environment variables coming from a .env file
import './database/database.js' //import database connection into server.js
import express from 'express' //this imports the express package
import cors from 'cors';

//import routes here
import cartsRouter from './routes/carts/carts-router.js'
import itemsRouter from './routes/items/items-router.js'
import ordersRouter from './routes/orders/orders-router.js'
import usersRouter from './routes/users/users-router.js'


const app = express() //this initializes this backend express app
const PORT = process.env.PORT || 3001 //// This is conditional assignment. PORT conditionall is being assigned a value that comes from our PORT environment variable, if it doesn't find it, set it to 3001 instead


app.use(express.urlencoded({ extended: true })) ////this allows us to have a req.body for whatever forms are submitted //for the checkout form where user enters personal information to check out
app.use(express.json()) //this allows us to have a req.body whenever json data is submitted directly without a form, coming from reqbin or postman etc
app.use(cors());