const express = require('express')
const server = express()
const router = require('./routes')
const morgan = require('morgan')
const cors = require('cors')
const PORT = 3001

server.use(cors())

server.use(morgan("dev"))

server.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*'); //le da acceso a todas las rutas 
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 

server.use(express.json ());

 server.use("/rickandmorty", router)

 module.exports = server;