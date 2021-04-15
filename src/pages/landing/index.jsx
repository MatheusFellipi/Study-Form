import React from "react";
import useFormState from "../../services/formState";

import { Input, Button } from "../../components";

import { Content, Fomulario, Informacao, Form, ContentForm } from "./styles";

export default function Landing() {
  const formState = useFormState({
    initialValues: {
      nome: "",
      email: "",
      senha: "",
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
    <Content>
      <Informacao></Informacao>
      <Fomulario>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Content_Form>
            <Input
              label="Nome"
              type="text"
              placeholder="entre com nome"
              name="nome"
              id="nome"
              handleBlur={formState.handleBlur}
              handleChanger={formState.handleChanger}
              value={formState.values.nome}
            />
            {formState.touched.nome && formState.errors.nome && (
              <span className="formField_error">{formState.errors.nome}</span>
            )}
          </Content_Form>
          <ContentForm>
            <Input
              type="text"
              label="Cpf"
              placeholder="entre com cpf"
              name="cpf"
              id="cpf"
              handleBlur={formState.handleBlur}
              handleChanger={formState.handleChanger}
              value={formState.values.cpf}
            />
            {formState.touched.cpf && formState.errors.cpf && (
              <span className="formField_error">{formState.errors.cpf}</span>
            )}
          </ContentForm>
          <ContentForm>
            <Input
              type="text"
              label="Telefone"
              placeholder="entre com telefone"
              name="telefone"
              id="telefone"
              handleBlur={formState.handleBlur}
              handleChanger={formState.handleChanger}
              value={formState.values.telefone}
            />
            {formState.touched.telefone && formState.errors.telefone && (
              <span className="formField_error">
                {formState.errors.telefone}
              </span>
            )}
          </ContentForm>

          <ContentForm>
            <Input
              type="text"
              label="E_mail"
              placeholder="entre com email"
              name="email"
              id="email"
              handleBlur={formState.handleBlur}
              handleChanger={formState.handleChanger}
              value={formState.values.email}
            />
            {formState.touched.email && formState.errors.email && (
              <span className="formField_error">{formState.errors.email}</span>
            )}
          </ContentForm>
          <ContentForm>
            <Input
              type="text"
              label="Senha"
              placeholder="entre com senha"
              name="senha"
              id="senha"
              handleBlur={formState.handleBlur}
              handleChanger={formState.handleChanger}
              value={formState.values.senha}
            />
            {formState.touched.senha && formState.errors.senha && (
              <span className="formField_error">{formState.errors.senha}</span>
            )}
          </ContentForm>

          <div>
            <Button type="submit" name="CADASTRO " />
          </div>
        </Form>
      </Fomulario>
    </Content>
  );
}
