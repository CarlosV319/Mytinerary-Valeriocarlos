const initialState = {
  usuario: { email: "", img: "", name: "" },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        usuario: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        usuario: null,
      };
    default:
      return state;
  }
};
export default authReducer;
