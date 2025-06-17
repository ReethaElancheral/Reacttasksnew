import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();

  
  const { loading, data: users, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <ul>
      {users && users.length > 0 ? (
        users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </ul>
  );
};

export default UserList;
