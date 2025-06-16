import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../actions/userActions'; 

export default function UserRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userState.users);

  const handleRegister = () => {
    if (name.trim() && email.trim()) {
      dispatch(addUser({ name, email }));
      setName('');
      setEmail('');
    }
  };

  const handleRemove = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="container">
      <h2>👤 User Registration</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>

      <h3>📋 Registered Users</h3>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <button onClick={() => handleRemove(user.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
