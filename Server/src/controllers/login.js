const { User } = require("../DB_connection")

const login = async (req,res) =>{

    try {

        const { email, password } = req.query;
        if (!email || !password) {
          res.status(400).send("Faltan datos");
        }
    
        const user = await User.findOne({ //findone se utiliza para buscar un único registro en la base de datos que cumple con ciertos criterios de búsqueda. 
            where: { 
                email 
            }
        })
        if(!user) return res.status(400).send("Usuario no encontrado");
        
        if(user.password === password){
            res.status(200).json({
                access: true,
            })
        } else {
            res.json(403).send("Contraseña incorrecta")
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
  
}

const logout = async (req, res) => {
    const email = await User.findOne({ where: { active: true } });
    await User.update({ active: false }, { where: { email: email.email } });
    return res.status(200).json({ access: false })
};

module.exports = login, logout