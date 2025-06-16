import { useSelector } from 'react-redux';

const UseCounter = ()=>{
     const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter Value from Store: {counter}</h1>
    </div>
  );
}

export default UseCounter;
