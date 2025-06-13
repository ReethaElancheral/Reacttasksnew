import { Navigate } from 'react-router-dom';

const withAuthProtection = (Component) => {
  const isAuthenticated = localStorage.getItem('authToken');
  return isAuthenticated ? Component : <Navigate to="/" />;
};

export default withAuthProtection;