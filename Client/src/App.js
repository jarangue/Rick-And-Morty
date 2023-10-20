import { useState, useEffect } from 'react';
import './App.css';
// import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav.jsx"
import About from "./components/About/About"
import Detail from './components/Details/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

// import SearchBar from './components/SearchBar/SearchBar';
// import characters from './data.js';



function App() {

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   const EMAIL = "ejemplo@gmail.com"

   const PASSWORD = "hola123"


   const {pathname}= useLocation();

   const navigate = useNavigate()

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      setCharacters(
         characters.filter((char) =>{
            return char.id !== Number(id); 
         })
      );
   }

   

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   //Recibe como primer parametro una callback y como segundo parametro un array de dependencias (a quien se esta fijando)
   useEffect(() => {
      !access && navigate ('/');
   }, [access])

   return (

      <div className='App'>

         {pathname !== '/' && <Nav onSearch={onSearch}/>} 

         <Routes>

            <Route path={"/"} element={<Form login={login}/>}/>

            <Route path={"/home"} element={<Cards characters={characters} onClose={onClose} />}/>
               
            <Route path={"/about"} element={<About/>}/>

            <Route path={"/favorites"} element={<Favorites/>}/>

            <Route path={"/detail/:id"} element={<Detail/>}/>


         </Routes>

       </div>
   );
}

export default App;
