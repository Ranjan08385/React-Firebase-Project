const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "login error"
      };
    case "LOGIN_SUCCESS":
      console.log("Login success");

    default:
      return state;
  }
};

export default authReducer;
