import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();
const middleWare = applyMiddleware(thunk,logger);
const createStoreWithMiddleware = (middleWare)(createStore);
const configureStore =(initiallValue)=> createStoreWithMiddleware(rootReducer,initiallValue);

export default configureStore;