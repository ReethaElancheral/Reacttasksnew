
export const simpleAsyncAction = () => {
  return (dispatch) => {
    console.log("Async Action Called");
  };
};
export const loadUsers = () => ({
  type: 'LOAD_USERS',
  payload: fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  ),
});


export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  };
};
