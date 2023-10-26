
let myFavorites = []

const postFav = (request,response)=>{

    const {character} = request.body
    //pusheamos al arreglo de favoritos 
    myFavorites.push(character)
    return response.status(200).json(myFavorites)
}

const deleteFav = (request, response)=>{

    const { id } = request.params

    //se utiliza el método filter para filtrar los personajes favoritos y eliminar aquel que tenga el mismo ID que el recibido por parámetros.
    const deleteChars = myFavorites.filter((character) => {
        character.id !== Number(id)
    })

    myFavorites=deleteChars;
    return response.status(200).json(myFavorites) // Devuelve un objeto JSON con el contenido actualizado de myFavorites
}


module.exports = {
    postFav,
    deleteFav
}