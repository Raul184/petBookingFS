import { createStore , applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//root
import rootReducer  from './reducers/rootReducer.js';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer ,
  initialState,
  composeWithDevTools(applyMiddleware( ...middleware ))
);

export default store;