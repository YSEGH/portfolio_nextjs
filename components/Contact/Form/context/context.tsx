import React, { useReducer } from "react";
import { formReducer } from "./reducers";
import { Form, FormState } from "../types";

export const FormContext = React.createContext(null);

const { Provider } = FormContext;

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  formData: Form;
};

export const FormProvider: React.FC<Props> = ({ children, formData }) => {
  const initialState: FormState = {
    ...formData,
    errors: [],
    success: false,
    loading: false,
  };
  const [form, dispatch] = useReducer(formReducer, initialState);
  const state = { ...form, dispatch: dispatch };
  const value = React.useMemo(() => state, [form]);
  return <Provider value={value}>{children}</Provider>;
};
