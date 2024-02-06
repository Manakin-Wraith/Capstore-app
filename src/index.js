// Import necessary dependencies from React and Redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Import the root reducer that combines all individual reducers
import rootReducer from './Reducers/store';

// Import global styles
import './index.css';

// Import the main App component
import App from './App';

// Import a utility function for reporting web vitals
import reportWebVitals from './reportWebVitals';

// Create the Redux store by passing the root reducer to createStore
const store = createStore(rootReducer);

// Render the main application wrapped in the Provider component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results or send to an analytics endpoint using the reportWebVitals utility
reportWebVitals();
