// const express = require("express")
const server = require("./app.js")
const PORT = 3001

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });

module.exports = server;


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

