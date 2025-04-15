import express from 'express'
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

