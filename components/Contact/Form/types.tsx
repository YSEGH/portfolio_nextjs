export interface Form {
  id: string;
  customClass: string;
  fields: Field[];
  confirmationMessage: any;
  submitButtonLabel: string;
}

export interface FormState extends Form {
  loading: boolean;
  success: boolean;
  errors: FieldError[];
}

export type Field = {
  blockName: string;
  blockType: string;
  id: string;
  label: string;
  name: string;
  required: boolean;
  width: number;
};

export interface FieldError {
  name: string;
  message: string;
}
