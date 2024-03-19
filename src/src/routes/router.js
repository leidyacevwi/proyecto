const { Router } = require("express");
const AuthRouter = require("./authroutes/auth.router");

class AppRouter {
    static get routes() {
        const router = Router();

        router.get("/api", (_, res) => {
            return res.status(200).send("<h1> bienvenido <h1>");// con el metodo envio la respuesta
        });

        // const controller =  AuthController()

        // router.post('/login', AuthController);
        // router.use('/register', controller.registerUser);
        router.use("/api/v1/auth", AuthRouter.routes);

        return router;
    }
}

module.exports = AppRouter;