const { request, response } = require("express");
const User = require('../database/models/user.model')
const Encrypter = require('../config/encryptor')
class AuthController {


    static registerUser = async (req = request, res = response) => {

        try {
            const data = req.body;
            const user = new User(data);
            // user.password = Encrypter.hash(user.password)
            await user.save();
            return res.json(data)
        } catch (error) {
            console.error(error);
            return res.json({
                status: false,
                data: null,
                error
            })
        }
    }

    static loginUser = async (req = request, res = response) => {

        try {
            const { email, password } = req.body;
            const user = await User.findOne({email}); //para buscar en la base de datos si exitse el usuario
            if( !user) return res.json({
                error: "The email doesn't correct"
            })
            // const validPassword = Encrypter(password, user.password);
            // console.log(validPassword);
            // if (!validPassword) return res.json({
            //     error: "The password doesn't correct"}
            //     );

            if(user.password !== password) return res.json({
                error: "The password doesn't correct"
            })
            
            return res.json(user)
        } catch (error) {
            return res.json({
                data: "The email doesn't exist"
            })
        }
    }
}

module.exports = AuthController;