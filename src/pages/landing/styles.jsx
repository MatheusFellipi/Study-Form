import styled from "styled-components";
export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 90vw;
  background-color: #ffffff;
  border-radius: 2rem;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    height: 130vh;
    border-radius: 0px;
  }
 
`;
export const Fomulario = styled.div`
  padding: 3rem;
`;
export const Informacao = styled.div`
  width: 100%;
  height: 90%;
`;
export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin:-10px 25px 0px 30px;
  height: 100%;
  @media (max-width: 950px) {
    margin:-10px 10px 0px 10px;

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
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -18px -30px 0 0;
  @media (max-width: 950px) {
    margin: -50px -30px 0 0;
  }
  @media (max-width: 950px) {
    margin: -50px -30px 0 0;
  }
`;
export const FooterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5rem;
  @media (max-width: 600px) {
    margin-right: 2rem;
  }
  @media (max-width: 450px) {
    display: flex;
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
