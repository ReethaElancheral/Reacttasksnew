
const initialState = {
  loading: false,
  joke: null,
  error: null,
};

export const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOKE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_JOKE_SUCCESS':
      return { loading: false, joke: action.payload, error: null };
    case 'FETCH_JOKE_FAILURE':
      return { loading: false, joke: null, error: action.payload };
    default:
      return state;
  }
};
