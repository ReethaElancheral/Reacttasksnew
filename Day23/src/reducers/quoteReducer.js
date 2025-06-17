
const initialState = {
  loading: false,
  quote: null,
  error: null,
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUOTE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_QUOTE_SUCCESS':
      return { loading: false, quote: action.payload, error: null };
    case 'FETCH_QUOTE_FAILURE':
      return { loading: false, quote: null, error: action.payload };
    default:
      return state;
  }
};
