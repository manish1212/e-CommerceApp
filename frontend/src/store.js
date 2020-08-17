import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducer/productListReducer';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose; // to show in chrome extension 
//thunk is a redux middleware and it allows us to run async operation inside action in redux 
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;