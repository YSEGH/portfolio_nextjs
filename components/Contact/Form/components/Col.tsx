import React from "react";
import styles from "../style/index.module.css";
import FieldWrapper from "./FieldWrapper";
import cx from "classnames";
import { Field } from "../types";

type Props = {
  field: Field;
};

const col_class = "form__col";

const Col: React.FC<Props> = ({ field }) => {
  const width_class = `${col_class}--${field.width}`;
  const type_class = `${col_class}--${field.blockType}`;

  return (
    <div
      className={cx(styles.form__col, styles[width_class], styles[type_class])}
    >
      <FieldWrapper field={field} />
    </div>
  );
};

export default Col;
