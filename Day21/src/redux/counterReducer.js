
const initialState = {
  counter: 0,
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INIT':
      return { counter: action.payload };
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
