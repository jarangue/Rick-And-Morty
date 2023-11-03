import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from './action-types'
import axios from "axios"


// export const addFav = (character) =>{
//     return{
//         type: ADD_FAV,
//         payload: character

//     }
// }

//!Con express o promesas 

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character)
//        .then(({ data }) => {
//           return dispatch({
//                type: ADD_FAV,
//                payload: data,
//           });
//        });
//     };
//  };

//!Con async-await
export const addFav = (character) => {
   
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
        const {data} = await axios.post(endpoint, character)
        return dispatch({
         type: ADD_FAV,
         payload: data,
        });
           
      } catch (error) {
        return {error: error.message}
      } 
   } 
};

 

// export const removeFav= (id) => {
//     return{
//         type: REMOVE_FAV,
//         payload: id,
//     }
// }

//!Con express
// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//       axios.delete(endpoint)
//        .then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//           });
//        });
//     };
//  };

//Con async - await
 export const removeFav = (id) => {

      try {
         const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
         return async (dispatch) => {
            
            const {data} = axios.delete(endpoint)
         
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
            });
         }
      } catch (error) {
         return {error: error.message}  
      };
};

export const filterCards=(gender)=>{
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (order)=>{
    return{
        type: ORDER,
        payload: order
    }
}

// export const removeComponentFavorites= (id)=>{
//    return {
//       type: REMOVE_COMPONENT_FAVORITES,
//       payload: id
//    }
// }