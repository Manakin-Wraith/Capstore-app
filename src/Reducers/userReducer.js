// src/reducers/userReducer.js
const initialState = {
    user: null, // or any default user state
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
  
      // Add more cases as needed
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  