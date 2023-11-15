// const express = require("express")
const server = require("./app.js")
const PORT = 3001
const { conn } = require('./DB_connection');

conn.sync({force: true}).then(()=>{
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
     });
})


module.exports = server;



