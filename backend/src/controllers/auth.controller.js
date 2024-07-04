
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'


export const register = async (req, res) => {

    const { email, password, username } = req.body

    try {


        const passwordHash = await bcryptjs.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })

        const userSaved = await newUser.save()
        const token = await createAccessToken({ id: userSaved._id });

        res.cookie('token', token)
        res.json({
            message: "Tu cuenta se creo con exito!",
        })

    } catch (error) {
        console.log(error)
        let errorMessage
        if (error.code === 11000) {
            errorMessage = 'Ya existe una cuenta con ese correo'
        } else {
            errorMessage = 'Ocurrio un error al crear la cuenta'
        }
        res.status(500).json({ errorMessage })
    }

};
export const login = async (req, res) => {

    const { email, password } = req.body

    try {


        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(404).json({ message: "User not found" })

        const isMach = await bcryptjs.compare(password, userFound.password)
        if (!isMach) return res.status(404).json({ message: "incorrect password" })




        const token = await createAccessToken({ id: userFound._id });

        res.cookie('token', token)
        res.json({
            message: "User created successfully",
        })
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};
export const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
};

export const profile = (req, res) => {
    const userFound = User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: "user not found" });

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
    });
}
