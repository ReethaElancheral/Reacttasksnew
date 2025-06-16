import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import counterReducer from '../redux/counterReducer';
import authReducer from '../redux/authReducer';

import logger from '../middleware/loggerMiddleware';
import messageReducer from '../redux/messageReducer';

import todoReducer from '../redux/todoReducer';
import themeReducer from '../redux/themeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,  
  auth: authReducer ,
   message: messageReducer,  
    todo: todoReducer  ,
    theme: themeReducer,    
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
composeEnhancers(applyMiddleware(logger))
);

export default store;
