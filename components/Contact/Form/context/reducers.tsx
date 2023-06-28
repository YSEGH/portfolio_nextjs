const formReducer = (state, action) => {
  switch (action.type) {
    case "SEND_FORM_REQUEST":
      return { ...state, loading: true, success: false };
    case "SEND_FORM_SUCCESS":
      return { ...state, loading: false, success: true, errors: [] };
    case "SEND_FORM_ERROR":
      return {
        ...state,
        loading: false,
        errors: action.data,
        success: false,
      };
    case "SET_FORM_ERROR":
      let errors = state.errors.filter((error) => error.name !== action.data);

      return { ...state, errors: errors };
    case "RESET_FORM":
      return { ...state, success: false };
    default:
      return state;
  }
};

export { formReducer };
