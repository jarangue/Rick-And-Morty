const axios = require('axios')

const getCharById = (res,id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)

    .then((data)=>{
        let character= {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image:data.image,
            status:data.status
        }
        res.writeHead(200, {'Content-type': "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch((err)=>{
        res.writeHead(500,{'Content-type': 'text/plain'})
        res.end(err.message)

    })
}


module.export = {
    getCharById
}

// // Esta función toma dos parámetros: la respuesta HTTP y el ID del personaje que se desea obtener
// const getCharById = (response, id) => {
//     // Hacer una solicitud GET a la API de Rick and Morty con el ID del personaje en la URL
//     axios
//       .get(`https://rickandmortyapi.com/api/character/${id}`)
//       // Si la solicitud es exitosa, extraer la información relevante del objeto de respuesta
//       .then((result) => result.data)
//       .then(({ name, status, species, gender, origin, image }) => {
//         // Crear un objeto con la información del personaje
//         let character = {
//           id,
//           name,
//           status,
//           species,
//           gender,
//           origin,
//           image,
//         };
//         // Enviar una respuesta HTTP al cliente con el objeto character en formato JSON
//         response
//           .writeHead(200, { "Content-Type": "application/json" })
//           .end(JSON.stringify(character));
//       })

// / Si hay algún error en la solicitud, capturar el error y enviar una respuesta HTTP con un código de estado 500 y un mensaje de error
//     .catch((error) =>
//       response
//         .writeHead(500, { "Content-Type": "text/plain" })
//         .end(error.message)
//     );
// };

// // Exportar la función getCharById para que pueda ser utilizada en otros archivos
// module.exports = getCharById;