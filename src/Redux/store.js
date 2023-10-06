import {createStore, applyMiddleware, compose} from 'redux';
//applyMiddleware es un traductor entre el cliente y el servidor
import thunk from 'redux-thunk';
import reducer from '../Redux/reducer';
import {composeWithDevTools} from 'redux-devtools-extension'


// const composeEnHancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
    // composeEnHancer(applyMiddleware(thunk)) //applyMiddleware nos permite realizar peticiones asincronas
    )




export default store;
