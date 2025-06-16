import React from 'react';
import { useSelector } from 'react-redux';

function MessageDisplay() {
  const message = useSelector((state) => state.message.message);

  return (
    <div>
      <h2>Message Display:</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageDisplay;
