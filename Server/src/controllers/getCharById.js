
const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'


const getCharById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const response = await axios(`${URL}${id}`);
      const { name, status, species, gender, origin, image } = response.data;
  
      const character = { id, name, status, species, gender, origin, image };
  
      return character.name
        ? res.status(200).json(character)
        : res.status(404).send('Not Found');
    } catch (error) {
     
      return res.status(500).send(error.message);
      
    }
    
  };

module.exports = {
    getCharById
}

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
