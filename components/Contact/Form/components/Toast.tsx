import React, { useContext, useEffect } from "react";
import { FormContext } from "../context/context";
import { toast, ToastContainer } from "react-toastify";

const Toast = () => {
  const state = useContext(FormContext);

  useEffect(() => {
    if (state.success) {
      toast.success(state.confirmationMessage, {
        position: "bottom-center",
        theme: "colored",
      });
    }
    return () => {};
  }, [state.success]);

  return <ToastContainer />;
};

export default Toast;
