import styled from "styled-components";
export const Content = styled.main`
  display: flex;
  height: 90vh;
  width: 90vw;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Fomulario = styled.div`
  padding: 3rem;
`;
export const Informacao = styled.div`
  width: 100%;
  height: 90%;
  margin-left:10rem;
  @media (max-width: 999px) {
    margin-left:0;

  }
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
  justify-content: flex-end;
  align-items: center;
  margin-bottom: -10px;
`;
export const FooterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5rem;
  @media (max-width: 600px) {
    margin-right: 2rem;
  }
`;
export const Link = styled.a`
  margin: 1rem;
  @media (max-width: 600px) {
    margin: 0.5rem;
  }
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
  @media (max-width: 600px) {
    width: 184%;
  }
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
