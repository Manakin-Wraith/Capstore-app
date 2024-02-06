import React from 'react';
import { connect } from 'react-redux';
import { useAuth } from './AuthContext';
import { registerUser } from '../Actions/registerActions'; // Make sure this path is correct
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './RegisterPage.css';

// RegisterPage component
const RegisterPage = () => {
  const { register } = useAuth();
  const history = useHistory(); // Initialize useHistory

  // Define Yup schema for form validation
  const registrationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  // Formik for registration form with Yup validation
  const registerFormik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registrationSchema, // Use Yup schema for validation
    onSubmit: async (values) => {
      // Call the register function from useAuth
      await register(values);
      // Navigate to the home page after successful registration
      history.push('/');
    },
  });

  return (
    <div className="register-page-container">
      <h2 className="form-title">Register</h2>

      {/* Display form-level error */}
      {registerFormik.status && <div className="error-message">{registerFormik.status}</div>}

      {/* Registration form */}
      <form onSubmit={registerFormik.handleSubmit} className="form">

        {/* First Name */}
        <div className="form-group">
          <label className="form-label">
            First Name:
            <input
              type="text"
              name="firstName"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.firstName}
              className="form-input"
            />
          </label>
          {/* Display validation error if any */}
          {registerFormik.errors.firstName && <div className="error-message">{registerFormik.errors.firstName}</div>}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label className="form-label">
            Last Name:
            <input
              type="text"
              name="lastName"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.lastName}
              className="form-input"
            />
          </label>
          {/* Display validation error if any */}
          {registerFormik.errors.lastName && <div className="error-message">{registerFormik.errors.lastName}</div>}
        </div>

        {/* Username */}
        <div className="form-group">
          <label className="form-label">
            Username:
            <input
              type="text"
              name="username"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.username}
              className="form-input"
            />
          </label>
          {/* Display validation error if any */}
          {registerFormik.errors.username && <div className="error-message">{registerFormik.errors.username}</div>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.email}
              className="form-input"
            />
          </label>
          {/* Display validation error if any */}
          {registerFormik.errors.email && <div className="error-message">{registerFormik.errors.email}</div>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label className="form-label">
            Password:
            <input
              type="password"
              name="password"
              onChange={registerFormik.handleChange}
              value={registerFormik.values.password}
              className="form-input"
            />
          </label>
          {/* Display validation error if any */}
          {registerFormik.errors.password && <div className="error-message">{registerFormik.errors.password}</div>}
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

// Connect the component to Redux
const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
