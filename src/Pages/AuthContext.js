// AuthContext.js
import React, { createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/userActions';

const AuthContext = createContext();

const AuthProvider = ({ children, setUser }) => {
  const login = (userData) => {
    // Implement your login logic and dispatch the setUser action
    setUser(userData);
  };

  const register = (userData) => {
    // Implement your registration logic and dispatch the setUser action
    setUser(userData);
  };

  const logout = () => {
    // Implement logout logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const mapDispatchToProps = {
  setUser,
};

const ConnectedAuthProvider = connect(null, mapDispatchToProps)(AuthProvider);

export { ConnectedAuthProvider as AuthProvider };

export const useAuth = () => {
  return useContext(AuthContext);
};
