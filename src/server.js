/*import express from 'express'
import mongoose from 'mongoose';
import { mockingpets, userRouter, generateData} from './routes/mocks.router.js';


const app = express()

const PORT = 8080

app.use(express.json())

app.use('/api/mocks', mockingpets)
app.use('/api/mocks', userRouter)
app.use('/api/mocks', generateData)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})


mongoose.connect('mongodb+srv://ignaciocarucci:coder@cluster0.5kdfaxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Conexión exitosa a MongoDB')
})
*/
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from "./routes/mocks.routes.js";

dotenv.config()
const app = express();
const PORT = process.env.PORT||8080;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connected");
}).catch(()=>{
    console.log("DB Connection error!");
})

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter)

app.listen(PORT,()=>console.log(`Servidor corriendo en puerto ${PORT}`))
