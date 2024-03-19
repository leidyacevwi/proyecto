const {request, response} = require("express");
const User = require('../database/models/user.model')
class AuthController {



    static registerUser = async(req = request, res = response) => {

        try {
            const data = req.body;
            const user = new User(data);
            await user.save();
            return res.json(data)

        } catch (error) {
            console.error(error);
            return res.json({
                data: "pailas"
            })
        }
    }
    static loginUser = async(req = request, res = response) => {

        try {
            
           
        } catch (error) {
  
            
        }
    }
}

module.exports = AuthController;