// src/reducers/registerReducer.js
const initialState = {
    // Define any relevant state for the register page
  };
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        // Add logic here if needed
        return state;
  
      // Add more cases as needed
  
      default:
        return state;
    }
  };
  
  export default registerReducer;
  