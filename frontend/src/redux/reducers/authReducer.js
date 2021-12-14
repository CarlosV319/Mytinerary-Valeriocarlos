const initialState = {
  usuario: { email: "", urlImage: "", name: "", token: "" },
  errores: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("urlImage", action.payload.urlImage);
      return {
        ...state,
        usuario: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        usuario: "",
      };
    default:
      return state;
  }
};
export default authReducer;
