const regExpMail = new RegExp (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

const validation = (data) => {
    let errors = {}

    if(!regExpMail.test(data.email)){
        errors.email = "Debe ingresar un email valido"
    }
    if(!data.email){
        errors.email = "Debe ingresar un email"
    }
    if(!data.email.length > 35){
        errors.email = "Debe ser un email menor a 35 caracteres"
    }

    // En la función de validación
    if (!data.password) {
        errors.password = "Debe ingresar una contraseña.";
    } 
    else if (!/[0-9]/.test(data.password)) {
        errors.password = "La contraseña debe contener al menos un número.";
    }
    else if (data.password.length < 6 || data.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
    }
    
    return errors;

}

export default validation;