
const logger = (store) => (next) => (action) => {
  console.log('%cDispatching:', 'color: blue;', action);
  const result = next(action);
  console.log('%cNext state:', 'color: green;', store.getState());
  return result;
};

export default logger;
