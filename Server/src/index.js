const http = require ('http')
const character = require ('./utils/data')
const PORT = 3001;

http.createServer((req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        //el split separa el string en un array y el at nos da el ultimo elemento
        const id = req.url.split('/').at(-1)
       //find se utiliza para buscar un elemento en un array que cumpla con una condición específica y devuelve el primer elemento que cumple con esa condición
        let characterFilter = character.find((character) => character.id === Number(id))

        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(characterFilter));

    }

}).listen(PORT,console.log('port on 3001'))