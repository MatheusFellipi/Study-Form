import React from "react";
import useFormState from "../../services/formState";

import imgGit from "../../assets/git.png";
import imgInsta from "../../assets/insta.png";
import imgLinkedin from "../../assets/linkedin.png";
import { Input, Button } from "../../components";

import {
  Content,
  Fomulario,
  Informacao,
  Form,
  ContentForm,
  Link,
  Icon,
  Footer,
} from "./styles";

export default function Landing() {
  const formState = useFormState({
    initialValues: {
      nome: "",
      cpf: "",
      telefone: "",
      email: "",
      senha: "",
    },
    validate: function(values) {
      const errors = {};

      validateName(values, errors);
      validateCpf(values, errors);
      validateTelefone(values, errors);
      validateEmail(values, errors);
      validateSenha(values, errors);

      return errors;
    },
  });

  function validateName(values, errors) {
    let regex = /^[A-Za-z áàãâäéèêëíìîïóòôõöúùûü]{2,30}$/;
    if (!regex.test(values.nome)) {
      return (errors.nome = "insere um nome ate 30 caractere");
    }
  }
  function validateCpf(values, errors) {
    let regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}|[0-9]{11}$/; //eslint-disable-line
    if (!regex.test(values.cpf)) {
      return (errors.cpf = "insere o cpf valido");
    }
  }
  function validateTelefone(values, errors) {
    let regex = /^((\(\d{2}\))|(\d{2}))[ ]?[9]?\d{4}[\-]?\d{4}$/; //eslint-disable-line
    if (!regex.test(values.telefone)) {
      return (errors.telefone =
        "insere o telefone valido (xx) xxxxxxxxx ou (xx)xxxxxxxxx");
    }
  }
  function validateEmail(values, errors) {
    let regex = /^[a-zA-Z]{1}[a-zA-Z0-9\_\.\-]*[@]{1}[a-zA-Z]{3,}\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2}){0,1}$/; //eslint-disable-line
    if (!regex.test(values.email)) {
      return (errors.email = "insere o email valido ");
    }
  }
  function validateSenha(values, errors) {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //eslint-disable-line
    if (!regex.test(values.senha)) {
      return (errors.senha =
        "insere um senha valida mínimo 8 caractere 1 maiúsculo e 1 numero ");
    }
  }
  return (
    <Content>
      <Fomulario>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            formState.validateValues(formState.values);
            console.log(formState.values);
          }}
        >
          <ContentForm>
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
          </ContentForm>
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
      <Informacao>
        <div>
          <p>
            Esse formulário e so para estudo ele não enviar a informação para
            lugar nenhum fiz aprender com faz um formulário em react a idea do
            código de estudo e do video do dev soltinho{" "}
            <a href="https://www.youtube.com/playlist?list=PLTcmLKdIkOWmiWQae8SUFIhf-3Gs2XyYv">
              engenharia reversa
            </a>{" "}
            usei como forma de estudo para realizar o formulário, com validações
            o regex da para os campos.
          </p>
        </div>
        <Footer>
          <Link href="https://www.instagram.com/Mathe_Fellipi/">
            <Icon src={imgInsta} alt="" />
          </Link>
          <Link href="https://www.linkedin.com/in/matheusfellipiribeiro/">
            <Icon src={imgLinkedin} alt="" />
          </Link>
          <Link href="https://github.com/MatheusFellipi/Study-Form">
            <Icon src={imgGit} alt="" />
          </Link>
        </Footer>
      </Informacao>
    </Content>
  );
}
