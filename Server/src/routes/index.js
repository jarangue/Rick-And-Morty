const express = require("express") //ok
const router = express.Router() //ok

const { getCharById } = require('../controllers/getCharById')
const login  = require('../controllers/login')
const logout = require('../controllers/login')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav')




//llamamos al empaquetador de rutas

router.get("/character/:id", getCharById)

router.get("/login", login)

router.get("/logout/", logout)

router.post("/login", postUser)

router.post("/fav", postFav)

router.delete("/fav/:id", deleteFav)

module.exports = router