
import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { userReducer } from '../reducers/userReducer';
import { cartReducer } from '../reducers/cartReducer';
import { noteReducer } from '../reducers/noteReducer';
import { postReducer } from '../reducers/postReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  userState: userReducer,
  cartState: cartReducer,
  noteState: noteReducer,
   postState: postReducer,
  
});
