import React from "react";
import style from '../Card/Card.module.css';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {addFav, removeFav} from '../../Redux/actions'
import { useState, useEffect  } from "react";


 function Card(props) {
   const{id, onClose,name,status,species,gender,origin,image} = props

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
     
      if(isFav){
         setIsFav(false)
         props.removeFav(id)
      }
      else{
         setIsFav(true)
         props.addFav(props)
         
      }
   }

 
   useEffect(() => {
      if (props.myFavorites && Array.isArray(props.myFavorites)) {
         props.myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }
   }, [props.myFavorites, id]);

   return (
      <div className={style.cardContainer}>
         <div className={style.header}>

         <div className={style.favContainer}>
               {
               isFav ? (
                     <button className={style.btn2}onClick={handleFavorite}>❤️</button>
                     ) : (
                     <button className={style.btn2} onClick={handleFavorite}>🤍</button>
                  )
               }
               </div>
         
            <div className={style.buttonContainer}>
               <button className={style.btn} onClick={() => onClose(id)}>X</button>
               
            </div>
         
            
            <div className={style.imgContainer}>
            <img className={style.characterImg} src={image} alt={name} />
            </div>

         </div>

         <div className={style.textContainer}>

         <div className={style.name}>
         <Link to={`/detail/${id}`} >
          <h2>{name}</h2>
         </Link>

            {/* <h2>{name}</h2> */}
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

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav : (character) => {dispatch(addFav(character))},
      removeFav : (id) => dispatch(removeFav(id)),
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);