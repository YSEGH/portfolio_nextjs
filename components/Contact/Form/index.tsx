import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Form as FormType } from "./types";
import Form from "./components/Form";
import { FormProvider } from "./context/context";
import Toast from "./components/Toast";

interface Props {
  form: FormType;
}

const FormElement: React.FC<Props> = ({ form }) => {
  return (
    <FormProvider formData={form}>
      <Form />
      <Toast />
    </FormProvider>
  );
};

export default FormElement;
