import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../actions/authActions';

function LoginForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
      setUsername('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: 20 }}>
      <h2>Authentication</h2>
      {auth.isLoggedIn ? (
        <>
          <p>Welcome, <strong>{auth.username}</strong>!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin} style={{ marginLeft: 10 }}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default LoginForm;
