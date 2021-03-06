import { useState, useEffect } from "react";

export default function formState({ initialValues, validate }) {
  const [touched, setTouchedField] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);


  function handleChanger(event) {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;
    if (fieldName !== " ") {
      setValues({
        ...values,
        [fieldName]: value,
      });
    }
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute("name");
    if (fieldName !== " ") {
      setTouchedField({
        ...touched,
        [fieldName]: true,
      });
    }
    console.log("coloca o atributo name na tag input");
  }
  function validateValues(values) {
    setErrors(validate(values));
  }
  return {
    values,
    errors,
    setErrors,
    validateValues,
    handleChanger,
    touched,
    handleBlur,
  };
}
