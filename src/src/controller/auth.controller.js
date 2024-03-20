const { request, response } = require("express");
const User = require('../database/models/user.model');
const Encrypter = require('../config/encryptor');
const { generateToken } = require("../utilities/jwt");


class AuthController {

    static registerUser = async (req = request, res = response) => {
        try {
            const data = req.body;
            const user = new User(data);
            user.password = Encrypter.hash(user.password)
            await user.save();
            return res.status(200).json({ status: true, data: null, message: "Se ha registrado con exito"})
        } catch (error) {
            console.error(error);
            return res.status(404).json({status: false, data: null,error})
        }
    }

    static loginUser = async (req = request, res = response) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({email}); // find the user by email
            if(!user) return res.status(404).json({error: "The email doesn't correct"});

            const validPassword = Encrypter.compare(password, user.password);
            if (!validPassword) return res.status(404).json({ error: "The password doesn't correct"});

            const token = await generateToken(user._id);
            if(!token)return res.status(404).json({error: "The tokes doesn't correct"});
            
            
            return res.status(200).json({ status: true, data: null, message: "The login was a succesful =)", token });
        } catch (error) {
            return res.status(404).json({ error: "The user doesn't exist"});
        }
    }
    static list = async (req = request, res = response) => {
        try {
            const users = await User.find()
            return res.status(200).json({status: true, data: users, message: "All the user are listed"});
        } catch (error) {
            return res.status(404).json({ error: "The user doesn't exist"});
        }
    }

}

module.exports = AuthController;