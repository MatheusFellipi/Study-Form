import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  height: 100vh;
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
  height: 100vh;
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
  bottom: 0px;
`;
export const Link = styled.a`
  margin: 1rem;
`;
export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
