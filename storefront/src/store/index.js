import {combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import products from './Products.js';
import categories from './Categories.js';
let reducers = combineReducers({ products,categories });
const store = () => {
    return createStore(reducers, composeWithDevTools());
}
export default store();