import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types'


const InitialState = {
    myFavorites: [],
    allCharacters:[],

}

const reducer = (state = InitialState, action) =>{

    switch(action.type){
        case ADD_FAV:

            const copyAllCharacters = [...state.allCharacters];

            return{
                ...state,
                myFavorites:[...copyAllCharacters,action.payload],
                
                
            }
        
        case FILTER:
            let copyFilter = state.allCharacters.filter(
                (character) => character.gender === action.payload
            )

            return{
                ...state,
                myFavorites:copyFilter
            }
            
        case ORDER:
                // Crea una copia de myFavorites
            const orderFavorites = [...state.myFavorites];
          
                // Ordena los personajes según su id en orden ascendente o descendente

            if (action.payload === 'A') {
                orderFavorites.sort((a, b) => a.id - b.id); // Orden ascendente

            } else if (action.payload === 'D') {
                orderFavorites.sort((a, b) => b.id - a.id); // Orden descendente
            }
          
        return {
            ...state,
            myFavorites: orderFavorites,
        }
      
        case REMOVE_FAV:

            let deleteCharacter = state.myFavorites.filter(character => character.id !== Number(action.payload))

            return{
                ...state,
                myFavorites: deleteCharacter

            }
        
        
        default:
            return{
                ...state
            }
    }

}

export default reducer;