import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  console.log('ProtectedRoute', currentUser);

  return currentUser ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
