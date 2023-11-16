import {connect} from "react-redux"
import Card from "../Card/Card"
import style from "../Favorites/Favorites.module.css"
import { filterCards, orderCards, removeFav } from "../../Redux/actions"
import { useDispatch } from "react-redux"
import {useState} from 'react';


const Favorites = ({myFavorites})=>{
   //  const {myFavorites} = props;

   const[aux,setAux] = useState(false)
    const dispatch = useDispatch()

    const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      aux === true ? setAux(false) : setAux(true);
      
      
    }

    const handleFilter = (e) => {
     
      if (e.target.value === "Todos") {
         dispatch(filterCards(null));
       } else {
         dispatch(filterCards(e.target.value));
       }
    }

    const removeFavorite = (id) =>{
      dispatch(removeFav(id));
    }

    return (
      <div>
        <div className={style.wrapperContainer}></div>
         <h1>My Favorites</h1>

       <div>
         <select onChange={handleOrder}>
            <option value="Todos">Orden</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
         </select>

         <select onChange={handleFilter}>
            <option value="Todos">Todos los Generos</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderles</option>
            <option value="unknown">unknown</option>
         </select>
         </div>
       
       <div className={style.cardContainer}>
        {myFavorites?.map((character) => {

            return (
               
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={() => removeFavorite(character.id)}
               />
               
            )
   
         })}
         </div>
      </div>
    )
}

const mapStateToProps = (state) =>({
    
       myFavorites: state.myFavorites,
    
 })

export default connect (mapStateToProps, null)(Favorites)