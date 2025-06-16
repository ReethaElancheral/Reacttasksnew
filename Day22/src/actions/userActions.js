
export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: {
    id: Date.now(),
    ...user,
  },
});

export const removeUser = (id) => ({
  type: 'REMOVE_USER',
  payload: id,
});
