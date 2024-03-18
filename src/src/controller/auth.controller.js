const {Request, Response} = require("express");

class AuthController {
    
    static get routes(){}


    registerUser = (req = Request, res = Response) => {
        res.json ('registerUser')
    }

    loginUser = (req = Request, res = Response) => {
        res.json ('registerUser')
    }

    validateEmail = (req = Request, res = Response) => {
        res.json ('registerUser')
    }
}

module.exports = AuthController;