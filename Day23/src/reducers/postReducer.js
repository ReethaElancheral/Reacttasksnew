
const initialState = {
  loading: false,
  data: [],
  error: ''
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
