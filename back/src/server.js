const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


class App {

    constructor() {
        this.express = express();
        this.server = '';
        this.isDev = process.env.NODE_ENV != 'production';

        
        this.middlewares();
        this.routes();    
    }



    middlewares() {   
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use('/imagens', express.static(path.resolve(__dirname, '..', 'uploads')))
        this.express.use(cors());
        

        this.server = require('http').Server(this.express);
        const io = require('socket.io')(this.server);

        this.express.use((req, res, next) => {
            req.io = io;

            next();
        })
    }


    routes() {
        this.express.use('/api', require('./routes'));
    }

}

module.exports = new App().server;