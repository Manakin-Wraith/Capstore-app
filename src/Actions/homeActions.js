// Action creator to handle user login on the home page
export const loginUser = (userData) => ({
  type: 'LOGIN_USER',
  payload: userData,
});

// You can add more home page-related actions here as needed