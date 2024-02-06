// Define the initial state for the user-related part of the Redux store
const initialState = {
  user: null, // or any default user state
};

// Define the userReducer function, which handles actions related to user state
const userReducer = (state = initialState, action) => {
  // Use a switch statement to determine how to update the state based on the action type
  switch (action.type) {
    // Case for setting the user
    case 'SET_USER':
      // Return a new state object with the user property updated based on the action payload
      return { ...state, user: action.payload };

    // Add more cases as needed for different actions

    // Default case returns the current state if the action type is not recognized
    default:
      return state;
  }
};

// Export the userReducer function to be used in the rootReducer
export default userReducer;
