
const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_WEATHER_SUCCESS':
      return { loading: false, data: action.payload, error: null };
    case 'FETCH_WEATHER_FAILURE':
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};
