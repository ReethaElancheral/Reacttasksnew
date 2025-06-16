const initialState = {
  isLoggedIn: false,
    username: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: true,   username: action.payload };
    case 'LOGOUT':
      return { isLoggedIn: false, username: '', };
    default:
      return state;
  }
}
