const { Router } = require("express");
const MatematicasRouter = require("./login/login.router");
const { AuthController } = require("../controller/auth.controller");

class AppRouter {
    static get routes() {
        const router = Router();

        router.get("/api", (_, res) => {
            return res.status(200).send("<h1> bienvenido <h1>");// con el metodo envio la respuesta
        });

        // const controller =  AuthController()

        // router.post('/login', controller.loginUser);
        // router.use('/register', controller.registerUser);
        router.use("/api/v1/login", MatematicasRouter.routes);

        return router;
    }
}

module.exports = AppRouter;