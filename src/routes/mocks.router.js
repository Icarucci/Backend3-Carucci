import { Router } from "express";
import { generateMock, generateUser } from '../utils/faker.js';

export const userRouter = Router()

userRouter.get('/mockingusers', async (req,res) => {
    let users = []
    for (let i = 0; i < 50; i++) {
        const user = await generateUser();
        users.push(user)
    }
    console.log(users);
    res.status(200).json({message : 'Usuarios creados correctamente', users})
})

export const mockingpets = Router()

mockingpets.get('/mockingpets', async (req,res) => {
    let pets = []
    for (let i = 0; i < 15; i++) {
        const pet = await generateMock();
        pets.push(pet)
    }
    console.log(pets);
    res.status(200).json({message : 'Mascotas creadas correctamente', pets})
})

export const generateData = Router()
    generateData.post('/generateData', async (req,res) => {

    })



export default userRouter;