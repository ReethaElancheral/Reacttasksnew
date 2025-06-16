import { INCREMENT, DECREMENT } from '../redux/counterReducer';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
