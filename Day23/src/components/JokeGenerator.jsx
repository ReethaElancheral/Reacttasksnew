
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../actions/jokeActions';


const JokeGenerator = () => {
  const dispatch = useDispatch();
  const { loading, joke, error } = useSelector(state => state.jokeState);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchJoke());
  };

  return (
    <div className="joke-container">
      <h2>Random Joke Generator 😂</h2>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {joke && !loading && (
        <div className="joke-box">
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </div>
      )}

      <button onClick={handleRetry} className="retry-btn">
        Try Again
      </button>
    </div>
  );
};

export default JokeGenerator;
