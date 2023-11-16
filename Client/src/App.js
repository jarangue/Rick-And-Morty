import { useState, useEffect } from "react";
import './App.css';

import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav.jsx"
import About from "./components/About/About"
import Detail from './components/Details/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";

function App() {

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   const {pathname}= useLocation();

   const navigate = useNavigate()

   
   async function onSearch(id){

      try {
         const url = 'http://localhost:3001/rickandmorty/character/' + id

         const { data } = await axios (url)

         const char = characters?.find(e=> e.id === Number(data.id))

         if(char){
            alert("Already in the list")
         }
         else if(data.id !== undefined){
            setCharacters(characters => [...characters, data])
         }
         else{
            alert('Character not found')
         }

      } catch (error) {
         console.log(error.message)         
      }  
   }

  
   const onClose = (id) =>{
      setCharacters(
         characters.filter((char) =>char.id !== id)
      )
   }

   const login = async (userData) => {
      
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const QUERY = `?email=${email}&password=${password}`
         const {data} = await axios (URL + QUERY)
            const {access} = data;
            setAccess(data);
            access && navigate('/home')

      } catch (error) {
         return { error: error.message}
      }
   }

   const logout = async () => {
      const URL = 'http://localhost:3001/rickandmorty/logout/';
      const { data } = await axios(URL);
      setAccess(data.access)
    };
    

 
   useEffect(() => {
      const handleNavigation = () => {
        if (!access) {
          navigate('/');
        }
      };
    
      handleNavigation();
    }, [access, navigate]);

   return (

      <div className='App'>

         {pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>} 

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
