// Importing necessary dependencies
import React, { createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../Actions/userAction'; // Importing setUser action

// Creating the authentication context
const AuthContext = createContext();

// AuthProvider component to manage user authentication state
const AuthProvider = ({ children, setUser }) => {
  // Function to handle user login
  const login = (userData) => {
    // Implement your login logic and dispatch the setUser action
    setUser(userData);
  };

  // Function to handle user registration
  const register = (userData) => {
    // Implement your registration logic and dispatch the setUser action
    setUser(userData);
  };

  // Function to handle user logout
  const logout = () => {
    // Implement logout logic
    setUser(null);
  };

  // Providing the authentication context to the children components
  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Mapping setUser action to props
const mapDispatchToProps = {
  setUser,
};

// Connecting AuthProvider to the Redux store
const ConnectedAuthProvider = connect(null, mapDispatchToProps)(AuthProvider);

// Exporting the connected AuthProvider component
export { ConnectedAuthProvider as AuthProvider };

// Custom hook to access the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
