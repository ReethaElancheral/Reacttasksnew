import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter({ initialValue = 0 }) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);


  useEffect(() => {
    dispatch({ type: 'INIT', payload: initialValue });
  }, [dispatch, initialValue]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default Counter;
