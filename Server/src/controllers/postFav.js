const { Favorite } = require("../DB_connection")

const postFav = async (req,res) => {

 try {
    const {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender
    } = req.body 


    if (!id || !name || !status || !origin || !gender || !image || !species) {
        return res.status(401).send("Faltan Datos");
    }

    //*Guarda los personajes en la base de datos 
    await Favorite.findOrCreate({
        where: { id, name, status, origin, gender, image, species },
    });

    //*Busca todos los personajes favoritos guardados en tu base de datos
    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
    
 } catch (error) {
    return res.status(500).json({error: error.message})
 }
}

module.exports = postFav;