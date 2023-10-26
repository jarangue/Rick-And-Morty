const users = require('../utils/users')

const login = (request,response)=>{

    const {email, password} = request.query; //Usamos el objeto request.query para obtener los datos de email y password

    if(email && password){
        const findUser = users.find((user) => user.email === email && user.password === password);

        if(findUser){
            response.status(200).json.access(true)
        }
        else{
            response.status(200).json.access(false)
        }
    }
}



module.exports = login;