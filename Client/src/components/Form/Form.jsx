import { useState } from "react";
import style from "../Form/Form.module.css"
import validation from "./validation";

const Form = (props) => {
    
    const {login} = props

    const [userData, setUserData] = useState({
        email:"",
        password:"",
    })

    const handleChange = (evento) => {
        setUserData({
          ...userData,
          //email
          //password
          [evento.target.name]: evento.target.value, // Eliminar los corchetes aquí
        });

        setErrors(validation({
            ...userData,
            [evento.target.name] : evento.target.value

        }))
    };

    const handleSubmit = (evento) =>{
        evento.preventDefault();
        login(userData)
    }

    const [errors, setErrors] = useState({})

    
    return(
        <div className={style.container}>
       
        <form className={style.formContainer}>
            
            <label htmlFor="emailInput">Email: </label>
            <input
                type="email"
                name="email"
                // id="emailInput"
                value={userData.email}
                onChange={handleChange}
                placeholder="Correo electronico"
                
            />

            {
                errors.email ? (
                    <p>{errors.email}</p>
                ) : errors.emailVacio ? (
                    <p>{errors.emailVacio}</p>
                ) : (
                    <p>{errors.caracteres}</p>
                )
            }

            <label htmlFor="passwordInput">Contraseña</label>
            <input
                type="password"
                name="password"
                // id="passwordInput"
                value={userData.password}
                onChange={handleChange}
                placeholder="Contraseña"
            />

{
                errors.passwordVacio ? (
                    <p>{errors.passwordVacio}</p>
                ) : errors.passwordNumero ? (
                    <p>{errors.passwordNumero}</p>
                ) : (
                    <p>{errors.passwordLongitud}</p>
                )
            }

            <button type="submit" onClick={handleSubmit}> Submit </button>

        </form>
        </div>
    )
}

export default Form;
