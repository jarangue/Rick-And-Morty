import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import style from "../Details/Detail.module.css"
import axios from "axios";

const Detail = () => {

    const [character, setCharacter] = useState ({})
    const {id} = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(

        <div className={style.container}>

            {/* character ? ( */}
                <div className={style.text}>
                    <img src={character.image} alt = {character.image}/>
                    <h2> Name: {character.name}</h2>
                    <h2> Status: {character.status}</h2>
                    <h2> Species: {character.species}</h2>
                    <h2> Gender: {character.gender}</h2>
                    <h2> Origin: {character.origin?.name}</h2>
                </div>
            {/* )
             : (
                ""
             ) */}

        </div>
        

            

       
    )

}

export default Detail;