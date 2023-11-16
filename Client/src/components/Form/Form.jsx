import { useState } from "react";
import style from "../Form/Form.module.css"
import validation from "./validation";
import axios from "axios"

const Form = (props) => {
    
    const {login} = props

    const [userData, setUserData] = useState({
        email:"",
        password:"",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({
        email:"",
        password:"",
        confirmPassword: ""
    })

    const handleChange = (evento) => {
        setUserData({
          ...userData,
          [evento.target.name]: evento.target.value, 
        });

        setErrors(validation({
            ...userData,
            [evento.target.name] : evento.target.value

        }))
    };

    const handleSubmit = (evento) =>{
        evento.preventDefault();
        if (errors.email || errors.password) window.alert('Invalid email or password');
        login(userData)
    }

    const [sign, setSign] = useState(false);

    const signIn = () => {
        sign 
            ? setSign(false)
            : setSign(true);
    };

    const handleRegister = async (userData) => {
        try {
            const URL = 'http://localhost:3001/rickandmorty/login/';
            const user = {
                email: userData.email,
                password: userData.password,
            };
            if (errors.email || errors.password) window.alert('Invalid email or password');
            else if (errors.confirmPassword) window.alert('Passwords don´t match');
            else {
                await axios.post(URL, user);
                setSign(false);
            };
        } catch (error) {
            window.alert(error);
        };
    };


    
    return(
        <div className={style.container}>
       
        <div className={style.formContainer}>
             <form onSubmit={handleSubmit}>
                {sign
                    ? (
                        <div className={style.registerContainer}>
                            <div className={style.registerTitle}>
                            <h2>Rick & Morty Registration</h2>
                            </div>
                            <div className={style.inputs}>
                                <div>
                                    <label>Email</label>
                                    <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Insert email Address" />
                                    {errors.email && <h5 style={{ color: 'red' }}>{errors.email}</h5>}
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Insert Password..." />
                                    {errors.password && <h5 style={{ color: 'red' }}>{errors.password}</h5>}
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <input onChange={handleChange} type="password" name="confirmPassword" value={userData.confirmPassword} placeholder="Insert Password..." />
                                    {errors.confirmPassword && <h5 style={{ color: 'red' }}>{errors.confirmPassword}</h5>}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button type="button" onClick={() => handleRegister(userData)}>Register</button>
                                    <button type="button" onClick={signIn}>Back</button>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <div className={style.logInContainer}>
                            <div className={style.logInTitle}>
                            <p>Rick and Morty API</p>
                            </div>
                            <div className={style.inputs}>
                                <label>Email</label>
                                <input onChange={handleChange} type="text" name="email" value={userData.email} placeholder="Insert Email Address..." />
                            </div>
                            <div>
                                <label>Password</label>
                                <input onChange={handleChange} type="password" name="password" value={userData.password} placeholder="Insert Password..." />
                            </div>
                            <div>
                                <button type="submit" onClick={handleSubmit}>LogIn</button>
                                <button type="button" onClick={signIn}>SignUp</button>
                            </div>
                        </div>
                    )
                }
            </form>
        </div>
    </div>
    )
}

export default Form;
