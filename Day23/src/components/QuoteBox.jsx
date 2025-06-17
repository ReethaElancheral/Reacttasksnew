
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../actions/quoteActions';

const QuoteBox = () => {
  const dispatch = useDispatch();
  const { loading, quote, error } = useSelector((state) => state.quoteState);

  useEffect(() => {
    dispatch(fetchQuote());
  }, []);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', width: 400 }}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {quote && (
        <>
          <p>"{quote.content}"</p>
          <p>— {quote.author}</p>
        </>
      )}
      <button onClick={handleNewQuote}>Get New Quote</button>
    </div>
  );
};

export default QuoteBox;
