import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../Reducer/rootReducer'

export default createStore(
    rootReducer, applyMiddleware(thunk)
);