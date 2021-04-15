import React from "react";
import {useState } from "react";
import "./App.css";

function useFormState({ initialValues }) {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  function handleChanger(event) {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }
  function validateValues(values) {
    setErrors(validate(values))
  }
  return {
    values,
    erros,
    setErrors,
    validateValues,
    handleChanger,
  };
}
function validate(values) {
  const errors = {};

  if (!values.email.includes("@")) {
    errors.email = "Please, insert a valid name";
  }
  if (!values.senha.length < 8) {
   errors.senha="Please, insert a valid password"
  }

  
  return errors;
}
function App() {
  const formState = useFormState({
    initialValues: {
      email: "teste@",
      senha: "teste",
    },
  });


  return (
    <main>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            formState.validateValues(formState.values);
            console.log(formState.values);
            alert("Olha o console!");
          }}
        >
          <div>
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              placeholder="entre com email"
              name="email"
              id="email"
              onChange={formState.handleChanger}
              value={formState.values.email}
            />
            {formState.errors.email && (
              <span className="formField_error">{formState.errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input
              type="text"
              placeholder="entre com senha"
              name="senha"
              id="senha"
              onChange={formState.handleChanger}
              value={formState.values.senha}
            />
            {formState.errors.senha && (
              <span className="formField_error">{formState.errors.senha}</span>
            )}
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
