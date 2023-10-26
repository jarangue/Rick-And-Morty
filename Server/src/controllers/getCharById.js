//EXPRESS

const axios = require('axios')
const URL = `https://rickandmortyapi.com/api/character/${id}`


const getCharById = (request,response)=>{

    const { id } = request.params

    axios(`${URL}${id}`)
    .then((response)=> response.data)

    .then((data)=>{ //data tiene toda la info que necesitamos 

        const character = {
            id: data.id,
            status: data.status, 
            name: data.name, 
            species: data.species, 
            origin: data.origin?.name, 
            image: data.image,
            gender: data.gender,
        }

        if(character.name){
            response.status(200).json(character); //Envia el personaje como respuesta
        }
        else{
            response.status(404).send('Not found'); // Enviar el mensaje de error 404 si el personaje no se encuentra
        }
        
    })

    .catch((error)=>{
        return response.status(500).send(error.message)
    })
}



module.exports = getCharById

//WEB SERVER

// const axios = require('axios')

// const getCharById = (res,id) =>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((result) => result.data)

//     .then((data)=>{
//         let character= {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image:data.image,
//             status:data.status
//         }
//         res.writeHead(200, {'Content-type': "application/json"})
//         res.end(JSON.stringify(character))
//     })
//     .catch((err)=>{
//         res.writeHead(500,{'Content-type': 'text/plain'})
//         res.end(err.message)

//     })
// }


// module.export = {
//     getCharById
// }
