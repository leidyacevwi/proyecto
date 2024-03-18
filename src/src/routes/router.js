const { Router } = require("express");
const MatematicasRouter = require("./matematicas/matematicas.router");

class AppRouter {
    static get routes() {
        const router = Router();

        router.get("/api", (_, res) => {
            return res.status(200).send("holis");
        });

        router.use("/api/v1/matematicas", MatematicasRouter.routes)

        return router;
    }
}

module.exports = AppRouter;