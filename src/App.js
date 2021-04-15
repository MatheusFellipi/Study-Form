import React from "react";
import {useState } from "react";
import "./App.css";

function useFormState({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  function handleChanger(event) {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }
  return {
    values,
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
  const [errors, setErrors] = useState({});
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
            setErrors(validate(formState.values));
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
            {errors.email && (
              <span className="formField_error">{errors.email}</span>
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
            {errors.senha && (
              <span className="formField_error">{errors.senha}</span>
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
