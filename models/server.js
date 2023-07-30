const express = require('express')
const session = require('express-session');
const cors = require('cors');
const bodyparser = require('body-parser')
const { dbConnection } = require('../db/db');
//const hbs = require('hbs');




class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        this.paths = {
            userPath: '/auth/login',
            userPathform: '/auth/appl',
            userPathen: '/in',
            userPathreg: '/up',
            PathdownloadM: '/datos/auth/login',
            PathdownloadS: '/datos/auth/appl'
        }


        //ConectionBD
        this.conectarDB();
        //middlewares
        this.middlewares();
        

        //Routes
        this.routes();
    }
    //Conexion a Base de Datos
    async conectarDB() {
        await dbConnection();
    }
    //middlewares
    middlewares() {

        // Configurar express-session
        this.app.use(session({
            secret: 's3cr370d3m3n2@s3', // Clave secreta para cifrar las cookies de sesión (debe ser cambiada en producción)
            resave: false,
            saveUninitialized: false
        }));

        //Cors
        this.app.use(cors({origin: 'http://localhost:8080/', optionsSuccessStatus :200}));
        //LEctura y parseo
        this.app.use(express.json());
         //Bodyparse
         this.app.use(express.urlencoded({extended: true}));
         //Bodyparse
         this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static(`public`));

        

        //hbs

        this.app.set('views engine', 'hbs');



    }

    routes() {


        this.app.use(this.paths.userPath, require('../routes/user'))
        this.app.use(this.paths.userPathform, require('../routes/appli'))
        this.app.use(this.paths.userPathen, require('../routes/useradmin'))
        this.app.use(this.paths.userPathreg, require('../routes/useradmin'))
        this.app.use(this.paths.PathdownloadM, require('../routes/user'))
        this.app.use(this.paths.PathdownloadS, require('../routes/appli'))
        



    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto`, this.port)
        })
    }

}

module.exports = Server;