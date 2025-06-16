
import { useSelector, useDispatch } from 'react-redux';

function CounterNew() {
  
  const counter = useSelector((state) => state.counter);

 
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>Counter: {counter}</h2>

    
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>

    
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: 10 }}>
        Decrement
      </button>
    </div>
  );
}

export default CounterNew;
