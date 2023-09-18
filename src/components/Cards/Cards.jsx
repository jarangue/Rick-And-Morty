import Card from '../Card/Card'
import style from '../Cards/Cards.module.css'

export default function Cards(props) {
   const {characters} = props; //arreglo con todos los personajes

   return <div className={style.wrapperContainer}>

      {characters.map((character) => {
         return (
            
            <Card
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
            
         )

      })}

      

   
      
   </div>;
}
