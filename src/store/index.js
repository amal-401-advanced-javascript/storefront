import {combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
// import products from './Products.js';
import categories from './Categories.js';
import cart from './cart';
let reducers = combineReducers({categories, cart });
const store = () => {
    return createStore(reducers, composeWithDevTools());
}
export default store();