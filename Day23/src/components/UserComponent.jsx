
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

export default function UserComponent() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
