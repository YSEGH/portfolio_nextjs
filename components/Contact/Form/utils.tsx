import Input from "./components/Input";
import Textarea from "./components/Textarea";

export const getFormData = (fields: any[], formData: FormData) => {
  let submissionData = [];
  fields.forEach((field) => {
    submissionData.push({
      field: field.name,
      value: formData.get(field.name),
      title: field.label,
      required: field.required,
    });
  });
  return submissionData;
};

export const resizeTextArea = (
  textArea: HTMLTextAreaElement,
  reset: boolean = false
) => {
  if (reset) {
    textArea.style.height = "30px";
    return;
  }
  textArea.style.height = "auto";
  textArea.style.height = textArea.scrollHeight + "px";
};

export const getFieldComponent = (field, props) => {
  switch (field.blockType) {
    case "text":
    case "email":
      return <Input {...props} />;
    case "textarea":
      return <Textarea {...props} />;
    default:
      return <div></div>;
  }
};
