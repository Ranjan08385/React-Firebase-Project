const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login error");
      return {
        ...state,
        authError: "login error"
      };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("Logout Success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup Success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;
