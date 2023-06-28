import axios from "axios";

const sendForm = async (form, dispatch) => {
  dispatch({
    type: "SEND_FORM_REQUEST",
  });
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`,
      form
    );
    dispatch({
      type: "SEND_FORM_SUCCESS",
    });
  } catch (error) {
    let errors = error.response.data.errors[0].data.map((error) => {
      return JSON.parse(error.message);
    });
    dispatch({
      type: "SEND_FORM_ERROR",
      data: errors,
    });
  }
};

const setFormError = (field, dispatch) => {
  dispatch({
    type: "SET_FORM_ERROR",
    data: field,
  });
};

const resetForm = (dispatch) => {
  dispatch({
    type: "RESET_FORM",
  });
};

export { sendForm, resetForm, setFormError };
