const users = require('../utils/users')

const login = (request,response)=>{

    const {email, password} = request.query; //Usamos el objeto request.query para obtener los datos de email y password
    let access = false

    users.forEach((user)=>{
        if(user.email === email && user.password === password){
            access = true
        }
    })
    response.status(200).json({ access })
   
}



module.exports = login;