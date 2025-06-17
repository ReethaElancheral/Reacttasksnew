
const logger = (store) => (next) => (action) => {
  console.log('%c Dispatching:', 'color: green', action);
  const result = next(action); 
  console.log('%c Next State:', 'color: blue', store.getState());
  return result;
};

export default logger;
