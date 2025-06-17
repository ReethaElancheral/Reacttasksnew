const promiseMiddleware = (store) => (next) => (action) => {
  if (action.payload && typeof action.payload.then === 'function') {
 
    store.dispatch({ type: `${action.type}_PENDING` });

    return action.payload
      .then((result) => {
        store.dispatch({
          type: `${action.type}_FULFILLED`,
          payload: result,
        });
      })
      .catch((error) => {
        store.dispatch({
          type: `${action.type}_REJECTED`,
          payload: error,
          error: true,
        });
      });
  }

  return next(action); 
};

export default promiseMiddleware;
