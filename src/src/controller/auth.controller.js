const { request, response } = require("express");
const User = require('../database/models/user.model');
const Encrypter = require('../config/encryptor');
const { generateToken } = require("../utilities/jwt");
const { transporter, sendEmail } = require("../utilities/nodemailer");


class AuthController {

    static registerUser = async (req = request, res = response) => {
        try {
            const data = req.body;
            const user = new User(data);
            user.password = Encrypter.hash(user.password);
            await transporter.sendMail(sendEmail(user.name, user.email, "leidyacevedo491@gmail.com"));
            await user.save();
            return res.status(200).json({ status: true, data: null, message: "User registed succesfully" })
        } catch (error) {
            console.error(error);
            return res.status(404).json({ status: false, data: null, error })
        }
    }

    static loginUser = async (req = request, res = response) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email }); // find the user by email
            if (!user) return res.status(404).json({ error: "The email doesn't correct" });

            const validPassword = Encrypter.compare(password, user.password);
            if (!validPassword) return res.status(404).json({ error: "The password doesn't correct" });

            const token = await generateToken(user._id);
            if (!token) return res.status(404).json({ error: "The tokes doesn't correct" });


            return res.status(200).json({ status: true, data: null, message: "The login was a succesful =)", token });
        } catch (error) {
            return res.status(404).json({ error: "The user doesn't exist" });
        }
    }
    static list = async (req = request, res = response) => {
        try {
            const users = await User.find()
            return res.status(200).json({ status: true, data: users, message: "All the user are listed" });
        } catch (error) {
            return res.status(404).json({ error: "The user doesn't exist" });
        }
    }

    // static recoveryPassword = async (req = request, res = response) => {
    //     try {
    //       let { email } = req.body;
    //       const dbConnection = req.clientConnection;
    //       const userModel = new User(dbConnection);
    //       const user = await userModel.findByEmail(email);
    //       if (!user) return res.notFound("User not exist");

    //     //   const { state } = user;
    //     //   if (!state) return res.unauthorized("User is not active");
        
    //       const code = Math.floor(Math.random() * 900000) + 100000;
    //       await userModel.updateColumnByUserId(user.id_user, { user_code: code });
    //       const sendEmail = await sendRecoveryCode(email, code);
    //       if (!sendEmail)
    //         throw CustomError.notFound(
    //           "An error occurred while sending the recovery email"
    //         );
    //       return res.status(200).json({
    //         status: true,
    //         data: null,
    //         error: null,
    //       });
    //     } catch (error) {
    //         return res.status(404).json({ error: "The " });
    //     } finally {
    //       if (req.clientConnection) {
    //         await req.clientConnection.destroy();
    //       }
    //     }
    //   };
}

module.exports = AuthController;