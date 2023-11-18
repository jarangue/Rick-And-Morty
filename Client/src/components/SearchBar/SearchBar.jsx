import { useState } from 'react';

import React from 'react';
import style from '../SearchBar/SearchBar.module.css'

export default function SearchBar(props) {

   const {onSearch} = props

   const [id, setId] = useState('');

  

   const handleChange = (evento) => {
      //1- debo capturar la data del imput
      //2- debo guardar esa data en mi ESTADO local id
      setId(evento.target.value);

   }

   return (
      <div className={style.navBar}>
         <input type='search' placeholder='Busca un personaje...' onChange={handleChange} value={id}/>
         <div className={style.buttonNavBar}>
         <button className={style.btn} onClick={()=> onSearch(id)}> Agregar </button>
         </div>
      </div>
   );
}
