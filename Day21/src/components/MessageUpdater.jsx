import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../actions/messageActions';

function MessageUpdater() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(setMessage(input));
    setInput('');
  };

  return (
    <div>
      <h2>Update Message:</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new message"
      />
      <button onClick={handleUpdate} style={{ marginLeft: 10 }}>
        Update
      </button>
    </div>
  );
}

export default MessageUpdater;
