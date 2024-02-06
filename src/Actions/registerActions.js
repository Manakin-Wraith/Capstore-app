// Action creator to handle user registration
export const registerUser = (userData) => ({
  type: 'REGISTER_USER',
  payload: userData,
});

// You can add more register page-related actions here as needed