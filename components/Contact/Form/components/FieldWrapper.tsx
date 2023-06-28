import React, { useEffect, useState, useContext } from "react";
import styles from "../style/index.module.css";
import cx from "classnames";
import { getFieldComponent } from "../utils";
import { FormContext } from "../context/context";
import { setFormError } from "../context/actions";
import { Field } from "../types";

type Props = {
  field: Field;
};

const inputWrapperClass = "form__input_wrapper";

const FieldWrapper: React.FC<Props> = ({ field }) => {
  const type_class = `${inputWrapperClass}--${field.blockType}`;
  const state = useContext(FormContext);
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(null);

  // Update fields error
  const setErrorHandler = () => {
    if (error) {
      setFormError(field.name, state.dispatch);
    }
  };

  // Props for fields component
  const propsField = {
    setFocus: setFocus,
    setError: setErrorHandler,
    field: field,
    success: state.success,
  };

  useEffect(() => {
    let fieldError: boolean = state.errors.find(
      (error) => error.name === field.name
    );
    if (fieldError) {
      setError(fieldError);
    } else {
      setError(null);
    }
    return () => {};
  }, [state.errors]);

  return (
    <div data-name={field.name} className={cx(styles.form__field_wrapper)}>
      <h4
        className={cx(styles.form__field_title, {
          [styles.is_active]: focus,
          [styles.is_error]: error,
        })}
      >
        {field.label}
        {field.required && (
          <span className={styles.form__field_required}>*</span>
        )}
      </h4>
      <div
        className={cx(styles.form__input_wrapper, {
          [styles[type_class]]: true,
          [styles.is_active]: focus,
          [styles.is_error]: error,
        })}
      >
        {getFieldComponent(field, propsField)}
      </div>
      <div
        className={cx(styles.form__field_message, {
          [styles.is_error]: error,
        })}
      >
        {error && <p className={``}>{error.message}</p>}
      </div>
    </div>
  );
};

export default FieldWrapper;
