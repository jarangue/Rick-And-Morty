import { useState, useEffect } from "react";
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
// import { useDispatch } from 'react-redux';
// import { removeComponentFavorites } from './Redux/actions'

// import SearchBar from './components/SearchBar/SearchBar';
// import characters from './data.js';



function App() {

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   // const dispatch = useDispatch()

   // const EMAIL = "ejemplo@gmail.com"

   // const PASSWORD = "hola123"


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

   //!Con express o promesas 
   // const onSearch = (id) => {
   //    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   // //!Con Async-Await
   // const onSearch = async (id) => {
      
   //    const url

   //    try {
   //       const {data} = await axios (`https://rickandmortyapi.com/api/character/${id}`);
        
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } 
   //       else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    } catch (error) {

   //       console.log(error.response);
   //       if (error.response && error.response.status === 404) {
   //          window.alert("¡No existen personajes con este ID!");  
            
   //       } else {
   //          window.alert("¡error no determinado!")
   //       }
      
   //    }
   // }
   
   const onClose = (id) =>{
      setCharacters(
         characters.filter((char) =>char.id !== id)
            // return char.id !== Number(id);
      )
         

      
   }

   //!Con express o promesas 
   // const login = (userData) => {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`)
   //    .then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   //!Con async-await
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

   // const login = (userData) => {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   //Recibe como primer parametro una callback y como segundo parametro un array de dependencias (a quien se esta fijando)
   // useEffect(() => {
   //    !access && navigate ('/');
   // }, [access])
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
