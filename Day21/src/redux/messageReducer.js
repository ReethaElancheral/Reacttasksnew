const initialState = {
  message: 'Hello, world!',
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MESSAGE':
      return { message: action.payload };
    default:
      return state;
  }
}
