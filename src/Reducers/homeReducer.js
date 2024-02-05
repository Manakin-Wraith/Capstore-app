// src/reducers/homeReducer.js
const initialState = {
    // Define any relevant state for the home page
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        // Add logic here if needed
        return state;
  
      // Add more cases as needed
  
      default:
        return state;
    }
  };
  
  export default homeReducer;
  