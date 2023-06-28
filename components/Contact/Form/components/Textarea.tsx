import React, { memo, useEffect, useRef } from "react";
import { resizeTextArea } from "../utils";
import { Field } from "../types";

type Props = {
  setFocus: Function;
  setError: Function;
  field: Field;
  success: boolean;
};

const TextArea: React.FC<Props> = ({ setFocus, setError, field, success }) => {
  const textAreaRef = useRef(null);

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = (e) => {
    if (!e.target.value) {
      setFocus(false);
    }
  };

  const onChangeHandler = () => {
    setError();
    resizeTextArea(textAreaRef.current);
    if (textAreaRef.current.value) {
      setFocus(true);
      return;
    }
    setFocus(false);
  };

  useEffect(() => {
    if (textAreaRef.current.value) {
      setFocus(true);
    }
    if (success) {
      textAreaRef.current.value = "";
      resizeTextArea(textAreaRef.current, true);
      setFocus(false);
    }
    return () => {};
  }, [success]);

  return (
    <textarea
      className={``}
      spellCheck="false"
      ref={textAreaRef}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      name={field.name}
      rows={1}
    />
  );
};

export default memo(TextArea);
