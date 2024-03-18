
const express =  require('express');
const cors = require('cors');
const morgan = require('morgan');
const dbConecction = require('../database/connections');


class Server{

    constructor(port , routes){
        this.app = express();
        this.port = port;
        this.routes = routes
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(this.routes);
    }

    start(){

        this.middlewares();
        dbConecction()
        this.app.listen(this.port, ()=>{ 
        console.log(`inicialización...${this.port}`);
        })
    }
}

module.exports = Server;