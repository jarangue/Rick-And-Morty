const express = require('express');
const server = express();
const router = require('./routes/index')
const PORT = 3001

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

 server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });


//WEB SERVER

// const http = require ('http')
// // const character = require ('./utils/data')
// const PORT = 3001;
// const {getCharById} = require ('./controllers/getCharById')

// http.createServer((req,res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes('/rickandmorty/character')){
//         //el split separa el string en un array y el at nos da el ultimo elemento
//         // const id = Number(req.url.split('/').at(-1))
//         const id = Number(req.url.split("/").pop());

//         getCharById(res,Number(id))

//     }

// }).listen(PORT,"localHost")

