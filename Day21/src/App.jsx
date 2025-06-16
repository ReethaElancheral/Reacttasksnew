import "./App.css";
import Counter from "./components/Counter";
import CounterNew from "./components/useDispatch";
import UseCounter from "./components/useSelector";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterActions";
import { login, logout } from "./actions/authActions";
import MessageDisplay from "./components/MessageDisplay";
import MessageUpdater from "./components/MessageUpdater";
import TodoApp from "./components/TodoApp";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LoginForm from "./components/LoginForm";

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <h2>
        1. Introduction to Redux: Write a short explanation of what Redux is and
        its importance in state management.{" "}
      </h2>
      <p>
        Redux is a state management library for JavaScript applications,
        commonly used with React. It helps manage global state in a predictable
        way, making it easier to handle complex application data. <br />
        <br />
        <strong>Definition:</strong> <br />
        <br />
        Redux is a predictable state container for JavaScript apps. It
        centralizes application state and enforces strict unidirectional data
        flow. <br />
        <br />
        <strong>Why Use Redux? </strong> <br />
        <br />
        Centralized State Management – Keeps the entire state in one place.{" "}
        <br />
        Predictable State Updates – Uses pure functions (reducers) to update the
        state. <br />
        Easier Debugging – Redux DevTools allow time-travel debugging. <br />
        Better State Sharing – Easily share state across multiple components.
      </p>{" "}
      <br />
      <hr />
      <h2>
        2. Install Redux and React-Redux: Set up Redux using npm install redux
        react redux.{" "}
      </h2>
      <p>npm install redux react-redux. </p>
      <hr />
      <h2>
        3. Create Redux Store: Set up a basic Redux store with an initial state.{" "}
      </h2>
      <p>Check Console</p>
      <hr />
      <h2>
        4. Action Creators: Write simple action creators to increment and
        decrement a counter.{" "}
      </h2>
      <h2>
        5. Reducers: Implement a reducer function to handle increment and
        decrement actions.{" "}
      </h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h2>
        7. Access Store Data: Use the useSelector hook to access the counter
        value in a React component.{" "}
      </h2>
      <h2>
        8. Dispatch Actions: Use the useDispatch hook to trigger actions from
        button clicks.{" "}
      </h2>
      <h2>
        9. Multiple Reducers: Combine two reducers into a single store (e.g.,
        Counter and Auth reducers).{" "}
      </h2>
      <div style={{ padding: 20 }}>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        <h2>User is {isLoggedIn ? "Logged In" : "Logged Out"}</h2>
        <button onClick={() => dispatch(login())}>Login</button>
        <button onClick={() => dispatch(logout())} style={{ marginLeft: 10 }}>
          Logout
        </button>
      </div>
      <hr />
      <h2>
        10. Initial State from Props: Initialize state from component props in
        the reducer.{" "}
      </h2>
      <Counter initialValue={10} />
      <hr />
      <h2>11. Redux DevTools: Enable Redux DevTools for debugging. </h2>
      <hr />
      <h2>
        12. Middleware Setup: Set up a simple logger middleware with Redux.{" "}
      </h2>
      <p>Check Log</p>
      <h2>
        13. Global Message State: Create a simple app that displays and updates
        a global message across components.
      </h2>
      <div style={{ padding: 20 }}>
        <h3>Global Message App</h3>
        <MessageDisplay />
        <hr />
        <MessageUpdater />
      </div>
      <hr />
      <h2>Mini Project 1: Counter App </h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <hr />
      <h2>Mini Project 2: Todo List </h2>
      <TodoApp />
      <hr />
      <h2>Mini Project 3: Theme Switcher</h2>
      <ThemeSwitcher />
      <hr />
      <h2>Mini Project 4: Authentication App </h2>
      <LoginForm/>
    </>
  );
}

export default App;
