import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 300;
  margin-top: 1.5rem;
`;
export const Input = styled.input`
  width: 30rem;
  height: 2rem;
  margin-top: 0.5rem;
  @media (max-width: 600px) {
    width: 20rem;
    height: 2rem;
  }
`;
