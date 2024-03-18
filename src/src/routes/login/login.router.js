const { Router } = require("express");

class MatematicasRouter {
    static get routes() {
      const router = Router();
  
      router.get("/:year", (req, res) => {
        const auxyear = parseInt(req.params.year);
        const currentDate = new Date().getFullYear();
        let age = currentDate - auxyear;
        return res.status(200).send(`<h1 style="color: red;"> la edad actual es: ${age} </h1>`);
      });
       
      return router;
    }
  }
  
  module.exports = MatematicasRouter;