import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";


const InitialState = {
    myFavorites: [],
    allCharacters:[],

}

const reducer = (state = InitialState, action) =>{

    switch(action.type){
       
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload,
            };
        
        case FILTER:
            let copyFilter = state.allCharacters.filter(
                (character) => character.gender === action.payload
            )

            return{
                ...state,
                myFavorites:copyFilter
            }
            
        case ORDER:
               
            const orderFavorites = [...state.myFavorites];

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
            return { 
                ...state,
                 myFavorites: action.payload,
            };

        
        default:
            return{
                ...state
            }
    }

}

export default reducer;