const express = require("express") //ok
const router = express.Router() //ok

const { getCharById } = require('../controllers/getCharById')
const  login  = require('../controllers/login')
const { postFav, deleteFav } = require('../controllers/handleFavorites')


//llamamos al empaquetador de rutas

router.get("/character/:id", getCharById)

router.get("/login", login)

router.post("/fav", postFav)

router.delete("/fav/:id", deleteFav)

module.exports = router