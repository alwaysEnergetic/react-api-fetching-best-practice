import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './ducks';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LOG_OUT } from "./ducks/user/types";

const MiddleWares = [];

if(process.env.NODE_ENV === 'development'){
    const { logger } = require('redux-logger');

    MiddleWares.push(logger);
}

const rootReducer = (state, action) => {
    if (action.type === LOG_OUT) state = undefined;
    return combineReducers(reducers)(state, action);
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...MiddleWares)));

export default store;