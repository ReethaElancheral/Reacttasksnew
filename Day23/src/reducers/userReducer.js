
const initialState = {
  loading: false,
  data: [],
  error: ''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_USERS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
