const { Router } = require("express");
const  AuthController = require("../../controller/auth.controller");
const verifyToken = require("../../middlewares/validate.token");


class AuthRouter {
    static get routes() {
      const router = Router();
  
      // router.get("/:year", (req, res) => {
      //   const auxyear = parseInt(req.params.year);
      //   const currentDate = new Date().getFullYear();
      //   let age = currentDate - auxyear;
      //   return res.status(200).send(`<h1 style="color: red;"> Your current age is: ${age} </h1>`);
      // });
      router.post("/register", AuthController.registerUser)
      router.post("/login", AuthController.loginUser)
      router.get("/list", verifyToken, AuthController.list)
      return router;
    }
  }
  
  module.exports = AuthRouter;