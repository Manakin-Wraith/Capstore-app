// Importing React and necessary dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { loginUser } from '../Actions/homeActions'; // Importing the login action
import { useFormik } from 'formik';
import './HomePage.css'; // Importing the styles for the HomePage

// HomePage component responsible for displaying the home page and login form
const HomePage = ({ loginUser, user }) => {
  // Accessing the login function from the AuthContext
  const { login } = useAuth();

  // Formik for login form
  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      // Dispatch the loginUser action
      loginUser(values);
      // Use your existing login logic if needed
      login(values);
    },
  });

  // Rendering the HomePage component
  return (
    <div className="home-page-container">
      <h1 className="page-title">Hello Shopper!</h1>
      {user ? (
        // Greeting for authenticated user
        <p className="user-greeting">Hello, {user.username}! You are ready to shop.</p>
      ) : (
        // Login form for unauthenticated user
        <>
          <div className="form-section">
            <h2 className="form-title">Login</h2>
            <form onSubmit={loginFormik.handleSubmit} className="form">
              {/* Username input field */}
              <label className="form-label">
                Username:
                <input
                  type="text"
                  name="username"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.username}
                  className="form-input"
                />
              </label>
              <br />
              {/* Password input field */}
              <label className="form-label">
                Password:
                <input
                  type="password"
                  name="password"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.password}
                  className="form-input"
                />
              </label>
              <br />
              {/* Login button */}
              <button type="submit" className="submit-button">
                Login
              </button>
            </form>
          </div>

          {/* Button to navigate to the register page */}
          <div className="register-button-container">
            <p>Don't have an account? </p>
            <Link to="/register" className="register-button">
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

// Mapping user state to props
const mapStateToProps = (state) => ({
  user: state.user.user,
});

// Mapping the loginUser action to props
const mapDispatchToProps = {
  loginUser,
};

// Connecting the component to the Redux store and exporting it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
