// src/reducers/helpReducer.js
const initialState = {
    // Define any relevant state for the help page
  };
  
  const helpReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NAVIGATE_BACK_TO_CART':
        // Add logic here if needed
        return state;
  
      // Add more cases as needed
  
      default:
        return state;
    }
  };
  
  export default helpReducer;
  