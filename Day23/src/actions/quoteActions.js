export const fetchQuote = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_QUOTE_REQUEST' });
    try {
      const res = await fetch('https://api.quotable.io/random');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_QUOTE_FAILURE', payload: err.message });
    }
  };
};
