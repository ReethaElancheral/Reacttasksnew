import { useState } from "react";

import "./App.css";
import UserComponent from "./components/userComponent";
import PostComponent from "./components/PostComponent";
import QuoteBox from "./components/QuoteBox";
import UserList from "./components/UserLists";
import WeatherApp from "./components/WeatherApp";
import JokeGenerator from "./components/JokeGenerator";

function App() {
  return (
    <>
      <h2>
        1. Introduction to Middleware: Write a short explanation of what
        middleware is in Redux and its importance.
      </h2>
      <p>
        Middleware in Redux is a way to extend the functionality of Redux before
        the action reaches the reducer. It sits between the dispatching of an
        action and the moment it reaches the reducer. <br />
        <br />
        <strong>Definition: </strong>
        Middleware is a function that gets executed between dispatching an
        action and sending the action to the reducer to modify, delay, or
        perform additional tasks. <br />
        <br />
        <strong>Why Use Middleware in Redux? </strong>
        <br />
        Middleware is mainly used for:
        <br />
        Logging actions for debugging. <br />
        Handling asynchronous operations like API calls.
        <br />
        Modifying or filtering actions before they reach reducers.
      </p>
      <hr />
      <h2>
        3. Basic Middleware Setup: Set up Redux Thunk middleware with the Redux
        store.
      </h2>
      <h2>
        4. Thunk Action Creator: Create a simple asynchronous action that logs
        "Async Action Called".
      </h2>
      <p>Check Log</p>
      <h2>
        8. Multiple Thunks: Write two different Thunk actions, one for fetching
        users and another for fetching posts.
      </h2>
      <h2>
        9. Dispatch Thunk from Component: Use useDispatch to trigger Thunk
        actions from a React component.
      </h2>
      <UserComponent />
      <PostComponent />
      <hr />
      <h2>Mini Project 1: Random Quote Generator </h2>
      <QuoteBox />
      <hr />
      <h2>Mini Project 2: User List with Thunk </h2>
      <UserList />
      <hr />
      <h2 className="project">Mini Project 3: Weather App</h2>
      <WeatherApp />
      <hr />
      <h2 className="project">Mini Project 4: Joke Generator</h2>
      <JokeGenerator/>
    </>
  );
}

export default App;
