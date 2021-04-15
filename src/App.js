import React from "react";
import useFormState from './services/formState'
import "./App.css";

function App() {
  const formState = useFormState({
    initialValues: {
      email: "teste teste.com",
      senha: "teste",
    },
    validate: function(values) {
      const errors = {};

      if (!values.email.includes("@")) {
        errors.email = "Please, insert a valid name";
      }
      if (values.senha.length < 8) {
        errors.senha = "Please, insert a valid password";
      }

      return errors;
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
              onBlur={formState.handleBlur}
              onChange={formState.handleChanger}
              value={formState.values.email}
            />
            {formState.touched.email && formState.errors.email && (
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
              onBlur={formState.handleBlur}
              onChange={formState.handleChanger}
              value={formState.values.senha}
            />
            {formState.touched.senha && formState.errors.senha && (
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
