import { fakerDE } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generateMock = async () => {
    //Email, _id, nombre, apellido, fecha_nacimiento, genero, sexo, celular, imagen, dni, password

    const hashedPassword = await bcrypt.hash("coder123", 10);

    const roles = ['user', 'admin'];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    return {
        password: hashedPassword,
        role: randomRole,
        pets: []
    }
}

export const generateUser = async () => {
    //Email, _id, nombre, apellido, fecha_nacimiento, genero, sexo, celular, imagen, dni, password

    const hashedPassword = await bcrypt.hash("coder123", 10);
    const roles = ['user', 'admin'];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    return {
        _id: fakerDE.database.mongodbObjectId(),
        first_name: fakerDE.person.firstName(),
        last_name: fakerDE.person.lastName(),
        sex: fakerDE.person.sex(),
        gender: fakerDE.person.gender(),
        birth_date: fakerDE.date.birthdate(),
        phone: fakerDE.phone.number(),
        address: fakerDE.location.streetAddress(),
        img: fakerDE.image.avatar(),
        email: fakerDE.internet.email(),
        password: hashedPassword,
        role: randomRole,
        pets: []
    }
}