
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './middleware/logger'; 
import promiseMiddleware from './middleware/promise';

import { userReducer} from './reducers/userReducer';
import { postReducer} from './reducers/postReducer';

import { quoteReducer } from './reducers/quoteReducer';

import { weatherReducer } from './reducers/weatherReducer';

import { jokeReducer } from './reducers/jokeReducer';


const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  quoteState: quoteReducer,
    weather: weatherReducer,
      jokeState: jokeReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk,logger,promiseMiddleware)) 
);
export default store;
