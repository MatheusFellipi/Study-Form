import styled from "styled-components";
export const Content = styled.main`
  display: flex;
  height: 90vh;
  width: 90vw;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Fomulario = styled.div`
  padding: 5rem;
`;
export const Informacao = styled.div`
  width: 50vw;
  height: 90%;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 6rem;
`;
export const Footer = styled.footer`
  display: flex;
  justify-content:flex-end;
  margin-bottom: -10px;
`;
export const Link = styled.a`
  margin: 1rem;
`;
export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
export const Errors = styled.span`
  color: red;
  font-size: 14px;
`;
export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  text-align: justify;
  height: 100%;
`;
