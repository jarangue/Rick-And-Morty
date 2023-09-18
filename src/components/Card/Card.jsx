import React from "react";
import style from '../Card/Card.module.css';

export default function Card(props) {
   const{onClose,name,status,species,gender,origin,image} = props 

   return (
      <div className={style.cardContainer}>
         <div className={style.header}>    
            <div className={style.buttonContainer}>
               <button className={style.btn} onClick={onClose}>X</button>
            </div> 
            <img src={image} alt={name} />
            

         </div>

         <div className={style.textContainer}>
         <div className={style.name}>
            <h2>{name}</h2>
         </div>
            <div className={style.info}>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{origin}</h2>
            </div>
         </div>

      </div>
   );
}